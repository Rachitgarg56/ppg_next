'use client'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const clients = [
    {name: "Client 1", image: "", },
    {name: "Client 2", image: "", },
    {name: "Client 3", image: "", },
    {name: "Client 4", image: "", },
    {name: "Client 5", image: "", },
    {name: "Client 6", image: "", },
    {name: "Client 7", image: "", },
    {name: "Client 8", image: "", },
]

const Clients = () => {
    const [clientCols, setClientCols] = useState(4)

    const clientColsClass = 'grid-cols-' + clientCols;
    
    return (
        <div className="bg-black p-8 overflow-x-auto">
            <div className={`grid gap-6 py-16 md:py-32 ${clientColsClass} grid-cols-4`}>
                {
                    clients.map((client) => {
                        return (
                            <div key={uuidv4()} className="h-16 md:h-32 bg-cyan-100 rounded flex items-center justify-center text-md md:text-2xl">
                                {client.name}
                                {/* <!-- <img :src="tesmimonial.image" alt=""> --> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Clients
