const configAbility = {
  "fileName": "8015030_BE_BattleEvents",
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
      "beID": 20050,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "Monster_8015030.png",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Part03Act00"
      ],
      "statOverrides": [
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
          "value": 120
        }
      ],
      "hardLevel": true
    },
    {
      "name": "Battle Event Construction",
      "beID": 20051,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "Monster_8015040.png",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Part03Act01"
      ],
      "statOverrides": [
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
          "value": 140
        }
      ],
      "hardLevel": true
    },
    {
      "name": "Battle Event Construction",
      "beID": 60044,
      "team": "Player Team",
      "eventType": "Assist",
      "icon": "BattleEvent_60044.png",
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true,
      "actionDescription": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action.",
      "params": [
        0.15,
        0.3,
        7,
        8,
        0.3
      ]
    },
    {
      "name": "Battle Event Construction",
      "beID": 20046,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W5_AsatPramad_00_Ultra.png",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Ultra"
      ],
      "statOverrides": [
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
          "value": 95
        }
      ],
      "hardLevel": true
    },
    {
      "name": "Battle Event Construction",
      "beID": 20045,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W5_AsatPramad_00_SummonMonster.png",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Summon"
      ],
      "statOverrides": [
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
          "value": 115
        }
      ],
      "hardLevel": true,
      "actionDescription": "Upon every action, summons \"Comediologist.\""
    }
  ],
  "references": []
}