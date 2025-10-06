export const heroImages = [
    {path: "", size: 24, left: 5, top: 25, },
    {path: "", size: 12, left: 12, top: 61, },
    {path: "", size: 16, left: 30, top: 51, },
    {path: "", size: 8, left: 50, top: 61, },
    {path: "", size: 12, left: 60, top: 61, },
    {path: "", size: 12, left: 50, top: 51, },
    {path: "", size: 12, left: 43, top: 41, },
    {path: "", size: 48, left: 80, top: 38, },
  
    {size: 16, left: 80, top: 15, path: "/assets/images/home/home-bubble-img1.jpg", url: "/work", color: "violet"},
    {size: 48, left: 70, top: 56, path: "/assets/images/home/home-bubble-img2.jpg", url: "/work", color: "indigo"},
    {size: 72, left: 15, top: 11, path: "/assets/images/home/home-bubble-img3.jpg", url: "/work", color: "blue"},
    {size: 56, left: 48, top: 65, path: "/assets/images/home/home-bubble-img4.jpg", url: "/work", color: "green"},
    {size: 96, left: 44, top: 16, path: "/assets/images/home/home-bubble-img5.jpg", url: "/work", color: "yellow"},
    {size: 96, left: 8, top: 61, path: "/assets/images/home/home-bubble-img6.jpg", url: "/work", color: "orange"},
    {size: 64, left: 0, top: 36, path: "/assets/images/home/home-bubble-img7.jpg", url: "/work", color: "red"},
]

export const socials = [
    // {name: "LinkedIn", icon: "linkedin.png", url: "https://linkedin.com/", },
    {name: "Instagram", icon: "instagram.png", url: "https://www.instagram.com/prestige_promotion_group_llc", },
    {name: "Facebook", icon: "facebook.png", url: "https://www.facebook.com/p/Prestige-Promotion-Group-LLC-100063792138258/", },
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
    {image: "", title: "Partnership", subtitle: "We are here for you", details: "We are an extension of your brand, and have a personal stake in its growth."},
    {image: "", title: "Consistency", subtitle: "We are at it, always", details: "We pride ourselves on taking care of the event before, during, and after, every time."},
    {image: "", title: "Reliability", subtitle: "We got your back", details: "40+ brands trust us to be on the ground and represent them to the customer, and we take that seriously."},
    {image: "", title: "Innovation", subtitle: "We lead with creativity", details: "Interactive marketing is a space ripe for creativity and avant garde ideas, and we do our best to create a strategy that works for you."},
    {image: "", title: "Adaptability", subtitle: "We evolve to meet your needs", details: "The events space is dynamic, and we’re flexible to meet every change and challenge."},
]

export const works = [
  {
    title: 'Zoa, Wichita',
    image: '/assets/images/work/workpage-zoa.jpg',
    slug: 'zoa-wichita',
    description: 'Zoa reached out to us to promote a line of their energy drinks. We love a good outdoor party, and at a basketball game in Wichita, we were proud to have sports fans experience the delicious and energizing taste of Zoa zero sugar energy drinks. Placed next to giants such as Prime hydration and Coors, we were happy to hand out Zoa to discerning patrons, including our men and women in blue at the event.',
    // elements: [
    //   {
    //     title: 'Objectives Planning and Execution:',
    //     type: 'list',
    //     listItems: ['Enhanced brand image', ' Engage consumers', 'Increase brand loyalty', 'Boost sales'],
    //   },
    //   {
    //     title: 'Key Components:',
    //     type: 'underline',
    //     listItems: [
    //       {
    //         bullet: 'Venue and Setup:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem voluptatem quam corporis illum cupiditate nesciunt at omnis recusandae alias!',
    //       },
    //       {
    //         bullet: 'Entertainment and Activities:',
    //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, cum quod alias minima facere ut ipsam explicabo laborum ex labore? Ratione, voluptatem odio.',
    //       },
    //       {
    //         bullet: 'Product sampling and sales:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro reprehenderit perferendis hic impedit possimus expedita nisi ducimus! Hic, fugiat odio?',
    //       },
    //       {
    //         bullet: 'Social Media Integration:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo ipsum recusandae vitae non? Dolorem in adipisci voluptate sit voluptas pariatur quis?',
    //       },
    //       {
    //         bullet: 'Sustainability Efforts:',
    //         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequuntur illo id fugiat dolorum perferendis nihil est repellat repellendus necessitatibus harum voluptate voluptates dolor.',
    //       },
    //     ]
    //   },
    //   {
    //     title: 'Outcomes:',
    //     type: 'underline',
    //     listItems: [
    //       {
    //         bullet: 'Brand Engagement:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem voluptatem quam corporis illum cupiditate nesciunt at omnis recusandae alias!',
    //       },
    //       {
    //         bullet: 'Social Media Impact:',
    //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, cum quod alias minima facere ut ipsam explicabo laborum ex labore? Ratione, voluptatem odio.',
    //       },
    //       {
    //         bullet: 'Sales boost:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro reprehenderit perferendis hic impedit possimus expedita nisi ducimus! Hic, fugiat odio?',
    //       },
    //       {
    //         bullet: 'Sustainibility recognition:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo ipsum recusandae vitae non? Dolorem in adipisci voluptate sit voluptas pariatur quis?',
    //       },
    //     ]
    //   }
    // ],
    // conclusion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quibusdam? Repellendus perferendis ut eaque voluptatem, reprehenderit ducimus error animi vel beatae!',
  },
  {
    title: 'Corona On Premise Tasting',
    image: '/assets/images/work/workpage-corona.jpg',
    slug: 'corona-premise',
    description: 'Batter up! What better way to enjoy The World Series than in a sports bar with friends and family? That’s why Paddy O’s in St. Louis was a perfect place to watch people play ball. Wings, burgers, and the cold refreshing taste of Corona made for an afternoon to remember. This was one game we are likely never to forget!',
  },
  {
    title: 'Molson Coors Balloon Races',
    image: '/assets/images/work/workpage-balloon.jpg',
    slug: 'molson-coors',
    description: 'An exciting day at the Forest Park Balloon Races was sure to be made better with a cold, enlivening drink! It was a perfect place for us to activate Simply Spiked, a series of delicious, medium-strength alcoholic refreshers by the Molson Coors beverage company. Across two days, as hundreds of patrons enjoyed the festivities, we were there to help them quench their thirst and have a great time!',
  },
  {
    title: 'Minus196 Songs for Soldiers',
    image: '/assets/images/work/workpage-veterans.jpg',
    slug: 'soldiers-songs',
    description: 'Songs4Soldiers is a charitable organisation and music event dedicated to serving the needs of veterans. We were honored and privileged to represent -196 at the event, doing our part to help everyone there have a good time and raise funds for important services for our veterans.',
  },
]
