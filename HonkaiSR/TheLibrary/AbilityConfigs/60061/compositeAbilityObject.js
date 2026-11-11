const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60061,
  "trimCharacterName": 60061,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 6006101,
      "trigger": "Skill03",
      "name": "Mechatron Swordomain: Void Slash",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "element": "Imaginary",
      "attackType": "Ultra",
      "skillEffect": "SingleAttack",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        0,
        180,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6006102,
      "trigger": "SkillP01",
      "name": "Mechatron Swordomain: Void Slash",
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
    "beID": 60061,
    "team": "Player Team",
    "eventType": "Assist",
    "icon": "BattleEvent_60044.png",
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
        "value": 100
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
        "value": 100
      }
    ],
    "hardLevel": true,
    "actionDescription": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action.",
    "params": [
      0.08,
      0.3,
      8,
      0,
      0.3
    ]
  },
  "noReader": true
}