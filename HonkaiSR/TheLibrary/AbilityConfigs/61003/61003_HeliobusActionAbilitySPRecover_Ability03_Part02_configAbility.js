const configAbility = {
  "fileName": "61003_HeliobusActionAbilitySPRecover_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Amulet: Coreflow Supreme"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "popUpText": "Energy Obtained"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valuePercent": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__325476542\">Modifier_HeliobusActionAbilitySPRecover_DamageUp</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "#BattleEvent_P2_ADF"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
      "description": "DMG dealt by the next Ultimate increases by <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Ultimate DMG Boost",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"325476542\">Modifier_HeliobusActionAbilitySPRecover_DamageUp</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"325476542\">Modifier_HeliobusActionAbilitySPRecover_DamageUp</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  }
}