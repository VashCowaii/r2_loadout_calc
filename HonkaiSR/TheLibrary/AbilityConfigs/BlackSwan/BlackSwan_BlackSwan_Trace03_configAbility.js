const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Trace03",
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
      "modifier": "M_BlackSwan_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Trace03_Sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_PropertyRatio",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyRatio",
                  "value": {
                    "operator": "Variables[0] (0.72) || RETURN",
                    "displayLines": "0.72",
                    "constants": [],
                    "variables": [
                      0.72
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Trace03",
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
              "variableName": "CasterStatusProbability",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "M_BlackSwan_Trace03_Sub",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (CasterStatusProbability) || Variables[1] (0.6) || MUL || RETURN",
                  "displayLines": "(CasterStatusProbability * 0.6)",
                  "constants": [],
                  "variables": [
                    "CasterStatusProbability",
                    0.6
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
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
                  "variableName": "CasterStatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_BlackSwan_Trace03_Sub",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (CasterStatusProbability) || Variables[1] (0.6) || MUL || RETURN",
                      "displayLines": "(CasterStatusProbability * 0.6)",
                      "constants": [],
                      "variables": [
                        "CasterStatusProbability",
                        0.6
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