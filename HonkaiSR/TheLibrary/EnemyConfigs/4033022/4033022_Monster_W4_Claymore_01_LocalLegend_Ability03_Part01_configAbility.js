const configAbility = {
  "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part01",
  "childAbilityList": [
    "4033022_Monster_W4_Claymore_01_Ability03_Camera",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part02"
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
      "ability": "Monster_W4_Claymore_01_LocalLegend_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}