const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability02_Part01",
  "childAbilityList": [
    "DanHengIL_DanHengIL_Ability02_Camera01",
    "DanHengIL_DanHengIL_Ability02_Camera02",
    "DanHengIL_DanHengIL_Ability02_Camera03",
    "DanHengIL_DanHengIL_Ability02_Part01",
    "DanHengIL_DanHengIL_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EXSkill01",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EXSkill01",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EXSkill01",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                "Deleted bullshit"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "DanHengIL_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}