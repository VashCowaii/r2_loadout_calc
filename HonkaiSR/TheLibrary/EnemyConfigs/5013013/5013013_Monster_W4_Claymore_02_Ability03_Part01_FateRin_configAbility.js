const configAbility = {
  "fileName": "5013013_Monster_W4_Claymore_02_Ability03_Part01_FateRin",
  "childAbilityList": [
    "5013013_Monster_W4_Claymore_02_Ability03_Camera",
    "5013013_Monster_W4_Claymore_02_Ability03_Part01_FateRin",
    "5013013_Monster_W4_Claymore_02_Ability03_Part02_FateRin"
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
      "ability": "Monster_W4_Claymore_02_Ability03_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Entity Turn-State",
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