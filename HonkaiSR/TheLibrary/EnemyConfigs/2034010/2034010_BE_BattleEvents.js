const configAbility = {
  "fileName": "2034010_BE_BattleEvents",
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
      "ID": 20009,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_Lycan_Rage"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "eventSpeed": 105,
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 20008,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_W2_LycanKing_Summon"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "eventSpeed": 105,
      "hardLevelEvent": true
    }
  ],
  "references": []
}