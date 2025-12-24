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
  }
}