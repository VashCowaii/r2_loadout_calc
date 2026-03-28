const configAbility = {
  "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part01",
  "childAbilityList": [
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Camera",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
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