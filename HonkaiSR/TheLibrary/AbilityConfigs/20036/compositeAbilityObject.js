const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20036,
  "trimCharacterName": 20036,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "beID": 20036,
    "team": "Neutral Team",
    "eventType": "Assist",
    "icon": "BattleEvent_NegativeHP.png",
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
        "value": 65
      }
    ],
    "hardLevel": true,
    "actionDescription": "When \"Overload Settlement\" on the action bar takes action, HP calculation will be performed. Units with HP below 0 will receive fatal damage. \"Overload Settlement\" will increase in speed as the number of enemy summons decreases, and will be removed when all enemy summons are defeated."
  },
  "noReader": true
}