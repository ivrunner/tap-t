import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import ttLogoblack from "../images/tt-logo-black.svg";
import ttLogowhite from "../images/tt-logo-white.svg";
import ttBlacktext from "../images/Group.svg";
import reservationtext from "../images/reservation.svg";
import servicestext from "../images/services.svg";
import us from "../images/us.svg";

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <div class='flex flex-wrap items-center justify-center text-center'></div>
      <div className='flex flex-wrap items-center justify-center text-center'>
        <div className='bg-white text-center w-full relative pin lg:w-1/3'>
          <img
            src={ttLogoblack}
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" +
                ")",
              backgroundPosition: "center",
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
        <h1 className='font-extrabold text-pink text-2xl block'>WHAT IS</h1>
        <div class='lg:flex lg:justify-center'>
          <div className='block bg-white text-center w-full relative pin lg:w-1/3 lg:justify-center '>
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
      </div>
      <div class='lg:flex'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:mx-10'>
          <Img
            fluid={data.imgOne.childImageSharp.fluid}
            class=''
            alt='Target Logo'
          />
        </div>
        <p className='font-medium text-center py-5 px-2 lg:w-1/2 lg:m-10 lg:text-xl'>
          This is a bunch of dummy text. Neil, this is where you need to think
          about what you want these sections to say. Now onto the real dummy
          text: Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div>
      <div class='lg:flex lg:pt-40'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:mx-10'>
          <Img
            fluid={data.resHm.childImageSharp.fluid}
            class=''
            alt='Target Logo'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:py-0'>
          <h1 className='font-extrabold text-pink text-2xl'>MAKE A</h1>
          <div className='bg-white text-center w-full relative pin'>
            <img
              src={reservationtext}
              style={{
                position: "static"
              }}
              className='block mx-auto w-full px-10'
              alt='Tap Tourist Logo'
            />
          </div>
          <p className='font-medium text-center py-5 px-2'>
            This is a bunch of dummy text. Neil, this is where you need to think
            about what you want these sections to say. Now onto the real dummy
            text: Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{" "}
          </p>
          <a href='/reservations'>
            <button class='btn-blue'>RESERVATIONS</button>
          </a>
        </div>
      </div>
      <div class='lg:flex lg:pt-40'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:mx-10'>
          <Img
            fluid={data.serHm.childImageSharp.fluid}
            class=''
            alt='Services'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:py-0'>
          <h1 className='font-extrabold text-pink text-2xl'>CHECK OUT OUR</h1>
          <div className='bg-white text-center w-full relative pin'>
            <img
              src={servicestext}
              style={{
                position: "static"
              }}
              className='block mx-auto w-full px-10'
              alt='Services'
            />
          </div>
          <p className='font-medium text-center py-5 px-2'>
            This is a bunch of dummy text. Neil, this is where you need to think
            about what you want these sections to say. Now onto the real dummy
            text: Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{" "}
          </p>
          <a href='/services'>
            <button class='btn-blue'>OUR SERVICES</button>
          </a>
        </div>
      </div>
      <div class='text-2xl font-bold inline-block my-0 pt-6'>
        <Img
          fluid={data.famPic.childImageSharp.fluid}
          class=''
          alt='Services'
        />
      </div>
      <div class='text-center py-5'>
        <h1 className='font-extrabold text-pink text-2xl'>ABOUT</h1>
        <div className='bg-white text-center w-full relative pin'>
          <img
            src={us}
            style={{
              position: "static"
            }}
            className='block mx-auto w-1/2 px-6'
            alt='Services'
          />
        </div>
        <p className='font-medium text-center py-5 px-2'>
          This is a bunch of dummy text. Neil, this is where you need to think
          about what you want these sections to say. Now onto the real dummy
          text: Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <a href='/about'>
          <button class='btn-blue'>ABOUT US</button>
        </a>
      </div>
      <div class='text-2xl font-bold inline-block my-0 pt-6'>
        <Img
          fluid={data.conHme.childImageSharp.fluid}
          class=''
          alt='Services'
        />
      </div>
      <div class='text-center py-5'>
        <h1 className='font-extrabold text-pink text-2xl'>CONTACT</h1>
        <div className='bg-white text-center w-full relative pin'>
          <img
            src={us}
            style={{
              position: "static"
            }}
            className='block mx-auto w-1/2 px-6'
            alt='Services'
          />
        </div>
        <p className='font-medium text-center py-5 px-2'>
          This is a bunch of dummy text. Neil, this is where you need to think
          about what you want these sections to say. Now onto the real dummy
          text: Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <div class='flex justify-around'>
          <a href=''>
            <button class='btn-blue'>CALL US</button>
          </a>
          <a href=''>
            <button class='btn-blue'>EMAIL US</button>
          </a>
        </div>
      </div>
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
    resHm: file(relativePath: { eq: "reservation-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    serHm: file(relativePath: { eq: "services-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    famPic: file(relativePath: { eq: "familypic.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    conHme: file(relativePath: { eq: "contact-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
