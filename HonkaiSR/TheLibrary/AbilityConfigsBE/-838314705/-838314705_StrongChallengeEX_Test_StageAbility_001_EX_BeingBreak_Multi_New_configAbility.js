const configAbility = {
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
}