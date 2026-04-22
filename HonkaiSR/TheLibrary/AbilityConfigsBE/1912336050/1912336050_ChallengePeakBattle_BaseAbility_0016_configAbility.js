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
                "operator": "Variables[0] (ChallengePeakBattle_0016_ADF_4) || RETURN",
                "displayLines": "ChallengePeakBattle_0016_ADF_4",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0016_ADF_4"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0016_ADF_4</span>.",
      "type": "Other",
      "statusName": "Equilibrium"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2029709581\">Modifier_ChallengePeakBattle_BaseAbility_0016_03</a>[<span class=\"descriptionNumberColor\">Equilibrium</span>]",
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
                "operator": "Variables[0] (ChallengePeakBattle_0016_ADF_2) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0016_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0016_ADF_2"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0016_ADF_2</span>.",
      "type": "Other",
      "statusName": "Equilibrium"
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
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]].[[removeBattleEvents]]"
                  },
                  {
                    "name": "Sort by Stat",
                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "living": true,
                    "sortByHighest": true
                  },
                  {
                    "name": "Return Target",
                    "value": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1529696031\">Modifier_ChallengePeakBattle_BaseAbility_0016_HighSpeedTag</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0016_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]].[[removeBattleEvents]]"
                  },
                  {
                    "name": "Sort by Stat",
                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "living": true
                  },
                  {
                    "name": "Return Target",
                    "value": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-477214451\">Modifier_ChallengePeakBattle_BaseAbility_0016_LowSpeedTag</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0016_ADF_4": {
                  "operator": "Variables[0] (#ADF_4) || RETURN",
                  "displayLines": "#ADF_4",
                  "constants": [],
                  "variables": [
                    "#ADF_4"
                  ]
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
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
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
                      "operator": "Variables[0] (#ADF_4) || RETURN",
                      "displayLines": "#ADF_4",
                      "constants": [],
                      "variables": [
                        "#ADF_4"
                      ]
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
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2046487200\">Modifier_ChallengePeakBattle_BaseAbility_0016_02</a>"
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}