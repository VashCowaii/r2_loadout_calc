const configAbility = {
  "fileName": "5013010_Monster_W4_Claymore_02_Ability03_Part01",
  "childAbilityList": [
    "5013010_Monster_W4_Claymore_02_Ability03_Camera",
    "5013010_Monster_W4_Claymore_02_Ability03_Part01",
    "5013010_Monster_W4_Claymore_02_Ability03_Part02"
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
      "ability": "Monster_W4_Claymore_02_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}",
    "targetIsVariable": true
  },
  "references": []
}