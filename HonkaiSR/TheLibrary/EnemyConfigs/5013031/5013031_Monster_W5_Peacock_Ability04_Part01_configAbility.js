const configAbility = {
  "fileName": "5013031_Monster_W5_Peacock_Ability04_Part01",
  "childAbilityList": [
    "5013031_Monster_W5_Peacock_Ability04_Camera",
    "5013031_Monster_W5_Peacock_Ability04_Part01",
    "5013031_Monster_W5_Peacock_Ability04_Part02"
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
      "ability": "Monster_W5_Peacock_Ability04_Part02",
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