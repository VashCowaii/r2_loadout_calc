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
          "variableName": "Skill11_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.6) || Variables[1] (0.3) || ADD || RETURN",
            "displayLines": "(0.6 + 0.3)",
            "constants": [],
            "variables": [
              0.6,
              0.3
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_ResetAnimSpeed"
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
          "variableName": "Combo1_Loop_Index",
          "value": {
            "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (ComboHitCount) || Constants[0] (3) || ADD || Constants[1] (4) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 3), 4)",
            "constants": [
              3,
              4
            ],
            "variables": [
              "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
              "ComboHitCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Combo1_Loop_Index",
      "value": {
        "operator": "Variables[0] (Combo1_Loop_Index) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Combo1_Loop_Index + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Combo1_Loop_Index"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 99,
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Combo1_Loop_Index",
        "compareType": ">",
        "value2": 4
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "Combo1_Loop_Index",
          "value": {
            "operator": "Variables[0] (Combo1_Loop_Index) || Constants[0] (4) || SUB || RETURN",
            "displayLines": "(Combo1_Loop_Index - 4)",
            "constants": [
              4
            ],
            "variables": [
              "Combo1_Loop_Index"
            ]
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_ComboStartCheck"
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
      "conditions": {
        "name": "Active: Fast-Forward Animations"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "CDF_Combo_1_StartFrame",
          "value": 4
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "CDF_Combo_1_StartFrame",
          "value": 6
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
          "operator": "Variables[0] (6) || Constants[0] (1) || SUB || RETURN",
          "displayLines": "(6 - 1)",
          "constants": [
            1
          ],
          "variables": [
            6
          ]
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
      "variableName": "ComboType",
      "value": 1
    }
  ],
  "references": []
}