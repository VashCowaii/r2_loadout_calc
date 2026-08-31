const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 210001,
  "trimCharacterName": 210001,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 10000101,
      "trigger": "Skill03",
      "name": "Gáe Bolg",
      "type": "Single Target",
      "slot": "Gáe Bolg",
      "desc": "Using \"Gáe Bolg\" can instantly defeat non-Elite Enemies, and can deal massive DMG to Elite Enemies.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {},
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
      "skillID": 9615302,
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
      "configAbilityList": [
        "Activity_Fate_LancerBE_Base_Skill_EnterReady",
        "Activity_FateRin_RuleBreaker_Phase01",
        "Activity_FateRin_RuleBreaker_Phase02",
        "Activity_FateRin_RuleBreaker_Camera",
        "Activity_FateRin_RuleBreaker_Effect"
      ],
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
    "ID": 210001,
    "team": "Player Team",
    "eventType": "Assist",
    "abilityList": null,
    "overridesArray": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "hardLevelEvent": true,
    "eliteGroup": true
  },
  "noReader": true
}