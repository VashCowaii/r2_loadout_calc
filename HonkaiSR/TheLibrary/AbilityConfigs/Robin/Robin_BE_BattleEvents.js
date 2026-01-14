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
      "ID": 11309,
      "team": "TeamLight",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Robin_Ability03"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true,
      "barType": 1,
      "actionDescription": "While Robin is in the \"Concerto\" state, increases all allies' ATK. After an attack, Robin deals Physical Additional DMG. While \"Concerto\" lasts, Robin is immune to Crowd Control debuffs. Before \"Concerto\" ends, Robin won't take a turn or action, lasting until the \"Concerto\" countdown turn begins."
    }
  ],
  "references": []
}