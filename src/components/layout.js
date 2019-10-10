import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className='flex flex-col font-sans min-h-screen text-gray-900'>
      <Header />

      <main className='flex flex-col flex-1'>{children}</main>

      <footer className='bg-black'>
        <nav className='flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm'>
          <p className='text-white font-bold'>Tap Tourist{` `}</p>

          <p>
            <a
              className='font-bold no-underline text-white'
              href='https://github.com/taylorbryant/gatsby-starter-tailwind'>
              MDC
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
