const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61006,
  "trimCharacterName": 61006,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 6100601,
      "trigger": "Skill03",
      "name": "Edict: Quincunx Smite",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Apply 1 stack of Skyfire Curse to all enemies for a maximum of #1[i] stacks. This exorcismics only requires 1 charge. Skyfire Curse will detonate after the affected target is attacked. When Skyfire Curse detonates, deals Fire DMG equal to #2[i]% of the ATK of the ally with the highest ATK on the team to affected targets, and deals Fire DMG equal to #3[i]% of the ATK of the ally with the highest ATK to adjacent targets. The target's and adjacent enemies' subsequent Skyfire Curse DMG received are increased by #4[i]%, stacking up to #5[i] time(s).",
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
    "ID": 61006,
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