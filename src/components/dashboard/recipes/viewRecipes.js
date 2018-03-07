import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';


class ViewRecipes extends React.Component{

    componentDidMount(){
        const name = this.props.match.params['name']
    }

    render(){
        const name = this.props.match.params['name']
        return(
            <div>
            <div>
                <div>
                    <h1>{name}</h1>
                        <div>
                            <button type="button" className="btn btn-outline-primary">Edit Category</button>
                            <button type="button" className="btn btn-outline-danger">Delete Category</button>
                        </div>
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

export default ViewRecipes;