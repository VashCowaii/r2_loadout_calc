const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 52,
  "trimCharacterName": 52,
  "abilityList": [
    "52_BattleEventAbility_620701_Camera",
    "52_BattleEventAbility_620701"
  ],
  "abilityObject": {
    "52_BattleEventAbility_620701_Camera": {
      "fileName": "52_BattleEventAbility_620701_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "52_BattleEventAbility_620701": {
      "fileName": "52_BattleEventAbility_620701",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    }
  },
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "ID": 52,
    "team": "Neutral Team",
    "eventType": "Assist",
    "abilityList": [
      "BattleEventAbility_620701",
      "BattleEventAbility_620701_Camera"
    ],
    "overridesArray": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "eventSpeed": 20,
    "hardLevelEvent": true,
    "eliteGroup": true
  }
}