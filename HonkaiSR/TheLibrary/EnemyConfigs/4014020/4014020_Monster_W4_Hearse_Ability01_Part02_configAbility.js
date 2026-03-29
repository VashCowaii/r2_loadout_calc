const configAbility = {
  "fileName": "4014020_Monster_W4_Hearse_Ability01_Part02",
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
            "value1": "Tutorial_Flag",
            "compareType": "=",
            "value2": 0
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1470468731\">Monster_W4_Hearse_AlreadyAdd</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014022,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentBlackBloodValue"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentEnhanceBlackBloodValue"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentRemainBlackBloodValue"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "CurrentBlackBloodValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "CurrentEnhanceBlackBloodValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"241895029\">Monster_W4_HearsePart_BlackBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Conquered Eon</span>]"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "CurrentRemainBlackBloodValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentBlackBloodValue",
              "value": {
                "operator": "Variables[0] (CurrentBlackBloodValue) || Variables[1] (CurrentRemainBlackBloodValue) || SUB || Variables[2] (UnusedUnderThisBase_318) || MUL || Variables[1] (CurrentRemainBlackBloodValue) || ADD || Variables[3] (CurrentEnhanceBlackBloodValue) || SUB || RETURN",
                "displayLines": "((((CurrentBlackBloodValue - CurrentRemainBlackBloodValue) * UnusedUnderThisBase_318) + CurrentRemainBlackBloodValue) - CurrentEnhanceBlackBloodValue)",
                "constants": [],
                "variables": [
                  "CurrentBlackBloodValue",
                  "CurrentRemainBlackBloodValue",
                  "UnusedUnderThisBase_318",
                  "CurrentEnhanceBlackBloodValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurrentBlackBloodValue",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_319) || RETURN",
                  "displayLines": "UnusedUnderThisBase_319",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_319"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentBlackBloodValue",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_319) || RETURN",
                    "displayLines": "UnusedUnderThisBase_319",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_319"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"241895029\">Monster_W4_HearsePart_BlackBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Conquered Eon</span>]",
              "valuePerStack": {
                "MDF_DirtyHPRatio": {
                  "operator": "Variables[0] (CurrentBlackBloodValue) || RETURN",
                  "displayLines": "CurrentBlackBloodValue",
                  "constants": [],
                  "variables": [
                    "CurrentBlackBloodValue"
                  ]
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-18449095\">Monster_W4_Hearse_BattleScore2Count</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
          "variableName": "MDF_KillByHearse",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
        },
        {
          "name": "Mark Entity For Immediate Death",
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
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Body-Types",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "types": [
              "LittleAvatar"
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LargeAvatar"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Body-Types",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "types": [
              "LittleAvatar"
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LargeAvatar"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Body-Types",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "types": [
              "LittleAvatar"
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LargeAvatar"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Body-Types",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "types": [
              "LittleAvatar"
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LargeAvatar"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
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
          "target": "{{Player Team All}}.[[removeMemosprite]]"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "KeepOnFirst"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "Last"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "KeepOnLast"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}.[[removeMemosprite]]"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "KeepOnFirst"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}.[[removeMemosprite]]"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "KeepOnFirst"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "BeforeCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}.[[removeMemosprite]]"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "KeepOnFirst"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "SoulHPRatio",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                    "isBaseCompare": true,
                    "invertCondition": true
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Mydeimos, Lance of Fury",
                    "isBaseCompare": true
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-855334554\">Monster_W4_HearsePart_Part2HP</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]",
      "valuePerStack": {
        "MDF_DirtyHPRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(Left to Right)}}"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(Left to Right)}}"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(Left to Right)}}"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(Left to Right)}}"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1150362687\">Monster_W4_HearsePart_AddPassive</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014023,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Mydeimos, Lance of Fury",
        "isBaseCompare": true,
        "invertCondition": true
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player & Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Tutorial_Flag",
            "compareType": "=",
            "value2": 0
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
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
          "variableName": "Tutorial_Flag",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(Right to Left)}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-516776989\">Monster_W4_Hearse_ForceAutoLock</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}