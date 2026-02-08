const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0002",
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
      "modifier": "<a class=\"gModGreen\" id=\"-354946004\">Modifier_ChallengePeakBattle_BaseAbility_0002</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__872000024\">Modifier_ChallengePeakBattle_BaseAbility_0002_03</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": "(-LoseHPPercentage * ChallengePeakBattle_0002_ADF_1)"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LoseHPPercentage"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LoseHPPercentage",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (LoseHPPercentage) || SUB || RETURN",
                "displayLines": "(1 - LoseHPPercentage)",
                "constants": [
                  1
                ],
                "variables": [
                  "LoseHPPercentage"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LoseHPPercentage",
              "value": {
                "operator": "Variables[0] (LoseHPPercentage) || Constants[0] (100) || MUL || RETURN",
                "displayLines": "(LoseHPPercentage * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "LoseHPPercentage"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__888777643\">Modifier_ChallengePeakBattle_BaseAbility_0002_02</a>[<span class=\"descriptionNumberColor\">Tempering</span>]",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"872000024\">Modifier_ChallengePeakBattle_BaseAbility_0002_03</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0002_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0002_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0002_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0002_ADF_1"
                  ]
                }
              }
            }
          ]
        }
      ],
      "description": "For every 1% HP lost, reduces CRIT DMG dealt by allies by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0002_ADF_1</span>.",
      "type": "Other",
      "statusName": "Tempering"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-354946004\">Modifier_ChallengePeakBattle_BaseAbility_0002</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"888777643\">Modifier_ChallengePeakBattle_BaseAbility_0002_02</a>[<span class=\"descriptionNumberColor\">Tempering</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0002_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
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