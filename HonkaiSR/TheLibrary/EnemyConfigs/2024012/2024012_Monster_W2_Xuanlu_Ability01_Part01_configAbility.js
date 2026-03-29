const configAbility = {
  "fileName": "2024012_Monster_W2_Xuanlu_Ability01_Part01",
  "childAbilityList": [
    "2024012_Monster_W2_Xuanlu_Ability01_Part01",
    "2024012_Monster_W2_Xuanlu_Ability01_Part02",
    "2024012_Monster_W2_Xuanlu_Ability01_Camera"
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
      "ability": "Monster_W2_Xuanlu_Ability01_Part02",
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