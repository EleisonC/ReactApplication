import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as recipes from '../../../actions/recipeActions';

class ViewRecipe extends React.Component {
  componentDidMount() {
    const categoryId = this.props.match.params.categoryId;
    const recipeId = this.props.match.params.recipeId;
    this.props.action.ViewRecipe(categoryId, recipeId);
  }
  // handle the deletion when delete is clicked
    handledelete = () => {
      const categoryId = this.props.match.params.categoryId;
      const recipeId = this.props.match.params.recipeId;
      const category = this.props.match.params.name;
      this.props.action.deleteRecipe(categoryId, recipeId).then(() => {
        this.props.history.push(`/${category}/${categoryId}/recipies`);
      });
    }
    // handle the return to recipes when return to recipes is clicked
    returnToRecipes = () => {
      const categoryId = this.props.match.params.categoryId;
      const category = this.props.match.params.name;
      this.props.history.push(`/${category}/${categoryId}/recipies`);
    }
    render() {
      const categoryId = this.props.match.params.categoryId;
      const recipeId = this.props.match.params.recipeId;
      const { recipe } = this.props;
      return (
        <div id="viewRes">
          <div className="card" id="recipecard">
            <h5 className="card-header">{recipe.recipe_name}</h5>
            <div className="card-body">
              <h5 className="card-title">Instruction For Preparing {recipe.recipe_name}</h5>
              <p className="card-text">{recipe.instructions}</p>
              <Link to={`/category/${categoryId}/recipe/${recipeId}/edit-recipe`} >
                <button
                  id="categoryRbutton"
                  type="button"
                  className="btn btn-outline-secondary"
                >Edit Recipe
                </button>
              </Link>
              <button onClick={this.returnToRecipes} id="returnBut"type="button" className="btn btn-outline-dark">
                        Return To Recipes
              </button>
              <button
                onClick={this.handledelete}
                id="Resbutton"
                type="button"
                className="btn btn-outline-danger"
              >Delete Recipe
              </button>
            </div>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state, ownprops) {
  return {
    recipe: state.recipes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(recipes, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipe);
