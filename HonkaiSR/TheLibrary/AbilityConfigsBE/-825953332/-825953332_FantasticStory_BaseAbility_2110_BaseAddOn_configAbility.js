const configAbility = {
  "fileName": "-825953332_FantasticStory_BaseAbility_2110_BaseAddOn",
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
      "variableName": "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio",
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
      "modifier": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DV_TargetCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || MUL || Variables[3] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + ((DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_EnterFeverValue",
                      "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio",
                      "DV_TargetCount"
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_EnterFeverValue) || MUL || Variables[2] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || MUL || RETURN",
                        "displayLines": "((DV_TargetCount * DV_EnterFeverValue) * DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio"
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_EnterFeverValue) || MUL || Variables[2] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || MUL || RETURN",
                        "displayLines": "((DV_TargetCount * DV_EnterFeverValue) * DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio"
                        ]
                      },
                      "type": "FeverSpecial"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": 0
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "DV_Ratio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || Constants[0] (100) || MUL || RETURN",
              "displayLines": "(DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio * 100)",
              "constants": [
                100
              ],
              "variables": [
                "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio"
              ]
            }
          }
        }
      ]
    }
  ]
}