const configAbility = {
  "fileName": "8033020_Monster_W4_Claymore_04_Ability03_Part01",
  "childAbilityList": [
    "8033020_Monster_W4_Claymore_04_Ability03_Camera",
    "8033020_Monster_W4_Claymore_04_Ability03_Part01",
    "8033020_Monster_W4_Claymore_04_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W4_Claymore_04_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}