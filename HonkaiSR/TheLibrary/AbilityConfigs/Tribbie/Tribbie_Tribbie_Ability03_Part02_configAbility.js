const configAbility = {
  "fileName": "Tribbie_Tribbie_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]] - {{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1724674064\">Tribbie_CanTriggerInsertTag</a>[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1351986018\">Tribbie_SKL03_Bonus</a>[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
      "duration": {
        "displayLines": "2"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.3"
        },
        "MDF_PropertyValue2": {
          "displayLines": "MDF_PursuedDamage"
        },
        "MDF_PointB2_Value": {
          "displayLines": "0.09"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "0.3"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  }
}