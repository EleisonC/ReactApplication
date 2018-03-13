import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { link } from 'react-router-dom';
import * as recipes from '../../../actions/recipeActions';


class EditRecipe extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            recipe_name:this.props.recipe["recipe_name"],
            instructions:this.props.recipe["instructions"],
            category_id:this.props.match.params['categoryId'],
            recipe_id:this.props.match.params['recipeId']
        }
    }
    componentDidMount(){
        const categoryId = this.props.match.params['categoryId']
        const recipeId = this.props.match.params['recipeId']
        this.props.actions.ViewRecipe(categoryId,recipeId)
        this.setState({
                    recipe_name:this.props.recipe["recipe_name"],
                    instructions:this.props.recipe["instructions"]
                })
    }
    handleInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]: value});
    }
    handleEdit = (e) =>{
        e.preventDefault()
        const recipe_details = this.state
        this.props.actions.editRecipe(recipe_details).then(() =>{
            this.props.history.push(`/category/${this.state.category_id}/recipe/${this.state.recipe_id}`)
        })
    }
    returnToRcipe = () => {
        this.props.history.push(`/category/${this.state.category_id}/recipe/${this.state.recipe_id}`)
    }
    render (){
        const {recipe_name, instructions} = this.state;
        return (
        <div id="addRecipe">
        <div id="addRec" className="card mt-5" >
           <h4 className="card-header text-center">Edit Recipe</h4>
           <div className="card-body">
               <form onSubmit={this.handleEdit}>
                   <div className="m-5">
                       <div className="form-group ">
                           <label>Recipe Name</label>      
                           <input type="text" name ="recipe_name"  className="form-control"
                           onChange={this.handleInput} value={recipe_name}
                           />  
                       </div>
                       <div className="form-group">
                               <label>Preparation Instructions</label>
                               <textarea className="form-control" rows="4" cols="50" name="instructions" 
                               onChange={this.handleInput} value={instructions}
                               ></textarea>
                       </div>
                       <button id="addBut" type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                       <button id="addBut" onClick={this.returnToRcipe} className="btn btn-danger btn-lg btn-block">Cancel</button>
                   </div>
               </form>
           </div>
       </div>
       </div>
        );
    }
}
function mapStateToProps (state, ownprops) {
    return{
        recipe: state.recipes
    };
}
function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators(recipes, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditRecipe);