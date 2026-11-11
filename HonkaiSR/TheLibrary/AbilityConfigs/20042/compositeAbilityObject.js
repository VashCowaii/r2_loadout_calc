const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20042,
  "trimCharacterName": 20042,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill01": {
      "skillID": 2004201,
      "trigger": "Skill01",
      "name": "Shoot",
      "type": "Single Target",
      "slot": "Basic ATK",
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
      "element": "Quantum",
      "skillEffect": "SingleAttack",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "Skill02": {
      "skillID": 2004202,
      "trigger": "Skill02",
      "name": "Give Up",
      "type": "Support",
      "slot": "Ultimate",
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
      "skillEffect": "Support",
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
    "beID": 20042,
    "team": "Neutral Team",
    "eventType": "Entity Selection",
    "icon": "BattleEvent_Gluttony_Game02.png",
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
        "value": 100
      }
    ],
    "hardLevel": true
  },
  "noReader": true
}