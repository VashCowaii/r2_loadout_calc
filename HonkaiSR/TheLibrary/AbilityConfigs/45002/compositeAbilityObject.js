const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 45002,
  "trimCharacterName": 45002,
  "abilityList": [],
  "abilityObject": {},
  "enemyData": {
    "Skill03": {
      "skillID": 4500201,
      "trigger": "Skill03",
      "name": "Tactical Codex: Hidden Agenda",
      "type": "AoE",
      "slot": "Tactics",
      "desc": "Allies gain Early Reveal. In the effect duration, after every attack, launch 1 attack against all enemies that have been hit and inflict them with the Startled debuff.",
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
    "ID": 45002,
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