const configAbility = {
  "fileName": "3004013_BE_BattleEvents",
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
      "ID": 20019,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "Monster_W3_FigureBoss_BattleEvent"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 20012,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "Monster_W3_DollElite_Standard_BattleEvent"
      ],
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