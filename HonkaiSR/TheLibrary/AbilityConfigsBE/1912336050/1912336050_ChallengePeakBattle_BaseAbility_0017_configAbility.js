const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0017",
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
      "modifier": "<a class=\"gModGreen\" id=\"-136689862\">Modifier_ChallengePeakBattle_BaseAbility_0017</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-920276419\">Modifier_ChallengePeakBattle_BaseAbility_0017_02</a>[<span class=\"descriptionNumberColor\">Stability</span>]",
      "description": "DMG dealt decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0017_ADF_1</span> and DMG received decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0017_ADF_2</span>.",
      "type": "Other",
      "statusName": "Stability",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
              "value": {
                "displayLines": "ChallengePeakBattle_0017_ADF_1"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "displayLines": "ChallengePeakBattle_0017_ADF_2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-136689862\">Modifier_ChallengePeakBattle_BaseAbility_0017</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-920276419\">Modifier_ChallengePeakBattle_BaseAbility_0017_02</a>[<span class=\"descriptionNumberColor\">Stability</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0017_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0017_ADF_2": {
                      "displayLines": "#ADF_2"
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