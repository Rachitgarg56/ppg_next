import Clients from '@/components/Clients';
import SideHero from '@/components/SideHero';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid'

const heroImages = [
  {path: "", size: "24", left: 0, top: 0, },
  {path: "", size: "12", left: 12, top: 30, },
  {path: "", size: "16", left: 30, top: 40, },
  {path: "", size: "8", left: 50, top: 50, },
  {path: "", size: "12", left: 70, top: 50, },
  {path: "", size: "12", left: 50, top: 40, },
  {path: "", size: "12", left: 45, top: 30, },
  {path: "", size: "48", left: 105, top: 10, },

  {size: "16", left: 95, top: -10, path: "https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  {size: "48", left: 95, top: 40, path: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  {size: "72", left: 15, top: -10, path: "https://images.unsplash.com/photo-1616428317393-acd93938b4fa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  {size: "56", left: 65, top: 60, path: "https://images.unsplash.com/photo-1473178171362-c7a560dc2971?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  {size: "96", left: 50, top: 0, path: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  {size: "96", left: 10, top:50, path: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  {size: "64", left: 0, top:22, path: "https://images.unsplash.com/photo-1522057306606-8d84daa75e87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
]

export default function Home() {
  return (
    <>
      <div className='bg-black pb-32'>
        {/* <div className="w-full md:w-2/3 mx-auto h-screen relative">
          {
            heroImages.map((heroImage) => {
              return (
                <div
                  key={uuidv4()}
                  className="border-4 border-gray-600 rounded-full bg-cover absolute"
                  style={{
                    height: `${heroImage.size}px`,
                    width: `${heroImage.size}px`,
                    top: `${heroImage.top}%`,
                    left: `${heroImage.left}%`,
                    backgroundImage: `url(${heroImage.path})`,
                  }}
                ></div>
              )
            })
          }
        </div> */}
        {/* Quote */}
        <div className="text-center mx-auto w-full md:w-2/3 leading-relaxed px-8">
          <div className="font-thin text-gray-100 text-2xl md:text-3xl leading-relaxed md:leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis sunt velit explicabo modi rem voluptatibus accusamus consectetur! Numquam quisquam velit neque quos porro molestias quaerat molestiae iusto cum? Ullam!</div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-24">
            <Link href="#" className="border border-gray-100 text-center py-6 text-2xl md:text-3xl text-[#178DA1] italic tracking-wider font-cambria font-semibold w-full">capabilities</Link>
            <Link href="#" className="border border-gray-100 text-center py-6 text-2xl md:text-3xl text-[#178DA1] italic tracking-wider font-cambria font-semibold mt-8 md:mt-0 md:ml-16 w-full">work with us</Link>
          </div>
        </div>
      </div>

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
