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
      "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0002"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0002_03",
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
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0002_02[<span class=\"descriptionNumberColor\">Tempering</span>]",
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
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0002_03",
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
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0002",
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0002_02[<span class=\"descriptionNumberColor\">Tempering</span>]",
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