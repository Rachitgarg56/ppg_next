import React from 'react'

const testimonials = [
    {image: "", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?", name: "John Doe", title: "BA 1", },
    {image: "", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?", name: "Jane Doe", title: "BA 2", },
    {image: "", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?", name: "John Smith", title: "BA 3", },
]

const page = () => {
  return (
    <div className='bg-[#178DA1] text-white py-8'>
        <div className="text-center text-5xl font-bold text-white italic font-cambria">Careers</div>
        <div className="mt-8 text-2xl sm:text-3xl tracking-wide font-thin leading-relaxed px-8 mx-auto text-center sm:w-2/3 pb-4 md:pb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?
        </div>
        <div className="flex flex-wrap mx-auto justify-center gap-4 items-center bg-[#178DA1]">
            {
                testimonials.map((testimonial) => {
                    return (
                        <div className="flex items-center justify-center">
                            <div className="h-48 w-48 rounded-full bg-white"></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default page