import React from 'react';
import Head from 'next/head';

const SEO = ({ title, description, ogTitle, ogDescription, ogImage, ogType = 'website' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <link rel="icon" href="/media/seo-favicon.ico" type="image/x-icon" />
    </Head>
  );
};

export default SEO;