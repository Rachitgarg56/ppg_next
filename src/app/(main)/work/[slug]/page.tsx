import { Metadata } from "next";
import React, { cache, use } from "react";
import WorkSection from "@/components/WorkSection";
import { works } from '@/utils/util'
import Link from "next/link";

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

export default function WorkPage({ params }: PageProps) {
  const { slug } = use(params);
  const work = getWork(slug);

  if (!work) return null;

  return (
<div className="fixed inset-0 z-50 flex flex-col">
  {/* Background with overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${work.image})` }}
  />
  <div className="absolute inset-0 bg-black/50" />

  {/* Close Button */}
  <Link href="/work">
    <button className="absolute top-4 md:top-24 right-4 md:right-24 z-50 w-24 h-24 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </Link>

  {/* Scrollable content wrapper */}
  <div className="relative z-40 flex-1 overflow-y-auto">
    {/* Title Section */}
    <div className="flex items-center justify-center h-screen px-8 md:px-24">
      <h1 className="text-3xl md:text-6xl text-white text-center leading-relaxed md:pr-32 drop-shadow-lg font-cambria tracking-wide italic">
        {work.title}
      </h1>
    </div>

    {/* Description Section */}
    <div className="bg-cyan-50 px-8 md:px-64 py-8 md:py-32">
      <div className="text-[#178DA1] text-3xl text-center font-thin leading-relaxed mb-32">
        {work.description}
      </div>
    </div>
  </div>
</div>

  );
}
