const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0010",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2133918202\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1130750663\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010_02</a>[<span class=\"descriptionNumberColor\">Elation Instant</span>]",
      "stackType": "Replace",
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Other",
      "statusName": "Elation Instant",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1130750663\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010_02</a>[<span class=\"descriptionNumberColor\">Elation Instant</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1130750663\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010_02</a>[<span class=\"descriptionNumberColor\">Elation Instant</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1130750663\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010_02</a>[<span class=\"descriptionNumberColor\">Elation Instant</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
                },
                "MDF_PropertyValue2": {
                  "displayLines": "MDF_PropertyValue2"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "entityType": "Memosprite"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1130750663\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010_02</a>[<span class=\"descriptionNumberColor\">Elation Instant</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_PropertyValue"
                    },
                    "MDF_PropertyValue2": {
                      "displayLines": "MDF_PropertyValue2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2133918202\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Battle Event",
              "teamName": "Neutral Team",
              "eventID": 30505,
              "variables": {
                "Ability01_P1_HitCount": {
                  "displayLines": "#ADF_1"
                },
                "Ability01_P2_DamagePercentage": {
                  "displayLines": "#ADF_2"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "entityType": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1130750663\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0010_02</a>[<span class=\"descriptionNumberColor\">Elation Instant</span>]",
                  "duration": {
                    "displayLines": "#ADF_4"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "#ADF_3"
                    },
                    "MDF_PropertyValue2": {
                      "displayLines": "#ADF_4"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}