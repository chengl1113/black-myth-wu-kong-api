import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';
import { Helmet } from 'react-helmet';

const Weapons = () => {
  const jsonString = `{
    "sucess": true,
    "count": 2,
    "data": [
        {
            "_id": "66cab6be173c7047a8e96748",
            "name": "Golden Loong Staff",
            "rarity": "Mythical",
            "attack": 108,
            "defense": 0,
            "crit_percent": 0,
            "effect": "Moderately increases the Damage dealt by all Pillar Stance moves. A loong can be summoned to execute Thunder at the enemy at Pillar Stance Heavy Attacks that cost 3 or 4 Focus Points."
        },
        {
            "_id": "66cab6be173c7047a8e9674a",
            "name": "Kang-Jin Staff",
            "rarity": "Epic",
            "attack": 70,
            "defense": 0,
            "crit_percent": 6,
            "effect": "Punishing Downpour executes Thunder Damage to the enemy instead of area Damage."
        }
      ]
}`
  const schema = [
    ['name', 'string', 'Name of the weapon'],
    ['rarity', 'string', 'Rarity of the weapon'],
    ['attack', 'number', 'Attack of the weapon'],
    ['defense', 'number', 'defense of the weapon'],
    ['crit_percent', 'number', 'Crit percent of the weapon'],
    ['effect', 'string', 'Effect of the weapon'],
  ]
  const url = "http://localhost:5000/api/weapons";
  const description = "This route retrieves a list of all the weapons of ";
  return (
    <>
      <Helmet>
        <title>Weapons - Black Myth Wukong API</title>
        <meta name="description" content="This is the page for the weapons route for the Black Myth Wukong API" />
        <link rel="canonical" href="https://black-myth-wu-kong-api.vercel.app/weapons" />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
        <h1>Weapons Route</h1>
        <br />
        <h2>Introduction</h2>
        <p>This route fetches a list of all the weapons that can be obtained in Black Myth: Wukong, and outputs that in JSON format.</p>
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

export default Weapons