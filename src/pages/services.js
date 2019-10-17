import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import about from "../images/about.svg";
import services from "../images/services.svg";

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Services'
      />

      <div className='flex flex-wrap items-center justify-center text-center'>
        <div className='bg-white text-center w-full relative pin'>
          <img
            src={services}
            style={{
              position: "static"
            }}
            className='block mx-auto w-full px-20 py-6'
            alt='Services'
          />
        </div>
        <p className='font-medium text-center py-5 px-2'>
          This is a bunch of dummy text. Neil, this is where you need to think
          about what you want these sections to say. Now onto the real dummy
          text: Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.This is a bunch of dummy
          text. Neil, this is where you need to think about what you want these
          sections to say. Now onto the real dummy text: Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.{" "}
        </p>
        <div class='text-center py-5'>
          <h1 className='font-extrabold text-pink text-2xl'>FOLLOW US</h1>
          <div className='bg-white text-center w-full relative pin'>
            <img
              src={us}
              style={{
                position: "static"
              }}
              className='block mx-auto w-full px-10'
              alt='Services'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServicesPage;
