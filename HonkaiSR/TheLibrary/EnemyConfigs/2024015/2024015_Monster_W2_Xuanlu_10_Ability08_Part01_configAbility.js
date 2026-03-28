const configAbility = {
  "fileName": "2024015_Monster_W2_Xuanlu_10_Ability08_Part01",
  "childAbilityList": [
    "2024015_Monster_W2_Xuanlu_10_Ability08_Part01",
    "2024015_Monster_W2_Xuanlu_10_Ability08_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W2_Xuanlu_10_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}