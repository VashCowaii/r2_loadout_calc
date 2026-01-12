const configAbility = {
  "fileName": "Yanqing_Yanqing_Ability02_Part01",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Yanqing_Ability02_Part02",
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