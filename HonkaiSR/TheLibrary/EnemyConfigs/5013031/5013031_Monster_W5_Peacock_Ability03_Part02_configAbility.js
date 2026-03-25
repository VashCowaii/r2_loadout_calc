const configAbility = {
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
  "references": []
}