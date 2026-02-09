const compositeAbilityObject = {
  "fullCharacterName": 8003021,
  "trimCharacterName": 8003021,
  "abilityList": [
    "8003021_Monster_XP_Elite01_Ability09_Part02",
    "8003021_Monster_XP_Elite01_Ability09_Part01",
    "8003021_Monster_XP_Elite01_Ability08_Part02",
    "8003021_Monster_XP_Elite01_Ability08_Part01",
    "8003021_Monster_XP_Elite01_Ability07_Part02",
    "8003021_Monster_XP_Elite01_Ability07_Part01",
    "8003021_Monster_XP_Elite01_Ability05_Part02",
    "8003021_Monster_XP_Elite01_Ability05_Part01",
    "8003021_Monster_XP_Elite01_Ability03_Part02",
    "8003021_Monster_XP_Elite01_Ability03_Part01",
    "8003021_Monster_XP_Elite01_Ability01_Part02",
    "8003021_Monster_XP_Elite01_Ability01_Part01",
    "8003021_Monster_XP_Elite01_PassiveAbility01",
    "8003021_Modifiers"
  ],
  "abilityObject": {
    "8003021_Monster_XP_Elite01_Ability09_Part02": {
      "fileName": "8003021_Monster_XP_Elite01_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-829438264\">Monster_XP_Elite01_Ability08_FireBall</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill09[0]]}) || Variables[1] ({[Skill09[1]]}) || Variables[2] (UnusedUnderThisBase_159) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill09[0]]} + ({[Skill09[1]]} * UnusedUnderThisBase_159))",
                  "constants": [],
                  "variables": [
                    "{[Skill09[0]]}",
                    "{[Skill09[1]]}",
                    "UnusedUnderThisBase_159"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "baseChance": 1,
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                  "displayLines": "{[Skill05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[3]]}"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability09_Part01": {
      "fileName": "8003021_Monster_XP_Elite01_Ability09_Part01",
      "childAbilityList": [
        "8003021_Monster_XP_Elite01_Ability09_Camera",
        "8003021_Monster_XP_Elite01_Ability09_Part01",
        "8003021_Monster_XP_Elite01_Ability09_Part02"
      ],
      "skillTrigger": "Skill09",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability08_Part02": {
      "fileName": "8003021_Monster_XP_Elite01_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-829438264\">Monster_XP_Elite01_Ability08_FireBall</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "AvatarBurningCount",
              "value": {
                "operator": "Variables[0] (AvatarBurningCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(AvatarBurningCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "AvatarBurningCount"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AvatarBurningCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "popUpText": "Enkindle is absorbed",
                  "living": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AvatarBurningCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "popUpText": "Enkindle is absorbed",
                      "living": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AvatarBurningCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                        },
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "popUpText": "Enkindle is absorbed",
                          "living": true
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "AvatarBurningCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                            },
                            {
                              "name": "UI Display Event (On Entity)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "popUpText": "Enkindle is absorbed",
                              "living": true
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "AvatarBurningCount",
                            "compareType": ">=",
                            "value2": 5
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                                },
                                {
                                  "name": "UI Display Event (On Entity)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "popUpText": "Enkindle is absorbed",
                                  "living": true
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "AvatarBurningCount",
                                "compareType": ">=",
                                "value2": 6
                              },
                              "passed": [
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Hostile Entities(AOE)}}"
                                  },
                                  "searchRandom": true,
                                  "maxTargets": 1,
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                                    },
                                    {
                                      "name": "UI Display Event (On Entity)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "popUpText": "Enkindle is absorbed",
                                      "living": true
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "AvatarBurningCount",
                                    "compareType": ">=",
                                    "value2": 7
                                  },
                                  "passed": [
                                    {
                                      "name": "Find New Target",
                                      "from": {
                                        "name": "Target Name",
                                        "target": "{{Hostile Entities(AOE)}}"
                                      },
                                      "searchRandom": true,
                                      "maxTargets": 1,
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                                          },
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      "ifTargetFound": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                                        },
                                        {
                                          "name": "UI Display Event (On Entity)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "popUpText": "Enkindle is absorbed",
                                          "living": true
                                        }
                                      ]
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "AvatarBurningCount",
                                        "compareType": ">=",
                                        "value2": 8
                                      },
                                      "passed": [
                                        {
                                          "name": "Find New Target",
                                          "from": {
                                            "name": "Target Name",
                                            "target": "{{Hostile Entities(AOE)}}"
                                          },
                                          "searchRandom": true,
                                          "maxTargets": 1,
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
                                              },
                                              {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
                                                "invertCondition": true
                                              }
                                            ]
                                          },
                                          "ifTargetFound": [
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
                                            },
                                            {
                                              "name": "UI Display Event (On Entity)",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "popUpText": "Enkindle is absorbed",
                                              "living": true
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AvatarBurningCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AvatarBurningCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Shot Fired"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AvatarBurningCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Shot Fired"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "AvatarBurningCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Shot Fired"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "AvatarBurningCount",
                            "compareType": ">=",
                            "value2": 5
                          },
                          "passed": [
                            {
                              "name": "Shot Fired"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "AvatarBurningCount",
                                "compareType": ">=",
                                "value2": 6
                              },
                              "passed": [
                                {
                                  "name": "Shot Fired"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "AvatarBurningCount",
                                    "compareType": ">=",
                                    "value2": 7
                                  },
                                  "passed": [
                                    {
                                      "name": "Shot Fired"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "AvatarBurningCount",
                                        "compareType": ">=",
                                        "value2": 8
                                      },
                                      "passed": [
                                        {
                                          "name": "Shot Fired"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BurningCount",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "BurningLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BurningCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_159) || Variables[1] (BurningLayer) || ADD || RETURN",
                "displayLines": "(UnusedUnderThisBase_159 + BurningLayer)",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_159",
                  "BurningLayer"
                ]
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AvatarBurningCount",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability08_Part01": {
      "fileName": "8003021_Monster_XP_Elite01_Ability08_Part01",
      "childAbilityList": [
        "8003021_Monster_XP_Elite01_Ability08_Camera",
        "8003021_Monster_XP_Elite01_Ability08_Part01",
        "8003021_Monster_XP_Elite01_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability07_Part02": {
      "fileName": "8003021_Monster_XP_Elite01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]",
              "valuePerStack": {
                "Modifier_AttackAddedRatio": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]",
              "valuePerStack": {
                "Modifier_AttackAddedRatio": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability07_Part01": {
      "fileName": "8003021_Monster_XP_Elite01_Ability07_Part01",
      "childAbilityList": [
        "8003021_Monster_XP_Elite01_Ability07_Camera",
        "8003021_Monster_XP_Elite01_Ability07_Part01",
        "8003021_Monster_XP_Elite01_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability05_Part02": {
      "fileName": "8003021_Monster_XP_Elite01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Set Target Parameter",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "paramTarget": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
          },
          "variableName": "ProjectileFirstTarget"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "isParallel": true,
          "sequenceList": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                              "displayLines": "{[Skill05[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
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
                            "MDF_DamagePercentage_Layer": {
                              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                              "displayLines": "{[Skill05[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                              "displayLines": "{[Skill05[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
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
                            "MDF_DamagePercentage_Layer": {
                              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                              "displayLines": "{[Skill05[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                              "displayLines": "{[Skill05[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
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
                            "MDF_DamagePercentage_Layer": {
                              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                              "displayLines": "{[Skill05[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                              "displayLines": "{[Skill05[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
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
                            "MDF_DamagePercentage_Layer": {
                              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                              "displayLines": "{[Skill05[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                              "displayLines": "{[Skill05[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
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
                            "MDF_DamagePercentage_Layer": {
                              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                              "displayLines": "{[Skill05[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill05[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability05_Part01": {
      "fileName": "8003021_Monster_XP_Elite01_Ability05_Part01",
      "childAbilityList": [
        "8003021_Monster_XP_Elite01_Ability05_Camera",
        "8003021_Monster_XP_Elite01_Ability05_Part01",
        "8003021_Monster_XP_Elite01_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability03_Part02": {
      "fileName": "8003021_Monster_XP_Elite01_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1090456915\">XP_Fire_Elite_Burning_Modifier_2</a>[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]",
          "valuePerStack": {
            "Modifier_StanceWeakAddedRatio": {
              "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
              "displayLines": "{[Skill03[1]]}",
              "constants": [],
              "variables": [
                "{[Skill03[1]]}"
              ]
            },
            "Modifier_Stance": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceBreak_Sign",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability03_Part01": {
      "fileName": "8003021_Monster_XP_Elite01_Ability03_Part01",
      "childAbilityList": [
        "8003021_Monster_XP_Elite01_Ability03_Camera",
        "8003021_Monster_XP_Elite01_Ability03_Part01",
        "8003021_Monster_XP_Elite01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability01_Part02": {
      "fileName": "8003021_Monster_XP_Elite01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
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
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamagePercentage_Layer": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_Ability01_Part01": {
      "fileName": "8003021_Monster_XP_Elite01_Ability01_Part01",
      "childAbilityList": [
        "8003021_Monster_XP_Elite01_Ability01_Camera",
        "8003021_Monster_XP_Elite01_Ability01_Part01",
        "8003021_Monster_XP_Elite01_Ability01_Part02"
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
          "ability": "Monster_XP_Elite01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003021_Monster_XP_Elite01_PassiveAbility01": {
      "fileName": "8003021_Monster_XP_Elite01_PassiveAbility01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2044612477\">Enemy_XP_Elite01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742468401\">Enemy_XP_Elite01_ListenStanceBreakModifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-561802374\">NoWeakAndResistance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1742468401\">Enemy_XP_Elite01_ListenStanceBreakModifier</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "StanceBreak_Sign",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1090456915\">XP_Fire_Elite_Burning_Modifier_2</a>[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8003021,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Blaze Out of Space (Bug)"
                      },
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill07_Added_AttackRatio",
                      "value": 0
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "StanceBreak_Sign"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-561802374\">NoWeakAndResistance</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-561802374\">NoWeakAndResistance</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__76652957\">Enemy_XP_Elite01_AIControl</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Phase_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "min": 1,
                      "max": 4
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "min": 1,
                      "max": 3
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": ">",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2044612477\">Enemy_XP_Elite01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8003021_Modifiers": {
      "fileName": "8003021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Burn_Layer"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Burn_Layer"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage_Layer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage_Layer * ModifierLayers)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage_Layer",
                        "ModifierLayers"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            },
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Burn_Layer",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage_Layer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage_Layer * ModifierLayers)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage_Layer",
                        "ModifierLayers"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_DamagePercentage_Layer"
          ],
          "latentQueue": [],
          "description": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Enkindle",
          "statusName": "Enkindle",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_AttackAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(Modifier_AttackAddedRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "Modifier_AttackAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "Modifier_AttackAddedRatio"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Molten",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1090456915\">XP_Fire_Elite_Burning_Modifier_2</a>[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            },
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 2
                }
              ]
            }
          ],
          "stackData": [
            "Modifier_StanceWeakAddedRatio",
            "Modifier_Stance"
          ],
          "latentQueue": [],
          "description": "Blaze Out of Space's attack mode is enhanced.",
          "type": "Other",
          "effectName": "Spontaneous Combustion",
          "statusName": "Spontaneous Combustion",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1713463550\">XP_Fire_Elite_Burning_Modifier</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">IceToughnessReductionRES</span>&nbsp;",
                  "value": -1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "XP_Fire_Elite_Burning_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (Skill07_Added_AttackRatio[?]) || Variables[1] (ModifierLayers) || MUL || RETURN",
                        "displayLines": "(Skill07_Added_AttackRatio[?] * ModifierLayers)",
                        "constants": [],
                        "variables": [
                          "Skill07_Added_AttackRatio[?]",
                          "ModifierLayers"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (Modifier_SpeedDelta) || Variables[1] (ModifierLayers) || MUL || RETURN",
                        "displayLines": "(Modifier_SpeedDelta * ModifierLayers)",
                        "constants": [],
                        "variables": [
                          "Modifier_SpeedDelta",
                          "ModifierLayers"
                        ]
                      }
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (Skill07_Added_AttackRatio[?]) || Variables[1] (ModifierLayers) || MUL || RETURN",
                        "displayLines": "(Skill07_Added_AttackRatio[?] * ModifierLayers)",
                        "constants": [],
                        "variables": [
                          "Skill07_Added_AttackRatio[?]",
                          "ModifierLayers"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (Modifier_SpeedDelta) || Variables[1] (ModifierLayers) || MUL || RETURN",
                        "displayLines": "(Modifier_SpeedDelta * ModifierLayers)",
                        "constants": [],
                        "variables": [
                          "Modifier_SpeedDelta",
                          "ModifierLayers"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-829438264\">Monster_XP_Elite01_Ability08_FireBall</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}