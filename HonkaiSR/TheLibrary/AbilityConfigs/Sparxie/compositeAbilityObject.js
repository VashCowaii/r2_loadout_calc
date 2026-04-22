const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Sparxie",
  "trimCharacterName": "Sparxie",
  "abilityList": [
    "Sparxie_Sparxie_Ability12_Part01",
    "Sparxie_Sparxie_TechniqueInLevel",
    "Sparxie_Sparxie_PassiveAbility01",
    "Sparxie_Sparxie_Ability04_Part02",
    "Sparxie_Sparxie_Ability04_Part01",
    "Sparxie_Sparxie_Ability03_Part02",
    "Sparxie_Sparxie_Ability03_Part01",
    "Sparxie_Sparxie_Ability03_EnterReady",
    "Sparxie_Sparxie_Ability11_Part02",
    "Sparxie_Sparxie_Ability11_Part01",
    "Sparxie_Sparxie_Ability21_Part02",
    "Sparxie_Sparxie_Ability21_Part01",
    "Sparxie_Sparxie_Ability02_Part02",
    "Sparxie_Sparxie_Ability02_Part01",
    "Sparxie_Sparxie_Ability01_Part02",
    "Sparxie_Sparxie_Ability01_Part01",
    "Sparxie_Modifiers",
    "Sparxie_Functions"
  ],
  "abilityObject": {
    "Sparxie_Sparxie_Ability12_Part01": {
      "fileName": "Sparxie_Sparxie_Ability12_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability12_Part01"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": 40,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability11_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"767923714\">Sparxie_Ability02_Effect</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PKLineProgress",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PKLineProgress",
          "value": 0.3
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1607821938\">Sparxie_Ability11_Effect</a>"
            },
            {
              "name": "Update Character Panel Visibility"
            },
            "Toggle View Mode"
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-514028922\">Sparxie_Ability11_Effect_V1</a>"
            },
            "Toggle View Mode"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_TechniqueInLevel": {
      "fileName": "Sparxie_Sparxie_TechniqueInLevel",
      "childAbilityList": [
        "Sparxie_Sparxie_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1052455939\">Sparxie_Maze_Damage</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1052455939\">Sparxie_Maze_Damage</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "adjustmentType": "+"
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Sparxie_Sparxie_PassiveAbility01": {
      "fileName": "Sparxie_Sparxie_PassiveAbility01",
      "childAbilityList": [
        "Sparxie_Sparxie_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"522571708\">Sparxie_Passive01</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Sparxie_Skill02_GrandPrizeChance",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Sparxie_Skill02_MinorPrizeChance",
          "value": {
            "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
            "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
            "constants": [],
            "variables": [
              28,
              "Sparxie_Skill02_GrandPrizeChance"
            ]
          }
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Sparxie_EnergyPoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
            "displayLines": "Sparxie_EnergyPoint",
            "constants": [],
            "variables": [
              "Sparxie_EnergyPoint"
            ]
          },
          "maximum": 1,
          "assignState": "True",
          "bar#": 4
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sweet! Punchline Signing"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1923210596\">Sparxie_Trace01</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Frenzy! Palette of Truth and Lies"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1956765834\">Sparxie_Trace03</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-719410617\">Sparxie_Eidolon1</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-803298712\">Sparxie_Eidolon4</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-769743474\">Sparxie_Eidolon6</a>[<span class=\"descriptionNumberColor\">#BuiltDifferent #GoingExtinct</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparxie_Sparxie_Ability04_Part02": {
      "fileName": "Sparxie_Sparxie_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": []
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1081099960\">Sparxie_ElationAbility_Aoe</a>"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Sparxie_EnergyPoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Modify Skill-Point Extras",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "function": "Set",
          "value": {
            "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
            "displayLines": "Sparxie_EnergyPoint",
            "constants": [],
            "variables": [
              "Sparxie_EnergyPoint"
            ]
          },
          "silentChange": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "variableName": "_CurrentEP"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_ExtraDamage",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (_CurrentEP) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_CurrentEP / 1))",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "_CurrentEP",
                  1
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Rank06_ExtraDamage",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (40) || Variables[1] (20) || SUB || RETURN",
                  "displayLines": "(40 - 20)",
                  "constants": [],
                  "variables": [
                    40,
                    20
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank06_ExtraDamage",
                  "value": {
                    "operator": "Variables[0] (40) || Variables[1] (20) || SUB || RETURN",
                    "displayLines": "(40 - 20)",
                    "constants": [],
                    "variables": [
                      40,
                      20
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (20) || Variables[1] (_Rank06_ExtraDamage) || ADD || RETURN",
            "displayLines": "(20 + _Rank06_ExtraDamage)",
            "constants": [],
            "variables": [
              20,
              "_Rank06_ExtraDamage"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1984031563\">Sparxie_ElationAbility_Single</a>"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability04_Part01": {
      "fileName": "Sparxie_Sparxie_Ability04_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability04_Camera",
        "Sparxie_Sparxie_Ability04_Part01",
        "Sparxie_Sparxie_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Elation",
      "energy": 5,
      "toughnessList": [
        1.6666666666666667,
        6.666666666666667,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Sparxie_Sparxie_Ability03_Part02": {
      "fileName": "Sparxie_Sparxie_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "adjustment": "Add"
            }
          ]
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (Sparxie_SkillTree_PointB2_UltraEPAddValue) || ADD || RETURN",
            "displayLines": "(2 + Sparxie_SkillTree_PointB2_UltraEPAddValue)",
            "constants": [],
            "variables": [
              2,
              "Sparxie_SkillTree_PointB2_UltraEPAddValue"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Dazzling! Persona Kaleidoscope"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Sparxie_EnergyPoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (Sparxie_SkillTree_PointB2_UltraBPAddValue) || RETURN",
                "displayLines": "Sparxie_SkillTree_PointB2_UltraBPAddValue",
                "constants": [],
                "variables": [
                  "Sparxie_SkillTree_PointB2_UltraBPAddValue"
                ]
              }
            },
            {
              "name": "Modify Skill-Point Extras",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "function": "Set",
              "value": {
                "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
                "displayLines": "Sparxie_EnergyPoint",
                "constants": [],
                "variables": [
                  "Sparxie_EnergyPoint"
                ]
              },
              "silentChange": true
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurrentElationDamage",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (_CurrentElationDamage) || Variables[1] (0.6) || MUL || Variables[2] (0.5) || ADD || RETURN",
              "displayLines": "((_CurrentElationDamage * 0.6) + 0.5)",
              "constants": [],
              "variables": [
                "_CurrentElationDamage",
                0.6,
                0.5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "operator": "Variables[0] (0.48) || RETURN",
                  "displayLines": "0.48",
                  "constants": [],
                  "variables": [
                    0.48
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Sparxie_ElationPursued_EPDamage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability03_Part01": {
      "fileName": "Sparxie_Sparxie_Ability03_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability03_Camera",
        "Sparxie_Sparxie_Ability03_EnterReady",
        "Sparxie_Sparxie_Ability03_Part01",
        "Sparxie_Sparxie_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Sparxie_Sparxie_Ability03_EnterReady": {
      "fileName": "Sparxie_Sparxie_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Sparxie_Sparxie_Ability11_Part02": {
      "fileName": "Sparxie_Sparxie_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-236603905\">Sparxie_Ability02_Taunt_Sub</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-177633859\">Sparxie_Ability21_Disable</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": []
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.2) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
                  "displayLines": "(1 + (0.2 * _SkillUseCount))",
                  "constants": [],
                  "variables": [
                    1,
                    0.2,
                    "_SkillUseCount"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (0.5) || Variables[1] (0.1) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
                  "displayLines": "(0.5 + (0.1 * _SkillUseCount))",
                  "constants": [],
                  "variables": [
                    0.5,
                    0.1,
                    "_SkillUseCount"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Sparxie_ElationPursued_EPDamage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Sparxie_ElationPursued_EPDamage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_SkillUseCount) || RETURN",
                "displayLines": "_SkillUseCount",
                "constants": [],
                "variables": [
                  "_SkillUseCount"
                ]
              },
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageElation": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": {
                          "displayLines": 15
                        },
                        "instanceTag": "Sparxie_ElationPursued_EPDamage",
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.2) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
                  "displayLines": "(1 + (0.2 * _SkillUseCount))",
                  "constants": [],
                  "variables": [
                    1,
                    0.2,
                    "_SkillUseCount"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (0.5) || Variables[1] (0.1) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
                  "displayLines": "(0.5 + (0.1 * _SkillUseCount))",
                  "constants": [],
                  "variables": [
                    0.5,
                    0.1,
                    "_SkillUseCount"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill02",
          "skillSlot": "Skill",
          "enableSecondaryType": "ControlSkill02"
        },
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill01",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SkillUseCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Sparxie_Skill02_GrandPrizeChance",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Sparxie_Skill02_MinorPrizeChance",
          "value": {
            "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
            "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
            "constants": [],
            "variables": [
              28,
              "Sparxie_Skill02_GrandPrizeChance"
            ]
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability11_Part01": {
      "fileName": "Sparxie_Sparxie_Ability11_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability11_Camera",
        "Sparxie_Sparxie_Ability11_Camera_V1",
        "Sparxie_Sparxie_Ability11_Part01",
        "Sparxie_Sparxie_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 40,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Sparxie_Ability11_Part02",
              "isTrigger": true
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1607821938\">Sparxie_Ability11_Effect</a>"
            },
            {
              "name": "Update Character Panel Visibility"
            },
            "Toggle View Mode"
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Sparxie_Ability11_Part02",
              "isTrigger": true
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-514028922\">Sparxie_Ability11_Effect_V1</a>"
            },
            "Toggle View Mode"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_Ability21_Part02": {
      "fileName": "Sparxie_Sparxie_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_MinorPrizeGetNum",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (7) || Constants[0] (1) || SUB || RETURN",
                  "displayLines": "(7 - 1)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    7
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_GrandPrizeChance",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (Sparxie_Skill02_GrandPrizeChance) || RETURN",
                  "displayLines": "Sparxie_Skill02_GrandPrizeChance",
                  "constants": [],
                  "variables": [
                    "Sparxie_Skill02_GrandPrizeChance"
                  ]
                },
                {
                  "operator": "Variables[0] (Sparxie_Skill02_MinorPrizeChance) || RETURN",
                  "displayLines": "Sparxie_Skill02_MinorPrizeChance",
                  "constants": [],
                  "variables": [
                    "Sparxie_Skill02_MinorPrizeChance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-758227528\">Sparxie_Ability02_MinorPrize</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
              "addStacksPerTrigger": -1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SkillUseCount",
          "value": {
            "operator": "Variables[0] (_SkillUseCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_SkillUseCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_SkillUseCount"
            ]
          }
        },
        {
          "name": "Sparxie Test Data",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (_SkillUseCount) || RETURN",
            "displayLines": "_SkillUseCount",
            "constants": [],
            "variables": [
              "_SkillUseCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PKLineProgress",
          "value": {
            "operator": "Variables[0] (_PKLineProgress) || Constants[0] (0.8) || Variables[0] (_PKLineProgress) || SUB || Constants[1] (4) || DIV || ADD || RETURN",
            "displayLines": "(_PKLineProgress + ((0.8 - _PKLineProgress) / 4))",
            "constants": [
              0.8,
              4
            ],
            "variables": [
              "_PKLineProgress"
            ]
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Define Custom Variable with Ability Property",
          "skillKey": "Skill21",
          "variableName": "_BPNeed",
          "propertyName": "Skill Point Cost"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_SkillUseCount",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (20) || RETURN",
              "displayLines": "20",
              "constants": [],
              "variables": [
                20
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-177633859\">Sparxie_Ability21_Disable</a>"
            }
          ]
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability21_Part01": {
      "fileName": "Sparxie_Sparxie_Ability21_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability21_Camera",
        "Sparxie_Sparxie_Ability21_Part01",
        "Sparxie_Sparxie_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability21_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"132499687\">Sparxie_Ability21_Effect</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_Ability02_Part02": {
      "fileName": "Sparxie_Sparxie_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill21",
          "skillSlot": "Skill",
          "enableSecondaryType": "ControlSkill02"
        },
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill11",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Sparxie Test Data",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-236603905\">Sparxie_Ability02_Taunt_Sub</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_MinorPrizeGetNum",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (7) || Constants[0] (1) || SUB || RETURN",
                  "displayLines": "(7 - 1)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    7
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_GrandPrizeChance",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (Sparxie_Skill02_GrandPrizeChance) || RETURN",
                  "displayLines": "Sparxie_Skill02_GrandPrizeChance",
                  "constants": [],
                  "variables": [
                    "Sparxie_Skill02_GrandPrizeChance"
                  ]
                },
                {
                  "operator": "Variables[0] (Sparxie_Skill02_MinorPrizeChance) || RETURN",
                  "displayLines": "Sparxie_Skill02_MinorPrizeChance",
                  "constants": [],
                  "variables": [
                    "Sparxie_Skill02_MinorPrizeChance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-758227528\">Sparxie_Ability02_MinorPrize</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
              "addStacksPerTrigger": -1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SkillUseCount",
          "value": {
            "operator": "Variables[0] (_SkillUseCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_SkillUseCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_SkillUseCount"
            ]
          }
        },
        {
          "name": "Sparxie Test Data",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (_SkillUseCount) || RETURN",
            "displayLines": "_SkillUseCount",
            "constants": [],
            "variables": [
              "_SkillUseCount"
            ]
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Define Custom Variable with Ability Property",
          "skillKey": "Skill21",
          "variableName": "_BPNeed",
          "propertyName": "Skill Point Cost"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-236603905\">Sparxie_Ability02_Taunt_Sub</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-227453258\">Sparxie_Ability02_Taunt</a>",
          "stackType": "ReplaceByCaster",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Sparxie: EBA Target}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability02_Part01": {
      "fileName": "Sparxie_Sparxie_Ability02_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability02_Camera",
        "Sparxie_Sparxie_Ability02_Part01",
        "Sparxie_Sparxie_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility",
          "targetCustom": {
            "name": "Target Name",
            "target": "{{Player Team All}} - {{Caster}} - {{SilverWolf999}}"
          },
          "show": "HideCustom",
          "forceDisplayUltButton": true
        },
        {
          "name": "Toggle View Mode",
          "enable": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE, with Unselectables)}}"
            },
            "conditions": {
              "name": "Enemy ID",
              "ID": 100501,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null,
              "isCompareUniqueID": true
            }
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"767923714\">Sparxie_Ability02_Effect</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PKLineProgress",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PKLineProgress",
          "value": 0.3
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_Ability01_Part02": {
      "fileName": "Sparxie_Sparxie_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability01_Part01": {
      "fileName": "Sparxie_Sparxie_Ability01_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability01_Camera",
        "Sparxie_Sparxie_Ability01_Part01",
        "Sparxie_Sparxie_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Sparxie_Modifiers": {
      "fileName": "Sparxie_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-769743474\">Sparxie_Eidolon6</a>[<span class=\"descriptionNumberColor\">#BuiltDifferent #GoingExtinct</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "#BuiltDifferent #GoingExtinct"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2009365349\">Sparxie_Eidolon4_Sub</a>[<span class=\"descriptionNumberColor\">#LockedIn #FaceCard</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "#LockedIn #FaceCard"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-803298712\">Sparxie_Eidolon4</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2009365349\">Sparxie_Eidolon4_Sub</a>[<span class=\"descriptionNumberColor\">#LockedIn #FaceCard</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.36) || RETURN",
                          "displayLines": "0.36",
                          "constants": [],
                          "variables": [
                            0.36
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__510555115\">Sparxie_Eidolon2_CriticalDamage</a>[<span class=\"descriptionNumberColor\">#AudienceKnows</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "#AudienceKnows"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__366587908\">Sparxie_Eidolon1_Sub02</a>[<span class=\"descriptionNumberColor\">#GoingViral #WhoIsShe</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "#GoingViral #WhoIsShe"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__416920765\">Sparxie_Eidolon1_Sub01</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"366587908\">Sparxie_Eidolon1_Sub02</a>[<span class=\"descriptionNumberColor\">#GoingViral #WhoIsShe</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-719410617\">Sparxie_Eidolon1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "whenEnteringRange": [
                {
                  "name": "Declare Custom Variable",
                  "propertyType": "BasePoint",
                  "variableName": "_CurrentEP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillRank_Rank01_P3_EPDamageAddRatioMax",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.015) || Variables[1] (_CurrentEP) || MUL || RETURN",
                      "displayLines": "(0.015 * _CurrentEP)",
                      "constants": [],
                      "variables": [
                        0.015,
                        "_CurrentEP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.015) || Variables[1] (_CurrentEP) || MUL || RETURN",
                          "displayLines": "(0.015 * _CurrentEP)",
                          "constants": [],
                          "variables": [
                            0.015,
                            "_CurrentEP"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Declare Custom Variable",
                  "propertyType": "BasePoint",
                  "variableName": "_CurrentEP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillRank_Rank01_P3_EPDamageAddRatioMax",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.015) || Variables[1] (_CurrentEP) || MUL || RETURN",
                      "displayLines": "(0.015 * _CurrentEP)",
                      "constants": [],
                      "variables": [
                        0.015,
                        "_CurrentEP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.015) || Variables[1] (_CurrentEP) || MUL || RETURN",
                          "displayLines": "(0.015 * _CurrentEP)",
                          "constants": [],
                          "variables": [
                            0.015,
                            "_CurrentEP"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__9288377\">Sparxie_Eidolon2_InsertActionSave</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOrRevivable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>",
                      "addStacksPerTrigger": -1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Layer",
                  "value": 0
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1349114975\">Sparxie_Trace03_Sub02</a>[<span class=\"descriptionNumberColor\">Frenzy! Palette of Truth and Lies</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Frenzy! Palette of Truth and Lies"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1399447832\">Sparxie_Trace03_Sub01</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1349114975\">Sparxie_Trace03_Sub02</a>[<span class=\"descriptionNumberColor\">Frenzy! Palette of Truth and Lies</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1956765834\">Sparxie_Trace03</a>",
          "stackType": "ReplaceByCaster",
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "whenEnteringRange": [
                {
                  "name": "Declare Custom Variable",
                  "propertyType": "BasePoint",
                  "variableName": "_CurrentEP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillTree_PointB3_P2_CriticalDamageMax",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.08) || Variables[1] (_CurrentEP) || MUL || RETURN",
                      "displayLines": "(0.08 * _CurrentEP)",
                      "constants": [],
                      "variables": [
                        0.08,
                        "_CurrentEP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || Variables[1] (_CurrentEP) || MUL || RETURN",
                          "displayLines": "(0.08 * _CurrentEP)",
                          "constants": [],
                          "variables": [
                            0.08,
                            "_CurrentEP"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Declare Custom Variable",
                  "propertyType": "BasePoint",
                  "variableName": "_CurrentEP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillTree_PointB3_P2_CriticalDamageMax",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.08) || Variables[1] (_CurrentEP) || MUL || RETURN",
                      "displayLines": "(0.08 * _CurrentEP)",
                      "constants": [],
                      "variables": [
                        0.08,
                        "_CurrentEP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || Variables[1] (_CurrentEP) || MUL || RETURN",
                          "displayLines": "(0.08 * _CurrentEP)",
                          "constants": [],
                          "variables": [
                            0.08,
                            "_CurrentEP"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1973543453\">Sparxie_Trace02</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"691871761\">Template_Sparxie_Trace02</a>"
                }
              ]
            },
            {
              "eventTrigger": "Character Path Change [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"691871761\">Template_Sparxie_Trace02</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__691871761\">Template_Sparxie_Trace02</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": null,
                  "matchToPathFrom": [
                    "Elation"
                  ],
                  "variableName": "_Elation_Count"
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_Elation_Count) || RETURN",
                    "displayLines": "_Elation_Count",
                    "constants": [],
                    "variables": [
                      "_Elation_Count"
                    ]
                  },
                  "compareType": ">=",
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue",
                          "value": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue",
                          "value": {
                            "operator": "Variables[0] (4) || RETURN",
                            "displayLines": "4",
                            "constants": [],
                            "variables": [
                              4
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue",
                          "value": {
                            "operator": "Variables[0] (4) || RETURN",
                            "displayLines": "4",
                            "constants": [],
                            "variables": [
                              4
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue",
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue",
                          "value": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue",
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1914794720\">Sparxie_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Sweet! Punchline Signing</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Sweet! Punchline Signing"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1923210596\">Sparxie_Trace01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-333844863\">Sparxie_Trace01_Sub</a>"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-333844863\">Sparxie_Trace01_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-333844863\">Sparxie_Trace01_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-333844863\">Sparxie_Trace01_Sub</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CurrentAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CurrentAttackConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_SkillTree_PointB1_AddedValue",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentAttack) || Variables[2] (_CurrentAttackConvert) || SUB || Variables[3] (2000) || SUB || Variables[4] (100) || DIV || PARAM_1 || FUNCTION || Variables[5] (0.05) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((((_CurrentAttack - _CurrentAttackConvert) - 2000) / 100)) * 0.05)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "_CurrentAttack",
                      "_CurrentAttackConvert",
                      2000,
                      100,
                      0.05
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Sparxie_SkillTree_PointB1_AddedValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_SkillTree_PointB1_AddedValue",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1914794720\">Sparxie_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Sweet! Punchline Signing</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_SkillTree_PointB1_AddedValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Sparxie_SkillTree_PointB1_AddedValue",
                          "value": {
                            "operator": "Variables[0] (0.8) || RETURN",
                            "displayLines": "0.8",
                            "constants": [],
                            "variables": [
                              0.8
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1914794720\">Sparxie_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Sweet! Punchline Signing</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (Sparxie_SkillTree_PointB1_AddedValue) || RETURN",
                          "displayLines": "Sparxie_SkillTree_PointB1_AddedValue",
                          "constants": [],
                          "variables": [
                            "Sparxie_SkillTree_PointB1_AddedValue"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__153929564\">Sparxie_EnergyPoint</a>[<span class=\"descriptionNumberColor\">Thrill</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Can be used to offset Sparxie's consumption of Skill Points. Consuming \"Thrill\" is considered as consuming Skill Points.",
          "type": "Other",
          "statusName": "Thrill",
          "stackLimit": 9999
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__522571708\">Sparxie_Passive01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "_BPChange",
                  "type": "RawDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_BPChange",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "Sparxie_EnergyPoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_BPChange) || RETURN",
                        "displayLines": "_BPChange",
                        "constants": [],
                        "variables": [
                          "_BPChange"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Dazzling! Persona Kaleidoscope"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1973543453\">Sparxie_Trace02</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "afterInjection": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>"
                        }
                      ]
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "Sparxie_EnergyPoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Modify Skill-Point Extras",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "function": "Set",
                      "value": {
                        "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
                        "displayLines": "Sparxie_EnergyPoint",
                        "constants": [],
                        "variables": [
                          "Sparxie_EnergyPoint"
                        ]
                      },
                      "silentChange": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Name",
                            "skillName": "Skill02",
                            "useActive": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "from": {
                              "name": "Target Name",
                              "target": "{{Player Teams}}"
                            },
                            "to": {
                              "name": "Target Name",
                              "target": "{{Enemy Teams}}"
                            },
                            "value1": "Distance_Between_Entities",
                            "compareType": "<=",
                            "value2": 9
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count SUM",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                            },
                            "conditions": {
                              "name": "Is Body Part Owner",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Name",
                            "skillName": "Skill01",
                            "useActive": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Sparxie_EnergyPoint",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_EnergyPoint",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
                            "displayLines": "Sparxie_EnergyPoint",
                            "constants": [],
                            "variables": [
                              "Sparxie_EnergyPoint"
                            ]
                          },
                          "priorState": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
                            "displayLines": "Sparxie_EnergyPoint",
                            "constants": [],
                            "variables": [
                              "Sparxie_EnergyPoint"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_EPChange"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"153929564\">Sparxie_EnergyPoint</a>[<span class=\"descriptionNumberColor\">Thrill</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_EPChange) || RETURN",
                        "displayLines": "_EPChange",
                        "constants": [],
                        "variables": [
                          "_EPChange"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_EPChange",
                            "compareType": "<",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"510555115\">Sparxie_Eidolon2_CriticalDamage</a>[<span class=\"descriptionNumberColor\">#AudienceKnows</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (4) || RETURN",
                            "displayLines": "4",
                            "constants": [],
                            "variables": [
                              4
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.1) || RETURN",
                              "displayLines": "0.1",
                              "constants": [],
                              "variables": [
                                0.1
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_EPChange) || INVERT || RETURN",
                            "displayLines": "-_EPChange",
                            "constants": [],
                            "variables": [
                              "_EPChange"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_Skill02_GrandPrizeChance",
                  "value": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_Skill02_MinorPrizeChance",
                  "value": {
                    "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
                    "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
                    "constants": [],
                    "variables": [
                      28,
                      "Sparxie_Skill02_GrandPrizeChance"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_Skill02_GrandPrizeChance",
                      "value": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_Skill02_MinorPrizeChance",
                      "value": 0
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2022669679\">Sparxie_Ability02_Count</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-177633859\">Sparxie_Ability21_Disable</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "Sparxie_Functions": {
      "fileName": "Sparxie_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 8,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1081099960\">Sparxie_ElationAbility_Aoe</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Elation DMG",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1984031563\">Sparxie_ElationAbility_Single</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageElation": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-758227528\">Sparxie_Ability02_MinorPrize</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_Skill02_MinorPrizeChance",
                  "value": {
                    "operator": "Variables[0] (Sparxie_Skill02_MinorPrizeChance) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Sparxie_Skill02_MinorPrizeChance - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Sparxie_Skill02_MinorPrizeChance"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_Skill02_MinorPrizeGetNum",
                  "value": {
                    "operator": "Variables[0] (Sparxie_Skill02_MinorPrizeGetNum) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Sparxie_Skill02_MinorPrizeGetNum + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Sparxie_Skill02_MinorPrizeGetNum"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_GrandPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_MinorPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_Skill02_GrandPrizeChance",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_Skill02_MinorPrizeChance",
                      "value": {
                        "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
                        "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
                        "constants": [],
                        "variables": [
                          28,
                          "Sparxie_Skill02_GrandPrizeChance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "Unreal Banger"
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "adjustment": "Add"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1163871467\">Sparxie_Ability02_GrandPrize</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2022669679\">Sparxie_Ability02_Count</a>",
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_Skill02_GrandPrizeChance",
                  "value": {
                    "operator": "Variables[0] (Sparxie_Skill02_GrandPrizeChance) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Sparxie_Skill02_GrandPrizeChance - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Sparxie_Skill02_GrandPrizeChance"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sparxie_Skill02_MinorPrizeGetNum",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_GrandPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_MinorPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_Skill02_GrandPrizeChance",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sparxie_Skill02_MinorPrizeChance",
                      "value": {
                        "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
                        "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
                        "constants": [],
                        "variables": [
                          28,
                          "Sparxie_Skill02_GrandPrizeChance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "Straight Fire"
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "adjustment": "Add"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__767923714\">Sparxie_Ability02_Effect</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__132499687\">Sparxie_Ability21_Effect</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-514028922\">Sparxie_Ability11_Effect_V1</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1607821938\">Sparxie_Ability11_Effect</a>",
          "parse": []
        }
      ],
      "references": []
    }
  }
}