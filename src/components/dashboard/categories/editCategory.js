import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as category from '../../../actions/categoryCreation';

class EditCategory extends React.Component {
    // this state is local state for the commponen
    state={
      category_name: this.props.match.params.name,
      category_id: this.props.match.params.id,
    }
    // handle input of data as one inputs so as to update local state
    handleInput = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
    // handle the edit when submit is clicked
    handleEdit = (event) => {
      event.preventDefault();
      const category_details = this.state;
      this.setState({
        category_name: category_details.category_name,
      });
      this.props.actions.editCat(category_details).then(() => {
        this.props.history.push(`/${category_details.category_name}/${category_details.category_id}/recipies`);
      });
    }
    // handle the recipe view
    viewResipes = () => {
      const category_details = this.state;
      this.props.history.push(`/${category_details.category_name}/${category_details.category_id}/recipies`);
    }
    render() {
      console.log(this.props.match.params.name);

      const { category_name } = this.state;
      return (
        <div id="add">
          <div id="addCat" className="card mt-5">
            <h4 className="card-header text-center">Edit Category</h4>
            <div className="card-body">
              <form onSubmit={this.handleEdit}>
                <div className="m-5">
                  <div className="form-group ">
                    <label>Category Name</label>
                    <input
                      type="text"
                      name="category_name"
                      className="form-control"
                      onChange={this.handleInput}
                      value={category_name}
                    />
                  </div>
                  <button id="savebutton" type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                  <button id="savebutton" onClick={this.viewResipes} className="btn btn-danger btn-lg btn-block">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
} function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(category, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(EditCategory);
