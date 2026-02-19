const configAbility = {
  "fileName": "3025011_Monster_W3_SundayPart_AssistAbility01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (AssistSkill01_DamagePercentage) || RETURN",
          "displayLines": "AssistSkill01_DamagePercentage",
          "constants": [],
          "variables": [
            "AssistSkill01_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}