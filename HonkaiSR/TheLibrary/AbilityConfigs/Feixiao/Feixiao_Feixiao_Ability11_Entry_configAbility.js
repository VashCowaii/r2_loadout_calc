const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability11_Entry",
  "childAbilityList": [
    "Feixiao_Feixiao_Ability11_Entry",
    "Feixiao_Feixiao_Ability11_Camera",
    "Feixiao_Feixiao_Ability11_Anim1_Part01",
    "Feixiao_Feixiao_Ability11_Anim2_Part01",
    "Feixiao_Feixiao_Ability11_Anim3_Part01",
    "Feixiao_Feixiao_Ability11_Anim4_Part01",
    "Feixiao_Feixiao_Ability11_Anim1_Part02",
    "Feixiao_Feixiao_Ability11_Anim2_Part02",
    "Feixiao_Feixiao_Ability11_Anim3_Part02",
    "Feixiao_Feixiao_Ability11_Anim4_Part02",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Camera",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    5,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(0.6 + 0.3)"
          },
          "variableName": "Skill11_DamagePercentage"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.6"
          },
          "variableName": "Skill11_DamagePercentage"
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"2050569712\">Feixiao_ResetAnimSpeed</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          },
          {
            "name": "Compare: Variable",
            "value1": "ComboType",
            "compareType": "=",
            "value2": 1
          }
        ],
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 3), 4)"
          },
          "variableName": "Combo1_Loop_Index"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Combo1_Loop_Index + 1)"
      },
      "variableName": "Combo1_Loop_Index"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Combo1_Loop_Index",
        "compareType": ">",
        "value2": 4
      },
      "maxLoops": 99,
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Combo1_Loop_Index - 4)"
          },
          "variableName": "Combo1_Loop_Index"
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1125040676\">Feixiao_ComboStartCheck</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          },
          {
            "name": "Compare: Variable",
            "value1": "ComboType",
            "compareType": "=",
            "value2": 2
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": "Active: Fast-Forward Animations",
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CDF_Combo_1_StartFrame",
          "resetValue": 4,
          "scope": "ContextCaster"
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CDF_Combo_1_StartFrame",
          "resetValue": 6,
          "scope": "ContextCaster"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ComboHitCount",
        "compareType": "=",
        "value2": {
          "displayLines": "(6 - 1)"
        }
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_ComboFinish1_Part01",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_ComboFinish1_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim3_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim3_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim4_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim4_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim1_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim1_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim2_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability11_Anim2_Part02",
              "isTrigger": true
            }
          ]
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "ComboType"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "stateFilter": "AliveOrLimbo",
    "filter": {
      "name": "Target Sequence",
      "TargetList": [
        {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        {
          "name": "Target Filter",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
          }
        }
      ]
    }
  }
}