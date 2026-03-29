const configAbility = {
  "fileName": "4014018_Monster_W4_Nikadory_Ability14_Part01",
  "childAbilityList": [
    "4014018_Monster_W4_Nikadory_Ability14_Camera",
    "4014018_Monster_W4_Nikadory_Ability14_Part01",
    "4014018_Monster_W4_Nikadory_Ability14_Part02"
  ],
  "skillTrigger": "Skill14",
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
      "ability": "Monster_W4_Nikadory_Ability14_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "targetIsVariable": true
  },
  "references": []
}