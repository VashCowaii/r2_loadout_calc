const configAbility = {
  "fileName": "3025012_Monster_W3_Sunday_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_Sunday_MainStory380"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
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
          "modifier": "<a class=\"gModGreen\" id=\"298444\">Enemy_W3_Sunday_Ability09_ChargeEffect_01</a>"
        }
      ]
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
        "displayLines": "MDF_Skill10_TurnCount",
        "constants": [],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 7
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1660671565\">Enemy_W3_Sunday_Ability09_ChargeEffect_TearOutline</a>"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_TimePause_ActionCounter",
        "compareType": "=",
        "value2": 5,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"50631301\">Enemy_W3_Sunday_Ability09_ChargeEffect_02</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": "=",
            "value2": 3,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33853682\">Enemy_W3_Sunday_Ability09_ChargeEffect_03</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_Skill09_Round",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "SWITCH",
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 6,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "SWITCH CONDITON",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 4,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "SWITCH CONDITON",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "SWITCH CONDITON",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "SWITCH CONDITON",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "W3_Sunday_00_Skill09_Round",
                  "value": 2
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_Skill09_Round",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 7,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "W3_Sunday_00_Skill09_Round",
                  "value": 3
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
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_Sunday_MainStory380"
      },
      "passed": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
            "displayLines": "MDF_Skill10_TurnCount",
            "constants": [],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1187511334\">Standard_MuteSpeed</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"98028781\">Enemy_W3_Sunday_MainStory380_UltraReady</a>"
                },
                {
                  "name": "Preload Battle Event(s)",
                  "eventID": [
                    60039,
                    60040
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Gender is",
                    "gender": "GENDER_MAN"
                  },
                  "passed": [
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 60039,
                      "variables": null,
                      "whenCreated": [
                        "Show BattleEvent Button",
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 60040,
                      "variables": null,
                      "whenCreated": [
                        "Show BattleEvent Button",
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Sunday_MainStory380_InsertUltra",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
        "displayLines": "MDF_Skill10_TurnCount",
        "constants": [],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 7
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
        "displayLines": "MDF_Skill10_TurnCount",
        "constants": [],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 7,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-983902167\">Enemy_W3_Sunday_Ability09_DelayToast</a>"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "W3_Sunday_00_TimePause_ActionCounter",
      "context": "TargetEntity",
      "value": -1,
      "min": -1,
      "max": 7
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_TimePause_ActionCounter",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Constants[0] (7) || Variables[0] (MDF_Skill10_TurnCount) || SUB || RETURN",
            "displayLines": "(7 - MDF_Skill10_TurnCount)",
            "constants": [
              7
            ],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "entityClass": "Enemy",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "maximum": 7,
          "assignState": "True"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Constants[0] (7) || Variables[0] (MDF_Skill10_TurnCount) || SUB || RETURN",
            "displayLines": "(7 - MDF_Skill10_TurnCount)",
            "constants": [
              7
            ],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "entityClass": "Enemy",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "maximum": 7,
          "assignState": "True",
          "state": "Active"
        }
      ]
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": 1.728,
      "adjustmentType": "="
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_Sunday_MainStory380"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 6
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
                "displayLines": "MDF_Skill10_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1001,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "March 7th"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "skillType": "ControlSkill03",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "afterInjection": []
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1002,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Dan Heng"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "skillType": "ControlSkill03",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "afterInjection": []
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1004,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Welt"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "skillType": "ControlSkill03",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "afterInjection": []
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1003,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Himeko"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "skillType": "ControlSkill03",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "afterInjection": []
                        }
                      ]
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 0
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-983902167\">Enemy_W3_Sunday_Ability09_DelayToast</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter",
        "W3_Sunday_00_Skill09_Round"
      ]
    }
  ]
}