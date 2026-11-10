const configAbility = {
  "fileName": "8012145_Monster_AML_Boss_Part3_Ability05_Part02",
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
          "displayLines": "{[Skill05[0]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
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
        "displayLines": "{[Skill05[2]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill05[1]]}"
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "displayLines": "{[Skill05[3]]}"
        },
        "Modifier_Entangle_DamagePercentage": {
          "displayLines": "{[Skill05[4]]}"
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