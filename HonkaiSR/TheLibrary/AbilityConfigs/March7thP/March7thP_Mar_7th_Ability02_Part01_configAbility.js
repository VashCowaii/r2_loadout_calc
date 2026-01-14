const configAbility = {
  "fileName": "March7thP_Mar_7th_Ability02_Part01",
  "childAbilityList": [
    "March7thP_Mar_7th_Ability02_Part01",
    "March7thP_Mar_7th_Ability02_Part02",
    "March7thP_Mar_7th_Ability02_Camera_Self",
    "March7thP_Mar_7th_Ability02_Camera_Other"
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
      "ability": "Mar_7th_Ability02_Part02",
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