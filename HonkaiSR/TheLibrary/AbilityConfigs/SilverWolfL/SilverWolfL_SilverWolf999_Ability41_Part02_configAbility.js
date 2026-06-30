const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability41_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (6) || RETURN",
        "displayLines": "6",
        "constants": [],
        "variables": [
          6
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "instanceTag": "SilverWolf999_00_Skill41_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "True Ending Unlocked"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Elation_Skill_Punchline_Value",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (40) || RETURN",
              "displayLines": "40",
              "constants": [],
              "variables": [
                40
              ]
            }
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (20) || Variables[1] (20) || ADD || RETURN",
                  "displayLines": "(20 + 20)",
                  "constants": [],
                  "variables": [
                    20,
                    20
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Elation_Skill_Punchline_Value",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (20) || RETURN",
                  "displayLines": "20",
                  "constants": [],
                  "variables": [
                    20
                  ]
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (20) || RETURN",
                      "displayLines": "20",
                      "constants": [],
                      "variables": [
                        20
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TriggerItemChance",
      "value": {
        "operator": "Variables[0] (TriggerItemBaseChance) || RETURN",
        "displayLines": "TriggerItemBaseChance",
        "constants": [],
        "variables": [
          "TriggerItemBaseChance"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}