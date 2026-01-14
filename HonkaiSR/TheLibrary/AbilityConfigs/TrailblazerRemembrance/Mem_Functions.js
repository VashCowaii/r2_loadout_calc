const configAbility = {
  "fileName": "Mem_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "TServant_PlayerBoyServant_30_RefreshDamagePercentage",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_DamagePercentage",
          "value": {
            "operator": "Variables[0] (MDF_BasicDamagePercentage) || RETURN",
            "displayLines": "MDF_BasicDamagePercentage",
            "constants": [],
            "variables": [
              "MDF_BasicDamagePercentage"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB3"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "_maxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_maxSP",
              "value": {
                "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (FLOOR) || Variables[2] (_maxSP) || Variables[3] (MDF_PointB3_P1_Basic) || SUB || Variables[4] (MDF_PointB3_P2_Delta) || DIV || PARAM_1 || FUNCTION || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((_maxSP - MDF_PointB3_P1_Basic) / MDF_PointB3_P2_Delta)))",
                "constants": [
                  0
                ],
                "variables": [
                  "MAX",
                  "FLOOR",
                  "_maxSP",
                  "MDF_PointB3_P1_Basic",
                  "MDF_PointB3_P2_Delta"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": "Owner of this Modifier",
              "variableName": "MDF_DamagePercentage",
              "context": "ContextModifier",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (_maxSP) || Variables[2] (MDF_PointB3_P3_Ratio) || MUL || Variables[3] (MDF_PointB3_P4_Max) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((_maxSP * MDF_PointB3_P3_Ratio), MDF_PointB3_P4_Max)",
                "constants": [],
                "variables": [
                  "MIN",
                  "_maxSP",
                  "MDF_PointB3_P3_Ratio",
                  "MDF_PointB3_P4_Max"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": "Owner of this Modifier",
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_DamagePercentage",
                  "context": "ContextModifier",
                  "value": {
                    "operator": "Variables[0] (MDF_Eidolon4_P2_ExtraDamagePercentage) || RETURN",
                    "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage",
                    "constants": [],
                    "variables": [
                      "MDF_Eidolon4_P2_ExtraDamagePercentage"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}