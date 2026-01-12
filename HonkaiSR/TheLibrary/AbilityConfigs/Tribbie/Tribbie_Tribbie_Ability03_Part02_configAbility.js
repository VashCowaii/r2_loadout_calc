const configAbility = {
  "fileName": "Tribbie_Tribbie_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Allied Team(ALL) [Exclude Owner and battle mechanics, NO Memosprites]",
      "modifier": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Tribbie_SKL03_Bonus[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "MDF_PropertyValue2": {
          "operator": "Variables[0] (MDF_PursuedDamage) || RETURN",
          "displayLines": "MDF_PursuedDamage",
          "constants": [],
          "variables": [
            "MDF_PursuedDamage"
          ]
        },
        "MDF_PointB2_Value": {
          "operator": "Variables[0] (0.09) || RETURN",
          "displayLines": "0.09",
          "constants": [],
          "variables": [
            0.09
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "All Hostile Entities (AOE)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}