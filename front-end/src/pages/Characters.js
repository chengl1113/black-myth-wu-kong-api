import React from 'react'
import SchemaTable from '../components/SchemaTable';
import CodeBlock from '../components/CodeBlock';
import RouteTable from '../components/RouteTable';
import { Helmet } from 'react-helmet';

const Characters = () => {
  const jsonString = `{
    "success": true,
    "count": 3,
    "data": [
        {
            "_id": "66cab498173c7047a8e966ea",
            "name": "Black Loong",
            "description": "One of the Yaoguai King. One of the Four Loongs",
            "location": "Fright Cliff"
        },
        {
            "_id": "66cab498173c7047a8e966e6",
            "name": "Baw-Li-Guhh-Lang",
            "description": "One of the Yaoguai Chief.",
            "location": "Bamboo Grove"
        },
        {
            "_id": "66cab498173c7047a8e966e9",
            "name": "Black Bear Guai",
            "description": "One of the Yaoguai King.",
            "location": "Black Wind Cave"
        }
      ]
}`

  const schema = [
    ['name', 'string', 'Name of the character or enemy'],
    ['description', 'string', 'Description of the character or enemy'],
    ['location', 'string', 'Location of the character or enemy']
  ]
  const url = "http://localhost:5000/api/characters";
  const description = "This route retrieves a list of all the characters and enemies of ";
  return (
    <>
      <Helmet>
        <title>Characters - Black Myth Wukong API</title>
        <meta name="description" content="This is the page for the characters route for the Black Myth Wukong API" />
        <link rel="canonical" href="https://black-myth-wu-kong-api.vercel.app/characters" />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
        <h1>Characters Route</h1>
        <br />
        <h2>Introduction</h2>
        <p>This route fetches a list of all characters and enemies that can be encountered in Black Myth: Wukong, and outputs that in JSON format.</p>
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

export default Characters