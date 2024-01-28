import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Header from './components/Header';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on initial render
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  // Save posts to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Function to add a new post
  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  // Function to delete a post
  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  // Component to wrap PostDetail and handle routing logic
  const PostDetailWrapper = () => {
    const params = useParams();
    const post = posts.find(p => p.id.toString() === params.id);
    return post ? <PostDetail post={post} /> : <div>Post not found</div>;
  };

  return (
    <Router>
      <Header /> {/* Use Header */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<PostList posts={posts} onDeletePost={deletePost} />} />
          <Route path="/create" element={<CreatePost onAddPost={addPost} />} />
          <Route path="/post/:id" element={<PostDetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
