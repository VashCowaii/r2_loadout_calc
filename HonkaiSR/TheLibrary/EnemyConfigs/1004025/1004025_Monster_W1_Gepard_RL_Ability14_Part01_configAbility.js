const configAbility = {
  "fileName": "1004025_Monster_W1_Gepard_RL_Ability14_Part01",
  "abilityType": null,
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