import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index.js';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  onSubmit(props){
    this.props.createPost(props)
    .then(() => {
      this.context.router.push("/");
    })
  }
  render(){
    const handleSubmit = this.props.handleSubmit;
    const fields = this.props.fields;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>
          Create a new post
        </h3>
        <div className={`form-group ${fields.title.touched && fields.title.valid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...fields.title} />
          <div className="text-help">{fields.title.touched ? fields.title.error : ''}</div>
       </div>
        <div className={`form-group ${fields.categories.touched && fields.categories.valid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...fields.categories}/>
          <div className="text-help">{fields.categories.touched ? fields.categories.error : ''}</div>
        </div>
        <div className={`form-group ${fields.content.touched && fields.content.valid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...fields.content}/>
          <div className="text-help">{fields.content.touched ? fields.content.error : ''}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = "Enter a username";
  }
  if(!values.categories){
    errors.categories = "Enter valid categories";
  }
  if(!values.content){
    errors.content = "Enter valid content";
  }
  return errors;
}

//connect : first arguemnt is mapStateToProps, second argument is mapDispatchToProps
//redux form : first argument is config object , second arguemnt is mapStateToProps, third argument is mapDispatchToProps
export default reduxForm({
  form: 'PostsNew',
  fields: ['title','categories','content'],
  validate
}, null, { createPost} )(PostsNew);
