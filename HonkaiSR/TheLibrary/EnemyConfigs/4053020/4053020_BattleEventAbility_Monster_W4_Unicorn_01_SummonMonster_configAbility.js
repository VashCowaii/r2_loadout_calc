const configAbility = {
  "fileName": "4053020_BattleEventAbility_Monster_W4_Unicorn_01_SummonMonster",
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
            "value1": "SummonCount",
            "compareType": ">",
            "value2": 0
          },
          {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "compareType": "<",
            "value2": 5
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "DarkTeamCount",
          "livingTargets": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonCountTemp",
          "value": {
            "operator": "Variables[0] (SummonCount) || RETURN",
            "displayLines": "SummonCount",
            "constants": [],
            "variables": [
              "SummonCount"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (MIN) || Variables[1] (SummonCount) || Constants[0] (5) || Variables[2] (DarkTeamCount) || SUB || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(SummonCount, (5 - DarkTeamCount))",
            "constants": [
              5
            ],
            "variables": [
              "MIN",
              "SummonCount",
              "DarkTeamCount"
            ]
          },
          "Event": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonCountTemp) || RETURN",
                "displayLines": "SummonCountTemp",
                "constants": [],
                "variables": [
                  "SummonCountTemp"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__95"
                            ]
                          },
                          "locationType": "AfterCaster"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__95"
                            ]
                          },
                          "locationType": "BeforeCaster"
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
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__95"
                            ]
                          },
                          "locationType": "Last"
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
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__95"
                            ]
                          },
                          "locationType": "First"
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
              "variableName": "SummonCountTemp",
              "value": -1,
              "max": 100
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "SummonCount",
              "value": -1
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
          }
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (SummonCount) || RETURN",
            "displayLines": "SummonCount",
            "constants": [],
            "variables": [
              "SummonCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "SW_Minion01_03"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 6
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>[<span class=\"descriptionNumberColor\">Fetal Movement of the Ocean</span>]"
            }
          ],
          "noTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2140507283\">MWMonster_W4_Unicorn_01_BlockDamage</a>[<span class=\"descriptionNumberColor\">Maelstrom's Eye</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "SW_Minion01_03"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 6
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>[<span class=\"descriptionNumberColor\">Fetal Movement of the Ocean</span>]"
            }
          ],
          "noTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (SummonCount) || RETURN",
            "displayLines": "SummonCount",
            "constants": [],
            "variables": [
              "SummonCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Breeding Frenzy</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-747106338\">Modifier_Monster_W4_Unicorn_01_Summon</a>"
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
    }
  ],
  "references": []
}