import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { fetchPost, deletePost } from '../actions/index.js';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
  }
  render(){
    console.log(this.props.post);
    if(!this.props.post){
      return <div>Loading...</div>
    }else {
      return <div>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{this.props.post.title}</h3>
        <h6>Categories{this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    }

  }
  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
    .then(() => {
      this.context.router.push("/");
    })
  }

}

function mapStateToProps(state){
  console.log("state");
  console.log(state);
  return { post: state.posts.post }
}

export default connect(mapStateToProps, {fetchPost:fetchPost,deletePost: deletePost})(PostsShow)
