const configAbility = {
  "fileName": "Yukong_Yukong_Ability01_Part01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "condition": {
          "name": "Has Modifier",
          "target": "Caster",
          "modifier": "Yukong_Passive_BonusCD"
        }
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Yukong_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}