const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_Ability06_Part01",
  "childAbilityList": [
    "2024013_Monster_W2_Xuanlu_Ability06_Part01",
    "2024013_Monster_W2_Xuanlu_Ability06_Part02",
    "2024013_Monster_W2_Xuanlu_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W2_Xuanlu_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}