const configAbility = {
  "fileName": "5014021_Monster_W5_Pam_Ability05_Part01",
  "childAbilityList": [
    "5014021_Monster_W5_Pam_Ability05_Camera",
    "5014021_Monster_W5_Pam_Ability05_Part01",
    "5014021_Monster_W5_Pam_Ability05_Part02"
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
      "ability": "Monster_W5_Pam_Ability05_Part02",
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