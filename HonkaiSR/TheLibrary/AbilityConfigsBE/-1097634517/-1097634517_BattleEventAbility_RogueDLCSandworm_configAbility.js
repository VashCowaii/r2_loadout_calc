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
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "BattleEventAbility_RogueDLCSandworm_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "priorityTag": "EnemyAttackFromSelf",
              "canHitNonTargets": true,
              "valuePerStack": {
                "Chance": {
                  "displayLines": "#ADF_1"
                },
                "LifeTime": {
                  "displayLines": "#ADF_2"
                },
                "ExtraDamagePercentage": {
                  "displayLines": "#ADF_3"
                },
                "DamagePercentage": {
                  "displayLines": "#ADF_5"
                },
                "BleedPercent": {
                  "displayLines": "#ADF_6"
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
      ]
    }
  ]
}