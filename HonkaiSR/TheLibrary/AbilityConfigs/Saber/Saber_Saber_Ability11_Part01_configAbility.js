const configAbility = {
  "fileName": "Saber_Saber_Ability11_Part01",
  "childAbilityList": [
    "Saber_Saber_Ability11_Camera",
    "Saber_Saber_Ability11_Part01",
    "Saber_Saber_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 30,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Saber_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": "Under Control Effect"
    }
  ],
  "references": []
}