const configAbility = {
  "fileName": "2035012_BE_BattleEvents",
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
      "ID": 20021,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_W2_Feixiao_IF"
      ],
      "overridesArray": [
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
    },
    {
      "name": "Battle Event Construction",
      "ID": 20023,
      "team": "Neutral Team",
      "eventType": "Entity Selection",
      "abilityList": null,
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true
    }
  ],
  "references": []
}