const configAbility = {
  "fileName": "1003012_Monster_W1_Soldier03_RL_Ability09_Part01",
  "childAbilityList": [
    "1003012_Monster_W1_Soldier03_Ability09_Camera",
    "1003012_Monster_W1_Soldier03_RL_Ability09_Part01",
    "1003012_Monster_W1_Soldier03_RL_Ability09_Part02"
  ],
  "skillTrigger": "Skill09",
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
      "ability": "Monster_W1_Soldier03_RL_Ability09_Part02",
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