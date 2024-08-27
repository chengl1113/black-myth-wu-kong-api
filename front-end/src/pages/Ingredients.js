import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';

const Ingredients = () => {
    const jsonString = `{
        success: true,
        count: 2,
        data: [{
            id: "17f69448ceel0i0a57bokoqz409yb",
            name: "Firebone Arrow",
            image: "https://eldenring.fanapis.com/images/ammos/17f69448ceel0i0a57bokoqz409yb.png",
            description: "Arrow whittled from animal bones. The tip is set alight before firing",
            type: "Pierce",
            attackPower: [{
                name: "Phy",
                amount: 10
              },
              {
                name: "Mag",
                amount: 0
              },
              {
                name: "Fire",
                amount: 90
              },
              {
                name: "Ligt",
                amount: 0
              },
              {
                name: "Holy",
                amount: 0
              },
              {
                name: "Crit",
                amount: 100
              }
            ],
            passive: "-"
          },
          {
            id: "17f695dc715l0i0a59pf1x5fb5112r",
            name: "Bloodbone Arrow (fletched)",
            image: "https://eldenring.fanapis.com/images/ammos/17f695dc715l0i0a59pf1x5fb5112r.png",
            description: "Arrow whittled from animal bones. The tip is daubed with a golden tincture. Deals holy damage. Craftable item. The fletching adds distance to the arrow's flight.",
            type: "Pierce",
            attackPower: [{
                name: "Phy",
                amount: 25
              },
              {
                name: "Mag",
                amount: 0
              },
              {
                name: "Fire",
                amount: 0
              },
              {
                name: "Ligt",
                amount: 0
              },
              {
                name: "Holy",
                amount: 0
              },
              {
                name: "Crit",
                amount: 100
              }
            ],
            passive: "Causes blood loss build up (55)"
          }
        ]
      }`

    return (
        <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
            <h1>Armors Route</h1>
            <br />
            <h2>Introduction</h2>
            <p>This route fetches a list of all armors that can be obtained in Black Myth: Wu Kong, and outputs that in JSON format.</p>
            <h2>Schema</h2>
            <SchemaTable />
            <h2>Sample Result</h2>
            <CodeBlock jsonString={jsonString} />
            <h2>Route</h2>
            <RouteTable />
        </div>
    )
}

export default Ingredients