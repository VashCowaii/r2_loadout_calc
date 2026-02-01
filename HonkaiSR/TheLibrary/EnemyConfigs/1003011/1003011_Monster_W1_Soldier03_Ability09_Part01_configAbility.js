const configAbility = {
  "fileName": "1003011_Monster_W1_Soldier03_Ability09_Part01",
  "childAbilityList": [
    "1003011_Monster_W1_Soldier03_Ability09_Camera",
    "1003011_Monster_W1_Soldier03_Ability09_Part01",
    "1003011_Monster_W1_Soldier03_Ability09_Part02"
  ],
  "skillTrigger": "Skill09",
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
      "ability": "Monster_W1_Soldier03_Ability09_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}