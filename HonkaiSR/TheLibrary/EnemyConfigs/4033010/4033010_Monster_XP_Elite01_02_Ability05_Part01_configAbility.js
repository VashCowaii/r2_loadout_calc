const configAbility = {
  "fileName": "4033010_Monster_XP_Elite01_02_Ability05_Part01",
  "childAbilityList": [
    "4033010_Monster_XP_Elite01_02_Ability05_Camera",
    "4033010_Monster_XP_Elite01_02_Ability05_Part01",
    "4033010_Monster_XP_Elite01_02_Ability05_Part02"
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
      "ability": "Monster_XP_Elite01_02_Ability05_Part02",
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