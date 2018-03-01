import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateCategory from './categories/createCategory'
import { Link } from 'react-router-dom';


class FirstDisplay extends React.Component{
    
    render(){
        const {category} = this.props;      
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

                {category ? 
                category.map((item, index) => <div key={item.category_id}>
                <button type="button"  id="categorybutton"className="btn btn-primary"> 
                    {item.category_name}
                </button>
                    </div>)

                 : <div>NO categories</div>}


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
        category: state.categories
    };
}
export default connect(mapStateToProps) (FirstDisplay);