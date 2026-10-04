const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0023",
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
      "modifier": "<a class=\"gModGreen\" id=\"1674748537\">Modifier_ChallengePeakBattle_BaseAbility_0023</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-161349092\">Modifier_ChallengePeakBattle_BaseAbility_0023_02</a>[<span class=\"descriptionNumberColor\">Perforation</span>]",
      "description": "When attacking, if the attacked ally target has a Shield, increases DMG dealt by this attack by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0023_ADF_1</span>.",
      "type": "Other",
      "statusName": "Perforation",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "ChallengePeakBattle_0023_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1674748537\">Modifier_ChallengePeakBattle_BaseAbility_0023</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-161349092\">Modifier_ChallengePeakBattle_BaseAbility_0023_02</a>[<span class=\"descriptionNumberColor\">Perforation</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0023_ADF_1": {
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
      ]
    }
  ]
}