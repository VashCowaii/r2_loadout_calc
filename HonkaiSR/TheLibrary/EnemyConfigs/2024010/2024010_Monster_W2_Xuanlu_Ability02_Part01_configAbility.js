const configAbility = {
  "fileName": "2024010_Monster_W2_Xuanlu_Ability02_Part01",
  "childAbilityList": [
    "2024010_Monster_W2_Xuanlu_Ability02_Part01",
    "2024010_Monster_W2_Xuanlu_Ability02_Part02"
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