const configAbility = {
  "fileName": "3024030_Monster_W3_Sam_01_Ability04_Part01",
  "childAbilityList": [
    "3024030_Monster_W3_Sam_01_Ability04_Camera",
    "3024030_Monster_W3_Sam_01_Ability04_Part01",
    "3024030_Monster_W3_Sam_01_Ability04_Part02"
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
      "ability": "Monster_W3_Sam_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}