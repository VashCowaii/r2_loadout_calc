const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Environment_0001",
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
      "modifier": "<a class=\"gModGreen\" id=\"850232515\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1809743821\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_03</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "-ChallengePeakBattle_Environment_0001_ADF_1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1792966202\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_02</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1809743821\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_03</a>",
              "duration": {
                "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Environment_0001_ADF_2"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_Environment_0001_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_Environment_0001_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Environment_0001_ADF_1"
                  ]
                },
                "ChallengePeakBattle_Environment_0001_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Environment_0001_ADF_2"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1809743821\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_03</a>",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Environment_0001_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_Environment_0001_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Environment_0001_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Environment_0001_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Environment_0001_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Environment_0001_ADF_2"
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
      "for": "<a class=\"gModGreen\" id=\"mod__850232515\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001</a>",
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1792966202\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Environment_0001_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Environment_0001_ADF_2": {
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}