const configAbility = {
  "fileName": "5014022_Monster_W5_Pam_Ability03_Part01_FateRin",
  "childAbilityList": [
    "5014022_Monster_W5_Pam_Ability03_Camera",
    "5014022_Monster_W5_Pam_Ability03_Part01_FateRin",
    "5014022_Monster_W5_Pam_Ability03_Part02_FateRin"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Pam_Ability03_Part02_FateRin",
      "isTrigger": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}