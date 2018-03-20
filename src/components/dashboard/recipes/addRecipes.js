import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipe from '../../../actions/recipeActions';

class CreateRecipe extends React.Component {
    // this state is local state for the commponent
    state = {
      recipe_name: '',
      instructions: '',
      category_id: this.props.match.params.id,
      category_name: this.props.match.params.name,
    }
    // handle input of data as one inputs so as to update local state
    handleInput = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }
    // handle the creation when submit is clicked
    handleCreate = (e) => {
      e.preventDefault();
      const recipe_details = this.state;
      this.props.actions.AddRecipe(recipe_details).then(() => {
        this.props.history.push(`/${this.props.match.params.name}/${this.props.match.params.id}/recipies`);
      },
      );
    }
    returnViewRecipes = () => {
      this.props.history.push(`/${this.props.match.params.name}/${this.props.match.params.id}/recipies`);
    }
    render() {
      const { recipe_name, instructions, category_name } = this.state;
      return (
        <div id="addRecipe">
          <div id="addRec"className="card mt-5" >
            <h4 className="card-header text-center">Add Recipe</h4>
            <div className="card-body">
              <form onSubmit={this.handleCreate}>
                <div className="m-5">
                  <div className="form-group ">
                    <label>Recipe Name</label>
                    <input
                      type="text"
                      name="recipe_name"
                      className="form-control"
                      onChange={this.handleInput}
                      value={recipe_name}
                    />
                  </div>
                  <div id="form"className="form-group">
                    <label>Category name:</label>
                    <p className="from-control">{category_name}</p>
                  </div>
                  <div className="form-group">
                    <label>Preparation Instructions</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      cols="50"
                      name="instructions"
                      onChange={this.handleInput}
                      value={instructions}
                    >
                    </textarea>
                  </div>
                  <button id="addBut" type="submit" className="btn btn-primary btn-lg btn-block">CREATE</button>
                  <button id="addBut" onClick={this.returnViewRecipes} className="btn btn-danger btn-lg btn-block">CANCEL</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipe, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(CreateRecipe);
