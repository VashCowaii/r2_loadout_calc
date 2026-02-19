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
      "ID": 60029,
      "team": "Player Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_620101_Camera"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        }
      ],
      "eventSpeed": 100,
      "hardLevelEvent": true,
      "eliteGroup": true,
      "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets. Adds \"Flame-Chase\" and \"Eagerness\" to all ally targets and restores HP."
    },
    {
      "name": "Battle Event Construction",
      "ID": 20015,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_DawnEye_01_Rognarok"
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
      "eventSpeed": 167,
      "hardLevelEvent": true
    },
    {
      "name": "Battle Event Construction",
      "ID": 60037,
      "team": "Player Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_620101_Camera"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        }
      ],
      "eventSpeed": 120,
      "hardLevelEvent": true,
      "eliteGroup": true,
      "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets, adds \"Flame-Chase\" to all ally targets and restores HP."
    }
  ],
  "references": []
}