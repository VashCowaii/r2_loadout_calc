const configAbility = {
  "fileName": "1023021_Monster_W1_Mecha03_01_Ability11_Part01",
  "childAbilityList": [
    "1023021_Monster_W1_Mecha03_01_Ability11_Camera",
    "1023021_Monster_W1_Mecha03_01_Ability11_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
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
      "ability": "Monster_W1_Mecha03_01_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterEatCount",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterEatCount",
                "compareType": ">",
                "value2": 3
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}