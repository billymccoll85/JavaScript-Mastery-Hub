import React from 'react';
import DOMPurify from 'dompurify';

const PostDetail = ({ post }) => {
  if (!post) {
    return <div className="text-center py-10">Post not found.</div>;
  }

  const createMarkup = htmlContent => {
    return {
      __html: DOMPurify.sanitize(htmlContent)
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <div 
        className="prose"
        dangerouslySetInnerHTML={createMarkup(post.content)} 
      />
    </div>
  );
};

export default PostDetail;
