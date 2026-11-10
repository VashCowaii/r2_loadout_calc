const configAbility = {
  "fileName": "4064014_Monster_W4_Serpent_01_Ability04_Part03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "displayLines": "{[Skill05[1]]}"
        },
        "MDF_Rally_HealPercentage": {
          "displayLines": "{[Skill05[2]]}"
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "displayLines": "{[Skill05[3]]}"
        }
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
          "displayLines": "{[Skill04[0]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Projectile's Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>",
          "valuePerStack": {
            "MDF_StanceDamage": {
              "displayLines": "{[Skill04[1]]}"
            }
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}