const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20032,
  "trimCharacterName": 20032,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill01": {
      "skillID": 2003201,
      "trigger": "Skill01",
      "name": "Housecleaning",
      "type": "Single Target",
      "slot": "Basic ATK",
      "desc": "Deals Quantum DMG to one designated enemy and gains Punchline.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": 10,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          4,
          5,
          30
        ]
      },
      "element": "Quantum",
      "attackType": "Normal",
      "skillEffect": "SingleAttack",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        30,
        0,
        0
      ],
      "hitSplits": []
    },
    "Skill11": {
      "skillID": 2003202,
      "trigger": "Skill11",
      "name": "Dirt Water Slinging",
      "type": "Impair",
      "slot": "Skill",
      "desc": "Consumes #2[i] point(s) of Charge, dealing Quantum DMG to one designated enemy target and True DMG equal to a certain percentage of the target's Max HP, and removes 1 stack of the \"Lasting Antibac\" effect from the target.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": 20,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.015,
          20,
          3,
          60
        ]
      },
      "element": "Quantum",
      "attackType": "BPSkill",
      "skillEffect": "Impair",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        60,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 2003203,
      "trigger": "SkillP01",
      "name": "Extremeflash Charge",
      "type": "Talent",
      "slot": "Talent",
      "desc": "Each time ally targets gain 1 Punchline, this unit accumulates 1 Charge Value point. Upon reaching #1[i] Charge Value points, immediately gains an extra turn and gains access to Enhanced Basic ATK.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          20
        ]
      },
      "element": "Quantum",
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
  "noReader": true
}