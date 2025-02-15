const coreImageReference = {
    "Orange": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_001.png",
    "Blue": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_002.png",
    "Red": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_003.png",
    "Green": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_004.png",
    "Yellow": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_005.png",
    "Purple": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_006.png",
    "Rainbow": "/TFD/TFDImages/Cores/Icon_Cores_Type_Big_Free.png",
    "null": "/images/Remnant/clear.png",
}
const coreOrange = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Rainbow",
    },
    "Firearm ATK": {
        "statName": "FirearmATK%CORE",
        "stats": {},
        "tags": ["FirearmATK%CORE"],
        "range": [0.02,0.80],
        "color": "Orange",
    },
    "Bonus ATK (Colossus)": {
        "statName": "ColossusATK%CORE",
        "stats": {},
        "tags": ["ColossusATK%CORE"],
        "range": [0.10,5.50],
        "color": "Orange",
    },
}
const coreBlue = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Rainbow",
    },
    "Fire ATK": {
        "statName": "FireATK%BonusCORE",
        "stats": {},
        "tags": ["FireATK%BonusCORE"],
        "range": [0.04,1.84],
        "color": "Blue",
    },
    "Chill ATK": {
        "statName": "ChillATK%BonusCORE",
        "stats": {},
        "tags": ["ChillATK%BonusCORE"],
        "range": [0.04,1.84],
        "color": "Blue",
    },
    "Electric ATK": {
        "statName": "ElectricATK%BonusCORE",
        "stats": {},
        "tags": ["ElectricATK%BonusCORE"],
        "range": [0.04,1.84],
        "color": "Blue",
    },
    "Toxic ATK": {
        "statName": "ToxicATK%BonusCORE",
        "stats": {},
        "tags": ["ToxicATK%BonusCORE"],
        "range": [0.04,1.84],
        "color": "Blue",
    },

}
const coreRed = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Rainbow",
    },
    "Weak Point Damage": {
        "statName": "WeakPointDamage%CORE",
        "stats": {},
        "tags": ["WeakPointDamage%CORE"],
        "range": [0.01,0.62],
        "color": "Red",
    },
    "Critical Hit Rate": {
        "statName": "FirearmCritRateCORE",
        "stats": {},
        "tags": ["FirearmCritRateCORE"],
        "range": [0.01,0.68],
        "color": "Red",
    },
    "Critical Hit Damage": {
        "statName": "FirearmCritDamageCORE",
        "stats": {},
        "tags": ["FirearmCritDamageCORE"],
        "range": [0.01,1.01],
        "color": "Red",
    },
}
const coreGreen = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Rainbow",
    },
    "Status Trigger Rate": {
        "statName": "StatusTriggerRateCORE",
        "stats": {},
        "tags": ["StatusTriggerRateCORE"],
        "range": [0.03,1.20],
        "color": "Green",
    },
    "Rounds per Magazine": {
        "statName": "MagazineSizeCORE",
        "stats": {},
        "tags": ["MagazineSizeCORE"],
        "range": [0.03,1.50],
        "color": "Green",
    },
    "Fire Rate": {
        "statName": "FireRateCORE",
        "stats": {},
        "tags": ["FireRateCORE"],
        "range": [-0.01,-0.20],
        // "range": [-0.20,-0.01],
        "color": "Green",
    },
    "Reload Speed": {
        "statName": "ReloadSpeedCORE",
        "stats": {},
        "tags": ["ReloadSpeedCORE"],
        "range": [0.02,0.74],
        "color": "Green",
    },
}
const coreYellow = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Rainbow",
    },
    "Recoil": {
        "statName": "RecoilCORE",
        "stats": {},
        "tags": ["RecoilCORE"],
        "range": [-0.05,-0.92],
        "color": "Yellow",
    },
    "Weapon Change Speed": {
        "statName": "SwapSpeedCORE",
        "stats": {},
        "tags": ["SwapSpeedCORE"],
        "range": [0.02,0.62],
        "color": "Yellow",
    },
    "Sprint Speed": {
        "statName": "SprintSpeedBonusCORE",
        "stats": {},
        "tags": ["SprintSpeedBonusCORE"],
        "range": [0.01,0.20],
        "color": "Yellow",
    },
    // "Grapple Recharge Modifier": {
    //     "statName": "FirearmATK%CORE",
    //     "stats": {},
    //     "tags": ["FirearmATK%CORE"],
    //     "range": [-0.20,-0.15],
    // "color": "Yellow",
    // },
    // "Hip Fire Accuracy": {
    //     "statName": "ColossusATK%CORE",
    //     "stats": {},
    //     "tags": ["ColossusATK%CORE"],
    //     "range": [0.42,0.55],
    // "color": "Yellow",
    // },
    // "Aimed Shot Accuracy": {
    //     "statName": "FirearmATK%CORE",
    //     "stats": {},
    //     "tags": ["FirearmATK%CORE"],
    //     "range": [0.42,0.55],
    // "color": "Yellow",
    // },
    
}
const corePurple = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Rainbow",
    },
    "No Core": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
        "color": "Purple",
    },
    "Bonus ATK (Vulgus)": {
        "statName": "VulgusATK%CORE",
        "stats": {},
        "tags": ["VulgusATK%CORE"],
        "range": [0.10,5.50],
        "color": "Purple",
    },
    // "Bonus ATK (Colossus)": {
    //     "statName": "ColossusATK%CORE",
    //     "stats": {},
    //     "tags": ["ColossusATK%CORE"],
    //     "range": [0.10,5.50],
    //     "color": "Purple",
    // },
}
const coreRainbow = {
    ...coreOrange,
    ...coreBlue,
    ...coreRed,
    ...coreGreen,
    ...coreYellow,
    ...corePurple
}
const coreStatsReference = {
    "Orange": coreOrange,
    "Blue": coreBlue,
    "Red": coreRed,
    "Green": coreGreen,
    "Yellow": coreYellow,
    "Purple": corePurple,
    "Rainbow": coreRainbow,
    "null": null,
}