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