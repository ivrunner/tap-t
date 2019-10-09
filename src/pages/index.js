import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <div class='text-2xl font-bold inline-block my-0 p-0'>
        <a href='https://www.target.com/gift-registry/giftgiver?registryId=4c7068963df6485085c9dffff837aa66&type=WEDDING'>
          <Img
            fluid={data.topBg.childImageSharp.fluid}
            class=''
            alt='Target Logo'
          />
        </a>
      </div>
      <div class='text-center py-5'>
        <h1 className='text-2xl'>WHAT IS</h1>
        <h1 className='text-3xl'>TAP TOURIST?</h1>
      </div>
      <div class='text-2xl font-bold inline-block my-0 p-0'>
        <a href='https://www.target.com/gift-registry/giftgiver?registryId=4c7068963df6485085c9dffff837aa66&type=WEDDING'>
          <Img
            fluid={data.imgOne.childImageSharp.fluid}
            class=''
            alt='Target Logo'
          />
        </a>
      </div>
      <p className='text-center py-5'>
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
