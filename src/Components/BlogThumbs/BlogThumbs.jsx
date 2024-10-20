import React from 'react';
import { Link } from 'react-router-dom';
import './BlogThumbs.modules.css'; // Estilos para o componente

const BlogThumbs = ({ posts }) => {
  return (
    <div className="blog-thumbs-container">
      {posts.map(post => (
        <div key={post.id} className="blog-thumb">
          <Link to={`/blog/${post.slug}`}>
            <img src={post.thumbnail} alt={post.title} className="blog-thumb-image" />
            <div className="blog-thumb-text">
              <h2>{post.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogThumbs;
