const configAbility = {
  "fileName": "JingYuan_JingYuan_Passive_Insert_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "ATKCount",
          "modifierName": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "multiplier": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "UltraATKCount",
          "modifierName": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
          "multiplier": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Battalia Crush"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "ATKCountSum",
          "value": {
            "operator": "Variables[0] (ATKCount) || Variables[1] (UltraATKCount) || ADD || RETURN",
            "displayLines": "(ATKCount + UltraATKCount)",
            "constants": [],
            "variables": [
              "ATKCount",
              "UltraATKCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ATKCountSum",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (6) || RETURN",
              "displayLines": "6",
              "constants": [],
              "variables": [
                6
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "JingYuan_CriticalDamageUp",
              "duration": 1,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (ATKCount) || RETURN",
        "displayLines": "ATKCount",
        "constants": [],
        "variables": [
          "ATKCount"
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.66) || RETURN",
                  "displayLines": "0.66",
                  "constants": [],
                  "variables": [
                    0.66
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Follow-up"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.66) || Variables[1] (0.25) || Variables[2] (0.25) || ADD || MUL || RETURN",
                      "displayLines": "(0.66 * (0.25 + 0.25))",
                      "constants": [],
                      "variables": [
                        0.66,
                        0.25,
                        0.25
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.66) || Variables[1] (0.25) || MUL || RETURN",
                      "displayLines": "(0.66 * 0.25)",
                      "constants": [],
                      "variables": [
                        0.66,
                        0.25
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "JingYuan_Eidolon6_AllDamageTypeTakenRatio",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
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
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (UltraATKCount) || RETURN",
        "displayLines": "UltraATKCount",
        "constants": [],
        "variables": [
          "UltraATKCount"
        ]
      },
      "Event": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ATKCount) || RETURN",
            "displayLines": "ATKCount",
            "constants": [],
            "variables": [
              "ATKCount"
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
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.66) || Variables[1] (JINGYUAN_OBJECT_UNUSED_1) || ADD || RETURN",
                      "displayLines": "(0.66 + JINGYUAN_OBJECT_UNUSED_1)",
                      "constants": [],
                      "variables": [
                        0.66,
                        "JINGYUAN_OBJECT_UNUSED_1"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (0.66) || Variables[1] (JINGYUAN_OBJECT_UNUSED_1) || ADD || Variables[2] (0.25) || Variables[3] (0.25) || ADD || MUL || RETURN",
                          "displayLines": "((0.66 + JINGYUAN_OBJECT_UNUSED_1) * (0.25 + 0.25))",
                          "constants": [],
                          "variables": [
                            0.66,
                            "JINGYUAN_OBJECT_UNUSED_1",
                            0.25,
                            0.25
                          ]
                        },
                        "Toughness": null,
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (0.66) || Variables[1] (JINGYUAN_OBJECT_UNUSED_1) || ADD || Variables[2] (0.25) || MUL || RETURN",
                          "displayLines": "((0.66 + JINGYUAN_OBJECT_UNUSED_1) * 0.25)",
                          "constants": [],
                          "variables": [
                            0.66,
                            "JINGYUAN_OBJECT_UNUSED_1",
                            0.25
                          ]
                        },
                        "Toughness": null,
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "JingYuan_Eidolon6_AllDamageTypeTakenRatio",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger: Attack End",
      "fakeCharacterAttack": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "JingYuan_Eidolon2_DamageAddedRatio[<span class=\"descriptionNumberColor\">Dharma Corpora</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "JingYuan_Eidolon6_AllDamageTypeTakenRatio"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "JingYuan_CriticalDamageUp"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "ATKCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "UltraATKCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_ATKCount",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_UltraATKCount",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "stackLimit": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "maximum": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    {
      "name": "Show Attack Time",
      "time": {
        "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
        "displayLines": "EnergyBar_ATKCount",
        "constants": [],
        "variables": [
          "EnergyBar_ATKCount"
        ]
      },
      "enhanced": {
        "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
        "displayLines": "EnergyBar_UltraATKCount",
        "constants": [],
        "variables": [
          "EnergyBar_UltraATKCount"
        ]
      },
      "on": null,
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Self-Made Battle-Events}}"
      },
      "modifier": "JingYuan_BattleEvent_ATKCountShowText",
      "valuePerStack": {
        "ATKCount": {
          "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
          "displayLines": "EnergyBar_ATKCount",
          "constants": [],
          "variables": [
            "EnergyBar_ATKCount"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Self-Made Battle-Events}}"
      },
      "modifier": "JingYuan_BattleEvent_SpeedUp"
    }
  ],
  "references": []
}