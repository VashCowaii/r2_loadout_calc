const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_AbilityP01",
  "childAbilityList": [
    "8015012_Monster_AML_Boss_IF_AbilityP01",
    "8015012_Monster_AML_Boss_IF_Insert_ChangePhase_Part01",
    "8015012_Monster_AML_Boss_IF_Insert_Recover_Part01",
    "8015012_Monster_AML_Boss_IF_Insert_DownAndChangePhase_Part01",
    "8015012_Monster_AML_Boss_IF_Insert_DownAndChangePhase_Part02",
    "8015012_Monster_AML_Boss_Ability01_Camera",
    "8015012_Monster_AML_Boss_IF_Insert02_Part01",
    "8015012_Monster_AML_Boss_IF_Insert02_Part02",
    "8015012_Monster_AML_Boss_Ability02_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
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
      "multiBase": {
        "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
        "displayLines": "{[SkillP01[2]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[2]]}"
        ]
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "multiBase": {
        "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
        "displayLines": "{[SkillP01[3]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[3]]}"
        ]
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "multiBase": {
        "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
        "displayLines": "{[SkillP01[4]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[4]]}"
        ]
      }
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 0}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] ({[SkillEX01[5]]}) || RETURN",
              "displayLines": "{[SkillEX01[5]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[5]]}"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] ({[SkillEX01[4]]}) || RETURN",
              "displayLines": "{[SkillEX01[4]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[4]]}"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] ({[SkillEX01[3]]}) || RETURN",
              "displayLines": "{[SkillEX01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 0}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
              "displayLines": "{[SkillEX05[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[0]]}"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
              "displayLines": "{[SkillEX05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[1]]}"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
              "displayLines": "{[SkillEX05[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[2]]}"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
              "displayLines": "{[SkillEX05[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[3]]}"
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
      "modifier": "Monster_AML_Boss_IF_BattleAlert"
    }
  ],
  "references": []
}