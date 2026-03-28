const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3003043,
  "trimCharacterName": 3003043,
  "abilityList": [
    "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Effect",
    "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Perform",
    "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Logic",
    "3003043_Monster_W3_Figure_RLElite_Ability07_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability07_Part01",
    "3003043_Monster_W3_Figure_RLElite_Ability06_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability06_Part01",
    "3003043_Monster_W3_Figure_RLElite_Ability05_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability05_Logic",
    "3003043_Monster_W3_Figure_RLElite_Ability05_Part01",
    "3003043_Monster_W3_Figure_RLElite_Ability04_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability04_Part01",
    "3003043_Monster_W3_Figure_RLElite_AssistAbility02_Part02",
    "3003043_Monster_W3_Figure_RLElite_AssistAbility02_Part01",
    "3003043_Monster_W3_Figure_RLElite_Ability03_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability03_Part01",
    "3003043_Monster_W3_Figure_RLElite_Ability02_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability02_Part01",
    "3003043_Monster_W3_Figure_RLElite_Ability01_Part02",
    "3003043_Monster_W3_Figure_RLElite_Ability01_Part01",
    "3003043_Monster_W3_Figure_RLElite_PassiveAbility_02",
    "3003043_Monster_W3_Figure_RLElite_PassiveAbility_Initiate",
    "3003043_Modifiers"
  ],
  "abilityObject": {
    "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Effect": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Perform": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Perform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Logic": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_AssistAbility01_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT_Burn",
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability07_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability07_Part01",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SleepCount",
                "compareType": ">=",
                "value2": 2,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                    "displayLines": "{[Skill05[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageAddedRatio": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    },
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SleepCount",
                  "value": {
                    "operator": "Variables[0] (SleepCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SleepCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SleepCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SleepCount",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT",
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability07_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability07_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability07_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability06_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability06_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability06_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability06_Camera",
        "3003043_Monster_W3_Figure_RLElite_Ability06_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability05_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-316988116\">Monster_W3_Figure_RLElite_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SleepCount",
                  "value": {
                    "operator": "Variables[0] (SleepCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SleepCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SleepCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                    "displayLines": "{[Skill05[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageAddedRatio": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    },
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SleepCount",
                    "compareType": ">=",
                    "value2": 2,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                        "displayLines": "{[Skill05[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[2]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_AllDamageAddedRatio": {
                          "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                          "displayLines": "{[Skill02[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[2]]}"
                          ]
                        },
                        "MDF_HealPercentage": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SleepCount",
                      "value": {
                        "operator": "Variables[0] (SleepCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(SleepCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "SleepCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SleepCount",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability05_Logic": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability05_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            },
            "MDF_HealPercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT",
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability05_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability05_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability05_Camera",
        "3003043_Monster_W3_Figure_RLElite_Ability05_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability04_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-316988116\">Monster_W3_Figure_RLElite_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability04_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability04_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability04_Camera",
        "3003043_Monster_W3_Figure_RLElite_Ability04_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_AssistAbility02_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_AssistAbility02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_AssistAbility02_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_AssistAbility02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability03_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability03_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability03_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability03_Camera",
        "3003043_Monster_W3_Figure_RLElite_Ability03_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability02_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            },
            "MDF_HealPercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability02_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability02_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability02_Camera",
        "3003043_Monster_W3_Figure_RLElite_Ability02_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability01_Part02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_Ability01_Part01": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_Ability01_Part01",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_Ability01_Camera",
        "3003043_Monster_W3_Figure_RLElite_Ability01_Part01",
        "3003043_Monster_W3_Figure_RLElite_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_PassiveAbility_02": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_PassiveAbility_02",
      "childAbilityList": [
        "3003043_Monster_W3_Figure_RLElite_PassiveAbility_02"
      ],
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1110187412\">Enemy_W3_Figure_RLElite_SuccessSleep</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003043_Monster_W3_Figure_RLElite_PassiveAbility_Initiate": {
      "fileName": "3003043_Monster_W3_Figure_RLElite_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Add Target by Unique Identifier",
            "identifier": "DollBoss"
          },
          "searchRandom": true,
          "maxTargets": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"410552905\">Enemy_W3_Figure_RLElite_BreakController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1533608275\">W3_Figure_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"848128551\">Enemy_W3_Figure_RLElite_AudioControllerForChosenOne</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__848128551\">Enemy_W3_Figure_RLElite_AudioControllerForChosenOne</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__410552905\">Enemy_W3_Figure_RLElite_BreakController</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 7
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3003043_Modifiers": {
      "fileName": "3003043_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUPRatio) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_AttackUPRatio * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUPRatio",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "For every target with Alien Dream, increase this unit's ATK by <span class=\"descriptionNumberColor\">MDF_AttackUPRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1110187412\">Enemy_W3_Figure_RLElite_SuccessSleep</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 4,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SleepNum",
                          "value": {
                            "operator": "Variables[0] (SleepNum) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(SleepNum + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "SleepNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "valuePerStack": {
                        "MDF_AttackUPRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (SleepNum) || RETURN",
                        "displayLines": "SleepNum",
                        "constants": [],
                        "variables": [
                          "SleepNum"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SleepNum",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 4,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SleepNum",
                          "value": {
                            "operator": "Variables[0] (SleepNum) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(SleepNum + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "SleepNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "valuePerStack": {
                        "MDF_AttackUPRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (SleepNum) || RETURN",
                        "displayLines": "SleepNum",
                        "constants": [],
                        "variables": [
                          "SleepNum"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SleepNum",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-316988116\">Monster_W3_Figure_RLElite_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "About to use \"Sleep In Heavenly Peace.\"",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Holy Night"
        }
      ],
      "references": []
    }
  }
}