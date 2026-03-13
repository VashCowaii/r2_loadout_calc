const configAbility = {
  "fileName": "1314726962_FantasticStory_BaseAbility_2210_BaseAddOn",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || Constants[0] (100) || DIV || RETURN",
        "displayLines": "(ADF_1_Get / 100)",
        "constants": [
          100
        ],
        "variables": [
          "ADF_1_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1590210347\">Modifier_FantasticStory_BaseAbility_2210_BaseAddOn</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1590210347\">Modifier_FantasticStory_BaseAbility_2210_BaseAddOn</a>",
      "stackType": "ReplaceByCaster",
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "minValue": 0,
          "maxValue": 999,
          "whenValueChanges": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_EnterFeverValue",
                      "DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio) || MUL || RETURN",
                        "displayLines": "(DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio"
                        ]
                      },
                      "type": "FeverSpecial",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio) || MUL || RETURN",
                        "displayLines": "(DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio"
                        ]
                      },
                      "type": "FeverSpecial"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871573228\">Modifier_FantasticStory_BaseAbility_2210_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "DV_Ratio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio) || Constants[0] (100) || MUL || RETURN",
              "displayLines": "(DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio * 100)",
              "constants": [
                100
              ],
              "variables": [
                "DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio"
              ]
            }
          }
        }
      ]
    }
  ]
}