const configAbility = {
  "fileName": "5014022_Monster_W5_Pam_Ability05_Part01_FateRin",
  "childAbilityList": [
    "5014022_Monster_W5_Pam_Ability05_Camera",
    "5014022_Monster_W5_Pam_Ability05_Part01_FateRin",
    "5014022_Monster_W5_Pam_Ability05_Part02_FateRin"
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
      "ability": "Monster_W5_Pam_Ability05_Part02_FateRin",
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