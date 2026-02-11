const configAbility = {
  "fileName": "8003040_Monster_XP_Elite02_01_Ability04_Part01",
  "childAbilityList": [
    "8003040_Monster_XP_Elite02_01_Ability04_Camera",
    "8003040_Monster_XP_Elite02_01_Ability04_Part01",
    "8003040_Monster_XP_Elite02_01_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_XP_Elite02_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnergyLayer",
        "compareType": ">",
        "value2": 4
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyLayer",
            "compareType": "<",
            "value2": 3
          }
        }
      ]
    }
  ],
  "references": []
}