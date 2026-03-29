const configAbility = {
  "fileName": "4013016_Monster_W4_Claymore_LocalLegend03_Ability04_Part01",
  "childAbilityList": [
    "4013016_Monster_W4_Claymore_LocalLegend03_Ability04_Camera",
    "4013016_Monster_W4_Claymore_LocalLegend03_Ability04_Part01",
    "4013016_Monster_W4_Claymore_LocalLegend03_Ability04_Part02"
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
      "ability": "Monster_W4_Claymore_LocalLegend03_Ability04_Part02",
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