const configAbility = {
  "fileName": "Cerydra_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 3,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1336664335\">Cerydra_Template_ReachPromotionEidolon1</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Cerydra's Promotion Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Cerydra's Promotion Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "PromotionRank_AttackAddedValue"
            },
            "MDF_PropertyValue2": {
              "displayLines": "0.72"
            },
            "MDF_PropertyValue3": {
              "displayLines": "0.1"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Cerydra's Promotion Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
          "valuePerStack": {
            "_ReplayAbility": 1
          },
          "addStacksPerTrigger": {
            "displayLines": "InsertActionCount"
          }
        },
        {
          "name": "Reconstruct Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Cerydra's Promotion Target}}"
          },
          "casterFilter": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "counter": 1,
          "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "scope": "ContextCaster",
              "valueType": "Layer",
              "variableName": "InsertActionCount",
              "modifierName": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
              "multiplier": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_DelayReachPromotionRank01_Flag"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Cerydra's Promotion Target}}"
          },
          "toRemove": [
            "STAT_CTRL"
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1612575312\">Cerydra_Template_MaxPointHandle</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(DV_CurrentPoint + DV_AddPoint)"
          },
          "variableName": "DV_CurrentPoint_Temp"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_CurrentPoint_Temp",
            "compareType": "<=",
            "value2": {
              "displayLines": "8"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_CurrentPoint + DV_AddPoint)"
              },
              "variableName": "DV_CurrentPoint"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "8"
              },
              "variableName": "DV_CurrentPoint"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1940085870\">Cerydra_Template_SelfHandle</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_CurrentPoint + DV_AddPoint)"
              },
              "variableName": "DV_CurrentPoint_Temp_SelfHandle"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DV_CurrentPoint_Temp_SelfHandle",
                "compareType": ">=",
                "value2": {
                  "displayLines": "6"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DV_DelayReachPromotionRank01_Flag"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_CurrentPoint_Temp_SelfHandle"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_DelayReachPromotionRank01_Flag"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_CurrentPoint_Temp_SelfHandle"
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