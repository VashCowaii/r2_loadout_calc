const configAbility = {
  "fileName": "4023021_Monster_W4_Unicorn_Ability03_Part01",
  "childAbilityList": [
    "4023021_Monster_W4_Unicorn_Ability03_Camera",
    "4023021_Monster_W4_Unicorn_Ability03_Part01",
    "4023021_Monster_W4_Unicorn_Ability03_Part02"
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
      "ability": "Monster_W4_Unicorn_Ability03_Part02",
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