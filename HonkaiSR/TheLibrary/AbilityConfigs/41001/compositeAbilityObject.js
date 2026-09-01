const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 41001,
  "trimCharacterName": 41001,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 4100101,
      "trigger": "Skill03",
      "name": "Path Resonance: Preservation",
      "type": "AoE",
      "slot": "Path Resonance",
      "desc": "Deals Physical DMG to all enemies based on the max DMG that can be absorbed by Shields on all allies.",
      "energyCost": 100,
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
    },
    "SkillP01": {
      "skillID": 4100102,
      "trigger": "SkillP01",
      "name": null,
      "type": "Talent",
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
    "ID": 41001,
    "team": "Neutral Team",
    "eventType": "Assist",
    "abilityList": null,
    "overridesArray": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "eventSpeed": 100,
    "hardLevelEvent": true,
    "eliteGroup": true
  },
  "noReader": true
}