const configAbility = {
  "fileName": "1012011_Monster_W1_CWMecha_03_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill03_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(Skill03_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "Skill03_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}