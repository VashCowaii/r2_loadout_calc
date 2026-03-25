const configAbility = {
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
  "references": []
}