import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import AddPost from '../components/AddPost'
import Post from '../components/Post'
import { IPost } from '../types'
import { getPosts } from "../lib/posts"


export const getStaticProps:  GetStaticProps = async context => {
  const res = await getPosts();
  const posts: IPost[] = await res.json()

  return {
    props: {
      posts
    }
  }

}
const Home = ({posts}) => {
  const [postsList, setPostsList ] = useState(posts)

  const addPost = async (e: React.FormEvent, formData: IPost) => {
    e.preventDefault();
    const newPost: IPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body
    }
    setPostsList([...postsList, newPost]);
  }

  const deletePost = async (id: number) => {
    const newPostLists: IPost[] = postsList.filter(post => post.id !== id)
    setPostsList(newPostLists)
  }

  // if(!postsList) return <p>Loading...</p>
  return (
    <main className="container">
      <h1>My posts</h1>
      <AddPost savePost={addPost} />
      {postsList && postsList.map(post => (
        <Post key={post.id} deletePost={deletePost} post={post} />
      ))}
    </main>
  )
}

export default Home
