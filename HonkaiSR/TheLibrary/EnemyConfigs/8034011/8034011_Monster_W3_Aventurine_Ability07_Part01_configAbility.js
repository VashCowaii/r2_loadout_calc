const configAbility = {
  "fileName": "8034011_Monster_W3_Aventurine_Ability07_Part01",
  "childAbilityList": [
    "8034011_Monster_W3_Aventurine_Ability07_Camera",
    "8034011_Monster_W3_Aventurine_Ability07_Part01",
    "8034011_Monster_W3_Aventurine_Ability07_Part02"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W3_Aventurine_Ability07_Part02",
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