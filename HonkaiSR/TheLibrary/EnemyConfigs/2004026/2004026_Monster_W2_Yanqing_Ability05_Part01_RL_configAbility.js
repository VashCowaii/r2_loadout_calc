const configAbility = {
  "fileName": "2004026_Monster_W2_Yanqing_Ability05_Part01_RL",
  "childAbilityList": [
    "2004026_Monster_W2_Yanqing_Ability05_Part01_RL",
    "2004026_Monster_W2_Yanqing_Ability05_Part02_RL",
    "2004026_Monster_W2_Yanqing_Ability05_Camera"
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
      "ability": "Monster_W2_Yanqing_Ability05_Part02_RL",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}