import React, { useEffect, useState } from 'react';
import BlogThumbs from '../Components/BlogThumbs/BlogThumbs';
import client from '../contentfulClient';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: 'blogPost' })
      .then((response) => {
        const formattedPosts = response.items.map((item) => ({
          id: item.sys.id,
          slug: item.fields.slug,
          title: item.fields.title,
          thumbnail: item.fields.thumbnail?.fields?.file?.url || '',
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando posts...</p>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <BlogThumbs posts={posts} />
    </div>
  );
};

export default Blog;