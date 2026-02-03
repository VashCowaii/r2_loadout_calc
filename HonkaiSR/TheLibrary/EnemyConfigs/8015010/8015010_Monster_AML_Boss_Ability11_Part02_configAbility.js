const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_Ability11_Modifier",
      "valuePerStack": {
        "MDF_AttackAddedRatio": 1
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}