import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.handleSuccesfulFormSubmission(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Blog Title'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='blog_status'
          placeholder='Blog Status'
          value={this.state.blog_status}
          onChange={this.handleChange}
        />
        <button>Save</button>
      </form>
    );
  }
}
