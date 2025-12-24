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
  }
}