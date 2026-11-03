const configAbility = {
  "fileName": "4053020_BE_BattleEvents",
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
      "beID": 20022,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W4_Unicorn_Prepare.png",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Unicorn_01_Summon"
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
      "hardLevel": true
    }
  ],
  "references": []
}