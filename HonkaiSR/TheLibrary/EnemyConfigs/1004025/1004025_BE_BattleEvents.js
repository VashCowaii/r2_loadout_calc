const configAbility = {
  "fileName": "1004025_BE_BattleEvents",
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
      "ID": 20006,
      "team": "Neutral Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W1_Gepard_IF_03_SwitchTimer"
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
      "eventSpeed": 70,
      "hardLevelEvent": true
    }
  ],
  "references": []
}