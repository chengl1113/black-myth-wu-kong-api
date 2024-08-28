import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';
import { Helmet } from 'react-helmet';

const Ingredients = () => {
  const jsonString = `{
    "success": true,
    "count": 2,
    "data": [
        {
            "_id": "66cac2e2173c7047a8e967a9",
            "name": "Purple Lingzhi",
            "rarity": "Uncommon",
            "cost_will": 90,
            "description": "An auspicious fungus that features a luxurious purple hue. This can be used to make medicines"
        },
        {
            "_id": "66cac2e2173c7047a8e967a2",
            "name": "Fragrant Jade Flower",
            "rarity": "Uncommon",
            "cost_will": 120,
            "description": "Possessing a cool fragrance, it bestows relief and solace upon inhalation. This can be used to make medicines"
        }
      ]
}`
  const schema = [
    ['name', 'string', 'Name of the ingredient'],
    ['rarity', 'string', 'Rarity of the ingredient'],
    ['cost_will', 'number', 'Will cost of the ingredient'],
    ['description', 'string', 'A short description of the item'],
  ]
  const url = "http://localhost:5000/api/ingredients";
  const description = "This route retrieves a list of all the armors of ";
  return (
    <>
      <Helmet>
        <title>Ingredients - Black Myth Wukong API</title>
        <meta name="description" content="This is the page for the ingredients route for the Black Myth Wukong API" />
        <link rel="canonical" href="https://black-myth-wu-kong-api.vercel.app/ingredients" />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
        <h1>Ingredients Route</h1>
        <br />
        <h2>Introduction</h2>
        <p>This route fetches a list of all the ingredients that can be obtained in Black Myth: Wukong, and outputs that in JSON format.</p>
        <h2>Schema</h2>
        <SchemaTable schema={schema} />
        <h2>Sample Result</h2>
        <CodeBlock jsonString={jsonString} />
        <h2>Route</h2>
        <RouteTable url={url} description={description} />
      </div>
    </>
  )
}

export default Ingredients