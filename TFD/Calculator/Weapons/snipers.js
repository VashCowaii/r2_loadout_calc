const weaponSubstatList = {
    "": {
        "statName": "",
        "Sniper": [0,0],
        "Hand Cannon": [0,0],
    },
    "Firearm ATK": {
        "statName": "FirearmATK%",
        "Sniper": [0.10,0.122],
        "Hand Cannon": [0.10,0.122],
    },
    "Fire ATK": {
        "statName": "FireATK",
        "Sniper": [8424,15196],
        "Hand Cannon": [3236,5838],
    },
    "Chill ATK": {
        "statName": "ChillATK",
        "Sniper": [8424,15196],
        "Hand Cannon": [3236,5838],
    },
    "Electric ATK": {
        "statName": "ElectricATK",
        "Sniper": [8424,15196],
        "Hand Cannon": [3236,5838],
    },
    "Toxic ATK": {
        "statName": "ToxicATK",
        "Sniper": [8424,15196],
        "Hand Cannon": [3236,5838],
    },
    "Weak Point Damage": {
        "statName": "WeakPointDamage%",
        "Sniper": [0.082,0.12],
        "Hand Cannon": [0.082,0.12],
    },
    "Critical Hit Rate": {
        "statName": "FirearmCritRate",
        "Sniper": [0.093,0.108],
        "Hand Cannon": [0.099,0.114],
    },
    "Critical Hit Damage": {
        "statName": "FirearmCritDamage",
        "Sniper": [0.152,0.184],
        "Hand Cannon": [0.177,0.215],
    },
    "Status Effect Rate": {
        "statName": "StatusTriggerRate",
        "Sniper": [0.164,0.24],
        "Hand Cannon": [0.164,0.24],
    },
    "Rounds per Magazine": {
        "statName": "MagazineSize",
        "Sniper": [0.082,0.12],
        "Hand Cannon": [0.082,0.12],
    },
    "Bonus ATK (Colossus)": {
        "statName": "ColossusATK",
        "Sniper": [16848,30393],
        "Hand Cannon": [6472,11676],
    },
    // "Recoil": {
    //     "statName": "Recoil",
    //     "Sniper": [-0.124,-0.102],
    //     "Hand Cannon": [-0.124,-0.102],
    // },
    // "Hip Fire Accuracy": {
    //     "statName": "FirearmATK",
    //     "Sniper": [0.102,0.124],
    //     "Hand Cannon": [0.102,0.124],
    // },
    // "Weapon Change Speed": {
    //     "statName": "",
    //     "Sniper": [0.114,0.165],
    //     "Hand Cannon": [0.114,0.165],
    // },
}

const sniperList = {
    "": {
        "baseATK": 0,
        "baseCritRate": 0.00,
        "baseCritDamage": 1,
        "baseWeakPoint": 1,
        "crush": 0,
        "ammoType": "HighPowered",
        "weaponType": "Sniper",
        "image": "/images/Remnant/clear.png",
        "subStats": {}
    },

    "Perforator": {
        "baseATK": 67092,
        "baseCritRate": 0.20,
        "baseCritDamage": 2.0,
        "baseWeakPoint": 2.25,
        "burst": 0.10,
        "ammoType": "Impact",
        "weaponType": "Hand Cannon",
        "image": "/TFD/TFDImages/Weapons/Icon_RW_HC_1008_A001.png",
        "subStats": {}
    },
    "Afterglow Sword": {
        "baseATK": 114206,
        "baseCritRate": 0.50,
        "baseCritDamage": 2,
        "baseWeakPoint": 1.8,
        "crush": 0.10,
        "ammoType": "HighPowered",
        "weaponType": "Sniper",
        "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1005_A001.png",
        "subStats": {}
    },
    "Piercing Light": {
        "baseATK": 193437,
        "baseCritRate": 0.40,
        "baseCritDamage": 1.2,
        "baseWeakPoint": 2,
        "crush": 0.10,
        "ammoType": "HighPowered",
        "weaponType": "Sniper",
        "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1006_A001.png",
        "subStats": {}
    },

    // //purple snipers
    // "Different Dream": {
    //     "baseATK": 110259,
    //     "baseCritRate": 0.55,
    //     "baseCritDamage": 1.8,
    //     "baseWeakPoint": 5,
    //     "crush": 0.10,
    //     "ammoType": "HighPowered",
    //     "weaponType": "Sniper",
    //     "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1007_A001.png",
    //     "subStats": {}
    // },
    // "Forest Gaze": {
    //     "baseATK": 133703,
    //     "baseCritRate": 0.50,
    //     "baseCritDamage": 2,
    //     "baseWeakPoint": 1.5,
    //     "crush": 0.10,
    //     "ammoType": "HighPowered",
    //     "weaponType": "Sniper",
    //     "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1001_A001.png",
    //     "subStats": {}
    // },
    // "Supermoon Z-15": {
    //     "baseATK": 101392,
    //     "baseCritRate": 0.50,
    //     "baseCritDamage": 2,
    //     "baseWeakPoint": 1.5,
    //     "crush": 0.10,
    //     "ammoType": "HighPowered",
    //     "weaponType": "Sniper",
    //     "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1002_A001.png",
    //     "subStats": {}
    // },
    // "Recipient Unknown": {
    //     "baseATK": 132590,
    //     "baseCritRate": 0.45,
    //     "baseCritDamage": 1.8,
    //     "baseWeakPoint": 1.5,
    //     "crush": 0.10,
    //     "ammoType": "HighPowered",
    //     "weaponType": "Sniper",
    //     "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1003_A001.png",
    //     "subStats": {}
    // },
    // "Belief": {
    //     "baseATK": 92167,
    //     "baseCritRate": 0.45,
    //     "baseCritDamage": 1.8,
    //     "baseWeakPoint": 1.7,
    //     "crush": 0.10,
    //     "ammoType": "HighPowered",
    //     "weaponType": "Sniper",
    //     "image": "/TFD/TFDImages/Weapons/Icon_RW_SR_1004_A001.png",
    //     "subStats": {}
    // },
}