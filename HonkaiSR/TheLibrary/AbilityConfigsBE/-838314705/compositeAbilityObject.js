const compositeAbilityObject = {
  "fullCharacterName": -838314705,
  "trimCharacterName": -838314705,
  "abilityList": [
    "-838314705_StrongChallengeEX_Test_StageAbility_SpeedUp",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi_New",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_OD",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera",
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
    "-838314705_StrongChallengeEX_Test_StageAbility_001",
    "-838314705_StrongChallengeEX_Environment_StageAbility_014",
    "-838314705_StrongChallengeEX_Environment_StageAbility_013",
    "-838314705_StrongChallengeEX_Environment_StageAbility_012",
    "-838314705_StrongChallengeEX_Environment_StageAbility_011",
    "-838314705_StrongChallengeEX_Environment_StageAbility_010",
    "-838314705_StrongChallengeEX_Environment_StageAbility_009",
    "-838314705_StrongChallengeEX_Environment_StageAbility_008",
    "-838314705_StrongChallengeEX_Environment_StageAbility_007",
    "-838314705_StrongChallengeEX_Environment_StageAbility_006",
    "-838314705_StrongChallengeEX_Environment_StageAbility_005",
    "-838314705_StrongChallengeEX_Environment_StageAbility_004",
    "-838314705_StrongChallengeEX_Environment_StageAbility_003",
    "-838314705_StrongChallengeEX_Environment_StageAbility_002",
    "-838314705_StrongChallengeEX_Environment_StageAbility_001",
    "-838314705_Modifiers"
  ],
  "abilityObject": {
    "-838314705_StrongChallengeEX_Test_StageAbility_SpeedUp": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_SpeedUp",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": 3,
              "valuePerStack": {
                "MDF_PropertyValue": 50
              }
            }
          ]
        }
      ],
      "references": []
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi_New": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi_New",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New",
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
            "modifier": "Monster_W2_Feixiao_IF_OnLevel"
          }
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Standard_SuperArmorBreak_Mark"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_HP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": 1,
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
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
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_BP"
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 5,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": -1,
                      "adjustmentType": "Advance"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
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
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "toRemove": [
                "STAT_CTRL"
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_CurrentStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                    "displayLines": "MDF_CurrentStance",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentStance"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": "ReadTargetType",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "_CharacterCount",
          "livingTargets": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Index"
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ActionDelay",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (BOSS_BreakDelay_01) || RETURN",
                  "displayLines": "BOSS_BreakDelay_01",
                  "constants": [],
                  "variables": [
                    "BOSS_BreakDelay_01"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] (BOSS_BreakDelay_01) || RETURN",
                    "displayLines": "BOSS_BreakDelay_01",
                    "constants": [],
                    "variables": [
                      "BOSS_BreakDelay_01"
                    ]
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CharacterCount",
            "compareType": ">=",
            "value2": 2
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ActionDelay",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (BOSS_BreakDelay_02) || RETURN",
                  "displayLines": "BOSS_BreakDelay_02",
                  "constants": [],
                  "variables": [
                    "BOSS_BreakDelay_02"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] (BOSS_BreakDelay_02) || RETURN",
                    "displayLines": "BOSS_BreakDelay_02",
                    "constants": [],
                    "variables": [
                      "BOSS_BreakDelay_02"
                    ]
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Index",
                "indexValue": 2
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CharacterCount",
            "compareType": ">=",
            "value2": 3
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ActionDelay",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (BOSS_BreakDelay_03) || RETURN",
                  "displayLines": "BOSS_BreakDelay_03",
                  "constants": [],
                  "variables": [
                    "BOSS_BreakDelay_03"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] (BOSS_BreakDelay_03) || RETURN",
                    "displayLines": "BOSS_BreakDelay_03",
                    "constants": [],
                    "variables": [
                      "BOSS_BreakDelay_03"
                    ]
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Index",
                "indexValue": 3
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CharacterCount",
            "compareType": ">=",
            "value2": 4
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ActionDelay",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (BOSS_BreakDelay_04) || RETURN",
                  "displayLines": "BOSS_BreakDelay_04",
                  "constants": [],
                  "variables": [
                    "BOSS_BreakDelay_04"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] (BOSS_BreakDelay_04) || RETURN",
                    "displayLines": "BOSS_BreakDelay_04",
                    "constants": [],
                    "variables": [
                      "BOSS_BreakDelay_04"
                    ]
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Index",
                "indexValue": 4
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CharacterCount",
            "compareType": ">=",
            "value2": 5
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ActionDelay",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (BOSS_BreakDelay_05) || RETURN",
                  "displayLines": "BOSS_BreakDelay_05",
                  "constants": [],
                  "variables": [
                    "BOSS_BreakDelay_05"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] (BOSS_BreakDelay_05) || RETURN",
                    "displayLines": "BOSS_BreakDelay_05",
                    "constants": [],
                    "variables": [
                      "BOSS_BreakDelay_05"
                    ]
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SpeedUp"
          },
          "passed": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team"
          },
          "passed": [
            "Trigger: Ability End"
          ]
        }
      ],
      "references": []
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_HP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": 1,
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
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
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_BP"
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 5,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "variables": {
                "parameter[0]_NormalizedValue": 1
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "toRemove": [
                "STAT_CTRL"
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ActionDelay",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (BOSS_BreakDelay) || RETURN",
                  "displayLines": "BOSS_BreakDelay",
                  "constants": [],
                  "variables": [
                    "BOSS_BreakDelay"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] (BOSS_BreakDelay) || RETURN",
                    "displayLines": "BOSS_BreakDelay",
                    "constants": [],
                    "variables": [
                      "BOSS_BreakDelay"
                    ]
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_EndDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_CurrentStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                    "displayLines": "MDF_CurrentStance",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentStance"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": "Imaginary"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "set": 15
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "APOC_BOOL_OBJECT_UNUSED_23"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_22"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.4
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_22"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 1.6
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "APOC_BOOL_OBJECT_UNUSED_21"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.8
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "APOC_BOOL_OBJECT_UNUSED_20"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 1.2
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "MModifier_Monster_W3_Theater_IF_MinionsSuperArmorBreak[<span class=\"descriptionNumberColor\">Prolonged Class</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeTakenRatio": 1
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SpeedUp"
          },
          "passed": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team"
          },
          "passed": [
            "Trigger: Ability End"
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_OneMoreAction_OnSub_1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MStrongChallengeEX_OneMoreAction_OnSub_1",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_MaxLayer) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(_MaxLayer * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  }
                }
              ]
            }
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "conditions": {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value1": null,
              "compareType": ">=",
              "value2": 1,
              "valueType": "Layer"
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -100
            },
            "changeDelay": true
          },
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_OneMoreAction_OnAvatar",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "ReduceActionDelay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": 1
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Extra-Turn",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                            },
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "valueType": "Layer",
                              "variableName": "ModifierLayers",
                              "modifierName": "MStrongChallengeEX_OneMoreAction_OnSub_1",
                              "multiplier": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "ModifierLayers",
                                "compareType": "<=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
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
          "addStacksPerTrigger": 1
        }
      ]
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_OD": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_OD",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_FireProwler_IF_OffTeamFormation"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_HP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": 1,
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
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
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_BP"
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 5,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "variables": {
                "parameter[0]_NormalizedValue": 1
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "toRemove": [
                "STAT_CTRL"
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_FireProwler_IF_Overdrive_WeaknessProtect"
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "ODCountDown",
          "value": 8
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurrentStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] (_CurrentStance) || RETURN",
            "displayLines": "_CurrentStance",
            "constants": [],
            "variables": [
              "_CurrentStance"
            ]
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Physical"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_FireProwler_IF_Armor"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_FireProwler_IF_ArmorBreak"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 15
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MoreOneMorePerTurn"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "OneMorePerTurn"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMorePerTurn"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag_ODout",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_ActionDelay",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (BOSS_BreakDelay) || RETURN",
              "displayLines": "BOSS_BreakDelay",
              "constants": [],
              "variables": [
                "BOSS_BreakDelay"
              ]
            }
          },
          "passed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SpeedUp"
          },
          "passed": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_OneMoreAction_OnSub_1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MStrongChallengeEX_OneMoreAction_OnSub_1",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_MaxLayer) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(_MaxLayer * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  }
                }
              ]
            }
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "conditions": {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value1": null,
              "compareType": ">=",
              "value2": 1,
              "valueType": "Layer"
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -100
            },
            "changeDelay": true
          },
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_OneMoreAction_OnAvatar",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "ReduceActionDelay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": 1
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Extra-Turn",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                            },
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "valueType": "Layer",
                              "variableName": "ModifierLayers",
                              "modifierName": "MStrongChallengeEX_OneMoreAction_OnSub_1",
                              "multiplier": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "ModifierLayers",
                                "compareType": "<=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
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
          "addStacksPerTrigger": 1
        }
      ]
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_HP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_NegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": 1,
                  "healFlat": {
                    "operator": "Variables[0] (_NegativeHP) || RETURN",
                    "displayLines": "_NegativeHP",
                    "constants": [],
                    "variables": [
                      "_NegativeHP"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SP"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(_MaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
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
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_BP"
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 5,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "variables": {
                "parameter[0]_NormalizedValue": 1
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "toRemove": [
                "STAT_CTRL"
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_ActionDelay",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_ActionDelay",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (BOSS_BreakDelay) || RETURN",
              "displayLines": "BOSS_BreakDelay",
              "constants": [],
              "variables": [
                "BOSS_BreakDelay"
              ]
            }
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "set": {
                "operator": "Variables[0] (BOSS_BreakDelay) || RETURN",
                "displayLines": "BOSS_BreakDelay",
                "constants": [],
                "variables": [
                  "BOSS_BreakDelay"
                ]
              }
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_EndDelay",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "MStrongChallengeEX_BEMark_SpeedUp"
          },
          "passed": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "StrongChallengeEX_Test_StageAbility_SpeedUp",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team"
          },
          "passed": [
            "Trigger: Ability End"
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_OneMoreAction_OnSub_1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MStrongChallengeEX_OneMoreAction_OnSub_1",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_MaxLayer) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(_MaxLayer * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  }
                }
              ]
            }
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "conditions": {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value1": null,
              "compareType": ">=",
              "value2": 1,
              "valueType": "Layer"
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -100
            },
            "changeDelay": true
          },
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_OneMoreAction_OnAvatar",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "ReduceActionDelay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": 1
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Extra-Turn",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
                            },
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "valueType": "Layer",
                              "variableName": "ModifierLayers",
                              "modifierName": "MStrongChallengeEX_OneMoreAction_OnSub_1",
                              "multiplier": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "ModifierLayers",
                                "compareType": "<=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "MStrongChallengeEX_OneMoreAction_OnSub_1"
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
          "addStacksPerTrigger": 1
        }
      ]
    },
    "-838314705_StrongChallengeEX_Test_StageAbility_001": {
      "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StrongChallengeEX_Test_StageAbility_LE_001"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StrongChallengeEX_Test_StageAbility_LE_001",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-838314705_StrongChallengeEX_Environment_StageAbility_014": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_014",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_014"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_014",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Memosprite"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_014",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_014",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_013": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_013",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_013"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_013",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Memosprite"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_013",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_HP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_013",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_012": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_012",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_012"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_012",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Memosprite"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_012",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_HP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_012",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_011": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_011",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_011"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_011",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_011",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_011",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_010": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_010",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_010"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_010",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_010",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_010",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_009": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_009",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_009"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_AVT_009",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_009",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_AVT_009",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_008": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_008",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_008"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_008",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Memosprite"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_008",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_HP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_008",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_007": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_007",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_007"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_007",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_007",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_HP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_007",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_006": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_006",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_006"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_006",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_006",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_DispelCTRL"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_006",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_005": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_005",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_005"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_005",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_005",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_005",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_004": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_004",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_004"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_004",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_004",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_004",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_003": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_003",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_003"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_003",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_003",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_003",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_002": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_002",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_002"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_002",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Counter"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_002",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_ActionDelay"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_002",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_StrongChallengeEX_Environment_StageAbility_001": {
      "fileName": "-838314705_StrongChallengeEX_Environment_StageAbility_001",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MStrongChallengeEX_Environment_StageAbility_LE_001"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_BOSS_001",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Super Break"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_Environment_StageAbility_LE_001",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_SP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "MStrongChallengeEX_BEMark_BP"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MStrongChallengeEX_Environment_StageAbility_BOSS_001",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "-838314705_Modifiers": {
      "fileName": "-838314705_Modifiers",
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
          "for": "Enemy_W2_Cocolia_IF_DyingSound",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Cocolia_IF_SoundController",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_DyingSound"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_DyingSound"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Standard_MinionsTag_IF",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Monster_APShow"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Monster_APShow"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_TokenDMGAddRatioPerLayer * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_TokenDMGAddRatioPerLayer",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">MDF_TokenDMGAddRatioPerLayer</span>.",
          "type": "Other",
          "statusName": "Nightmare of Battlegrounds",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "Summon02Flag"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "NewStartFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "FrenzeyInit"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Layer",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
                          "valuePerStack": {
                            "MDF_TokenDMGAddRatioPerLayer": {
                              "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || RETURN",
                              "displayLines": "MDF_TokenDMGAddRatioPerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_TokenDMGAddRatioPerLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Layer) || RETURN",
                            "displayLines": "_Layer",
                            "constants": [],
                            "variables": [
                              "_Layer"
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
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_StartActionDelay",
                      "value": {
                        "operator": "Variables[0] (MDF_FrenzyStartDelay) || RETURN",
                        "displayLines": "MDF_FrenzyStartDelay",
                        "constants": [],
                        "variables": [
                          "MDF_FrenzyStartDelay"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "FrenzeyInit"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "NewStartFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "NewStartFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "_StartActionDelay",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "FrenzeyInit"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_CurrentActionDelay",
                  "value": "ParamValue2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Layer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxFrenzyLayer) || RETURN",
                      "displayLines": "MDF_MaxFrenzyLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxFrenzyLayer"
                      ]
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CurrentActionDelay",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_FrenzyIntervalDelay) || RETURN",
                          "displayLines": "MDF_FrenzyIntervalDelay",
                          "constants": [],
                          "variables": [
                            "MDF_FrenzyIntervalDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ThresholdActionDelay",
                          "value": {
                            "operator": "Variables[0] (MDF_FrenzyIntervalDelay) || Variables[1] (_CurrentActionDelay) || ADD || RETURN",
                            "displayLines": "(MDF_FrenzyIntervalDelay + _CurrentActionDelay)",
                            "constants": [],
                            "variables": [
                              "MDF_FrenzyIntervalDelay",
                              "_CurrentActionDelay"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Layer",
                          "value": {
                            "operator": "Variables[0] (_Layer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_Layer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_Layer"
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team Unselectables}}"
                          },
                          "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
                          "valuePerStack": {
                            "MDF_TokenDMGAddRatioPerLayer": {
                              "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || RETURN",
                              "displayLines": "MDF_TokenDMGAddRatioPerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_TokenDMGAddRatioPerLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Layer) || RETURN",
                            "displayLines": "_Layer",
                            "constants": [],
                            "variables": [
                              "_Layer"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team Unselectables}}"
                          },
                          "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
                          "valuePerStack": {
                            "MDF_TokenDMGAddRatioPerLayer": {
                              "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || RETURN",
                              "displayLines": "MDF_TokenDMGAddRatioPerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_TokenDMGAddRatioPerLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Layer) || RETURN",
                            "displayLines": "_Layer",
                            "constants": [],
                            "variables": [
                              "_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "FrenzeyInit",
              "parse": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ThresholdActionDelay",
                  "value": {
                    "operator": "Variables[0] (_ThresholdActionDelay) || Variables[1] (_StartActionDelay) || ADD || RETURN",
                    "displayLines": "(_ThresholdActionDelay + _StartActionDelay)",
                    "constants": [],
                    "variables": [
                      "_ThresholdActionDelay",
                      "_StartActionDelay"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_MinionsTag_IF"
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_SuperArmorBreak_Mark",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_MinionsSuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
          "modifierFlags": [
            "STAT_SuperArmorBreak",
            "STAT_AITargetKeepActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "StanceBreakState_Effect"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "StanceBreakState_Effect"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "StanceBreakState_Effect"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Currently, %CasterName is in the \"Safeguard Breach\" state, this unit's DMG received increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
          "type": "Debuff",
          "effectName": "Safeguard Breach",
          "statusName": "Safeguard Breach"
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_MinionsSuperArmor_MuteHitH_IF",
          "modifierFlags": [
            "MuteHitH"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
          "modifierFlags": [
            "STAT_SuperArmor"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                    "displayLines": "MDF_AllDamageTypeResistance",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeResistance"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
                }
              ]
            }
          ],
          "description": "Currently, %CasterName is in the \"Steadfast Safeguard\" state, this unit's DMG received decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistance</span>.",
          "type": "Buff",
          "effectName": "Steadfast Safeguard",
          "statusName": "Steadfast Safeguard"
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
          "modifierFlags": [
            "STAT_SuperArmorBreak",
            "STAT_AITargetKeepActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "StanceBreakState_Effect"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "StanceBreakState_Effect"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "StanceBreakState_Effect"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Takes <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> more DMG. Dispels this effect when recovering from Weakness Break state.",
          "type": "Other",
          "effectName": "Safeguard Breach",
          "statusName": "Safeguard Breach"
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
          "modifierFlags": [
            "MuteHitH",
            "STAT_SuperArmor"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                    "displayLines": "MDF_AllDamageTypeResistance",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeResistance"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistance</span>. This effect is removed when Weakness is Broken. When Weakness Broken, this unit has its action additionally delayed and takes increased DMG.",
          "type": "Other",
          "effectName": "Steadfast Safeguard",
          "statusName": "Steadfast Safeguard"
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_StrongChallengeEX_SuperArmorController_MultiNew",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Standard_MinionsTag_IF"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_SoundController"
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New",
                  "parameters": {}
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi_New",
                  "parameters": {}
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeResistance": {
                          "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                          "displayLines": "MDF_IF_BOSS_Standard_Defence",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_Standard_Defence"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeResistance": {
                          "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                          "displayLines": "MDF_IF_BOSS_Standard_Defence",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_Standard_Defence"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Protected",
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                          "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_WeaknessDMGUpRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Standard_MinionsSuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                          "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_WeaknessDMGUpRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "LevelPerformMonster",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "BOSS_BreakDelay_01": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_01) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay_01 * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay_01"
                          ]
                        },
                        "BOSS_BreakDelay_02": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_02) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay_02 * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay_02"
                          ]
                        },
                        "BOSS_BreakDelay_03": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_03) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay_03 * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay_03"
                          ]
                        },
                        "BOSS_BreakDelay_04": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_04) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay_04 * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay_04"
                          ]
                        },
                        "BOSS_BreakDelay_05": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_05) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay_05 * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay_05"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_Mark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Standard_MinionsSuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Standard_SuperArmorBreak_Mark"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
          "for": "Standard_StrongChallengeEX_SuperArmorController_Multi",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_SoundController"
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi",
                  "parameters": {}
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi",
                  "parameters": {}
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeResistance": {
                          "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                          "displayLines": "MDF_IF_BOSS_Standard_Defence",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_Standard_Defence"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Protected",
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_ActionDelay",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_Speed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PushDelay",
                      "value": {
                        "operator": "Constants[0] (10) || Variables[0] (MDF_IF_BOSS_BreakDelay) || MUL || Variables[1] (_ActionDelay) || SUB || Constants[0] (10) || DIV || RETURN",
                        "displayLines": "(((10 * MDF_IF_BOSS_BreakDelay) - _ActionDelay) / 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_IF_BOSS_BreakDelay",
                          "_ActionDelay"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                          "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_WeaknessDMGUpRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "LevelPerformMonster",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "BOSS_BreakDelay": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Cocolia_IF_SuperArmorController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_SoundController"
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
                  "parameters": {}
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera",
                  "parameters": {}
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeResistance": {
                          "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                          "displayLines": "MDF_IF_BOSS_Standard_Defence",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_Standard_Defence"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Protected",
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_ActionDelay",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_Speed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PushDelay",
                      "value": {
                        "operator": "Constants[0] (10) || Variables[0] (MDF_IF_BOSS_BreakDelay) || MUL || Variables[1] (_ActionDelay) || SUB || Constants[0] (10) || DIV || RETURN",
                        "displayLines": "(((10 * MDF_IF_BOSS_BreakDelay) - _ActionDelay) / 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_IF_BOSS_BreakDelay",
                          "_ActionDelay"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                          "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_IF_BOSS_WeaknessDMGUpRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": -1,
                          "adjustmentType": "Advance"
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "LevelPerformMonster",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "BOSS_BreakDelay": {
                          "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || Constants[0] (10) || MUL || RETURN",
                          "displayLines": "(MDF_IF_BOSS_BreakDelay * 10)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "MDF_IF_BOSS_BreakDelay"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak"
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_BEMark_HP",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_BEMark_DispelCTRL",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_BEMark_SpeedUp"
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_BEMark_ActionDelay",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_BEMark_BP",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MStrongChallengeEX_BEMark_SP",
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}