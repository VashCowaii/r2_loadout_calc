let relicSets = {
  "Passerby of Wandering Cloud": {
    "name": "Passerby of Wandering Cloud",
    "setID": 101,
    "desc": [
      "Increases Outgoing Healing by 10%.",
      "At the start of the battle, immediately regenerates 1 Skill Point."
    ],
    "icon": "icon/relic/101.png",
    "fixedStats": {
      "2": {
        "HealingOutgoing": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Musketeer of Wild Wheat": {
    "name": "Musketeer of Wild Wheat",
    "setID": 102,
    "desc": [
      "Increases ATK by 12%.",
      "The wearer's SPD increases by 6% and DMG dealt by Basic ATK increases by 10%."
    ],
    "icon": "icon/relic/102.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {
        "SPD%": 0.06
      }
    },
    "params": [
      [
        0.12
      ],
      [
        0.06,
        0.1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Knight of Purity Palace": {
    "name": "Knight of Purity Palace",
    "setID": 103,
    "desc": [
      "Increases DEF by 15%.",
      "Increases the max DMG that can be absorbed by the Shield created by the wearer by 20%."
    ],
    "icon": "icon/relic/103.png",
    "fixedStats": {
      "2": {
        "DEF%": 0.15
      },
      "4": {}
    },
    "params": [
      [
        0.15
      ],
      [
        0.2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Hunter of Glacial Forest": {
    "name": "Hunter of Glacial Forest",
    "setID": 104,
    "desc": [
      "Increases Ice DMG by 10%.",
      "After the wearer uses their Ultimate, their CRIT DMG increases by 25% for 2 turn(s)."
    ],
    "icon": "icon/relic/104.png",
    "fixedStats": {
      "2": {
        "DamageIce": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.25,
        2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Champion of Streetwise Boxing": {
    "name": "Champion of Streetwise Boxing",
    "setID": 105,
    "desc": [
      "Increases Physical DMG by 10%.",
      "After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s)."
    ],
    "icon": "icon/relic/105.png",
    "fixedStats": {
      "2": {
        "DamagePhysical": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.05,
        5
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Guard of Wuthering Snow": {
    "name": "Guard of Wuthering Snow",
    "setID": 106,
    "desc": [
      "Reduces DMG taken by 8%.",
      "At the beginning of the turn, if the wearer's HP percentage is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy."
    ],
    "icon": "icon/relic/106.png",
    "fixedStats": {
      "2": {},
      "4": {}
    },
    "params": [
      [
        0.08
      ],
      [
        0.5,
        0.08,
        5
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Firesmith of Lava-Forging": {
    "name": "Firesmith of Lava-Forging",
    "setID": 107,
    "desc": [
      "Increases Fire DMG by 10%.",
      "Increases DMG by the wearer's Skill by 12%. After unleashing Ultimate, increases the wearer's Fire DMG by 12% for the next attack."
    ],
    "icon": "icon/relic/107.png",
    "fixedStats": {
      "2": {
        "DamageFire": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.12,
        0.12
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Genius of Brilliant Stars": {
    "name": "Genius of Brilliant Stars",
    "setID": 108,
    "desc": [
      "Increases Quantum DMG by 10%.",
      "When the wearer deals DMG to the target enemy, ignores 10% DEF. If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF."
    ],
    "icon": "icon/relic/108.png",
    "fixedStats": {
      "2": {
        "DamageQuantum": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.1,
        0.1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Band of Sizzling Thunder": {
    "name": "Band of Sizzling Thunder",
    "setID": 109,
    "desc": [
      "Increases Lightning DMG by 10%.",
      "When the wearer uses their Skill, increases the wearer's ATK by 20% for 1 turn(s)."
    ],
    "icon": "icon/relic/109.png",
    "fixedStats": {
      "2": {
        "DamageLightning": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.2,
        1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Eagle of Twilight Line": {
    "name": "Eagle of Twilight Line",
    "setID": 110,
    "desc": [
      "Increases Wind DMG by 10%.",
      "After the wearer uses their Ultimate, their action is Advanced Forward by 25%."
    ],
    "icon": "icon/relic/110.png",
    "fixedStats": {
      "2": {
        "DamageWind": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.25
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Thief of Shooting Meteor": {
    "name": "Thief of Shooting Meteor",
    "setID": 111,
    "desc": [
      "Increases Break Effect by 16%.",
      "Increases the wearer's Break Effect by 16%. After the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy."
    ],
    "icon": "icon/relic/111.png",
    "fixedStats": {
      "2": {
        "DamageBreak": 0.16
      },
      "4": {
        "DamageBreak": 0.16
      }
    },
    "params": [
      [
        0.16
      ],
      [
        0.16,
        3
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Wastelander of Banditry Desert": {
    "name": "Wastelander of Banditry Desert",
    "setID": 112,
    "desc": [
      "Increases Imaginary DMG by 10%.",
      "When dealing DMG to debuffed enemy targets, the wearer has their CRIT Rate increased by 10%. And when they deal DMG to Imprisoned enemy targets, their CRIT DMG increases by 20%."
    ],
    "icon": "icon/relic/112.png",
    "fixedStats": {
      "2": {
        "DamageImaginary": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.1,
        0.2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Longevous Disciple": {
    "name": "Longevous Disciple",
    "setID": 113,
    "desc": [
      "Increases Max HP by 12%.",
      "When the wearer is hit or has their HP consumed by an ally or themselves, their CRIT Rate increases by 8% for 2 turn(s) and up to 2 stacks."
    ],
    "icon": "icon/relic/113.png",
    "fixedStats": {
      "2": {
        "HP%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12
      ],
      [
        0.08,
        2,
        2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Messenger Traversing Hackerspace": {
    "name": "Messenger Traversing Hackerspace",
    "setID": 114,
    "desc": [
      "Increases SPD by 6%.",
      "When the wearer uses their Ultimate on an ally, SPD for all allies increases by 12% for 1 turn(s). This effect cannot be stacked."
    ],
    "icon": "icon/relic/114.png",
    "fixedStats": {
      "2": {
        "SPD%": 0.06
      },
      "4": {}
    },
    "params": [
      [
        0.06
      ],
      [
        0.12,
        1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "The Ashblazing Grand Duke": {
    "name": "The Ashblazing Grand Duke",
    "setID": 115,
    "desc": [
      "Increases the DMG dealt by Follow-up ATK by 20%.",
      "When the wearer uses a Follow-up ATK, increases the wearer's ATK by 6% for every time the Follow-up ATK deals DMG. This effect can stack up to 8 time(s) and lasts for 3 turn(s). This effect is removed the next time the wearer uses a Follow-up ATK."
    ],
    "icon": "icon/relic/115.png",
    "fixedStats": {
      "2": {},
      "4": {}
    },
    "params": [
      [
        0.2
      ],
      [
        0.06,
        8,
        3
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Prisoner in Deep Confinement": {
    "name": "Prisoner in Deep Confinement",
    "setID": 116,
    "desc": [
      "Increases ATK by 12%.",
      "For every DoT the enemy target is afflicted with, the wearer will ignore 6% of its DEF when dealing DMG to it. This effect is valid for a max of 3 DoTs."
    ],
    "icon": "icon/relic/116.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12
      ],
      [
        0.06,
        3
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Pioneer Diver of Dead Waters": {
    "name": "Pioneer Diver of Dead Waters",
    "setID": 117,
    "desc": [
      "Increases DMG dealt to enemies with debuffs by 12%.",
      "Increases CRIT Rate by 4%. The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs. After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%, lasting for 1 turn(s)."
    ],
    "icon": "icon/relic/117.png",
    "fixedStats": {
      "2": {},
      "4": {
        "CritRateBase": 0.04
      }
    },
    "params": [
      [
        0.12
      ],
      [
        0.04,
        0.08,
        0.12,
        2,
        3,
        1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Watchmaker, Master of Dream Machinations": {
    "name": "Watchmaker, Master of Dream Machinations",
    "setID": 118,
    "desc": [
      "Increases Break Effect by 16%.",
      "When the wearer uses their Ultimate on an ally, all allies' Break Effect increases by 30% for 2 turn(s). This effect cannot be stacked."
    ],
    "icon": "icon/relic/118.png",
    "fixedStats": {
      "2": {
        "DamageBreak": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16
      ],
      [
        0.3,
        2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Iron Cavalry Against the Scourge": {
    "name": "Iron Cavalry Against the Scourge",
    "setID": 119,
    "desc": [
      "Increases Break Effect by 16%.",
      "If the wearer's Break Effect is 150% or higher, the Break DMG dealt to the enemy target ignores 10% of their DEF. If the wearer's Break Effect is 250% or higher, the Super Break DMG dealt to the enemy target additionally ignores 15% of their DEF."
    ],
    "icon": "icon/relic/119.png",
    "fixedStats": {
      "2": {
        "DamageBreak": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16
      ],
      [
        1.5,
        2.5,
        0.1,
        0.15
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "The Wind-Soaring Valorous": {
    "name": "The Wind-Soaring Valorous",
    "setID": 120,
    "desc": [
      "Increases ATK by 12%.",
      "Increases the wearer's CRIT Rate by 6%. After the wearer uses a Follow-up ATK, increases DMG dealt by Ultimate by 36%, lasting for 1 turn(s)."
    ],
    "icon": "icon/relic/120.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {
        "CritRateBase": 0.06
      }
    },
    "params": [
      [
        0.12
      ],
      [
        0.06,
        0.36,
        1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Sacerdos' Relived Ordeal": {
    "name": "Sacerdos' Relived Ordeal",
    "setID": 121,
    "desc": [
      "Increases SPD by 6%.",
      "When using Skill or Ultimate on one ally target, increases the ability target's CRIT DMG by 18%, lasting for 2 turn(s). This effect can stack up to 2 time(s)."
    ],
    "icon": "icon/relic/121.png",
    "fixedStats": {
      "2": {
        "SPD%": 0.06
      },
      "4": {}
    },
    "params": [
      [
        0.06
      ],
      [
        0.18,
        2,
        2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Scholar Lost in Erudition": {
    "name": "Scholar Lost in Erudition",
    "setID": 122,
    "desc": [
      "Increases CRIT Rate by 8%.",
      "Increases DMG dealt by Skill and Ultimate by 20%. After using Ultimate, additionally increases the DMG dealt by the next Skill by 25%."
    ],
    "icon": "icon/relic/122.png",
    "fixedStats": {
      "2": {
        "CritRateBase": 0.08
      },
      "4": {}
    },
    "params": [
      [
        0.08
      ],
      [
        0.2,
        0.25
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Hero of Triumphant Song": {
    "name": "Hero of Triumphant Song",
    "setID": 123,
    "desc": [
      "Increases ATK by 12%.",
      "While the wearer's memosprite is on the field, increases the wearer's SPD by 6%. When the wearer's memosprite attacks, increases the wearer's and memosprite's CRIT DMG by 30%, lasting for 2 turn(s)."
    ],
    "icon": "icon/relic/123.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12
      ],
      [
        0.06,
        0.3,
        2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Poet of Mourning Collapse": {
    "name": "Poet of Mourning Collapse",
    "setID": 124,
    "desc": [
      "Increases Quantum DMG by 10%.",
      "Decreases the wearer's SPD by 8%. Before entering battle, if the wearer's SPD is lower than 110/95, increases the wearer's CRIT Rate by 20%/32%. This effect applies to the wearer's memosprite at the same time."
    ],
    "icon": "icon/relic/124.png",
    "fixedStats": {
      "2": {
        "DamageQuantum": 0.1
      },
      "4": {
        "SPD%": -0.08
      }
    },
    "params": [
      [
        0.1
      ],
      [
        -0.08,
        110,
        95,
        0.2,
        0.32,
        0.08
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Warrior Goddess of Sun and Thunder": {
    "name": "Warrior Goddess of Sun and Thunder",
    "setID": 125,
    "desc": [
      "Increases SPD by 6%.",
      "When the wearer or their memosprite provides healing to ally targets other than themselves, the wearer gains \"Gentle Rain,\" which lasts for 2 turn(s) and can only trigger once per turn. While the wearer has \"Gentle Rain,\" SPD increases by 6% and all allies' CRIT DMG increases by 15%. This effect cannot stack."
    ],
    "icon": "icon/relic/125.png",
    "fixedStats": {
      "2": {
        "SPD%": 0.06
      },
      "4": {}
    },
    "params": [
      [
        0.06
      ],
      [
        0.06,
        0.15,
        2
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Wavestrider Captain": {
    "name": "Wavestrider Captain",
    "setID": 126,
    "desc": [
      "Increases CRIT DMG by 16%.",
      "When the wearer becomes the target of another ally target's ability, gains 1 stack of \"Help,\" stacking up to 2 time(s). If there are 2 stack(s) of \"Help\" when the wearer uses their Ultimate, consumes all \"Help\" to increase the wearer's ATK by 48% for 1 turn(s)."
    ],
    "icon": "icon/relic/126.png",
    "fixedStats": {
      "2": {
        "CritDamageBase": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16
      ],
      [
        2,
        0.48,
        1
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "World-Remaking Deliverer": {
    "name": "World-Remaking Deliverer",
    "setID": 127,
    "desc": [
      "Increases CRIT Rate by 8%.",
      "After the wearer uses Basic ATK or Skill, if the wearer's memosprite is on the field, increases Max HP of the wearer and their memosprite by 24%, and increases all allies' dealt DMG by 15%, lasting until after the wearer's next use of Basic ATK or Skill."
    ],
    "icon": "icon/relic/127.png",
    "fixedStats": {
      "2": {
        "CritRateBase": 0.08
      },
      "4": {}
    },
    "params": [
      [
        0.08
      ],
      [
        0.24,
        0.15
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Self-Enshrouded Recluse": {
    "name": "Self-Enshrouded Recluse",
    "setID": 128,
    "desc": [
      "The provided Shield Effect increases by 10%.",
      "Increases the Shield Effect provided by the wearer by 12%. When an ally target holds a Shield provided by the wearer, the ally target's CRIT DMG increases by 15%."
    ],
    "icon": "icon/relic/128.png",
    "fixedStats": {
      "2": {},
      "4": {}
    },
    "params": [
      [
        0.1
      ],
      [
        0.12,
        0.15
      ]
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Space Sealing Station": {
    "name": "Space Sealing Station",
    "setID": 301,
    "desc": [
      "Increases the wearer's ATK by 12%. When the wearer's SPD reaches 120 or higher, the wearer's ATK increases by an extra 12%."
    ],
    "icon": "icon/relic/301.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12,
        120,
        0.12
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Fleet of the Ageless": {
    "name": "Fleet of the Ageless",
    "setID": 302,
    "desc": [
      "Increases the wearer's Max HP by 12%. When the wearer's SPD reaches 120 or higher, all allies' ATK increases by 8%."
    ],
    "icon": "icon/relic/302.png",
    "fixedStats": {
      "2": {
        "HP%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12,
        120,
        0.08
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Pan-Cosmic Commercial Enterprise": {
    "name": "Pan-Cosmic Commercial Enterprise",
    "setID": 303,
    "desc": [
      "Increases the wearer's Effect Hit Rate by 10%. Meanwhile, the wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate, up to a maximum increase of 25%."
    ],
    "icon": "icon/relic/303.png",
    "fixedStats": {
      "2": {
        "EffectHitRate": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1,
        0.25,
        0.25
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Belobog of the Architects": {
    "name": "Belobog of the Architects",
    "setID": 304,
    "desc": [
      "Increases the wearer's DEF by 15%. When the wearer's Effect Hit Rate is 50% or higher, the wearer gains an extra 15% DEF."
    ],
    "icon": "icon/relic/304.png",
    "fixedStats": {
      "2": {
        "DEF%": 0.15
      },
      "4": {}
    },
    "params": [
      [
        0.15,
        0.5,
        0.15
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Celestial Differentiator": {
    "name": "Celestial Differentiator",
    "setID": 305,
    "desc": [
      "Increases the wearer's CRIT DMG by 16%. When the wearer's current CRIT DMG reaches 120% or higher, after entering battle, the wearer's CRIT Rate increases by 60% until the end of their first attack."
    ],
    "icon": "icon/relic/305.png",
    "fixedStats": {
      "2": {
        "CritDamageBase": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16,
        1.2,
        0.6
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Inert Salsotto": {
    "name": "Inert Salsotto",
    "setID": 306,
    "desc": [
      "Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 50% or higher, the DMG dealt by the wearer's Ultimate and Follow-up ATK increases by 15%."
    ],
    "icon": "icon/relic/306.png",
    "fixedStats": {
      "2": {
        "CritRateBase": 0.08
      },
      "4": {}
    },
    "params": [
      [
        0.08,
        0.5,
        0.15
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Talia: Kingdom of Banditry": {
    "name": "Talia: Kingdom of Banditry",
    "setID": 307,
    "desc": [
      "Increases the wearer's Break Effect by 16%. When the wearer's SPD reaches 145 or higher, the wearer's Break Effect increases by an extra 20%."
    ],
    "icon": "icon/relic/307.png",
    "fixedStats": {
      "2": {
        "DamageBreak": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16,
        145,
        0.2
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Sprightly Vonwacq": {
    "name": "Sprightly Vonwacq",
    "setID": 308,
    "desc": [
      "Increases the wearer's Energy Regeneration Rate by 5%. When the wearer's SPD reaches 120 or higher, the wearer's action is Advanced Forward by 40% immediately upon entering battle."
    ],
    "icon": "icon/relic/308.png",
    "fixedStats": {
      "2": {
        "EnergyRegenRate": 0.05
      },
      "4": {}
    },
    "params": [
      [
        0.05,
        120,
        0.4
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Rutilant Arena": {
    "name": "Rutilant Arena",
    "setID": 309,
    "desc": [
      "Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 70% or higher, DMG dealt by Basic ATK and Skill increases by 20%."
    ],
    "icon": "icon/relic/309.png",
    "fixedStats": {
      "2": {
        "CritRateBase": 0.08
      },
      "4": {}
    },
    "params": [
      [
        0.08,
        0.7,
        0.2
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Broken Keel": {
    "name": "Broken Keel",
    "setID": 310,
    "desc": [
      "Increases the wearer's Effect RES by 10%. When the wearer's Effect RES is at 30% or higher, all allies' CRIT DMG increases by 10%."
    ],
    "icon": "icon/relic/310.png",
    "fixedStats": {
      "2": {
        "EffectRES": 0.1
      },
      "4": {}
    },
    "params": [
      [
        0.1,
        0.3,
        0.1
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Firmament Frontline: Glamoth": {
    "name": "Firmament Frontline: Glamoth",
    "setID": 311,
    "desc": [
      "Increases the wearer's ATK by 12%. When the wearer's SPD is equal to or higher than 135/160, the wearer deals 12%/18% more DMG."
    ],
    "icon": "icon/relic/311.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12,
        135,
        160,
        0.12,
        0.18
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Penacony, Land of the Dreams": {
    "name": "Penacony, Land of the Dreams",
    "setID": 312,
    "desc": [
      "Increases wearer's Energy Regeneration Rate by 5%. Increases DMG by 10% for all other allies that are of the same Type as the wearer."
    ],
    "icon": "icon/relic/312.png",
    "fixedStats": {
      "2": {
        "EnergyRegenRate": 0.05
      },
      "4": {}
    },
    "params": [
      [
        0.05,
        0.1
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Sigonia, the Unclaimed Desolation": {
    "name": "Sigonia, the Unclaimed Desolation",
    "setID": 313,
    "desc": [
      "Increases the wearer's CRIT Rate by 4%. When an enemy target gets defeated, the wearer's CRIT DMG increases by 4%, stacking up to 10 time(s)."
    ],
    "icon": "icon/relic/313.png",
    "fixedStats": {
      "2": {
        "CritRateBase": 0.04
      },
      "4": {}
    },
    "params": [
      [
        0.04,
        10,
        0.04
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Izumo Gensei and Takama Divine Realm": {
    "name": "Izumo Gensei and Takama Divine Realm",
    "setID": 314,
    "desc": [
      "Increases the wearer's ATK by 12%. When entering battle, if at least one teammate follows the same Path as the wearer, then the wearer's CRIT Rate increases by 12%."
    ],
    "icon": "icon/relic/314.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12,
        0.12
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Duran, Dynasty of Running Wolves": {
    "name": "Duran, Dynasty of Running Wolves",
    "setID": 315,
    "desc": [
      "When an ally uses a Follow-up ATK, the wearer gains 1 stack of Merit, stacking up to 5 time(s). Each stack of Merit increases the DMG dealt by the wearer's Follow-up ATKs by 5%. When there are 5 stacks, additionally increases the wearer's CRIT DMG by 25%."
    ],
    "icon": "icon/relic/315.png",
    "fixedStats": {
      "2": {},
      "4": {}
    },
    "params": [
      [
        5,
        0.05,
        0.25
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Forge of the Kalpagni Lantern": {
    "name": "Forge of the Kalpagni Lantern",
    "setID": 316,
    "desc": [
      "Increases the wearer's SPD by 6%. When the wearer hits an enemy target that has Fire Weakness, the wearer's Break Effect increases by 40%, lasting for 1 turn(s)."
    ],
    "icon": "icon/relic/316.png",
    "fixedStats": {
      "2": {
        "SPD%": 0.06
      },
      "4": {}
    },
    "params": [
      [
        0.06,
        0.4,
        1
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Lushaka, the Sunken Seas": {
    "name": "Lushaka, the Sunken Seas",
    "setID": 317,
    "desc": [
      "Increases the wearer's Energy Regeneration Rate by 5%. If the wearer is not the first character in the team lineup, then increases the ATK of the first character in the team lineup by 12%."
    ],
    "icon": "icon/relic/317.png",
    "fixedStats": {
      "2": {
        "EnergyRegenRate": 0.05
      },
      "4": {}
    },
    "params": [
      [
        0.05,
        0.12
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "The Wondrous BananAmusement Park": {
    "name": "The Wondrous BananAmusement Park",
    "setID": 318,
    "desc": [
      "Increases the wearer's CRIT DMG by 16%. When a target summoned by the wearer is on the field, CRIT DMG additionally increases by 32%."
    ],
    "icon": "icon/relic/318.png",
    "fixedStats": {
      "2": {
        "CritDamageBase": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16,
        0.32
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Bone Collection's Serene Demesne": {
    "name": "Bone Collection's Serene Demesne",
    "setID": 319,
    "desc": [
      "Increases the wearer's Max HP by 12%. When the wearer's Max HP is 5000 or higher, increases the wearer's and their memosprite's CRIT DMG by 28%."
    ],
    "icon": "icon/relic/319.png",
    "fixedStats": {
      "2": {
        "HP%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12,
        5000,
        0.28
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Giant Tree of Rapt Brooding": {
    "name": "Giant Tree of Rapt Brooding",
    "setID": 320,
    "desc": [
      "Increases the wearer's SPD by 6%. When the wearer's SPD is 135/180 or higher, the wearer and their memosprite's Outgoing Healing increases by 12%/20%."
    ],
    "icon": "icon/relic/320.png",
    "fixedStats": {
      "2": {
        "SPD%": 0.06
      },
      "4": {}
    },
    "params": [
      [
        0.06,
        135,
        180,
        0.12,
        0.2
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Arcadia of Woven Dreams": {
    "name": "Arcadia of Woven Dreams",
    "setID": 321,
    "desc": [
      "When the number of ally targets on the field is not equal to 4, for every 1 additional/missing ally target, increases the DMG dealt by the wearer and their memosprite by 9%/12%, stacking up to 4/3 time(s)."
    ],
    "icon": "icon/relic/321.png",
    "fixedStats": {
      "2": {},
      "4": {}
    },
    "params": [
      [
        0.09,
        0.12,
        4,
        3
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Revelry by the Sea": {
    "name": "Revelry by the Sea",
    "setID": 322,
    "desc": [
      "Increases the wearer's ATK by 12%. When the wearer's ATK is higher than or equal to 2400/3600, increases the DoT DMG dealt by 12%/24% respectively."
    ],
    "icon": "icon/relic/322.png",
    "fixedStats": {
      "2": {
        "ATK%": 0.12
      },
      "4": {}
    },
    "params": [
      [
        0.12,
        2400,
        3600,
        0.12,
        0.24
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Amphoreus, The Eternal Land": {
    "name": "Amphoreus, The Eternal Land",
    "setID": 323,
    "desc": [
      "Increases the wearer's CRIT Rate by 8%. While the wearer's memosprite is on the field, increases all allies' SPD by 8%. This effect cannot be stacked."
    ],
    "icon": "icon/relic/323.png",
    "fixedStats": {
      "2": {
        "CritRateBase": 0.08
      },
      "4": {}
    },
    "params": [
      [
        0.08,
        0.08
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  },
  "Tengoku@Livestream": {
    "name": "Tengoku@Livestream",
    "setID": 324,
    "desc": [
      "Increases the wearer's CRIT DMG by 16%. If 3 or more Skill Points are consumed in the same turn, additionally increases the wearer's CRIT DMG by 32%, lasting for 3 turns."
    ],
    "icon": "icon/relic/324.png",
    "fixedStats": {
      "2": {
        "CritDamageBase": 0.16
      },
      "4": {}
    },
    "params": [
      [
        0.16,
        3,
        0.32,
        3
      ],
      []
    ],
    "extraProperties": {
      "2": [],
      "4": []
    }
  }
}