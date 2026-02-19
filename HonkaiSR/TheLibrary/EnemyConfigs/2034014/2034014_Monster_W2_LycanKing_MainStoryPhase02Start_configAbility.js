const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_MainStoryPhase02Start",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-211625513\">Enemy_W2_LycanKing_Poison</a>[<span class=\"descriptionNumberColor\">\"Tumbledust\"</span>]",
      "valuePerStack": {
        "MDF_LoseHPRatio": {
          "operator": "Variables[0] (P1_LoseHPRatio) || RETURN",
          "displayLines": "P1_LoseHPRatio",
          "constants": [],
          "variables": [
            "P1_LoseHPRatio"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-211625513\">Enemy_W2_LycanKing_Poison</a>[<span class=\"descriptionNumberColor\">\"Tumbledust\"</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_LoseHPRatio) || RETURN",
                "displayLines": "MDF_LoseHPRatio",
                "constants": [],
                "variables": [
                  "MDF_LoseHPRatio"
                ]
              },
              "consumeFloor": 0.0009999999,
              "attackType": "DOT",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "AllType"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              },
              "failed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHPRatio) || RETURN",
                    "displayLines": "MDF_LoseHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHPRatio"
                    ]
                  },
                  "consumeFloor": 0.0009999999,
                  "attackType": "DOT",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "AllType"
                  }
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_LoseHPRatio"
      ],
      "latentQueue": [],
      "description": "At the start of each turn, consumes <span class=\"descriptionNumberColor\">MDF_LoseHPRatio</span> of this unit's HP.",
      "type": "Debuff",
      "effectName": "\"Tumbledust\"",
      "statusName": "\"Tumbledust\""
    }
  ]
}