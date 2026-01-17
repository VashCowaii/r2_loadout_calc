const configAbility = {
  "fileName": "Bronya_Bronya_Ability02_Part01",
  "childAbilityList": [
    "Bronya_Bronya_Ability02_Others_Camera",
    "Bronya_Bronya_Ability02_Self_Camera",
    "Bronya_Bronya_Ability02_Part01",
    "Bronya_Bronya_Ability02_Others_Part02",
    "Bronya_Bronya_Ability02_Self_Part02"
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
          "ability": "Bronya_Ability02_Self_Part02",
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
          "ability": "Bronya_Ability02_Others_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}