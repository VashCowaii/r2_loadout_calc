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
          "value": {
            "displayLines": "1"
          },
          "variableName": "_Rank01_LoopTimeAdd"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_Rank01_LoopTimeAdd"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(4 + _Rank01_LoopTimeAdd)"
      },
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
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
                      "value": 0,
                      "variableName": "_has_poison_layer_greaterequal_5"
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
                              "displayLines": "5"
                            },
                            "valueType": "Layer"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "_has_poison_layer_greaterequal_5"
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
                            "displayLines": "0.08"
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
                      "displayLines": "0.56"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * 0.5)"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}