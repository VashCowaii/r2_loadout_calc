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
    },
    "Firearm ATK": {
        "statName": "FirearmATK%CORE",
        "stats": {},
        "tags": ["FirearmATK%CORE"],
        "range": [0.02,0.34],
    },
    "Bonus ATK (Colossus)": {
        "statName": "ColossusATK%CORE",
        "stats": {},
        "tags": ["ColossusATK%CORE"],
        "range": [0.10,2.90],
    },
}
const coreBlue = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
    },
    "Fire ATK": {
        "statName": "FireATK%BonusCORE",
        "stats": {},
        "tags": ["FireATK%BonusCORE"],
        "range": [0.04,0.96],
    },
    "Chill ATK": {
        "statName": "ChillATK%BonusCORE",
        "stats": {},
        "tags": ["ChillATK%BonusCORE"],
        "range": [0.04,0.96],
    },
    "Electric ATK": {
        "statName": "ElectricATK%BonusCORE",
        "stats": {},
        "tags": ["ElectricATK%BonusCORE"],
        "range": [0.04,0.96],
    },
    "Toxic ATK": {
        "statName": "ToxicATK%BonusCORE",
        "stats": {},
        "tags": ["ToxicATK%BonusCORE"],
        "range": [0.04,0.96],
    },

}
const coreRed = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
    },
    "Weak Point Damage": {
        "statName": "WeakPointDamage%CORE",
        "stats": {},
        "tags": ["WeakPointDamage%CORE"],
        "range": [0.20,0.27],
    },
    "Critical Hit Rate": {
        "statName": "FirearmCritRateCORE",
        "stats": {},
        "tags": ["FirearmCritRateCORE"],
        "range": [0.17,0.24],
    },
    "Critical Hit Damage": {
        "statName": "FirearmCritDamageCORE",
        "stats": {},
        "tags": ["FirearmCritDamageCORE"],
        "range": [0.20,0.30],
    },
}
const coreGreen = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
    },
    "Status Trigger Rate": {
        "statName": "StatusTriggerRateCORE",
        "stats": {},
        "tags": ["StatusTriggerRateCORE"],
        "range": [0.03,0.63],
    },
    "Rounds per Magazine": {
        "statName": "MagazineSizeCORE",
        "stats": {},
        "tags": ["MagazineSizeCORE"],
        "range": [0.03,0.78],
    },
    "Fire Rate": {
        "statName": "FireRateCORE",
        "stats": {},
        "tags": ["FireRateCORE"],
        "range": [-0.12,-0.01],
    },
    "Reload Speed": {
        "statName": "ReloadSpeedCORE",
        "stats": {},
        "tags": ["ReloadSpeedCORE"],
        "range": [0.02,0.26],
    },
}
const coreYellow = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
    },
    "Recoil": {
        "statName": "RecoilCORE",
        "stats": {},
        "tags": ["RecoilCORE"],
        "range": [-0.55,-0.42],
    },
    "Weapon Change Speed": {
        "statName": "SwapSpeedCORE",
        "stats": {},
        "tags": ["SwapSpeedCORE"],
        "range": [0.20,0.27],
    },
    "Sprint Speed": {
        "statName": "SprintSpeedBonusCORE",
        "stats": {},
        "tags": ["SprintSpeedBonusCORE"],
        "range": [0.10,0.122],
    },
    // "Grapple Recharge Modifier": {
    //     "statName": "FirearmATK%CORE",
    //     "stats": {},
    //     "tags": ["FirearmATK%CORE"],
    //     "range": [-0.20,-0.15],
    // },
    // "Hip Fire Accuracy": {
    //     "statName": "ColossusATK%CORE",
    //     "stats": {},
    //     "tags": ["ColossusATK%CORE"],
    //     "range": [0.42,0.55],
    // },
    // "Aimed Shot Accuracy": {
    //     "statName": "FirearmATK%CORE",
    //     "stats": {},
    //     "tags": ["FirearmATK%CORE"],
    //     "range": [0.42,0.55],
    // },
    
}
const corePurple = {
    "": {
        "statName": "",
        "stats": {},
        "tags": [],
        "range": [0,0],
    },
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