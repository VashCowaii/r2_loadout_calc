const configAbility = {
  "fileName": "3003034_Monster_W3_Figure_02_Ability04_Part01_FateRin",
  "childAbilityList": [
    "3003034_Monster_W3_Figure_02_Ability04_Camera",
    "3003034_Monster_W3_Figure_02_Ability04_Part01_FateRin",
    "3003034_Monster_W3_Figure_02_Ability04_Part02_FateRin"
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
      "ability": "Monster_W3_Figure_02_Ability04_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}",
    "targetIsVariable": true
  },
  "references": []
}