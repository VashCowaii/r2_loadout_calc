const configAbility = {
  "fileName": "4034017_Monster_W4_FireProwler_Ability02_Part01",
  "childAbilityList": [
    "4034017_Monster_W4_FireProwler_Ability02_Camera",
    "4034017_Monster_W4_FireProwler_Ability02_Part01",
    "4034017_Monster_W4_FireProwler_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Far Left Enemy Entity}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Target Right of Caster}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_1) || RETURN",
                  "displayLines": "SummonID_1",
                  "constants": [],
                  "variables": [
                    "SummonID_1"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                },
                "characterName": null
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_1) || RETURN",
                  "displayLines": "SummonID_1",
                  "constants": [],
                  "variables": [
                    "SummonID_1"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                },
                "characterName": null
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_1) || RETURN",
                  "displayLines": "SummonID_1",
                  "constants": [],
                  "variables": [
                    "SummonID_1"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "characterName": null
              }
            }
          ]
        }
      ]
    },
    "Deleted bullshit"
  ],
  "references": []
}