const configAbility = {
  "fileName": "Sampo_Sampo_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "(1.6 * 0.25)"
            },
            "Toughness": {
              "displayLines": "(AOE Toughness Value * 0.25)"
            },
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2131103330\">Sampo_Ultimate_DOTTakenUp</a>[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
      "duration": {
        "displayLines": "2"
      },
      "baseChance": {
        "displayLines": "1"
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.3"
        }
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}