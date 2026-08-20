const configAbility = {
  "fileName": "2013013_Monster_W2_Mecha03_Ability03_Part01_FateRin",
  "childAbilityList": [
    "2013013_Monster_W2_Mecha03_Ability03_Camera",
    "2013013_Monster_W2_Mecha03_Ability03_Part01_FateRin",
    "2013013_Monster_W2_Mecha03_Ability03_Part02_FateRin"
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
      "ability": "Monster_W2_Mecha03_Ability03_Part02_FateRin",
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