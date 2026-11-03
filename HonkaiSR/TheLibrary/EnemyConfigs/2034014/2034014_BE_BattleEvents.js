const configAbility = {
  "fileName": "2034014_BE_BattleEvents",
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
      "beID": 20018,
      "team": "Neutral Team",
      "eventType": "Entity Selection",
      "icon": "BattleEvent_W2_LycanKing_PickUp.png",
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true
    },
    {
      "name": "Battle Event Construction",
      "beID": 20009,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_Rage.png",
      "abilityList": [
        "BattleEventAbility_Monster_Lycan_Rage"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "spd": 105,
      "hardLevel": true
    },
    {
      "name": "Battle Event Construction",
      "beID": 20008,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "Monster_SummonLycan.png",
      "abilityList": [
        "BattleEventAbility_W2_LycanKing_Summon"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "spd": 105,
      "hardLevel": true
    }
  ],
  "references": []
}