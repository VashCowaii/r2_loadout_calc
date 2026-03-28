const configAbility = {
  "fileName": "2004022_Monster_W2_Yanqing_Ability02_Part01_RL",
  "childAbilityList": [
    "2004022_Monster_W2_Yanqing_Ability02_Part01_RL",
    "2004022_Monster_W2_Yanqing_Ability02_Part02_RL",
    "2004022_Monster_W2_Yanqing_Ability02_Camera",
    "2004022_Monster_W2_Yanqing_Ability02_Insert_Over_RL",
    "2004022_Monster_W2_Yanqing_Ability02_TeamFormation"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W2_Yanqing_Ability02_Part02_RL",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}