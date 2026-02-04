const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_Insert_Recover_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Set Mapping Point",
      "point": "Origin",
      "reset": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill_Insert_02",
      "passed": [
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_AML_Boss_HitEffect"
            }
          ]
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Create Enemy as Body Part",
              "partName": "R_Hand",
              "value": {
                "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                "displayLines": "PartEntity1_MonsterID",
                "constants": [],
                "variables": [
                  "PartEntity1_MonsterID"
                ]
              },
              "offset": -3
            },
            {
              "name": "Create Enemy as Body Part",
              "partName": "Middle",
              "value": {
                "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
                "displayLines": "PartEntity2_MonsterID",
                "constants": [],
                "variables": [
                  "PartEntity2_MonsterID"
                ]
              },
              "offset": -2,
              "type": 2
            },
            {
              "name": "Create Enemy as Body Part",
              "partName": "L_Hand",
              "value": {
                "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                "displayLines": "PartEntity3_MonsterID",
                "constants": [],
                "variables": [
                  "PartEntity3_MonsterID"
                ]
              },
              "offset": -1,
              "type": 3
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "multiBase": 1
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "multiBase": 0
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "multiBase": 0.5
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Sign_Part1"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Sign_Part2"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Sign_Part3"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Part_Revive",
              "valuePerStack": {
                "MDF_PartReviveDelay": {
                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                  "displayLines": "{[SkillP01[5]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[5]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Part_Revive",
              "valuePerStack": {
                "MDF_PartReviveDelay": {
                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                  "displayLines": "{[SkillP01[5]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[5]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Part_Revive",
              "valuePerStack": {
                "MDF_PartReviveDelay": {
                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                  "displayLines": "{[SkillP01[5]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[5]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "modifier": "Enemy_AML_Boss_Charge_DisableAction_Controller"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "modifier": "Enemy_AML_Boss_Charge_DisableAction_Controller"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_AML_Boss_ListenPartDie"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_AML_Boss_IF_AbilityEX01"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "modifier": "Standard_SuperArmorController",
                  "valuePerStack": {
                    "MDF_SuperArmorDamageResistance": {
                      "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                      "displayLines": "{[SkillEX01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[0]]}"
                      ]
                    },
                    "MDF_SuperArmorBreakDamageTakenRatio": {
                      "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                      "displayLines": "{[SkillEX01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[1]]}"
                      ]
                    },
                    "MDF_SuperArmorBreakActionDelay": {
                      "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                      "displayLines": "{[SkillEX01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "modifier": "Standard_SuperArmorController",
                  "valuePerStack": {
                    "MDF_SuperArmorDamageResistance": {
                      "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                      "displayLines": "{[SkillEX01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[0]]}"
                      ]
                    },
                    "MDF_SuperArmorBreakDamageTakenRatio": {
                      "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                      "displayLines": "{[SkillEX01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[1]]}"
                      ]
                    },
                    "MDF_SuperArmorBreakActionDelay": {
                      "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                      "displayLines": "{[SkillEX01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[2]]}"
                      ]
                    }
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
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_AML_Boss_IF_AbilityEX02"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_WeaknessControll"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX02_P1_Core_StanceDamageValue",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
                    "displayLines": "{[SkillEX02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX02[0]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX02_P1_Core_StanceDamageValue",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
                    "displayLines": "{[SkillEX02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX02[0]]}"
                    ]
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
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P1_AttackAddedRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P1_AttackAddedRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P1_AttackAddedRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P2_SpeedAddedRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[1]]}) || RETURN",
                    "displayLines": "{[SkillEX03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[1]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P2_SpeedAddedRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[1]]}) || RETURN",
                    "displayLines": "{[SkillEX03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[1]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P2_SpeedAddedRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[1]]}) || RETURN",
                    "displayLines": "{[SkillEX03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[1]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P3_HealHPRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[2]]}) || RETURN",
                    "displayLines": "{[SkillEX03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[2]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P3_HealHPRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[2]]}) || RETURN",
                    "displayLines": "{[SkillEX03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[2]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P3_HealHPRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[2]]}) || RETURN",
                    "displayLines": "{[SkillEX03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[2]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P4_ActionDelayRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[3]]}) || RETURN",
                    "displayLines": "{[SkillEX03[3]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[3]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P4_ActionDelayRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[3]]}) || RETURN",
                    "displayLines": "{[SkillEX03[3]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[3]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SkillEX03_P4_ActionDelayRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[3]]}) || RETURN",
                    "displayLines": "{[SkillEX03[3]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[3]]}"
                    ]
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
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_AML_Boss_IF_AbilityEX04"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_WeaknessCount",
                  "valuePerStack": {
                    "MDF_TokenDamageReduceRatio": {
                      "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                      "displayLines": "{[SkillEX04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[0]]}"
                      ]
                    },
                    "MDF_TokenDamageAddRatioPerlayer": {
                      "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                      "displayLines": "{[SkillEX04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_WeaknessCount",
                  "valuePerStack": {
                    "MDF_TokenDamageReduceRatio": {
                      "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                      "displayLines": "{[SkillEX04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[0]]}"
                      ]
                    },
                    "MDF_TokenDamageAddRatioPerlayer": {
                      "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                      "displayLines": "{[SkillEX04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_WeaknessCount",
                  "valuePerStack": {
                    "MDF_TokenDamageReduceRatio": {
                      "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                      "displayLines": "{[SkillEX04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[0]]}"
                      ]
                    },
                    "MDF_TokenDamageAddRatioPerlayer": {
                      "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                      "displayLines": "{[SkillEX04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[1]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
            },
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
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Define Toughness Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Animation Task"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "phase": 2
        },
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "phase": 2
        },
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "phase": 2
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_IF_DamageTakenUp"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    }
  ],
  "references": []
}