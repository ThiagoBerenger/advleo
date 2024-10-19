import React from 'react'
import BlogThumbs from '../Components/BlogThumbs/BlogThumbs'

const posts = [
    {
      id: 1,
      title: "Como lidar com questões trabalhistas",
      slug: "como-lidar-com-questoes-trabalhistas",
      thumbnail: "/images/trabalhista-thumb.jpg"
    },
    {
      id: 2,
      title: "Direito civil e seus aspectos",
      slug: "direito-civil-e-seus-aspectos",
      thumbnail: "/images/civil-thumb.jpg"
    },
    {
      id: 3,
      title: "Reforma tributária e seus impactos",
      slug: "reforma-tributaria-impactos",
      thumbnail: "/images/tributario-thumb.jpg"
    }
  ];

const Blog = () => {
  return (
    <div>
        <BlogThumbs posts={posts}/>
    </div>
  )
}

export default Blog