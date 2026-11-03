const configAbility = {
  "fileName": "Robin_BE_BattleEvents",
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
      "beID": 11309,
      "team": "Player Team",
      "eventType": "Assist",
      "barType": 1,
      "icon": "BattleEvent_1309_A.png",
      "abilityList": [
        "BattleEventAbility_Robin_Ability03"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true,
      "actionDescription": "While Robin is in the \"Concerto\" state, increases all allies' ATK. After an attack, Robin deals Physical Additional DMG. While \"Concerto\" lasts, Robin is immune to Crowd Control debuffs. Before \"Concerto\" ends, Robin won't take a turn or action, lasting until the \"Concerto\" countdown turn begins."
    }
  ],
  "references": []
}