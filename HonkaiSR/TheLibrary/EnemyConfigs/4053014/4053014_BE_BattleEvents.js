const configAbility = {
  "fileName": "4053014_BE_BattleEvents",
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
      "beID": 20020,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W4_Manta_WormPassive.png",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Manta_BattleEvent"
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
      "spd": 80,
      "hardLevel": true
    }
  ],
  "references": []
}