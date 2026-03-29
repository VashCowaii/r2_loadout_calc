const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability03_Part01",
  "childAbilityList": [
    "5014020_Monster_W5_Pam_Ability03_Camera",
    "5014020_Monster_W5_Pam_Ability03_Part01",
    "5014020_Monster_W5_Pam_Ability03_Part02"
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
      "ability": "Monster_W5_Pam_Ability03_Part02",
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