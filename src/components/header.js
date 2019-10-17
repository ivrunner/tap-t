import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import ttlogo from "../images/tt-logo-name.svg";
import fbIcon from "../images/facebook-black.svg";
import instaIcon from "../images/instagram-black.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className='bg-black text-white'>
      <nav class='flex items-center justify-between flex-wrap bg-black px-2 pt-2 pb-2'>
        <div class='flex items-center flex-shrink-0 text-white mr-0 '>
          <a href='http://facebook.com/taptouristco'>
            <img alt='Facebook' className='px-1 w-10' src={fbIcon} />
          </a>
          <a href='https://www.instagram.com/taptouristco/'>
            <img alt='Instagram' className='px-1 w-10' src={instaIcon} />
          </a>
        </div>
        <div class='flex items-center flex-shrink-0 text-white mr-6 '>
          <a href='/'>
            <img alt='Instagram' className='px-1 w-40' src={ttlogo} />
          </a>
        </div>
        <div class='block lg:hidden'>
          <button
            class='flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white'
            onClick={() => toggleExpansion(!isExpanded)}>
            <svg
              class='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          class={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div class='text-xl lg:flex-grow'>
            <a
              href='/reservations'
              class='text-white block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'>
              Reservations
            </a>
            <a
              href='/services'
              class='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'>
              Services
            </a>
            <a
              href='/contact'
              class='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
              Contact Us
            </a>
            <a
              href='/about'
              class='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
              About Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
