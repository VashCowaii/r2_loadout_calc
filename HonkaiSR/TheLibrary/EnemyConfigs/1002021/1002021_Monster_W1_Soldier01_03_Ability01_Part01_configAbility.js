const configAbility = {
  "fileName": "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
  "childAbilityList": [
    "1002021_Monster_W1_Soldier01_03_Ability01_Camera",
    "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
    "1002021_Monster_W1_Soldier01_03_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_Soldier01_03_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "from": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "to": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "Distance_Between_Entities",
        "compareType": ">",
        "value2": 7
      }
    }
  ],
  "references": []
}