const configAbility = {
  "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
      "duration": {
        "displayLines": "{[PassiveSkill01[1]]}"
      },
      "baseChance": {
        "displayLines": "{[PassiveSkill01[0]]}"
      },
      "valuePerStack": {
        "Modifier_Burn_DamagePercentage": {
          "displayLines": "{[PassiveSkill01[2]]}"
        }
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "onlyRemoveOwnersInstance": true
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}