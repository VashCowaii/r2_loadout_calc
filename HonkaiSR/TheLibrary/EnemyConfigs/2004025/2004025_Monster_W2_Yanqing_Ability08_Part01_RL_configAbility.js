const configAbility = {
  "fileName": "2004025_Monster_W2_Yanqing_Ability08_Part01_RL",
  "childAbilityList": [
    "2004025_Monster_W2_Yanqing_Ability08_Part01_RL",
    "2004025_Monster_W2_Yanqing_Ability08_Part02_RL",
    "2004025_Monster_W2_Yanqing_Ability08_Camera"
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
      "ability": "Monster_W2_Yanqing_Ability08_Part02_RL",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}