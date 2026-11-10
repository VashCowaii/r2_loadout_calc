const configAbility = {
  "fileName": "Evanescia_Evanescia_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1310995567\">_M_Evanescia_Ability21_TargetTimeslow</a>",
      "silentAdd": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Watch All Revels"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "EnemyCount",
          "scope": "ContextAbility",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "living": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnemyCount",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "value": {
                "displayLines": "(5 + 1)"
              },
              "variableName": "LoopCount"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnemyCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "value": {
                    "displayLines": "(5 + 2)"
                  },
                  "variableName": "LoopCount"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "value": {
                    "displayLines": "(5 + 4)"
                  },
                  "variableName": "LoopCount"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": 5,
          "variableName": "LoopCount"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "1.6"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "ElationEchoPoint"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageElation": {
              "displayLines": "0.24"
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "instanceTag": "Evanescia_Ultra",
            "Tags": null,
            "attackType": "Elation DMG"
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "LoopCount"
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "1.2"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "ElationEchoPoint"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageElation": {
                      "displayLines": "0.28"
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "instanceTag": "Evanescia_Ultra",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1310995567\">_M_Evanescia_Ability21_TargetTimeslow</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}