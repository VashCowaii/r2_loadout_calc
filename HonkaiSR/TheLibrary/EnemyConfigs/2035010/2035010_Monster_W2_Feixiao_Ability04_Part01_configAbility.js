const configAbility = {
  "fileName": "2035010_Monster_W2_Feixiao_Ability04_Part01",
  "childAbilityList": [
    "2035010_Monster_W2_Feixiao_Ability04_Camera",
    "2035010_Monster_W2_Feixiao_Ability04_Part01",
    "2035010_Monster_W2_Feixiao_Ability04_Part02"
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
      "ability": "Monster_W2_Feixiao_Ability04_Part02",
      "isTrigger": true
    },
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