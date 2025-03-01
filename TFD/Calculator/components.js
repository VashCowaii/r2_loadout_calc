const componentImagePrefixes = {
    "": "Icon_Item_Acc_Default_",
    "Hungry Sonic": "Icon_Item_Acc_Gluttony_T3_",
    "Volcanic": "Icon_Item_Acc_Moltenfortress_T3_",
    "Frozen Heart": "Icon_Item_Acc_FrostWalker_T3_",
    "Bravery": "Icon_Item_Acc_Obstructer_T3_",
    "Venom Essence": "Icon_Item_Acc_SwampWalker_T3_",
    "Polar Night": "Icon_Item_Acc_DeadBride_T3_",
    "Slayer": "Icon_Item_Acc_Pyromaniac_T3_",
    "Annihilation": "Icon_Item_Acc_Devourer_T3_",
    "Supernova": "Icon_Item_Acc_Executioner_T3_",
    "DEF Support": "Icon_Item_Acc_Default_",
    "Shield Support": "Icon_Item_Acc_Default_",
    "HP Support": "Icon_Item_Acc_Default_",
    "Acrobat": "Icon_Item_Acc_HangedMan_T2_",
    "Swamp Recon": "Icon_Item_Acc_SwampWalker_T2_",
    "Veteran Marksman": "Icon_Item_Acc_Pyromaniac_T2_",
    "Predator": "Icon_Item_Acc_Devourer_T2_",
    "Glacial": "Icon_Item_Acc_DeadBride_T2_",
    "Decimator": "Icon_Item_Acc_Executioner_T2_",
    "Battle Aesthetics": "Icon_Item_Acc_StunningBeauty_T2_",
    "Tomb Vanguard": "Icon_Item_Acc_Gravewalker_T2_",
    "Distorted Resolve": "Icon_Item_Acc_DeathStalker_T3_",
    "Invader": "Icon_Item_Acc_A006_T2_",
    "Hunter": "Icon_Item_Acc_Ark_T3_",
}


// const compSetsObject  = {
//     // [auxiliary, sensor, memory, processor]
//     "": {
//         "headerStatArray": "DEF",
//         "value": 0,
//         "stats": {},
//         "tags": [],
//         "rarity": "Empty",
//         "imageSuffix": "01"
//     }
// }


const blankSet = [
    {"": {
        "headerStat": "DEF",
        "value": 0,
        "stats": {},
        "tags": [],
        "rarity": "Empty",
        "imageSuffix": "01"
    }},
    {"": {
        "headerStat": "DEF",
        "value": 0,
        "stats": {},
        "tags": [],
        "rarity": "Empty",
        "imageSuffix": "02"
    }},
    {"": {
        "headerStat": "DEF",
        "value": 0,
        "stats": {},
        "tags": [],
        "rarity": "Empty",
        "imageSuffix": "03"
    }},
    {"": {
        "headerStat": "DEF",
        "value": 0,
        "stats": {},
        "tags": [],
        "rarity": "Empty",
        "imageSuffix": "04"
    }}
]


