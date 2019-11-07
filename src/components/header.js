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
      <nav class='flex justify-center flex-wrap bg-black px-2 pt-2 pb-2'>
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
            <img alt='Tap Tourist Logo' className='px-1 w-40' src={ttlogo} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
