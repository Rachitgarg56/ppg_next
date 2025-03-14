import Clients from '@/components/Clients';
import HeroSection from '@/components/HeroSection';
import SideHero from '@/components/SideHero';
import Testimonials from '@/components/Testimonials';
import { Metadata } from 'next';

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

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection/>

      {/* Side hero */ }
      <SideHero/>

      {/* Testimonials */}
      <Testimonials/>

      {/* Clients */}
      <Clients/>

      {/*  Buttons */}
      <div className="bg-black flex flex-col md:flex-row items-center justify-center space-x-4 pb-16">
          <div className="w-80 h-80 rounded-full bg-[#178DA1] text-white flex items-center justify-center text-3xl font-semibold font-cambria italic">Work with us</div>
          <div className="w-56 h-56 rounded-full bg-[#178DA1] mt-8 md:mt-48 text-white flex items-center justify-center text-2xl font-semibold font-cambria italic">Work for us</div>
      </div>
    </>
  );
}
