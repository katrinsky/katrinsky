import React, { useState, useEffect } from 'react';

const Post = () => {
  const [post, setPost] = useState<any>({});
  const [likes, setLikes] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/katrinsky/db/posts/1');
      const postData = await response.json();
      setPost(postData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const likeThis = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  useEffect(() => {
    const likeButton = document.getElementById('like');
    if (likeButton) {
      likeButton.addEventListener('click', likeThis);
    }
    return () => {
      if (likeButton) {
        likeButton.removeEventListener('click', likeThis);
      }
    };
  }, []);

  return (
    <article className='post'>
      <div className='cover-container'>
        <img src={post.cover} alt={post.title} />
      </div>
      <div className='post-footer'>
        <h3>{post.title} {post.id}</h3>
        <p>{post.content}</p>
        <button id='like'>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
};

export default Post;
