const configAbility = {
  "fileName": "4014016_Monster_W4_Nikadory_Ability13_Part01",
  "childAbilityList": [
    "4014016_Monster_W4_Nikadory_Ability13_Camera",
    "4014016_Monster_W4_Nikadory_Ability13_Part01",
    "4014016_Monster_W4_Nikadory_Ability13_Part02"
  ],
  "skillTrigger": "Skill13",
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
      "ability": "Monster_W4_Nikadory_Ability13_Part02",
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