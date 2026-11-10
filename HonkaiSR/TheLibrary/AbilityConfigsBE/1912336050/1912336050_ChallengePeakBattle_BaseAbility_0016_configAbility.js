const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0016",
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
      "modifier": "<a class=\"gModGreen\" id=\"-119912243\">Modifier_ChallengePeakBattle_BaseAbility_0016</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-477214451\">Modifier_ChallengePeakBattle_BaseAbility_0016_LowSpeedTag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1529696031\">Modifier_ChallengePeakBattle_BaseAbility_0016_HighSpeedTag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1945821486\">Modifier_ChallengePeakBattle_BaseAbility_0016_04</a>[<span class=\"descriptionNumberColor\">Equilibrium</span>]",
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0016_ADF_4</span>.",
      "type": "Other",
      "statusName": "Equilibrium",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "displayLines": "ChallengePeakBattle_0016_ADF_4"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2029709581\">Modifier_ChallengePeakBattle_BaseAbility_0016_03</a>[<span class=\"descriptionNumberColor\">Equilibrium</span>]",
      "description": "SPD decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0016_ADF_2</span>.",
      "type": "Other",
      "statusName": "Equilibrium",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "displayLines": "-ChallengePeakBattle_0016_ADF_2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2046487200\">Modifier_ChallengePeakBattle_BaseAbility_0016_02</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1529696031\">Modifier_ChallengePeakBattle_BaseAbility_0016_HighSpeedTag</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-477214451\">Modifier_ChallengePeakBattle_BaseAbility_0016_LowSpeedTag</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"1529696031\">Modifier_ChallengePeakBattle_BaseAbility_0016_HighSpeedTag</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2029709581\">Modifier_ChallengePeakBattle_BaseAbility_0016_03</a>[<span class=\"descriptionNumberColor\">Equilibrium</span>]",
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
                "modifier": "<a class=\"gModGreen\" id=\"-477214451\">Modifier_ChallengePeakBattle_BaseAbility_0016_LowSpeedTag</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1945821486\">Modifier_ChallengePeakBattle_BaseAbility_0016_04</a>[<span class=\"descriptionNumberColor\">Equilibrium</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-119912243\">Modifier_ChallengePeakBattle_BaseAbility_0016</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2046487200\">Modifier_ChallengePeakBattle_BaseAbility_0016_02</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}