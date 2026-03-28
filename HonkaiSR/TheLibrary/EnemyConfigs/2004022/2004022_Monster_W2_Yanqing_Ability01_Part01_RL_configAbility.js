const configAbility = {
  "fileName": "2004022_Monster_W2_Yanqing_Ability01_Part01_RL",
  "childAbilityList": [
    "2004022_Monster_W2_Yanqing_Ability01_Part01_RL",
    "2004022_Monster_W2_Yanqing_Ability01_Part02_RL",
    "2004022_Monster_W2_Yanqing_Ability01_Camera"
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
      "ability": "Monster_W2_Yanqing_Ability01_Part02_RL",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}