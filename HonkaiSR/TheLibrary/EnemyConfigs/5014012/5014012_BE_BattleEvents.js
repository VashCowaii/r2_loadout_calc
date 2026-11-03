const configAbility = {
  "fileName": "5014012_BE_BattleEvents",
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
      "beID": 20040,
      "team": "Neutral Team",
      "eventType": "Entity Selection",
      "icon": "BattleEvent_W5_Vtuber_00_CountDown.png",
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
      "beID": 20039,
      "team": "Player Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W5_Vtuber_00_CountDown.png",
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
          "value": 40
        }
      ],
      "hardLevel": true
    }
  ],
  "references": []
}