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
      "variableName": "DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio",
      "resetValue": {
        "displayLines": "(ADF_1_Get / 100)"
      },
      "scope": "ContextCaster"
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
              "displayLines": "(DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio * 100)"
            }
          }
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "minValue": 0,
          "maxValue": 999,
          "onChange": [
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
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio))"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "DV_EnterFeverValue"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "displayLines": "(DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio)"
                      },
                      "type": "FeverSpecial",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                      },
                      "max": {
                        "displayLines": "DV_EnterFeverValue"
                      },
                      "delta": {
                        "displayLines": "(DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2210_BaseAddOn_P1_Ratio)"
                      },
                      "type": "FeverSpecial"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}