import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm Bruno, a full-stack developer working with Sitecore since 2015.</h2>
      <p>Here you will be able to find Sitecore development related content and also about other technologies around it.</p>
      <p>...almost forgot! Sitecore Forms too.</p>
    </Layout>
  );
};

export default Index;
