const configAbility = {
  "fileName": "Archer_Archer_Ability03_Part01",
  "childAbilityList": [
    "Archer_Archer_Ability03_Camera",
    "Archer_Archer_Ability03_EnterReady",
    "Archer_Archer_Ability03_Part01",
    "Archer_Archer_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Archer_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": "Single Target (Primary)",
        "compareType": ">=",
        "value2": 5
      }
    }
  ],
  "references": []
}