const configAbility = {
  "fileName": "8012145_Monster_AML_Boss_Part3_Ability06_Part02",
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "({[Skill06[0]]} * 0.5)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "({[Skill06[0]]} * 0.5)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
      "duration": {
        "displayLines": "{[Skill06[2]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill06[1]]}"
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "displayLines": "{[Skill06[3]]}"
        },
        "Modifier_Entangle_DamagePercentage": {
          "displayLines": "{[Skill06[4]]}"
        },
        "Modifier_Entangle_DamageValue": 0
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