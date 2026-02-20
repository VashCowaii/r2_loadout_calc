const configAbility = {
  "fileName": "2035011_Monster_W2_Feixiao_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MainTrigger",
        "compareType": "=",
        "value2": 1
      }
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
          "displayLines": "{[Skill09[0]]}",
          "constants": [],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MainTrigger",
        "compareType": "=",
        "value2": 1
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}