const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.4,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
        "displayLines": "{[Skill04[4]]}",
        "constants": [],
        "variables": [
          "{[Skill04[4]]}"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]",
      "duration": 1,
      "valuePerStack": {
        "MDF_PropertyValue01": {
          "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
          "displayLines": "{[Skill04[1]]}",
          "constants": [],
          "variables": [
            "{[Skill04[1]]}"
          ]
        },
        "MDF_PropertyValue02": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        },
        "MDF_PropertyValue03": {
          "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
          "displayLines": "{[Skill04[3]]}",
          "constants": [],
          "variables": [
            "{[Skill04[3]]}"
          ]
        },
        "MDF_PropertyValue04": {
          "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
          "displayLines": "{[Skill04[5]]}",
          "constants": [],
          "variables": [
            "{[Skill04[5]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}