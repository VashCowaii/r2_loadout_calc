const configAbility = {
  "fileName": "2004011_BE_BattleEvents",
  "abilityType": "Char. B.Events",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Battle Event Construction",
      "beID": 20002,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "Monster_MultiMindControl.png",
      "abilityList": [
        "BattleEventAbility_W2_Kafka_RL",
        "BattleEventAbility_W2_Kafka_RL_Insert"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
          "value": 1
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
          "value": 1
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
          "value": 1
        }
      ]
    }
  ],
  "references": []
}