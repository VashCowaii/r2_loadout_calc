const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0014",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2066807726\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0014</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2102222782\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0014_03</a>[<span class=\"descriptionNumberColor\">Add Insult to Injury</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0014_ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_Plugins_0014_ADF_1 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0014_ADF_1",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0014_ADF_1</span>. This effect can stack up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0014_ADF_3</span> time(s).",
      "type": "Other",
      "statusName": "Add Insult to Injury",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2085445163\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0014_02</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Anyone]: Any",
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
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertMark",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InsertMark",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_InsertMark",
                    "compareType": "=",
                    "value2": 1
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2102222782\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0014_03</a>[<span class=\"descriptionNumberColor\">Add Insult to Injury</span>]",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0014_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0014_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0014_ADF_2"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0014_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0014_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0014_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0014_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0014_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0014_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0014_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0014_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0014_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0014_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0014_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0014_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0014_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0014_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0014_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InsertMark",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2066807726\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0014</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2085445163\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0014_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0014_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0014_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0014_ADF_3": {
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