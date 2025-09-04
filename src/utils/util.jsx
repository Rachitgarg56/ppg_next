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
    title: 'Zoa, Wichita',
    image: 'https://plus.unsplash.com/premium_photo-1723300354426-e8c90954f6d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'zoa-wichita',
    description: 'good Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti laboriosam consequuntur maxime quod cupiditate expedita amet vel porro labore, totam repellat voluptas quos similique!',
    elements: [
      {
        title: 'Objectives Planning and Execution:',
        type: 'list',
        listItems: ['Enhanced brand image', ' Engage consumers', 'Increase brand loyalty', 'Boost sales'],
      },
      {
        title: 'Key Components:',
        type: 'underline',
        listItems: [
          {
            bullet: 'Venue and Setup:',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem voluptatem quam corporis illum cupiditate nesciunt at omnis recusandae alias!',
          },
          {
            bullet: 'Entertainment and Activities:',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, cum quod alias minima facere ut ipsam explicabo laborum ex labore? Ratione, voluptatem odio.',
          },
          {
            bullet: 'Product sampling and sales:',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro reprehenderit perferendis hic impedit possimus expedita nisi ducimus! Hic, fugiat odio?',
          },
          {
            bullet: 'Social Media Integration:',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo ipsum recusandae vitae non? Dolorem in adipisci voluptate sit voluptas pariatur quis?',
          },
          {
            bullet: 'Sustainability Efforts:',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequuntur illo id fugiat dolorum perferendis nihil est repellat repellendus necessitatibus harum voluptate voluptates dolor.',
          },
        ]
      },
      {
        title: 'Outcomes:',
        type: 'underline',
        listItems: [
          {
            bullet: 'Brand Engagement:',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem voluptatem quam corporis illum cupiditate nesciunt at omnis recusandae alias!',
          },
          {
            bullet: 'Social Media Impact:',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, cum quod alias minima facere ut ipsam explicabo laborum ex labore? Ratione, voluptatem odio.',
          },
          {
            bullet: 'Sales boost:',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro reprehenderit perferendis hic impedit possimus expedita nisi ducimus! Hic, fugiat odio?',
          },
          {
            bullet: 'Sustainibility recognition:',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo ipsum recusandae vitae non? Dolorem in adipisci voluptate sit voluptas pariatur quis?',
          },
        ]
      }
    ],
    conclustion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quibusdam? Repellendus perferendis ut eaque voluptatem, reprehenderit ducimus error animi vel beatae!',
  },
  {
    title: 'Corona On Premise Tasting',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1723743809921-07781a7c6535?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'corona-premise',
    description: 'Batter up! What better way to enjoy The World Series than in a sports bar with friends and family? That’s why Paddy O’s in St. Louis was a perfect place to watch people play ball. Wings, burgers, and the cold refreshing taste of Corona made for an afternoon to remember. This was one game we are likely never to forget!',
  },
  {
    title: 'Molson Coors Balloon Races',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1723743809921-07781a7c6535?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'molson-coors',
    description: 'An exciting day at the Forest Park Balloon Races was sure to be made better with a cold, enlivening drink! It was a perfect place for us to activate Simply Spiked, a series of delicious, medium-strength alcoholic refreshers by the Molson Coors beverage company. Across two days, as hundreds of patrons enjoyed the festivities, we were there to help them rehydrate and have a great time!',
  },
  {
    title: 'Minus196 Songs for Soldiers',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'soldiers-songs',
    description: 'Songs4Soldiers is a charitable organisation and music event dedicated to serving the needs of veterans. We were honored and privileged to represent -196 at the event, doing our part to help everyone there have a good time and raise funds for important services for our veterans.',
  },
]
