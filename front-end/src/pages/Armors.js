import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';
import { Helmet } from 'react-helmet';

const Armors = () => {
  const jsonString = `{
    "success": true,
    "count": 2,
    "data": [
        {
            "_id": "66caba17173c7047a8e9675e",
            "name": "Bronze Armguard",
            "rarity": "Rare",
            "defense": 12,
            "set_bonus": "Evil Crasher",
            "set": "Bronze Monkey Armor Set",
            "effect": "Performing Light Attack following Evanescence directly triggers the Finisher of Light Attack Combo.",
            "type": "arms"
        },
        {
            "_id": "66caba17173c7047a8e96768",
            "name": "Ebongold Gaiters",
            "rarity": "Rare",
            "defense": 19,
            "set_bonus": "Dance of the Black Wind",
            "set": "Ebongold Armor Set",
            "effect": "After a moment in Cloud Step, considerably increases Unveiling Strike Damage.",
            "type": "legs"
        }
      ]
}`

  const schema = [
    ['name', 'string', 'Name of the armor piece'],
    ['rarity', 'string', 'Rarity of the armor piece'],
    ['defense', 'number', 'How much defense this armor piece provides'],
    ['set_bonus', 'string', 'Set bonus that this armor provides'],
    ['set', 'string', 'Set that this armor is a part of'],
    ['effect', 'string', 'Special effects of this armor'],
    ['type', 'string', 'Category of the armor piece (headgear, chest, arms, or legs)'],
  ]
  const url = "http://localhost:5000/api/armors";
  const description = "This route retrieves a list of all the armors of ";
  return (
    <>
      <Helmet>
        <title>Armors - Black Myth Wukong API</title>
        <meta name="description" content="This is the page for the armors route for the Black Myth Wukong API" />
        <link rel="canonical" href="https://black-myth-wu-kong-api.vercel.app/armors" />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
        <h1>Armors Route</h1>
        <br />
        <h2>Introduction</h2>
        <p>This route fetches a list of all armors that can be obtained in Black Myth: Wukong, and outputs that in JSON format.</p>
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

export default Armors