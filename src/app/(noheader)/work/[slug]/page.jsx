import React, { cache, use } from "react";
import { works } from '@/utils/util'
import PageContent from "./PageContent";


const getWork = cache((slug) => {
  const idx = works.findIndex(w => w.slug === slug);
  const work = works.find(w => w.slug === slug) ;
  return {idx, work};
})

export const generateMetadata = async ( { params }) => {
  const { slug } = await params;
  const { work } = getWork(slug);
  return {
    title: work?.title,
    description: work?.description,
    openGraph: {
      images: [
        {
          url: "",
          alt: "Preview image for My App",
        },
      ],
      title: work?.title,
      description: work?.description,
      type: "website",
    },
  };
};

export default function WorkPage({ params }) {
  const { slug } = use(params);
  const { work, idx } = getWork(slug);


  return (
    <PageContent work={work} idx={idx}/>
  );
}
