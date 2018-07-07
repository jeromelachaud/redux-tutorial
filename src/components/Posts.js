import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/'

class Posts extends Component {
  componentDidMount(nextProps) {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      this.props.posts.unshift(nextProps.post)
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    ))
    return (
      <div>
        <ul>
          <h2>Posts</h2>
          {postItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  post: state.posts.post,
})

Posts.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array.isRequired,
  post: PropTypes.object,
}

export default connect(mapStateToProps, { fetchPosts })(Posts)
