const configAbility = {
  "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
  "childAbilityList": [
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
    "4033011_Monster_XP_Elite01_02_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}