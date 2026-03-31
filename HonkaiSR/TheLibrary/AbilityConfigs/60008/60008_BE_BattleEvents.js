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
      "ID": 60011,
      "team": "Player Team",
      "eventType": "Assist",
      "abilityList": [
        "MissionBattleEvent60008_Listener"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
          "value": 120
        }
      ],
      "eventSpeed": 120,
      "hardLevelEvent": true
    }
  ],
  "references": []
}