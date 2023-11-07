// Sitemap.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = ({ routes }) => {
  const baseUrl = 'https://shop-weld-five.vercel.app'; // Replace with your website URL

  const urls = routes.map((route) => {
    const path = route.path.startsWith('/') ? route.path.slice(1) : route.path;
    return `${baseUrl}/${path}`;
  });

  const sitemapXml = `
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls.map((url) => `
       <url>
         <loc>${url}</loc>
       </url>
     `).join('')}
   </urlset>
  `;

  return (
    <textarea rows="10" cols="50">
      {sitemapXml}
    </textarea>
  );
};

export default Sitemap;
