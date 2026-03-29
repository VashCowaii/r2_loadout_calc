const configAbility = {
  "fileName": "5012090_Monster_W3_Clock_03_Ability01_Part01",
  "childAbilityList": [
    "5012090_Monster_W3_Clock_03_Ability01_Camera",
    "5012090_Monster_W3_Clock_03_Ability01_Part01",
    "5012090_Monster_W3_Clock_03_Ability01_Part02"
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
      "ability": "Monster_W3_Clock_03_Ability01_Part02",
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