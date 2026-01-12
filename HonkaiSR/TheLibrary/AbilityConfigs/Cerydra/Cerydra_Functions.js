const configAbility = {
  "fileName": "Cerydra_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Cerydra_Template_ReachPromotionEidolon1",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Cerydra's Promotion Target",
          "modifier": "Cerydra_Ability02_Target_Lv1[<span class=\"descriptionNumberColor\">Military Merit</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Cerydra's Promotion Target",
          "modifier": "Cerydra_Ability02_Target_Lv2[<span class=\"descriptionNumberColor\">Peerage</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (PromotionRank_AttackAddedValue) || RETURN",
              "displayLines": "PromotionRank_AttackAddedValue",
              "constants": [],
              "variables": [
                "PromotionRank_AttackAddedValue"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "MDF_PropertyValue3": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Cerydra's Promotion Target",
          "modifier": "Standard_Windfury",
          "valuePerStack": {
            "_ReplayAbility": 1
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (InsertActionCount) || RETURN",
            "displayLines": "InsertActionCount",
            "constants": [],
            "variables": [
              "InsertActionCount"
            ]
          }
        },
        {
          "name": "Reconstruct Modifier",
          "target": "Cerydra's Promotion Target",
          "casterFilter": "Caster",
          "counter": 1,
          "modifier": "Standard_Windfury",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Cerydra's Promotion Target",
              "scope": "ContextCaster",
              "valueType": "Layer",
              "variableName": "InsertActionCount",
              "modifierName": "Standard_Windfury",
              "multiplier": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_DelayReachPromotionRank01_Flag",
          "value": 0
        },
        {
          "name": "Dispel Debuffs",
          "target": "Cerydra's Promotion Target",
          "toRemove": [
            "STAT_CTRL"
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Cerydra_Template_MaxPointHandle",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_CurrentPoint_Temp",
          "value": {
            "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (DV_AddPoint) || ADD || RETURN",
            "displayLines": "(DV_CurrentPoint + DV_AddPoint)",
            "constants": [],
            "variables": [
              "DV_CurrentPoint",
              "DV_AddPoint"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_CurrentPoint_Temp",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (8) || RETURN",
              "displayLines": "8",
              "constants": [],
              "variables": [
                8
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_CurrentPoint",
              "value": {
                "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (DV_AddPoint) || ADD || RETURN",
                "displayLines": "(DV_CurrentPoint + DV_AddPoint)",
                "constants": [],
                "variables": [
                  "DV_CurrentPoint",
                  "DV_AddPoint"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_CurrentPoint",
              "value": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Cerydra_Template_SelfHandle",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Cerydra_Ability02_Target_Lv2[<span class=\"descriptionNumberColor\">Peerage</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_CurrentPoint_Temp_SelfHandle",
              "value": {
                "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (DV_AddPoint) || ADD || RETURN",
                "displayLines": "(DV_CurrentPoint + DV_AddPoint)",
                "constants": [],
                "variables": [
                  "DV_CurrentPoint",
                  "DV_AddPoint"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "DV_CurrentPoint_Temp_SelfHandle",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_DelayReachPromotionRank01_Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CurrentPoint_Temp_SelfHandle",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_DelayReachPromotionRank01_Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CurrentPoint_Temp_SelfHandle",
                  "value": 0
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