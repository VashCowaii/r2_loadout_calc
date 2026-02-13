const configAbility = {
  "fileName": "8015021_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-819586892\">W2_Huanlong_BattleScore3</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1225,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Fugue"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "I Killed Myself?",
                      "desc": "Use ally character Fugue to deal the final blow in a victory against Phantylia",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-802809273\">W2_Huanlong_BattleScore2</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Huanlong_00_BattleSore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "Huanlong_Flower"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W2_Huanlong_00_BattleSore2_Flag",
                  "context": "TargetEntity",
                  "value": -1,
                  "min": -100,
                  "max": 100
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "Huanlong_Flower"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W2_Huanlong_00_BattleSore2_Flag",
                  "context": "TargetEntity",
                  "value": 1,
                  "min": -100,
                  "max": 100
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W2_Huanlong_00_BattleSore2_Flag",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "failed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Horticulturalist",
                      "desc": "Defeat Phantylia without defeating any Abundance Lotuses",
                      "rarity": "Mid",
                      "type": "Hidden until Completion",
                      "params": [
                        1
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__-786031654\">W2_Huanlong_BattleScore1</a>",
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
              "variableName": "W2_Huanlong_00_BattleSore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Modifier Cleansed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W2_Huanlong_00_BattleSore1_Flag",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Huanlong_00_BattleSore1_Flag",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [
                        5
                      ],
                      "variables": []
                    },
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Sickly Complexion",
                          "desc": "Dispel the Prana-Siphon state for a total of #1[i] times during a single battle against Phantylia",
                          "rarity": "Low",
                          "params": [
                            5
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__427738508\">Monster_W2_Huanlong_Part3</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"461293746\">Monster_W2_Huanlong_Part1</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"444516127\">Monster_W2_Huanlong_Part2</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "Phase3FirstTurn"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__444516127\">Monster_W2_Huanlong_Part2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"461293746\">Monster_W2_Huanlong_Part1</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"427738508\">Monster_W2_Huanlong_Part3</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__461293746\">Monster_W2_Huanlong_Part1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"444516127\">Monster_W2_Huanlong_Part2</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"427738508\">Monster_W2_Huanlong_Part3</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__535486954\">Monster_W2_Huanlong_Part3EndEndurance</a>",
      "modifierFlags": [
        "Endurance",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-676400883\">Monster_W2_Huanlong_Part3EndForcePerform</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 4
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-740227332\">Monster_W2_Huanlong_Part2_SpecialPerform</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 8012210,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Destruction Lotus"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"204047517\">Monster_W2_HuanlongPart_01_Dispel</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 3
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__886309554\">Monster_W2_Huanlong_Part1_BattlePerform</a>",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Phase1_BattlePerform",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Phase1End_BreakFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 3,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 4,
              "maxValue": 4,
              "includeMaxValueInRange": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-192345709\">Monster_W2_Huanlong_Part2_BattlePerform</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Phase2_BattlePerform",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase2_BattlePerform",
                  "value": 4
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Phase2_BattlePerform",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1803273949\">Monster_W2_Huanlong_Ability13_Special</a>"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 3,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 4,
              "maxValue": 4,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 5,
              "maxValue": 5,
              "includeMaxValueInRange": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__117676328\">Monster_W2_Huanlong_JingYuan_DamageUp</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                "displayLines": "MDF_DamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-185996046\">Monster_W2_Huanlong_SpecialMark_Main</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1194093240\">Monster_W2_Huanlong_Part2Lock</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.3
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-751037283\">Monster_W2_Huanlong_Part1Lock</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.3
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__646498749\">Monster_W2_Huanlong_Part00_TalkSentence</a>",
      "execute": [
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160107",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160107",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1609049773\">Monster_W2_Huanlong_Main</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1194093240\">Monster_W2_Huanlong_Part2Lock</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "phase": "Phase0"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "setPercent": 1
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160332",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"535486954\">Monster_W2_Huanlong_Part3EndEndurance</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1803273949\">Monster_W2_Huanlong_Ability13_Special</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": 200,
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"117676328\">Monster_W2_Huanlong_JingYuan_DamageUp</a>",
                          "valuePerStack": {
                            "MDF_DamageUpRatio": {
                              "operator": "Variables[0] (UnusedUnderThisBase_203) || RETURN",
                              "displayLines": "UnusedUnderThisBase_203",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_203"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-185996046\">Monster_W2_Huanlong_SpecialMark_Main</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160332",
                  "value": 3
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160303",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160303",
                  "value": 2
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160332",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160332",
                  "value": 2
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.01
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160336",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"535486954\">Monster_W2_Huanlong_Part3EndEndurance</a>"
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160336",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-676400883\">Monster_W2_Huanlong_Part3EndForcePerform</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-181226190\">MissionBattleEvent60006_PassiveAbility</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160320",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 1
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase3"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1194093240\">Monster_W2_Huanlong_Part2Lock</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1027800087\">Monster_W2_Huanlong_Endurance</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"45124899\">Monster_W2_HuanlongPart_01_Part2_JingYuan</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-185996046\">Monster_W2_Huanlong_SpecialMark_Main</a>"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Huanlong_Part2_Camera5_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160320",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160303",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160303",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill02"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160308",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
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
                  "modifier": "<a class=\"gModGreen\" id=\"-751037283\">Monster_W2_Huanlong_Part1Lock</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160308",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill03"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160310",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160310",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill07"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160315",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"204047517\">Monster_W2_HuanlongPart_01_Dispel</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1027800087\">Monster_W2_Huanlong_Endurance</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-740227332\">Monster_W2_Huanlong_Part2_SpecialPerform</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160315",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160331",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160331",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill12"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160332",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160332",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill11"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160336",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160336",
                  "value": 2
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill10"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160336",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160336",
                  "value": 3
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 10
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"204047517\">Monster_W2_HuanlongPart_01_Dispel</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Phantylia: Main Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-185996046\">Monster_W2_Huanlong_SpecialMark_Main</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill13"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160336",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160336",
                  "value": 4
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase3End",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill10"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160336",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "phase": "Phase0"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "setPercent": 1
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 8012210,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Destruction Lotus"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TalkSentence_102160315",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Huanlong_Part2_Camera1_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkSentence_102160315",
                  "value": 2
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 5
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1803273949\">Monster_W2_Huanlong_Ability13_Special</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__872971873\">Monster_W2_Huanlong_Part3End</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Phase3End",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "Phase3FirstTurn"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1084194912\">Monster_W2_Huanlong_Part3Start</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.7
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Phase3Start",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Huanlong_Part3Start_Camera1_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Phase3Start",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__700657403\">Monster_W2_Huanlong_SpecialWin</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainEnd",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Huanlong_SpecialWin_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MainEnd",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__480807257\">Monster_W2_Huanlong_EntangleEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-463699187\">Monster_W2_Huanlong_EntangleEffectController</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                    "compareType": ">",
                    "value2": 4
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                    "compareType": ">",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"480807257\">Monster_W2_Huanlong_EntangleEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_Entangle"
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"480807257\">Monster_W2_Huanlong_EntangleEffect</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1803273949\">Monster_W2_Huanlong_Ability13_Special</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__541144260\">Monster_W2_Huanlong_Ability08_First</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1936938517\">Monster_W2_Huanlong_SpecialSelf</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "AttackData",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenHitRate</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1580288965\">Monster_W2_Huanlong_Special</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1932091323\">Monster_W2_Huanlong_Ability08_Prepare</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_Defence",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFFlat</span>&nbsp;",
                  "value": "(0 - MDF_Defence)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1896373900\">Monster_W2_Huanlong_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__987943462\">Monster_W2_Huanlong_Ability06Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1755050981\">Monster_W2_Huanlong_Ability12Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-185996046\">Monster_W2_Huanlong_SpecialMark_Main</a>",
      "modifierFlags": [
        "STAT_ForceActionable"
      ],
      "stackData": [],
      "latentQueue": [
        "PartDecisionFlag",
        "TalkSentence_102160332",
        "TalkSentence_102160303",
        "TalkSentence_102160336",
        "TalkSentence_102160320",
        "TalkSentence_102160308",
        "TalkSentence_102160310",
        "TalkSentence_102160315",
        "TalkSentence_102160331",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1152795297\">Monster_W2_Huanlong_Ability07Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-921214664\">Monster_W2_Huanlong_Ability08Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1697333588\">Monster_W2_Huanlong_Ability04Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2070328278\">Monster_W2_Huanlong_Ability02Mark</a>",
      "stackData": [],
      "latentQueue": [
        "Skill02Num"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1573763827\">Monster_W2_Huanlong_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPRatio_PerLayer) || RETURN",
                "displayLines": "MDF_DirtyHPRatio_PerLayer",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPRatio_PerLayer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases Maximum Restorable HP by <span class=\"descriptionNumberColor\">MDF_DirtyHPRatio_PerLayer</span>.",
      "type": "Debuff",
      "effectName": "Prana-Siphoned",
      "statusName": "Prana-Siphoned"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1027800087\">Monster_W2_Huanlong_Endurance</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "PartDecisionFlag",
        "TalkSentence_102160332",
        "TalkSentence_102160303",
        "TalkSentence_102160336",
        "TalkSentence_102160320",
        "TalkSentence_102160308",
        "TalkSentence_102160310",
        "TalkSentence_102160315"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1325047787\">Monster_W2_Huanlong_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8015020,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Phantylia the Undying"
                      }
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1027800087\">Monster_W2_Huanlong_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8015020,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Phantylia the Undying"
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Huanlong_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8015020,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Phantylia the Undying"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Phantylia: Main Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-185996046\">Monster_W2_Huanlong_SpecialMark_Main</a>"
                        }
                      ]
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1027800087\">Monster_W2_Huanlong_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc",
                      "applyOverride": false
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Huanlong_PassiveAbility_Insert2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}