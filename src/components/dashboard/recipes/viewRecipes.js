import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as category from '../../../actions/categoryCreation'

class ViewRecipes extends React.Component{

    componentDidMount(){
        const name = this.props.match.params['name']
    }
    handledelete = (e) => {
        e.preventDefault()
        const id = this.props.match.params['id']
        this.props.actions.deleteCat(id)
    }
    render(){
        const name = this.props.match.params['name']
        const id = this.props.match.params['id']
        return(
            <div>
                <div id="categoryR" className="card text-center">
                    <div id="categoryheader"className="card-header">
                    <h1>{name}</h1>
                    </div>
                    <div id="categorybody"className="card-body">
                    <button type="button" className="btn btn-outline-primary">Add Recipe</button>
                <Link to={`/${name}/${id}/editcategory`}>
                    <button
                     id="categoryRbutton" type="button" className="btn btn-outline-secondary">Edit Category</button>
                </Link>
                    <button onClick={this.handledelete}
                     id="categoryRbutton" type="button" className="btn btn-outline-danger">Delete Category</button>
                    </div>
                </div>
                <div>
                    <div className="card bg-light mb-3" id="recipes">
                        <div className="card-header">Recipe Name</div>
                        <div className="card-body">
                            <h5 className="card-title">Instructions</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer">View Recipe</div>
                    </div>
                </div>
        
            </div>
        );
    }
}


function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators(category, dispatch)
    };
}


export default connect(null, mapDispatchToProps)(ViewRecipes);