const auxiliary = {
    ...blankSet[0],
    "Hungry Sonic": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Volcanic": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Frozen Heart": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Bravery": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Venom Essence": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Polar Night": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Slayer": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Annihilation": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Supernova": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "01_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "01_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "01_HP"
    },
    "Acrobat": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Swamp Recon": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Veteran Marksman": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Predator": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Glacial": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Decimator": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Battle Aesthetics": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Tomb Vanguard": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Distorted Resolve": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Invader": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Hunter": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
}
const auxiliaryRolls = {
    "": {
        "stats": {},
        "tags": [],
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "HP": {
        "stats": {
            "HP": 914,
        },
        "tags": [],
        "value": 914,
        "minimum": 411,
        "maximum": 914,
    },
    "Fire Resistance": {
        "stats": {
            "ResistanceFire": 3860,
        },
        "tags": [],
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "MP Out of Combat": {
        "stats": {
            "MPOutCombat": 2.454,
        },
        "tags": [],
        "value": 2.454,
        "minimum": 1.791,
        "maximum": 2.454,
    },
    // module drop rate 0.191
    // kuiper drop rate 0.168
    // DBNO duration 0.318
}

const sensor = {
    ...blankSet[1],
    "Hungry Sonic": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Volcanic": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Frozen Heart": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Bravery": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Venom Essence": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Polar Night": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Slayer": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Annihilation": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Supernova": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 2385,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "02_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "02_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "02_HP"
    },
    "Acrobat": {
        "headerStat": "HP",
        "value": 323,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Swamp Recon": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Veteran Marksman": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Predator": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Glacial": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Decimator": {
        "headerStat": "Shield",
        "value": 137,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Battle Aesthetics": {
        "headerStat": "Shield",
        "value": 137,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Tomb Vanguard": {
        "headerStat": "DEF",
        "value": 2341,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Distorted Resolve": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Invader": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Hunter": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
}
const sensorRolls = {
    "": {
        "stats": {},
        "tags": [],
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "MP": {
        "stats": {
            "MP": 159
        },
        "tags": [],
        "value": 159,
        "minimum": 110,
        "maximum": 159,
    },
    "MP in Combat": {
        "stats": {
            "MPInCombat": 0.287
        },
        "tags": [],
        "value": 0.287,
        "minimum": 0.208,
        "maximum": 0.287,
    },
    "Chill Resistance": {
        "stats": {
            "ResistanceChill": 3860
        },
        "tags": [],
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "HP Recovery Mod": {
        "stats": {//TODO: see what exactly this populates as, I'm assuming hp recovery mod bc iirc it says hp heal, but hp heal means 3 diff things in this game
            "HPRecovery": 0.085
        },
        "tags": [],
        "value": 0.085,
        "minimum": 0.057,
        "maximum": 0.085,
    },
    "Shield Out of Combat": {
        "stats": {
            "ShieldOutCombat": 16.630
        },
        "tags": [],
        "value": 16.630,
        "minimum": 11.311,
        "maximum": 16.630,
    },
    // consumable drop rate 0.191
    // character xp 0.191
}

const memory = {
    ...blankSet[2],
    "Hungry Sonic": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Volcanic": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Frozen Heart": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Bravery": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Venom Essence": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Polar Night": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Slayer": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Annihilation": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Supernova": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "03_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "03_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "03_HP"
    },
    "Acrobat": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Swamp Recon": {
        "headerStat": "DEF",
        "value": 2341,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Veteran Marksman": {
        "headerStat": "DEF",
        "value": 1171,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Predator": {
        "headerStat": "Shield",
        "value": 137,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Glacial": {
        "headerStat": "HP",
        "value": 323,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Decimator": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Battle Aesthetics": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Tomb Vanguard": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Distorted Resolve": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Invader": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Hunter": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
}
const memoryRolls = {
    "": {
        "stats": {},
        "tags": [],
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "DEF": {
        "stats": {
            "DEF": 4249
        },
        "tags": [],
        "value": 4249,
        "minimum": 1724,
        "maximum": 4249,
    },
    "Shield in Combat": {
        "stats": {
            "ShieldInCombat": 5.033
        },
        "tags": [],
        "value": 5.033,
        "minimum": 3.271,
        "maximum": 5.033,
    },
    "Electric Resistance": {
        "stats": {
            "ResistanceElectricity": 3860
        },
        "tags": [],
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "MP Recovery Mod": {
        "stats": {
            "MPRecovery": 0.160
        },
        "tags": [],
        "value": 0.160,
        "minimum": 0.108,
        "maximum": 0.160,
    },
    // gold drop rate 0.191
    // firearm xp 0.191
    // ecive search radius 0.7660
}

const processor = {
    ...blankSet[3],
    "Hungry Sonic": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Volcanic": {
        "headerStat": "DEF",
        "value": 3512,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Frozen Heart": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Bravery": {
        "headerStat": "Shield",
        "value": 206,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Venom Essence": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Polar Night": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Slayer": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Annihilation": {
        "headerStat": "HP",
        "value": 484,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Supernova": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 4683,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Ultimate",
        "imageSuffix": "04_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 275,
        "stats": {},
        "tags": ["Shield"],
        "rarity": "Ultimate",
        "imageSuffix": "04_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04_HP"
    },
    "Acrobat": {
        "headerStat": "DEF",
        "value": 2341,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Swamp Recon": {
        "headerStat": "HP",
        "value": 323,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Veteran Marksman": {
        "headerStat": "HP",
        "value": 323,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Predator": {
        "headerStat": "HP",
        "value": 323,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Glacial": {
        "headerStat": "DEF",
        "value": 1171,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Decimator": {
        "headerStat": "DEF",
        "value": 2341,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Battle Aesthetics": {
        "headerStat": "DEF",
        "value": 1171,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Tomb Vanguard": {
        "headerStat": "DEF",
        "value": 1171,
        "stats": {},
        "tags": ["DEF"],
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Distorted Resolve": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Invader": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Hunter": {
        "headerStat": "HP",
        "value": 646,
        "stats": {},
        "tags": ["HP"],
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
}
const processorRolls = {
    "": {
        "stats": {},
        "tags": [],
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "Shield": {
        "stats": {
            "Shield": 283
        },
        "tags": [],
        "value": 283,
        "minimum": 124,
        "maximum": 283,
    },
    "Toxin Resistance": {
        "stats": {
            "ResistanceToxin": 3860
        },
        "tags": [],
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "Shield Recovery Mod": {
        "stats": {
            "ShieldRecovery": 0.085
        },
        "tags": [],
        "value": 0.085,
        "minimum": 0.057,
        "maximum": 0.085,
    },
    // equipment drop rate 0.191
    // item acquisition distance 0.253
    // ecive display time 0.9720
}


const componentSetBonuses = {
    "": {
        "2pc": {
            "desc": "N/A",
            "stats": {},
            "tags": [],
        },
        "4pc": {
            "desc": "N/A",
            "stats": {},
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Supernova": {
        "2pc": {
            "desc": "Electric Skill Power Modifier +8.6%",
            "stats": {
                "PowerModifierElectric": 0.086
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Fusion Skill Power Modifier +12%\nOn Electric Skill Attack upon an enemy activates Executioner's Thunderbolt at the target's location,\ndealing additional Electric damage equivalent to 100% of Skill Power Modifier (Cooldown 2s) at a 50% chance.<br>Note: The damage per bolt is your skill power * 1 + skill and electric power modifier. It's pretty fuckin awful.",
            "stats": {
                "SkillCost": 0.15,
                "PowerRatioBase": 0.261
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Annihilation": {
        "2pc": {
            "desc": "Skill Duration +5.7%",
            "stats": {
                "SkillDuration": 0.057
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Firearm ATK increases proportionally to the ratio of Max HP to HP lost, up to 26%. When HP is 50% or lower, MP Recovery -22%, HP Recovery +16.4% for 10s (Cooldown 30s)",
            "stats": {
                "FirearmATK%": 0.26,
                "MPRecovery": -0.22,
                "HPRecovery": 0.164
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Slayer": {
        "2pc": {
            "desc": "General Rounds Capacity +8%",
            "stats": {
                //TODO: ammo reserves
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Rounds per Magazine +9%.<br>Skill Cost +15%.<br>Skill Power +26.1%.<br>When defeating enemies inflicted with Towed, recovers 12.2% MP and Specialized Resource at a 17% chance",
            "stats": {
                "MagazineSize": 0.09,
                "SkillCost": 0.15,
                "PowerRatioBase": 0.261
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Polar Night": {
        "2pc": {
            "desc": "Chill Skill Power +6.2%",
            "stats": {
                "PowerRatioChill": 0.062
            },
            "tags": [],
        },
        "4pc": {
            "desc": "For each Frostbite stack inflicted upon enemies, Firearm Critical Hit Damage +1.7%, Skill Critical Hit Damage +6% (up to 10 stacks, 5s duration) at a 30% chance. When defeating enemies inflicted with Frostbite, inflicts additional damage equivalent to 12.2% of the enemy's Max HP on enemies within a 2.5m radius at a 30% chance.",
            "stats": {//Note to self, the HP% dmg it deals is not % from the target killed, but the %HP of each target around them hit by the AOE, individually.
                "SkillCritDamage": 0.60,
                "FirearmCritDamage": 0.17,
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Venom Essence": {
        "2pc": {
            "desc": "Toxic Skill Power +6.2%",
            "stats": {
                "PowerRatioToxic": 0.062
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Tactical Rifle, Assault Rifle Firearm Attribute Effect Trigger Rate +12%. For each Poison stack inflicted upon enemies, Firearm ATK +2%, Skill Power Modifier +0.7% for 5s at a 30% chance (up to 10 stacks, 5s duration).",
            "stats": {
                //TODO: effect trigger rate stats
                "FirearmATK%": 0.20,//assuming max stacks
                "PowerModifierBase": 0.07,//assuming max stacks
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Bravery": {
        "2pc": {
            "desc": "Max Shield +11.8%",
            "stats": {
                "Shield%": 0.118
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Skill Cost -5.7%\n20% chance to reduce a random skill's cooldown by 1s each time an enemy is defeated.",
            "stats": {
                "SkillCost": -0.057
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Frozen Heart": {
        "2pc": {
            "desc": "Sniper Rifle, Scout Rifle Critical Hit Rate 5%",
            "stats": {
                "PowerRatioNonAttribute": 0.062,
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Skill Cooldown -4.7%<br>Acquiring Custom Resource stacks Frozen Heart Energy effect by 1 (Cooldown 3s, up to 3 stacks)<br>Frozen Heart Energy: Max Shield +6.2% for 15s<br>On Skill Attack by Frozen Heart Energy with 3 stacks, enemies hit by the skill gets Frozen Heart Essence state<br>Frozen Heart Essence: Incoming Damage Modifier +3% for 10s",
            "stats": {
                "SkillCooldown": -0.047,
                "Shield%": 0.186,
                //TODO: enemy incoming dmg increase modifiers.
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Volcanic": {
        "2pc": {
            "desc": "Fire Skill Power +6.2%",
            "stats": {
                "PowerRatioFire": 0.062,
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Handgun ATK+10.3%\nHand Cannon ATK +10.3%\nShotgun ATK +5.2%\nAfter reload, Skill Power +4.3% for 10s (Up to 3 stacks)",
            "stats": {
                "PowerRatioBase": 0.129,
            },
            "tags": ["FirearmATK%"],
            "complexBonus": [
                {
                    "stats": [
                        {"name": "FirearmATK%","value": 0.103,"subStackValue": null},
                    ],
                    "bonusName": "Volcanic (Handgun Bonus) ",
                    "oneTimeOrStack": "stack",
                    "limit": 1,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                    "duration": 0,
                    "conditions": ["isHandgun"],
                },
                {
                    "stats": [
                        {"name": "FirearmATK%","value": 0.103,"subStackValue": null},
                    ],
                    "bonusName": "Volcanic (Hand Cannon Bonus) ",
                    "oneTimeOrStack": "stack",
                    "limit": 1,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                    "duration": 0,
                    "conditions": ["isHandCannon"],
                },
                {
                    "stats": [
                        {"name": "FirearmATK%","value": 0.103,"subStackValue": null},
                    ],
                    "bonusName": "Volcanic (Shotgun Bonus) ",
                    "oneTimeOrStack": "stack",
                    "limit": 1,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                    "duration": 0,
                    "conditions": ["isShotgun"],
                }
            ]
        },
        "rarity": "Ultimate",
    },
    "Hungry Sonic": {
        "2pc": {
            "desc": "MP Recovery Modifier +12%",
            "stats": {
                "MPRecovery": 0.12,
            },
            "tags": [],
        },
        "4pc": {
            "desc": "When using skill, Efflux 1 stack (up to 5 stacks, Duration 20s)<br>Efflux: Max MP +0.6%<br></br>When buffing allies except for the player with Efflux 5 stacks,<br>Recover the target's HP by 10.9% (Cooldown 10s)",
            "stats": {
                "MP%": 0.03,
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Acrobat": {
        "2pc": {
            "desc": "Skill Power +1.7%<br>Firearm ATK +2.8%",
            "stats": {
                "PowerRatioBase": 0.017,
                "FirearmATK%": 0.028
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Firearm Critical Hit Rate +21%<br>Skill Critical Hit Rate +5.9%",
            "stats": {
                "SkillCritRate": 0.059,
                "FirearmCritRate": 0.21,
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Swamp Recon": {
        "2pc": {
            "desc": "Toxic Skill Power +6.2%",
            "stats": {
                "PowerRatioToxic": 0.062
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Firearm Status Effect Trigger Rate +12%<br>Skill Duration +6.6%",
            "stats": {
                "SkillDuration": 0.066
                //TODO: status trigger rate stuff
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Veteran Marksman": {
        "2pc": {
            "desc": "Firearm Critical Hit Rate +5.1%",
            "stats": {
                "FirearmCritRate": 0.051,
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Firearm ATK +6.6%<br>Weak Point DMG +5.8%",
            "stats": {
                "FirearmATK%": 0.066,
                "WeakPointDamage%": 0.058,
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Predator": {
        "2pc": {
            "desc": "HP Recovery +4.8%",
            "stats": {
                "HPRecovery": 0.048,
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Toxic Skill Power Modifier +7.2%<br>Fire Resistance +6.6%",
            "stats": {
                "PowerModifierToxic": 0.072,
                "ResistanceFire%": 0.066
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Glacial": {
        "2pc": {
            "desc": "Chill Skill Power Modifier +8.6%",
            "stats": {
                "PowerModifierChill": 0.086
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Skill Cost -2.8%<br>Firearm Critical Hit Rate +5.9%",
            "stats": {
                "SkillCost": -0.028,
                "FirearmCritRate": 0.059,
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Decimator": {
        "2pc": {
            "desc": "Firearm Critical Hit Rate +5.1%",
            "stats": {
                "FirearmCritRate": 0.051,
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Weak Point DMG +5.8%<br>Toxin Resistance +6.6%",
            "stats": {
                "ResistanceToxin%": 0.066,
                "WeakPointDamage%": 0.058,
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Battle Aesthetics": {
        "2pc": {
            "desc": "Skill Critical Hit Rate +18%",
            "stats": {
                "SkillCritRate": 0.18
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Skill Power +4%<br>Skill Cost -2.8%",
            "stats": {
                "PowerRatioBase": 0.04,
                "SkillCost": -0.028
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "Tomb Vanguard": {
        "2pc": {
            "desc": "DEF +25%",
            "stats": {
                "DEF%": 0.25
            },
            "tags": [],
        },
        "4pc": {
            "desc": "Skill Power Modifier +8%<br>Electric Resistance +6.6%",
            "stats": {
                "PowerModifierBase": 0.08,
                "ResistanceElectricity%": 0.066
            },
            "tags": [],
        },
        "rarity": "Rare",
    },
    "DEF Support": {
        "2pc": {
            "desc": "N/A - No set bonuses",
            "stats": {},
            "tags": [],
        },
        "4pc": {
            "desc": "N/A - No set bonuses",
            "stats": {},
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Shield Support": {
        "2pc": {
            "desc": "N/A - No set bonuses",
            "stats": {},
            "tags": [],
        },
        "4pc": {
            "desc": "N/A - No set bonuses",
            "stats": {},
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "HP Support": {
        "2pc": {
            "desc": "N/A - No set bonuses",
            "stats": {},
            "tags": [],
        },
        "4pc": {
            "desc": "N/A - No set bonuses",
            "stats": {},
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Distorted Resolve": {
        "2pc": {
            "desc": "Assault Rifle ATK +5.6%<br>Submachine Gun ATK +5.6%",
            "stats": {},
            "tags": ["FirearmATK%"],
            "complexBonus": [
                {
                    "stats": [
                        {"name": "FirearmATK%","value": 0.056,"subStackValue": null},
                    ],
                    "bonusName": "Distorted Resolve (Assault Rifle Bonus) ",
                    "oneTimeOrStack": "stack",
                    "limit": 1,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                    "duration": 0,
                    "conditions": ["isAssault"],
                },
                {
                    "stats": [
                        {"name": "FirearmATK%","value": 0.056,"subStackValue": null},
                    ],
                    "bonusName": "Distorted Resolve (Submachine Gun Bonus) ",
                    "oneTimeOrStack": "stack",
                    "limit": 1,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                    "duration": 0,
                    "conditions": ["isSubmachine"],
                },
            ]
        },
        "4pc": {
            "desc": "Increases Skill Power by up to +14.3% based on HP lost relative to Max HP<br>Skill Power +14.3% when current HP is 1<br>Each time inflicting an enemy with Debuff, 100% chance of recovering Shield by 15% (Cooldown 15s)<br>When using skill, Exaltation 1 stack (up to 5 stacks, duration 15s)<br>Exaltation: On Skill Attack with 5 stacks, fire the nearest enemy with a guided projectile (Cooldown 7s)<br>Deal 4.5% of Skill Power as Additional DMG, inflicting Desolation to the hit target<br>Desolation: All ATK of Target -0.5% (up to 5 stacks, Duration 30s)",
            "stats": {
                "PowerRatioBase": 0.143
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Invader": {
        "2pc": {
            "desc": "Max Shield +11.9%",
            "stats": {
                "Shield%": 0.119
            },
            "tags": [],
        },
        "4pc": {
            "desc": "When defeating an enemy, Skill Duration +2.7%(Duration 30s, up to 5 stacks)<br>Tech Skill Power Modifier +4.1%<br>Dimension Skill Power Modifier +4.1%",
            "stats": {
                "SkillDuration": 0.135,
                "PowerModifierTech": 0.041,
                "PowerModifierDimension": 0.041,
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
    "Hunter": {
        "2pc": {
            "desc": "Skill Cooldown -4%",
            "stats": {
                "SkillCooldown": -0.04
            },
            "tags": [],
        },
        "4pc": {
            "desc": "MP Recovery In Combat +0.12<br>MP Recovery Out of Combat +1.03<br>Acquire “Arche Shield” when MP is at 50% or lower. While having “Arche Shield,” “Firearm ATK” -12%, but removes “Arche Shield” upon a hit, recover MP +30% (Cooldown 5s)",
            "stats": {
                "MPInCombat": 0.12,
                "MPOutCombat": 1.03,
                "FirearmATK%": -0.12,
            },
            "tags": [],
        },
        "rarity": "Ultimate",
    },
}