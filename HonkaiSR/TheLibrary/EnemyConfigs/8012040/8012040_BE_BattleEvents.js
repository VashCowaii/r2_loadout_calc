const configAbility = {
  "fileName": "8012040_BE_BattleEvents",
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
      "ID": 20047,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W5_Shell_Ability01Check"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
          "value": 150
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "Whenever \"Comedian Ensemble\" takes action, all \"Comediologists\" will attack simultaneously."
    }
  ],
  "references": []
}