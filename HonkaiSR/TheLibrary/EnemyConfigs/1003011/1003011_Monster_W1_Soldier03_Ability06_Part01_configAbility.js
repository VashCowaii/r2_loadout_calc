const configAbility = {
  "fileName": "1003011_Monster_W1_Soldier03_Ability06_Part01",
  "childAbilityList": [
    "1003011_Monster_W1_Soldier03_Ability06_Camera",
    "1003011_Monster_W1_Soldier03_Ability06_Part01",
    "1003011_Monster_W1_Soldier03_Ability06_Part02",
    "1003011_Monster_W1_Soldier03_AbilityP06_Camera",
    "1003011_Monster_W1_Soldier03_AbilityP06_Part01",
    "1003011_Monster_W1_Soldier03_AbilityP06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W1_Soldier03_Ability06_Part02",
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
        "value2": 0
      }
    }
  ],
  "references": []
}