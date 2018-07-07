import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions/'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h2>Add new post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <br/>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <br/>
            <input type="textarea" name="body" onChange={this.onChange} value={this.state.body} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  createPost: PropTypes.func,
  post: PropTypes.object,
}

export default connect(null, { createPost })(Form)
