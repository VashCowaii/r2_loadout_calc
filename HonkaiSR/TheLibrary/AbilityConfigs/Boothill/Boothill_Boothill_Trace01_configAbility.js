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
      "modifier": "<a class=\"gModGreen\" id=\"-1014140982\">M_Boothill_Trace01</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-314049053\">M_Boothill_Trace01_Sub2</a>",
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
                "displayLines": "MDF_ConvertPropertyRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2136671299\">M_Boothill_Trace01_Sub</a>",
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
                "displayLines": "MDF_ConvertPropertyRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1014140982\">M_Boothill_Trace01</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "CasterBreakDamageAdded",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2136671299\">M_Boothill_Trace01_Sub</a>",
              "valuePerStack": {
                "MDF_ConvertPropertyRatio": {
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.1), 0.3)"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-314049053\">M_Boothill_Trace01_Sub2</a>",
              "valuePerStack": {
                "MDF_ConvertPropertyRatio": {
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.5), 1.5)"
                }
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 999,
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterBreakDamageAdded",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2136671299\">M_Boothill_Trace01_Sub</a>",
                  "valuePerStack": {
                    "MDF_ConvertPropertyRatio": {
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.1), 0.3)"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-314049053\">M_Boothill_Trace01_Sub2</a>",
                  "valuePerStack": {
                    "MDF_ConvertPropertyRatio": {
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.5), 1.5)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}