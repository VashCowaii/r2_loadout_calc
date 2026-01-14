const configAbility = {
  "fileName": "Robin_Robin_Ability03_Part01",
  "childAbilityList": [
    "Robin_Robin_Ability03_Camera",
    "Robin_Robin_Ability03_EnterReady",
    "Robin_Robin_Ability03_Part01",
    "Robin_Robin_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Active: Fast-Forward Animations"
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Robin_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}