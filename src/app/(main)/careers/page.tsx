import PageContent from './PageContent';
import { Metadata } from 'next';
import React from 'react'

export const generateMetadata = (): Metadata => {
    return {
      title: "My App",
      description: "This is a Next.js app",
      openGraph: {
        images: [
          {
            url: "",
            alt: "Preview image for My App",
          },
        ],
        title: "My App",
        description: "This is a Next.js app",
        type: "website",
      },
    };
};

const page = () => {
  return (
    <PageContent/>
  )
}

export default page