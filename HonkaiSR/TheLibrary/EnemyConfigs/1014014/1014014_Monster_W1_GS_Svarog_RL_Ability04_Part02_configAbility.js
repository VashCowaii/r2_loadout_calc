const configAbility = {
  "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
            "displayLines": "{[Skill04[0]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"864989347\">Monster_W1_Svarog_RL_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "duration": {
        "displayLines": "{[Skill04[2]]}"
      },
      "baseChance": 1,
      "valuePerStack": {
        "MDF_DefenceAddedRatio_PerLayer": {
          "displayLines": "{[Skill04[1]]}"
        }
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}