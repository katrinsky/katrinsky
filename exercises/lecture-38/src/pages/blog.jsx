import React from 'react';
import { BlogContext, Layout, Header, BlogInfo } from '../components/Posts';

function Blog() {
  const blogName = "Мій блог";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Header blogName={blogName} />
        <BlogInfo />
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;
