import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import ttLogoblack from "../images/tt-logo-black.svg";
import ttLogowhite from "../images/tt-logo-white.svg";
import ttBlacktext from "../images/Group.svg";

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <div class='flex flex-wrap items-center justify-center text-center'></div>
      <div className='flex flex-wrap items-center justify-center text-center'>
        <div className='bg-white text-center w-full relative pin'>
          <img
            src={ttLogoblack}
            style={{
              position: "static"
            }}
            className='block mx-auto w-full py-5 px-5'
            alt='Tap Tourist Logo'
          />
          <h1 className='text-2xl px-1 pb-5'>YOUR MOBILE BEVERAGE SOLUTION</h1>
          <button class='btn-blue'>CALL NOW FOR RESERVATIONS</button>
        </div>
      </div>
      <div class='text-center py-5'>
        <h1 className='text-pink text-2xl'>WHAT IS</h1>
        <div className='bg-white text-center w-full relative pin'>
          <img
            src={ttBlacktext}
            style={{
              position: "static"
            }}
            className='block mx-auto w-full px-10'
            alt='Tap Tourist Logo'
          />
        </div>
      </div>
      <div class='text-2xl font-bold inline-block my-0 p-0'>
        <Img
          fluid={data.imgOne.childImageSharp.fluid}
          class=''
          alt='Target Logo'
        />
      </div>
      <p className='text-center py-5 px-2'>
        This is a bunch of dummy text. Neil, this is where you need to think
        about what you want these sections to say. Now onto the real dummy text:
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.{" "}
      </p>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    imgOne: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    topBg: file(relativePath: { eq: "top-bg-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
