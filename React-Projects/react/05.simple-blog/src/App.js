import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const PostDetailWrapper = () => {
    const { id } = useParams();
    const post = posts.find(p => p.id.toString() === id);
    return post ? <PostDetail post={post} /> : <div>Post not found</div>;
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>
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
