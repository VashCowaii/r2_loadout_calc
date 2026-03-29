const configAbility = {
  "fileName": "3002013_Monster_W3_Theater_IF_PassiveAbility01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1371722317\">MModifier_Monster_W3_Theater_IF_DuringAbility</a>"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__114"
      },
      "ifTargetFound": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "silent": true
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "BreakEndFlag"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__114"
      },
      "ifTargetFound": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_TV_00"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "P1_BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Enemy Team",
      "eventID": 20010,
      "variables": {
        "BE_P1_BESpeed": {
          "operator": "Variables[0] (P1_BaseSpeed) || RETURN",
          "displayLines": "P1_BaseSpeed",
          "constants": [],
          "variables": [
            "P1_BaseSpeed"
          ]
        },
        "P2_BreakDelayRatioPerFigure": {
          "operator": "Variables[0] (UnusedUnderThisBase_258) || RETURN",
          "displayLines": "UnusedUnderThisBase_258",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_258"
          ]
        },
        "BE_P3_InitDelay": {
          "operator": "Variables[0] (UnusedUnderThisBase_257) || RETURN",
          "displayLines": "UnusedUnderThisBase_257",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_257"
          ]
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 20010,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-429378171\">Enemy_W3_Theater_BattleEvent</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"890205763\">Enemy_W3_Theater_IF_BattleEvent</a>",
          "valuePerStack": {
            "MDF_BEBreakDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_259) || RETURN",
              "displayLines": "UnusedUnderThisBase_259",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_259"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Dinosaur_00"
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_248) || RETURN",
                "displayLines": "UnusedUnderThisBase_248",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_248"
                ]
              }
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
                "location": "Left"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W3_TV_00"
              }
            ]
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_246) || RETURN",
                "displayLines": "UnusedUnderThisBase_246",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_246"
                ]
              }
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
                "value": "MonsterType_W3_TV_00"
              }
            ]
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_249) || RETURN",
                "displayLines": "UnusedUnderThisBase_249",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_249"
                ]
              }
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
            "value": "MonsterType_W1_Mecha01_02"
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_247) || RETURN",
                "displayLines": "UnusedUnderThisBase_247",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_247"
                ]
              }
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
            "value": "MonsterType_W3_Clock_00"
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_256) || RETURN",
                "displayLines": "UnusedUnderThisBase_256",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_256"
                ]
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
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-627803266\">Standard_SuperArmor_IF</a>[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
      "valuePerStack": {
        "MDF_AllDamageTypeResistance": {
          "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
          "displayLines": "UnusedUnderThisBase_96",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_96"
          ]
        }
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1242309858\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Homework In-Class</span>]",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
              "displayLines": "UnusedUnderThisBase_96",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_96"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertCheck",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-831498858\">MModifier_Monster_W3_Theater_IF_Part2</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "MonsterType_W3_Dinosaur_00"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__114"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Dinosaur_00"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1055277375\">MModifier_Monster_W3_Theater_DamageSharePhase1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1072054994\">MModifier_Monster_W3_Theater_DamageSharePhase2</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "FlopSide",
          "value": -1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2042117256\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2042117256\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1371722317\">MModifier_Monster_W3_Theater_IF_DuringAbility</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1754146880\">Enemy_W3_Theater_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]",
      "valuePerStack": {
        "MDF_DamageStanceValue_Dinosaur": {
          "operator": "Variables[0] (UnusedUnderThisBase_255) || RETURN",
          "displayLines": "UnusedUnderThisBase_255",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_255"
          ]
        },
        "MDF_DamageStanceValue_TV": {
          "operator": "Variables[0] (UnusedUnderThisBase_254) || RETURN",
          "displayLines": "UnusedUnderThisBase_254",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_254"
          ]
        },
        "MDF_DamageStanceValue_Mecha": {
          "operator": "Variables[0] (UnusedUnderThisBase_253) || RETURN",
          "displayLines": "UnusedUnderThisBase_253",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_253"
          ]
        },
        "MDF_DamageStanceValue_Clock": {
          "operator": "Variables[0] (UnusedUnderThisBase_252) || RETURN",
          "displayLines": "UnusedUnderThisBase_252",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_252"
          ]
        },
        "MDF_DamageStanceValue_2": {
          "operator": "Variables[0] (UnusedUnderThisBase_251) || RETURN",
          "displayLines": "UnusedUnderThisBase_251",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_251"
          ]
        },
        "MDF_DamageStanceValue_All": {
          "operator": "Variables[0] (UnusedUnderThisBase_250) || RETURN",
          "displayLines": "UnusedUnderThisBase_250",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_250"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}