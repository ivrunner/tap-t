import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import mdcCredit from "../images/mdc-credit.svg";

function Layout({ children }) {
  return (
    <div className='mainbackground flex flex-col font-serif min-h-screen text-gray-900 bg-gray'>
      <Header />

      <main className='flex flex-col flex-1 md:max-w-6xl md:mx-auto'>
        {children}
      </main>
      <footer className='flex w-full justify-between bg-black'>
        <nav className='w-full'>
          <div class='md:flex md:justify-between bg-black'>
            <div class='text-gray-700 text-center bg-black px-4 py-2 m-2'>
              <p className='text-white'>© 2019 TAP TOURIST{` `}</p>
            </div>

            <div class='text-gray-700 text-center bg-black px-4 py-2 m-2'>
              <a href='mailto:events@thetaptourist.com'>
                <p className='block text-white'>
                  EMAIL: EVENTS@THETAPTOURIST.COM{` `}
                </p>
              </a>
            </div>
            <div class='text-white text-center bg-black px-4 py-2 m-2'>
              <a href='http://richmatney.com'>
                DESIGNED BY:{" "}
                <img
                  src={mdcCredit}
                  style={{
                    position: "static"
                  }}
                  className='inline-block w-10'
                  alt='Services'
                />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
