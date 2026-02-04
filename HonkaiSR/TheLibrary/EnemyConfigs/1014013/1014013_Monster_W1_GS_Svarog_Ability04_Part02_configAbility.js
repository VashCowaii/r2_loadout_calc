const configAbility = {
  "fileName": "1014013_Monster_W1_GS_Svarog_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 101401010,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Svarog"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_GS_Svarog_Level_SpecialWin"
        }
      ]
    },
    {
      "name": "Shot Fired",
      "caster": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "projectileCountTotal": 12,
      "projectileDMG": {
        "name": "ATK Scaling DMG",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "AttackScaling": {
          "DamageType": "Physical",
          "Damage": {
            "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
            "displayLines": "{[Skill04[0]]}",
            "constants": [],
            "variables": [
              "{[Skill04[0]]}"
            ]
          },
          "Toughness": null,
          "Tags": null,
          "attackType": "Basic ATK",
          "EnergyGainPercent": "100%"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Standard_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
        "displayLines": "{[Skill04[2]]}",
        "constants": [],
        "variables": [
          "{[Skill04[2]]}"
        ]
      },
      "baseChance": 1,
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
          "displayLines": "{[Skill04[1]]}",
          "constants": [],
          "variables": [
            "{[Skill04[1]]}"
          ]
        }
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}