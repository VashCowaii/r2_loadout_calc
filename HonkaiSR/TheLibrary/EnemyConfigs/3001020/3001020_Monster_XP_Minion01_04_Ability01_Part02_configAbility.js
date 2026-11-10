const configAbility = {
  "fileName": "3001020_Monster_XP_Minion01_04_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill01[0]]} / 2)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "({[Skill01[0]]} / 2)"
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "duration": {
        "displayLines": "{[Skill01[3]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill01[1]]}"
      },
      "valuePerStack": {
        "Modifier_Tear_DamageRatio": {
          "displayLines": "{[Skill01[2]]}"
        },
        "Modifier_Tear_MaxPercentage": 5
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}