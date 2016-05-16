import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
    console.log('this would be a good time to call an action creator');
  }
  render(){
    console.log(this.props.all);
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
          {this.props.all.map(function(post){
              const link = "posts/"+post.id;
              return (<div><Link to={link} key={post.title}>{post.title}</Link></div>);
          })}
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts }, dispatch );
}

function mapStateToProps(state){
  //console.log(state);
  return { all: state.posts.all } //{weather} = {weather: weather}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
//also can do
//export default connect(null, {fetchPosts})(PostsIndex);
