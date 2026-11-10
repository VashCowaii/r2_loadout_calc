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
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
              "variableName": "LoseHPPercentage",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "(1 - LoseHPPercentage)"
              },
              "variableName": "LoseHPPercentage"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "(LoseHPPercentage * 100)"
              },
              "variableName": "LoseHPPercentage"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__888777643\">Modifier_ChallengePeakBattle_BaseAbility_0002_02</a>[<span class=\"descriptionNumberColor\">Tempering</span>]",
      "description": "For every 1% HP lost, reduces CRIT DMG dealt by allies by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0002_ADF_1</span>.",
      "type": "Other",
      "statusName": "Tempering",
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
                  "displayLines": "ChallengePeakBattle_0002_ADF_1"
                }
              }
            }
          ]
        }
      ]
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
                      "displayLines": "#ADF_1"
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