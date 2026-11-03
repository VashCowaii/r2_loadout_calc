const configAbility = {
  "fileName": "MortenaxBlade_BE_BattleEvents",
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
      "beID": 96217,
      "team": "Player Team",
      "eventType": "Assist",
      "barType": 1,
      "icon": "BattleEvent_1507.png",
      "abilityList": [
        "BattleEventAbility_MortenaxBlade_00"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true,
      "actionDescription": "Mortenax Blade enters the \"Infinite Fury\" state, unlocking his Skill, gaining an Enhanced Basic ATK and the new Ultimate \"Tenax Per Ignem,\" and simultaneously increasing this unit's CRIT Rate and CRIT DMG until the start of \"Infinite Fury's\" countdown turn."
    }
  ],
  "references": []
}