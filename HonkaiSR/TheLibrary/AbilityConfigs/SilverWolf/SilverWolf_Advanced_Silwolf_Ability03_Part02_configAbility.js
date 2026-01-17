const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 8,
      "Event": []
    },
    {
      "name": "Looped Event",
      "maxLoops": 8,
      "Event": []
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Advanced_Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1.2) || RETURN",
        "displayLines": "1.2",
        "constants": [],
        "variables": [
          1.2
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.45) || RETURN",
          "displayLines": "0.45",
          "constants": [],
          "variables": [
            0.45
          ]
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
          "operator": "Variables[0] (3.8) || RETURN",
          "displayLines": "3.8",
          "constants": [],
          "variables": [
            3.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}