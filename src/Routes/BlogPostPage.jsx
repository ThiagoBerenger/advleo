import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../Components/BlogPost/BlogPost';
import client from '../contentfulClient';

const BlogPostPage = () => {
  const { slug } = useParams(); // Obtém o slug da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'thiagoputo', // Content Type ID
        'fields.slug': slug, // Filtro pelo campo slug
      })
      .then((response) => {
        if (response.items.length > 0) {
          const item = response.items[0];
          setPost({
            title: item.fields.title,
            body: item.fields.body,
            thumbnail: item.fields.thumbnail?.fields?.file?.url || '',
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar o post:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Carregando post...</p>;
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;