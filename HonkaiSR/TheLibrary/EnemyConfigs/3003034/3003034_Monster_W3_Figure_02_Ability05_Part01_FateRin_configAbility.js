const configAbility = {
  "fileName": "3003034_Monster_W3_Figure_02_Ability05_Part01_FateRin",
  "childAbilityList": [
    "3003034_Monster_W3_Figure_02_Ability05_Camera",
    "3003034_Monster_W3_Figure_02_Ability05_Part01_FateRin",
    "3003034_Monster_W3_Figure_02_Ability05_Part02_FateRin"
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ability": "Monster_W3_Figure_02_Ability05_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "targetIsVariable": true,
    "maxTargets": 4
  },
  "references": []
}