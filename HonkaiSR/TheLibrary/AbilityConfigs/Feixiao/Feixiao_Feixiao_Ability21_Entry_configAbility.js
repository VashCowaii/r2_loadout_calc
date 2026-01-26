const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability21_Entry",
  "childAbilityList": [
    "Feixiao_Feixiao_Ability21_Entry",
    "Feixiao_Feixiao_Ability21_Camera_1",
    "Feixiao_Feixiao_Ability21_Camera_2",
    "Feixiao_Feixiao_Ability21_Anim1_Part01",
    "Feixiao_Feixiao_Ability21_Anim2_Part01",
    "Feixiao_Feixiao_Ability21_Anim1_Part02",
    "Feixiao_Feixiao_Ability21_Anim2_Part02",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Camera",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part02"
  ],
  "skillTrigger": "Skill21",
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
          "variableName": "Skill21_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill21_DamagePercentage",
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
            "value2": 2
          }
        ],
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Combo2_Loop_Index",
          "value": {
            "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (ComboHitCount) || Constants[0] (1) || ADD || Constants[1] (2) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 1), 2)",
            "constants": [
              1,
              2
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
      "variableName": "Combo2_Loop_Index",
      "value": {
        "operator": "Variables[0] (Combo2_Loop_Index) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Combo2_Loop_Index + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Combo2_Loop_Index"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 99,
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Combo2_Loop_Index",
        "compareType": ">",
        "value2": 2
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "Combo2_Loop_Index",
          "value": {
            "operator": "Variables[0] (Combo2_Loop_Index) || Constants[0] (2) || SUB || RETURN",
            "displayLines": "(Combo2_Loop_Index - 2)",
            "constants": [
              2
            ],
            "variables": [
              "Combo2_Loop_Index"
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
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "="
          },
          {
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
            ]
          }
        ]
      },
      "passed": [
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
              "variableName": "CDF_Combo_2_StartFrame",
              "value": 12
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
              "variableName": "CDF_Combo_2_StartFrame",
              "value": 12
            }
          ]
        }
      ],
      "failed": [
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
              "variableName": "CDF_Combo_2_StartFrame",
              "value": 6
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
              "variableName": "CDF_Combo_2_StartFrame",
              "value": 6
            }
          ]
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
          "ability": "Feixiao_Ability03_ComboFinish2_Part01",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_ComboFinish2_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo2_Loop_Index",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability21_Anim1_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability21_Anim1_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability21_Anim2_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability21_Anim2_Part02",
              "isTrigger": true
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "ComboType",
      "value": 2
    }
  ],
  "references": []
}