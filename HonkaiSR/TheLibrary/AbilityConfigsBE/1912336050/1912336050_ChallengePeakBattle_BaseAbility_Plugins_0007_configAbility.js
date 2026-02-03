const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0007",
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
      "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_04[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0007_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0007_ADF_1</span>.",
      "type": "Other",
      "statusName": "No Break No Rise"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_03[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "(MDF_Layer * ChallengePeakBattle_Plugins_0007_ADF_2)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            }
          ]
        }
      ],
      "description": "Each stack increases the Break DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0007_ADF_2</span>. This effect can stack up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0007_ADF_3</span> time(s).",
      "type": "Other",
      "statusName": "No Break No Rise",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_02",
      "execute": [
        {
          "eventTrigger": "Being Toughness Bar Reset [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_03[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0007_ADF_3"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0007_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0007_ADF_1"
                  ]
                },
                "ChallengePeakBattle_Plugins_0007_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0007_ADF_2"
                  ]
                },
                "ChallengePeakBattle_Plugins_0007_ADF_3": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_3) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_3",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0007_ADF_3"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007",
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
                    "team": "Enemy Team"
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_02",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0007_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0007_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0007_ADF_3": {
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
            },
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_04[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0007_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0007_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0007_ADF_3": {
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