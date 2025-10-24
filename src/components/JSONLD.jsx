// components/JSONLD.jsx
import React from "react";

function JSONLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shivang Pandey",
    "alternateName": "Mosscript",
    "url": "https://mosshead.vercel.app",
    "image": "https://github.com/NPC-MARIMO.png",
    "sameAs": [
      "https://github.com/NPC-MARIMO",
      "https://www.linkedin.com/in/mosscript/"
    ],
    "jobTitle": "Web Developer / AI/ML Enthusiast",
    "skills": [], // <-- fill in later
    "worksFor": {
      "@type": "Organization",
      "name": "Mosshead Portfolio"
    },
    "hasPart": [] // <-- fill in projects later
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default JSONLD;
