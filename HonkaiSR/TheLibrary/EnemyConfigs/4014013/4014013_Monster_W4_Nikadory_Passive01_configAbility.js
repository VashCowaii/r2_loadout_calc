const configAbility = {
  "fileName": "4014013_Monster_W4_Nikadory_Passive01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1727885089\">W4_Nikadory_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1711107470\">W4_Nikadory_BattleScore2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1,
        "conditions": {
          "name": "Enemy ID",
          "ID": 401402,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014016,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Victor, Acropolis, and Lord of Strife",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"191148502\">Monster_W4_Hearse_LockHPNikadory</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258691339\">Monster_W4_Nikadory_WithHearse</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401402020,
            "target": {
              "name": "Target Name",
              "target": "{{Nikador - The Giver: Self}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador - The Giver: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Savage God, Mad King, Incarnation of Strife",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 401401100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1803940540\">Monster_W4_Nikadory_Main</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Savage God, Mad King, Incarnation of Strife",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-945349590\">Monster_W4_Nikadory_FullPhase1</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4014015,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                    "isBaseCompare": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2056345398\">Monster_W4_Nikadory_PartController_RLBoss</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-994497740\">Monster_W4_Nikadory_RLBoss_Passive</a>",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_307) || RETURN",
                          "displayLines": "UnusedUnderThisBase_307",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_307"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-849627116\">Monster_W4_Nikadory_PartController</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"841167042\">Monster_W4_Nikadory_Main2</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"965106610\">Monster_W4_Nikadory_Passive</a>",
      "valuePerStack": {
        "MDF_DamageResistance_PerLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
          "displayLines": "UnusedUnderThisBase_566",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_566"
          ]
        },
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
          "displayLines": "UnusedUnderThisBase_567",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_567"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
          "displayLines": "UnusedUnderThisBase_568",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_568"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] (UnusedUnderThisBase_572) || RETURN",
          "displayLines": "UnusedUnderThisBase_572",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_572"
          ]
        },
        "MDF_SPAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_571) || RETURN",
          "displayLines": "UnusedUnderThisBase_571",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_571"
          ]
        },
        "MDF_EnhanceSPAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_573) || RETURN",
          "displayLines": "UnusedUnderThisBase_573",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_573"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_565) || RETURN",
          "displayLines": "UnusedUnderThisBase_565",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_565"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_565) || RETURN",
          "displayLines": "UnusedUnderThisBase_565",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_565"
          ]
        },
        "MDF_CrackedEffect": {
          "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
          "displayLines": "UnusedUnderThisBase_567",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_567"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
          "displayLines": "UnusedUnderThisBase_568",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_568"
          ]
        },
        "MDF_DamageResistance": {
          "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
          "displayLines": "UnusedUnderThisBase_566",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_566"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] (UnusedUnderThisBase_572) || RETURN",
          "displayLines": "UnusedUnderThisBase_572",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_572"
          ]
        },
        "MDF_ModifySP": {
          "operator": "Variables[0] (UnusedUnderThisBase_571) || RETURN",
          "displayLines": "UnusedUnderThisBase_571",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_571"
          ]
        }
      }
    }
  ],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Savage God, Mad King, Incarnation of Strife",
            "isBaseCompare": true
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All(with Unselectable)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "Enemy ID",
              "ID": 401402,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null,
              "isCompareUniqueID": true
            }
          }
        ]
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}