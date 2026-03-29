const configAbility = {
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
}