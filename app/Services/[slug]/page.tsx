import React from "react";
import { notFound } from "next/navigation";
import Navbar from "../../Components/navbar";
import { servicePages } from "../pageData";

export default async function DynamicServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = servicePages.find((p) => p.slug === slug);

  // If no matching slug, return 404
  if (!page) {
    return notFound();
  }

  return (
    <>
      <Navbar/>
      {page.Components.map((Component, index) => (
        <div key={index}>{Component}</div>
      ))}
    </>
  );
}
