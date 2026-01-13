const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability02_Part01",
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
      "from": "Caster",
      "ability": "DanHengIL_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}