const configAbility = {
  "fileName": "5014022_Monster_W5_Pam_Ability02_Part01_FateRin",
  "childAbilityList": [
    "5014022_Monster_W5_Pam_Ability02_Camera",
    "5014022_Monster_W5_Pam_Ability02_Part01_FateRin",
    "5014022_Monster_W5_Pam_Ability02_Part02_FateRin"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W5_Pam_Ability02_Part02_FateRin",
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