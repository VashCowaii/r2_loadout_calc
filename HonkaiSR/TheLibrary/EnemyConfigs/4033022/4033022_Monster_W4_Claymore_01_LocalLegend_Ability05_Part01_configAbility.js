const configAbility = {
  "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part01",
  "childAbilityList": [
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Camera",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part02"
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
      "ability": "Monster_W4_Claymore_01_LocalLegend_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}