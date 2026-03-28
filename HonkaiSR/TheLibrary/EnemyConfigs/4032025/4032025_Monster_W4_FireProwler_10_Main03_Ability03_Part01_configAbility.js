const configAbility = {
  "fileName": "4032025_Monster_W4_FireProwler_10_Main03_Ability03_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_10_Main03_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
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
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Far Right Enemy Entity}}"
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
              "target": "{{Far Right Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Target Left of Caster}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_2) || RETURN",
                  "displayLines": "SummonID_2",
                  "constants": [],
                  "variables": [
                    "SummonID_2"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Left of Caster}}"
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
                  "operator": "Variables[0] (SummonID_2) || RETURN",
                  "displayLines": "SummonID_2",
                  "constants": [],
                  "variables": [
                    "SummonID_2"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Left of Caster}}"
                },
                "characterName": null
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_2) || RETURN",
                  "displayLines": "SummonID_2",
                  "constants": [],
                  "variables": [
                    "SummonID_2"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Right Enemy Entity}}"
                },
                "characterName": null
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}