const configAbility = {
  "fileName": "5013032_Monster_W5_Peacock_Ability02_Part01_FateRin",
  "childAbilityList": [
    "5013032_Monster_W5_Peacock_AbilityP01_Insert01_Camera",
    "5013032_Monster_W5_Peacock_Ability02_Part01_FateRin",
    "5013032_Monster_W5_Peacock_Ability02_Part02_FateRin"
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
      "ability": "Monster_W5_Peacock_Ability02_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Trigger: Ability End"
  ],
  "onAbort": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ColorInInsertFlag"
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