const configAbility = {
  "fileName": "Natasha_Natasha_Ability02_Part01",
  "childAbilityList": [
    "Natasha_Natasha_Ability02_Camera_Self",
    "Natasha_Natasha_Ability02_Camera_Other",
    "Natasha_Natasha_Ability02_Part01",
    "Natasha_Natasha_Ability02_Part02"
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
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Natasha_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": "Single Target (Primary)"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}