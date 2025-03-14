export const heroImages = [
    {path: "", size: 24, left: 5, top: 25, },
    {path: "", size: 12, left: 12, top: 61, },
    {path: "", size: 16, left: 30, top: 51, },
    {path: "", size: 8, left: 50, top: 61, },
    {path: "", size: 12, left: 60, top: 61, },
    {path: "", size: 12, left: 50, top: 51, },
    {path: "", size: 12, left: 43, top: 41, },
    {path: "", size: 48, left: 80, top: 38, },
  
    {size: 16, left: 80, top: 15, path: "https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "violet"},
    {size: 48, left: 70, top: 56, path: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "indigo"},
    {size: 72, left: 15, top: 11, path: "https://images.unsplash.com/photo-1616428317393-acd93938b4fa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "blue"},
    {size: 56, left: 48, top: 65, path: "https://images.unsplash.com/photo-1473178171362-c7a560dc2971?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "green"},
    {size: 96, left: 44, top: 16, path: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "yellow"},
    {size: 96, left: 8, top: 61, path: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "orange"},
    {size: 64, left: 0, top: 36, path: "https://images.unsplash.com/photo-1522057306606-8d84daa75e87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "red"},
]

export const socials = [
    {name: "LinkedIn", icon: "linkedin.png", url: "https://linkedin.com/", },
    {name: "Instagram", icon: "instagram.png", url: "https://instagram.com/", },
    {name: "Facebook", icon: "facebook.png", url: "https://www.facebook.com/", },
];

export const formPagesData = [
    {
        tabId: 1,
        tabLabel: 'Side Heros',
        formTitle: 'Data Entry for Side Heros',
        formInputs: [
            {      
                label: 'Order ID',
                type: 'number',
                required: true,
                name: 'orderId',
            },
            {      
                label: 'Image Path',
                type: 'text',
                required: true,
                name: 'imagePath',
            },
            {      
                label: 'Text',
                type: 'text',
                required: true,
                name: 'text',
            },
            // {      
            //     label: 'Active',
            //     type: 'checkbox',
            //     required: false,
            //     name: 'isActive',
            // },
        ],
        dbCollectionId: 'sideHeros',
    },
]

export const coreValues = [
    {image: "", title: "Partnership", subtitle: "We are here for you", details: "We are here for you, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Consistency", subtitle: "We are at it, always", details: "We are at it, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Reliability", subtitle: "We got your back", details: "We got your back, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Innovation", subtitle: "We lead with creativity", details: "We lead with creativity, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Adaptability", subtitle: "We evolve to meet your needs", details: "We evolve to meet your needs, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
]

export const works = [
  {
    title: "Sunset Bliss Fest",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti laboriosam consequuntur maxime quod cupiditate expedita amet vel porro labore, totam repellat voluptas quos similique!",
    image:
      "https://plus.unsplash.com/premium_photo-1723300354426-e8c90954f6d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    elements: [
      {
        title: "Objectives, Planning & Execution",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti",
        bullets: [
          {
            title: "Enhance Brand Image",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          { title: "Engage Customers", details: "" },
          { title: "Increase Brand Loyalty", details: "" },
          { title: "Boost Sales", details: "" },
        ],
      },
      {
        title: "Key Components",
        bullets: [
          {
            title: "Venue & Setup",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          { title: "Entertainment & Activities", details: "" },
          { title: "Increase Brand Loyalty", details: "" },
          { title: "Boost Sales", details: "" },
        ],
      },
      {
        title: "Conclusion",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti",
      },
    ],
    slug: "sunset-bliss-fest",
  },
  {
    title: "Beer Pong",
    image:
      "https://images.unsplash.com/photo-1568667185695-edcbcd4938cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "beer-pong",
  },
  // {
  //   title: "",
  //   image:
  //     "https://images.unsplash.com/photo-1723743809921-07781a7c6535?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   title: "",
  //   image:
  //     "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   title: "",
  //   image:
  //     "https://images.unsplash.com/photo-1723766700475-3f8f1d3c0c1a?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   title: "",
  //   image:
  //     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   title: "",
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1723924941212-b03a8db60215?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   title: "",
  //   image:
  //     "https://images.unsplash.com/photo-1723934603827-e5a2dd061ba2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
];