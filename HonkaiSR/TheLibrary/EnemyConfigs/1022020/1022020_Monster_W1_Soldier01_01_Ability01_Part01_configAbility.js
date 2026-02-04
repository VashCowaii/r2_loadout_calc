const configAbility = {
  "fileName": "1022020_Monster_W1_Soldier01_01_Ability01_Part01",
  "childAbilityList": [
    "1022020_Monster_W1_Soldier01_01_Ability01_Camera",
    "1022020_Monster_W1_Soldier01_01_Ability01_Part01",
    "1022020_Monster_W1_Soldier01_01_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W1_Soldier01_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}