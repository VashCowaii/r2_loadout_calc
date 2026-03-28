const configAbility = {
  "fileName": "4014010_Monster_W4_Nikadory_Ability01_Part01",
  "childAbilityList": [
    "4014010_Monster_W4_Nikadory_Ability01_Camera",
    "4014010_Monster_W4_Nikadory_Ability01_Part01",
    "4014010_Monster_W4_Nikadory_Ability01_Part02"
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
      "ability": "Monster_W4_Nikadory_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}