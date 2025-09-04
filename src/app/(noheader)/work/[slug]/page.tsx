import { Metadata } from "next";
import React, { cache, use } from "react";
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

export default function WorkPage({ params }: PageProps) {
  const { slug } = use(params);
  const work = getWork(slug);

  if (!work) return null;

  return (
    <div className="main-container">
      <div className="relative h-screen bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${work.image})`}}>
        <div className="absolute top-0 left-0 overlay w-full h-full bg-black/50"></div>
        <h1 className="text-3xl md:text-6xl text-white text-center leading-relaxed md:pr-32 drop-shadow-lg font-cambria tracking-wide italic pt-24"><i className="md:font-bold">{work.title}</i></h1>
        <Link href={'/work'}>
          <button className="absolute cursor-pointer top-24 right-20 p-2 text-white hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
          </button>
        </Link>
        <Link href={'/work'}>
          <span className="cursor-pointer text-white absolute top-4 right-4 md:hidden block text-3xl">×</span> 
        </Link>
      </div>

      <div className="px-4 py-12 sm:py-24">
        <div className="max-w-5xl w-full mx-auto space-y-20">
          <div className="text-[#178DA1] text-3xl text-center leading-relaxed" x-text="selectedWork.subtitle">{work.description}</div>
          
          <div className="pr-68 space-y-16">

            {
              work.elements &&
              work.elements.map((ele) => {
                if (ele.type === 'list') {
                  return (
                    <div key={ele.title}>
                      <h2 className="text-3xl font-semibold mb-4">{ele.title}</h2>
                      <ul className="ml-8 space-y-1">
                        {ele.listItems.map((li, index) => {
                          if (typeof li === "string") {
                            return (
                              <li key={index} className="text-2xl">
                                - {li}
                              </li>
                            );
                          }
                          return null; 
                        })}
                      </ul>
                    </div>
                  )
                } else if (ele.type === "underline") {
                    return (
                      <div key={ele.title}>
                        <h2 className="text-3xl font-semibold mb-4">{ele.title}</h2>
                        <ul className="ml-8 space-y-8">
                          {ele.listItems.map((li, index) => {
                            if (typeof li !== "string") {
                              return (
                                <li key={li.text} className="text-2xl">
                                  <span className="underline underline-offset-2 decoration-1 mr-2">
                                    {li.bullet}
                                  </span>
                                  <span>{li.text}</span>
                                </li>
                              );
                            }
                            return null; 
                          })}
                        </ul>
                      </div>
                    );
                  }

              })
            }

            { work.conclustion &&
              <div>
                <h2 className="text-3xl font-semibold mb-4">Conslusion:</h2>
                <p className="text-2xl">{work.conclustion}</p>
              </div>
            }

          </div>
        </div>
      </div>
      
      <div></div>
    </div>
  );
}
