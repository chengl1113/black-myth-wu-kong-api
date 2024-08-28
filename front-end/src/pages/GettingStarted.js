import React from 'react';
import pic from '../assets/black-myth-wukong.jpg';
import { Image } from 'react-bootstrap';
import CodeBlock from '../components/CodeBlock';

const GettingStarted = () => {
    const url = 'http://localhost:5000/api/weapons';
    const jsonString = `{
        "sucess": true,
        "count": 11,
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
            },
            {
                "_id": "66cab6be173c7047a8e96750",
                "name": "Wind Bear Staff",
                "rarity": "Rare",
                "attack": 50,
                "defense": 0,
                "crit_percent": 4,
                "effect": "Considerably increases the Critical Hit Chance of the Unveiling Strike of Cloud Step."
            },
            {
                "_id": "66cab6be173c7047a8e9674b",
                "name": "Loongwreathe Staff",
                "rarity": "Epic",
                "attack": 70,
                "defense": 0,
                "crit_percent": 0,
                "effect": "Moderately increases the Damage dealt by all Pillar Stance moves."
            },
            {
                "_id": "66cab6be173c7047a8e9674f",
                "name": "Willow Wood Staff",
                "rarity": "Common",
                "attack": 30,
                "defense": 0,
                "crit_percent": 0,
                "effect": "No unique effect"
            },
            {
                "_id": "66cab6be173c7047a8e96747",
                "name": "Cloud-Patterned Stone Staff",
                "rarity": "Rare",
                "attack": 60,
                "defense": 30,
                "crit_percent": 0,
                "effect": "Moderately increases the Damage executed by charged Smash Heavy Attacks."
            },
            {
                "_id": "66cab6be173c7047a8e9674d",
                "name": "Twin Serpents Staff",
                "rarity": "Uncommon",
                "attack": 40,
                "defense": 0,
                "crit_percent": 0,
                "effect": "Moderately increase the Damage of Light Attack Combo finishers. The effect is massively enhanced when fighting in water."
            },
            {
                "_id": "66cab6be173c7047a8e96746",
                "name": "Bronze Cloud Staff",
                "rarity": "Uncommon",
                "attack": 36,
                "defense": 0,
                "crit_percent": 2,
                "effect": "No unique effect"
            },
            {
                "_id": "66cab6be173c7047a8e96749",
                "name": "Jingubang",
                "rarity": "Mythical",
                "attack": 135,
                "defense": 0,
                "crit_percent": 6,
                "effect": "The gauge of the 4th Focus Point no longer depletes over time."
            },
            {
                "_id": "66cab6be173c7047a8e9674c",
                "name": "Rat Sage Staff",
                "rarity": "Epic",
                "attack": 66,
                "defense": 0,
                "crit_percent": 7,
                "effect": "The Fourth Move of Light Attack Combo and Mobile Staff Spin can stir up a whirlwind of sands, increases attack range and Damage."
            },
            {
                "_id": "66cab6be173c7047a8e9674e",
                "name": "Visionary Centipede Staff",
                "rarity": "Legendary",
                "attack": 90,
                "defense": 0,
                "crit_percent": 10,
                "effect": "Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health; if the enemy is in Poisoned State, massively enhances the recovery."
            }
        ]
    }`

    return (
        <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', margin: '5% auto', width: "60%" }}>
            <h1>Black Myth: Wukong API</h1>
            <br />
            <Image src={pic} thumbnail />
            <br />
            <p>
                Black Myth: Wukong is a cool open-source API that provides information about this amazing game released by Game Science in 2024.
                In this section, you will be guided with basic steps on how to properly use this API. This API is open, so it doesn't require an API key to use it.
                Also, please give us a star on our
                <span style={{ margin: '0 5px' }}>
                    <a
                        href='https://github.com/chengl1113/black-myth-wu-kong-api'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{ color: "#B3966F" }}>
                        official GitHub repository
                    </a>
                </span>
                and feel free to post issues there.
            </p>
            <h2>Example REQUEST (REST)</h2>
            <p>Since this API doesn't require you to provide an API key, it's extremely easy to use. Feel free to explore our documentation and test routes! Let's retrieve a list of all the weapons in the game with the following route:</p>
            <ul>
                <li>METHOD: <strong>GET</strong></li>
                <li>URL: <a style={{ color: "#B3966F" }} href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                <li>RESULT</li>
            </ul>
            <CodeBlock jsonString={jsonString} />
            <h2>Fair Use Policy</h2>
            <p>Black Myth: Wukong is free and open to use. Because of this, we humbly ask developers to use it fairly and not spam it. This is an educational service so please do not harm others.</p>
            <h2>Issues</h2>
            <p>The data available on this API was scraped from fansites like
                <span style={{ margin: '0 5px' }}><a style={{ color: "#B3966F" }} href='https://blackmythwukong.fandom.com/wiki/Black_Myth:_Wukong_Wiki' target="_blank" rel="noopener noreferrer">Black Myth: Wukong Wiki</a></span>. If you find some issue or incorrect data, feel free to open an issue
                <span style={{ margin: '0 5px' }}><a style={{ color: "#B3966F" }} href='https://github.com/chengl1113/black-myth-wu-kong-api/issues' target="_blank" rel="noopener noreferrer">on this link.</a></span></p>
        </div>
    )
}

export default GettingStarted