const configAbility = {
  "fileName": "1004022_Monster_W1_Gepard_RL_Ability14_Part01",
  "childAbilityList": [
    "1004022_Monster_W1_Gepard_RL_Ability14_Part01",
    "1004022_Monster_W1_Gepard_RL_Ability14_Part02"
  ],
  "skillTrigger": "Skill14",
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
      "ability": "Monster_W1_Gepard_RL_Ability14_Part02",
      "isTrigger": true
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill12",
      "passed": [
        {
          "name": "Animation Task"
        }
      ]
    }
  ],
  "references": []
}