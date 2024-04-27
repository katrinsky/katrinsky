import React, { useContext, createContext } from 'react';

const BlogContext = createContext();

const Layout = ({ children }) => {
  return (
    <div className="font-sans bg-gray-100">
      <main className="p-4">{children}</main>
      <footer className="bg-yellow-400 text-white text-center py-2 font-bold">© 2024 Мій блог. Усі права захищені.</footer>
    </div>
  );
};

const Header = () => {
  return (
    <BlogContext.Consumer>
      {blogName => (
        <header className="bg-green-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold">{blogName}</h2>
            <nav>
              <ul className="flex gap-4">
                <li>Головна</li>
                <li>Про мене</li>
                <li>Контакти</li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </BlogContext.Consumer>
  );
};

const BlogInfo = () => {
  return (
    <BlogContext.Consumer>
      {blogName => (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
          <h2 className="text-xl font-bold mb-4">Ласкаво прошу у {blogName}!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum at turpis fringilla ullamcorper ut et leo. Aliquam accumsan dui at libero eleifend, a eleifend arcu fringilla.</p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae elit eros. Aliquam sit amet orci ut leo ultricies sodales. In hac habitasse platea dictumst.</p>
          <p>Sed ultricies, nibh at scelerisque tincidunt, nisl velit malesuada ex, eget ultricies velit libero et ligula. Fusce ultrices leo vel eros vulputate, eget pharetra neque tristique. Phasellus id orci sit amet risus lacinia viverra non nec nulla.</p>
        </div>
      )}
    </BlogContext.Consumer>
  );
};

export { BlogContext, Layout, Header, BlogInfo };
