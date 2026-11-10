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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-763533094\">TServant_PlayerBoyServant_30_RefreshDamagePercentage</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "MDF_BasicDamagePercentage"
          },
          "variableName": "MDF_DamagePercentage"
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
              "variableName": "_maxSP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((_maxSP - MDF_PointB3_P1_Basic) / MDF_PointB3_P2_Delta)))"
              },
              "variableName": "_maxSP"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_DamagePercentage",
              "context": "ContextModifier",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((_maxSP * MDF_PointB3_P3_Ratio), MDF_PointB3_P4_Max)"
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DamagePercentage",
                  "context": "ContextModifier",
                  "value": {
                    "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage"
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