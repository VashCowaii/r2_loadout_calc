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
      "beID": 30501,
      "team": "Player Team",
      "eventType": "Assist",
      "barType": 3,
      "icon": "ChallengeStory_Fever.png",
      "abilityList": [
        "BattleEvent_FantasticStory_BaseAbility_Standard"
      ],
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
      "beID": 70001,
      "team": "Neutral Team",
      "eventType": "Elation Battle-Event",
      "icon": "HoshinoKami_007.png",
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 10000
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true,
      "params": [
        0.02,
        3,
        0.5,
        0.5,
        1
      ]
    },
    {
      "name": "Battle Event Construction",
      "beID": 30505,
      "team": "Neutral Team",
      "eventType": "Assist",
      "icon": "HoshinoKami_007.png",
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true,
      "actionDescription": "Deals multiple hits of Imaginary Elation DMG to a random enemy target."
    }
  ],
  "references": []
}