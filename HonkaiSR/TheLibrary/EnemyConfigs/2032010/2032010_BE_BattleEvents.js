const configAbility = {
  "fileName": "2032010_BE_BattleEvents",
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
    }
  ],
  "references": []
}