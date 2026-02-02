const configAbility = {
  "fileName": "Saber_Functions",
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
      "functionName": "function_Saber_SurgeCheck",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_SurgePointShow",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_SP_R",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_C_SP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "Update UI Preview",
          "show": "Show",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "previewType": "Energy Gain",
          "previewValue": {
            "operator": "Variables[0] (8) || Variables[1] (DV_SurgePointShow) || MUL || Constants[0] (30) || Variables[2] (_SP_R) || MUL || ADD || RETURN",
            "displayLines": "((8 * DV_SurgePointShow) + (30 * _SP_R))",
            "constants": [
              30
            ],
            "variables": [
              8,
              "DV_SurgePointShow",
              "_SP_R"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "_MaxSP",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                  "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                  "constants": [
                    30
                  ],
                  "variables": [
                    "_C_SP",
                    8,
                    "DV_SurgePointShow",
                    "_SP_R"
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": 0,
                      "adjustmentType": "="
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_Ability03_CD_02"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": "<=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Saber_Wind_Ability03_buff"
              },
              {
                "name": "Compare: Variable",
                "value1": "_MaxSP",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                  "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                  "constants": [
                    30
                  ],
                  "variables": [
                    "_C_SP",
                    8,
                    "DV_SurgePointShow",
                    "_SP_R"
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            }
          ],
          "failed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Skill"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}