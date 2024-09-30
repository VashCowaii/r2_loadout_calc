const fragHexColors = {
	"Legendary": "#d1a042",
	"Yellow": "#a8a231",
	"Red": "#296eb0",
	"Blue": "#de3131",
}

const fragImagePrefixes = {
	"Yellow": "/brotherLibrary/plannerImages/frags_Yellow/",
	"Red": "/brotherLibrary/plannerImages/frags_Red/",
	"Blue": "/brotherLibrary/plannerImages/frags_Blue/",
	"Blank": "",
	"Combo": "/brotherLibrary/plannerImages/iconImages/",
}

fragments = {
	"": {
	  "usesConditional": {},
	  "name": "",
	  "slot": "",
	  "imageSuffix": "/images/Remnant/clear.png",
	  "desc": "",
	  "value": 0,
	  "stats": {},
	  "tags": [],
	  "units": "",
	  "color": "Blank",
	  "placementID": "F00"
	},
	"Ammo Reserves": {
	  "name": "Ammo Reserves",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Ammo Reserves.png",
	  "desc": "VALUE1.1% Ammo Reserves [MYTHIC]",
	  "value": 0.25,
	  "usesConditional": {},
	  "stats": {
		"Reserves": 0.25
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y01"
	},
	"Armor Bonus": {
	  "usesConditional": {},
	  "name": "Armor Bonus",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Armor Effectiveness.png",
	  "desc": "VALUE1.1% Armor Bonus [MYTHIC]",
	  "value": 0.1,
	  "stats": {
		"Armor%": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B01"
	},
    "Base Armor": {
	  "usesConditional": {},
	  "name": "Base Armor",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Base Armor.png",
	  "desc": "VALUE1.1 Base Armor [MYTHIC]",
	  "value": 15,
	  "stats": {
		"Armor": 15
	  },
	  "tags": [],
	  "units": "",
	  "color": "Blue",
	  "placementID": "B02"
	},
    "Base Health": {
	  "usesConditional": {},
	  "name": "Base Health",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Base Health.png",
	  "desc": "VALUE1.1 Base Health [MYTHIC]",
	  "value": 10,
	  "stats": {
		"Health": 10
	  },
	  "tags": [],
	  "units": "",
	  "color": "Blue",
	  "placementID": "B03"
	},
    "Base Stamina": {
	  "usesConditional": {},
	  "name": "Base Stamina",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Base Stamina.png",
	  "desc": "VALUE1.1 Base Stamina [MYTHIC]",
	  "value": 15,
	  "stats": {
		"Stamina": 15
	  },
	  "tags": [],
	  "units": "",
	  "color": "Blue",
	  "placementID": "B04"
	},
	"Cast Speed": {
	  "name": "Cast Speed",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Casting Speed.png",
	  "desc": "VALUE1.1% Mod & Skill Cast Speed [MYTHIC]",
	  "value": 0.2,
	  "usesConditional": {},
	  "stats": {
		"CastSpeed": 0.2
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y02"
	},
	"Consumable Duration": {
	  "name": "Consumable Duration",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Consumable Duration.png",
	  "desc": "VALUE1.1% Consumable Duration [MYTHIC]",
	  "value": 0.2,
	  "usesConditional": {},
	  "stats": {
		"ConsumableDuration": 0.2
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y03"
	},
    "Critical Damage": {
	  "name": "Critical Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Critical Damage.png",
	  "desc": "VALUE1.1% Critical Damage [MYTHIC]",
	  "value": 0.1,
	  "usesConditional": {},
	  "stats": {
		"AllCritDamage": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R01"
	},
	"Damage Reduction": {
	  "usesConditional": {},
	  "name": "Damage Reduction",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Damage Reduction.png",
	  "desc": "VALUE1.1% Damage Reduction [MYTHIC]",
	  "value": 0.05,
	  "stats": {
		"FlatDR": 0.05
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B05"
	},
    "Evade Distance": {
	  "usesConditional": {},
	  "name": "Evade Distance",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Evade Distance.png",
	  "desc": "VALUE1.1% Evade Distance [MYTHIC]",
	  "value": 0.1,
	  "stats": {
		"EvadeDistance": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B06"
	},
    "Evade Speed": {
	  "usesConditional": {},
	  "name": "Evade Speed",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Evade Speed.png",
	  "desc": "VALUE1.1% Evade Speed [MYTHIC]",
	  "value": 0.1,
	  "stats": {
		"EvadeSpeed": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B07"
	},
    "Explosive Damage": {
	  "usesConditional": {},
	  "name": "Explosive Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Explosive Damage.png",
	  "desc": "VALUE1.1% Explosive Damage [MYTHIC]",
	  "value": 0.1,
	  "stats": {
		"ExplosiveDamage": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R02"
	},
    "Firearm Charge Time": {
	  "name": "Firearm Charge Time",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Firearm Charge Time.png",
	  "desc": "VALUE1.1% Firearm Charge Time [MYTHIC]",
	  "value": -0.10,
	  "usesConditional": {},
	  "stats": {
		"WeaponChargeTime": -0.10
	  },
	  "tags": [],
	  "color": "Red",
	  "units": "%",
	  "placementID": "R03"
	},
	"Grey Health Conversion": {
	  "name": "Grey Health Conversion",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Grey Health Conversion.png",
	  "desc": "VALUE1.1% Grey Health Conversion [MYTHIC]",
	  "value": 0.15,
	  "usesConditional": {},
	  "stats": {
		"GreyHealthConversion": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B08"
	},
	"Healing Effectiveness": {
	  "usesConditional": {},
	  "name": "Healing Effectiveness",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Healing Effectiveness.png",
	  "desc": "VALUE1.1% Healing Effectiveness [MYTHIC]",
	  "value": 0.15,
	  "stats": {
		"HealingEFF": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B09"
	},
	"Health Bonus": {
	  "usesConditional": {},
	  "name": "Health Bonus",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Health Bonus.png",
	  "desc": "VALUE1.1% Health [MYTHIC]",
	  "value": 0.10,
	  "stats": {
		"Health%": 0.10
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B10"
	},
    "Health Regeneration": {
	  "usesConditional": {},
	  "name": "Health Regeneration",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Health Regeneration.png",
	  "desc": "VALUE1.1 Health Regeneration/s [MYTHIC]",
	  "value": 1,
	  "stats": {
		"HP/S+": 1
	  },
	  "tags": [],
	  "units": "/s",
	  "color": "Blue",
	  "placementID": "B11"
	},
    "Heat Generation": {
	  "usesConditional": {},
	  "name": "Heat Generation",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Heat Generation.png",
	  "desc": "VALUE1.1% Heat Generation [MYTHIC]",
	  "value": -0.15,
	  "stats": {
		"HeatGeneration": -0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y04"
	},
	"Melee Critical Chance": {
	  "name": "Melee Critical Chance",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Melee Critical Chance.png",
	  "desc": "VALUE1.1% Melee Critical Chance [MYTHIC]",
	  "value": 0.075,
	  "usesConditional": {},
	  "stats": {
		"MeleeCritChance": 0.075
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R04"
	},
	"Melee Damage": {
	  "name": "Melee Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Melee Damage.png",
	  "desc": "VALUE1.1% Melee Damage [MYTHIC]",
	  "value": 0.10,
	  "usesConditional": {},
	  "stats": {
		"MeleeDamage": 0.10
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R05"
	},
	"Melee Speed": {
	  "name": "Melee Speed",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Melee Speed.png",
	  "desc": "VALUE1.1% Total Melee Attack Speed [MYTHIC]<br>(Attack + Charge)",
	  "value": 0.10,
	  "usesConditional": {},
	  "stats": {
		"AttackSpeed": 0.10,
		"ChargeSpeed": 0.10
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R06"
	},
    "Mod Critical Chance": {
	  "name": "Mod Critical Chance",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Mod Critical Chance.png",
	  "desc": "VALUE1.1% Mod Critical Chance [MYTHIC]",
	  "value": 0.075,
	  "usesConditional": {},
	  "stats": {
		"ModCritChance": 0.075
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R07"
	},
	"Mod Damage": {
	  "name": "Mod Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Mod Damage.png",
	  "desc": "VALUE1.1% Mod Damage [MYTHIC]",
	  "value": 0.1,
	  "usesConditional": {},
	  "stats": {
		"ModDamage": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R08"
	},
	"Mod Duration": {
	  "name": "Mod Duration",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Mod Duration.png",
	  "desc": "VALUE1.1% Mod Duration [MYTHIC]",
	  "value": 0.15,
	  "usesConditional": {},
	  "stats": {
		"ModDuration": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y05"
	},
    "Mod Generation": {
	  "name": "Mod Generation",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Mod Generation.png",
	  "desc": "VALUE1.1% Mod Generation [MYTHIC]",
	  "value": 0.10,
	  "usesConditional": {},
	  "stats": {
		"ModPowerGen": 0.10
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y06"
	},
    "Movement Speed": {
	  "name": "Movement Speed",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Movement Speed.png",
	  "desc": "VALUE1.1% Movement Speed [MYTHIC]",
	  "value": 0.10,
	  "usesConditional": {},
	  "stats": {
		"ModDuration": 0.10
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y07"
	},
    "Projectile Speed": {
	  "name": "Projectile Speed",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Projectile Speed.png",
	  "desc": "VALUE1.1% Projectile Speed [MYTHIC]",
	  "value": 0.10,
	  "usesConditional": {},
	  "stats": {
		"ProjectileSpeed": 0.10
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y08"
	},
	"Ranged Critical Chance": {
	  "name": "Ranged Critical Chance",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Ranged Critical Chance.png",
	  "desc": "VALUE1.1% Ranged Critical Chance [MYTHIC]",
	  "value": 0.075,
	  "usesConditional": {},
	  "stats": {
		"RangedCritChance": 0.075
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R09"
	},
	"Ranged Damage": {
	  "name": "Ranged Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Ranged Damage.png",
	  "desc": "VALUE1.1% Ranged Damage [MYTHIC]",
	  "value": 0.1,
	  "usesConditional": {},
	  "stats": {
		"RangedDamage": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R10"
	},
	"Ranged Fire Rate": {
	  "name": "Ranged Fire Rate",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Ranged Fire Rate.png",
	  "desc": "VALUE1.1% Fire Rate [MYTHIC]",
	  "value": 0.1,
	  "usesConditional": {},
	  "stats": {
		"FireRate": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R11"
	},
    "Reload Speed": {
	  "name": "Reload Speed",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Reload Speed.png",
	  "desc": "VALUE1.1% Reload Speed [MYTHIC]",
	  "value": 0.1,
	  "usesConditional": {},
	  "stats": {
		"ReloadSpeed": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y09"
	},
	"Revive Speed": {
	  "name": "Revive Speed",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Revive Speed.png",
	  "desc": "VALUE1.1% Revive Speed [MYTHIC]",
	  "value": 0.20,
	  "usesConditional": {},
	  "stats": {
		"ReviveSpeed": 0.20
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B12"
	},
	"Shield Amount": {
	  "usesConditional": {},
	  "name": "Shield Amount",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Shield Amount.png",
	  "desc": "VALUE1.1% Shield Amount [MYTHIC]",
	  "value": 0.1,
	  "stats": {
		"ShieldEFF": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "requires": ["Shield"],
	  "color": "Blue",
	  "placementID": "B13"
	},
	"Skill Cooldown": {
	  "name": "Skill Cooldown",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Skill Cooldown.png",
	  "desc": "VALUE1.1% Skill Cooldown [MYTHIC]",
	  "value": -0.1,
	  "usesConditional": {},
	  "stats": {
		"CDR": -0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y10"
	},
    "Skill Critical Chance": {
	  "name": "Skill Critical Chance",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Skill Critical Chance.png",
	  "desc": "VALUE1.1% Skill Critical Chance [MYTHIC]",
	  "value": 0.075,
	  "usesConditional": {},
	  "stats": {
		"SkillDamage": 0.075
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R12"
	},
    "Shield Duration": {
	  "usesConditional": {},
	  "name": "Shield Duration",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Shield Duration.png",
	  "desc": "VALUE1.1% Shield Duration [MYTHIC]",
	  "value": 0.1,
	  "stats": {
		"ShieldDuration": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "requires": ["Shield"],
	  "color": "Blue",
	  "placementID": "B14"
	},
	"Skill Damage": {
	  "name": "Skill Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Skill Damage.png",
	  "desc": "VALUE1.1% Skill Damage [MYTHIC]",
	  "value": 0.1,
	  "usesConditional": {},
	  "stats": {
		"SkillDamage": 0.1
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R13"
	},
	"Skill Duration": {
	  "name": "Skill Duration",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Skill Duration.png",
	  "desc": "VALUE1.1% Skill Duration [MYTHIC]",
	  "value": 0.15,
	  "usesConditional": {},
	  "stats": {
		"SkillDuration": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y11"
	},
	"Stamina Bonus": {
	  "usesConditional": {},
	  "name": "Stamina Bonus",
	  "slot": "RelicFragBlue",
	  "imageSuffix": "Stamina Bonus.png",
	  "desc": "VALUE1.1% Stamina Bonus [MYTHIC]",
	  "value": 0.15,
	  "stats": {
		"Stamina%": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Blue",
	  "placementID": "B15"
	},
    "Status Damage": {
	  "name": "Status Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Status Damage.png",
	  "desc": "VALUE1.1% Status Damage [MYTHIC]",
	  "value": 0.15,
	  "usesConditional": {},
	  "stats": {
		"StatusDamage": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R14"
	},
    "Use Speed": {
	  "name": "Consumable Speed",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Use Speed.png",
	  "desc": "VALUE1.1% Consumable Use Speed [MYTHIC]",
	  "value": 0.15,
	  "usesConditional": {},
	  "stats": {
		"ConsumableSpeed": 0.15,
		"RelicSpeed": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y12"
	},
	"Weakspot Damage": {
	  "name": "Weakspot Damage",
	  "slot": "RelicFragRed",
	  "imageSuffix": "Weakspot Damage.png",
	  "desc": "VALUE1.1% Weakspot Damage [MYTHIC]",
	  "value": 0.15,
	  "usesConditional": {},
	  "stats": {
		"AllWeakspot": 0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Red",
	  "placementID": "R15"
	},
    "Weapon Ideal Range": {
	  "name": "Weapon Ideal Range",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Weapon Ideal Range.png",
	  "desc": "VALUE1.1m Weapon Ideal Range [MYTHIC]",
	  "value": 2,
	  "usesConditional": {},
	  "stats": {
		"Range": 2
	  },
	  "tags": [],
	  "units": "m",
	  "color": "Yellow",
	  "placementID": "Y13"
	},
	"Weapon Spread": {
	  "name": "Weapon Spread",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Weapon Spread.png",
	  "desc": "VALUE1.1% Weapon Spread [MYTHIC]",
	  "value": -0.15,
	  "usesConditional": {},
	  "stats": {
		"Spread": -0.15
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y14"
	},
	"Firearm Swap Speed": {
	  "name": "Weapon Swap",
	  "slot": "RelicFragYellow",
	  "imageSuffix": "Weapon Swap.png",
	  "desc": "VALUE1.1% Weapon Swap Speed [MYTHIC]",
	  "value": 0.2,
	  "usesConditional": {},
	  "stats": {
		"WeaponSwapSpeed": 0.2
	  },
	  "tags": [],
	  "units": "%",
	  "color": "Yellow",
	  "placementID": "Y15"
	}
}

const ComboStats = {
    "Athletic": {
		"name": "Athletic",
        "requirements": ["Movement Speed", "Evade Speed"],
        "color": "Combo",
        "imageSuffix": "YellowBlue.png",
		"placementID": "C00"
    },
    "Capacitor": {
		"name": "Capacitor",
        "requirements": ["Firearm Charge Time", "Heat Generation"],
        "color": "Combo",
        "imageSuffix": "YellowYellow.png",
		"placementID": "C01"
    },
    "Cleric": {
		"name": "Cleric",
        "requirements": ["Healing Effectiveness", "Use Speed"],
        "color": "Combo",
        "imageSuffix": "BlueYellow.png",
		"placementID": "C02"
    },
    "Flash": {
		"name": "Flash",
        "requirements": ["Cast Speed", "Use Speed"],
        "color": "Combo",
        "imageSuffix": "YellowYellow.png",
		"placementID": "C03"
    },
    "Grip": {
		"name": "Grip",
        "requirements": ["Weapon Spread", "Firearm Swap Speed"],
        "color": "Combo",
        "imageSuffix": "YellowYellow.png",
		"placementID": "C04"
    },
    "Gunfighter": {
		"name": "Gunfighter",
        "requirements": ["Ranged Fire Rate", "Reload Speed"],
        "color": "Combo",
        "imageSuffix": "RedYellow.png",
		"placementID": "C05"
    },
    "Hulk": {
		"name": "Hulk",
        "requirements": ["Health Bonus", "Stamina Bonus"],
        "color": "Combo",
        "imageSuffix": "BlueBlue.png",
		"placementID": "C06"
    },
    "Longevity": {
		"name": "Longevity",
        "requirements": ["Mod Duration", "Skill Duration"],
        "color": "Combo",
        "imageSuffix": "YellowYellow.png",
		"placementID": "C07"
    },
    "Mage": {
		"name": "Mage",
        "requirements": ["Mod Damage", "Mod Generation"],
        "color": "Combo",
        "imageSuffix": "RedYellow.png",
		"placementID": "C08"
    },
    "Meta": {
		"name": "Meta",
        "requirements": ["Weakspot Damage", "Critical Damage"],
        "color": "Combo",
        "imageSuffix": "RedRed.png",
		"placementID": "C09"
    },
    "Munitions": {
		"name": "Munitions",
        "requirements": ["Ranged Critical Chance", "Ammo Reserves"],
        "color": "Combo",
        "imageSuffix": "RedYellow.png",
		"placementID": "C10"
    },
    "Pirate": {
		"name": "Pirate",
        "requirements": ["Ranged Damage", "Melee Damage"],
        "color": "Combo",
        "imageSuffix": "RedRed.png",
		"placementID": "C11"
    },
    "Protected": {
		"name": "Protected",
        "requirements": ["Shield Amount", "Base Armor"],
        "color": "Combo",
        "imageSuffix": "BlueBlue.png",
		"placementID": "C12"
    },
    "Pugilist": {
		"name": "Pugilist",
        "requirements": ["Melee Speed", "Base Stamina"],
        "color": "Combo",
        "imageSuffix": "RedBlue.png",
		"placementID": "C13"
    },
    "Revitalize": {
		"name": "Revitalize",
        "requirements": ["Health Regeneration", "Skill Cooldown"],
        "color": "Combo",
        "imageSuffix": "BlueYellow.png",
		"placementID": "C14"
    },
    "Rogue": {
		"name": "Rogue",
        "requirements": ["Melee Critical Chance", "Evade Speed"],
        "color": "Combo",
        "imageSuffix": "RedBlue.png",
		"placementID": "C15"
    },
    "Sapper": {
		"name": "Sapper",
        "requirements": ["Explosive Damage", "Damage Reduction"],
        "color": "Combo",
        "imageSuffix": "RedBlue.png",
		"placementID": "C16"
    },
    "Selfless": {
		"name": "Selfless",
        "requirements": ["Revive Speed", "Healing Effectiveness"],
        "color": "Combo",
        "imageSuffix": "BlueBlue.png",
		"placementID": "C17"
    },
    "Sniper": {
		"name": "Sniper",
        "requirements": ["Ranged Damage", "Weapon Ideal Range"],
        "color": "Combo",
        "imageSuffix": "RedYellow.png",
		"placementID": "C18"
    },
    "Tank": {
		"name": "Tank",
        "requirements": ["Damage Reduction", "Armor Bonus"],
        "color": "Combo",
        "imageSuffix": "BlueBlue.png",
		"placementID": "C19"
    },
    "Threshold": {
		"name": "Threshold",
        "requirements": ["Health Bonus", "Grey Health Conversion"],
        "color": "Combo",
        "imageSuffix": "BlueBlue.png",
		"placementID": "C20"
    },
    "Warrior": {
		"name": "Warrior",
        "requirements": ["Melee Damage", "Melee Speed"],
        "color": "Combo",
        "imageSuffix": "RedRed.png",
		"placementID": "C21"
    },
    "Wizard": {
		"name": "Wizard",
        "requirements": ["Mod Critical Chance", "Skill Critical Chance"],
        "color": "Combo",
        "imageSuffix": "RedRed.png",
		"placementID": "C22"
    },
}

let prismRowOptions = {
    ...fragments,
    ...ComboStats
}

let legendaryPerks = {
	"": {
        "name": "",
        "desc": "",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L00"
    },
    "Allegiance": {//not applicable yet
        "name": "",
        "desc": "Cannot Kill or Be Killed by Friendly Fire Damage",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L01"
    },
    "Altruistic": {//not applicable yet
        "name": "",
        "desc": "Lifesteal applies 30% of Stolen Health to Allies.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L02"
    },
    "Artful Dodger": {//not applicable yet
        "name": "",
        "desc": "All Dodges trigger Perfect Dodge Mechanics",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L03"
    },
    "Bodyguard": {//not applicable yet
        "name": "",
        "desc": "Cannot be One-Shot while at Max Health Capacity.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L04"
    },
    "Boundless Energy": {//TODO: Manage how this would work on the engineer skill math
        "name": "",
        "desc": "Grants Infinite N'Erudian Energy.<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L05"
    },
    "Brutality": {//TODO: work out w/e tf this is
        "name": "",
        "desc": "100% increased outgoing and incoming damage.<br><br>[These both seem to be multipliers, which is slightly nuts, need to confirm]<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L06"
    },
    "Critical Situation": {
        "name": "",
        "desc": "Grants 25% to All Critical Chance.",
        "stats": {
			"AllCritChance": 0.25
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L07"
    },
    "Dark Omen": {
        "name": "",
        "desc": "Dodges become Mist Step, costing Health instead of Stamina.<br><br>[Functions identically to Ring of Omens in terms of health cost math]",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L08"
    },
    "Defensive Measures": {
        "name": "",
        "desc": "Increases the Maximum Shield Capacity by +100%.<br><br>And yes the implication here is that shields are capped now.",
        "stats": {
			"ShieldCap": 1
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L09"
    },
    "Exhausted": {//not applicable yet
        "name": "",
        "desc": "Grants +250% Overheat Decay Rate.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L10"
    },
    "Fleet Footed": {
        "name": "",
        "desc": "Increases Dodge Weight Threshold by 100.",
        "stats": {
			"WeightThreshold": 100
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L11"
    },
    "Full Hearted": {//TODO: check how this works on the math later
        "name": "",
        "desc": "Gain +100% Relic Capacity<br>[this might be an actual doubled multiplier from what I saw]",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L12"
    },
    "Gigantic": {
        "name": "",
        "desc": "Grants +50 Health and Stamina.",
        "stats": {
			"Health": 50,
			"Stamina": 50
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L13"
    },
    "God Tear": {//not applicable yet
        "name": "",
        "desc": "Reduces Cheat Death Cooldowns by 50%",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L14"
    },
    "Heavy Drinker": {
        "name": "",
        "desc": "Increases the active Concoction Limit by 5.",
        "stats": {
			"ConcLimit": 5
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L15"
    },
    "Hyperactive": {
        "name": "",
        "desc": "Haste's bonus gains +100% effectiveness.",
        "stats": {
			"HASTEEffectiveness": 1,
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L16"
    },
    "Immovable": {//not applicable yet
        "name": "",
        "desc": "Cannot be staggered while Bulwark is active.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L17"
    },
    "Impervious": {
        "name": "",
        "desc": "Grants 20% Damage Reduction. [FlatDR]",
        "stats": {
			"FlatDR": 0.20
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L18"
    },
    "Insult to Injury": {//TODO: add a custom function on this one that looks for any outgoing statuses and applies exposed if any are found
        "name": "",
        "desc": "All outgoing Status Effects now apply EXPOSED as well.<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L19"
    },
    "Jack of All Trades": {
        "name": "",
        "desc": "Grants 45% All Damage",
        "stats": {
			"AllDamage": 0.45
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L20"
    },
    "Luck of the Devil": {//bro idk wtf this is supposed to do other than boost chances on super obscure stuff, but idk if it can actually help you
        "name": "",
        "desc": "Gain EXTREME luck.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L21"
    },
    "Master Killer": {
        "name": "",
        "desc": "Weakspot Damage gains a 1.25x multiplier.<br>Not factored yet",
        "stats": {
			"WeakspotMultiplier": 0.25
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L22"
    },
    "Outlaw": {//not applicable yet
        "name": "",
        "desc": "Reloading reloads both equipped firearms.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L23"
    },
    "Overpowered": {//surely this will be buffed
        "name": "",
        "desc": "Increases Mod Generation by 50%.",
        "stats": {
			"ModPowerGen": 0.50
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L24"
    },
    "Peak Conditioning": {
        "name": "",
        "desc": "Gain infinite stamina.<br>[0 cost, not infinite spending]",
        "stats": {
			"StaminaNegation": 1
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L25"
    },
    "Physician": {
        "name": "",
        "desc": "Increases Healing Effectiveness by 100%.",
        "stats": {
			"HealingEFF": 1
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L26"
    },
    "Power Fantasy": {
        "name": "",
        "desc": "Grants 30% Explosive Critical Chance and Critical Damage.",
        "stats": {
			"ExplosiveCritChance": 0.30,
			"ExplosiveCritDamage": 0.30
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L27"
    },
    "Power Trip": {//not applicable yet
        "name": "",
        "desc": "Doubles Mod Charges.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L28"
    },
    "Prime Time": {//not applicable yet and fuck coding this one jesus //TODO: code this one
        "name": "",
        "desc": "Enables Prime Perk for Secondary Archetypes.<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L29"
    },
    "Reverberation": {
        "name": "",
        "desc": "Grants +200 Stamina per second.",
        "stats": {
			"Stamina/S+": 200
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L30"
    },
    "Sadistic": {//TODO: code this one, god I hate it already, THERE IS SO MUCH TO DO
        "name": "",
        "desc": "Status Effects have a 25% chance per tick to deal 50% more damage.<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L31"
    },
    "Sharpshooter": {
        "name": "",
        "desc": "Increases Ranged Damage by 75%.",
        "stats": {
			"RangedDamage": 0.75
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L32"
    },
    "Size Matters": {//not applicable yet
        "name": "",
        "desc": "Gain double magazine capacity on non-single-shot weapons.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L33"
    },
    "Soulmate": {//not applicable yet
        "name": "",
        "desc": "Increases the maximum active summon limit by 1.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L34"
    },
    "Spectrum": {//TODO: custom calc here, this is a weird one
        "name": "",
        "desc": "Grants bonuses based on the colors of each row within this Prism.<br><br>Red - Damage<br>Blue - DR<br>Yellow - Movespeed<br>[Unsure if combo stats count both or one]<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L35"
    },
    "Speed Demon": {//not applicable yet
        "name": "",
        "desc": "Grants maximum Movement Speed bonuses.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L36"
    },
    "Steel Plating": {
        "name": "",
        "desc": "Increases Base Armor by 100.",
        "stats": {
			"Armor": 100
		},
        "tags": [],
        "usesConditional": {},
		"placementID": "L37"
    },
    "Traitor": {//TODO: Fuck this one, god I don't wanna do it though I think I may have actually already added the baseline needed to make this happen
        "name": "",
        "desc": "Maxes all Core Traits.<br>Not factored yet",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L38"
    },
    "Unbreakable": {//not applicable yet
        "name": "",
        "desc": "All Damage taken is converted to Grey Health, and Grey Health's Hit Threshold is infinite.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L39"
    },
    "Unbridled": {
        "name": "",
        "desc": "Reduces all Skill Cooldowns by Half.<br><br>I think this might be post CDR, which is nuts, but not sure",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L40"
    },
    "Vaccinated": {
        "name": "",
        "desc": "Gain immunity to Negative Status Effects.",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L41"
    },
    "Wrecking Ball": {
        "name": "",
        "desc": "TBD",
        "stats": {},
        "tags": [],
        "usesConditional": {},
		"placementID": "L42"
    },
}