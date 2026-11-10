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
        "displayLines": "PartEntity1_MonsterID"
      },
      "offset": -3
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Middle",
      "value": {
        "displayLines": "PartEntity2_MonsterID"
      },
      "offset": -2,
      "type": 2
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "L_Hand",
      "value": {
        "displayLines": "PartEntity3_MonsterID"
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
        "displayLines": "{[SkillP01[2]]}"
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
        "displayLines": "{[SkillP01[3]]}"
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
        "displayLines": "{[SkillP01[4]]}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1787283303\">Enemy_AML_Boss_IF_Sign_Part1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1804060922\">Enemy_AML_Boss_IF_Sign_Part2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1820838541\">Enemy_AML_Boss_IF_Sign_Part3</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2081849040\">Enemy_AML_Boss_IF_Part_Revive</a>",
      "valuePerStack": {
        "MDF_PartReviveDelay": {
          "displayLines": "{[SkillP01[5]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2081849040\">Enemy_AML_Boss_IF_Part_Revive</a>",
      "valuePerStack": {
        "MDF_PartReviveDelay": {
          "displayLines": "{[SkillP01[5]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2081849040\">Enemy_AML_Boss_IF_Part_Revive</a>",
      "valuePerStack": {
        "MDF_PartReviveDelay": {
          "displayLines": "{[SkillP01[5]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1395729801\">Enemy_AML_Boss_Charge_DisableAction_Controller</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1395729801\">Enemy_AML_Boss_Charge_DisableAction_Controller</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"651799441\">Enemy_AML_Boss_ListenPartDie</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1835739852\">Enemy_AML_Boss_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "displayLines": "{[SkillEX01[0]]}"
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "displayLines": "{[SkillEX01[1]]}"
            },
            "MDF_SuperArmorBreakActionDelay": {
              "displayLines": "{[SkillEX01[2]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "displayLines": "{[SkillEX01[0]]}"
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "displayLines": "{[SkillEX01[1]]}"
            },
            "MDF_SuperArmorBreakActionDelay": {
              "displayLines": "{[SkillEX01[2]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "displayLines": "{[SkillEX01[5]]}"
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "displayLines": "{[SkillEX01[4]]}"
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "displayLines": "{[SkillEX01[3]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "displayLines": "{[SkillEX05[0]]}"
            },
            "MDF_FrenzyIntervalDelay": {
              "displayLines": "{[SkillEX05[1]]}"
            },
            "MDF_MaxFrenzyLayer": {
              "displayLines": "{[SkillEX05[2]]}"
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "displayLines": "{[SkillEX05[3]]}"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1785406995\">Enemy_AML_Boss_IF_AbilityEX02</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909037772\">Enemy_AML_Boss_Part2_IF_AbilityP01_WeaknessControll</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX02[0]]}"
          },
          "variableName": "SkillEX02_P1_Core_StanceDamageValue"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX02[0]]}"
          },
          "variableName": "SkillEX02_P1_Core_StanceDamageValue"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[0]]}"
          },
          "variableName": "SkillEX03_P1_AttackAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[0]]}"
          },
          "variableName": "SkillEX03_P1_AttackAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[0]]}"
          },
          "variableName": "SkillEX03_P1_AttackAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[1]]}"
          },
          "variableName": "SkillEX03_P2_SpeedAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[1]]}"
          },
          "variableName": "SkillEX03_P2_SpeedAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[1]]}"
          },
          "variableName": "SkillEX03_P2_SpeedAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[2]]}"
          },
          "variableName": "SkillEX03_P3_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[2]]}"
          },
          "variableName": "SkillEX03_P3_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[2]]}"
          },
          "variableName": "SkillEX03_P3_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[3]]}"
          },
          "variableName": "SkillEX03_P4_ActionDelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[3]]}"
          },
          "variableName": "SkillEX03_P4_ActionDelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[3]]}"
          },
          "variableName": "SkillEX03_P4_ActionDelayRatio"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1886072709\">Enemy_AML_Boss_IF_AbilityEX04</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
          "valuePerStack": {
            "MDF_TokenDamageReduceRatio": {
              "displayLines": "{[SkillEX04[0]]}"
            },
            "MDF_TokenDamageAddRatioPerlayer": {
              "displayLines": "{[SkillEX04[1]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
          "valuePerStack": {
            "MDF_TokenDamageReduceRatio": {
              "displayLines": "{[SkillEX04[0]]}"
            },
            "MDF_TokenDamageAddRatioPerlayer": {
              "displayLines": "{[SkillEX04[1]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
          "valuePerStack": {
            "MDF_TokenDamageReduceRatio": {
              "displayLines": "{[SkillEX04[0]]}"
            },
            "MDF_TokenDamageAddRatioPerlayer": {
              "displayLines": "{[SkillEX04[1]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-630308982\">Monster_AML_Boss_IF_BattleAlert</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}