const configAbility = {
  "fileName": "2004020_Monster_W2_Yanqing_Ability05_Part01",
  "childAbilityList": [
    "2004020_Monster_W2_Yanqing_Ability05_Part01",
    "2004020_Monster_W2_Yanqing_Ability05_Part02",
    "2004020_Monster_W2_Yanqing_Ability05_Camera"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_W2_Yanqing_Ability05_Part02",
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