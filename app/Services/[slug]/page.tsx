

import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../Components/Navbar';
import { servicePages } from '../pageData'; 

export default function DynamicServicePage({ params }: { params: { slug: string } }) {
  const page = servicePages.find((p) => p.slug === params.slug);

  // If no matching slug, return 404
  if (!page) {
    console.error(`❌ Page not found for slug: "${params.slug}"`);
    return notFound();
  }

  return (
    <>
      <Navbar />
      {page.Components.map((Component, index) => (
        <div key={index}>{Component}</div>
      ))}
    </>
  );
}
