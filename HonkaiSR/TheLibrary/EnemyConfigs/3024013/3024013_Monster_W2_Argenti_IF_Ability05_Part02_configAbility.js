const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_IF_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "({[Skill10[0]]} * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
          "displayLines": "({[Skill10[0]]} * 0.8)",
          "constants": [
            0.8
          ],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "80%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}