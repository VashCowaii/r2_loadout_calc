const configAbility = {
  "fileName": "DanHeng_DanHeng_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_RankSpeedDown",
          "value": {
            "operator": "Variables[0] (0.08) || RETURN",
            "displayLines": "0.08",
            "constants": [],
            "variables": [
              0.08
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_RankSpeedDown",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "DanHeng_Ability02_CheckCritical_Modifier",
      "valuePerStack": {
        "MDF_Chance": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.3,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.4,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "DanHeng_Ability02_CheckCritical_Modifier"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHeng_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Slow"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHeng_Ability02_CheckCritical_Modifier",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is a Crit"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "DanHeng_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (MDF_Chance) || RETURN",
                    "displayLines": "MDF_Chance",
                    "constants": [],
                    "variables": [
                      "MDF_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.12) || Variables[1] (_RankSpeedDown) || ADD || RETURN",
                      "displayLines": "(0.12 + _RankSpeedDown)",
                      "constants": [],
                      "variables": [
                        0.12,
                        "_RankSpeedDown"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Chance"
      ],
      "latentQueue": []
    }
  ]
}