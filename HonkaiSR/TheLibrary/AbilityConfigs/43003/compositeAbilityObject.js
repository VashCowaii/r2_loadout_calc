const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 43003,
  "trimCharacterName": 43003,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 4300301,
      "trigger": "Skill03",
      "name": "Path Resonance: The Hunt",
      "type": "AoE",
      "slot": "Path Resonance",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "ID": 43003,
    "team": "Neutral Team",
    "eventType": "Assist",
    "abilityList": [
      "BattleEventAbility_RogueDLCSandworm_Camera",
      "BattleEventAbility_RogueDLCSandworm_Insert"
    ],
    "overridesArray": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
        "value": 18
      }
    ],
    "eventSpeed": 50,
    "hardLevelEvent": true,
    "eliteGroup": true
  },
  "noReader": true
}