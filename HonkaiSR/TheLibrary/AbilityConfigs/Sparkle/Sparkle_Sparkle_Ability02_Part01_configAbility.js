const configAbility = {
  "fileName": "Sparkle_Sparkle_Ability02_Part01",
  "childAbilityList": [
    "Sparkle_Sparkle_Ability02_Part01",
    "Sparkle_Sparkle_Ability02_Self_Camera",
    "Sparkle_Sparkle_Ability02_Self_Part02",
    "Sparkle_Sparkle_Ability02_Others_Camera",
    "Sparkle_Sparkle_Ability02_Others_Part02"
  ],
  "skillTrigger": "Skill02",
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
          "ability": "Sparkle_Ability02_Self_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Sparkle_Ability02_Others_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}