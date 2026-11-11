const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60051,
  "trimCharacterName": 60051,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 6005101,
      "trigger": "Skill03",
      "name": "Super Cosmic Elation Magic Show",
      "type": "Single Target",
      "slot": "Ultimate",
      "desc": "Deals massive Quantum DMG to all enemies and the ally team gains Punchline.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": 5,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.04,
          15
        ]
      },
      "element": "Quantum",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        0,
        15,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6005102,
      "trigger": "SkillP01",
      "name": null,
      "type": "Talent",
      "slot": "Talent",
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
      "skillEffect": "Passive",
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
    "beID": 60051,
    "team": "Player Team",
    "eventType": "Assist",
    "icon": "BattleEvent_Gluttony_Game03.png",
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
        "value": 100
      }
    ],
    "hardLevel": true,
    "actionDescription": "Deals massive Quantum DMG to all enemies and the ally team gains Punchline."
  },
  "noReader": true
}