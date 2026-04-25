const configAbility = {
  "fileName": "5023011_Monster_XP_Elite02_03_Ability04_Part01",
  "childAbilityList": [
    "5023011_Monster_XP_Elite02_03_Ability04_Camera",
    "5023011_Monster_XP_Elite02_03_Ability04_Part01",
    "5023011_Monster_XP_Elite02_03_Ability04_Part02"
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
      "ability": "Monster_XP_Elite02_03_Ability04_Part02",
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