const configAbility = {
  "fileName": "8002010_Monster_XP_Minion02_Ability03_Part01",
  "childAbilityList": [
    "8002010_Monster_XP_Minion02_Ability03_Camera",
    "8002010_Monster_XP_Minion02_Ability03_Part01",
    "8002010_Monster_XP_Minion02_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_XP_Minion02_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}