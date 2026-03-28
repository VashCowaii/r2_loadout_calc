const configAbility = {
  "fileName": "4023021_Monster_W4_Unicorn_Ability01_Part01",
  "childAbilityList": [
    "4023021_Monster_W4_Unicorn_Ability01_Camera",
    "4023021_Monster_W4_Unicorn_Ability01_Part01",
    "4023021_Monster_W4_Unicorn_Ability01_Part02"
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
      "ability": "Monster_W4_Unicorn_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}