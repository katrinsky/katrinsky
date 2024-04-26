import React, { createContext, useContext, useState, useEffect } from 'react';

const PostContext = createContext<any>(null);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Welcome to My Blog</h1>
    </div>
  );
};

const PostTitle: React.FC = () => {
  const post = useContext(PostContext);

  return (
    <div className="post-title">
      <h2>{post.title}</h2>
    </div>
  );
};

const PostMain: React.FC = () => {
  const post = useContext(PostContext);

  return (
    <div className="post-main">
      <img src={post.cover} alt={post.title} />
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
      <p>Author: {post.authorId}</p> 
    </div>
  );
};

const Post: React.FC = () => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/katrinsky/db/main/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPost(data.posts[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!post) {
    return <div>Зачекайте, дані завантажуються...</div>;
  }

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;
