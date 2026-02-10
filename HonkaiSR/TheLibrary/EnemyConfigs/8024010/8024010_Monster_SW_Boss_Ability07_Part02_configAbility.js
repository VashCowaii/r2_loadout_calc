const configAbility = {
  "fileName": "8024010_Monster_SW_Boss_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
          "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
          "displayLines": "{[Skill06[2]]}",
          "constants": [],
          "variables": [
            "{[Skill06[2]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
        "displayLines": "{[Skill01[3]]}",
        "constants": [],
        "variables": [
          "{[Skill01[3]]}"
        ]
      },
      "baseChance": 1,
      "stackLimit": {
        "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
        "displayLines": "{[Skill01[4]]}",
        "constants": [],
        "variables": [
          "{[Skill01[4]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Poison_DamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
        "displayLines": "{[Skill06[3]]}",
        "constants": [],
        "variables": [
          "{[Skill06[3]]}"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"484655132\">Monster_SW_Boss_Ability05Charge</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}