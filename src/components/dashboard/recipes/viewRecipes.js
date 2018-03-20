import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as category from '../../../actions/categoryCreation';
import * as recipes from '../../../actions/recipeActions';

class ViewRecipes extends React.Component {
    state = {
      q: '',
      category: this.props.match.params.id,
    }
    componentDidMount() {
      const name = this.props.match.params.name;
      const id = this.props.match.params.id;
      this.props.action.ViewRecipes(id, 1);
    }
    nextPage = (e) => {
      e.preventDefault();
      if (this.props.next_page === null) {
        const page = Number(this.props.previous_page.substr(this.props.previous_page.length - 1)) + 1;
        const id = this.props.match.params.id;
        this.props.action.ViewRecipes(id, page);
      } else {
        const page = this.props.next_page.substr(this.props.next_page.length - 1);
        const id = this.props.match.params.id;
        this.props.action.ViewRecipes(id, page);
      }
    }
    prev_page = (e) => {
      e.preventDefault();
      if (this.props.previous_page === null) {
        const id = this.props.match.params.id;
        this.props.action.ViewRecipes(id, 1);
      } else {
        const page = this.props.previous_page.substr(this.props.previous_page.length - 1);
        const id = this.props.match.params.id;
        this.props.action.ViewRecipes(id, page);
      }
    }
    handledelete = (e) => {
      e.preventDefault();
      const id = this.props.match.params.id;
      this.props.actions.deleteCat(id).then(() => {
        this.props.history.push('/user-page');
        window.location.reload();
      });
    }
    handleInput = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const details = this.state;
      this.props.action.searchRecipe(details);
    }
    render() {
      const name = this.props.match.params.name;
      const id = this.props.match.params.id;
      const { recipes, next_page, previous_page } = this.props;
      const { q } = this.state;
      return (
        <div>
          <div id="categoryR" className="card text-center">
            <div id="categoryheader"className="card-header">
              <h1 id="headRec">{name}</h1>
            </div>
            <div id="categorybody"className="card-body">
              <Link to={`/${name}/${id}/add-recipe`}>
                <button id="categoryRbutton" type="button" className="btn btn-outline-primary">Add Recipe</button>
              </Link>
              <Link to={`/${name}/${id}/edit-category?name=${name}`}>
                <button
                  id="categoryRbutton"
                  type="button"
                  className="btn btn-outline-secondary"
                >Edit Category
                </button>
              </Link>
              <button
                onClick={this.handledelete}
                id="categoryRbutton"
                type="button"
                className="btn btn-outline-danger"
              >Delete Category
              </button>
            </div>
          </div>
          {recipes && recipes.length > 0 ?
            <nav className="navbar navbar-light " id="navRec">
              <form className="form-inline" onSubmit={this.handleSubmit}>
                <input
                  name="q"
                  value={q}
                  onChange={this.handleInput}
                  id="CategorySearch"
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button id="CategorySearchBut" className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </nav>
                : <div> </div>
            }
          {recipes && recipes.length > 0 && next_page === null && previous_page !== null ?
            <div id="paginateRecipies">
              <button onClick={this.prev_page} id="previousButton"type="button" className="btn btn-light">Previous</button>
            </div> : <div> </div>

            }
          {recipes && recipes.length > 0 && next_page !== null && previous_page !== null ?
            <div id="paginateRecipies">
              <button onClick={this.prev_page} id="previousButton"type="button" className="btn btn-light">Previous</button>
              <button
                onClick={this.nextPage}
                id="nextButton"
                type="button"
                className="btn btn-light"
              >Next
              </button>
            </div> : <div> </div>

            }
          {recipes && recipes.length > 0 && next_page !== null && previous_page === null ?
            <div id="paginateRecipies">
              <button
                onClick={this.nextPage}
                id="nextButton"
                type="button"
                className="btn btn-light"
              >Next
              </button>
            </div> : <div> </div>
            }
          <div className="container" id="recipeContainer">
            <div className="row">
              {recipes && recipes.length > 0 ?
                    recipes.map((recipe) =>
                      <div key={recipe.recipe_id}>
                        <div className="col-sm card" id="recipes">
                          <img className="card-img-top" src="https://images.unsplash.com/photo-1422207239328-29f83832206c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f00eac866bbea1b6ab3d19ddb2de6fd&auto=format&fit=crop&w=1279&q=80" alt="Card image cap" />
                          <div className="card-body" id="recipeBody">
                            <h5 className="card-title">{recipe.recipe_name}</h5>
                            <p className="card-text">{recipe.instructions.slice(0, 100)}...</p>
                            <Link id="link" to={`/${name}/${recipe.category}/recipe/${recipe.recipe_id}`}>
                              <button type="button" id="Recipebutton"className="btn btn-outline-primary">
                                    More Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>)
                        :
                    <div id="Norecipie"className="jumbotron jumbotron-fluid">
                      <div className="container">
                        <h1 className="display-4">No Recipes Here </h1>
                      </div>
                    </div>}
            </div>
          </div>
        </div>
      );
    }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(category, dispatch),
    action: bindActionCreators(recipes, dispatch),
  };
}
function mapStateToProps(state, ownprops) {
  return {
    recipes: state.recipes.recipes,
    next_page: state.recipes.next_page,
    previous_page: state.recipes.previous_page,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipes);
