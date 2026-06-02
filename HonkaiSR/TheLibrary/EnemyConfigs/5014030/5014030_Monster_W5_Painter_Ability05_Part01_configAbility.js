const configAbility = {
  "fileName": "5014030_Monster_W5_Painter_Ability05_Part01",
  "childAbilityList": [
    "5014030_Monster_W5_Painter_Ability05_Camera",
    "5014030_Monster_W5_Painter_Ability05_Part01",
    "5014030_Monster_W5_Painter_Ability05_Part02"
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
      "ability": "Monster_W5_Painter_Ability05_Part02",
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