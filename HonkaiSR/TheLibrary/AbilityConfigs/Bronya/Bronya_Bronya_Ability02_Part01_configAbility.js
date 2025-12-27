const configAbility = {
  "fileName": "Bronya_Bronya_Ability02_Part01",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": "Single Target (Primary)"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Bronya_Ability02_Self_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Bronya_Ability02_Others_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}