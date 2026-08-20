const configAbility = {
  "fileName": "4012024_Monster_W4_Scholar_Ability01_Part01_FateRin",
  "childAbilityList": [
    "4012024_Monster_W4_Scholar_01_Ability01_Camera",
    "4012024_Monster_W4_Scholar_Ability01_Part01_FateRin",
    "4012024_Monster_W4_Scholar_Ability01_Part02_FateRin"
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
      "ability": "Monster_W4_Scholar_Ability01_Part02_FateRin",
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