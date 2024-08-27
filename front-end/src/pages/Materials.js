import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';

const Materials = () => {
  const jsonString = `{
    "success": true,
    "count": 3,
    "data": [
        {
            "_id": "66cac0e0173c7047a8e9678f",
            "name": "Jade Fang",
            "rarity": "Uncommon",
            "description": "A tooth for a tooth, the Whiteclad Noble has paid his blood debt. his fang can be used in crafting weapons"
        },
        {
            "_id": "66cac0e0173c7047a8e96790",
            "name": "Knot of Voidness",
            "rarity": "Legendary",
            "description": "From voidness, it grabs completeness. This is the legendary tool you need for Spirit Cultivation"
        },
        {
            "_id": "66cac0e0173c7047a8e96792",
            "name": "Luojia Fragrant Vine",
            "rarity": "Legendary",
            "description": "This vine resides in Guanyin's Purple Bamboo Grove, drinking sweet dew by day and listening to the sound of tides by night. It can be used for gourd upgrades"
        }
      ]
}`
  const schema = [
    ['name', 'string', 'Name of the material'],
    ['rarity', 'string', 'Rarity of the material'],
    ['description', 'string', 'A short description of the material'],
  ]
  const url = "http://localhost:5000/api/materials";
  const description = "This route retrieves a list of all the materials of ";
  return (
    <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
      <h1>Materials Route</h1>
      <br />
      <h2>Introduction</h2>
      <p>This route fetches a list of all the materials that can be obtained in Black Myth: Wu Kong, and outputs that in JSON format.</p>
      <h2>Schema</h2>
      <SchemaTable schema={schema} />
      <h2>Sample Result</h2>
      <CodeBlock jsonString={jsonString} />
      <h2>Route</h2>
      <RouteTable url={url} description={description} />
    </div>
  )
}

export default Materials