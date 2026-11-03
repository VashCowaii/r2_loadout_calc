const configAbility = {
  "fileName": "60008_BE_BattleEvents",
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
      "beID": 60011,
      "team": "Player Team",
      "eventType": "Assist",
      "icon": "1217.png",
      "abilityList": [
        "MissionBattleEvent60008_Listener"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
          "value": 120
        }
      ],
      "spd": 120,
      "hardLevel": true,
      "params": [
        0.75,
        0.25
      ]
    }
  ],
  "references": []
}