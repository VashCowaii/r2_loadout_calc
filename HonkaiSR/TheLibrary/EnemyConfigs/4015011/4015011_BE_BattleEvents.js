const configAbility = {
  "fileName": "4015011_BE_BattleEvents",
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
      "beID": 20015,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_DawnsEye_Rognarok.png",
      "abilityList": [
        "BattleEventAbility_Monster_DawnEye_01_Rognarok"
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
      "spd": 167,
      "hardLevel": true
    },
    {
      "name": "Battle Event Construction",
      "beID": 60029,
      "team": "Player Team",
      "eventType": "Assist",
      "icon": "BattleEvent_60024.png",
      "abilityList": [
        "BattleEventAbility_620101_Camera"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        }
      ],
      "spd": 100,
      "hardLevel": true,
      "eliteGroup": true,
      "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets. Adds \"Flame-Chase\" and \"Eagerness\" to all ally targets and restores HP.",
      "params": [
        4,
        1,
        2,
        0,
        0,
        4,
        0.5,
        0.4,
        10
      ]
    },
    {
      "name": "Battle Event Construction",
      "beID": 60037,
      "team": "Player Team",
      "eventType": "Assist",
      "icon": "BattleEvent_60024.png",
      "abilityList": [
        "BattleEventAbility_620101_Camera"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        }
      ],
      "spd": 120,
      "hardLevel": true,
      "eliteGroup": true,
      "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets, adds \"Flame-Chase\" to all ally targets and restores HP.",
      "params": [
        1.95,
        0,
        2,
        0,
        0,
        1.95,
        0,
        0.03
      ]
    }
  ],
  "references": []
}