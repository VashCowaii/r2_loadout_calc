const configAbility = {
  "fileName": "Argenti_Argenti_Ability31_Part01",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    5,
    20,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Auto-Battle"
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Argenti_Ability31_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}