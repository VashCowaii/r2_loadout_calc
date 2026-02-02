const stageTypers = "relic"
let mocSchedule = [
  {
    "id": 1214,
    "realName": "Path of Hidden Salvation",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1214,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "For each ally summon, increases all allies' DMG dealt by #1[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.3
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104314",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Hidden Salvation",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043146
            ],
            "stageDataArray": [
              {
                "stageName": "Ichor Memosprite: Winged Serpent",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104314"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Ichor Memosprite: Pheasant",
                      "id": 4062010,
                      "image": 4062010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 49339.429035,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Fire"
                      ],
                      "resistances": {
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Ichor Memosprite: Canine",
                      "id": 4062020,
                      "image": 4062020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 59207.314842,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Ice",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    0
                  ],
                  [
                    {
                      "name": "Ichor Memosprite: Pheasant",
                      "id": 4062010,
                      "image": 4062010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 49339.429035,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Fire"
                      ],
                      "resistances": {
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Ichor Memosprite: Winged Serpent",
                      "id": 4063010,
                      "image": 4063010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 315772.345824,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Imaginary",
                      "hpBars": 1,
                      "toughnessBase": 160,
                      "weaknessList": [
                        "Physical",
                        "Fire",
                        "Ice"
                      ],
                      "resistances": {
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71049.png",
      "71048.png",
      "2.png"
    ]
  },
  {
    "id": 1213,
    "realName": "Path of Thundersurge",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1213,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Increases all allies' HP restored when receiving healing by #1[i]%. After an ally target receives healing, increase their DMG dealt by #2[i]%. This can stack up to #3[i] stack(s).",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.3,
        0.06,
        10
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104313",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Thundersurge",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043136
            ],
            "stageDataArray": [
              {
                "stageName": "Dark Sun Gryphon",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104313"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Black Tide's Decrepit Bow",
                      "id": 4032050,
                      "image": 4032050,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 59207.314842,
                      "speedBase": 186,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Black Tide's Corroded Axe",
                      "id": 4032030,
                      "image": 4032030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 67101.6234876,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 40,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    {
                      "name": "Black Tide Council",
                      "id": 4032040,
                      "image": 4032040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 78943.086456,
                      "speedBase": 186,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ],
                  [
                    {
                      "name": "Black Tide's Corroded Axe",
                      "id": 4032030,
                      "image": 4032030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 67101.6234876,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 40,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dark Sun Gryphon",
                      "id": 4033030,
                      "image": 4033030,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 296036.57421,
                      "speedBase": 172.8,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Wind",
                      "hpBars": 1,
                      "toughnessBase": 160,
                      "weaknessList": [
                        "Physical",
                        "Fire",
                        "Quantum"
                      ],
                      "resistances": {
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Black Tide Council",
                      "id": 4032040,
                      "image": 4032040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 78943.086456,
                      "speedBase": 186,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71045.png",
      "71044.png",
      "2.png"
    ]
  },
  {
    "id": 1212,
    "realName": "Path of Aria",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1212,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Increases Skill DMG taken by enemy targets by #1[i]%. After an ally character attacks enemy targets using Skill, the ally additionally regenerates #2[i] Energy.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.3,
        10
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104312",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Aria",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043126
            ],
            "stageDataArray": [
              {
                "stageName": "Furiae Praetor",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104312"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Furiae Archer",
                      "id": 4012030,
                      "image": 4012030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 51313.0061964,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Furiae Troupe",
                      "id": 4012040,
                      "image": 4012040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 51313.0061964,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Imaginary",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    {
                      "name": "Furiae Warrior",
                      "id": 4012010,
                      "image": 4012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 51313.0061964,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Thunder",
                        "Quantum",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ],
                  [
                    {
                      "name": "Furiae Archer",
                      "id": 4012030,
                      "image": 4012030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 51313.0061964,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Furiae Troupe",
                      "id": 4012040,
                      "image": 4012040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 51313.0061964,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Imaginary",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Furiae Praetor",
                      "id": 4013010,
                      "image": 4013010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 355243.889052,
                      "speedBase": 158.4,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Imaginary",
                      "hpBars": 1,
                      "toughnessBase": 160,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    {
                      "name": "Furiae Warrior",
                      "id": 4012010,
                      "image": 4012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 51313.0061964,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Thunder",
                        "Quantum",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71041.png",
      "71040.png",
      "2.png"
    ]
  },
  {
    "id": 1211,
    "realName": "Path of Uncertainty",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1211,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "When there is an Elite Enemy on the field, all DMG taken by enemy targets decreases by #1[i]%. When Normal Enemies are defeated, the Elite Enemy will lose HP equal to a certain percentage of their Max HP.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.6
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104311",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Uncertainty",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043116
            ],
            "stageDataArray": [
              {
                "stageName": "Howling Casket",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104311"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Sableclaw Wolftrooper",
                      "id": 2032010,
                      "image": 2032010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 39471.543228,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Eclipse Wolftrooper",
                      "id": 2032020,
                      "image": 2032020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 39471.543228,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    0
                  ],
                  [
                    {
                      "name": "Sableclaw Wolftrooper",
                      "id": 2032010,
                      "image": 2032010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 39471.543228,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Eclipse Wolftrooper",
                      "id": 2032020,
                      "image": 2032020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 39471.543228,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Howling Casket",
                      "id": 2033010,
                      "image": 2033010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 236829.259368,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 120,
                      "weaknessList": [
                        "Thunder",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71039.png",
      "71038.png",
      "2.png"
    ]
  },
  {
    "id": 1210,
    "realName": "Path of Cavalier",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1210,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Increases Allies' Weakness Break Efficiency by #1[i]%. After enemies have their Weakness Broken, increases the DMG they receive by #2[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.5,
        0.5
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104310",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Cavalier",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043106
            ],
            "stageDataArray": [
              {
                "stageName": "\"Past Confined and Caged\"",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104310"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Memory Zone Meme \"Something In The Mirror\"",
                      "id": 3012010,
                      "image": 3012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 31577.2345824,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dreamjolt Troupe's Bubble Hound",
                      "id": 3002030,
                      "image": 3002030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 44405.4861315,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    1
                  ],
                  [
                    {
                      "name": "Memory Zone Meme \"Insatiable Vanity\"",
                      "id": 3012040,
                      "image": 3012040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 24669.7145175,
                      "speedBase": 180,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Fire"
                      ],
                      "resistances": {
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "\"Past Confined and Caged\"",
                      "id": 3003030,
                      "image": 3003030,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 236829.259368,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Fire",
                        "Thunder",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dreamjolt Troupe's Bubble Hound",
                      "id": 3002030,
                      "image": 3002030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 44405.4861315,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71033.png",
      "71032.png",
      "2.png"
    ]
  },
  {
    "id": 1209,
    "realName": "Path of Dreamdive",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1209,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Every time an enemy target is afflicted with a DoT status, the DMG taken by them increases by #1[i]%. This effect can stack up to #2[i] time(s).",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.2,
        5
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104309",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Dreamdive",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043096
            ],
            "stageDataArray": [
              {
                "stageName": "Dreamjolt Troupe's Beyond Overcooked",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104309"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Dreamjolt Troupe's Spring Loader",
                      "id": 3001010,
                      "image": 3001010,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 19735.771614,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Physical",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dreamjolt Troupe's Mr. Domescreen",
                      "id": 3002010,
                      "image": 3002010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 54273.3719385,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dreamjolt Troupe's Bubble Hound",
                      "id": 3002030,
                      "image": 3002030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 44405.4861315,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0
                  ],
                  [
                    {
                      "name": "Dreamjolt Troupe's Spring Loader",
                      "id": 3001010,
                      "image": 3001010,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 19735.771614,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Physical",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dreamjolt Troupe's Bubble Hound",
                      "id": 3002030,
                      "image": 3002030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 44405.4861315,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Dreamjolt Troupe's Beyond Overcooked",
                      "id": 3003010,
                      "image": 3003010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 355243.889052,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 160,
                      "weaknessList": [
                        "Fire",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71029.png",
      "71028.png",
      "2.png"
    ]
  },
  {
    "id": 1208,
    "realName": "Path of Darkness",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1208,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Increases DMG dealt by characters' Ultimate by #1[i]%. After any ally characters use their Ultimate, all allies advance their Action Forward by #2[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.5,
        0.15
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104308",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Darkness",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043086
            ],
            "stageDataArray": [
              {
                "stageName": "Aurumaton Spectral Envoy",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104308"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Entranced Ingenium: Golden Cloud Toad",
                      "id": 2011020,
                      "image": 2011020,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 17762.1944526,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Wraith Warden",
                      "id": 2002030,
                      "image": 2002030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Entranced Ingenium: Illumination Dragonfish",
                      "id": 2012010,
                      "image": 2012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Fire",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    0
                  ],
                  [
                    {
                      "name": "Entranced Ingenium: Golden Cloud Toad",
                      "id": 2011020,
                      "image": 2011020,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 17762.1944526,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Wraith Warden",
                      "id": 2002030,
                      "image": 2002030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Aurumaton Spectral Envoy",
                      "id": 2013020,
                      "image": 2013020,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 236829.259368,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71025.png",
      "71024.png",
      "2.png"
    ]
  },
  {
    "id": 1207,
    "realName": "Path of Elixir Seekers",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1207,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Every time an enemy is inflicted with a DoT status from an ally, they will be additionally Shocked for #1[i] turn(s).",
      "battleDesc": null,
      "buffType": "",
      "params": [
        3
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104307",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Elixir Seekers",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043076
            ],
            "stageDataArray": [
              {
                "stageName": "Abundance Sprite: Malefic Ape",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104307"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Disciples of Sanctus Medicus: Ballistarius",
                      "id": 2022060,
                      "image": 2022060,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 43418.6975508,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Abundance Sprite: Golden Hound",
                      "id": 2022040,
                      "image": 2022040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 31577.2345824,
                      "speedBase": 141.6,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Abundance Sprite: Wooden Lupus",
                      "id": 2022050,
                      "image": 2022050,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 39471.543228,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0
                  ],
                  [
                    {
                      "name": "Abundance Sprite: Golden Hound",
                      "id": 2022040,
                      "image": 2022040,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 31577.2345824,
                      "speedBase": 141.6,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Abundance Sprite: Malefic Ape",
                      "id": 2023020,
                      "image": 2023020,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 236829.259368,
                      "speedBase": 172.8,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 120,
                      "weaknessList": [
                        "Fire",
                        "Ice",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Abundance Sprite: Wooden Lupus",
                      "id": 2022050,
                      "image": 2022050,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 39471.543228,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71021.png",
      "71020.png",
      "2.png"
    ]
  },
  {
    "id": 1206,
    "realName": "Path of Conflagration",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1206,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Increases DMG dealt by ally characters' Basic ATK and Follow-Up ATK by #1[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.75
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104306",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Conflagration",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043066
            ],
            "stageDataArray": [
              {
                "stageName": "Aurumaton Gatekeeper",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104306"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Mara-Struck Soldier",
                      "id": 2022010,
                      "image": 2022010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 23682.9259368,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Fire",
                        "Ice",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.4,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Entranced Ingenium: Illumination Dragonfish",
                      "id": 2012010,
                      "image": 2012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Fire",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    1
                  ],
                  [
                    {
                      "name": "Entranced Ingenium: Obedient Dracolion",
                      "id": 2011010,
                      "image": 2011010,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 17762.1944526,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Aurumaton Gatekeeper",
                      "id": 2013010,
                      "image": 2013010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 197357.71614,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Thunder",
                        "Wind",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Imaginary": 0.4
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Entranced Ingenium: Golden Cloud Toad",
                      "id": 2011020,
                      "image": 2011020,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 17762.1944526,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    }
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71011.png",
      "71006.png",
      "2.png"
    ]
  },
  {
    "id": 1205,
    "realName": "Path of Holy Hymn",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1205,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Quantum DMG dealt by allies increases by #1[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.75
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104305",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Holy Hymn",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043056
            ],
            "stageDataArray": [
              {
                "stageName": "Blaze Out of Space",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104305"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Imaginary Weaver",
                      "id": 8002010,
                      "image": 8002010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 37497.9660666,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0,
                    {
                      "name": "Mask of No Thought",
                      "id": 8001030,
                      "image": 8001030,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 19735.771614,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Fire",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0
                  ],
                  [
                    {
                      "name": "Thunderspawn",
                      "id": 8001040,
                      "image": 8001040,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 11841.4629684,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Physical",
                        "Wind"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.4,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_DOT_Electric": 1
                      }
                    },
                    {
                      "name": "Imaginary Weaver",
                      "id": 8002010,
                      "image": 8002010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 37497.9660666,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Blaze Out of Space",
                      "id": 8003020,
                      "image": 8003020,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 197357.71614,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Physical",
                        "Ice",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.4,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_DOT_Burn": 1
                      }
                    },
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71008.png",
      "71002.png",
      "2.png"
    ]
  },
  {
    "id": 1204,
    "realName": "Path of Providence",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1204,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Allies' Break Effect increases by #1[i]%, and the resulting DoT and Additional DMG increase by #2[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.75,
        0.75
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104304",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Providence",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043046
            ],
            "stageDataArray": [
              {
                "stageName": "Decaying Shadow",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104304"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Incineration Shadewalker",
                      "id": 1022020,
                      "image": 1022020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Ice",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.4,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_DOT_Burn": 1
                      }
                    },
                    {
                      "name": "Imaginary Weaver",
                      "id": 8002010,
                      "image": 8002010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 37497.9660666,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    {
                      "name": "Frostspawn",
                      "id": 8001020,
                      "image": 8001020,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 11841.4629684,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Fire",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.4,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_CTRL_Frozen": 1
                      }
                    }
                  ],
                  [
                    {
                      "name": "Imaginary Weaver",
                      "id": 8002010,
                      "image": 8002010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 37497.9660666,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Decaying Shadow",
                      "id": 8003040,
                      "image": 8003040,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 197357.71614,
                      "speedBase": 206.4,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Fire",
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71007.png",
      "71005.png",
      "2.png"
    ]
  },
  {
    "id": 1203,
    "realName": "Path of Drifting",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1203,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Increase the max DMG that can be absorbed by Shields created by allies by #1[i]%. Characters protected by Shields deal #2[i]% more DMG.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.3,
        0.75
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104303",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Drifting",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043036
            ],
            "stageDataArray": [
              {
                "stageName": "Searing Prowler",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104303"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Frostspawn",
                      "id": 8001020,
                      "image": 8001020,
                      "rank": "Minion",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 11841.4629684,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": null,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 10,
                      "weaknessList": [
                        "Fire",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Ice": 0.4,
                        "Thunder": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_CTRL_Frozen": 1
                      }
                    },
                    {
                      "name": "Imaginary Weaver",
                      "id": 8002010,
                      "image": 8002010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 37497.9660666,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder",
                        "Quantum"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1,
                    {
                      "name": "Incineration Shadewalker",
                      "id": 1022020,
                      "image": 1022020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Ice",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.4,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_DOT_Burn": 1
                      }
                    }
                  ],
                  [
                    {
                      "name": "Incineration Shadewalker",
                      "id": 1022020,
                      "image": 1022020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Ice",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.4,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_DOT_Burn": 1
                      }
                    },
                    {
                      "name": "Searing Prowler",
                      "id": 1023010,
                      "image": 1023010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 217093.487754,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Ice",
                        "Thunder",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.4,
                        "Wind": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {
                        "STAT_DOT_Burn": 1
                      }
                    },
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71001.png",
      "71000.png",
      "2.png"
    ]
  },
  {
    "id": 1202,
    "realName": "Path of Jabbing Punch",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1202,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Lightning DMG dealt by allies increases by #1[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.75
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104302",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Jabbing Punch",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043026
            ],
            "stageDataArray": [
              {
                "stageName": "Automaton Grizzly",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104302"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Automaton Hound",
                      "id": 1012010,
                      "image": 1012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 27630.0802596,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Automaton Beetle",
                      "id": 1012030,
                      "image": 1012030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 27630.0802596,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Thunder",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Automaton Spider",
                      "id": 1012020,
                      "image": 1012020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 14801.8287105,
                      "speedBase": 99.6,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Fire",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Thunder",
                        "Wind"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1
                  ],
                  [
                    {
                      "name": "Automaton Beetle",
                      "id": 1012030,
                      "image": 1012030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 27630.0802596,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Thunder",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Automaton Grizzly",
                      "id": 1013010,
                      "image": 1013010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 256565.030982,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 140,
                      "weaknessList": [
                        "Fire",
                        "Ice",
                        "Thunder"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    0
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71010.png",
      "71004.png",
      "2.png"
    ]
  },
  {
    "id": 1201,
    "realName": "Path of Gelid Wind",
    "worldLevel": 6,
    "testWorldLevel": 6,
    "testMapID": 1201,
    "buffData": {
      "modifierName": "",
      "realModifierNamne": "",
      "name": "",
      "desc": "Physical DMG dealt by allies increases by #1[i]%.",
      "battleDesc": null,
      "buffType": "",
      "params": [
        0.75
      ],
      "abilitiesArray": [
        {
          "realModifierNamne": "FarmRelicAbility_104301",
          "BEKey": 20085023
        }
      ]
    },
    "floorData": {
      "1": {
        "floorName": "Path of Gelid Wind",
        "stageDataObject": {
          "stage1": {
            "ids": [
              1043016
            ],
            "stageDataArray": [
              {
                "stageName": "Voidranger: Trampler",
                "enemyLevel": 82,
                "modifiersToAdd": [
                  "FarmRelicAbility_104301"
                ],
                "buffOverride": null,
                "stageType": "Cocoon",
                "enemyList": [
                  [
                    {
                      "name": "Voidranger: Distorter",
                      "id": 8012020,
                      "image": 8012020,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 35524.3889052,
                      "speedBase": 144,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Voidranger: Reaver",
                      "id": 8012010,
                      "image": 8012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Voidranger: Eliminator",
                      "id": 8012030,
                      "image": 8012030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 41445.1203894,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Ice",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1
                  ],
                  [
                    {
                      "name": "Voidranger: Eliminator",
                      "id": 8012030,
                      "image": 8012030,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 41445.1203894,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 30,
                      "weaknessList": [
                        "Fire",
                        "Ice",
                        "Quantum"
                      ],
                      "resistances": {
                        "Physical": 0.2,
                        "Thunder": 0.2,
                        "Wind": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Voidranger: Reaver",
                      "id": 8012010,
                      "image": 8012010,
                      "rank": "MinionLv2",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 29603.657421,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.2,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 20,
                      "weaknessList": [
                        "Physical",
                        "Thunder"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Wind": 0.2,
                        "Quantum": 0.2,
                        "Imaginary": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    {
                      "name": "Voidranger: Trampler",
                      "id": 8013010,
                      "image": 8013010,
                      "rank": "Elite",
                      "attackBase": 488.2515651,
                      "defBase": 1020.00003,
                      "hpBase": 217093.487754,
                      "speedBase": 120,
                      "critDMG": 0.2,
                      "effectRES": 0.3,
                      "ehr": 0.256,
                      "delay": 1,
                      "toughnessBars": 1,
                      "toughnessElement": "Physical",
                      "hpBars": 1,
                      "toughnessBase": 100,
                      "weaknessList": [
                        "Physical",
                        "Wind",
                        "Imaginary"
                      ],
                      "resistances": {
                        "Fire": 0.2,
                        "Ice": 0.2,
                        "Thunder": 0.2,
                        "Quantum": 0.2
                      },
                      "resistancesDebuff": {}
                    },
                    1
                  ]
                ],
                "scalarElite": 3,
                "scalarHard": 1,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1"
                }
              }
            ]
          },
          "stage2": {
            "ids": [],
            "stageDataArray": []
          }
        }
      }
    },
    "realDropList": [
      "71003.png",
      "71009.png",
      "2.png"
    ]
  }
]