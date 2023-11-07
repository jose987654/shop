// SiteXML.js
import React, { useEffect, useState } from "react";

function SiteXML() {
  const [xmlContent, setXmlContent] = useState(null);

  useEffect(() => {
    // Fetch the XML file
    fetch('../sitemap.xml') // Replace with the actual path to your XML file
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Failed to fetch XML file');
        }
      })
      .then((xmlText) => {
        setXmlContent(xmlText);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Site XML Content</h2>
      {xmlContent ? (
        <pre>{xmlContent}</pre>
      ) : (
        <p>Loading XML content...</p>
      )}
    </div>
  );
}

export default SiteXML;
