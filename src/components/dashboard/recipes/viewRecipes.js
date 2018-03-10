import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as category from '../../../actions/categoryCreation'
import * as recipes from '../../../actions/recipeActions' 

class ViewRecipes extends React.Component{

    componentDidMount(){
        const name = this.props.match.params['name']
        const id = this.props.match.params['id']
        this.props.action.ViewRecipes(id,1)
    }
    nextPage = (e) => {
        e.preventDefault()
        if (this.props.next_page === null) {
            const page = Number(this.props.previous_page.substr(this.props.previous_page.length - 1)) + 1
            const id = this.props.match.params['id']
            this.props.action.ViewRecipes(id,page)
        }else{
            const page = this.props.next_page.substr(this.props.next_page.length - 1)
            const id = this.props.match.params['id']
            this.props.action.ViewRecipes(id,page)
        }
    }
    prev_page = (e) => {
        e.preventDefault()
        if (this.props.previous_page === null) {
            const id = this.props.match.params['id']
            this.props.action.ViewRecipes(id,1)
        }else{
            const page = this.props.previous_page.substr(this.props.previous_page.length - 1)
            const id = this.props.match.params['id']
            this.props.action.ViewRecipes(id,page)
        }
    }
    handledelete = (e) => {
        e.preventDefault()
        const id = this.props.match.params['id']
        this.props.actions.deleteCat(id)
    }
    render(){
        const name = this.props.match.params['name']
        const id = this.props.match.params['id']
        const { recipes } = this.props;
        return(
            <div>
                <div id="categoryR" className="card text-center">
                        <div id="categoryheader"className="card-header">
                        <h1>{name}</h1>
                        </div>
                        <div id="categorybody"className="card-body">
                    <Link to={`/${name}/${id}/addrecipe`}>
                        <button type="button" className="btn btn-outline-primary">Add Recipe</button>
                    </Link>
                    <Link to={`/${name}/${id}/editcategory?name=${name}`}>
                        <button
                        id="categoryRbutton" type="button" className="btn btn-outline-secondary">Edit Category</button>
                    </Link>
                        <button onClick={this.handledelete}
                        id="categoryRbutton" type="button" className="btn btn-outline-danger">Delete Category</button>
                        </div>
                </div>
                <div> 
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <button className="page-link" onClick={this.prev_page} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                        </li>
                        <li className="page-item"><a className="page-link">Recipes ahead</a></li>
                        <li className="page-item">
                        <button className="page-link"  onClick={this.nextPage}  aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>

                        </li>
                    </ul>
                </nav>
                </div>
                {recipes ?
                    recipes.map((recipe) => 
                        <div key={recipe.recipe_id}>
                            <div className="card bg-light mb-3" id="recipes">
                                <div className="card-header">{recipe.recipe_name}</div>
                                <div className="card-body">
                                    <h5 className="card-title">Instructions</h5>
                                    <p className="card-text">{recipe.instructions.slice(0,100)}</p>
                                </div>
                                <div className="card-footer">View Recipe</div>
                            </div>
                        </div>)  
                        :<div>No Recipes</div>}
            </div>
        );
    }
}


function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators(category, dispatch),
        action: bindActionCreators(recipes, dispatch)
    };
}
function mapStateToProps(state, ownprops){
    return{
        recipes: state.recipes.recipes,
        next_page:state.recipes.next_page,
        previous_page:state.recipes.previous_page
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipes);