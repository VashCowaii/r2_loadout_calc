const configAbility = {
  "fileName": "3003011_Monster_W3_Dinosaur_ActivityTelevision_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.3,
        "Toughness": null,
        "Tags": null,
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.5,
        "Toughness": null,
        "Tags": null,
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
      "modifier": "<a class=\"gModGreen\" id=\"-1761981801\">MModifier_Monster_W3_Dinosaur_SpeedDownRatio</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "duration": {
        "displayLines": "{[PassiveSkillInitiate[3]]}"
      },
      "baseChance": {
        "displayLines": "{[PassiveSkillInitiate[1]]}"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "{[PassiveSkillInitiate[2]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
      "valuePerStack": {
        "MDF_MaxCount": {
          "displayLines": "{[Skill05[0]]}"
        },
        "MDF_PartFlag": 1
      }
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": {
        "displayLines": "{[Skill05[4]]}"
      },
      "adjustmentType": "="
    },
    {
      "name": "Define Custom Variable",
      "value": 8,
      "variableName": "AIFlag"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}