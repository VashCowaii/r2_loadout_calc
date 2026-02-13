const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_PassiveAbility_Insert02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{BattleEvent60030}}"
      },
      "variableName": "_CurrentBPSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{BattleEvent60030}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{BattleEvent60030}}"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_WorldErosionIndex",
      "value": 2
    },
    {
      "name": "Add Battle Event",
      "eventID": 60031,
      "assignOwner": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variables": null,
      "whenCreated": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": {
            "operator": "Variables[0] (_CurrentBPSP) || RETURN",
            "displayLines": "_CurrentBPSP",
            "constants": [],
            "variables": [
              "_CurrentBPSP"
            ]
          },
          "isFixed": "* ERR",
          "isSetToValue": true
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_IsWeek",
          "value": 1
        }
      ]
    },
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
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"845647266\">Enemy_W4_IronTombCore_Beta</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Change Battle Arena",
          "status": "Inactive",
          "arenaID": 2048104
        },
        {
          "name": "Change Battle Arena",
          "arenaID": 2048105
        }
      ]
    },
    "Deleted bullshit",
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
          "name": "Define Custom Variable",
          "variableName": "_Trigger1",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Trigger2",
          "value": 1
        },
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
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "setValue": 1
    },
    {
      "name": "Divide BossHP into Bars",
      "barCount": 15
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Active: Fast-Forward Animations",
        "invertCondition": true
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": 99999,
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2029275245\">Enemy_W4_IronTombCore_P3_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1529513281\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded_Listener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1262350181\">MModifier_W4_IronTombCorePart_Ability07_Charge</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag"
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
      "name": "Define Custom Variable with WorldLevel",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_WorldLevel"
    },
    {
      "name": "IF",
      "conditions": "Turn Owner is in Action",
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"990482536\">Enemy_W4_IronTombCore_P3_DisableAction</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "set": {
                "operator": "Variables[0] (UnusedUnderThisBase_228) || RETURN",
                "displayLines": "UnusedUnderThisBase_228",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_228"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "set": {
                "operator": "Variables[0] (UnusedUnderThisBase_229) || RETURN",
                "displayLines": "UnusedUnderThisBase_229",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_229"
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
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}} + {{Irontomb: Core}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-470333037\">Enemy_W4_IronTombCore_Main_P3_HpRatioAdded</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4035010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Anti-Creator, Hatred Inundate"
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
            "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
          },
          "passed": [
            {
              "name": "Achievement",
              "matchTags": true,
              "relatedAchievements": []
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__990482536\">Enemy_W4_IronTombCore_P3_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": {
                    "operator": "Variables[0] (UnusedUnderThisBase_228) || RETURN",
                    "displayLines": "UnusedUnderThisBase_228",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_228"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": {
                    "operator": "Variables[0] (UnusedUnderThisBase_229) || RETURN",
                    "displayLines": "UnusedUnderThisBase_229",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_229"
                    ]
                  }
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_IsWeek",
        "_PhaseCheck",
        "_Trigger1",
        "_Trigger2",
        "AIFlag",
        "_WorldLevel"
      ]
    }
  ]
}