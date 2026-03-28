const configAbility = {
  "fileName": "5013030_Monster_W5_Peacock_Ability05_Part01",
  "childAbilityList": [
    "5013030_Monster_W5_Peacock_Ability05_Camera",
    "5013030_Monster_W5_Peacock_Ability05_Part01",
    "5013030_Monster_W5_Peacock_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_W5_Peacock_Ability05_Part02",
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