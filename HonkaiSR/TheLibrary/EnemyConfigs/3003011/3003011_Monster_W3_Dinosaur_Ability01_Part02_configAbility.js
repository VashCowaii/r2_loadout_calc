const configAbility = {
  "fileName": "3003011_Monster_W3_Dinosaur_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
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
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1761981801\">MModifier_Monster_W3_Dinosaur_SpeedDownRatio</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "duration": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[3]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[3]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[2]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}