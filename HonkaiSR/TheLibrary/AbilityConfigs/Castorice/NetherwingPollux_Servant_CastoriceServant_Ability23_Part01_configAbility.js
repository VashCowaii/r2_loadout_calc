const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability23_Part01",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Camera",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Camera_NoneCasterSummonerCamera",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_ReadytoFly_Camera",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_ReadytoFly_Camera02",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_ReadytoFly_Camera03"
  ],
  "skillTrigger": "Skill23",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    5,
    0,
    0
  ],
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1407069104\">Servant_CastoriceServant_FlyToAbility23</a>"
    },
    {
      "name": "Change Battle Arena",
      "arena": "CastoriceBattleArea",
      "tag": "BattleArea01",
      "status": "Inactive",
      "priorityTag": "Character"
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
      "ability": "Servant_CastoriceServant_Ability23_Part02",
      "isTrigger": true
    },
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
    }
  ],
  "references": []
}