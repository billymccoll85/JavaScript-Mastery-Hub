import React, { Component } from 'react';

class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <li className="border-b border-gray-200 mb-2 pb-2">
        <h3 className="font-bold text-lg">{post.title}</h3>
        <p>{post.body}</p>
      </li>
    );
  }
}

export default PostItem;
