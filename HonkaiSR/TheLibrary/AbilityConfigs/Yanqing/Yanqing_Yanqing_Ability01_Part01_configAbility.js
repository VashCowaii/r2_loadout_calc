const configAbility = {
  "fileName": "Yanqing_Yanqing_Ability01_Part01",
  "childAbilityList": [
    "Yanqing_Yanqing_Ability01_Camera",
    "Yanqing_Yanqing_Ability01_Part01",
    "Yanqing_Yanqing_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Yanqing_Ability01_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Single Target (Primary)",
        "modifier": "Yanqing_BonusTargetMark"
      }
    }
  ],
  "references": []
}