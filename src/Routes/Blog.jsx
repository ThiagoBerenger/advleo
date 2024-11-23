import React, { useEffect, useState } from 'react';
import client from '../contentfulClient'; 
import BlogThumbs from '../Components/BlogThumbs/BlogThumbs';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: 'thiagoputo' }) // Use o ID correto (blogPost)
      .then((response) => {
        console.log('Resposta da API:', response);
        if (response.items.length > 0) {
          // Formatar os dados retornados
          const formattedPosts = response.items.map((item) => ({
            id: item.sys.id,
            slug: item.fields.slug,
            title: item.fields.title,
            thumbnail: item.fields.thumbnail?.fields?.file?.url || '',
          }));
          setPosts(formattedPosts);
        } else {
          console.log('Nenhum post encontrado.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar os posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando posts...</p>;
  }

  if (posts.length === 0) {
    return <p>Nenhum post encontrado.</p>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <BlogThumbs posts={posts}/>
    </div>
  );
};

export default Blog;