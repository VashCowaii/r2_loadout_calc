const configAbility = {
  "fileName": "3003044_Monster_W3_Figure_Ability04_Part01_FateRin",
  "childAbilityList": [
    "3003044_Monster_W3_Figure_Ability04_Camera",
    "3003044_Monster_W3_Figure_Ability04_Part01_FateRin",
    "3003044_Monster_W3_Figure_Ability04_Part02_FateRin"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Figure_Ability04_Part02_FateRin",
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