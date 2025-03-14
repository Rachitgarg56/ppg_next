import { Metadata } from "next";
import React from "react";

import WorkSection from "@/components/WorkSection";

// export const generateMetadata = (): Metadata => {
//     return {
//       title: "My App",
//       description: "This is a Next.js app",
//       openGraph: {
//         images: [
//           {
//             url: "",
//             alt: "Preview image for My App",
//           },
//         ],
//         title: "My App",
//         description: "This is a Next.js app",
//         type: "website",
//       },
//     };
// };

const page = () => {
  return (
    <div className="bg-black">
      <div className="text-center text-5xl font-bold text-white italic font-cambria pb-16">
        Work
      </div>

      <WorkSection/>
    </div>
  );
};

export default page;
