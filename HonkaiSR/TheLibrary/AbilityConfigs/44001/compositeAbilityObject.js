const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 44001,
  "trimCharacterName": 44001,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "ID": 44001,
    "team": "Neutral Team",
    "eventType": "Assist",
    "abilityList": [
      "StageAbility_670010_Insert",
      "StageAbility_670010_Camera"
    ],
    "overridesArray": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
        "value": 80
      }
    ],
    "hardLevelEvent": true,
    "eliteGroup": true,
    "actionDescription": "Each time it takes a turn, absorbs all allies' Shields, reducing their values to 1, and turning the absorbed values into its own Shield. Then, it deals Physical DMG equal to a certain value to all enemies, with a chance to Freeze enemies. When characters take damage, \"Comet Nucleus\"'s Shield will be consumed first. When \"Quake\" DMG is triggered, a portion of \"Comet Nucleus\"'s Shield value will be considered as the character's Shield."
  },
  "noReader": true
}