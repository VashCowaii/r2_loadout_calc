const configAbility = {
  "fileName": "2013013_Monster_W2_Mecha03_Ability01_Part01_FateRin",
  "childAbilityList": [
    "2013013_Monster_W2_Mecha03_Ability01_Camera",
    "2013013_Monster_W2_Mecha03_Ability01_Part01_FateRin",
    "2013013_Monster_W2_Mecha03_Ability01_Part02_FateRin"
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
      "ability": "Monster_W2_Mecha03_Ability01_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}