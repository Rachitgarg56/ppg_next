import { Metadata } from "next";
import React, { cache, use } from "react";
import WorkSection from "@/components/WorkSection";
import { works } from '@/utils/util'

interface PageProps {
  params: Promise<{ slug?: string }>;
}

const getWork = cache((slug: string | undefined) => {
  return works.find(w => w.slug === slug) 
})

export const generateMetadata = async ( { params }: PageProps ): Promise<Metadata> => {
  const { slug } = await params;
  const work = getWork(slug);
  return {
    title: work?.title,
    description: work?.subtitle,
    openGraph: {
      images: [
        {
          url: "",
          alt: "Preview image for My App",
        },
      ],
      title: work?.title,
      description: work?.subtitle,
      type: "website",
    },
  };
};

const page = ( { params }: PageProps ) => {
  const { slug } = use(params);
  const work = getWork(slug);
  return (
    <div className="bg-black">
      <div className="text-center text-5xl font-bold text-white italic font-cambria pb-16">
        Work
      </div>

      <WorkSection data={work}/>
      
    </div>
  );
};

export default page;
