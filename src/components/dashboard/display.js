import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateCategory from './categories/createCategory'
import * as category from '../../actions/categoryCreation'
import { Link } from 'react-router-dom';


class FirstDisplay extends React.Component{
    constructor(props){
        super(props)
        this.props.actions.ViewCategory(1)
        this.state = {
            page: 1
        }
        this.reload
        
    }
    nextPage = (e) => {
        e.preventDefault()
        if  (this.props.has_next === true) {
            this.props.actions.ViewCategory(this.props.nextPage.substr(this.props.nextPage.length - 1))
        }else{
            this.props.actions.ViewCategory(Number(this.props.previousPage.substr(this.props.previousPage.length-1)) + 1)
        }
    }
    previousPage = (e) => {
        e.preventDefault()
        if (this.props.has_prev === true){
            this.props.actions.ViewCategory(this.props.previousPage.substr(this.props.previousPage.length - 1))
        }else{
            this.props.actions.ViewCategory(this.state.page)
        }
    }
    recipes = (a,b) => {
        
    }
    render(){
        const {category , has_next, has_prev} = this.props;      
        return(
            <div>
            <div>
            </div>
            
            <Link to='/createcategory'>   
            <button type="button" id="addcategory" className="btn btn-primary">
                Add Category
            </button>
            </Link>
           
            <div className="row" id='row1'>
                <div className="categorycontainer">
            { category && has_next !== false ?
            <div>
                <button onClick={this.previousPage
                } id="previousButton"type="button" className="btn btn-primary">Previous</button>
                <button onClick={this.nextPage}
                id="nextButton" type="button" className="btn btn-primary">Next</button>
            </div>
                : <div> </div>
            }
            {category && category.length > 0 ? 
            category.map((item, index) => 
            <div key={item.category_id}>
            <Link to={`/${item.category_name}/${item.category_id}/recipies`}>
            <button  type="button"  id="categorybutton"className="btn btn-primary"> 
                {item.category_name}
            </button>
            </Link>
                </div>)

                : <div id ="nocategory" className="alert alert-primary" role="alert">
                No Categories
                </div>}


                {/* <form  className ="form-group" role="search">
                <div className="input-group add-on col-sm-3 pull-right" id='searchCategory'>
                    <input
                        id='Categorysearch'
                        type="search"
                        className="form-control"
                        placeholder='Search for'/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form> */}
                
                </div>
            </div>
            
            </div>
        );
    }
}
function mapStateToProps (state, ownProps){
    return {
        category: state.categories.categories,
        has_next: state.categories.has_next,
        has_prev: state.categories.has_prev,
        nextPage: state.categories.next_page,
        previousPage: state.categories.previous_page
    };
}
function mapDispatchToProps (dispatch) {
    return{
        actions: bindActionCreators(category, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps) (FirstDisplay);