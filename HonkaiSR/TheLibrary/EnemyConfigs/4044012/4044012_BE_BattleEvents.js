const configAbility = {
  "fileName": "4044012_BE_BattleEvents",
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
      "ID": 20024,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Theoroi_Summon"
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
      "eventSpeed": 170,
      "hardLevelEvent": true,
      "actionDescription": "Generates \"Titankin\" upon taking action."
    },
    {
      "name": "Battle Event Construction",
      "ID": 20028,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Theoroi_Enhance"
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
      "eventSpeed": 210,
      "hardLevelEvent": true,
      "actionDescription": "When taking action, enhances Zandar and his next use of \"Query: Prime Mover's Outcome.\""
    }
  ],
  "references": []
}