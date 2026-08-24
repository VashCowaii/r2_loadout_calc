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
      "ID": 20050,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Part03Act00"
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
          "value": 120
        }
      ],
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 20051,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Part03Act01"
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
          "value": 140
        }
      ],
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 60044,
      "team": "Player Team",
      "eventType": "Assist",
      "abilityList": null,
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
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action."
    },
    {
      "name": "Battle Event Construction",
      "ID": 20046,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Ultra"
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
          "value": 95
        }
      ],
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 20045,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W5_AsatPramad_Summon"
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
          "value": 115
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "Upon every action, summons \"Comediologist.\""
    }
  ],
  "references": []
}