const configAbility = {
  "fileName": "4013017_Monster_W4_Claymore_LocalLegend03_Ability01_Part01",
  "childAbilityList": [
    "4013017_Monster_W4_Claymore_LocalLegend03_Ability01_Camera",
    "4013017_Monster_W4_Claymore_LocalLegend03_Ability01_Part01",
    "4013017_Monster_W4_Claymore_LocalLegend03_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W4_Claymore_LocalLegend03_Ability01_Part02",
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