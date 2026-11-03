const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61001,
  "trimCharacterName": 61001,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 6100101,
      "trigger": "Skill03",
      "name": "Edict: Evil Cleanse",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Depletes all enemies' Toughness and inflicts Weakness Break equal to the effects of Quantum Break. Based on the highest ATK on the team, deals Quantum DMG equal to #2[i]% of ATK to all enemies and increases enemies' DMG received by #1[i]% for #3[i] turn(s).",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0
        ]
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
    "beID": 61001,
    "team": "Neutral Team",
    "eventType": "Assist",
    "icon": "BattleEvent_Gourd.png",
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "spd": 100,
    "hardLevel": true,
    "eliteGroup": true,
    "params": [
      0.2,
      15,
      1
    ]
  },
  "noReader": true
}