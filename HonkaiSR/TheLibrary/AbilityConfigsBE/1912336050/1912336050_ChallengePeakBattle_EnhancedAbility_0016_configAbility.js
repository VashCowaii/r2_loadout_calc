const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0016",
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
      "modifier": "<a class=\"gModGreen\" id=\"1615378934\">Modifier_ChallengePeakBattle_EnhancedAbility_0016</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1250137702\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_LowSpeedTag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-617425686\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_HighSpeedTag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-546541489\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_04</a>[<span class=\"descriptionNumberColor\">Equilibrium+</span>]",
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0016_ADF_4</span>.",
      "type": "Other",
      "statusName": "Equilibrium+",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "ChallengePeakBattle_0016_ADF_4"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-596874346\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_03</a>[<span class=\"descriptionNumberColor\">Equilibrium+</span>]",
      "description": "SPD decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0016_ADF_2</span>.",
      "type": "Other",
      "statusName": "Equilibrium+",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0016_ADF_2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-580096727\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]].[[removeBattleEvents]]"
                  },
                  {
                    "name": "Sort by Stat",
                    "statName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "sortByHighest": true,
                    "living": true
                  },
                  {
                    "name": "Return Target",
                    "count": {
                      "displayLines": "#ADF_1"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-617425686\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_HighSpeedTag</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0016_ADF_2": {
                  "displayLines": "#ADF_2"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]].[[removeBattleEvents]]"
                  },
                  {
                    "name": "Sort by Stat",
                    "statName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "living": true
                  },
                  {
                    "name": "Return Target",
                    "count": {
                      "displayLines": "#ADF_3"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1250137702\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_LowSpeedTag</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0016_ADF_4": {
                  "displayLines": "#ADF_4"
                }
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-617425686\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_HighSpeedTag</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-596874346\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_03</a>[<span class=\"descriptionNumberColor\">Equilibrium+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0016_ADF_2": {
                      "displayLines": "#ADF_2"
                    }
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1250137702\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_LowSpeedTag</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-546541489\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_04</a>[<span class=\"descriptionNumberColor\">Equilibrium+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0016_ADF_4": {
                      "displayLines": "#ADF_4"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1615378934\">Modifier_ChallengePeakBattle_EnhancedAbility_0016</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-580096727\">Modifier_ChallengePeakBattle_EnhancedAbility_0016_02</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}