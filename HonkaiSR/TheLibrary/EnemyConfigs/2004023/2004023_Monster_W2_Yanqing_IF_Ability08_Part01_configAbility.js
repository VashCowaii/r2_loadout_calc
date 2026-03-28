const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability08_Part01",
  "childAbilityList": [
    "2004023_Monster_W2_Yanqing_IF_Ability08_Part01",
    "2004023_Monster_W2_Yanqing_IF_Ability08_Part02",
    "2004023_Monster_W2_Yanqing_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W2_Yanqing_IF_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}