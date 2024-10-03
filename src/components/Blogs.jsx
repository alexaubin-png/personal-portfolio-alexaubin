import React, { useState, useEffect } from 'react';
import './Blog.css'
import ContentImage from '../assets/content-image.jpg'
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '', 
    content: '', 
    author: ''
  });
  const [updatePost, setUpdatePost] = useState({
    title: '',
    content: '', 
    author: ''
  })
  const [message, setMessage] = useState('')
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
         setError(err.message);
         setLoading(false);
      }
    };
    fetchPosts();


  }, []);

const createBlogPost = async () => {
  if (newPost.title){
    try{
      const response = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, data.newEntry]);
      setNewPost({title: '', content: '', author: ''});
      setMessage('Blog post created successfully')
    }catch(error){
      console.log("error creating post", error)
    setMessage('Error creating blog post', error.message)
  }
}
}



  if (error) {
    return <div>Error: {error}</div>; // Show an error message if fetching data fails
  }

  return (
    <>
    <div className='container-blogs'>
      <h2>Blogs</h2>
      <ul>
        {posts.map(post =>
      <li key={post.post_id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p><em>{post.author}</em></p>
    </li>
      )}
    
      </ul>
 <input 
 type='text'
className='input-blog-title'
placeholder='Title'
value={newPost.title}
onChange={(e) => setNewPost({...newPost, title: e.target.value})}
 />
<textarea 
placeholder='Content'
type='text'
className='input-blog-content'
value={newPost.content}
onChange ={(e) => setNewPost({...newPost, content: e.target.value})}/>

<input 
type='text'
placeholder='Author:'
className='input-blog-author'
value={newPost.author}
onChange ={(e) => setNewPost({...newPost, author: e.target.value})}/>

    <button onClick={createBlogPost}>create blog post</button>

    </div>
    <h2 className='content-header'>start connecting</h2>
    <img className='content-image' src={ContentImage}></img>
      <p className='content-text'>Connect with others, and or read blog posts from the community</p>

</>
  
  );
};

export default Blogs;
