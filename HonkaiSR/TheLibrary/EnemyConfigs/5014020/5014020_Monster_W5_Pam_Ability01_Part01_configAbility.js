const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability01_Part01",
  "childAbilityList": [
    "5014020_Monster_W5_Pam_Ability01_Camera",
    "5014020_Monster_W5_Pam_Ability01_Part01",
    "5014020_Monster_W5_Pam_Ability01_Part02"
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
      "ability": "Monster_W5_Pam_Ability01_Part02",
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