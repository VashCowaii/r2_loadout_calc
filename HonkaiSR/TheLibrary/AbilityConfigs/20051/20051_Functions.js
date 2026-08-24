const configAbility = {
  "fileName": "20051_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 13,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-866641197\">W5_AsatPramad_StartCamera</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Wave Count",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "PauseLevelForCameraPerform",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value": "W5_AsatPramad_MainStory440P3"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform"
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value": "W5_AsatPramad_MainStory440P3"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__158251524\">W5_AsatPramad_Ability03</a>",
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                  "valuePerStack": {
                    "MDF_DamagePercentageLightTeam": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13177) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13177",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13177"
                      ]
                    },
                    "MDF_BaseAttack": {
                      "operator": "Variables[0] (BaseAttack) || RETURN",
                      "displayLines": "BaseAttack",
                      "constants": [],
                      "variables": [
                        "BaseAttack"
                      ]
                    },
                    "MDF_MaxHP": {
                      "operator": "Variables[0] (MaxHP) || RETURN",
                      "displayLines": "MaxHP",
                      "constants": [],
                      "variables": [
                        "MaxHP"
                      ]
                    },
                    "MDF_DirtyBloodRatioPerLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13181) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13181",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13181"
                      ]
                    },
                    "MDF_DirtyBloodMaxLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13182) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13182",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13182"
                      ]
                    },
                    "MDF_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13183) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13183",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13183"
                      ]
                    },
                    "MDF_DamageTakenUpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13175) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13175",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13175"
                      ]
                    },
                    "MDF_DamageTakenMaxLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13173) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13173",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13173"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                      "valuePerStack": {
                        "MDF_DamagePercentageLightTeam": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13177) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13177",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13177"
                          ]
                        },
                        "MDF_BaseAttack": {
                          "operator": "Variables[0] (BaseAttack) || RETURN",
                          "displayLines": "BaseAttack",
                          "constants": [],
                          "variables": [
                            "BaseAttack"
                          ]
                        },
                        "MDF_MaxHP": {
                          "operator": "Variables[0] (MaxHP) || RETURN",
                          "displayLines": "MaxHP",
                          "constants": [],
                          "variables": [
                            "MaxHP"
                          ]
                        },
                        "MDF_DirtyBloodRatioPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13181) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13181",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13181"
                          ]
                        },
                        "MDF_DirtyBloodMaxLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13182) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13182",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13182"
                          ]
                        },
                        "MDF_Chance": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13183) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13183",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13183"
                          ]
                        },
                        "MDF_DamageTakenUpRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13175) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13175",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13175"
                          ]
                        },
                        "MDF_DamageTakenMaxLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13173) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13173",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13173"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "compareType": "<=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{{{Cyrene}}'s All Player Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"190017911\">W5_AsatPramad_Part02ChangeCheck</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__141473905\">W5_AsatPramad_Ability04</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{{{Cyrene}}'s All Player Characters}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
          },
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-270304885\">W5_AsatPramad_BattleScore1</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill04TargetCount",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Character",
                "livingState": "Mask_AliveOnly"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}.[[removeMemosprite]]"
                },
                "compareType": "<=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (Skill04TargetCount) || RETURN",
                    "displayLines": "Skill04TargetCount",
                    "constants": [],
                    "variables": [
                      "Skill04TargetCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2
                    }
                  ],
                  "defaultEvents": []
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (Skill04TargetCount) || RETURN",
                    "displayLines": "Skill04TargetCount",
                    "constants": [],
                    "variables": [
                      "Skill04TargetCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Skill04TargetCount",
              "value": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "type": "Character",
            "livingState": "Mask_AliveOnly"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{{{Cyrene}}'s All Player Characters}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "Skill04BombCount",
              "modifierName": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
              "multiplier": 1
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (Skill04BombCount) || RETURN",
                "displayLines": "Skill04BombCount",
                "constants": [],
                "variables": [
                  "Skill04BombCount"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "BlockDamageExcludeDot",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "BlockDamage",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-78128030\">Enemy_W5_AsatPramad_DirtyBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphon</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_13182) || RETURN",
                        "displayLines": "UnusedUnderThisBase_13182",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_13182"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyBloodRatioPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13181) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13181",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13181"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "Skill04BombCount",
              "modifierName": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
              "multiplier": 1
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (Skill04BombCount) || RETURN",
                "displayLines": "Skill04BombCount",
                "constants": [],
                "variables": [
                  "Skill04BombCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13896) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13896",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13896"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "NOT=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"190017911\">W5_AsatPramad_Part02ChangeCheck</a>"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__124696286\">W5_AsatPramad_Ability05</a>",
      "parse": [
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
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
                "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1753386308\">Enemy_W5_AsatPramad_MainStory02DelayMark</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-1753386308\">Enemy_W5_AsatPramad_MainStory02DelayMark</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DebuffID01",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DebuffID02",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DebuffID03",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DebuffID04",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DebuffID05",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DebuffID06",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CardCount",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DebuffFirstTimeCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DebuffFirstTimeCount) || RETURN",
                "displayLines": "DebuffFirstTimeCount",
                "constants": [],
                "variables": [
                  "DebuffFirstTimeCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700001
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700005
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700017
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Asat Pramad: 0}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700001
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700003
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700007
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700015
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700009
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700019
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700013
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "defaultEvents": []
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DebuffFirstTimeCount",
              "value": -1,
              "max": 100
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffRandomCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffHighRiskyFlag",
              "value": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffRandomCount",
              "value": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffRandomCount",
              "value": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
            }
          ]
        },
        {
          "name": "Combat Buff Selection",
          "passed": [
            {
              "name": "BUFF CHOICE",
              "lightTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: Skill05 Target1}}"
              },
              "lightBuff": {
                "operator": "Variables[0] (DebuffID01) || RETURN",
                "displayLines": "DebuffID01",
                "constants": [],
                "variables": [
                  "DebuffID01"
                ]
              },
              "darkTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: Skill05 Target2}}"
              },
              "darkBuff": {
                "operator": "Variables[0] (DebuffID02) || RETURN",
                "displayLines": "DebuffID02",
                "constants": [],
                "variables": [
                  "DebuffID02"
                ]
              },
              "weight": {
                "operator": "Variables[0] (DebuffWeight01) || RETURN",
                "displayLines": "DebuffWeight01",
                "constants": [],
                "variables": [
                  "DebuffWeight01"
                ]
              }
            },
            {
              "name": "BUFF CHOICE",
              "lightTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: Skill05 Target3}}"
              },
              "lightBuff": {
                "operator": "Variables[0] (DebuffID03) || RETURN",
                "displayLines": "DebuffID03",
                "constants": [],
                "variables": [
                  "DebuffID03"
                ]
              },
              "darkTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: Skill05 Target4}}"
              },
              "darkBuff": {
                "operator": "Variables[0] (DebuffID04) || RETURN",
                "displayLines": "DebuffID04",
                "constants": [],
                "variables": [
                  "DebuffID04"
                ]
              },
              "weight": {
                "operator": "Variables[0] (DebuffWeight02) || RETURN",
                "displayLines": "DebuffWeight02",
                "constants": [],
                "variables": [
                  "DebuffWeight02"
                ]
              }
            },
            {
              "name": "BUFF CHOICE",
              "lightTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: Skill05 Target5}}"
              },
              "lightBuff": {
                "operator": "Variables[0] (DebuffID05) || RETURN",
                "displayLines": "DebuffID05",
                "constants": [],
                "variables": [
                  "DebuffID05"
                ]
              },
              "darkTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: Skill05 Target6}}"
              },
              "darkBuff": {
                "operator": "Variables[0] (DebuffID06) || RETURN",
                "displayLines": "DebuffID06",
                "constants": [],
                "variables": [
                  "DebuffID06"
                ]
              },
              "weight": {
                "operator": "Variables[0] (DebuffWeight03) || RETURN",
                "displayLines": "DebuffWeight03",
                "constants": [],
                "variables": [
                  "DebuffWeight03"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "NOT=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_AsatPramad_Ability05_End_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "priorityTag": "EnemyChangeState",
              "allowAbilityTriggers": false
            }
          ],
          "failed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_AsatPramad_Ability05_End_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__4341073\">W5_AsatPramad_Ability05RandomSelect</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{{{Cyrene}}'s All Player Characters}}"
          },
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": 0.4
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffHighRiskyFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DebuffHighRiskyFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                4,
                4,
                1,
                2,
                2,
                1,
                1
              ],
              "execute": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700005
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700007
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700009
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700015
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700017
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700019
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700021
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                4,
                4,
                3,
                3,
                1,
                4,
                4,
                1,
                1,
                2,
                0.5
              ],
              "execute": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700001
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffHighRiskyFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Asat Pramad: 0}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700001
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700003
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffHighRiskyFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700005
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700007
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700009
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700011
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffHighRiskyFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700013
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffHighRiskyFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700015
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700017
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700019
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffID_Result",
                      "value": 700021
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DebuffRandomCount",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DebuffRandomCount",
            "compareType": "<=",
            "value2": 50
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DebuffID_Result",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (DebuffID01) || RETURN",
                      "displayLines": "DebuffID01",
                      "constants": [],
                      "variables": [
                        "DebuffID01"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DebuffID_Result",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (DebuffID03) || RETURN",
                      "displayLines": "DebuffID03",
                      "constants": [],
                      "variables": [
                        "DebuffID03"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DebuffID_Result",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (DebuffID05) || RETURN",
                      "displayLines": "DebuffID05",
                      "constants": [],
                      "variables": [
                        "DebuffID05"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-799541487\">W5_AsatPramad_BonusSelect</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DebuffID_Result) || RETURN",
            "displayLines": "DebuffID_Result",
            "constants": [],
            "variables": [
              "DebuffID_Result"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700001,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700001
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700002
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 15
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700001
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700002
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 15
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700001
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700002
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 15
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700003,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700003
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700004
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 10
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700003
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700004
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 10
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700003
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700004
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 10
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700005,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700005
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700006
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 8
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700005
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700006
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 8
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700005
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700006
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 8
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700007,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700007
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700008
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 11
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700007
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700008
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 11
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700007
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700008
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 11
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700009,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700009
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700010
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 5
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 7
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700009
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700010
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 5
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 7
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700009
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700010
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 5
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 7
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700011,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700011
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700012
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 12
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700011
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700012
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 12
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700011
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700012
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 12
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700013,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700013
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700014
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 13
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700013
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700014
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 13
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700013
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700014
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 13
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700015,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700015
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700016
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}.[[sortByHPCurrent]].[[reverse]]"
                          },
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 5
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700015
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700016
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}.[[sortByHPCurrent]].[[reverse]]"
                          },
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 5
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700015
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700016
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}.[[sortByHPCurrent]].[[reverse]]"
                          },
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 5
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 3
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700017,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700017
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700018
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700017
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700018
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700017
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700018
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 2
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700019,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700019
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700020
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 6
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700019
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700020
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 6
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700019
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700020
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 6
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 700021,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CardCount) || RETURN",
                    "displayLines": "CardCount",
                    "constants": [],
                    "variables": [
                      "CardCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID01",
                          "value": 700021
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID02",
                          "value": 700022
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight01",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID03",
                          "value": 700021
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID04",
                          "value": 700022
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight02",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID05",
                          "value": 700021
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID06",
                          "value": 700022
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffWeight03",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CardCount",
          "value": 1
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1882512440\">W5_AsatPramad_UltraPhase03</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                  },
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                  },
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagNames": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W5_AsatPramad_MainStory02Ability08",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyChangeState",
              "allowAbilityTriggers": false
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              },
              "ability": "Monster_W5_AsatPramad_Ability08_Part01",
              "isTrigger": true
            },
            "Wait for Pending Ability Completions"
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
      "parse": [
        {
          "name": "Change Character UI",
          "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Formation\"",
          "target": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "icon": "Monster_8015030.png"
        },
        {
          "name": "Change Character Model",
          "target": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1822389273\">W5_AsatPramad_Part02ChangeTo01</a>",
      "parse": [
        {
          "name": "Change Character UI",
          "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Existence\"",
          "target": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "icon": "Monster_8015040.png"
        },
        {
          "name": "Change Character Model",
          "target": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__190017911\">W5_AsatPramad_Part02ChangeCheck</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
            "invertCondition": true
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
                "value1": "CurrentFace",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1822389273\">W5_AsatPramad_Part02ChangeTo01</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentFace",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentFace",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__964206682\">W5_AsatPramad_Part03BEBreakSet</a>",
      "parse": [
        {
          "name": "Set Mapping Point",
          "point": "SelectRoot",
          "mapTo": "HeadPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "CameraRoot",
          "mapTo": "CameraRootPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Root",
          "mapTo": "RootPointPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "mapTo": "RootPointPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "SelectRoot",
          "mapTo": "HeadPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "CameraRoot",
          "mapTo": "CameraRootPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Root",
          "mapTo": "RootPointPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "mapTo": "RootPointPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "SelectRoot",
          "mapTo": "HeadPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "CameraRoot",
          "mapTo": "CameraRootPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Root",
          "mapTo": "RootPointPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "mapTo": "RootPointPhase03",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-368045394\">W5_AsatPramad_Part03BEBreakRecover</a>",
      "parse": [
        {
          "name": "Set Mapping Point",
          "point": "SelectRoot",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "CameraRoot",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Root",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "SelectRoot",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "CameraRoot",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Root",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "SelectRoot",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "CameraRoot",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Root",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "reset": true,
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        }
      ]
    }
  ],
  "references": []
}