import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as category from '../../../actions/categoryCreation'
class CreateCategory extends React.Component{
    state = {
        category_name: ''
    }
    handleInput = (event) => {
        event.preventDefault()
        const {name, value} = event.target;
        this.setState({[name]: value});
        
    }
    handleCreate = (e) => {
        e.preventDefault()
        const category_name = this.state;
        this.props.actions.AddCategory(this.state).then(() => {
            this.props.history.push('/user-page')
        })
    }
    returnDashboard = () =>{
        this.props.history.push('/user-page')
    }
    render(){
        const {category_name} = this.state;
    return (
        <div id="add">
            <div id="addCat" className="card mt-5">
                <h4 className="card-header text-center">Add Category</h4>
                <div className="card-body">       
                    <form onSubmit={this.handleCreate}>
                        <div className="m-5">
                            <div className="form-group ">
                                <label>Category Name</label>      
                                <input type="text" name ="category_name"  className="form-control"
                                onChange={this.handleInput} value={category_name}
                                />   
                            </div>
                            <button id="addBut" type="submit" className="btn btn-primary btn-lg btn-block">CREATE</button>
                            <button id="addBut" onClick={this.returnDashboard}className="btn btn-danger btn-lg btn-block">
                                CANCEL
                            </button>
                        </div>
                    </form>
                </div>
            </div>
     </div>
    );
}
}
function mapDispatchToProps (dispatch) {
    return{
        actions: bindActionCreators(category, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(CreateCategory);