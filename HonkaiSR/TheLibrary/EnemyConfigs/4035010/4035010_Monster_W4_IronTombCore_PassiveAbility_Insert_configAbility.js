const configAbility = {
  "fileName": "4035010_Monster_W4_IronTombCore_PassiveAbility_Insert",
  "childAbilityList": [
    "4035010_Monster_W4_IronTombCore_PassiveAbility_Insert",
    "4035010_Monster_W4_IronTombCore_PassiveAbilityInsert_Camera"
  ],
  "skillTrigger": "PassiveSkillInsert",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4035011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Anti-Creator, Hatred Inundate"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_WorldErosion",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
          "displayLines": "({[PassiveSkill01[0]]} * 100)",
          "constants": [
            100
          ],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      },
      "passed": [
        {
          "name": "Set IronTomb Progress",
          "display": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
            "displayLines": "({[PassiveSkill01[0]]} * 100)",
            "constants": [
              100
            ],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "duration": 3
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_WorldErosion",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
            "displayLines": "({[PassiveSkill01[0]]} * 100)",
            "constants": [
              100
            ],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "variableName": "_PhaseCheck",
      "value": 1
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "silent": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1496068463\">W4_IronTombCorePart_Recover</a>"
            }
          ]
        },
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
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 2}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "silent": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2061848542\">W4_IronTombCorePart_01_Recover</a>"
            }
          ]
        },
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
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertCheck",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 2}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1187676843\">Enemy_W4_IronTombCore_PartController</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Turn Is",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Part 1}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"310106298\">Enemy_W4_IronTombCorePart_P2_DisableAction</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Turn Is",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Part 2}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"310106298\">Enemy_W4_IronTombCorePart_P2_DisableAction</a>"
        }
      ]
    },
    {
      "name": "Force-Sync AV Link",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Current Turn Owner}}"
        }
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 0,
          "adjustmentType": "="
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4035011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Anti-Creator, Hatred Inundate"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ChangePhaseEnd",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"464716604\">Enemy_W4_IronTombCore_Main_P2PhaseDamageReduceController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1771971765\">Enemy_W4_IronTombCore_Main_P2PhaseController</a>"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2029275245\">Enemy_W4_IronTombCore_P3_PartController</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__310106298\">Enemy_W4_IronTombCorePart_P2_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                  "target": "{{Irontomb: Core}}"
                }
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_PhaseCheck",
        "InsertCheck",
        "AIFlag"
      ]
    }
  ]
}