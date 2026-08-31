const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "AvatarDiceResult",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Win_Flag",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "AvatarDiceResult",
          "modifierName": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DiceResult",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (AvatarDiceResult) || RETURN",
              "displayLines": "AvatarDiceResult",
              "constants": [],
              "variables": [
                "AvatarDiceResult"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Win_Flag",
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
        "value1": "Win_Flag",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "WaitInsert",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Aventurine: Skill10 Target}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (DiceResult) || RETURN",
              "displayLines": "DiceResult",
              "constants": [],
              "variables": [
                "DiceResult"
              ]
            },
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MaxSpecialSP) || Variables[1] (CurrentSpecialSP) || SUB || RETURN",
                    "displayLines": "(MaxSpecialSP - CurrentSpecialSP)",
                    "constants": [],
                    "variables": [
                      "MaxSpecialSP",
                      "CurrentSpecialSP"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ],
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valuePercent": 1,
                  "isFixed": "(Fixed)"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2146147148\">Monster_W3_Aventurine_DamageUp</a>[<span class=\"descriptionNumberColor\">Favored by Fortune</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
        "compareType": ">",
        "value2": {
          "operator": "Variables[0] (DiceResult) || RETURN",
          "displayLines": "DiceResult",
          "constants": [],
          "variables": [
            "DiceResult"
          ]
        },
        "valueType": "Layer"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (DiceResult) || RETURN",
              "displayLines": "DiceResult",
              "constants": [],
              "variables": [
                "DiceResult"
              ]
            },
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
        "compareType": "=",
        "value2": {
          "operator": "Variables[0] (DiceResult) || RETURN",
          "displayLines": "DiceResult",
          "constants": [],
          "variables": [
            "DiceResult"
          ]
        },
        "valueType": "Layer"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (DiceResult) || RETURN",
                      "displayLines": "DiceResult",
                      "constants": [],
                      "variables": [
                        "DiceResult"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "invertCondition": true
                  }
                ]
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2016354343\">Monster_W3_Aventurine_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Down on Your Luck</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageTakenUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                }
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
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (DiceResult) || RETURN",
                  "displayLines": "DiceResult",
                  "constants": [],
                  "variables": [
                    "DiceResult"
                  ]
                },
                "valueType": "Layer"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                "invertCondition": true
              }
            ]
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
          }
        ]
      }
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DiceResult",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"610327898\">Monster_W3_Aventurine_Part2Effect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Aventurine: Skill07 Target}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1871436959\">Monster_W3_Aventurine_Unselectable</a>"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}