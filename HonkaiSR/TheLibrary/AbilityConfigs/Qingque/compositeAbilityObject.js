const compositeAbilityObject = {
  "fullCharacterName": "Qingque",
  "trimCharacterName": "Qingque",
  "abilityList": [
    "Qingque_Qingque_Eidolon4_ATK_Special",
    "Qingque_Qingque_Eidolon4_ATK",
    "Qingque_Qingque_TechniqueInLevel",
    "Qingque_QingQue_PassiveAbility01",
    "Qingque_QingQue_Ability03_Part02",
    "Qingque_QingQue_Ability03_Part01",
    "Qingque_Qingque_Ability03_EnterReady",
    "Qingque_Qingque_Bonus",
    "Qingque_Qingque_BpInsertAction_Tiao",
    "Qingque_Qingque_BpInsertAction_Tong",
    "Qingque_Qingque_BpInsertAction_Wan",
    "Qingque_Qingque_BpInsertAction",
    "Qingque_QingQue_Ability02_Part02",
    "Qingque_QingQue_Ability02_Part01",
    "Qingque_QingQue_Ability11_Part02",
    "Qingque_QingQue_Ability11_Part01",
    "Qingque_QingQue_Ability01_Part02",
    "Qingque_QingQue_Ability01_Part01",
    "Qingque_Modifiers"
  ],
  "abilityObject": {
    "Qingque_Qingque_Eidolon4_ATK_Special": {
      "fileName": "Qingque_Qingque_Eidolon4_ATK_Special",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
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
                "Tags": null,
                "attackType": "Follow-up"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Blast (Adjacent)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "hitOwner": "Single Target (Primary)"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Qingque_Qingque_Eidolon4_ATK": {
      "fileName": "Qingque_Qingque_Eidolon4_ATK",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
                "Tags": null,
                "attackType": "Follow-up"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Qingque_Qingque_TechniqueInLevel": {
      "fileName": "Qingque_Qingque_TechniqueInLevel",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_PassiveCount_QingqueSelf",
              "valuePerStack": {
                "AbilityRank_Eidolon2_P1_SPAdd": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        "Refresh QingQue Bar-State"
      ],
      "references": []
    },
    "Qingque_QingQue_PassiveAbility01": {
      "fileName": "Qingque_QingQue_PassiveAbility01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_BPCoolDown",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_BPCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_CardCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_PropertyValue01",
          "value": {
            "operator": "Variables[0] (0.72) || RETURN",
            "displayLines": "0.72",
            "constants": [],
            "variables": [
              0.72
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_PropertyValue",
          "value": {
            "operator": "Variables[0] (0.72) || RETURN",
            "displayLines": "0.72",
            "constants": [],
            "variables": [
              0.72
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Wan",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tong",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tiao",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_PassiveCount",
          "valuePerStack": {
            "MDF_PropertyValue01": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Qingque_QingQue_Ability03_Part02": {
      "fileName": "Qingque_QingQue_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Qingque_Ability03_Eidolon1"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Qingque_Ability03_Eidolon1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Tiao",
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Tong",
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Wan",
          "removeAllInstances": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tong",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tiao",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Wan",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_CardCount",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
              "displayLines": "MDF_PropertyValue01",
              "constants": [],
              "variables": [
                "MDF_PropertyValue01"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_Flag_Yu"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Current Turn Is",
                "target": "Caster"
              },
              "Turn Owner is in Action"
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Hu_01"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Qingque_Bonus",
              "abilitySource": "Caster",
              "priorityTag": "AvatarBuffSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        },
        "Refresh QingQue Bar-State",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Qingque_Ability03_Eidolon1",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Qingque_QingQue_Ability03_Part01": {
      "fileName": "Qingque_QingQue_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "QingQue_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Qingque_Qingque_Ability03_EnterReady": {
      "fileName": "Qingque_Qingque_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Qingque_Qingque_Bonus": {
      "fileName": "Qingque_Qingque_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Winning Hand"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Ability11PreShowModifier"
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Celestial Jade"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "QingQue_Passive_Hu_Flag_Tong"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "QingQue_Passive_Hu_Flag_Tiao"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "QingQue_Passive_Hu_Flag_Wan"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "QingQue_Passive_Hu_Flag_Yu"
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
    },
    "Qingque_Qingque_BpInsertAction_Tiao": {
      "fileName": "Qingque_Qingque_BpInsertAction_Tiao",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "QingQue_Passive_Hu_Flag_Yu"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Celestial Jade"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Qingque_Qingque_BpInsertAction_Tong": {
      "fileName": "Qingque_Qingque_BpInsertAction_Tong",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "QingQue_Passive_Hu_Flag_Yu"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Celestial Jade"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Qingque_Qingque_BpInsertAction_Wan": {
      "fileName": "Qingque_Qingque_BpInsertAction_Wan",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "QingQue_Passive_Hu_Flag_Yu"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Celestial Jade"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Qingque_Qingque_BpInsertAction": {
      "fileName": "Qingque_Qingque_BpInsertAction",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_BPCount",
            "compareType": "=",
            "value2": 2
          }
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Qingque_QingQue_Ability02_Part02": {
      "fileName": "Qingque_QingQue_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_BPCount",
          "value": {
            "operator": "Variables[0] (QingQue_BPCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(QingQue_BPCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "QingQue_BPCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Tile Battle"
              },
              {
                "name": "Compare: Variable",
                "value1": "QingQue_BPCoolDown",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_BPCoolDown",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Bide Time"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.1) || Variables[1] (0.28) || ADD || RETURN",
                  "displayLines": "(0.1 + 0.28)",
                  "constants": [],
                  "variables": [
                    0.1,
                    0.28
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.28) || RETURN",
                  "displayLines": "0.28",
                  "constants": [],
                  "variables": [
                    0.28
                  ]
                }
              },
              "addStacksPerTrigger": 1
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
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_PassiveCount_QingqueSelf",
              "valuePerStack": {
                "AbilityRank_Eidolon2_P1_SPAdd": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_Tiao",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Winning Hand"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Ability11PreShowModifier"
                }
              ]
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": "Qingque_BpInsert",
              "canInjectUltimates": true,
              "followSameTagAsAction": true,
              "abilityName": "Qingque_BpInsertAction_Tiao",
              "afterInjection": []
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Tiao",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Tong",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Wan",
              "removeAllInstances": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tong",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tiao",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Wan",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_CardCount",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                  "displayLines": "MDF_PropertyValue01",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue01"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Hu_Flag_Tiao"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Wan",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Winning Hand"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Ability11PreShowModifier"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Qingque_BpInsert",
                  "canInjectUltimates": true,
                  "followSameTagAsAction": true,
                  "abilityName": "Qingque_BpInsertAction_Wan",
                  "afterInjection": []
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Tiao",
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Tong",
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Wan",
                  "removeAllInstances": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tong",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tiao",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Wan",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                      "displayLines": "MDF_PropertyValue01",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue01"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Hu_Flag_Wan"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Winning Hand"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Ability11PreShowModifier"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Qingque_BpInsert",
                      "canInjectUltimates": true,
                      "followSameTagAsAction": true,
                      "abilityName": "Qingque_BpInsertAction_Tong",
                      "afterInjection": []
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Tiao",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Tong",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Wan",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tong",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tiao",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                          "displayLines": "MDF_PropertyValue01",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue01"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Hu_Flag_Tong"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target has Extra-Turn Queued",
                        "target": "Allied Team"
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "canInjectUltimates": true,
                          "afterInjection": []
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentSkillPoints",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": null,
                              "canInjectUltimates": true,
                              "afterInjection": []
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": "Qingque_BpInsert",
                              "skillType": "ControlSkill02",
                              "skillTypeDelayed": "ControlSkill01",
                              "canInjectUltimates": true,
                              "followSameTagAsAction": true,
                              "abilityName": "Qingque_BpInsertAction",
                              "afterInjection": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Refresh QingQue Bar-State",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Qingque_QingQue_Ability02_Part01": {
      "fileName": "Qingque_QingQue_Ability02_Part01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "QingQue_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Qingque_QingQue_Ability11_Part02": {
      "fileName": "Qingque_QingQue_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
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
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Blast (Adjacent)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "hitOwner": "Skill Target List"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "MWQingque_Attack_Transfer"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_01"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_Flag_Wan"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_Flag_Tong"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_Flag_Tiao"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_Flag_Yu"
        },
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Winning Hand"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Qingque_SpeedUpPointB3[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_SpeedUp": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Hu_Flag"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Qingque_QingQue_Ability11_Part01": {
      "fileName": "Qingque_QingQue_Ability11_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "QingQue_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Qingque_QingQue_Ability01_Part02": {
      "fileName": "Qingque_QingQue_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_CardCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Tiao"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Tong"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Wan"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tiao",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tong",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Wan",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_CardCount",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_CardCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tong - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tong"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tiao",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 0
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Wan",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Wan"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": {
                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_Wan - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Wan"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Tong"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tong",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_Tong - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tong"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tiao",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Tiao"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tiao",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_Tiao - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tiao"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": {
                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(QingQue_CardCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_CardCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tiao - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tiao"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tiao - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tiao"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tong - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tong"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Wan - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Wan"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tong - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tong"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Wan - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Wan"
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tong - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tong"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tiao - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tiao"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 2
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tong - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tong"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 3
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tiao - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tiao"
                                        ]
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.34
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Wan"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Wan - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Wan"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tiao"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tiao",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_Tiao - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_Tiao"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tong"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tong",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_Tong - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_Tong"
                                            ]
                                          }
                                        }
                                      ]
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
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": {
                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_CardCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_CardCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_CardCount",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": 0
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": 0
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Wan",
                                    "compareType": "=",
                                    "value2": 3
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 0
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 0
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Wan"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 0
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 0
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
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
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Wan"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 1
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Wan",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Wan"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Wan",
                                          "value": 0
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tong"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tong",
                                          "value": 0
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Wan"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 1
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tong"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tong",
                                          "value": 0
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tiao"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tiao",
                                          "value": 0
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
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_CardCount",
                          "value": {
                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_CardCount - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_CardCount"
                            ]
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
        "Refresh QingQue Bar-State",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Qingque_QingQue_Ability01_Part01": {
      "fileName": "Qingque_QingQue_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "QingQue_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Qingque_Modifiers": {
      "fileName": "Qingque_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Action Target List",
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Caster",
                            "modifier": "QingQue_Passive_Hu_Flag"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Qingque_Eidolon4_ATK_Special",
                              "abilitySource": "Caster",
                              "abilityTarget": "Skill Point Entity",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Qingque_Eidolon4_ATK",
                              "abilitySource": "Caster",
                              "abilityTarget": "Skill Point Entity",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ],
          "description": "Launches 1 Follow-Up ATK immediately after using Basic ATK or Enhanced Basic ATK on an enemy, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
          "type": "Buff",
          "statusName": "Self-Sufficer"
        },
        {
          "name": "Modifier Construction",
          "for": "Qingque_SpeedUpPointB3[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                    "displayLines": "MDF_SpeedUp",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUp"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUp"
          ],
          "latentQueue": [],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUp</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu_01",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu_Flag_Yu",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu_Flag_Tiao",
          "stackData": [],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu_Flag_Tong",
          "stackData": [],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu_Flag_Wan",
          "stackData": [],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu_Flag",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MWQingque_Attack_Transfer",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Yu",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Tiao",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "QingQue_PassiveCount"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tiao",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_Tiao + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tiao"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Tong",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "QingQue_PassiveCount"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tong",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_Tong + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tong"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Wan",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "QingQue_PassiveCount"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": {
                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_Wan + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Wan"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_PassiveCount",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Hu_Flag",
                  "removeAllInstances": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_PassiveCount_QingqueSelf",
                  "valuePerStack": {
                    "AbilityRank_Eidolon2_P1_SPAdd": {
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
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": "Caster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 4
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_CardCount",
                            "compareType": "=",
                            "value2": 4
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                              "displayLines": "MDF_PropertyValue01",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue01"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Hu_Flag_Wan"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_CardCount",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 4
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_CardCount",
                                "compareType": "=",
                                "value2": 4
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                                  "displayLines": "MDF_PropertyValue01",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue01"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Hu_Flag_Tong"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong",
                              "removeAllInstances": true
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_CardCount",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 4
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tong",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Wan",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_CardCount",
                                    "compareType": "=",
                                    "value2": 4
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                                      "displayLines": "MDF_PropertyValue01",
                                      "constants": [],
                                      "variables": [
                                        "MDF_PropertyValue01"
                                      ]
                                    }
                                  }
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Hu_Flag_Tiao"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao",
                                  "removeAllInstances": true
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 0
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_CardCount",
                                  "value": 0
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Caster",
                          "modifier": "QingQue_Passive_Hu_01"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Qingque_Bonus",
                          "abilitySource": "Caster",
                          "priorityTag": "AvatarBuffSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                "Refresh QingQue Bar-State"
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates (Excluding Owner)",
                  "modifier": "QingQue_PassiveCount_Teammate",
                  "valuePerStack": {
                    "QingQue_CardCount_Teammate": {
                      "operator": "Variables[0] (QingQue_CardCount) || RETURN",
                      "displayLines": "QingQue_CardCount",
                      "constants": [],
                      "variables": [
                        "QingQue_CardCount"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Teammates (Excluding Owner)",
                  "modifier": "QingQue_PassiveCount_Teammate"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue01"
          ],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_PassiveCount_Teammate",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "QingQue_PassiveCount"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_PassiveCount_QingqueSelf",
                      "valuePerStack": {
                        "AbilityRank_Eidolon2_P1_SPAdd": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
                    }
                  ]
                },
                "Refresh QingQue Bar-State"
              ]
            }
          ],
          "stackData": [
            "QingQue_CardCount_Teammate"
          ],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_PassiveCount_QingqueSelf",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "QingQue_PassiveCount"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Caster",
                          "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Qingque_ChangeCard"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Owner of this Modifier",
                      "value": {
                        "operator": "Variables[0] (SkillRank_Rank02_P1_SPAdd) || RETURN",
                        "displayLines": "SkillRank_Rank02_P1_SPAdd",
                        "constants": [],
                        "variables": [
                          "SkillRank_Rank02_P1_SPAdd"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Qingque_ChangeCard",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "<",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.33
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": {
                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_CardCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_CardCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_CardCount",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 4
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 4
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 4
                                  },
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                                        "displayLines": "(QingQue_CardCount + 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.33
                                      },
                                      "passed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Wan"
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Random Chance",
                                            "chance": 0.5
                                          },
                                          "passed": [
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tong"
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tiao"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_CardCount",
                                            "compareType": "=",
                                            "value2": 5
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_CardCount",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_CardCount - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_CardCount"
                                            ]
                                          }
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tiao"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Wan"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": "=",
                                                "value2": 0
                                              },
                                              "passed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Wan",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                      "displayLines": "QingQue_Tong",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tong"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tong"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">=",
                                                "value2": 1
                                              },
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">=",
                                                "value2": 1
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tiao"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Tiao",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                      "displayLines": "QingQue_Tong",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tong"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tong"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Random Chance",
                                                        "chance": 0.5
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": "Caster",
                                                          "modifier": "QingQue_Passive_Tong"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tong",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tong - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tong"
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      "failed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": "Caster",
                                                          "modifier": "QingQue_Passive_Tiao"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tiao",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tiao - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tiao"
                                                            ]
                                                          }
                                                        }
                                                      ]
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
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_CardCount",
                                            "compareType": "=",
                                            "value2": 5
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_CardCount",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_CardCount - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_CardCount"
                                            ]
                                          }
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tiao"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tong"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": "=",
                                                "value2": 0
                                              },
                                              "passed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Wan",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                      "displayLines": "QingQue_Tong",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tong"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tong"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">=",
                                                "value2": 1
                                              },
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">=",
                                                "value2": 1
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tiao"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Tiao",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                      "displayLines": "QingQue_Wan",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Wan"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Random Chance",
                                                        "chance": 0.5
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": "Caster",
                                                          "modifier": "QingQue_Passive_Wan"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Wan",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Wan - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Wan"
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      "failed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": "Caster",
                                                          "modifier": "QingQue_Passive_Tiao"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tiao",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tiao - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tiao"
                                                            ]
                                                          }
                                                        }
                                                      ]
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
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": ">=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_CardCount",
                                            "compareType": "=",
                                            "value2": 5
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_CardCount",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_CardCount - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_CardCount"
                                            ]
                                          }
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tiao"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tong"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": "=",
                                                "value2": 0
                                              },
                                              "passed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Wan",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                      "displayLines": "QingQue_Tiao",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tiao"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tiao"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tiao",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tiao - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tiao"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">=",
                                                "value2": 1
                                              },
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">=",
                                                "value2": 1
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tong"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Tong",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                      "displayLines": "QingQue_Wan",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Wan"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Random Chance",
                                                        "chance": 0.5
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": "Caster",
                                                          "modifier": "QingQue_Passive_Wan"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Wan",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Wan - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Wan"
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      "failed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": "Caster",
                                                          "modifier": "QingQue_Passive_Tong"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tong",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tong - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tong"
                                                            ]
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "SkillRank_Rank02_P1_SPAdd"
          ],
          "latentQueue": [
            "QingQue_CardCount_Teammate",
            "QingQue_BPCoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "MWQingque_Attack_Transfer"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_BPCount",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ],
          "description": "Basic ATK is Enhanced and increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Hidden Hand"
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "removeAllInstances": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddedRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddedRatio"
          ],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ],
          "description": "Each stack increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, up to 4 stacks.",
          "type": "Buff",
          "statusName": "DMG Boost",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "QingQue_Ability11PreShowModifier",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Ability11PreShowModifier"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "QingQue_BPCoolDown"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Basic ATK"
            ],
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "Qingque_SpeedUpPointB3[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.1(SPD Change)"
            }
          }
        }
      ],
      "references": []
    }
  }
}