import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Contact from '../pages/Contact';
import About from '../pages/About';

const Sitemap = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:id", element: <ProductDetail /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/About", element: <About /> },   
    { path: "/site", element: <About /> },
  ]);

  const baseUrl = 'https://shop-weld-five.vercel.app'; // Replace with your website URL

//   const urls = routes?.map((route) => {
//     const path = route.path.startsWith('/') ? route.path.slice(1) : route.path;
//     return `${baseUrl}/${path}`;
//   });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://shop-weld-five.vercel.app/</loc>
    <lastmod>2023-11-07T09:14:02+00:00</lastmod>
    </url>
    </urlset>`;

  // Set the Content-Type header to indicate that the content is XML
  const xmlBlob = new Blob([sitemapXml], { type: 'application/xml' });

  return (
    <a
      href={URL.createObjectURL(xmlBlob)}
      download="sitemap.xml"
    >
      Download Sitemap
    </a>
  );
};

export default Sitemap;
