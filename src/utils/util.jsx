export const heroImages = [
    {path: "", size: 24, left: 5, top: 25, },
    {path: "", size: 12, left: 12, top: 61, },
    {path: "", size: 16, left: 30, top: 51, },
    {path: "", size: 8, left: 50, top: 61, },
    {path: "", size: 12, left: 60, top: 61, },
    {path: "", size: 12, left: 50, top: 51, },
    {path: "", size: 12, left: 43, top: 41, },
    {path: "", size: 48, left: 80, top: 38, },
  
    {size: 16, left: 80, top: 15, path: "https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/url1", color: "violet"},
    {size: 48, left: 70, top: 56, path: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/url2", color: "indigo"},
    {size: 72, left: 15, top: 11, path: "https://images.unsplash.com/photo-1616428317393-acd93938b4fa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/work", color: "blue"},
    {size: 56, left: 48, top: 65, path: "https://images.unsplash.com/photo-1473178171362-c7a560dc2971?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/url4", color: "green"},
    {size: 96, left: 44, top: 16, path: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/url5", color: "yellow"},
    {size: 96, left: 8, top: 61, path: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/url6", color: "orange"},
    {size: 64, left: 0, top: 36, path: "https://images.unsplash.com/photo-1522057306606-8d84daa75e87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "/url7", color: "red"},
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