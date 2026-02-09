const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCSandworm",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Battle Event",
      "teamName": "Neutral Team",
      "dmgCountsForTeam": "Enemy Team",
      "eventID": 43003,
      "variables": null,
      "whenCreated": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1704164735\">MDF_RogueDLCSandworm</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1651606625\">MDF_RogueDLCAchievementListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-798051810\">MLevel_BattleEventAbility_RogueMuteAll</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1704164735\">MDF_RogueDLCSandworm</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "BattleEventAbility_RogueDLCSandworm_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "canHitNonTargets": true,
              "valuePerStack": {
                "value_0_DamagePercentage": {
                  "operator": "Variables[0] (#ADF_5) || RETURN",
                  "displayLines": "#ADF_5",
                  "constants": [],
                  "variables": [
                    "#ADF_5"
                  ]
                },
                "Chance": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "LifeTime": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ExtraDamagePercentage": {
                  "operator": "Variables[0] (#ADF_3) || RETURN",
                  "displayLines": "#ADF_3",
                  "constants": [],
                  "variables": [
                    "#ADF_3"
                  ]
                },
                "BleedPercent": {
                  "operator": "Variables[0] (#ADF_6) || RETURN",
                  "displayLines": "#ADF_6",
                  "constants": [],
                  "variables": [
                    "#ADF_6"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "(-1 * #ADF_4)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}