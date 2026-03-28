const configAbility = {
  "fileName": "3024031_Monster_W3_Sam_01_Ability06_Part01",
  "childAbilityList": [
    "3024031_Monster_W3_Sam_01_Ability06_Camera",
    "3024031_Monster_W3_Sam_01_Ability06_Part01",
    "3024031_Monster_W3_Sam_01_Ability06_Part02"
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
      "ability": "Monster_W3_Sam_01_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}