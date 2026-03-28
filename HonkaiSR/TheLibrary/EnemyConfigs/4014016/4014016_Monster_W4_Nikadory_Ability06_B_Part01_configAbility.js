const configAbility = {
  "fileName": "4014016_Monster_W4_Nikadory_Ability06_B_Part01",
  "childAbilityList": [
    "4014016_Monster_W4_Nikadory_Ability06_Camera",
    "4014016_Monster_W4_Nikadory_Ability06_B_Part01",
    "4014016_Monster_W4_Nikadory_Ability06_B_Part02"
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
      "ability": "Monster_W4_Nikadory_Ability06_B_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsStoryTri",
        "compareType": "=",
        "value2": 1
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}