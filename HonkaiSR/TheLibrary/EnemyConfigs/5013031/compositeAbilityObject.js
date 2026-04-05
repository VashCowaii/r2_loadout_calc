const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5013031,
  "trimCharacterName": 5013031,
  "abilityList": [
    "5013031_Monster_W5_Peacock_Ability05_Part02",
    "5013031_Monster_W5_Peacock_Ability05_Part01",
    "5013031_Monster_W5_Peacock_Ability04_Part02",
    "5013031_Monster_W5_Peacock_Ability04_Part01",
    "5013031_Monster_W5_Peacock_Ability03_Part02",
    "5013031_Monster_W5_Peacock_Ability03_Part01",
    "5013031_Monster_W5_Peacock_Ability01_Part02",
    "5013031_Monster_W5_Peacock_Ability01_Part01",
    "5013031_Monster_W5_Peacock_AbilityP01_Insert03_Part02",
    "5013031_Monster_W5_Peacock_AbilityP01_Insert03_Part01",
    "5013031_Monster_W5_Peacock_AbilityP01_Insert02_Part02",
    "5013031_Monster_W5_Peacock_AbilityP01_Insert02_Part01",
    "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part02",
    "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part01",
    "5013031_Monster_W5_Peacock_AbilityP01",
    "5013031_Modifiers",
    "5013031_Functions"
  ],
  "abilityObject": {
    "5013031_Monster_W5_Peacock_Ability05_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 6
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 6
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 5
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 5
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 4
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 3
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 2
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 1
              }
            }
          ]
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_Ability05_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_Ability05_Part01",
      "childAbilityList": [
        "5013031_Monster_W5_Peacock_Ability05_Camera",
        "5013031_Monster_W5_Peacock_Ability05_Part01",
        "5013031_Monster_W5_Peacock_Ability05_Part02"
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
          "ability": "Monster_W5_Peacock_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_Ability04_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_Ability04_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_Ability04_Part01",
      "childAbilityList": [
        "5013031_Monster_W5_Peacock_Ability04_Camera",
        "5013031_Monster_W5_Peacock_Ability04_Part01",
        "5013031_Monster_W5_Peacock_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W5_Peacock_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_Ability03_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_Ability03_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_Ability03_Part01",
      "childAbilityList": [
        "5013031_Monster_W5_Peacock_Ability03_Camera",
        "5013031_Monster_W5_Peacock_Ability03_Part01",
        "5013031_Monster_W5_Peacock_Ability03_Part02"
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
          "ability": "Monster_W5_Peacock_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_Ability01_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_Ability01_Part02",
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
            "DamageType": "Physical",
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
    "5013031_Monster_W5_Peacock_Ability01_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_Ability01_Part01",
      "childAbilityList": [
        "5013031_Monster_W5_Peacock_Ability01_Camera",
        "5013031_Monster_W5_Peacock_Ability01_Part01",
        "5013031_Monster_W5_Peacock_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_W5_Peacock_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01_Insert03_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ColorOutInsertFlag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 6
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 6
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 5
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 5
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 4
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 3
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 2
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentColorSlotIndex",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
              "variables": {
                "DynamicString_ColorSlotX": 1
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "variables": {
            "DynamicString_ColorSlotX": 1
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "variables": {
            "DynamicString_ColorSlotX": 2
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "variables": {
            "DynamicString_ColorSlotX": 3
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "variables": {
            "DynamicString_ColorSlotX": 4
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "variables": {
            "DynamicString_ColorSlotX": 5
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "variables": {
            "DynamicString_ColorSlotX": 6
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentColorSlotIndex",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01_Insert03_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert03_Part01",
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
          "ability": "Monster_W5_Peacock_AbilityP01_Insert03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01_Insert02_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ColorOutInsertFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047643861\">Enemy_W5_Peacock_AbilityP01_Colorful_Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]",
          "valuePerStack": {
            "MDF_ElationDamageExtraColorCount": {
              "operator": "Variables[0] ({[SkillP01[6]]}) || RETURN",
              "displayLines": "{[SkillP01[6]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[6]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01_Insert02_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert02_Part01",
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
          "ability": "Monster_W5_Peacock_AbilityP01_Insert02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ColorOutInsertFlag"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part02": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ColorInInsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047643861\">Enemy_W5_Peacock_AbilityP01_Colorful_Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]",
          "valuePerStack": {
            "MDF_ColorDiffDamageAddedRatio": {
              "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
              "displayLines": "{[SkillP01[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2014742101\">Enemy_W5_Peacock_Endurance</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part01": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part01",
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
          "ability": "Monster_W5_Peacock_AbilityP01_Insert01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ColorInInsertFlag"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Monster_W5_Peacock_AbilityP01": {
      "fileName": "5013031_Monster_W5_Peacock_AbilityP01",
      "childAbilityList": [
        "5013031_Monster_W5_Peacock_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"521870185\">Enemy_W5_Peacock_RemoveOneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2075359647\">Enemy_W5_Peacock_AbilityP01_ColorStateController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1459756173\">W5_Peacock_BattleScore1</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013031_Modifiers": {
      "fileName": "5013031_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1459756173\">W5_Peacock_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W5_Peacock_00_BattleScore1_ColorType"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FireScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IceScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ImaginaryScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "PhysicalScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "QuantumScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ThunderScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "WindScore",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W5_Peacock_00_BattleScore1_ColorType",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W5_Peacock_00_BattleScore1_ColorType",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Paint With Your Color",
                              "desc": "In a battle against \"Canvas Peacock,\" allow it to collect 4 different types of \"Paint\" while in the \"Colorless\" state and enter the \"Color\" state",
                              "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1611732375\">Enemy_W5_Peacock_AbilityP01_Color_Green_Display</a>[<span class=\"descriptionNumberColor\">Jade Green</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1611732375\">Enemy_W5_Peacock_AbilityP01_Color_Green_Display</a>[<span class=\"descriptionNumberColor\">Jade Green</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1242269878\">Enemy_W5_Peacock_AbilityP01_Color_Purple_Display</a>[<span class=\"descriptionNumberColor\">Wisteria Purple</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1242269878\">Enemy_W5_Peacock_AbilityP01_Color_Purple_Display</a>[<span class=\"descriptionNumberColor\">Wisteria Purple</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"689948799\">Enemy_W5_Peacock_AbilityP01_Color_Cyan_Display</a>[<span class=\"descriptionNumberColor\">Ultramarine</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"689948799\">Enemy_W5_Peacock_AbilityP01_Color_Cyan_Display</a>[<span class=\"descriptionNumberColor\">Ultramarine</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1698271149\">Enemy_W5_Peacock_AbilityP01_Color_White_Display</a>[<span class=\"descriptionNumberColor\">Unbleached Silk</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1698271149\">Enemy_W5_Peacock_AbilityP01_Color_White_Display</a>[<span class=\"descriptionNumberColor\">Unbleached Silk</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"2012268992\">Enemy_W5_Peacock_AbilityP01_Color_Yellow_Display</a>[<span class=\"descriptionNumberColor\">Pale Yellow</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2012268992\">Enemy_W5_Peacock_AbilityP01_Color_Yellow_Display</a>[<span class=\"descriptionNumberColor\">Pale Yellow</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2087807700\">Enemy_W5_Peacock_AbilityP01_Color_Blue_Display</a>[<span class=\"descriptionNumberColor\">Indigo</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2087807700\">Enemy_W5_Peacock_AbilityP01_Color_Blue_Display</a>[<span class=\"descriptionNumberColor\">Indigo</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>",
          "stackType": "Multiple",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1174793913\">Enemy_W5_Peacock_AbilityP01_Color_Red_Display</a>[<span class=\"descriptionNumberColor\">Pure Crimson</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1174793913\">Enemy_W5_Peacock_AbilityP01_Color_Red_Display</a>[<span class=\"descriptionNumberColor\">Pure Crimson</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1611732375\">Enemy_W5_Peacock_AbilityP01_Color_Green_Display</a>[<span class=\"descriptionNumberColor\">Jade Green</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Jade Green. When using abilities, consumes points to deal Wind Additional DMG.",
          "type": "Other",
          "statusName": "Jade Green"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1242269878\">Enemy_W5_Peacock_AbilityP01_Color_Purple_Display</a>[<span class=\"descriptionNumberColor\">Wisteria Purple</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Wisteria Purple. When using abilities, consumes points to deal Lightning Additional DMG.",
          "type": "Other",
          "statusName": "Wisteria Purple"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__689948799\">Enemy_W5_Peacock_AbilityP01_Color_Cyan_Display</a>[<span class=\"descriptionNumberColor\">Ultramarine</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Ultramarine. When using abilities, consumes points to deal Quantum Additional DMG.",
          "type": "Other",
          "statusName": "Ultramarine"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1698271149\">Enemy_W5_Peacock_AbilityP01_Color_White_Display</a>[<span class=\"descriptionNumberColor\">Unbleached Silk</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Unbleached Silk. When using abilities, consumes points to deal Physical Additional DMG.",
          "type": "Other",
          "statusName": "Unbleached Silk"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2012268992\">Enemy_W5_Peacock_AbilityP01_Color_Yellow_Display</a>[<span class=\"descriptionNumberColor\">Pale Yellow</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Pale Yellow. When using abilities, consumes points to deal Imaginary Additional DMG.",
          "type": "Other",
          "statusName": "Pale Yellow"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2087807700\">Enemy_W5_Peacock_AbilityP01_Color_Blue_Display</a>[<span class=\"descriptionNumberColor\">Indigo</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Indigo. When using abilities, consumes points to deal Ice Additional DMG.",
          "type": "Other",
          "statusName": "Indigo"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1174793913\">Enemy_W5_Peacock_AbilityP01_Color_Red_Display</a>[<span class=\"descriptionNumberColor\">Pure Crimson</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained <span class=\"descriptionNumberColor\">ModifierLayers</span> points of Pure Crimson. When using abilities, consumes points to deal Fire Additional DMG.",
          "type": "Other",
          "statusName": "Pure Crimson"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Jade Green is obtained, gains Wind Weakness after entering \"Color\" state, and Wind RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Wind Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Wisteria Purple is obtained, gains Lightning Weakness after entering \"Color\" state, and Lightning RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Lightning Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Ultramarine is obtained, gains Quantum Weakness after entering \"Color\" state, and Quantum RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Quantum Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Unbleached Silk is obtained, gains Physical Weakness after entering \"Color\" state, and Physical RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Physical Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Pale Yellow is obtained, gains Imaginary Weakness after entering \"Color\" state, and Imaginary RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Imaginary Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Indigo is obtained, gains Ice Weakness after entering \"Color\" state, and Ice RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Ice Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ResistanceDown",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_PropertyValue * MDF_Layer))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "As Pure Crimson is obtained, gains Fire Weakness after entering \"Color\" state, and Fire RES reduces by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>.",
          "type": "Other",
          "statusName": "Fire Weakness",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1921694254\">Enemy_W5_Peacock_AbilityP01_ElementResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
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
          "description": "Increases All-Type RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Removed when Weakness is Broken. Regained when recovering from Weakness Broken state.",
          "type": "Other",
          "effectName": "All-Type RES Boost",
          "statusName": "All-Type RES Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1931542016\">Enemy_W5_Peacock_Ink</a>[<span class=\"descriptionNumberColor\">Color Imbalance</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ],
          "description": "Unable to use Ultimate.",
          "type": "Debuff",
          "effectName": "Ultimate cannot be used.",
          "statusName": "Color Imbalance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2014742101\">Enemy_W5_Peacock_Endurance</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__521870185\">Enemy_W5_Peacock_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2047643861\">Enemy_W5_Peacock_AbilityP01_Colorful_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ColorInInsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
                  "variables": {
                    "DynamicString_ColorSlotX": 1
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
                  "variables": {
                    "DynamicString_ColorSlotX": 2
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
                  "variables": {
                    "DynamicString_ColorSlotX": 3
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
                  "variables": {
                    "DynamicString_ColorSlotX": 4
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
                  "variables": {
                    "DynamicString_ColorSlotX": 5
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
                  "variables": {
                    "DynamicString_ColorSlotX": 6
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurrentMaxColorType",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurrentMaxColorScore",
                  "value": {
                    "operator": "Variables[0] (CurrentMaxColorType) || RETURN",
                    "displayLines": "CurrentMaxColorType",
                    "constants": [],
                    "variables": [
                      "CurrentMaxColorType"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "IceScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentMaxColorScore) || RETURN",
                      "displayLines": "CurrentMaxColorScore",
                      "constants": [],
                      "variables": [
                        "CurrentMaxColorScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": {
                        "operator": "Variables[0] (IceScore) || RETURN",
                        "displayLines": "IceScore",
                        "constants": [],
                        "variables": [
                          "IceScore"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ImaginaryScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentMaxColorScore) || RETURN",
                      "displayLines": "CurrentMaxColorScore",
                      "constants": [],
                      "variables": [
                        "CurrentMaxColorScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": {
                        "operator": "Variables[0] (ImaginaryScore) || RETURN",
                        "displayLines": "ImaginaryScore",
                        "constants": [],
                        "variables": [
                          "ImaginaryScore"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PhysicalScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentMaxColorScore) || RETURN",
                      "displayLines": "CurrentMaxColorScore",
                      "constants": [],
                      "variables": [
                        "CurrentMaxColorScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 4
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": {
                        "operator": "Variables[0] (PhysicalScore) || RETURN",
                        "displayLines": "PhysicalScore",
                        "constants": [],
                        "variables": [
                          "PhysicalScore"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "QuantumScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentMaxColorScore) || RETURN",
                      "displayLines": "CurrentMaxColorScore",
                      "constants": [],
                      "variables": [
                        "CurrentMaxColorScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 5
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": {
                        "operator": "Variables[0] (QuantumScore) || RETURN",
                        "displayLines": "QuantumScore",
                        "constants": [],
                        "variables": [
                          "QuantumScore"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ThunderScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentMaxColorScore) || RETURN",
                      "displayLines": "CurrentMaxColorScore",
                      "constants": [],
                      "variables": [
                        "CurrentMaxColorScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 6
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": {
                        "operator": "Variables[0] (ThunderScore) || RETURN",
                        "displayLines": "ThunderScore",
                        "constants": [],
                        "variables": [
                          "ThunderScore"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "WindScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentMaxColorScore) || RETURN",
                      "displayLines": "CurrentMaxColorScore",
                      "constants": [],
                      "variables": [
                        "CurrentMaxColorScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 7
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": {
                        "operator": "Variables[0] (WindScore) || RETURN",
                        "displayLines": "WindScore",
                        "constants": [],
                        "variables": [
                          "WindScore"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] ({[SkillP01[7]]}) || Variables[1] (WHOLE) || Variables[2] (CurrentMaxColorScore) || PARAM_1 || FUNCTION || MUL || RETURN",
                    "displayLines": "({[SkillP01[7]]} * &nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(CurrentMaxColorScore))",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[7]]}",
                      "WHOLE",
                      "CurrentMaxColorScore"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 6
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 6,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 6,
                  "assignState": "True",
                  "state": "Active"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentColorSlotIndex",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ColorOutInsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ColorOutInsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      "abilityName": "Monster_W5_Peacock_AbilityP01_Insert02_Part01",
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Additional DMG"
                        ]
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "Peacock_UseColor"
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
                      "name": "SWITCH",
                      "hasBreak": false,
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Fire"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Fire"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Ice"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Ice"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Imaginary"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Imaginary"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Physical"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Physical"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Quantum"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Quantum"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Lightning"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Thunder"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "list": [
                                  "Wind"
                                ]
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Wind"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "execute": [
                            {
                              "name": "Adjust Target Stats",
                              "modifiedValuesArray": [
                                {
                                  "on": "Attacker",
                                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                                  "value": "MDF_ColorDiffDamageAddedRatio"
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
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 6
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                        "value1": "CurrentColorSlotIndex",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ColorOutInsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ColorOutInsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Peacock_AbilityP01_Insert03_Part01",
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurrentColorSlotIndex",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 7,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                        "displayLines": "CurrentColorSlotIndex",
                        "constants": [],
                        "variables": [
                          "CurrentColorSlotIndex"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 6,
                      "assignState": "True",
                      "state": "Active"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ColorDiffDamageAddedRatio"
          ],
          "latentQueue": [
            "ColorInInsertFlag"
          ],
          "description": "When using abilities, \"Paint\" will be consumed to deal Additional DMG of the corresponding Type. At the end of the turn, if all \"Paint\" has been consumed, enters the \"Colorless\" state and removes Weakness and Type RES reduction caused by \"Paint.\" When Weakness is Broken, consumes all \"Paint\" to deal Additional DMG equal to a percentage of this unit's max HP to this unit.",
          "type": "Other",
          "effectName": "Color",
          "statusName": "Color"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "FireScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "IceScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ImaginaryScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PhysicalScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "QuantumScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ThunderScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WindScore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurrentMaxColorType",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurrentMaxColorScore",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 6,
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Lock Toughness",
                  "percent": 0
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "_ElationDamageFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 7
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 6
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 6
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 5
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 4
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 3
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 2
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentColorSlotIndex",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
                      "variables": {
                        "DynamicString_ColorSlotX": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_ElationDamageFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player Team All(with Unselectable)V2}}"
                            },
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Currency Wars Full OffFieldList}}"
                            },
                            "mustBeAlive2": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"883191705\">TaskList_Monster_W5_Peacock_Ability01_ColorlessState_GetColor</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_ElationDamageFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (MDF_ElationDamageExtraColorCount) || RETURN",
                            "displayLines": "MDF_ElationDamageExtraColorCount",
                            "constants": [],
                            "variables": [
                              "MDF_ElationDamageExtraColorCount"
                            ]
                          },
                          "Event": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"883191705\">TaskList_Monster_W5_Peacock_Ability01_ColorlessState_GetColor</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "_ElationDamageFlag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurrentColorSlotIndex",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 7,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurrentColorSlotIndex) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(CurrentColorSlotIndex - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "CurrentColorSlotIndex"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 6,
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__883191705\">TaskList_Monster_W5_Peacock_Ability01_ColorlessState_GetColor</a>",
              "parse": [
                {
                  "name": "SWITCH",
                  "source": {
                    "name": "Custom Damage Type",
                    "initialTypePreRead": "AllType",
                    "sourceType": "ReadTargetType",
                    "readTarget": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Fire",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 1
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Ice",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 2
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Imaginary",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 3
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Physical",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 4
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Quantum",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 5
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Thunder",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 6
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Wind",
                      "execute": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                            "displayLines": "CurrentColorSlotIndex",
                            "constants": [],
                            "variables": [
                              "CurrentColorSlotIndex"
                            ]
                          },
                          "caseEvents": [
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>"
                                }
                              ]
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>",
                                  "referenceModifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
                          "variables": {
                            "TaskListDF_ColorValue": 7
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ElationDamageExtraColorCount"
          ],
          "latentQueue": [
            "ColorOutInsertFlag"
          ],
          "description": "When attacked by ally targets, gains 1 point of \"Paint\" based on the attacker's Type. If Elation DMG is received during the attack, then additionally gains a certain amount of \"Paint.\" When reaching 6 points of \"Paint,\" enters the \"Color\" state. During this state, based on the Types of Paint already gained, gains corresponding Types of Weakness and decreases the Type RES of corresponding Type. When in the \"Colorless\" state, Toughness will not drop below 1.",
          "type": "Other",
          "effectName": "Colorless",
          "statusName": "Colorless"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2075359647\">Enemy_W5_Peacock_AbilityP01_ColorStateController</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]",
                  "valuePerStack": {
                    "MDF_ElationDamageExtraColorCount": {
                      "operator": "Variables[0] ({[SkillP01[6]]}) || RETURN",
                      "displayLines": "{[SkillP01[6]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[6]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1921694254\">Enemy_W5_Peacock_AbilityP01_ElementResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Boost</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                      "displayLines": "{[SkillP01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[0]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1921694254\">Enemy_W5_Peacock_AbilityP01_ElementResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Boost</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1758427876\">Enemy_W5_Peacock_AbilityP01_Color_Red</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-661706443\">Enemy_W5_Peacock_AbilityP01_Color_Blue</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-423189791\">Enemy_W5_Peacock_AbilityP01_Color_Yellow</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"464373806\">Enemy_W5_Peacock_AbilityP01_Color_White</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1891360942\">Enemy_W5_Peacock_AbilityP01_Color_Cyan</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1805020807\">Enemy_W5_Peacock_AbilityP01_Color_Purple</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-695461868\">Enemy_W5_Peacock_AbilityP01_Color_Green</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentColorSlotIndex",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "FireScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "IceScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ImaginaryScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PhysicalScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "QuantumScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ThunderScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WindScore",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorType",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurrentMaxColorScore",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 6,
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1921694254\">Enemy_W5_Peacock_AbilityP01_ElementResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Boost</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                      "displayLines": "{[SkillP01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]",
                      "valuePerStack": {
                        "MDF_ElationDamageExtraColorCount": {
                          "operator": "Variables[0] ({[SkillP01[6]]}) || RETURN",
                          "displayLines": "{[SkillP01[6]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[6]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "5013031_Functions": {
      "fileName": "5013031_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 8,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
                "displayLines": "CurrentColorSlotIndex",
                "constants": [],
                "variables": [
                  "CurrentColorSlotIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot1",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                        "displayLines": "TaskListDF_ColorValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorValue"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                      "variables": {
                        "TaskListDF_ColorScoreValue": 1.16,
                        "TaskListDF_ColorValue": {
                          "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                          "displayLines": "TaskListDF_ColorValue",
                          "constants": [],
                          "variables": [
                            "TaskListDF_ColorValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentColorSlotIndex",
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
                      "variableName": "ColorSlot2",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                        "displayLines": "TaskListDF_ColorValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorValue"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                      "variables": {
                        "TaskListDF_ColorScoreValue": 1.08,
                        "TaskListDF_ColorValue": {
                          "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                          "displayLines": "TaskListDF_ColorValue",
                          "constants": [],
                          "variables": [
                            "TaskListDF_ColorValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentColorSlotIndex",
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
                      "variableName": "ColorSlot3",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                        "displayLines": "TaskListDF_ColorValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorValue"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                      "variables": {
                        "TaskListDF_ColorScoreValue": 1.04,
                        "TaskListDF_ColorValue": {
                          "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                          "displayLines": "TaskListDF_ColorValue",
                          "constants": [],
                          "variables": [
                            "TaskListDF_ColorValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentColorSlotIndex",
                      "value": 4
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot4",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                        "displayLines": "TaskListDF_ColorValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorValue"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                      "variables": {
                        "TaskListDF_ColorScoreValue": 1.02,
                        "TaskListDF_ColorValue": {
                          "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                          "displayLines": "TaskListDF_ColorValue",
                          "constants": [],
                          "variables": [
                            "TaskListDF_ColorValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentColorSlotIndex",
                      "value": 5
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot5",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                        "displayLines": "TaskListDF_ColorValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorValue"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                      "variables": {
                        "TaskListDF_ColorScoreValue": 1.01,
                        "TaskListDF_ColorValue": {
                          "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                          "displayLines": "TaskListDF_ColorValue",
                          "constants": [],
                          "variables": [
                            "TaskListDF_ColorValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentColorSlotIndex",
                      "value": 6
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot6",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                        "displayLines": "TaskListDF_ColorValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorValue"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                      "variables": {
                        "TaskListDF_ColorScoreValue": 1,
                        "TaskListDF_ColorValue": {
                          "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                          "displayLines": "TaskListDF_ColorValue",
                          "constants": [],
                          "variables": [
                            "TaskListDF_ColorValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentColorSlotIndex",
                      "value": 7
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "ColorInInsertFlag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true,
                          "toRemove": [
                            "STAT_CTRL"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2014742101\">Enemy_W5_Peacock_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ColorInInsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          "abilityName": "Monster_W5_Peacock_AbilityP01_Insert01_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "abortFlags": [
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                "displayLines": "TaskListDF_ColorValue",
                "constants": [],
                "variables": [
                  "TaskListDF_ColorValue"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "FireScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "IceScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ImaginaryScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "PhysicalScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "QuantumScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ThunderScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 7,
                  "execute": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "WindScore",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                        "displayLines": "TaskListDF_ColorScoreValue",
                        "constants": [],
                        "variables": [
                          "TaskListDF_ColorScoreValue"
                        ]
                      },
                      "max": 100
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
                "displayLines": "DynamicString_ColorSlotX",
                "constants": [],
                "variables": [
                  "DynamicString_ColorSlotX"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot1) || RETURN",
                        "displayLines": "ColorSlot1",
                        "constants": [],
                        "variables": [
                          "ColorSlot1"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot1",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot2) || RETURN",
                        "displayLines": "ColorSlot2",
                        "constants": [],
                        "variables": [
                          "ColorSlot2"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot2",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot3) || RETURN",
                        "displayLines": "ColorSlot3",
                        "constants": [],
                        "variables": [
                          "ColorSlot3"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot3",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot4) || RETURN",
                        "displayLines": "ColorSlot4",
                        "constants": [],
                        "variables": [
                          "ColorSlot4"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot4",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot5) || RETURN",
                        "displayLines": "ColorSlot5",
                        "constants": [],
                        "variables": [
                          "ColorSlot5"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot5",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot6) || RETURN",
                        "displayLines": "ColorSlot6",
                        "constants": [],
                        "variables": [
                          "ColorSlot6"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot6",
                      "value": 0
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
              "variableName": "CurrentColorSlotIndex",
              "value": -1,
              "max": 7
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
                "displayLines": "DynamicString_ColorSlotX",
                "constants": [],
                "variables": [
                  "DynamicString_ColorSlotX"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot1) || RETURN",
                        "displayLines": "ColorSlot1",
                        "constants": [],
                        "variables": [
                          "ColorSlot1"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot1",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot2) || RETURN",
                        "displayLines": "ColorSlot2",
                        "constants": [],
                        "variables": [
                          "ColorSlot2"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot2",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot3) || RETURN",
                        "displayLines": "ColorSlot3",
                        "constants": [],
                        "variables": [
                          "ColorSlot3"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot3",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot4) || RETURN",
                        "displayLines": "ColorSlot4",
                        "constants": [],
                        "variables": [
                          "ColorSlot4"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot4",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot5) || RETURN",
                        "displayLines": "ColorSlot5",
                        "constants": [],
                        "variables": [
                          "ColorSlot5"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot5",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot6) || RETURN",
                        "displayLines": "ColorSlot6",
                        "constants": [],
                        "variables": [
                          "ColorSlot6"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Function's Target List}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Peacock_UseColor",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ColorSlot6",
                      "value": 0
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
              "variableName": "CurrentColorSlotIndex",
              "value": -1,
              "max": 7
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
                "displayLines": "DynamicString_ColorSlotX",
                "constants": [],
                "variables": [
                  "DynamicString_ColorSlotX"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
                "displayLines": "DynamicString_ColorSlotX",
                "constants": [],
                "variables": [
                  "DynamicString_ColorSlotX"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot1) || RETURN",
                        "displayLines": "ColorSlot1",
                        "constants": [],
                        "variables": [
                          "ColorSlot1"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot2) || RETURN",
                        "displayLines": "ColorSlot2",
                        "constants": [],
                        "variables": [
                          "ColorSlot2"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot3) || RETURN",
                        "displayLines": "ColorSlot3",
                        "constants": [],
                        "variables": [
                          "ColorSlot3"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot4) || RETURN",
                        "displayLines": "ColorSlot4",
                        "constants": [],
                        "variables": [
                          "ColorSlot4"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot5) || RETURN",
                        "displayLines": "ColorSlot5",
                        "constants": [],
                        "variables": [
                          "ColorSlot5"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot6) || RETURN",
                        "displayLines": "ColorSlot6",
                        "constants": [],
                        "variables": [
                          "ColorSlot6"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__181"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "stackLimit": 10,
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                      "displayLines": "{[SkillP01[1]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[SkillP01[1]]}"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1476300771\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness_V2</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (ColorInInsertFlag) || RETURN",
                "displayLines": "ColorInInsertFlag",
                "constants": [],
                "variables": [
                  "ColorInInsertFlag"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
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
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
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
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 7,
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__181"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                          "stackLimit": 10,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
                "displayLines": "DynamicString_ColorSlotX",
                "constants": [],
                "variables": [
                  "DynamicString_ColorSlotX"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot1) || RETURN",
                        "displayLines": "ColorSlot1",
                        "constants": [],
                        "variables": [
                          "ColorSlot1"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
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
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot2) || RETURN",
                        "displayLines": "ColorSlot2",
                        "constants": [],
                        "variables": [
                          "ColorSlot2"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
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
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot3) || RETURN",
                        "displayLines": "ColorSlot3",
                        "constants": [],
                        "variables": [
                          "ColorSlot3"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
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
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot4) || RETURN",
                        "displayLines": "ColorSlot4",
                        "constants": [],
                        "variables": [
                          "ColorSlot4"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
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
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot5) || RETURN",
                        "displayLines": "ColorSlot5",
                        "constants": [],
                        "variables": [
                          "ColorSlot5"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
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
                  "caseValueIs": 6,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ColorSlot6) || RETURN",
                        "displayLines": "ColorSlot6",
                        "constants": [],
                        "variables": [
                          "ColorSlot6"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7,
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
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
            }
          ]
        }
      ],
      "references": []
    }
  }
}