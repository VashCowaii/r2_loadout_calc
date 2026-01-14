const configAbility = {
  "fileName": "Cerydra_Cerydra_Ability03_Part01",
  "childAbilityList": [
    "Cerydra_Cerydra_Ability03_Camera",
    "Cerydra_Cerydra_Ability03_EnterReady",
    "Cerydra_Cerydra_Ability03_Part01",
    "Cerydra_Cerydra_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Cerydra_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": "Cerydra Ultimate Target List",
        "compareType": ">=",
        "value2": 2,
        "isClientOnly": true
      }
    }
  ],
  "references": []
}