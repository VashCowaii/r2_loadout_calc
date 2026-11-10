const configAbility = {
  "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part02",
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
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "({[Skill08[0]]} * 0.2)"
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "({[Skill08[0]]} * 0.8)"
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "80%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "duration": 2,
      "baseChance": 1,
      "stackLimit": {
        "displayLines": "{[Skill06[3]]}"
      },
      "valuePerStack": {
        "Modifier_Bleed_DamagePercentage": {
          "displayLines": "{[Skill06[1]]}"
        },
        "MDF_MaxLayer": {
          "displayLines": "{[Skill06[3]]}"
        }
      },
      "addStacksPerTrigger": {
        "displayLines": "{[Skill08[1]]}"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}