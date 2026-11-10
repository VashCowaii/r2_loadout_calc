const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0006",
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
      "modifier": "<a class=\"gModGreen\" id=\"-422056480\">Modifier_ChallengePeakBattle_BaseAbility_0006</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__82931580\">Modifier_ChallengePeakBattle_BaseAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish</span>]",
      "stackType": "Replace",
      "description": "Each stack increases DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0006_ADF_2</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Anguish",
      "addStacksPerTrigger": 1,
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
                "displayLines": "(ChallengePeakBattle_0006_ADF_2 * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__99709199\">Modifier_ChallengePeakBattle_BaseAbility_0006_02</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"82931580\">Modifier_ChallengePeakBattle_BaseAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish</span>]",
              "baseChance": {
                "displayLines": "ChallengePeakBattle_0006_ADF_1"
              },
              "stackLimit": {
                "displayLines": "ChallengePeakBattle_0006_ADF_3"
              },
              "valuePerStack": {
                "ChallengePeakBattle_0006_ADF_1": {
                  "displayLines": "ChallengePeakBattle_0006_ADF_1"
                },
                "ChallengePeakBattle_0006_ADF_2": {
                  "displayLines": "ChallengePeakBattle_0006_ADF_2"
                },
                "ChallengePeakBattle_0006_ADF_3": {
                  "displayLines": "ChallengePeakBattle_0006_ADF_3"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-422056480\">Modifier_ChallengePeakBattle_BaseAbility_0006</a>",
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
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
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
                  "modifier": "<a class=\"gModGreen\" id=\"99709199\">Modifier_ChallengePeakBattle_BaseAbility_0006_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0006_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0006_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0006_ADF_3": {
                      "displayLines": "#ADF_3"
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