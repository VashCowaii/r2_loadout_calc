const configAbility = {
  "fileName": "1314726962_BE_BattleEvents",
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
      "ID": 30501,
      "team": "Player Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEvent_FantasticStory_BaseAbility_Standard"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true,
      "barType": 3
    },
    {
      "name": "Battle Event Construction",
      "ID": 70001,
      "team": "Neutral Team",
      "eventType": "Elation Battle-Event",
      "abilityList": null,
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 10000
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 30505,
      "team": "Neutral Team",
      "eventType": "Assist",
      "abilityList": null,
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "Deals multiple hits of Imaginary Elation DMG to a random enemy target."
    }
  ],
  "references": []
}