const configAbility = {
  "fileName": "5012092_Monster_W3_Clock_03_Ability01_Part01_FateRin",
  "childAbilityList": [
    "5012092_Monster_W3_Clock_03_Ability01_Camera",
    "5012092_Monster_W3_Clock_03_Ability01_Part01_FateRin",
    "5012092_Monster_W3_Clock_03_Ability01_Part02_FateRin"
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
      "ability": "Monster_W3_Clock_03_Ability01_Part02_FateRin",
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