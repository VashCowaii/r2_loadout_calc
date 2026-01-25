const configAbility = {
  "fileName": "Boothill_Boothill_Trace01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Boothill_Trace01"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_Trace01_Sub2",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ConvertPropertyRatio) || RETURN",
                "displayLines": "MDF_ConvertPropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_ConvertPropertyRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_Trace01_Sub",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ConvertPropertyRatio) || RETURN",
                "displayLines": "MDF_ConvertPropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_ConvertPropertyRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_Trace01",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterBreakDamageAdded",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "M_Boothill_Trace01_Sub",
              "valuePerStack": {
                "MDF_ConvertPropertyRatio": {
                  "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.3) || PARAM_2 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.1), 0.3)",
                  "constants": [],
                  "variables": [
                    "MIN",
                    "CasterBreakDamageAdded",
                    0.1,
                    0.3
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "M_Boothill_Trace01_Sub2",
              "valuePerStack": {
                "MDF_ConvertPropertyRatio": {
                  "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.5) || MUL || Variables[3] (1.5) || PARAM_2 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.5), 1.5)",
                  "constants": [],
                  "variables": [
                    "MIN",
                    "CasterBreakDamageAdded",
                    0.5,
                    1.5
                  ]
                }
              }
            }
          ],
          "priorityLevel": -80
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 999,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBreakDamageAdded",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_Boothill_Trace01_Sub",
                  "valuePerStack": {
                    "MDF_ConvertPropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.3) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.1), 0.3)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "CasterBreakDamageAdded",
                        0.1,
                        0.3
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_Boothill_Trace01_Sub2",
                  "valuePerStack": {
                    "MDF_ConvertPropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.5) || MUL || Variables[3] (1.5) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.5), 1.5)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "CasterBreakDamageAdded",
                        0.5,
                        1.5
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}