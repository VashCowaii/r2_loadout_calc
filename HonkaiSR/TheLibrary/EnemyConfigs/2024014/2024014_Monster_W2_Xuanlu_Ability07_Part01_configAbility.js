const configAbility = {
  "fileName": "2024014_Monster_W2_Xuanlu_Ability07_Part01",
  "childAbilityList": [
    "2024014_Monster_W2_Xuanlu_Ability07_Part01",
    "2024014_Monster_W2_Xuanlu_Ability07_Part02",
    "2024014_Monster_W2_Xuanlu_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W2_Xuanlu_Ability07_Part02",
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