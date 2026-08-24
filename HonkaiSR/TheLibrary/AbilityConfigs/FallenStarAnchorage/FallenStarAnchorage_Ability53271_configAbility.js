const configAbility = {
  "fileName": "FallenStarAnchorage_Ability53271",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1127816050\">Relic_327_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__510034663\">Relic_327_Sub</a>[<span class=\"descriptionNumberColor\">Fallen Star Anchorage</span>]",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_327_2_P2_CriticalDamage</span>.",
      "type": "Buff",
      "statusName": "Fallen Star Anchorage",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.32) || RETURN",
                "displayLines": "0.32",
                "constants": [],
                "variables": [
                  0.32
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1127816050\">Relic_327_Main</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Group",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "group": "AstralExpress"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}} - {{Modifier Holder}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Is Part Of Group",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "group": "AstralExpress"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"510034663\">Relic_327_Sub</a>[<span class=\"descriptionNumberColor\">Fallen Star Anchorage</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ]
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases the wearer's CRIT Rate by 8%. When entering combat, if the wearer and another teammate are both Trailblaze Companions characters, increases the wearer's CRIT DMG by 32%."
  ],
  "params": [
    [
      0.08,
      0.32
    ],
    []
  ]
}