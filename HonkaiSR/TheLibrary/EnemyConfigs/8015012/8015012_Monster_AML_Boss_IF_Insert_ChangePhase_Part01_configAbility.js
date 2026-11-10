const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_Insert_ChangePhase_Part01",
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
      "state": "Skill_Insert",
      "passed": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Animation Task",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1605741417\">Enemy_AML_Boss_HitEffect</a>"
            }
          ]
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Animation Task",
          "execute": [
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1744952962\">Enemy_AML_Boss_IF_Unselectable</a>[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1146217540\">Enemy_AML_Boss_IF_PassiveAbilityInitiate_ChangePhaseController</a>"
            }
          ]
        },
        "Deleted bullshit"
      ]
    },
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
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "ListenAllDieController",
      "scope": "TargetEntity"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"739623542\">Enemy_AML_Boss_IF_DamageTakenUp</a>"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}