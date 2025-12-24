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
  }
}