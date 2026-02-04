const compositeAbilityObject = {
  "fullCharacterName": "Mydei",
  "trimCharacterName": "Mydei",
  "abilityList": [
    "Mydei_Mydeimos_TechniqueInLevel",
    "Mydei_Mydeimos_Ability22_Ability",
    "Mydei_Mydeimos_Ability21_Ability",
    "Mydei_Mydeimos_PassiveAbility01_InsertExit",
    "Mydei_Mydeimos_PassiveAbility01_Insert",
    "Mydei_Mydeimos_PassiveAbility01",
    "Mydei_Mydeimos_Ability03_Part02",
    "Mydei_Mydeimos_Ability03_Part01",
    "Mydei_Mydeimos_Ability03_EnterReady",
    "Mydei_Mydeimos_Ability02_Part02",
    "Mydei_Mydeimos_Ability02_Part01",
    "Mydei_Mydeimos_Ability01_Part02",
    "Mydei_Mydeimos_Ability01_Part01",
    "Mydei_Modifiers",
    "Mydei_Functions"
  ],
  "abilityObject": {
    "Mydei_Mydeimos_TechniqueInLevel": {
      "fileName": "Mydei_Mydeimos_TechniqueInLevel",
      "childAbilityList": [
        "Mydei_Mydeimos_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_Mydeimos_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Mydeimos_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "_EnergyBar_CurrentValue",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (50) || RETURN",
                        "displayLines": "50",
                        "constants": [],
                        "variables": [
                          50
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Mydei_Mydeimos_Ability22_Ability": {
      "fileName": "Mydei_Mydeimos_Ability22_Ability",
      "childAbilityList": [
        "Mydei_Mydeimos_Ability22_Ability",
        "Mydei_Mydeimos_Ability22_Camera",
        "Mydei_Mydeimos_Ability22_Camera02"
      ],
      "skillTrigger": "Skill22",
      "abilityType": "Skill",
      "energy": 10,
      "toughnessList": [
        30,
        0,
        20
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_BPSkill21_Plus",
          "value": 0
        },
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill21",
          "skillSlot": "Skill",
          "enableSecondaryType": "ControlSkill02"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_EnergyBar_CurrentValue",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Skill22_Cost) || INVERT || RETURN",
            "displayLines": "-Skill22_Cost",
            "constants": [],
            "variables": [
              "Skill22_Cost"
            ]
          }
        },
        {
          "name": "UI Display Event",
          "popUpText": "Godslayer Be God"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
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
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (2.8) || Variables[1] (0.3) || ADD || RETURN",
                  "displayLines": "(2.8 + 0.3)",
                  "constants": [],
                  "variables": [
                    2.8,
                    0.3
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
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
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (2.8) || RETURN",
                  "displayLines": "2.8",
                  "constants": [],
                  "variables": [
                    2.8
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
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
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1.68) || RETURN",
                  "displayLines": "1.68",
                  "constants": [],
                  "variables": [
                    1.68
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
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
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (2.8) || Variables[1] (0.3) || ADD || RETURN",
                  "displayLines": "(2.8 + 0.3)",
                  "constants": [],
                  "variables": [
                    2.8,
                    0.3
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
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
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (2.8) || RETURN",
                  "displayLines": "2.8",
                  "constants": [],
                  "variables": [
                    2.8
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
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
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1.68) || RETURN",
                  "displayLines": "1.68",
                  "constants": [],
                  "variables": [
                    1.68
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Mydeimos_UltraTarget[<span class=\"descriptionNumberColor\">Throne of Bones</span>]"
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Mydei_Mydeimos_Ability21_Ability": {
      "fileName": "Mydei_Mydeimos_Ability21_Ability",
      "childAbilityList": [
        "Mydei_Mydeimos_Ability21_Camera",
        "Mydei_Mydeimos_Ability21_Ability"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.35) || RETURN",
            "displayLines": "0.35",
            "constants": [],
            "variables": [
              0.35
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.1) || RETURN",
              "displayLines": "1.1",
              "constants": [],
              "variables": [
                1.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.66) || RETURN",
              "displayLines": "0.66",
              "constants": [],
              "variables": [
                0.66
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Mydei_Mydeimos_PassiveAbility01_InsertExit": {
      "fileName": "Mydei_Mydeimos_PassiveAbility01_InsertExit",
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
                "name": "Trace Activated",
                "conditionList": "Earth and Water"
              },
              {
                "name": "Compare: Variable",
                "value1": "DV_Tree01_ReviveCount",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_Tree01_ReviveCount",
              "value": {
                "operator": "Variables[0] (DV_Tree01_ReviveCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(DV_Tree01_ReviveCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DV_Tree01_ReviveCount"
                ]
              }
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "Mydeimos_Trace01[<span class=\"descriptionNumberColor\">Earth and Water</span>]",
              "function": "Add"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "silent": true
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healer": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healPercent": {
                "operator": "Variables[0] (DV_HealRatio) || RETURN",
                "displayLines": "DV_HealRatio",
                "constants": [],
                "variables": [
                  "DV_HealRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_ReviveCount",
              "value": 0
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "_EnergyBar_CurrentValue",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                "constants": [],
                "variables": [
                  "MYDEI_OBJECT_UNUSED_8[100]"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "silent": true
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healer": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healPercent": {
                "operator": "Variables[0] (DV_HealRatio) || RETURN",
                "displayLines": "DV_HealRatio",
                "constants": [],
                "variables": [
                  "DV_HealRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
            }
          ]
        }
      ],
      "references": []
    },
    "Mydei_Mydeimos_PassiveAbility01_Insert": {
      "fileName": "Mydei_Mydeimos_PassiveAbility01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_EnergyBar_CurrentValue",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || INVERT || RETURN",
            "displayLines": "-MYDEI_OBJECT_UNUSED_8[100]",
            "constants": [],
            "variables": [
              "MYDEI_OBJECT_UNUSED_8[100]"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_CanTransfer",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.25) || RETURN",
            "displayLines": "0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": -1,
              "adjustmentType": "Advance"
            }
          ]
        }
      ],
      "references": []
    },
    "Mydei_Mydeimos_PassiveAbility01": {
      "fileName": "Mydei_Mydeimos_PassiveAbility01",
      "childAbilityList": [
        "Mydei_Mydeimos_PassiveAbility01",
        "Mydei_Mydeimos_PassiveAbility01_Insert",
        "Mydei_Mydeimos_PassiveAbility01_Insert_Camera",
        "Mydei_Mydeimos_PassiveAbility01_InsertExit"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Mydeimos_Passive01Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Mydeimos_BPAbility_PreShow"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Mydeimos_InsertActionAbortFlag"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_EnergyBar_CurrentValue",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
            "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
            "constants": [],
            "variables": [
              "MYDEI_OBJECT_UNUSED_8[100]"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Earth and Water"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mydeimos_Trace01[<span class=\"descriptionNumberColor\">Earth and Water</span>]",
              "counter": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_Tree01_ReviveCount",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill22_Cost",
              "value": {
                "operator": "Variables[0] (100) || RETURN",
                "displayLines": "100",
                "constants": [],
                "variables": [
                  100
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill22_Cost",
              "value": {
                "operator": "Variables[0] (150) || RETURN",
                "displayLines": "150",
                "constants": [],
                "variables": [
                  150
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_BPAbility_PreShow",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_CurrnetHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (DV_CurrnetHP) || Variables[1] (0.5) || MUL || RETURN",
                        "displayLines": "(DV_CurrnetHP * 0.5)",
                        "constants": [],
                        "variables": [
                          "DV_CurrnetHP",
                          0.5
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable (VFX)",
                      "variableName": "DV_HPRatioPreshow",
                      "value": {
                        "operator": "Variables[0] (_EnergyBar_CurrentValue) || Variables[1] (0.5) || Constants[0] (100) || Variables[2] (DV_CurrnetHP) || MUL || Variables[3] (DV_MaxHP) || DIV || MUL || ADD || RETURN",
                        "displayLines": "(_EnergyBar_CurrentValue + (0.5 * ((100 * DV_CurrnetHP) / DV_MaxHP)))",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_EnergyBar_CurrentValue",
                          0.5,
                          "DV_CurrnetHP",
                          "DV_MaxHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "DV_HPRatioPreshow",
              "compareType": ">=",
              "value2": 100
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Passive01Modifier",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_ForceEnergyBarChange",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_Passive_HPChangeValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Passive_HPChangeValue",
                        "compareType": "<",
                        "value2": 0
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
                              "name": "Define Custom Variable",
                              "variableName": "_Passive_HPChangeValue",
                              "value": {
                                "operator": "Variables[0] (_Passive_HPChangeValue) || Constants[0] (1) || Variables[1] (_Tree03_BeingHitRatio) || ADD || MUL || RETURN",
                                "displayLines": "(_Passive_HPChangeValue * (1 + _Tree03_BeingHitRatio))",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "_Passive_HPChangeValue",
                                  "_Tree03_BeingHitRatio"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Add to Value (Default)",
                          "variableName": "_EnergyBar_CurrentValue",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (_Passive_HPChangeValue) || INVERT || Variables[1] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((-_Passive_HPChangeValue / _MaxHPValue) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "_Passive_HPChangeValue",
                              "_MaxHPValue"
                            ]
                          }
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_PassiveAbility_Transfer"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_Ability22_Predicate"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_PassiveAbility_Transfer"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_Ability22_Predicate"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill22"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ForceEnergyBarChange",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill22"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ForceEnergyBarChange",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Bloodied Chiton"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Mydeimos_Trace03"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "_EnergyBar_CurrentValue",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                        "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                        "constants": [],
                        "variables": [
                          "MYDEI_OBJECT_UNUSED_8[100]"
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_PassiveAbility_Transfer"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_Ability22_Predicate"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_PassiveAbility_Transfer"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_Ability22_Predicate"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Mydeimos_Ability22_Predicate"
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
                                "value1": "_EnergyBar_CurrentValue",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                                  "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                                  "constants": [],
                                  "variables": [
                                    "MYDEI_OBJECT_UNUSED_8[100]"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "DV_CanTransfer",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_CanTransfer",
                              "value": 1
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Mydeimos_PassiveAbility01_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
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
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_PassiveAbility_Transfer"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Mydeimos_Ability22_Predicate"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EnergyBar_CurrentValue",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_EnergyBar_CurrentValue",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                                  "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                                  "constants": [],
                                  "variables": [
                                    "MYDEI_OBJECT_UNUSED_8[100]"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "value1": "CurrentHP",
                                "compareType": ">",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "DV_CanTransfer",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                                "displayLines": "_EnergyBar_CurrentValue",
                                "constants": [],
                                "variables": [
                                  "_EnergyBar_CurrentValue"
                                ]
                              },
                              "priorState": "Active"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_CanTransfer",
                              "value": 1
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Mydeimos_PassiveAbility01_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "priorityTag": "AvatarBuffSelf",
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
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                                "displayLines": "_EnergyBar_CurrentValue",
                                "constants": [],
                                "variables": [
                                  "_EnergyBar_CurrentValue"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Mydeimos_Ability22_Predicate"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Mydeimos_UltraTargetSpecialMark",
              "aliveOnly": "False",
              "haloStatus": true
            }
          ]
        }
      ]
    },
    "Mydei_Mydeimos_Ability03_Part02": {
      "fileName": "Mydei_Mydeimos_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.2) || RETURN",
            "displayLines": "0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_EnergyBar_CurrentValue",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (20) || RETURN",
            "displayLines": "20",
            "constants": [],
            "variables": [
              20
            ]
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Mydeimos_UltraTarget[<span class=\"descriptionNumberColor\">Throne of Bones</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Mydeimos_UltraTarget[<span class=\"descriptionNumberColor\">Throne of Bones</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Mydei_Mydeimos_Ability03_Part01": {
      "fileName": "Mydei_Mydeimos_Ability03_Part01",
      "childAbilityList": [
        "Mydei_Mydeimos_Ability03_Camera",
        "Mydei_Mydeimos_Ability03_EnterReady",
        "Mydei_Mydeimos_Ability03_Part01",
        "Mydei_Mydeimos_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        20
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Mydeimos_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Mydei_Mydeimos_Ability03_EnterReady": {
      "fileName": "Mydei_Mydeimos_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Mydei_Mydeimos_Ability02_Part02": {
      "fileName": "Mydei_Mydeimos_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Mydei_Mydeimos_Ability02_Part01": {
      "fileName": "Mydei_Mydeimos_Ability02_Part01",
      "childAbilityList": [
        "Mydei_Mydeimos_Ability02_Camera",
        "Mydei_Mydeimos_Ability02_Part01",
        "Mydei_Mydeimos_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Mydeimos_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Mydei_Mydeimos_Ability01_Part02": {
      "fileName": "Mydei_Mydeimos_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Mydei_Mydeimos_Ability01_Part01": {
      "fileName": "Mydei_Mydeimos_Ability01_Part01",
      "childAbilityList": [
        "Mydei_Mydeimos_Ability01_Camera",
        "Mydei_Mydeimos_Ability01_Part01",
        "Mydei_Mydeimos_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Mydeimos_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Mydei_Modifiers": {
      "fileName": "Mydei_Modifiers",
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
          "for": "Mydeimos_UltraTargetSpecialMark",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "trigger": "State_Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Mydeimos_UltraTarget[<span class=\"descriptionNumberColor\">Throne of Bones</span>]"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
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
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_UltraTarget[<span class=\"descriptionNumberColor\">Throne of Bones</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Prioritizes attacking this target in the next \"Godslayer Be God.\"",
          "type": "Other",
          "statusName": "Throne of Bones"
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_InsertActionAbortFlag",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_MydeimosRemoveTransfer"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Trace01[<span class=\"descriptionNumberColor\">Earth and Water</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "description": "During the \"Vendetta\" state, Mydei will not exit the \"Vendetta\" state when receiving a killing blow.",
          "type": "Buff",
          "effectName": "Earth and Water",
          "statusName": "Earth and Water"
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Eidolon4[<span class=\"descriptionNumberColor\">Siren Jolts the Laconic Lion</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
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
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                        "displayLines": "MDF_PropertyValue2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Siren Jolts the Laconic Lion"
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Eidolon2",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_ForceEnergyBarChange",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Healing",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_BeingHealValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SumBeingHealValue",
                      "value": {
                        "operator": "Variables[0] (_SumBeingHealValue) || Variables[1] (_BeingHealValue) || Variables[2] (MDF_PropertyValue2) || MUL || Variables[3] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || ADD || RETURN",
                        "displayLines": "(_SumBeingHealValue + (((_BeingHealValue * MDF_PropertyValue2) / _MaxHPValue) * 100))",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_SumBeingHealValue",
                          "_BeingHealValue",
                          "MDF_PropertyValue2",
                          "_MaxHPValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_SumBeingHealValue",
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
                          {
                            "name": "Compare: Variable",
                            "value1": "_MaxFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Add to Value (Default)",
                          "variableName": "_EnergyBar_CurrentValue",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (40) || Variables[1] (_SumBeingHealValue) || Variables[2] (_BeingHealValue) || Variables[3] (MDF_PropertyValue2) || MUL || Variables[4] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || SUB || SUB || RETURN",
                            "displayLines": "(40 - (_SumBeingHealValue - (((_BeingHealValue * MDF_PropertyValue2) / _MaxHPValue) * 100)))",
                            "constants": [
                              100
                            ],
                            "variables": [
                              40,
                              "_SumBeingHealValue",
                              "_BeingHealValue",
                              "MDF_PropertyValue2",
                              "_MaxHPValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_MaxFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Add to Value (Default)",
                          "variableName": "_EnergyBar_CurrentValue",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (_BeingHealValue) || Variables[1] (MDF_PropertyValue2) || MUL || Variables[2] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "(((_BeingHealValue * MDF_PropertyValue2) / _MaxHPValue) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "_BeingHealValue",
                              "MDF_PropertyValue2",
                              "_MaxHPValue"
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
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SumBeingHealValue",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_MaxFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SumBeingHealValue",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_MaxFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Trace03_Sub[<span class=\"descriptionNumberColor\">Bloodied Chiton</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Multipler",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (_MaxHPFixValue) || Variables[2] (MYDEI_OBJECT_UNUSED_6[100]) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_MaxHPFixValue / MYDEI_OBJECT_UNUSED_6[100]))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "_MaxHPFixValue",
                      "MYDEI_OBJECT_UNUSED_6[100]"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (_Multipler) || Variables[1] (0.012) || MUL || RETURN",
                    "displayLines": "(_Multipler * 0.012)",
                    "constants": [],
                    "variables": [
                      "_Multipler",
                      0.012
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (_Multipler) || Variables[1] (0.025) || MUL || RETURN",
                    "displayLines": "(_Multipler * 0.025)",
                    "constants": [],
                    "variables": [
                      "_Multipler",
                      0.025
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Tree03_BeingHitRatio",
                  "value": {
                    "operator": "Variables[0] (_Multipler) || Variables[1] (0.025) || MUL || RETURN",
                    "displayLines": "(_Multipler * 0.025)",
                    "constants": [],
                    "variables": [
                      "_Multipler",
                      0.025
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue3",
                  "value": {
                    "operator": "Variables[0] (_Multipler) || Variables[1] (0.0075) || MUL || RETURN",
                    "displayLines": "(_Multipler * 0.0075)",
                    "constants": [],
                    "variables": [
                      "_Multipler",
                      0.0075
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                    "displayLines": "MDF_PropertyValue3",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue3"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, Charge ratio from enemy targets' DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>, and the HP restored when receiving healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
          "type": "Buff",
          "effectName": "Bloodied Chiton",
          "statusName": "Bloodied Chiton"
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Trace03",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentRealHP",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentHP) || Variables[1] (MDF_CurrentHPConvert) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentHP - MDF_CurrentHPConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentHP",
                      "MDF_CurrentHPConvert"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentRealHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (4000) || Variables[1] (MYDEI_OBJECT_UNUSED_6[100]) || ADD || RETURN",
                      "displayLines": "(4000 + MYDEI_OBJECT_UNUSED_6[100])",
                      "constants": [],
                      "variables": [
                        4000,
                        "MYDEI_OBJECT_UNUSED_6[100]"
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
                      "modifier": "Mydeimos_Trace03_Sub[<span class=\"descriptionNumberColor\">Bloodied Chiton</span>]",
                      "valuePerStack": {
                        "_MaxHPFixValue": {
                          "operator": "Variables[0] (MDF_CurrentRealHP) || Variables[1] (4000) || SUB || RETURN",
                          "displayLines": "(MDF_CurrentRealHP - 4000)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentRealHP",
                            4000
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Mydeimos_Trace03"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_ForceEnergyBarChange"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Transfer_LockDEF",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFOverride</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                    "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                    "constants": [],
                    "variables": [
                      "DV_MaxHP",
                      "DV_HPConvert",
                      0.5
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Crazy"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character UI"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BPSkill21_Plus",
                  "value": 0
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "_EnergyBar_CurrentValue",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": {
                    "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                    "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                    "constants": [],
                    "variables": [
                      "MYDEI_OBJECT_UNUSED_8[100]"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Mydeimos_InsertActionAbortFlag"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Mydeimos_Transfer_LockDEF"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character UI"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_ReviveCount",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Mydeimos_Transfer_LockDEF"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Mydeimos_InsertActionAbortFlag"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPAddValue",
                  "value": {
                    "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                    "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                    "constants": [],
                    "variables": [
                      "DV_MaxHP",
                      "DV_HPConvert",
                      0.5
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_BPSkill21_Plus",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Basic ATK"
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Thirty Tyrants"
                  },
                  "passed": [
                    {
                      "name": "Add Flags to Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": [
                        "Endurance"
                      ],
                      "modifierName": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": {
                          "operator": "Variables[0] (MDF_HPAddValue) || RETURN",
                          "displayLines": "MDF_HPAddValue",
                          "constants": [],
                          "variables": [
                            "MDF_HPAddValue"
                          ]
                        }
                      },
                      "abilityName": "Mydeimos_PassiveAbility01_InsertExit",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "AvatarReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "DV_HealRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Mydeimos_Transfer_LockDEF"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPAddValue",
                      "value": {
                        "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                        "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                        "constants": [],
                        "variables": [
                          "DV_MaxHP",
                          "DV_HPConvert",
                          0.5
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Mydeimos_Transfer_LockDEF"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPAddValue",
                      "value": {
                        "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                        "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                        "constants": [],
                        "variables": [
                          "DV_MaxHP",
                          "DV_HPConvert",
                          0.5
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Mydeimos_Transfer_LockDEF"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPAddValue",
                      "value": {
                        "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                        "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                        "constants": [],
                        "variables": [
                          "DV_MaxHP",
                          "DV_HPConvert",
                          0.5
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_CanTransfer"
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPAddValue</span>. DEF remains at 0.",
          "type": "Other",
          "effectName": "Vendetta",
          "statusName": "Vendetta",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mydeimos_Eidolon2",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mydeimos_Eidolon4[<span class=\"descriptionNumberColor\">Siren Jolts the Laconic Lion</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_PropertyValue2": {
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
        }
      ],
      "references": []
    },
    "Mydei_Functions": {
      "fileName": "Mydei_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Mydeimos_Ability22_Predicate",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_EnergyBar_CurrentValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Skill22_Cost) || RETURN",
                      "displayLines": "Skill22_Cost",
                      "constants": [],
                      "variables": [
                        "Skill22_Cost"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_BPSkill21_Plus",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_BPSkill21_Plus",
                          "value": 1
                        },
                        {
                          "name": "Update Ability Binding",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityName": "Skill22",
                          "skillSlot": "Skill",
                          "enableSecondaryType": "ControlSkill02"
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "Mydeimos_InsertAction",
                          "afterInjection": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_BPSkill21_Plus",
                              "value": 0
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Update Ability Binding",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityName": "Skill21",
                                  "skillSlot": "Skill",
                                  "enableSecondaryType": "ControlSkill02"
                                }
                              ]
                            }
                          ],
                          "abortFlags": [
                            "STAT_MydeimosRemoveTransfer"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                        "displayLines": "_EnergyBar_CurrentValue",
                        "constants": [],
                        "variables": [
                          "_EnergyBar_CurrentValue"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (Skill22_Cost) || RETURN",
                        "displayLines": "Skill22_Cost",
                        "constants": [],
                        "variables": [
                          "Skill22_Cost"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                        "displayLines": "_EnergyBar_CurrentValue",
                        "constants": [],
                        "variables": [
                          "_EnergyBar_CurrentValue"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (Skill22_Cost) || RETURN",
                        "displayLines": "Skill22_Cost",
                        "constants": [],
                        "variables": [
                          "Skill22_Cost"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ]
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
                        "value1": "_EnergyBar_CurrentValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                          "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                          "constants": [],
                          "variables": [
                            "MYDEI_OBJECT_UNUSED_8[100]"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CanTransfer",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                        "displayLines": "_EnergyBar_CurrentValue",
                        "constants": [],
                        "variables": [
                          "_EnergyBar_CurrentValue"
                        ]
                      },
                      "priorState": "Active"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_CanTransfer",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Mydeimos_PassiveAbility01_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
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
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                        "displayLines": "_EnergyBar_CurrentValue",
                        "constants": [],
                        "variables": [
                          "_EnergyBar_CurrentValue"
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
          "name": "CharacterFunctions",
          "functionName": "Mydeimos_PassiveAbility_Transfer",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_CanTransfer",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Mydeimos_PassiveAbility01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
        }
      ],
      "references": []
    }
  }
}