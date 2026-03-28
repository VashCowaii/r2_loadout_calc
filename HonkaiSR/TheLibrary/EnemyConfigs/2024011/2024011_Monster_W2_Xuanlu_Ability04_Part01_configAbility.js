const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_Ability04_Part01",
  "childAbilityList": [
    "2024011_Monster_W2_Xuanlu_Ability04_Part01",
    "2024011_Monster_W2_Xuanlu_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W2_Xuanlu_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}