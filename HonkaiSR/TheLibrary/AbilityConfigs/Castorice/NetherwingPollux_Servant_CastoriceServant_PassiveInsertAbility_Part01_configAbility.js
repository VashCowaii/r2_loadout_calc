const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "flagName": "STAT_CTRL"
          }
        ]
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Servant_CastoriceServant_PassiveInsertAbility_Part02",
      "isTrigger": true
    },
    {
      "name": "Change Battle Arena",
      "arena": "CastoriceBattleArea",
      "tag": "BattleArea01",
      "status": "Inactive",
      "priorityTag": "Character"
    }
  ],
  "references": []
}