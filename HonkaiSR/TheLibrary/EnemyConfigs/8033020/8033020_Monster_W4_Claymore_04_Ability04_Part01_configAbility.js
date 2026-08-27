const configAbility = {
  "fileName": "8033020_Monster_W4_Claymore_04_Ability04_Part01",
  "childAbilityList": [
    "8033020_Monster_W4_Claymore_04_Ability04_Camera",
    "8033020_Monster_W4_Claymore_04_Ability04_Part01",
    "8033020_Monster_W4_Claymore_04_Ability04_Part02"
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
      "ability": "Monster_W4_Claymore_04_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}