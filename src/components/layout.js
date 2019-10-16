import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import mdcCredit from "../images/mdc-credit.svg";

function Layout({ children }) {
  return (
    <div className='flex flex-col font-sans min-h-screen text-gray-900'>
      <Header />

      <main className='flex flex-col flex-1'>{children}</main>

      <footer className='bg-black'>
        <nav className='py-5 px-2'>
          <p className='text-white'>© 2019 TAP TOURIST{` `}</p>
          <p className='block text-white'>PHONE: 260-341-7792{` `}</p>
          <p className='block text-white'>
            EMAIL: EVENTS@THETAPTOURIST.COM{` `}
          </p>
          <div className='text-white w-full'>
            <a href='http://richmatney.com'>
              DESIGNED BY:{" "}
              <img
                src={mdcCredit}
                style={{
                  position: "static"
                }}
                className='inline-block w-10 py-2'
                alt='Services'
              />
            </a>
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
