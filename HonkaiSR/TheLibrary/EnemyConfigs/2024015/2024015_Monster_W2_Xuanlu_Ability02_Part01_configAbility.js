const configAbility = {
  "fileName": "2024015_Monster_W2_Xuanlu_Ability02_Part01",
  "childAbilityList": [
    "2024015_Monster_W2_Xuanlu_Ability02_Part01",
    "2024015_Monster_W2_Xuanlu_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W2_Xuanlu_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}