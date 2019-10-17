import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title='404: Not found' />
      <div>
        <h1 class='text-center text-6xl font-extrabold'>OOPS!</h1>
        <h3 class='text-center text-2xl font-extrabold'>
          SOMETHING WENT WRONG!
        </h3>
        <a class='flex justify-center py-5' href='/'>
          <button class='btn-blue'>GO HOME!</button>
        </a>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
