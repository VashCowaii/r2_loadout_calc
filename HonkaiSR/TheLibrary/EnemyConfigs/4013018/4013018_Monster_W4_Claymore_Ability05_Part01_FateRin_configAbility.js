const configAbility = {
  "fileName": "4013018_Monster_W4_Claymore_Ability05_Part01_FateRin",
  "childAbilityList": [
    "4013018_Monster_W4_Claymore_Ability05_Camera",
    "4013018_Monster_W4_Claymore_Ability05_Part01_FateRin",
    "4013018_Monster_W4_Claymore_Ability05_Part02_FateRin"
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
      "ability": "Monster_W4_Claymore_Ability05_Part02_FateRin",
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