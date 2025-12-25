let lightcones = {
  "Cornucopia": {
    "lightconeID": 20001,
    "name": "Cornucopia",
    "path": "Abundance",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 264.6,
      "DEFBase": 264.6,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Prosperity",
    "desc": "When the wearer uses their Skill or Ultimate, their Outgoing Healing increases by #1[i]%.",
    "params": [
      [
        0.12
      ],
      [
        0.15
      ],
      [
        0.18
      ],
      [
        0.21
      ],
      [
        0.24
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20001.png",
    "preview": "image/light_cone_preview/20001.png",
    "portrait": "image/light_cone_portrait/20001.png",
    "imageOffset": [
      0,
      -92,
      1.15
    ]
  },
  "Amber": {
    "lightconeID": 20003,
    "name": "Amber",
    "path": "Preservation",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 264.6,
      "DEFBase": 330.75,
      "HPBase": 846.72
    },
    "fixedStats": {
      "1": {
        "DEF%": 0.16
      },
      "2": {
        "DEF%": 0.2
      },
      "3": {
        "DEF%": 0.24
      },
      "4": {
        "DEF%": 0.28
      },
      "5": {
        "DEF%": 0.32
      }
    },
    "skillName": "Stasis",
    "desc": "Increases the wearer's DEF by #1[i]%. If the wearer's current HP percentage is lower than #2[i]%, increases their DEF by a further #3[i]%.",
    "params": [
      [
        0.16,
        0.5,
        0.16
      ],
      [
        0.2,
        0.5,
        0.2
      ],
      [
        0.24,
        0.5,
        0.24
      ],
      [
        0.28,
        0.5,
        0.28
      ],
      [
        0.32,
        0.5,
        0.32
      ]
    ],
    "statRef": [
      "DefenceAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/20003.png",
    "preview": "image/light_cone_preview/20003.png",
    "portrait": "image/light_cone_portrait/20003.png",
    "imageOffset": [
      0,
      20,
      1.15
    ]
  },
  "Chorus": {
    "lightconeID": 20005,
    "name": "Chorus",
    "path": "Harmony",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 317.52,
      "DEFBase": 264.6,
      "HPBase": 846.72
    },
    "fixedStats": {},
    "skillName": "Concerted",
    "desc": "After entering battle, increases the ATK of all allies by #1[i]%. Abilities of the same type cannot stack.",
    "params": [
      [
        0.08
      ],
      [
        0.09
      ],
      [
        0.1
      ],
      [
        0.11
      ],
      [
        0.12
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20005.png",
    "preview": "image/light_cone_preview/20005.png",
    "portrait": "image/light_cone_portrait/20005.png",
    "imageOffset": [
      0,
      -130,
      1.15
    ]
  },
  "Fine Fruit": {
    "lightconeID": 20008,
    "name": "Fine Fruit",
    "path": "Abundance",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 317.52,
      "DEFBase": 198.45,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Savor",
    "desc": "At the start of the battle, immediately regenerates #1[i] Energy for all allies.",
    "params": [
      [
        6
      ],
      [
        7.5
      ],
      [
        9
      ],
      [
        10.5
      ],
      [
        12
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20008.png",
    "preview": "image/light_cone_preview/20008.png",
    "portrait": "image/light_cone_portrait/20008.png",
    "imageOffset": [
      0,
      -4,
      1.15
    ]
  },
  "Defense": {
    "lightconeID": 20010,
    "name": "Defense",
    "path": "Preservation",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 264.6,
      "DEFBase": 264.6,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Revitalization",
    "desc": "When the wearer unleashes their Ultimate, they restore HP by #1[i]% of their Max HP.",
    "params": [
      [
        0.18
      ],
      [
        0.21
      ],
      [
        0.24
      ],
      [
        0.27
      ],
      [
        0.3
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20010.png",
    "preview": "image/light_cone_preview/20010.png",
    "portrait": "image/light_cone_portrait/20010.png",
    "imageOffset": [
      0,
      90,
      1.15
    ]
  },
  "Meshing Cogs": {
    "lightconeID": 20012,
    "name": "Meshing Cogs",
    "path": "Harmony",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 317.52,
      "DEFBase": 264.6,
      "HPBase": 846.72
    },
    "fixedStats": {},
    "skillName": "Fleet Triumph",
    "desc": "After the wearer uses attacks or gets hit, additionally regenerates #1[i] Energy. This effect cannot be repeatedly triggered in a single turn.",
    "params": [
      [
        4
      ],
      [
        5
      ],
      [
        6
      ],
      [
        7
      ],
      [
        8
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20012.png",
    "preview": "image/light_cone_preview/20012.png",
    "portrait": "image/light_cone_portrait/20012.png",
    "imageOffset": [
      0,
      0,
      1.15
    ]
  },
  "Multiplication": {
    "lightconeID": 20015,
    "name": "Multiplication",
    "path": "Abundance",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 317.52,
      "DEFBase": 198.45,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Denizens of Abundance",
    "desc": "After the wearer uses their Basic ATK, their next action will be Advanced Forward by #1[i]%.",
    "params": [
      [
        0.12
      ],
      [
        0.14
      ],
      [
        0.16
      ],
      [
        0.18
      ],
      [
        0.2
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20015.png",
    "preview": "image/light_cone_preview/20015.png",
    "portrait": "image/light_cone_portrait/20015.png",
    "imageOffset": [
      0,
      -20,
      1.15
    ]
  },
  "Pioneering": {
    "lightconeID": 20017,
    "name": "Pioneering",
    "path": "Preservation",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 264.6,
      "DEFBase": 264.6,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "IPC",
    "desc": "When the wearer Breaks an enemy's Weakness, the wearer restores HP by #1[i]% of their Max HP.",
    "params": [
      [
        0.12
      ],
      [
        0.14
      ],
      [
        0.16
      ],
      [
        0.18
      ],
      [
        0.2
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20017.png",
    "preview": "image/light_cone_preview/20017.png",
    "portrait": "image/light_cone_portrait/20017.png",
    "imageOffset": [
      0,
      85,
      1.15
    ]
  },
  "Mediation": {
    "lightconeID": 20019,
    "name": "Mediation",
    "path": "Harmony",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 317.52,
      "DEFBase": 264.6,
      "HPBase": 846.72
    },
    "fixedStats": {},
    "skillName": "Family",
    "desc": "Upon entering battle, increases SPD of all allies by #1[i] points for #2[i] turn(s).",
    "params": [
      [
        12,
        1
      ],
      [
        14,
        1
      ],
      [
        16,
        1
      ],
      [
        18,
        1
      ],
      [
        20,
        1
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20019.png",
    "preview": "image/light_cone_preview/20019.png",
    "portrait": "image/light_cone_portrait/20019.png",
    "imageOffset": [
      0,
      20,
      1.15
    ]
  },
  "Post-Op Conversation": {
    "lightconeID": 21000,
    "name": "Post-Op Conversation",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 330.75,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "EnergyRegenRate": 0.08
      },
      "2": {
        "EnergyRegenRate": 0.1
      },
      "3": {
        "EnergyRegenRate": 0.12
      },
      "4": {
        "EnergyRegenRate": 0.14
      },
      "5": {
        "EnergyRegenRate": 0.16
      }
    },
    "skillName": "Mutual Healing",
    "desc": "Increases the wearer's Energy Regeneration Rate by #1[i]% and increases Outgoing Healing when they use their Ultimate by #2[i]%.",
    "params": [
      [
        0.08,
        0.12
      ],
      [
        0.1,
        0.15
      ],
      [
        0.12,
        0.18
      ],
      [
        0.14,
        0.21
      ],
      [
        0.16,
        0.24
      ]
    ],
    "statRef": [
      "SPRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21000.png",
    "preview": "image/light_cone_preview/21000.png",
    "portrait": "image/light_cone_portrait/21000.png",
    "imageOffset": [
      0,
      -128,
      1.15
    ]
  },
  "Memories of the Past": {
    "lightconeID": 21004,
    "name": "Memories of the Past",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "DamageBreak": 0.28
      },
      "2": {
        "DamageBreak": 0.35
      },
      "3": {
        "DamageBreak": 0.42
      },
      "4": {
        "DamageBreak": 0.49
      },
      "5": {
        "DamageBreak": 0.56
      }
    },
    "skillName": "Old Photo",
    "desc": "Increases the wearer's Break Effect by #1[i]%. When the wearer attacks, additionally regenerates #2[i] Energy. This effect cannot be repeatedly triggered in a single turn.",
    "params": [
      [
        0.28,
        4
      ],
      [
        0.35,
        5
      ],
      [
        0.42,
        6
      ],
      [
        0.49,
        7
      ],
      [
        0.56,
        8
      ]
    ],
    "statRef": [
      "BreakDamageAddedRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21004.png",
    "preview": "image/light_cone_preview/21004.png",
    "portrait": "image/light_cone_portrait/21004.png",
    "imageOffset": [
      0,
      -12,
      1.15
    ]
  },
  "Planetary Rendezvous": {
    "lightconeID": 21011,
    "name": "Planetary Rendezvous",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 330.75,
      "HPBase": 1058.4
    },
    "fixedStats": {},
    "skillName": "Departure",
    "desc": "After entering battle, if an ally deals the same DMG Type as the wearer, DMG dealt increases by #1[i]%.",
    "params": [
      [
        0.12
      ],
      [
        0.15
      ],
      [
        0.18
      ],
      [
        0.21
      ],
      [
        0.24
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21011.png",
    "preview": "image/light_cone_preview/21011.png",
    "portrait": "image/light_cone_portrait/21011.png",
    "imageOffset": [
      0,
      -146,
      1.15
    ]
  },
  "Perfect Timing": {
    "lightconeID": 21014,
    "name": "Perfect Timing",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "EffectRES": 0.16
      },
      "2": {
        "EffectRES": 0.2
      },
      "3": {
        "EffectRES": 0.24
      },
      "4": {
        "EffectRES": 0.28
      },
      "5": {
        "EffectRES": 0.32
      }
    },
    "skillName": "Refraction of Sightline",
    "desc": "Increases the wearer's Effect RES by #1[i]% and increases Outgoing Healing by an amount that is equal to #2[i]% of Effect RES. Outgoing Healing can be increased this way by up to #3[i]%.",
    "params": [
      [
        0.16,
        0.33,
        0.15
      ],
      [
        0.2,
        0.36,
        0.18
      ],
      [
        0.24,
        0.39,
        0.21
      ],
      [
        0.28,
        0.42,
        0.24
      ],
      [
        0.32,
        0.45,
        0.27
      ]
    ],
    "statRef": [
      "StatusResistanceBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21014.png",
    "preview": "image/light_cone_preview/21014.png",
    "portrait": "image/light_cone_portrait/21014.png",
    "imageOffset": [
      -69,
      -188,
      1.5
    ]
  },
  "Dance! Dance! Dance!": {
    "lightconeID": 21018,
    "name": "Dance! Dance! Dance!",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Cannot Stop It!",
    "desc": "When the wearer uses their Ultimate, all allies' actions are Advanced Forward by #1[i]%.",
    "params": [
      [
        0.16
      ],
      [
        0.18
      ],
      [
        0.2
      ],
      [
        0.22
      ],
      [
        0.24
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21018.png",
    "preview": "image/light_cone_preview/21018.png",
    "portrait": "image/light_cone_portrait/21018.png",
    "imageOffset": [
      0,
      -75,
      1
    ]
  },
  "Quid Pro Quo": {
    "lightconeID": 21021,
    "name": "Quid Pro Quo",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Enjoy With Rapture",
    "desc": "At the start of the wearer's turn, regenerates #2[i] Energy for a randomly chosen ally (excluding the wearer) whose current Energy is lower than #1[i]%.",
    "params": [
      [
        0.5,
        8
      ],
      [
        0.5,
        10
      ],
      [
        0.5,
        12
      ],
      [
        0.5,
        14
      ],
      [
        0.5,
        16
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21021.png",
    "preview": "image/light_cone_preview/21021.png",
    "portrait": "image/light_cone_portrait/21021.png",
    "imageOffset": [
      0,
      -78,
      1.01
    ]
  },
  "Warmth Shortens Cold Nights": {
    "lightconeID": 21028,
    "name": "Warmth Shortens Cold Nights",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 370.44000000000005,
      "DEFBase": 396.9,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "HP%": 0.16
      },
      "2": {
        "HP%": 0.2
      },
      "3": {
        "HP%": 0.24
      },
      "4": {
        "HP%": 0.28
      },
      "5": {
        "HP%": 0.32
      }
    },
    "skillName": "Tiny Light",
    "desc": "Increases the wearer's Max HP by #1[i]%. When using Basic ATK or Skill, restores all allies' HP by an amount equal to #2[f1]% of their respective Max HP.",
    "params": [
      [
        0.16,
        0.02
      ],
      [
        0.2,
        0.025
      ],
      [
        0.24,
        0.03
      ],
      [
        0.28,
        0.035
      ],
      [
        0.32,
        0.04
      ]
    ],
    "statRef": [
      "HPAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21028.png",
    "preview": "image/light_cone_preview/21028.png",
    "portrait": "image/light_cone_portrait/21028.png",
    "imageOffset": [
      0,
      -64,
      1.15
    ]
  },
  "This Is Me!": {
    "lightconeID": 21030,
    "name": "This Is Me!",
    "path": "Preservation",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 370.44000000000005,
      "DEFBase": 529.2,
      "HPBase": 846.72
    },
    "fixedStats": {
      "1": {
        "DEF%": 0.16
      },
      "2": {
        "DEF%": 0.2
      },
      "3": {
        "DEF%": 0.24
      },
      "4": {
        "DEF%": 0.28
      },
      "5": {
        "DEF%": 0.32
      }
    },
    "skillName": "New Chapter",
    "desc": "Increases the wearer's DEF by #1[i]%. Increases the DMG of the wearer when they use their Ultimate by #2[i]% of the wearer's DEF. This effect only applies 1 time per enemy target during each use of the wearer's Ultimate.",
    "params": [
      [
        0.16,
        0.6
      ],
      [
        0.2,
        0.75
      ],
      [
        0.24,
        0.9
      ],
      [
        0.28,
        1.05
      ],
      [
        0.32,
        1.2
      ]
    ],
    "statRef": [
      "DefenceAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21030.png",
    "preview": "image/light_cone_preview/21030.png",
    "portrait": "image/light_cone_portrait/21030.png",
    "imageOffset": [
      0,
      -18,
      1.15
    ]
  },
  "Carve the Moon, Weave the Clouds": {
    "lightconeID": 21032,
    "name": "Carve the Moon, Weave the Clouds",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 330.75,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Secret",
    "desc": "At the start of the battle and whenever the wearer's turn begins, one of the following effects is applied randomly: All allies' ATK increases by #1[i]%, all allies' CRIT DMG increases by #2[i]%, or all allies' Energy Regeneration Rate increases by #3[i]%. The applied effect cannot be identical to the last effect applied, and will replace the previous effect. The applied effect will be removed when the wearer has been knocked down. Effects of the same type cannot be stacked.",
    "params": [
      [
        0.1,
        0.12,
        0.06
      ],
      [
        0.125,
        0.15,
        0.075
      ],
      [
        0.15,
        0.18,
        0.09
      ],
      [
        0.175,
        0.21,
        0.105
      ],
      [
        0.2,
        0.24,
        0.12
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21032.png",
    "preview": "image/light_cone_preview/21032.png",
    "portrait": "image/light_cone_portrait/21032.png",
    "imageOffset": [
      0,
      -58,
      1.15
    ]
  },
  "But the Battle Isn't Over": {
    "lightconeID": 23003,
    "name": "But the Battle Isn't Over",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 463.04999999999995,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {
      "1": {
        "EnergyRegenRate": 0.1
      },
      "2": {
        "EnergyRegenRate": 0.12
      },
      "3": {
        "EnergyRegenRate": 0.14
      },
      "4": {
        "EnergyRegenRate": 0.16
      },
      "5": {
        "EnergyRegenRate": 0.18
      }
    },
    "skillName": "Heir",
    "desc": "Increases the wearer's Energy Regeneration Rate by #1[i]% and regenerates 1 Skill Point when the wearer uses their Ultimate on an ally. This effect can be triggered once after every 2 uses of the wearer's Ultimate. When the wearer uses their Skill, the next ally taking action (except the wearer) deals #2[i]% more DMG for #3[i] turn(s).",
    "params": [
      [
        0.1,
        0.3,
        1
      ],
      [
        0.12,
        0.35,
        1
      ],
      [
        0.14,
        0.4,
        1
      ],
      [
        0.16,
        0.45,
        1
      ],
      [
        0.18,
        0.5,
        1
      ]
    ],
    "statRef": [
      "SPRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23003.png",
    "preview": "image/light_cone_preview/23003.png",
    "portrait": "image/light_cone_portrait/23003.png",
    "imageOffset": [
      0,
      -50,
      1.15
    ]
  },
  "Echoes of the Coffin": {
    "lightconeID": 23008,
    "name": "Echoes of the Coffin",
    "path": "Abundance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 396.9,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {
      "1": {
        "ATK%": 0.24
      },
      "2": {
        "ATK%": 0.28
      },
      "3": {
        "ATK%": 0.32
      },
      "4": {
        "ATK%": 0.36
      },
      "5": {
        "ATK%": 0.4
      }
    },
    "skillName": "Thorns",
    "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses an attack, for each different enemy target the wearer hits, regenerates #3[f1] Energy. Each attack can regenerate Energy up to #4[i] time(s) this way. After the wearer uses their Ultimate, all allies gain #2[i] SPD for 1 turn.",
    "params": [
      [
        0.24,
        12,
        3,
        3
      ],
      [
        0.28,
        14,
        3.5,
        3
      ],
      [
        0.32,
        16,
        4,
        3
      ],
      [
        0.36,
        18,
        4.5,
        3
      ],
      [
        0.4,
        20,
        5,
        3
      ]
    ],
    "statRef": [
      "AttackAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23008.png",
    "preview": "image/light_cone_preview/23008.png",
    "portrait": "image/light_cone_portrait/23008.png",
    "imageOffset": [
      0,
      -120,
      1.15
    ]
  },
  "Time Waits for No One": {
    "lightconeID": 23013,
    "name": "Time Waits for No One",
    "path": "Abundance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 463.04999999999995,
      "HPBase": 1270.08
    },
    "fixedStats": {
      "1": {
        "HP%": 0.18,
        "HealingOutgoing": 0.12
      },
      "2": {
        "HP%": 0.21,
        "HealingOutgoing": 0.14
      },
      "3": {
        "HP%": 0.24,
        "HealingOutgoing": 0.16
      },
      "4": {
        "HP%": 0.27,
        "HealingOutgoing": 0.18
      },
      "5": {
        "HP%": 0.3,
        "HealingOutgoing": 0.2
      }
    },
    "skillName": "Morn, Noon, Dusk, and Night",
    "desc": "Increases the wearer's Max HP by #1[i]% and Outgoing Healing by #2[i]%. When the wearer heals allies, record the amount of Outgoing Healing. When any ally launches an attack, a random attacked enemy takes Additional DMG equal to #3[i]% of the recorded Outgoing Healing value. The type of this Additional DMG is of the same Type as the wearer's. This Additional DMG is not affected by other buffs, and can only occur 1 time per turn.",
    "params": [
      [
        0.18,
        0.12,
        0.36
      ],
      [
        0.21,
        0.14,
        0.42
      ],
      [
        0.24,
        0.16,
        0.48
      ],
      [
        0.27,
        0.18,
        0.54
      ],
      [
        0.3,
        0.2,
        0.6
      ]
    ],
    "statRef": [
      "HPAddedRatio",
      "HealRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23013.png",
    "preview": "image/light_cone_preview/23013.png",
    "portrait": "image/light_cone_portrait/23013.png",
    "imageOffset": [
      0,
      -115,
      1.15
    ]
  },
  "Past and Future": {
    "lightconeID": 21025,
    "name": "Past and Future",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Kites From the Past",
    "desc": "When the wearer uses their Skill, the next ally taking action (except the wearer) deals #1[i]% increased DMG for #2[i] turn(s).",
    "params": [
      [
        0.16,
        1
      ],
      [
        0.2,
        1
      ],
      [
        0.24,
        1
      ],
      [
        0.28,
        1
      ],
      [
        0.32,
        1
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21025.png",
    "preview": "image/light_cone_preview/21025.png",
    "portrait": "image/light_cone_portrait/21025.png",
    "imageOffset": [
      46,
      -200,
      1.41
    ]
  },
  "Night of Fright": {
    "lightconeID": 23017,
    "name": "Night of Fright",
    "path": "Abundance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 529.2,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {
      "1": {
        "EnergyRegenRate": 0.12
      },
      "2": {
        "EnergyRegenRate": 0.14
      },
      "3": {
        "EnergyRegenRate": 0.16
      },
      "4": {
        "EnergyRegenRate": 0.18
      },
      "5": {
        "EnergyRegenRate": 0.2
      }
    },
    "skillName": "Deep, Deep Breaths",
    "desc": "Increases the wearer's Energy Regeneration Rate by #1[i]%. When any ally uses their Ultimate, the wearer restores HP for the ally currently with the lowest HP percentage by an amount equal to #2[i]% of the healed ally's Max HP. When the wearer provides healing for an ally, increases the healed ally's ATK by #3[f1]%. This effect can stack up to #4[i] times and lasts for #5[i] turn(s).",
    "params": [
      [
        0.12,
        0.1,
        0.024,
        5,
        2
      ],
      [
        0.14,
        0.11,
        0.027999999,
        5,
        2
      ],
      [
        0.16,
        0.12,
        0.032,
        5,
        2
      ],
      [
        0.18,
        0.13,
        0.036,
        5,
        2
      ],
      [
        0.2,
        0.14,
        0.04,
        5,
        2
      ]
    ],
    "statRef": [
      "SPRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23017.png",
    "preview": "image/light_cone_preview/23017.png",
    "portrait": "image/light_cone_portrait/23017.png",
    "imageOffset": [
      -12,
      -88,
      1.1
    ]
  },
  "Past Self in Mirror": {
    "lightconeID": 23019,
    "name": "Past Self in Mirror",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 529.2,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "DamageBreak": 0.6
      },
      "2": {
        "DamageBreak": 0.7
      },
      "3": {
        "DamageBreak": 0.8
      },
      "4": {
        "DamageBreak": 0.9
      },
      "5": {
        "DamageBreak": 1
      }
    },
    "skillName": "The Plum Fragrance In My Bones",
    "desc": "Increases the wearer's Break Effect by #1[i]%. When the wearer uses their Ultimate, increases all allies' DMG by #2[i]%, lasting for #3[i] turn(s). If the wearer's Break Effect exceeds or equals #4[i]%, 1 Skill Point will be recovered.\\nAt the start of each wave, all allies regenerate #5[f1] Energy immediately. Abilities of the same type cannot stack.",
    "params": [
      [
        0.6,
        0.24,
        3,
        1.5,
        10
      ],
      [
        0.7,
        0.28,
        3,
        1.5,
        12.5
      ],
      [
        0.8,
        0.32,
        3,
        1.5,
        15
      ],
      [
        0.9,
        0.36,
        3,
        1.5,
        17.5
      ],
      [
        1,
        0.4,
        3,
        1.5,
        20
      ]
    ],
    "statRef": [
      "BreakDamageAddedRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23019.png",
    "preview": "image/light_cone_preview/23019.png",
    "portrait": "image/light_cone_portrait/23019.png",
    "imageOffset": [
      0,
      18,
      1.01
    ]
  },
  "Earthly Escapade": {
    "lightconeID": 23021,
    "name": "Earthly Escapade",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 463.04999999999995,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.32
      },
      "2": {
        "CritDamageBase": 0.39
      },
      "3": {
        "CritDamageBase": 0.46
      },
      "4": {
        "CritDamageBase": 0.53
      },
      "5": {
        "CritDamageBase": 0.6
      }
    },
    "skillName": "Capriciousness",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. At the start of the battle, the wearer gains Mask, lasting for #6[i] turn(s). While the wearer has Mask, the wearer's teammates have their CRIT Rate increased by #5[i]% and their CRIT DMG increased by #2[i]%. For every 1 Skill Point the wearer recovers (including Skill Points that exceed the limit), they gain 1 stack of Radiant Flame. And when the wearer has #4[i] stacks of Radiant Flame, all the stacks are removed, and they gain Mask, lasting for #3[i] turn(s).",
    "params": [
      [
        0.32,
        0.28,
        4,
        4,
        0.1,
        3
      ],
      [
        0.39,
        0.35,
        4,
        4,
        0.11,
        3
      ],
      [
        0.46,
        0.42,
        4,
        4,
        0.12,
        3
      ],
      [
        0.53,
        0.49,
        4,
        4,
        0.13,
        3
      ],
      [
        0.6,
        0.56,
        4,
        4,
        0.14,
        3
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23021.png",
    "preview": "image/light_cone_preview/23021.png",
    "portrait": "image/light_cone_portrait/23021.png",
    "imageOffset": [
      16,
      -162,
      1.35
    ]
  },
  "Baptism of Pure Thought": {
    "lightconeID": 23020,
    "name": "Baptism of Pure Thought",
    "path": "The Hunt",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 529.2,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.2
      },
      "2": {
        "CritDamageBase": 0.23
      },
      "3": {
        "CritDamageBase": 0.26
      },
      "4": {
        "CritDamageBase": 0.29
      },
      "5": {
        "CritDamageBase": 0.32
      }
    },
    "skillName": "Mental Training",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. For every debuff on the enemy target, the wearer's CRIT DMG dealt against this target additionally increases by #2[i]%, stacking up to #3[i] times. When using Ultimate to attack the enemy target, the wearer receives the \"Disputation\" effect, which increases DMG dealt by #4[i]% and enables their Follow-Up ATKs to ignore #5[i]% of the target's DEF. This effect lasts for #6[i] turns.",
    "params": [
      [
        0.2,
        0.08,
        3,
        0.36,
        0.24,
        2
      ],
      [
        0.23,
        0.09,
        3,
        0.42,
        0.28,
        2
      ],
      [
        0.26,
        0.1,
        3,
        0.48,
        0.32,
        2
      ],
      [
        0.29,
        0.11,
        3,
        0.54,
        0.36,
        2
      ],
      [
        0.32,
        0.12,
        3,
        0.6,
        0.4,
        2
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23020.png",
    "preview": "image/light_cone_preview/23020.png",
    "portrait": "image/light_cone_portrait/23020.png",
    "imageOffset": [
      0,
      -62,
      1.02
    ]
  },
  "What Is Real?": {
    "lightconeID": 21035,
    "name": "What Is Real?",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 330.75,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "DamageBreak": 0.24
      },
      "2": {
        "DamageBreak": 0.3
      },
      "3": {
        "DamageBreak": 0.36
      },
      "4": {
        "DamageBreak": 0.42
      },
      "5": {
        "DamageBreak": 0.48
      }
    },
    "skillName": "Hypothesis",
    "desc": "Increases the wearer's Break Effect by #1[i]%. After using Basic ATK, restores HP for the wearer by an amount equal to #2[f1]% of Max HP plus #3[i].",
    "params": [
      [
        0.24,
        0.02,
        800
      ],
      [
        0.3,
        0.025,
        800
      ],
      [
        0.36,
        0.03,
        800
      ],
      [
        0.42,
        0.035,
        800
      ],
      [
        0.48,
        0.04,
        800
      ]
    ],
    "statRef": [
      "BreakDamageAddedRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21035.png",
    "preview": "image/light_cone_preview/21035.png",
    "portrait": "image/light_cone_portrait/21035.png",
    "imageOffset": [
      0,
      11,
      1.05
    ]
  },
  "Dreamville Adventure": {
    "lightconeID": 21036,
    "name": "Dreamville Adventure",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Solidarity",
    "desc": "After the wearer uses a certain type of ability such as Basic ATK, Skill, or Ultimate, all allies gain Childishness, which increases allies' DMG for the same type of ability as used by the wearer by #1[i]%. Childishness only takes effect for the most recent type of ability the wearer used and cannot be stacked.",
    "params": [
      [
        0.12
      ],
      [
        0.14
      ],
      [
        0.16
      ],
      [
        0.18
      ],
      [
        0.2
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21036.png",
    "preview": "image/light_cone_preview/21036.png",
    "portrait": "image/light_cone_portrait/21036.png",
    "imageOffset": [
      0,
      63,
      1.02
    ]
  },
  "Destiny's Threads Forewoven": {
    "lightconeID": 21039,
    "name": "Destiny's Threads Forewoven",
    "path": "Preservation",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 370.44000000000005,
      "DEFBase": 463.04999999999995,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "EffectRES": 0.12
      },
      "2": {
        "EffectRES": 0.14
      },
      "3": {
        "EffectRES": 0.16
      },
      "4": {
        "EffectRES": 0.18
      },
      "5": {
        "EffectRES": 0.2
      }
    },
    "skillName": "Insight",
    "desc": "Increases the wearer's Effect RES by #1[i]%. For every #2[i] of DEF the wearer has, increases the wearer's DMG dealt by #3[f1]%, up to a maximum DMG increase of #4[i]%.",
    "params": [
      [
        0.12,
        100,
        0.007999999,
        0.32
      ],
      [
        0.14,
        100,
        0.009,
        0.36
      ],
      [
        0.16,
        100,
        0.01,
        0.4
      ],
      [
        0.18,
        100,
        0.011,
        0.44
      ],
      [
        0.2,
        100,
        0.012,
        0.48
      ]
    ],
    "statRef": [
      "StatusResistanceBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21039.png",
    "preview": "image/light_cone_preview/21039.png",
    "portrait": "image/light_cone_portrait/21039.png",
    "imageOffset": [
      -90,
      -94,
      1.6
    ]
  },
  "Shared Feeling": {
    "lightconeID": 21007,
    "name": "Shared Feeling",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "HealingOutgoing": 0.1
      },
      "2": {
        "HealingOutgoing": 0.125
      },
      "3": {
        "HealingOutgoing": 0.15
      },
      "4": {
        "HealingOutgoing": 0.175
      },
      "5": {
        "HealingOutgoing": 0.2
      }
    },
    "skillName": "Cure and Repair",
    "desc": "Increases the wearer's Outgoing Healing by #1[i]%. When using Skill, regenerates #2[f1] Energy for all allies.",
    "params": [
      [
        0.1,
        2
      ],
      [
        0.125,
        2.5
      ],
      [
        0.15,
        3
      ],
      [
        0.175,
        3.5
      ],
      [
        0.2,
        4
      ]
    ],
    "statRef": [
      "HealRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21007.png",
    "preview": "image/light_cone_preview/21007.png",
    "portrait": "image/light_cone_portrait/21007.png",
    "imageOffset": [
      0,
      -62,
      1.15
    ]
  },
  "Hey, Over Here": {
    "lightconeID": 22001,
    "name": "Hey, Over Here",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "HP%": 0.08
      },
      "2": {
        "HP%": 0.09
      },
      "3": {
        "HP%": 0.1
      },
      "4": {
        "HP%": 0.11
      },
      "5": {
        "HP%": 0.12
      }
    },
    "skillName": "I'm Not Afraid!",
    "desc": "Increases the wearer's Max HP by #1[i]%. When the wearer uses their Skill, increases Outgoing Healing by #2[i]%, lasting for #3[i] turn(s).",
    "params": [
      [
        0.08,
        0.16,
        2
      ],
      [
        0.09,
        0.19,
        2
      ],
      [
        0.1,
        0.22,
        2
      ],
      [
        0.11,
        0.25,
        2
      ],
      [
        0.12,
        0.28,
        2
      ]
    ],
    "statRef": [
      "HPAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/22001.png",
    "preview": "image/light_cone_preview/22001.png",
    "portrait": "image/light_cone_portrait/22001.png",
    "imageOffset": [
      0,
      -47,
      1.1
    ]
  },
  "Concert for Two": {
    "lightconeID": 21043,
    "name": "Concert for Two",
    "path": "Preservation",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 370.44000000000005,
      "DEFBase": 463.04999999999995,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "DEF%": 0.16
      },
      "2": {
        "DEF%": 0.2
      },
      "3": {
        "DEF%": 0.24
      },
      "4": {
        "DEF%": 0.28
      },
      "5": {
        "DEF%": 0.32
      }
    },
    "skillName": "Inspire",
    "desc": "Increases the wearer's DEF by #1[i]%. For every on-field character that has a Shield, the DMG dealt by the wearer increases by #2[i]%.",
    "params": [
      [
        0.16,
        0.04
      ],
      [
        0.2,
        0.05
      ],
      [
        0.24,
        0.06
      ],
      [
        0.28,
        0.07
      ],
      [
        0.32,
        0.08
      ]
    ],
    "statRef": [
      "DefenceAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21043.png",
    "preview": "image/light_cone_preview/21043.png",
    "portrait": "image/light_cone_portrait/21043.png",
    "imageOffset": [
      45,
      -30,
      1.3
    ]
  },
  "Poised to Bloom": {
    "lightconeID": 21046,
    "name": "Poised to Bloom",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "ATK%": 0.16
      },
      "2": {
        "ATK%": 0.2
      },
      "3": {
        "ATK%": 0.24
      },
      "4": {
        "ATK%": 0.28
      },
      "5": {
        "ATK%": 0.32
      }
    },
    "skillName": "Lose Not, Forget Not",
    "desc": "Increases the wearer's ATK by #1[i]%. Upon entering battle, if two or more characters follow the same Path, then these characters' CRIT DMG increases by #2[i]%. Abilities of the same type cannot stack.",
    "params": [
      [
        0.16,
        0.16
      ],
      [
        0.2,
        0.2
      ],
      [
        0.24,
        0.24
      ],
      [
        0.28,
        0.28
      ],
      [
        0.32,
        0.32
      ]
    ],
    "statRef": [
      "AttackAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21046.png",
    "preview": "image/light_cone_preview/21046.png",
    "portrait": "image/light_cone_portrait/21046.png",
    "imageOffset": [
      8,
      -126,
      1.15
    ]
  },
  "Dream's Montage": {
    "lightconeID": 21048,
    "name": "Dream's Montage",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 396.9,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "SPD%": 0.08
      },
      "2": {
        "SPD%": 0.09
      },
      "3": {
        "SPD%": 0.1
      },
      "4": {
        "SPD%": 0.11
      },
      "5": {
        "SPD%": 0.12
      }
    },
    "skillName": "Academy-Style Edit",
    "desc": "Increases the wearer's SPD by #1[i]%. After attacking enemy targets that are Weakness Broken, regenerates #2[f1] Energy. This effect can trigger up to #3[i] time(s) per turn.",
    "params": [
      [
        0.08,
        3,
        2
      ],
      [
        0.09,
        3.5,
        2
      ],
      [
        0.1,
        4,
        2
      ],
      [
        0.11,
        4.5,
        2
      ],
      [
        0.12,
        5,
        2
      ]
    ],
    "statRef": [
      "SpeedAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21048.png",
    "preview": "image/light_cone_preview/21048.png",
    "portrait": "image/light_cone_portrait/21048.png",
    "imageOffset": [
      0,
      -25,
      1.05
    ]
  },
  "For Tomorrow's Journey": {
    "lightconeID": 22002,
    "name": "For Tomorrow's Journey",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 330.75,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "ATK%": 0.16
      },
      "2": {
        "ATK%": 0.2
      },
      "3": {
        "ATK%": 0.24
      },
      "4": {
        "ATK%": 0.28
      },
      "5": {
        "ATK%": 0.32
      }
    },
    "skillName": "Bonds",
    "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses their Ultimate, increases their DMG dealt by #2[i]%, lasting for #3[i] turn(s).",
    "params": [
      [
        0.16,
        0.18,
        1
      ],
      [
        0.2,
        0.21,
        1
      ],
      [
        0.24,
        0.24,
        1
      ],
      [
        0.28,
        0.27,
        1
      ],
      [
        0.32,
        0.3,
        1
      ]
    ],
    "statRef": [
      "AttackAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/22002.png",
    "preview": "image/light_cone_preview/22002.png",
    "portrait": "image/light_cone_portrait/22002.png",
    "imageOffset": [
      -15,
      -184,
      1.8
    ]
  },
  "Flowing Nightglow": {
    "lightconeID": 23026,
    "name": "Flowing Nightglow",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 635.04,
      "DEFBase": 463.04999999999995,
      "HPBase": 952.56
    },
    "fixedStats": {},
    "skillName": "Pacify",
    "desc": "Every time an ally attacks, the wearer gains 1 stack of Cantillation. Each stack of Cantillation increases the wearer's Energy Regeneration Rate by #1[f1]%, stacking up to #2[i] time(s). When the wearer uses their Ultimate, removes Cantillation and gains Cadenza. Cadenza increases the Wearer's ATK by #4[i]% and increases all allies' DMG dealt by #3[i]%, lasting for #5[i] turn(s).",
    "params": [
      [
        0.03,
        5,
        0.24,
        0.48,
        1
      ],
      [
        0.035,
        5,
        0.28,
        0.6,
        1
      ],
      [
        0.04,
        5,
        0.32,
        0.72,
        1
      ],
      [
        0.044999998,
        5,
        0.36,
        0.84,
        1
      ],
      [
        0.05,
        5,
        0.4,
        0.96,
        1
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/23026.png",
    "preview": "image/light_cone_preview/23026.png",
    "portrait": "image/light_cone_portrait/23026.png",
    "imageOffset": [
      0,
      -78,
      1
    ]
  },
  "Scent Alone Stays True": {
    "lightconeID": 23032,
    "name": "Scent Alone Stays True",
    "path": "Abundance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 529.2,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "DamageBreak": 0.6
      },
      "2": {
        "DamageBreak": 0.7
      },
      "3": {
        "DamageBreak": 0.8
      },
      "4": {
        "DamageBreak": 0.9
      },
      "5": {
        "DamageBreak": 1
      }
    },
    "skillName": "Contentment",
    "desc": "Increases the wearer's Break Effect by #1[i]%. After the wearer uses Ultimate to attack enemy targets, inflicts the targets with the \"Woefree\" state, lasting for #5[i] turn(s). While in \"Woefree,\" enemy targets take #2[i]% increased DMG. The effect of increasing DMG taken is additionally boosted by #4[i]% if the wearer's current Break Effect is #3[i]% or higher.",
    "params": [
      [
        0.6,
        0.1,
        1.5,
        0.08,
        2
      ],
      [
        0.7,
        0.12,
        1.5,
        0.1,
        2
      ],
      [
        0.8,
        0.14,
        1.5,
        0.12,
        2
      ],
      [
        0.9,
        0.16,
        1.5,
        0.14,
        2
      ],
      [
        1,
        0.18,
        1.5,
        0.16,
        2
      ]
    ],
    "statRef": [
      "BreakDamageAddedRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23032.png",
    "preview": "image/light_cone_preview/23032.png",
    "portrait": "image/light_cone_portrait/23032.png",
    "imageOffset": [
      -33,
      -121,
      1.23
    ]
  },
  "A Grounded Ascent": {
    "lightconeID": 23034,
    "name": "A Grounded Ascent",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 529.2,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {},
    "skillName": "Departing Anew",
    "desc": "After the wearer uses Skill or Ultimate on one ally character, the wearer regenerates #1[f1] Energy and the ability's target receives 1 stack of \"Hymn\" for #4[i] turn(s), stacking up to #3[i] time(s). Each stack of \"Hymn\" increases its holder's DMG dealt by #2[i]%. After every #5[i] instance(s) of Skill or Ultimate the wearer uses on one ally character, recovers 1 Skill Point.",
    "params": [
      [
        6,
        0.15,
        3,
        3,
        2
      ],
      [
        6.5,
        0.1725,
        3,
        3,
        2
      ],
      [
        7,
        0.195,
        3,
        3,
        2
      ],
      [
        7.5,
        0.2175,
        3,
        3,
        2
      ],
      [
        8,
        0.24,
        3,
        3,
        2
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/23034.png",
    "preview": "image/light_cone_preview/23034.png",
    "portrait": "image/light_cone_portrait/23034.png",
    "imageOffset": [
      -6,
      -83,
      1.1
    ]
  },
  "Victory In a Blink": {
    "lightconeID": 21050,
    "name": "Victory In a Blink",
    "path": "Remembrance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 396.9,
      "HPBase": 846.72
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.12
      },
      "2": {
        "CritDamageBase": 0.15
      },
      "3": {
        "CritDamageBase": 0.18
      },
      "4": {
        "CritDamageBase": 0.21
      },
      "5": {
        "CritDamageBase": 0.24
      }
    },
    "skillName": "Final Hit",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. When the wearer's memosprite uses an ability on an ally target, increases the DMG dealt by all ally targets by #2[i]%, lasting for #3[i] turn(s).",
    "params": [
      [
        0.12,
        0.08,
        3
      ],
      [
        0.15,
        0.1,
        3
      ],
      [
        0.18,
        0.12,
        3
      ],
      [
        0.21,
        0.14,
        3
      ],
      [
        0.24,
        0.16,
        3
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21050.png",
    "preview": "image/light_cone_preview/21050.png",
    "portrait": "image/light_cone_portrait/21050.png",
    "imageOffset": [
      -11,
      -4,
      1.2
    ]
  },
  "Shadowburn": {
    "lightconeID": 20021,
    "name": "Shadowburn",
    "path": "Remembrance",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 317.52,
      "DEFBase": 264.6,
      "HPBase": 846.72
    },
    "fixedStats": {},
    "skillName": "Beautify",
    "desc": "When the wearer summons memosprite for the first time, recovers #1[i] Skill Point(s) and regenerates #2[i] Energy for this unit.",
    "params": [
      [
        1,
        12
      ],
      [
        1,
        14
      ],
      [
        1,
        16
      ],
      [
        1,
        18
      ],
      [
        1,
        20
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20021.png",
    "preview": "image/light_cone_preview/20021.png",
    "portrait": "image/light_cone_portrait/20021.png",
    "imageOffset": [
      12,
      115,
      1.1
    ]
  },
  "Reminiscence": {
    "lightconeID": 20022,
    "name": "Reminiscence",
    "path": "Remembrance",
    "rarity": "3",
    "baseStats": {
      "ATKBase": 423.36,
      "DEFBase": 264.6,
      "HPBase": 635.04
    },
    "fixedStats": {},
    "skillName": "Going to Sleep",
    "desc": "When memosprite's turn starts, the wearer and memosprite each gain 1 stack of \"Commemoration.\" Each stack increases DMG dealt by #1[i]%, stacking up to #2[i] time(s). When memosprite disappears, removes \"Commemoration\" from the wearer and memosprite.",
    "params": [
      [
        0.08,
        4
      ],
      [
        0.09,
        4
      ],
      [
        0.1,
        4
      ],
      [
        0.11,
        4
      ],
      [
        0.12,
        4
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/20022.png",
    "preview": "image/light_cone_preview/20022.png",
    "portrait": "image/light_cone_portrait/20022.png",
    "imageOffset": [
      -6,
      -9,
      1.05
    ]
  },
  "Geniuses' Greetings": {
    "lightconeID": 21051,
    "name": "Geniuses' Greetings",
    "path": "Remembrance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 330.75,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "ATK%": 0.16
      },
      "2": {
        "ATK%": 0.2
      },
      "3": {
        "ATK%": 0.24
      },
      "4": {
        "ATK%": 0.28
      },
      "5": {
        "ATK%": 0.32
      }
    },
    "skillName": "Congratulations",
    "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses Ultimate, increases the Basic ATK DMG dealt by the wearer and their memosprite by #2[i]%, lasting for #3[i] turn(s).",
    "params": [
      [
        0.16,
        0.2,
        3
      ],
      [
        0.2,
        0.25,
        3
      ],
      [
        0.24,
        0.3,
        3
      ],
      [
        0.28,
        0.35,
        3
      ],
      [
        0.32,
        0.4,
        3
      ]
    ],
    "statRef": [
      "AttackAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21051.png",
    "preview": "image/light_cone_preview/21051.png",
    "portrait": "image/light_cone_portrait/21051.png",
    "imageOffset": [
      -9,
      -95,
      1.1
    ]
  },
  "Sweat Now, Cry Less": {
    "lightconeID": 21052,
    "name": "Sweat Now, Cry Less",
    "path": "Remembrance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 198.45,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "CritRateBase": 0.12
      },
      "2": {
        "CritRateBase": 0.14
      },
      "3": {
        "CritRateBase": 0.16
      },
      "4": {
        "CritRateBase": 0.18
      },
      "5": {
        "CritRateBase": 0.2
      }
    },
    "skillName": "Come Train!",
    "desc": "Increases the wearer's CRIT Rate by #1[i]%. When the wearer's memosprite is on the field, increases the DMG dealt by the wearer and their memosprite by #2[i]%.",
    "params": [
      [
        0.12,
        0.24
      ],
      [
        0.14,
        0.27
      ],
      [
        0.16,
        0.3
      ],
      [
        0.18,
        0.33
      ],
      [
        0.2,
        0.36
      ]
    ],
    "statRef": [
      "CriticalChanceBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21052.png",
    "preview": "image/light_cone_preview/21052.png",
    "portrait": "image/light_cone_portrait/21052.png",
    "imageOffset": [
      68,
      -114,
      1.45
    ]
  },
  "Time Woven Into Gold": {
    "lightconeID": 23036,
    "name": "Time Woven Into Gold",
    "path": "Remembrance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 635.04,
      "DEFBase": 396.9,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "SPDBase": 12
      },
      "2": {
        "SPDBase": 14
      },
      "3": {
        "SPDBase": 16
      },
      "4": {
        "SPDBase": 18
      },
      "5": {
        "SPDBase": 20
      }
    },
    "skillName": "Establishment",
    "desc": "Increases the wearer's base SPD by #1[i]. After the wearer and the wearer's memosprite attacks, the wearer gains 1 stack of \"Brocade.\" Each stack of \"Brocade\" increases the wearer's and their memosprite's CRIT DMG by #4[f1]%, stacking up to #2[i] time(s). When reaching maximum stacks, each \"Brocade\" stack additionally increases Basic ATK DMG dealt by #3[f1]%.",
    "params": [
      [
        12,
        6,
        0.09,
        0.09
      ],
      [
        14,
        6,
        0.105,
        0.105
      ],
      [
        16,
        6,
        0.12,
        0.12
      ],
      [
        18,
        6,
        0.135,
        0.135
      ],
      [
        20,
        6,
        0.15,
        0.15
      ]
    ],
    "statRef": [
      "BaseSpeed"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23036.png",
    "preview": "image/light_cone_preview/23036.png",
    "portrait": "image/light_cone_portrait/23036.png",
    "imageOffset": [
      11,
      -94,
      1.2
    ]
  },
  "If Time Were a Flower": {
    "lightconeID": 23038,
    "name": "If Time Were a Flower",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 396.9,
      "HPBase": 1270.08
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.36
      },
      "2": {
        "CritDamageBase": 0.42
      },
      "3": {
        "CritDamageBase": 0.48
      },
      "4": {
        "CritDamageBase": 0.54
      },
      "5": {
        "CritDamageBase": 0.6
      }
    },
    "skillName": "Aspiration",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. After the wearer launches Follow-Up ATK, additionally regenerates #2[i] Energy and gains \"Presage,\" lasting for #3[i] turn(s). While the wearer has \"Presage,\" all ally targets' CRIT DMG increases by #4[i]%. When entering battle, the wearer regenerates #5[i] Energy and gains \"Presage,\" lasting for #6[i] turn(s).",
    "params": [
      [
        0.36,
        12,
        2,
        0.48,
        21,
        2
      ],
      [
        0.42,
        12,
        2,
        0.6,
        21,
        2
      ],
      [
        0.48,
        12,
        2,
        0.72,
        21,
        2
      ],
      [
        0.54,
        12,
        2,
        0.84,
        21,
        2
      ],
      [
        0.6,
        12,
        2,
        0.96,
        21,
        2
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23038.png",
    "preview": "image/light_cone_preview/23038.png",
    "portrait": "image/light_cone_portrait/23038.png",
    "imageOffset": [
      2,
      -86,
      1.3
    ]
  },
  "Memory's Curtain Never Falls": {
    "lightconeID": 24005,
    "name": "Memory's Curtain Never Falls",
    "path": "Remembrance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 396.9,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "SPD%": 0.06
      },
      "2": {
        "SPD%": 0.075
      },
      "3": {
        "SPD%": 0.09
      },
      "4": {
        "SPD%": 0.105
      },
      "5": {
        "SPD%": 0.12
      }
    },
    "skillName": "Reception",
    "desc": "Increases the wearer's SPD by #1[f1]%. After the wearer uses Skill, increases the DMG dealt by all allies by #2[i]%, lasting for #3[i] turn(s).",
    "params": [
      [
        0.06,
        0.08,
        3
      ],
      [
        0.075,
        0.1,
        3
      ],
      [
        0.09,
        0.12,
        3
      ],
      [
        0.105,
        0.14,
        3
      ],
      [
        0.12,
        0.16,
        3
      ]
    ],
    "statRef": [
      "SpeedAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/24005.png",
    "preview": "image/light_cone_preview/24005.png",
    "portrait": "image/light_cone_portrait/24005.png",
    "imageOffset": [
      1,
      -86,
      1.1
    ]
  },
  "Long May Rainbows Adorn the Sky": {
    "lightconeID": 23042,
    "name": "Long May Rainbows Adorn the Sky",
    "path": "Remembrance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 529.2,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {
      "1": {
        "SPD%": 0.18
      },
      "2": {
        "SPD%": 0.21
      },
      "3": {
        "SPD%": 0.24
      },
      "4": {
        "SPD%": 0.27
      },
      "5": {
        "SPD%": 0.3
      }
    },
    "skillName": "Tolerant",
    "desc": "Increases the wearer's SPD by #1[i]%. When the wearer uses Basic ATK, Skill, or Ultimate, consumes all allies' HP equal to #2[f1]% of their current HP, and after the next attack of the wearer's memosprite, enables it to additionally deal 1 instance of Additional DMG equal to #6[f1]% of the total consumed HP to the attacked target, with the damage type based on the memosprite's type. Then, the total consumed HP is reset. When the wearer's memosprite uses Memosprite Skill, increases the DMG taken by all enemies by #4[f1]%, lasting for #5[i] turn(s). Effects of the same type cannot stack.",
    "params": [
      [
        0.18,
        0.01,
        0,
        0.18,
        2,
        2.5
      ],
      [
        0.21,
        0.0125,
        0,
        0.225,
        2,
        3.125
      ],
      [
        0.24,
        0.015,
        0,
        0.27,
        2,
        3.75
      ],
      [
        0.27,
        0.0175,
        0,
        0.315,
        2,
        4.375
      ],
      [
        0.3,
        0.02,
        0,
        0.36,
        2,
        5
      ]
    ],
    "statRef": [
      "SpeedAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23042.png",
    "preview": "image/light_cone_preview/23042.png",
    "portrait": "image/light_cone_portrait/23042.png",
    "imageOffset": [
      -64,
      -102,
      1.45
    ]
  },
  "Make Farewells More Beautiful": {
    "lightconeID": 23040,
    "name": "Make Farewells More Beautiful",
    "path": "Remembrance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 396.9,
      "HPBase": 1270.08
    },
    "fixedStats": {
      "1": {
        "HP%": 0.3
      },
      "2": {
        "HP%": 0.375
      },
      "3": {
        "HP%": 0.45
      },
      "4": {
        "HP%": 0.525
      },
      "5": {
        "HP%": 0.6
      }
    },
    "skillName": "Engrave",
    "desc": "Increases the wearer's Max HP by #1[i]%. When the wearer or their memosprite loses HP during their own turn, the wearer gains \"Death Flower.\" \"Death Flower\" allows the wearer and their memosprite to ignore #2[i]% of the target's DEF when dealing DMG, lasting for #3[i] turn(s).\\nWhen the wearer's memosprite disappears, advances the wearer's action by #4[i]%. This effect can only trigger up to 1 time, and the trigger count resets every time the wearer uses Ultimate.",
    "params": [
      [
        0.3,
        0.3,
        2,
        0.12
      ],
      [
        0.375,
        0.35,
        2,
        0.15
      ],
      [
        0.45,
        0.4,
        2,
        0.18
      ],
      [
        0.525,
        0.45,
        2,
        0.21
      ],
      [
        0.6,
        0.5,
        2,
        0.24
      ]
    ],
    "statRef": [
      "HPAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23040.png",
    "preview": "image/light_cone_preview/23040.png",
    "portrait": "image/light_cone_portrait/23040.png",
    "imageOffset": [
      3,
      -68,
      1.03
    ]
  },
  "Journey, Forever Peaceful": {
    "lightconeID": 21053,
    "name": "Journey, Forever Peaceful",
    "path": "Preservation",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 370.44000000000005,
      "DEFBase": 529.2,
      "HPBase": 1058.4
    },
    "fixedStats": {},
    "skillName": "Sweet Dream",
    "desc": "Increases the wearer's provided Shield Effect by #1[i]% and while any ally target has a Shield, the wearer's DMG dealt increases by #2[i]%.",
    "params": [
      [
        0.12,
        0.12
      ],
      [
        0.15,
        0.14
      ],
      [
        0.18,
        0.16
      ],
      [
        0.21,
        0.18
      ],
      [
        0.24,
        0.2
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21053.png",
    "preview": "image/light_cone_preview/21053.png",
    "portrait": "image/light_cone_portrait/21053.png",
    "imageOffset": [
      2,
      -57,
      1.05
    ]
  },
  "The Story's Next Page": {
    "lightconeID": 21054,
    "name": "The Story's Next Page",
    "path": "Remembrance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 370.44000000000005,
      "DEFBase": 396.9,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "HP%": 0.16
      },
      "2": {
        "HP%": 0.2
      },
      "3": {
        "HP%": 0.24
      },
      "4": {
        "HP%": 0.28
      },
      "5": {
        "HP%": 0.32
      }
    },
    "skillName": "Written Down",
    "desc": "Increases the wearer's Max HP by #1[i]%. After the wearer's memosprite attacks, the Outgoing Healing of the wearer and their memosprite increases by #2[i]%, lasting for #3[i] turn(s).",
    "params": [
      [
        0.16,
        0.12,
        1
      ],
      [
        0.2,
        0.15,
        1
      ],
      [
        0.24,
        0.18,
        1
      ],
      [
        0.28,
        0.21,
        1
      ],
      [
        0.32,
        0.24,
        1
      ]
    ],
    "statRef": [
      "HPAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21054.png",
    "preview": "image/light_cone_preview/21054.png",
    "portrait": "image/light_cone_portrait/21054.png",
    "imageOffset": [
      14,
      -102,
      1.2
    ]
  },
  "Unto Tomorrow's Morrow": {
    "lightconeID": 21055,
    "name": "Unto Tomorrow's Morrow",
    "path": "Abundance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 396.9,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "HealingOutgoing": 0.12
      },
      "2": {
        "HealingOutgoing": 0.15
      },
      "3": {
        "HealingOutgoing": 0.18
      },
      "4": {
        "HealingOutgoing": 0.21
      },
      "5": {
        "HealingOutgoing": 0.24
      }
    },
    "skillName": "Farewell",
    "desc": "Increases the wearer's Outgoing Healing by #1[i]%. When an ally target's current HP percentage is greater than or equal to #2[i]%, increases the DMG dealt by #3[i]%.",
    "params": [
      [
        0.12,
        0.5,
        0.12
      ],
      [
        0.15,
        0.5,
        0.14
      ],
      [
        0.18,
        0.5,
        0.16
      ],
      [
        0.21,
        0.5,
        0.18
      ],
      [
        0.24,
        0.5,
        0.2
      ]
    ],
    "statRef": [
      "HealRatioBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21055.png",
    "preview": "image/light_cone_preview/21055.png",
    "portrait": "image/light_cone_portrait/21055.png",
    "imageOffset": [
      2,
      -92,
      1.02
    ]
  },
  "In Pursuit of the Wind": {
    "lightconeID": 21056,
    "name": "In Pursuit of the Wind",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 396.9,
      "HPBase": 1058.4
    },
    "fixedStats": {},
    "skillName": "Flustered",
    "desc": "After entering combat, increases all allies' Break DMG dealt by #1[i]%. Abilities of the same type cannot stack.",
    "params": [
      [
        0.16
      ],
      [
        0.18
      ],
      [
        0.2
      ],
      [
        0.22
      ],
      [
        0.24
      ]
    ],
    "statRef": [],
    "extraProperties": [],
    "icon": "icon/light_cone/21056.png",
    "preview": "image/light_cone_preview/21056.png",
    "portrait": "image/light_cone_portrait/21056.png",
    "imageOffset": [
      0,
      -52,
      1.02
    ]
  },
  "The Flower Remembers": {
    "lightconeID": 21057,
    "name": "The Flower Remembers",
    "path": "Remembrance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 330.75,
      "HPBase": 1058.4
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.24
      },
      "2": {
        "CritDamageBase": 0.28
      },
      "3": {
        "CritDamageBase": 0.32
      },
      "4": {
        "CritDamageBase": 0.36
      },
      "5": {
        "CritDamageBase": 0.4
      }
    },
    "skillName": "Interdependence",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. The CRIT DMG dealt by the wearer's memosprite increases by #2[i]%.",
    "params": [
      [
        0.24,
        0.24
      ],
      [
        0.28,
        0.3
      ],
      [
        0.32,
        0.36
      ],
      [
        0.36,
        0.42
      ],
      [
        0.4,
        0.48
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/21057.png",
    "preview": "image/light_cone_preview/21057.png",
    "portrait": "image/light_cone_portrait/21057.png",
    "imageOffset": [
      21,
      27,
      1.28
    ]
  },
  "A Thankless Coronation": {
    "lightconeID": 23045,
    "name": "A Thankless Coronation",
    "path": "Destruction",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 529.2,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.36
      },
      "2": {
        "CritDamageBase": 0.45
      },
      "3": {
        "CritDamageBase": 0.54
      },
      "4": {
        "CritDamageBase": 0.63
      },
      "5": {
        "CritDamageBase": 0.72
      }
    },
    "skillName": "King of Knights",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. When using Ultimate, increases the wearer's ATK by #6[i]%, and if the wearer's Max Energy is greater than or equal to #3[i], regenerates a fixed amount of Energy equal to #5[i]% of the wearer's Max Energy and once again increases the wearer's ATK by #2[i]%, lasting for #4[i] turns.",
    "params": [
      [
        0.36,
        0.4,
        300,
        2,
        0.1,
        0.4
      ],
      [
        0.45,
        0.5,
        300,
        2,
        0.1,
        0.5
      ],
      [
        0.54,
        0.6,
        300,
        2,
        0.1,
        0.6
      ],
      [
        0.63,
        0.7,
        300,
        2,
        0.1,
        0.7
      ],
      [
        0.72,
        0.8,
        300,
        2,
        0.1,
        0.8
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23045.png",
    "preview": "image/light_cone_preview/23045.png",
    "portrait": "image/light_cone_portrait/23045.png",
    "imageOffset": [
      40,
      -101,
      1.27
    ]
  },
  "Epoch Etched in Golden Blood": {
    "lightconeID": 23048,
    "name": "Epoch Etched in Golden Blood",
    "path": "Harmony",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 635.04,
      "DEFBase": 463.04999999999995,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "ATK%": 0.64
      },
      "2": {
        "ATK%": 0.8
      },
      "3": {
        "ATK%": 0.96
      },
      "4": {
        "ATK%": 1.12
      },
      "5": {
        "ATK%": 1.28
      }
    },
    "skillName": "Conquer",
    "desc": "Increases the wearer's ATK by #1[i]%. After using Ultimate to attack, recovers #3[i] Skill Point(s). After the wearer uses their Skill on one ally character, increases the Skill DMG dealt by the target by #4[f1]% for #5[i] turn(s).",
    "params": [
      [
        0.64,
        1,
        1,
        0.54,
        3
      ],
      [
        0.8,
        1,
        1,
        0.675,
        3
      ],
      [
        0.96,
        1,
        1,
        0.81,
        3
      ],
      [
        1.12,
        1,
        1,
        0.945,
        3
      ],
      [
        1.28,
        1,
        1,
        1.08,
        3
      ]
    ],
    "statRef": [
      "AttackAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23048.png",
    "preview": "image/light_cone_preview/23048.png",
    "portrait": "image/light_cone_portrait/23048.png",
    "imageOffset": [
      -3,
      -80,
      1.38
    ]
  },
  "The Forever Victual": {
    "lightconeID": 22005,
    "name": "The Forever Victual",
    "path": "Harmony",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 330.75,
      "HPBase": 952.56
    },
    "fixedStats": {
      "1": {
        "ATK%": 0.16
      },
      "2": {
        "ATK%": 0.2
      },
      "3": {
        "ATK%": 0.24
      },
      "4": {
        "ATK%": 0.28
      },
      "5": {
        "ATK%": 0.32
      }
    },
    "skillName": "So good!",
    "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses Skill, increases ATK by #2[i]%, stacking up to #3[i] times.",
    "params": [
      [
        0.16,
        0.08,
        3
      ],
      [
        0.2,
        0.1,
        3
      ],
      [
        0.24,
        0.12,
        3
      ],
      [
        0.28,
        0.14,
        3
      ],
      [
        0.32,
        0.16,
        3
      ]
    ],
    "statRef": [
      "AttackAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/22005.png",
    "preview": "image/light_cone_preview/22005.png",
    "portrait": "image/light_cone_portrait/22005.png",
    "imageOffset": [
      -46,
      -106,
      1.3
    ]
  },
  "Fly Into a Pink Tomorrow": {
    "lightconeID": 22006,
    "name": "Fly Into a Pink Tomorrow",
    "path": "Remembrance",
    "rarity": "4",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 396.9,
      "HPBase": 846.72
    },
    "fixedStats": {
      "1": {
        "CritDamageBase": 0.12
      },
      "2": {
        "CritDamageBase": 0.15
      },
      "3": {
        "CritDamageBase": 0.18
      },
      "4": {
        "CritDamageBase": 0.21
      },
      "5": {
        "CritDamageBase": 0.24
      }
    },
    "skillName": "Gaze",
    "desc": "Increases the wearer's CRIT DMG by #1[i]%. When equipped by Trailblazer (Remembrance), increases all ally targets' DMG dealt by #2[i]% and increases the DMG dealt by the Enhanced Basic ATK \"Together, We Script Tomorrow!\" by #3[i]%.",
    "params": [
      [
        0.12,
        0.08,
        0.6
      ],
      [
        0.15,
        0.1,
        0.7
      ],
      [
        0.18,
        0.12,
        0.8
      ],
      [
        0.21,
        0.14,
        0.9
      ],
      [
        0.24,
        0.16,
        1
      ]
    ],
    "statRef": [
      "CriticalDamageBase"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/22006.png",
    "preview": "image/light_cone_preview/22006.png",
    "portrait": "image/light_cone_portrait/22006.png",
    "imageOffset": [
      2,
      3,
      1.02
    ]
  },
  "To Evernight's Stars": {
    "lightconeID": 23049,
    "name": "To Evernight's Stars",
    "path": "Remembrance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 463.04999999999995,
      "HPBase": 1164.2399999999998
    },
    "fixedStats": {
      "1": {
        "HP%": 0.3
      },
      "2": {
        "HP%": 0.375
      },
      "3": {
        "HP%": 0.45
      },
      "4": {
        "HP%": 0.525
      },
      "5": {
        "HP%": 0.6
      }
    },
    "skillName": "Sleepless",
    "desc": "Increases the wearer's Max HP by #1[i]%. When the wearer's memosprite uses an ability, the wearer gains \"Noctis.\" While the wearer has \"Noctis,\" the DMG dealt by all ally memosprites ignores #2[i]% of the targets' DEF. Increases the DMG dealt by the wearer and their memosprite by #3[i]%. When the wearer's memosprite disappears, the wearer recovers #4[i] Energy. Effects of the same type cannot stack.",
    "params": [
      [
        0.3,
        0.2,
        0.3,
        8
      ],
      [
        0.375,
        0.225,
        0.375,
        10
      ],
      [
        0.45,
        0.25,
        0.45,
        12
      ],
      [
        0.525,
        0.275,
        0.525,
        14
      ],
      [
        0.6,
        0.3,
        0.6,
        16
      ]
    ],
    "statRef": [
      "HPAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23049.png",
    "preview": "image/light_cone_preview/23049.png",
    "portrait": "image/light_cone_portrait/23049.png",
    "imageOffset": [
      34.5,
      27,
      1.3
    ]
  },
  "This Love, Forever": {
    "lightconeID": 23052,
    "name": "This Love, Forever",
    "path": "Remembrance",
    "rarity": "5",
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 463.04999999999995,
      "HPBase": 1270.08
    },
    "fixedStats": {
      "1": {
        "SPD%": 0.18
      },
      "2": {
        "SPD%": 0.21
      },
      "3": {
        "SPD%": 0.24
      },
      "4": {
        "SPD%": 0.27
      },
      "5": {
        "SPD%": 0.3
      }
    },
    "skillName": "A Promise",
    "desc": "Increases the wearer's SPD by #1[i]%. When the wearer's memosprite uses Memosprite Skill on one ally, gains \"Blank,\" which increases DMG taken by all enemies by #3[i]%. When the wearer's memosprite uses Memosprite Skill on an enemy, gains \"Verse,\" which increases CRIT DMG of all allies by #2[i]%. When the wearer's memosprite has both \"Blank\" and \"Verse,\" increases the effects of both \"Blank\" and \"Verse\" by #4[i]%.",
    "params": [
      [
        0.18,
        0.16,
        0.1,
        0.6
      ],
      [
        0.21,
        0.19,
        0.12,
        0.65
      ],
      [
        0.24,
        0.22,
        0.14,
        0.7
      ],
      [
        0.27,
        0.25,
        0.16,
        0.75
      ],
      [
        0.3,
        0.28,
        0.18,
        0.8
      ]
    ],
    "statRef": [
      "SpeedAddedRatio"
    ],
    "extraProperties": [],
    "icon": "icon/light_cone/23052.png",
    "preview": "image/light_cone_preview/23052.png",
    "portrait": "image/light_cone_portrait/23052.png",
    "imageOffset": [
      0,
      -78,
      1.02
    ]
  }
}