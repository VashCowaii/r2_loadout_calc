const configAbility = {
  "fileName": "1004024_Monster_W1_Gepard_RL_Ability01_Part01",
  "childAbilityList": [
    "1004024_Monster_W1_Gepard_RL_Ability01_Part01",
    "1004024_Monster_W1_Gepard_RL_Ability01_Part02",
    "1004024_Monster_W1_Gepard_RL_Ability01_Camera"
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
      "ability": "Monster_W1_Gepard_RL_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}