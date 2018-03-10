import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as category from '../../../actions/categoryCreation';

class EditCategory extends React.Component{
    state={
        category_name: this.props.match.params.name,
        category_id: this.props.match.params['id']
    }
    handleInput = (event) => {
        event.preventDefault()
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    handleEdit = (event) => {
        event.preventDefault()
        const category_details = this.state;
        this.props.actions.editCat(category_details)
    }
    render(){
        console.log(this.props.match.params.name);
        
        const {category_name} = this.state;
        return (
    <div id="editcategory" className="card mt-5">
        <h4 className="card-header text-center">Edit Category</h4>
        <div className="card-body">       
            <form onSubmit={this.handleEdit}>
                <div className="m-5">
                    <div className="form-group ">
                        <label>Category Name</label>      
                        <input type="text" name ="category_name"  className="form-control"
                        onChange={this.handleInput} value={category_name}
                        />   
                    </div>
                    <button id="savebutton" type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                </div>
            </form>
        </div>
     </div>
        );
    }
}function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(category, dispatch)
    };
}
export default connect(null, mapDispatchToProps) (EditCategory);