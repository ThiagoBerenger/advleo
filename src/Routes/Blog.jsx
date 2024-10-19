import React, { useEffect, useState } from 'react'
import BlogThumbs from '../Components/BlogThumbs/BlogThumbs'
import { fetchPosts } from '../firebase'

const Blog = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // carrega os posts quando o componente for montado
    const getPosts = async () => {
      // chama função para buscar posts
      const fetchedPosts = await fetchPosts() 
      setPosts(fetchedPosts)
    }
    getPosts()
  }, [])
  //array vazio garantindo que a função seja chamada apenas uma vez quando o componente for montado

  return (
    <div>
        <BlogThumbs posts={posts}/>
    </div>
  )
}

export default Blog