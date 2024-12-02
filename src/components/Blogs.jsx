import React, { useState, useEffect } from 'react';
import './Blog.css'


const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });
  const [updatePost, setUpdatePost] = useState({ title: '', content: '', author: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/comments', {
          method: 'GET', // Changed to GET since you want to fetch posts
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data);
      
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
    
      }
    };

    fetchPosts();
  }, []);

  const fetchPostId = async () => {
const response = await fetch(`http://localhost:8080/api/comments/${posts.title}`)

  }

  const updateBlogPost = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/put/${updatePost.title}`, {
        method: 'PUT', // Use PUT to update the post
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePost),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const updatedPost = await response.json();
      setPosts(posts.map(post => (post.title === updatePost.title ? updatedPost : post))); // Update the state
      setMessage('Blog post updated successfully!');
      setUpdatePost({ title: '', content: '', author: '' }); // Reset the update form
    } catch (error) {
      console.error('Error updating post:', error);
      setMessage(error.message);
    }
  };

  const createBlogPost = async () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    
    try {
      const response = await fetch(`${apiUrl}/api/posts`, {
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
      setMessage('Blog post created successfully!');
      setNewPost({ title: '', content: '', author: '', newEntry }); // Reset the form
    } catch (error) {
      console.error('Error creating post:', error);
      setMessage(error.message);
    }
  };

 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container-blogs'>
      <h2>Blogs</h2>
      <ul>
        {posts.map(post => (
          <li key={post.post_id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><em>{post.author}</em></p>
          </li>
        ))}
      </ul>
<div className="createblogs-container">
<h3>Create a New Blog Post</h3>
      <input
        className='input-blog-title'
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        className='input-blog-content'
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <input
        className='input-blog-author'
        type="text"
        placeholder="Author"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
      />
      <button className='button-blog-create' onClick={createBlogPost}>Create Blog Post</button>
</div>
     

<div className="update-container">
<h3>Update a Blog Post</h3>
      <input
        className='input-blog-title'
        type="text"
        placeholder="Title of the Post to Update"
        value={updatePost.title}
        onChange={(e) => setUpdatePost({ ...updatePost, title: e.target.value })}
      />
      <textarea
        className='input-blog-content'
        placeholder="New Content"
        value={updatePost.content}
        onChange={(e) => setUpdatePost({ ...updatePost, content: e.target.value })}
      />
      <input
        className='input-blog-author'
        type="text"
        placeholder="New Author"
        value={updatePost.author}
        onChange={(e) => setUpdatePost({ ...updatePost, author: e.target.value })}
      />
      <button className='Update-Blog' onClick={updateBlogPost}>Update Blog Post</button>

      {message && <div>{message}</div>} {/* Display success/error messages */}

</div>
     
    </div>
  );
};

export default Blogs;