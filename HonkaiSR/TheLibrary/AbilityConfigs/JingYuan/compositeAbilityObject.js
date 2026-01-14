const compositeAbilityObject = {
  "fullCharacterName": "Jing Yuan",
  "trimCharacterName": "JingYuan",
  "abilityList": [
    "JingYuan_BattleEventAbility_JingYuan_Passive_Insert",
    "JingYuan_JingYuan_Passive_Insert_Ability",
    "JingYuan_JingYuan_Passive_Insert",
    "JingYuan_BattleEventAbility_JingYuan_Passive",
    "JingYuan_JingYuan_TechniqueInLevel",
    "JingYuan_JingYuan_PassiveAbility01",
    "JingYuan_JingYuan_Ability03_Part02",
    "JingYuan_JingYuan_Ability03_Part01",
    "JingYuan_JingYuan_Ability03_EnterReady",
    "JingYuan_JingYuan_Ability02_Part02",
    "JingYuan_JingYuan_Ability02_Part01",
    "JingYuan_JingYuan_Ability01_Part02",
    "JingYuan_JingYuan_Ability01_Part01",
    "JingYuan_Modifiers",
    "JingYuan_BE_BattleEvents"
  ],
  "abilityObject": {
    "JingYuan_BattleEventAbility_JingYuan_Passive_Insert": {
      "fileName": "JingYuan_BattleEventAbility_JingYuan_Passive_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_SpeedUp"
        }
      ],
      "references": []
    },
    "JingYuan_JingYuan_Passive_Insert_Ability": {
      "fileName": "JingYuan_JingYuan_Passive_Insert_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ATKCount",
              "modifierName": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "UltraATKCount",
              "modifierName": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Battalia Crush"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ATKCountSum",
              "value": {
                "operator": "Variables[0] (ATKCount) || Variables[1] (UltraATKCount) || ADD || RETURN",
                "displayLines": "(ATKCount + UltraATKCount)",
                "constants": [],
                "variables": [
                  "ATKCount",
                  "UltraATKCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ATKCountSum",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "JingYuan_CriticalDamageUp",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ATKCount) || RETURN",
            "displayLines": "ATKCount",
            "constants": [],
            "variables": [
              "ATKCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": "All Hostile Entities (AOE)",
              "paramSequence": []
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (UltraATKCount) || RETURN",
            "displayLines": "UltraATKCount",
            "constants": [],
            "variables": [
              "UltraATKCount"
            ]
          },
          "Event": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (ATKCount) || RETURN",
                "displayLines": "ATKCount",
                "constants": [],
                "variables": [
                  "ATKCount"
                ]
              },
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Bounce_SelectTarget",
                  "target": "All Hostile Entities (AOE)",
                  "paramSequence": []
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "JingYuan_Eidolon2_DamageAddedRatio[<span class=\"descriptionNumberColor\">Dharma Corpora</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
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
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "JingYuan_Eidolon6_AllDamageTypeTakenRatio"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_CriticalDamageUp"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ATKCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "UltraATKCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ATKCount",
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
          "variableName": "EnergyBar_UltraATKCount",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "stackLimit": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "maximum": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
            "displayLines": "EnergyBar_ATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount"
            ]
          },
          "enhanced": {
            "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
            "displayLines": "EnergyBar_UltraATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_UltraATKCount"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_ATKCountShowText",
          "valuePerStack": {
            "ATKCount": {
              "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
              "displayLines": "EnergyBar_ATKCount",
              "constants": [],
              "variables": [
                "EnergyBar_ATKCount"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_SpeedUp"
        }
      ],
      "references": []
    },
    "JingYuan_JingYuan_Passive_Insert": {
      "fileName": "JingYuan_JingYuan_Passive_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Prana Extirpated"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "JingYuan_Passive_Insert_Ability",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "JingYuan_BattleEventAbility_JingYuan_Passive": {
      "fileName": "JingYuan_BattleEventAbility_JingYuan_Passive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_BaseSpeed"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_ForceKill"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "JingYuan_BattleEvent_ForceKill",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "JingYuan_ListenFlag"
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": "Owner of this Modifier",
                      "ignoreHPLossTriggers": true,
                      "ignoreDeathTriggers": true
                    },
                    {
                      "name": "Show Attack Time",
                      "on": null,
                      "show": false
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
          "for": "JingYuan_BattleEvent_BaseSpeed",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_JingYuan_00_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_JingYuan_00_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_JingYuan_00_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "JingYuan_JingYuan_TechniqueInLevel": {
      "fileName": "JingYuan_JingYuan_TechniqueInLevel",
      "childAbilityList": [
        "JingYuan_JingYuan_TechniqueInLevel"
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
          "to": "Caster",
          "modifier": "StageAbility_Maze_JingYuan_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_JingYuan_Modifier",
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
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (10) || RETURN",
                        "displayLines": "10",
                        "constants": [],
                        "variables": [
                          10
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "EnergyBar_ATKCount",
                      "modifierName": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnergyBar_ATKCountSum",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ATKCount) || Variables[1] (EnergyBar_UltraATKCount) || ADD || RETURN",
                        "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ATKCount",
                          "EnergyBar_UltraATKCount"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ATKCountSum) || RETURN",
                        "displayLines": "EnergyBar_ATKCountSum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ATKCountSum"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (10) || RETURN",
                        "displayLines": "10",
                        "constants": [],
                        "variables": [
                          10
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4,
                      "cooldown": 0
                    },
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
                        "displayLines": "EnergyBar_ATKCount",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ATKCount"
                        ]
                      },
                      "enhanced": {
                        "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
                        "displayLines": "EnergyBar_UltraATKCount",
                        "constants": [],
                        "variables": [
                          "EnergyBar_UltraATKCount"
                        ]
                      },
                      "on": null,
                      "show": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's own Created Battle Event/Summon",
                      "modifier": "JingYuan_BattleEvent_ATKCountShowText",
                      "valuePerStack": {
                        "ATKCount": {
                          "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
                          "displayLines": "EnergyBar_ATKCount",
                          "constants": [],
                          "variables": [
                            "EnergyBar_ATKCount"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's own Created Battle Event/Summon",
                      "modifier": "JingYuan_BattleEvent_SpeedUp",
                      "stackLimit": {
                        "operator": "Variables[0] (10) || Variables[1] (3) || SUB || RETURN",
                        "displayLines": "(10 - 3)",
                        "constants": [],
                        "variables": [
                          10,
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (10) || RETURN",
                          "displayLines": "10",
                          "constants": [],
                          "variables": [
                            10
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "JingYuan_JingYuan_PassiveAbility01": {
      "fileName": "JingYuan_JingYuan_PassiveAbility01",
      "childAbilityList": [
        "JingYuan_JingYuan_PassiveAbility01",
        "JingYuan_JingYuan_Passive_Insert",
        "JingYuan_JingYuan_Passive_Insert_Camera",
        "JingYuan_JingYuan_Passive_Insert_Ability"
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
          "to": "Caster",
          "modifier": "JingYuan_ListenFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_Trace02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "stackLimit": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "maximum": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "Add Battle Event",
          "teamName": "Allied Team",
          "eventID": 11203,
          "statSource": "Caster",
          "variables": {
            "BattleEvent_JingYuan_BaseSpeed": {
              "operator": "Variables[0] (60) || RETURN",
              "displayLines": "60",
              "constants": [],
              "variables": [
                60
              ]
            }
          }
        },
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "enhanced": {
            "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
            "displayLines": "EnergyBar_UltraATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_UltraATKCount"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_ATKCountShowText",
          "valuePerStack": {
            "ATKCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_Ability02_PreShow"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_Ability03_PreShow"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "JingYuan_Ability03_PreShow",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#Skill03_P2_AddATKCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                      "displayLines": "(10 - EnergyBar_ATKCount)",
                      "constants": [],
                      "variables": [
                        10,
                        "EnergyBar_ATKCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                        "displayLines": "(10 - EnergyBar_ATKCount)",
                        "constants": [],
                        "variables": [
                          10,
                          "EnergyBar_ATKCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyBar_ATKCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "#Skill03_P2_AddATKCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                          "displayLines": "(10 - EnergyBar_ATKCount)",
                          "constants": [],
                          "variables": [
                            10,
                            "EnergyBar_ATKCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_AddLayer",
                          "value": {
                            "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                            "displayLines": "(10 - EnergyBar_ATKCount)",
                            "constants": [],
                            "variables": [
                              10,
                              "EnergyBar_ATKCount"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_AddLayer",
                          "value": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
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
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Caster's own Created Battle Event/Summon",
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "_AddLayer",
              "compareType": ">",
              "value2": 0
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "(10 * _AddLayer)(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_Ability02_PreShow",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#Skill02_P2_AddATKCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                      "displayLines": "(10 - EnergyBar_ATKCount)",
                      "constants": [],
                      "variables": [
                        10,
                        "EnergyBar_ATKCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                        "displayLines": "(10 - EnergyBar_ATKCount)",
                        "constants": [],
                        "variables": [
                          10,
                          "EnergyBar_ATKCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyBar_ATKCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "#Skill02_P2_AddATKCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                          "displayLines": "(10 - EnergyBar_ATKCount)",
                          "constants": [],
                          "variables": [
                            10,
                            "EnergyBar_ATKCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_AddLayer",
                          "value": {
                            "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                            "displayLines": "(10 - EnergyBar_ATKCount)",
                            "constants": [],
                            "variables": [
                              10,
                              "EnergyBar_ATKCount"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_AddLayer",
                          "value": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
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
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Caster's own Created Battle Event/Summon",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "_AddLayer",
              "compareType": ">",
              "value2": 0
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "(10 * _AddLayer)(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_Trace02",
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
                        "name": "Trace Activated",
                        "conditionList": "Savant Providence"
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
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_ListenFlag",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "JingYuan_JingYuan_Ability03_Part02": {
      "fileName": "JingYuan_JingYuan_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "stackLimit": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "EnergyBar_UltraATKCount",
          "modifierName": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "EnergyBar_ATKCount",
          "modifierName": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ATKCountSum",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || Variables[1] (EnergyBar_UltraATKCount) || ADD || RETURN",
            "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount",
              "EnergyBar_UltraATKCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCountSum) || RETURN",
            "displayLines": "EnergyBar_ATKCountSum",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCountSum"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
            "displayLines": "EnergyBar_ATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount"
            ]
          },
          "enhanced": {
            "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
            "displayLines": "EnergyBar_UltraATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_UltraATKCount"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_ATKCountShowText",
          "valuePerStack": {
            "ATKCount": {
              "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
              "displayLines": "EnergyBar_ATKCount",
              "constants": [],
              "variables": [
                "EnergyBar_ATKCount"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_SpeedUp",
          "stackLimit": {
            "operator": "Variables[0] (10) || Variables[1] (3) || SUB || RETURN",
            "displayLines": "(10 - 3)",
            "constants": [],
            "variables": [
              10,
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "JingYuan_JingYuan_Ability03_Part01": {
      "fileName": "JingYuan_JingYuan_Ability03_Part01",
      "childAbilityList": [
        "JingYuan_JingYuan_Ability03_Camera",
        "JingYuan_JingYuan_Ability03_EnterReady",
        "JingYuan_JingYuan_Ability03_Part01",
        "JingYuan_JingYuan_Ability03_Part02"
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
          "from": "Caster",
          "ability": "JingYuan_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "JingYuan_JingYuan_Ability03_EnterReady": {
      "fileName": "JingYuan_JingYuan_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "JingYuan_JingYuan_Ability02_Part02": {
      "fileName": "JingYuan_JingYuan_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "stackLimit": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "EnergyBar_ATKCount",
          "modifierName": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ATKCountSum",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || Variables[1] (EnergyBar_UltraATKCount) || ADD || RETURN",
            "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount",
              "EnergyBar_UltraATKCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCountSum) || RETURN",
            "displayLines": "EnergyBar_ATKCountSum",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCountSum"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
            "displayLines": "EnergyBar_ATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount"
            ]
          },
          "enhanced": {
            "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
            "displayLines": "EnergyBar_UltraATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_UltraATKCount"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_ATKCountShowText",
          "valuePerStack": {
            "ATKCount": {
              "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
              "displayLines": "EnergyBar_ATKCount",
              "constants": [],
              "variables": [
                "EnergyBar_ATKCount"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster's own Created Battle Event/Summon",
          "modifier": "JingYuan_BattleEvent_SpeedUp",
          "stackLimit": {
            "operator": "Variables[0] (10) || Variables[1] (3) || SUB || RETURN",
            "displayLines": "(10 - 3)",
            "constants": [],
            "variables": [
              10,
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Random Event",
              "odds": [
                0.33,
                0.33,
                0.34
              ],
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 0.3,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Random Event",
              "odds": [
                0.33,
                0.33,
                0.34
              ],
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 0.3,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "War Marshal"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "JingYuan_Tree03_CriticalChanceUp[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
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
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "JingYuan_JingYuan_Ability02_Part01": {
      "fileName": "JingYuan_JingYuan_Ability02_Part01",
      "childAbilityList": [
        "JingYuan_JingYuan_Ability02_Camera",
        "JingYuan_JingYuan_Ability02_Part01",
        "JingYuan_JingYuan_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "JingYuan_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "JingYuan_JingYuan_Ability01_Part02": {
      "fileName": "JingYuan_JingYuan_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.45,
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.55,
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
      "references": []
    },
    "JingYuan_JingYuan_Ability01_Part01": {
      "fileName": "JingYuan_JingYuan_Ability01_Part01",
      "childAbilityList": [
        "JingYuan_JingYuan_Ability01_Camera",
        "JingYuan_JingYuan_Ability01_Part01",
        "JingYuan_JingYuan_Ability01_Part02"
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
          "from": "Caster",
          "ability": "JingYuan_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "JingYuan_Modifiers": {
      "fileName": "JingYuan_Modifiers",
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
          "for": "JingYuan_Tree03_CriticalChanceUp[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
          "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "CRIT Rate Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_CriticalDamageUp",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "ATKCountSum"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_Eidolon6_AllDamageTypeTakenRatio",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "JingYuan_Eidolon6_AllDamageTypeTakenRatio",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_Eidolon2_DamageAddedRatio[<span class=\"descriptionNumberColor\">Dharma Corpora</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill",
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_DamageAddedRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddedRatio"
          ],
          "latentQueue": [
            "ATKCountSum"
          ],
          "description": "Jing Yuan's Basic ATK, Skill, and Ultimate deal <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span> increased DMG.",
          "type": "Buff",
          "statusName": "Dharma Corpora"
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_BattleEvent_SpeedUp",
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
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "JingYuan_BattleEvent_SpeedUp",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
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
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_BattleEvent",
          "stackType": "Prolong",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "JingYuan_Passive_Insert",
                  "abilitySource": "Caster [of Battle Event]",
                  "abilityTarget": "All Enemies (AOE)",
                  "priorityTag": "AvatarInsertAttackSelf",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Lightning-Lord's Enhanced ATK count.",
          "type": "Other",
          "statusName": "Lightbringer",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "description": "Lightning-Lord's Hits Per Action.",
          "type": "Other",
          "statusName": "Prana Extirpated",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "JingYuan_BattleEvent_ATKCountShowText",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ATKCount"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "JingYuan_BE_BattleEvents": {
      "fileName": "JingYuan_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 11203,
          "team": "TeamNeutral",
          "eventType": "Summon",
          "abilityList": [
            "BattleEventAbility_JingYuan_Passive",
            "BattleEventAbility_JingYuan_Passive_Insert"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ]
        }
      ],
      "references": []
    }
  }
}