const configAbility = {
  "fileName": "60001_Colossus_AbilityP01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1478170495\">Colossus_EnterBattlePowerUp</a>",
      "valuePerStack": {
        "MDF_AllDamageReduce": {
          "displayLines": "{[SkillP01[0]]}"
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterID": "8003 (Trailblazer - Preservation[M])"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1077563857\">Colossus_EnterBattlePowerUp_EX</a>",
          "valuePerStack": {
            "MDF_AllDamageAddedRatio": 0.3
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1077563857\">Colossus_EnterBattlePowerUp_EX</a>",
      "stackData": [
        "MDF_AllDamageAddedRatio"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_AllDamageAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1478170495\">Colossus_EnterBattlePowerUp</a>",
      "stackData": [
        "MDF_AllDamageReduce"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_AllDamageReduce"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}