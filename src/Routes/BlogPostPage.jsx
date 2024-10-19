import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../firebase'; // Importando a função correta

const BlogPostPage = () => {
  const { slug } = useParams(); // Pega o slug da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await fetchPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Post não encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar o post');
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [slug]);

  if (loading) return <p>Carregando post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return null;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;