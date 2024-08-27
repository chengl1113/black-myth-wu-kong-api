import React from 'react';
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';

const Medicines = () => {
  const jsonString = `{
    "success": true,
    "count": 3,
    "data": [
        {
            "_id": "66cabcef173c7047a8e9676f",
            "name": "Antimiasma Powder",
            "rarity": "Uncommon",
            "cost_will": 180,
            "effect": "Upon use, instantly removes Poisoned State and significantly increases Poison Resistance for a short duration",
            "type": "Alleviating"
        },
        {
            "_id": "66cabcef173c7047a8e96773",
            "name": "Ginseng Pellets",
            "rarity": "Uncommon",
            "cost_will": 0,
            "effect": "Upon use, slowly grants Focus for a short duration",
            "type": "Alleviating"
        },
        {
            "_id": "66cabcef173c7047a8e96778",
            "name": "Mirage Pill",
            "rarity": "Epic",
            "cost_will": 0,
            "effect": "Upon use, instantly gains a considerable amount of Might",
            "type": "Reassuring"
        }
      ]
}`
  const schema = [
    ['name', 'string', 'Name of the medicine'],
    ['rarity', 'string', 'Rarity of the medicine'],
    ['cost_will', 'number', 'Will cost of the medicine'],
    ['effect', 'string', 'Effect of the medicine'],
    ['type', 'string', 'The type of the medicine'],
  ]
  const url = "http://localhost:5000/api/medicines";
  const description = "This route retrieves a list of all the medicines of ";
  return (
    <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
      <h1>Medicines Route</h1>
      <br />
      <h2>Introduction</h2>
      <p>This route fetches a list of all the medicines that can be obtained in Black Myth: Wu Kong, and outputs that in JSON format.</p>
      <h2>Schema</h2>
      <SchemaTable schema={schema} />
      <h2>Sample Result</h2>
      <CodeBlock jsonString={jsonString} />
      <h2>Route</h2>
      <RouteTable url={url} description={description} />
    </div>
  )
}

export default Medicines