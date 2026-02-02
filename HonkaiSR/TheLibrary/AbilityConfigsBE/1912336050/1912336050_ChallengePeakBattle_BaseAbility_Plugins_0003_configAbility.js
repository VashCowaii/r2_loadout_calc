const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0003",
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
      "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03[<span class=\"descriptionNumberColor\">Hammer and Anvil</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0003_ADF_1"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0003_ADF_2"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0003_ADF_1</span> and All-Type RES PEN increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0003_ADF_2</span>.",
      "type": "Other",
      "statusName": "Hammer and Anvil"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_02",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03[<span class=\"descriptionNumberColor\">Hammer and Anvil</span>]",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0003_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0003_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0003_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0003_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0003_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0003_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0003_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "Shield"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03[<span class=\"descriptionNumberColor\">Hammer and Anvil</span>]",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0003_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0003_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0003_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0003_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0003_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0003_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0003_ADF_3"
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
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_02",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0003_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0003_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0003_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
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