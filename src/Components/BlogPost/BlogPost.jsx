import React from 'react';

const BlogPost = ({ post }) => {
  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ maxWidth: '100%' }}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default BlogPost;