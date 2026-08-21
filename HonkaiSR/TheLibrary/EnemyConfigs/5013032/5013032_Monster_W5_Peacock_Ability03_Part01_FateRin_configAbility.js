const configAbility = {
  "fileName": "5013032_Monster_W5_Peacock_Ability03_Part01_FateRin",
  "childAbilityList": [
    "5013032_Monster_W5_Peacock_Ability03_Camera",
    "5013032_Monster_W5_Peacock_Ability03_Part01_FateRin",
    "5013032_Monster_W5_Peacock_Ability03_Part02_FateRin"
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
      "ability": "Monster_W5_Peacock_Ability03_Part02_FateRin",
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