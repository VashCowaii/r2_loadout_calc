const configAbility = {
  "fileName": "Hysilens_Harscyline_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"511580758\">Harscyline_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Overtone Hum: Chorus After Dark Tides</span>]",
      "duration": {
        "displayLines": "3"
      },
      "baseChance": {
        "displayLines": "1"
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "displayLines": "0.2"
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
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "1.4"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}