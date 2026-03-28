const configAbility = {
  "fileName": "4033010_Monster_XP_Elite01_02_Ability06_Part01",
  "childAbilityList": [
    "4033010_Monster_XP_Elite01_02_Ability03_Camera",
    "4033010_Monster_XP_Elite01_02_Ability03_Part01",
    "4033010_Monster_XP_Elite01_02_Ability03_Part02"
  ],
  "skillTrigger": "Skill06",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_XP_Elite01_02_Ability06_Part02",
      "isTrigger": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}