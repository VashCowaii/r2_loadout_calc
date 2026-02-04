const configAbility = {
  "fileName": "1014016_Monster_W1_GS_Svarog_RL_Ability02_Part01",
  "childAbilityList": [
    "1014016_Monster_W1_GS_Svarog_RL_Ability02_Part01",
    "1014016_Monster_W1_GS_Svarog_RL_Ability02_Part02",
    "1014016_Monster_W1_GS_Svarog_RL_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W1_GS_Svarog_RL_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}