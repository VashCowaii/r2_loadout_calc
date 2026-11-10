const configAbility = {
  "fileName": "Pela_Pela_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"275559829\">Pela_Ultimate_DroneAnalysis</a>[<span class=\"descriptionNumberColor\">Exposed</span>]",
      "duration": {
        "displayLines": "2"
      },
      "baseChance": {
        "displayLines": "1"
      },
      "valuePerStack": {
        "MDF_DefenceDownRatio": {
          "displayLines": "0.4"
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "1"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__275559829\">Pela_Ultimate_DroneAnalysis</a>[<span class=\"descriptionNumberColor\">Exposed</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "stackData": [
        "MDF_DefenceDownRatio"
      ],
      "description": "DEF -<span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Exposed",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "displayLines": "(0 - MDF_DefenceDownRatio)"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}