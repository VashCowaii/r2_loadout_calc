const configAbility = {
  "fileName": "2004021_Monster_W2_Yanqing_Ability06_Part01",
  "childAbilityList": [
    "2004021_Monster_W2_Yanqing_Ability06_Part01",
    "2004021_Monster_W2_Yanqing_Ability06_Part02",
    "2004021_Monster_W2_Yanqing_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W2_Yanqing_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}