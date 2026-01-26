const configAbility = {
  "fileName": "Sampo_FireBullet_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank01_LoopTimeAdd",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank01_LoopTimeAdd",
          "value": 0
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (4) || Variables[1] (_Rank01_LoopTimeAdd) || ADD || RETURN",
        "displayLines": "(4 + _Rank01_LoopTimeAdd)",
        "constants": [],
        "variables": [
          4,
          "_Rank01_LoopTimeAdd"
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "Shot Fired",
              "projectileCount": 1,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_has_poison_layer_greaterequal_5",
                      "value": 0
                    },
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "counter": 99,
                      "flagFilter": [
                        "STAT_DOT_Poison"
                      ],
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Modifier_Callback_Value",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (5) || RETURN",
                              "displayLines": "5",
                              "constants": [],
                              "variables": [
                                5
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_has_poison_layer_greaterequal_5",
                              "value": 1
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_has_poison_layer_greaterequal_5",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextAbility"
                      },
                      "passed": [
                        {
                          "name": "Trigger Modifier Event",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "variableName": "DOT_TriggerRatio",
                          "eventType": "DOT_Poison",
                          "value": {
                            "operator": "Variables[0] (0.08) || RETURN",
                            "displayLines": "0.08",
                            "constants": [],
                            "variables": [
                              0.08
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (0.56) || RETURN",
                      "displayLines": "0.56",
                      "constants": [],
                      "variables": [
                        0.56
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Shot Fired"
    },
    "Deleted bullshit",
    "Trigger: Ability End"
  ],
  "references": []
}