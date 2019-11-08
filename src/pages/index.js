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
import bar from "../images/bar.svg";
import events from "../images/events.svg";
import tagLine from "../images/tag.svg";

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <div class='flex flex-wrap items-center justify-center text-center'></div>
      <div className='flex flex-wrap items-center justify-center text-center'>
        <div className='bg-transparent text-center w-full relative pin lg:w-1/2'>
          <img
            src={ttLogoblack}
            className='block mx-auto w-full py-5 px-5'
            alt='Tap Tourist Logo'
          />
          <img
            src={tagLine}
            className='block mx-auto w-full px-5 py-2 lg:px-0'
            alt='Tap Tourist Logo'
          />
          <a href='mailto:events@thetaptourist.com'>
            <button class='btn-blue'>CONTACT US!</button>
          </a>
        </div>
      </div>

      <div class='lg:flex pt-5 lg:pt-20'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:mx-10'>
          <Img
            fluid={data.imgOne.childImageSharp.fluid}
            class=''
            alt='Target Logo'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:py-0'>
          <h1 className='font-extrabold text-pink text-2xl'>
            WHAT IS TAP TOURIST?
          </h1>
          <div className='bg-transparent text-center w-full relative pin'>
            <img
              src={ttBlacktext}
              style={{
                position: "static"
              }}
              className='block mx-auto w-full px-10'
              alt='Bar Picture'
            />
          </div>
          <p className='ffont-medium text-center py-5 px-2'>
            Tap Tourist Mobile Beverage Co. offers Fort Wayne’s first vintage
            mobile bar service. Celebrate with a twist and let Tap Tourist leave
            a lasting impression for you and your guests.{" "}
          </p>
        </div>
      </div>
      <div class='md:flex md:flex-row-reverse lg:pt-40'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:my-auto lg:mx-10'>
          <Img
            fluid={data.resHm.childImageSharp.fluid}
            class=''
            alt='Target Logo'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:py-0'>
          <h1 className='font-extrabold text-pink text-2xl'>CHECK OUT OUR</h1>
          <div className='text-center w-full relative pin'>
            <img
              src={servicestext}
              style={{
                position: "static"
              }}
              className='block mx-auto w-full px-10'
              alt='Bar Picture'
            />
          </div>
          <ul class='font-medium text-center py-5 px-2'>
            <li>- Swanky mobile bar adding style to any event</li>
            <li>- Full draft service (kegged beers and wine available)</li>
            <li>- All permit filings included</li>
            <li>- Licensed and experienced bartenders</li>
            <li>
              - Full coverage liability as well as liquor liability insurance
              provided
            </li>
            <li>- Cocktail service available (pending event location)</li>
            <li>- Water stations provided</li>
            <li>- Non-alcoholic beverage service available</li>
          </ul>
        </div>
      </div>
      <div class='lg:flex lg:pt-40'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:my-auto lg:mx-10'>
          <Img
            fluid={data.serHm.childImageSharp.fluid}
            class=''
            alt='Events Picture'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:py-0'>
          <h1 className='font-extrabold text-pink text-2xl'>WHAT TYPE OF</h1>
          <div className='bg-transparent text-center w-full relative pin'>
            <img
              src={events}
              style={{
                position: "static"
              }}
              className='block mx-auto w-1/2 px-2'
              alt='Events Text'
            />
          </div>
          <p className='font-medium text-center py-5 px-2'>
            Tap Tourist has you covered from weddings to corporate events. We
            also handle large crowd events that require quick and reliable
            service. From graduation parties, reunions, birthday parties; Tap
            Tourist can create a seamless and great experience for you and your
            guests!{" "}
          </p>
        </div>
      </div>
      <div class='md:flex md:flex-row-reverse lg:flex lg:my-auto lg:pt-40'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:my-auto lg:mx-10'>
          <Img
            fluid={data.famPic.childImageSharp.fluid}
            class=''
            alt='About Us Picture'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:py-0'>
          <h1 className='font-extrabold text-pink text-2xl'>ABOUT</h1>
          <div className='bg-transparent text-center w-full relative pin'>
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
            Native Hoosiers, Neil and Sarah Pabla are a husband and wife team
            excited to offer a unique beverage service to the entire state of
            Indiana. Neil and Sarah are both very proud to call the beautiful
            city of Fort Wayne home. They are beyond grateful for the
            opportunity to bring something new and exciting to the area, and are
            honored to be part of Fort Wayne’s growth. They believe life should
            be a journey made of unforgettable experiences, and are thrilled to
            be a part of yours!{" "}
          </p>
        </div>
      </div>
      <div class='lg:flex lg:pt-40'>
        <div class='text-2xl font-bold my-0 p-0 lg:w-1/2 lg:my-auto lg:mx-10'>
          <Img
            fluid={data.theBar.childImageSharp.fluid}
            class=''
            alt='Services'
          />
        </div>
        <div class='text-center py-5 lg:w-1/2 lg:mx-10 lg:text-xl lg:pb-5 lg:py-0'>
          <div class='text-center'>
            <h1 className='font-extrabold text-pink text-2xl'>THE</h1>
            <div className='bg-transparent text-center w-full relative pin'>
              <img
                src={bar}
                style={{
                  position: "static"
                }}
                className='block mx-auto w-1/3 px-6'
                alt='Services'
              />
            </div>
            <p className='font-medium text-center py-5 pb-2'>
              While searching for the perfect piece to convert to a mobile bar,
              Neil and Sarah knew they wanted something with character and
              history. They were lucky enough to come across the Ricketts
              family, who had decided to part ways with a 1970 2-horse Rustler
              trailer. After talking with the Ricketts family for just a short
              time, it became clear the trailer had been a part of so many
              wonderful memories. While preserving the original vintage beauty,
              Neil and Sarah transformed the 2-horse trailer into a stylish bar.
              Neil and Sarah chose to pay homage to the Ricketts family by
              naming the mobile bar, “The Ricketts Rustler.” The Ricketts
              Rustler will roll on, creating many more memories for years to
              come.{" "}
            </p>
            <div class='flex justify-around'>
              <a href='mailto:events@thetaptourist.com'>
                <button class='btn-blue'>EMAIL US</button>
              </a>
            </div>
          </div>
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
    famPic: file(relativePath: { eq: "aboutpic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theBar: file(relativePath: { eq: "tt-trailer.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
