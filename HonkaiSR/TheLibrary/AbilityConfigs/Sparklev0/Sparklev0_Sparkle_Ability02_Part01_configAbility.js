const configAbility = {
  "fileName": "Sparklev0_Sparkle_Ability02_Part01",
  "childAbilityList": [
    "Sparklev0_Sparkle_Ability02_Part01",
    "Sparklev0_Sparkle_Ability02_Self_Camera",
    "Sparklev0_Sparkle_Ability02_Self_Part02",
    "Sparklev0_Sparkle_Ability02_Others_Camera",
    "Sparklev0_Sparkle_Ability02_Others_Part02"
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
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparkle_Ability02_Self_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparkle_Ability02_Others_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}