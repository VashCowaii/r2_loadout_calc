const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 6,
      "Event": []
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
      "counter": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
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
          "operator": "Variables[0] (0.25) || RETURN",
          "displayLines": "0.25",
          "constants": [],
          "variables": [
            0.25
          ]
        },
        "MDF_ResistanceDown": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        },
        "MDF_Count": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "SecondLayer": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "ThirdLayer": {
          "operator": "Variables[0] (7) || RETURN",
          "displayLines": "7",
          "constants": [],
          "variables": [
            7
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (1.2) || RETURN",
          "displayLines": "1.2",
          "constants": [],
          "variables": [
            1.2
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