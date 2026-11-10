const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 6
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"488421404\">BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
      "counter": {
        "displayLines": "1"
      },
      "duration": {
        "displayLines": "2"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.25"
        },
        "MDF_ResistanceDown": {
          "displayLines": "0.1"
        },
        "MDF_Count": {
          "displayLines": "1"
        },
        "SecondLayer": {
          "displayLines": "3"
        },
        "ThirdLayer": {
          "displayLines": "7"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "1.2"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}