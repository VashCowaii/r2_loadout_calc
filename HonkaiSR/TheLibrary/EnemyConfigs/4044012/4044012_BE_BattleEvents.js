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
      "beID": 20024,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W4_Theoroi_00_Phase1.png",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Theoroi_Summon"
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
      "spd": 170,
      "hardLevel": true,
      "actionDescription": "Generates \"Titankin\" upon taking action."
    },
    {
      "name": "Battle Event Construction",
      "beID": 20028,
      "team": "Enemy Team",
      "eventType": "Assist",
      "icon": "BattleEvent_W4_Theoroi_00_Phase2.png",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Theoroi_Enhance"
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
      "spd": 210,
      "hardLevel": true,
      "actionDescription": "When taking action, enhances Zandar and his next use of \"Query: Prime Mover's Outcome.\""
    }
  ],
  "references": []
}