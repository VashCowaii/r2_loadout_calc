const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 44006,
  "trimCharacterName": 44006,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "beID": 44006,
    "team": "Neutral Team",
    "eventType": "Assist",
    "icon": "BE_RogueFormula03.png",
    "abilityList": [
      "StageAbility_670700_Insert",
      "StageAbility_670700_Camera"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
        "value": 100
      }
    ],
    "hardLevel": true,
    "eliteGroup": true,
    "actionDescription": "When ally targets gain or consume Skill Points, they will gain 1 Hits Per Action for the next attack. Should their Hits Per Action reach the maximum or when the turn starts, each Hit Per Action deals Wind DMG to a random enemy and grants a Shield for all allies."
  },
  "noReader": true
}