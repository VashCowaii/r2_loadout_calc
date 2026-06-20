const configAbility = {
  "fileName": "Firefly_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
      "parse": [
        {
          "name": "Set Current Turn-Action Entity",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Wave Count",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "IsForceStanceDamage",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextTaskTemplate"
                  },
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  }
                ]
              },
              "ignoreParallelWarning": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "IsForceStanceDamage",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (IsForceStanceDamage) || Constants[0] (1) || EQUAL || Variables[1] (ENEMIES_OBJECT_UNUSED__310) || Variables[2] (ENEMIES_OBJECT_UNUSED__312) || CHECK || Constants[0] (1) || Variables[3] (ENEMIES_OBJECT_UNUSED__313) || ADD || MUL || RETURN",
                        "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "IsForceStanceDamage",
                          "ENEMIES_OBJECT_UNUSED__310",
                          "ENEMIES_OBJECT_UNUSED__312",
                          "ENEMIES_OBJECT_UNUSED__313"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (IsForceStanceDamage) || Constants[0] (1) || EQUAL || Variables[1] (ENEMIES_OBJECT_UNUSED__310) || Variables[2] (ENEMIES_OBJECT_UNUSED__312) || CHECK || Constants[0] (1) || Variables[3] (ENEMIES_OBJECT_UNUSED__313) || ADD || MUL || RETURN",
                        "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "IsForceStanceDamage",
                          "ENEMIES_OBJECT_UNUSED__310",
                          "ENEMIES_OBJECT_UNUSED__312",
                          "ENEMIES_OBJECT_UNUSED__313"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Target__Toughness",
                    "compareType": ">",
                    "value2": 0
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}