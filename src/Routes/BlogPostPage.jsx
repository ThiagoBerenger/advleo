// BlogPostPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

// Dados de exemplo (pode ser carregado de uma API)
const posts = [
  {
    id: 1,
    title: "Como lidar com questões trabalhistas",
    slug: "como-lidar-com-questoes-trabalhistas",
    content: "Este é o conteúdo completo do post sobre questões trabalhistas."
  },
  {
    id: 2,
    title: "Direito civil e seus aspectos",
    slug: "direito-civil-e-seus-aspectos",
    content: "Este é o conteúdo completo do post sobre direito civil."
  },
  {
    id: 3,
    title: "Overbooking e seus direitos",
    slug: "overbooking-seus-direitos",
    content: "Este é o conteúdo completo do post sobre overbooking."
  }
]

const BlogPostPage = () => {
  const { slug } = useParams()

  // Encontrar o post correspondente ao slug
  const post = posts.find(post => post.slug === slug)

  if (!post) {
    return <h2>Post não encontrado</h2>
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPostPage
