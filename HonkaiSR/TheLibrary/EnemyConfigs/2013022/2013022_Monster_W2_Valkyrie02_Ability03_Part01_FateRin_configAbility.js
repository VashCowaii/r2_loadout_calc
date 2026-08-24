const configAbility = {
  "fileName": "2013022_Monster_W2_Valkyrie02_Ability03_Part01_FateRin",
  "childAbilityList": [
    "2013022_Monster_W2_Valkyrie02_Ability03_Part01_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability03_Part02_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability03_Camera"
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
      "ability": "Monster_W2_Valkyrie02_Ability03_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}