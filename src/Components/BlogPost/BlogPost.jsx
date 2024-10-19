import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPost from '../components/BlogPost'
import postsData from '../data/postsData'

const BlogPostPage = () => {
  const { id } = useParams(); // Pega o id da URL
  const post = postsData.find(post => post.id === parseInt(id)); // Busca o post pelo id

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div className="blog-post-page">
      <BlogPost post={post} />
    </div>
  );
};

export default BlogPostPage;
