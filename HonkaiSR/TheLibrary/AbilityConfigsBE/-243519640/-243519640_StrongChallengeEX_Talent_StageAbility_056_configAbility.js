const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_056",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-417916031\">MStrongChallengeEX_Talent_StageAbility_LE_056</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1107420759\">MStrongChallengeEX_Talent_StageAbility_PLY_056</a>[<span class=\"descriptionNumberColor\">Bold Leader</span>]",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Bold Leader",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "displayLines": "MDF_AllDamageTypeAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-417916031\">MStrongChallengeEX_Talent_StageAbility_LE_056</a>",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_bpChange",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(_bpChange) + _bpChangeTotal)"
                  },
                  "variableName": "_bpChangeTotal"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_bpChangeTotal",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "#ADF_2"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_bpChangeTotal / #ADF_2))"
                      },
                      "variableName": "BPRecoverValue"
                    },
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "displayLines": "BPRecoverValue"
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(_bpChangeTotal % #ADF_2)"
                      },
                      "variableName": "_bpChangeTotal"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1107420759\">MStrongChallengeEX_Talent_StageAbility_PLY_056</a>[<span class=\"descriptionNumberColor\">Bold Leader</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeAddedRatio": {
                  "displayLines": "#ADF_1"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}