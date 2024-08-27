import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';

const KeyItems = () => {
  const jsonString = `{
    "success": true,
    "count": 10,
    "data": [
        {
            "_id": "66ccf6a4475a1e234fc0a83f",
            "name": "Keeness of Tiger",
            "rarity": "Rare"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a83d",
            "name": "Arhat Gold Piece",
            "rarity": "Legendary"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a841",
            "name": "Skandha of Feeling",
            "rarity": "Rare"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a83e",
            "name": "Buddha's Eyeball",
            "rarity": "Rare"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a844",
            "name": "Sterness of Stone",
            "rarity": "Rare"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a840",
            "name": "Loong Scales",
            "rarity": "Legendary"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a845",
            "name": "Stone Essence",
            "rarity": "Rare"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a846",
            "name": "Old Rattle-Drum",
            "rarity": "Legendary"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a842",
            "name": "Skandha of Form",
            "rarity": "Uncommon"
        },
        {
            "_id": "66ccf6a4475a1e234fc0a843",
            "name": "Sobering Stone",
            "rarity": "Rare"
        }
    ]
}`
  const schema = [
    ['name', 'string', 'Name of the key item'],
    ['rarity', 'string', 'Rarity of the key item']
  ]
  const url = "http://localhost:5000/api/keyItems";
  const description = "This route retrieves a list of all the key items of ";
  return (
    <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
      <h1>Key Items Route</h1>
      <br />
      <h2>Introduction</h2>
      <p>This route fetches a list of all the key items that can be obtained in Black Myth: Wu Kong, and outputs that in JSON format.</p>
      <h2>Schema</h2>
      <SchemaTable schema={schema} />
      <h2>Sample Result</h2>
      <CodeBlock jsonString={jsonString} />
      <h2>Route</h2>
      <RouteTable url={url} description={description} />
    </div>
  )
}

export default KeyItems