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
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_056"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_PLY_056[<span class=\"descriptionNumberColor\">Bold Leader</span>]",
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
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Bold Leader"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_056",
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
                  "variableName": "_bpChangeTotal",
                  "value": {
                    "operator": "Variables[0] (ABS) || Variables[1] (_bpChange) || PARAM_1 || FUNCTION || Variables[2] (_bpChangeTotal) || ADD || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(_bpChange) + _bpChangeTotal)",
                    "constants": [],
                    "variables": [
                      "ABS",
                      "_bpChange",
                      "_bpChangeTotal"
                    ]
                  }
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
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "BPRecoverValue",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (_bpChangeTotal) || Variables[2] (#ADF_2) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_bpChangeTotal / #ADF_2))",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "_bpChangeTotal",
                          "#ADF_2"
                        ]
                      }
                    },
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (BPRecoverValue) || RETURN",
                        "displayLines": "BPRecoverValue",
                        "constants": [],
                        "variables": [
                          "BPRecoverValue"
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_bpChangeTotal",
                      "value": {
                        "operator": "Variables[0] (_bpChangeTotal) || Variables[1] (#ADF_2) || MOD || RETURN",
                        "displayLines": "(_bpChangeTotal % #ADF_2)",
                        "constants": [],
                        "variables": [
                          "_bpChangeTotal",
                          "#ADF_2"
                        ]
                      }
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
              "modifier": "MStrongChallengeEX_Talent_StageAbility_PLY_056[<span class=\"descriptionNumberColor\">Bold Leader</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}