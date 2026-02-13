const compositeAbilityObject = {
  "fullCharacterName": 4035011,
  "trimCharacterName": 4035011,
  "abilityList": [
    "4035011_Monster_W4_IronTombCore_Main_P2_5",
    "4035011_Monster_W4_IronTombCore_Main_P2BattlePerform",
    "4035011_Monster_W4_IronTombCore_Main_P3QTE",
    "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform02",
    "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform",
    "4035011_Monster_W4_IronTombCore_Main_P3",
    "4035011_Monster_W4_IronTombCore_Main_P3End",
    "4035011_Monster_W4_IronTombCore_Main_P2End",
    "4035011_Monster_W4_IronTombCore_Main_WorldErosion_Insert",
    "4035011_Monster_W4_IronTombCore_Main_PassiveAbilityInitiate",
    "4035011_Monster_W4_IronTombCore_Main_Ability083_Part01",
    "4035011_Monster_W4_IronTombCore_Main_Ability08_Part02",
    "4035011_Monster_W4_IronTombCore_Main_Ability08_Part01",
    "4035011_Monster_W4_IronTombCore_Main_Ability06_Part02",
    "4035011_Monster_W4_IronTombCore_Main_Ability06_Part01",
    "4035011_Monster_W4_IronTombCore_Main_EndPerform_Part01",
    "4035011_Monster_W4_IronTombCore_QATest_NoEnding",
    "4035011_Monster_W4_IronTombCore_Appear",
    "4035011_Monster_W4_IronTombCore_Beta",
    "4035011_Monster_W4_IronTombCore_WorldErosion_Insert",
    "4035011_Monster_W4_IronTombCore_TimeLock_Off",
    "4035011_Monster_W4_IronTombCore_PassiveAbility_Insert02",
    "4035011_Monster_W4_IronTombCore_PassiveAbility_Insert",
    "4035011_Monster_W4_IronTombCore_PassiveAbilityInitiate",
    "4035011_Monster_W4_IronTombCore_Ability09_Part01",
    "4035011_Monster_W4_IronTombCore_Ability082_Part01",
    "4035011_Monster_W4_IronTombCore_Ability08_Part02",
    "4035011_Monster_W4_IronTombCore_Ability08_Part01",
    "4035011_Monster_W4_IronTombCore_Ability07_Part02",
    "4035011_Monster_W4_IronTombCore_Ability07_Part01",
    "4035011_Monster_W4_IronTombCore_Ability06_Part02",
    "4035011_Monster_W4_IronTombCore_Ability06_Part01",
    "4035011_Monster_W4_IronTombCore_Ability05_Part02",
    "4035011_Monster_W4_IronTombCore_Ability05_Part01",
    "4035011_Monster_W4_IronTombCore_Ability04_Part02",
    "4035011_Monster_W4_IronTombCore_Ability04_Part01",
    "4035011_Monster_W4_IronTombCore_Ability03_Part02",
    "4035011_Monster_W4_IronTombCore_Ability03_Part01",
    "4035011_Monster_W4_IronTombCore_Ability02_Part02",
    "4035011_Monster_W4_IronTombCore_Ability02_Part01",
    "4035011_Monster_W4_IronTombCore_Ability01_Part02",
    "4035011_Monster_W4_IronTombCore_Ability01_Part01",
    "4035011_Modifiers",
    "4035011_Functions",
    "4035011_BE_BattleEvents"
  ],
  "abilityObject": {
    "4035011_Monster_W4_IronTombCore_Main_P2_5": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P2_5",
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
          "modifier": "<a class=\"gModGreen\" id=\"-717242715\">Monster_W4_IronTombCore_Main_P2_5</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-717242715\">Monster_W4_IronTombCore_Main_P2_5</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Main_P2BattlePerform": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P2BattlePerform",
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
          "modifier": "<a class=\"gModGreen\" id=\"395299548\">Monster_W4_IronTombCore_Main_P2BattlePerform</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__395299548\">Monster_W4_IronTombCore_Main_P2BattlePerform</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Main_P3QTE": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P3QTE",
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
          "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1833350337\">Enemy_W4_IronTombCore_Main_P3QTETest</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1833350337\">Enemy_W4_IronTombCore_Main_P3QTETest</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform02",
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
          "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1313833624\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1313833624\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest02</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform",
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
          "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Main_P3": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P3",
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
          "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_P3End": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P3End",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_P2End": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_P2End",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
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
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"928063320\">Enemy_W4_IronTombCore_Main_P2PhaseLockHP</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 20
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_WorldErosion_Insert": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_WorldErosion_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}} + {{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
        },
        "Deleted bullshit",
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "popUpText": "Descent into Chaos"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
          "valuePerStack": {
            "MDF_BPMaxCost": 4,
            "MDF_DirtyHPRatio_PerLayer": {
              "operator": "Constants[0] (4) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
              "displayLines": "(4 * {[PassiveSkill01[4]]})",
              "constants": [
                4
              ],
              "variables": [
                "{[PassiveSkill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": "Yapping is over"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 10
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_WorldErosionIndex",
          "value": 1
        },
        {
          "name": "Add Battle Event",
          "eventID": 60030,
          "assignOwner": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "BattleEvent01",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": 4,
              "isFixed": "* ERR",
              "isSetToValue": true
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_StoryMode",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "#CL_First",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_FirstBE",
              "value": 1
            },
            "Show BattleEvent Button"
          ]
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BattleEvent01"
          },
          "afterInjection": []
        },
        {
          "name": "Add Battle Event",
          "eventID": 60032,
          "assignOwner": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variables": null,
          "whenCreated": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "set": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": "Yapping is over"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_PassiveAbilityInitiate": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        "Block Battle-Conditions On Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1190345807\">Enemy_W4_IronTombCore_MainP3_ShowBattleCondition</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1521825305\">Enemy_W4_IronTombCore_Main_P1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1092187046\">Enemy_W4_IronTombCore_Main_ShowBattleCondition</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1313833624\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest02</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"395299548\">Monster_W4_IronTombCore_Main_P2BattlePerform</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-717242715\">Monster_W4_IronTombCore_Main_P2_5</a>",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-778620552\">Enemy_W4_IronTombCore_Main_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"848031818\">Enemy_W4_IronTombCore_WorldErosion_MainMark</a>"
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_Ability083_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_Ability083_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": "Yapping is over"
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_Ability08_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Cyrene's Demiurge}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-385769957\">MEnemy_W4_IronTombCore_Main_CharacterForceVisible</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_QTE_Progress",
          "value": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__106) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__106",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__106"
            ]
          }
        },
        {
          "name": "Set IronTomb Progress",
          "display": {
            "operator": "Variables[0] (#CL_QTE_Progress) || RETURN",
            "displayLines": "#CL_QTE_Progress",
            "constants": [],
            "variables": [
              "#CL_QTE_Progress"
            ]
          },
          "mode": "QTE"
        },
        {
          "name": "Set IronTomb Progress",
          "display": 80,
          "duration": 8,
          "mode": "QTE"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_QTE_Progress",
          "value": 80
        },
        {
          "name": "Set IronTomb Progress",
          "display": 95,
          "duration": 2.5,
          "mode": "QTE"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_QTE_Progress",
          "value": 95
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Main_Ability083_Part01",
          "isTrigger": true
        },
        "Quick-Time-Event"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_Ability08_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_Ability08_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Main_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_Ability06_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Cyrene's Demiurge}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-385769957\">MEnemy_W4_IronTombCore_Main_CharacterForceVisible</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1834862117\">Enemy_W4_IronTombCore_Main_P3_PartDisableAction</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
            }
          ]
        },
        "Quick-Time-Event",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-660533962\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_50</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Cyrene's Demiurge}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"402547307\">MissionBattleEvent60034_AddAbility</a>"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Servant_CyreneServant_v2_Ability01_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1998035776\">Enemy_W4_IronTombPhantom_Part3</a>[<span class=\"descriptionNumberColor\">ERROR: Main Process Compromised</span>]"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1291213263\">W4_IronTombCore_AddBreakEffect</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_MissionTalkEnd",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Main_Ability06_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_Ability06_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Main_Ability06_Part01",
        "4035011_Monster_W4_IronTombCore_Main_Ability06_Part02"
      ],
      "skillTrigger": "Skill062",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Main_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Main_EndPerform_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Main_EndPerform_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "IF",
          "conditions": "Yapping is over"
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W4_IronTombCore_Main_Ability08_Part01",
          "priorityTag": "LevelPerformMonster",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_QATest_NoEnding": {
      "fileName": "4035011_Monster_W4_IronTombCore_QATest_NoEnding",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1441620046\">Monster_W4_IronTombCore_QATest_NoEnding</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1441620046\">Monster_W4_IronTombCore_QATest_NoEnding</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Appear": {
      "fileName": "4035011_Monster_W4_IronTombCore_Appear",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Beta": {
      "fileName": "4035011_Monster_W4_IronTombCore_Beta",
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
          "modifier": "<a class=\"gModGreen\" id=\"845647266\">Enemy_W4_IronTombCore_Beta</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__845647266\">Enemy_W4_IronTombCore_Beta</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_WorldErosion_Insert": {
      "fileName": "4035011_Monster_W4_IronTombCore_WorldErosion_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Phantom}}"
                },
                "value1": "_PhaseLock",
                "compareType": "=",
                "value2": 0
              }
            ]
          }
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "popUpText": "Descent into Chaos"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "_WorldErosion",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Constants[0] (100) || MUL || RETURN",
                  "displayLines": "({[PassiveSkill01[2]]} * 100)",
                  "constants": [
                    100
                  ],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "#PassiveSkill01_P3_Percentage",
                "compareType": ">",
                "value2": 0
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
              "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
              "valuePerStack": {
                "MDF_BPMaxCost": 4,
                "MDF_DirtyHPRatio_PerLayer": {
                  "operator": "Constants[0] (4) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                  "displayLines": "(4 * {[PassiveSkill01[4]]})",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "{[PassiveSkill01[4]]}"
                  ]
                }
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
                    "name": "Compare: Variable",
                    "value1": "_WorldErosion",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                      "displayLines": "({[PassiveSkill01[1]]} * 100)",
                      "constants": [
                        100
                      ],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "#PassiveSkill01_P2_Percentage",
                    "compareType": ">",
                    "value2": 0
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
                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                  "valuePerStack": {
                    "MDF_BPMaxCost": 2,
                    "MDF_DirtyHPRatio_PerLayer": {
                      "operator": "Constants[0] (2) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                      "displayLines": "(2 * {[PassiveSkill01[4]]})",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "{[PassiveSkill01[4]]}"
                      ]
                    }
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
                        "name": "Compare: Variable",
                        "value1": "_WorldErosion",
                        "compareType": ">=",
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
                      {
                        "name": "Compare: Variable",
                        "value1": "#PassiveSkill01_P1_Percentage",
                        "compareType": ">",
                        "value2": 0
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
                      "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                      "valuePerStack": {
                        "MDF_BPMaxCost": 1,
                        "MDF_DirtyHPRatio_PerLayer": {
                          "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[4]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[4]]}"
                          ]
                        }
                      }
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_TimeLock_Off": {
      "fileName": "4035011_Monster_W4_IronTombCore_TimeLock_Off",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]"
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_PassiveAbility_Insert02": {
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
    },
    "4035011_Monster_W4_IronTombCore_PassiveAbility_Insert": {
      "fileName": "4035011_Monster_W4_IronTombCore_PassiveAbility_Insert",
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
    },
    "4035011_Monster_W4_IronTombCore_PassiveAbilityInitiate": {
      "fileName": "4035011_Monster_W4_IronTombCore_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-370444723\">W4_IronTombCore_BattleScore1</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-420777580\">W4_IronTombCore_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-403999961\">W4_IronTombCore_BattleScore3</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1258256002\">Enemy_W4_IronTombCore_Status</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate",
                "invertCondition": true
              },
              {
                "name": "Stage ID",
                "ID": 2294,
                "compareType": "=",
                "characterName": null,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "eventID": 60030,
              "assignOwner": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variables": null
            },
            {
              "name": "Add Battle Event",
              "eventID": 60032,
              "assignOwner": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variables": null
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2029484938\">WMonster_W4_TieMu_P3Test</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Set Enemy Phase"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1187676843\">Enemy_W4_IronTombCore_PartController</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "TimePart",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": -1
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "EnergyPart",
          "value": {
            "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
            "displayLines": "PartEntity2_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity2_MonsterID"
            ]
          },
          "offset": 1,
          "type": 2
        },
        {
          "name": "Establish Group Relationship",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "relatedGroup": "HPTransfer"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-453954106\">Enemy_W4_IronTombCorePart_DamageTransfer</a>[<span class=\"descriptionNumberColor\">Damage Resonance</span>]"
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 2}}"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}}"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        },
        {
          "name": "Create AV Link",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "linkOrder": 1,
          "isStart": true,
          "linkFollowerModifications": {
            "OnBreak": "Bit_AutoForceSync"
          },
          "linkOwnerModifications": {
            "OnBreak": "Bit_AutoForceSync"
          }
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability09_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability09_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability09_Part01",
        "4035011_Monster_W4_IronTombCore_Ability09_Camera"
      ],
      "skillTrigger": "Skill09",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1441620046\">Monster_W4_IronTombCore_QATest_NoEnding</a>"
          },
          "passed": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_WorldErosion",
              "value": 0
            }
          ]
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability082_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability082_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
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
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        }
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability08_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1438614862\">W4_IronTombCore_RemoveChargeEffect_WithOutFade</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
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
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
                "invertCondition": true
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
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"7842154\">Enemy_W4_IronTombCore_Main_LoseMark</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (_Skill08_DamagePercentage) || RETURN",
              "displayLines": "_Skill08_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill08_DamagePercentage"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (_TargetMaxHP) || RETURN",
                      "displayLines": "_TargetMaxHP",
                      "constants": [],
                      "variables": [
                        "_TargetMaxHP"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1291213263\">W4_IronTombCore_AddBreakEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger: Attack End",
              "skipDeathSettle": true
            },
            {
              "name": "IF",
              "conditions": "Yapping is over"
            }
          ],
          "failed": [
            "Trigger: Attack End",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
              "variables": {
                "_ErosionParam": {
                  "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
                  "displayLines": "{[Skill08[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill08[1]]}"
                  ]
                }
              }
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
                "characterName": "Anti-Creator, Hatred Inundate",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]",
                          "valuePerStack": {
                            "MDF_SPConvert": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            },
                            "MDF_ActionDelayConvert": {
                              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                              "displayLines": "{[Skill04[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[3]]}"
                              ]
                            }
                          }
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
                      "target": "{{Irontomb: Part 2}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_TargetMaxSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Variables[0] (_PhaseLock) || INVERT || Variables[1] (_TargetMaxSP) || MUL || RETURN",
                            "displayLines": "(-_PhaseLock * _TargetMaxSP)",
                            "constants": [],
                            "variables": [
                              "_PhaseLock",
                              "_TargetMaxSP"
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Phantom}}"
                },
                "value1": "_PhaseLock",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-673625987\">Monster_W4_IronTombCore_Ability08Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Ability08_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability08_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability08_Part01",
        "4035011_Monster_W4_IronTombCore_Ability08_Part02",
        "4035011_Monster_W4_IronTombCore_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability07_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
              "name": "Divide BossHP into Bars",
              "barCount": 30
            },
            {
              "name": "Set IronTomb Progress",
              "display": 100,
              "duration": 3
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>"
            }
          ]
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
            }
          ]
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
          }
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
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1262350181\">MModifier_W4_IronTombCorePart_Ability07_Charge</a>",
          "casterAssign": "TargetSelf"
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
            "characterName": "Anti-Creator, Hatred Inundate",
            "invertCondition": true
          },
          "passed": [
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
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
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
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "setValue": {
                "operator": "Variables[0] (_MaxHP) || RETURN",
                "displayLines": "_MaxHP",
                "constants": [],
                "variables": [
                  "_MaxHP"
                ]
              }
            }
          ]
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
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 1,
              "adjustmentType": "Delay"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent60032}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}} + {{BattleEvent60030}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-642581629\">Enemy_W4_IronTombCore_Main_BanUltra</a>"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1913133664\">Enemy_W4_IronTombCore_Main_NoDamage</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1630579627\">Enemy_W4_IronTombCore_Main_NoDamagePart</a>"
            }
          ]
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability07_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability07_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability07_Part01",
        "4035011_Monster_W4_IronTombCore_Ability07_Part02",
        "4035011_Monster_W4_IronTombCore_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability06_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Compare: Variable",
                "value1": "_Main_Skill06",
                "compareType": "=",
                "value2": 0
              }
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Aim Target}}"
          },
          "variableName": "_CharacterCount",
          "livingTargets": true
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "variableName": "_AvatarCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CharacterCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 4035011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "characterName": "Anti-Creator, Hatred Inundate"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AvatarCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Taunt",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Character ID",
                                "ID": 1415,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Cyrene",
                                "invertCondition": true
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
                              "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemies by Aggro}}"
                          },
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Character ID",
                            "ID": 1415,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Cyrene",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Taunt",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Character ID",
                            "ID": 1415,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Cyrene",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemies by Aggro}}"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CharacterCount",
                  "value": {
                    "operator": "Variables[0] (_CharacterCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_CharacterCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CharacterCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CharacterCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Skill06 Aim Target}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Skill06 Aim Target}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CharacterCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Skill06 Aim Target}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Skill06 Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]",
          "valuePerStack": {
            "MDF_SPConvert": {
              "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
              "displayLines": "{[Skill06[2]]}",
              "constants": [],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "MDF_ActionDelayConvert": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Compare: Variable",
                "value1": "_Main_Skill06",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Main_Skill06",
              "value": 1
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1291213263\">W4_IronTombCore_AddBreakEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Main_Skill06",
            "_AvatarCount"
          ]
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Ability06_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability06_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability06_Part01",
        "4035011_Monster_W4_IronTombCore_Ability06_Part02",
        "4035011_Monster_W4_IronTombCore_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability05_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Compare: Variable",
                "value1": "_Main_Skill05",
                "compareType": "=",
                "value2": 0
              }
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[getMemosprite]]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index0]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index1]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index2]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index1]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index2]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index3]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index3]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index0]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index1]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index2]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index3]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index0]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index1]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index2]].[[addMemosprite]].[[removeUnselectable]] + {{Player Team(Exclude Memosprites)}}.[[index3]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}.[[index0]].[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetMaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": {
                "operator": "Variables[0] ({[Skill05[1]]}) || INVERT || Variables[1] (_TargetMaxSP) || MUL || RETURN",
                "displayLines": "(-{[Skill05[1]]} * _TargetMaxSP)",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}",
                  "_TargetMaxSP"
                ]
              },
              "isFixed": "(Fixed)"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-151375815\">Enemy_W4_IronTombCorePart_01_Ability02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Compare: Variable",
                "value1": "_Main_Skill05",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Main_Skill05",
              "value": 1
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1291213263\">W4_IronTombCore_AddBreakEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-567264058\">Monster_W4_IronTombCore_Ability05Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Main_Skill05"
          ]
        }
      ]
    },
    "4035011_Monster_W4_IronTombCore_Ability05_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability05_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability05_Part01",
        "4035011_Monster_W4_IronTombCore_Ability05_Part02",
        "4035011_Monster_W4_IronTombCore_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability04_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]",
          "valuePerStack": {
            "MDF_SPConvert": {
              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
              "displayLines": "{[Skill04[2]]}",
              "constants": [],
              "variables": [
                "{[Skill04[2]]}"
              ]
            },
            "MDF_ActionDelayConvert": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability04_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability04_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability04_Part01",
        "4035011_Monster_W4_IronTombCore_Ability04_Part02",
        "4035011_Monster_W4_IronTombCore_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability03_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_TargetMaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Variables[1] (_TargetMaxSP) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * _TargetMaxSP)",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}",
              "_TargetMaxSP"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-151375815\">Enemy_W4_IronTombCorePart_01_Ability02_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability03_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability03_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability03_Part01",
        "4035011_Monster_W4_IronTombCore_Ability03_Part02",
        "4035011_Monster_W4_IronTombCore_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability02_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability02_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability02_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability02_Part01",
        "4035011_Monster_W4_IronTombCore_Ability02_Part02",
        "4035011_Monster_W4_IronTombCore_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability01_Part02": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "_IsTriggerTutorialHate",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_IsTriggerTutorialHate",
              "value": 1
            },
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0.3,
              "adjustmentType": "Delay"
            }
          ]
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
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "_IsTriggerTutorialHate",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_IsTriggerTutorialHate",
              "value": 1
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{BattleEvent60030}}"
              },
              "value": 4,
              "isFixed": "* ERR",
              "isSetToValue": true
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4035011_Monster_W4_IronTombCore_Ability01_Part01": {
      "fileName": "4035011_Monster_W4_IronTombCore_Ability01_Part01",
      "childAbilityList": [
        "4035011_Monster_W4_IronTombCore_Ability01_Part01",
        "4035011_Monster_W4_IronTombCore_Ability01_Part02",
        "4035011_Monster_W4_IronTombCore_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_IronTombCore_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4035011_Modifiers": {
      "fileName": "4035011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1163429243\">Enemy_W4_IronTombCore_Main_InfinityHPEnd</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2115479109\">Enemy_W4_IronTombPhantom_Part4</a>[<span class=\"descriptionNumberColor\">ERROR: Core Damaged</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "\"FINAL PROCESS: ERROR LOG 4\"<br><br>[Intrusion Variable] Dan Heng: Input SkoPeo365 Value ▀█Storage Anomaly█▄ Unable to Delete<br>[Intrusion Variable] March 7th: Input PhiLia093 Value▄ ▀System Time Rollback█▀ Infinite Loop<br>NeiKos496: Merge-Split Detected ▀▀█▄Core Damaged▄▄▄ Critical Process Terminated▄▄▄<br><br>MAJOR WARNING: System crashed. Terminating operations.<br><br>Notice: Detected PhiLia093 managing permissions.",
          "type": "Other",
          "statusName": "ERROR: Core Damaged"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1998035776\">Enemy_W4_IronTombPhantom_Part3</a>[<span class=\"descriptionNumberColor\">ERROR: Main Process Compromised</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "\"FINAL PROCESS: ERROR LOG 3\"<br><br>PoleMos600: Abnormal Loading ██Data Wipe Attack▄▄ Copy Lost<br>EpieiKeia216: Abnormal Loading █▀Subprocess Frozen▄█ Unable to Terminate<br>EleOs252: Abnormal Loading ▀▄Stack Overflow█▄ Insufficient RAM<br><br>WARNING: Calculation process terminated. Massive amount of corruption detected.",
          "type": "Other",
          "statusName": "ERROR: Main Process Compromised"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2014813395\">Enemy_W4_IronTombPhantom_Part2</a>[<span class=\"descriptionNumberColor\">ERROR: Repair System Compromised</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "\"FINAL PROCESS: ERROR LOG 2\"<br><br>KaLos618: Abnormal Loading ▀▄Throttle Failed▄█ Performance Overload<br>SkeMma720: Abnormal Loading █▀Malicious Code Injected▄█ System Out of Control<br>OreXis945: Abnormal Loading ▀█Parameters Distorted▄█ Massive Logic Errors<br><br>WARNING: Repair system not responding. Internal attack detected.",
          "type": "Other",
          "statusName": "ERROR: Repair System Compromised"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2031591014\">Enemy_W4_IronTombPhantom_Part1</a>[<span class=\"descriptionNumberColor\">ERROR: Security System Compromised</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "\"FINAL PROCESS: ERROR LOG 1\"<br><br>HapLotes405: Error Loading ▀█Transfer Loop█▄ Information Database Connection Timeout<br>ApoRia432: Error Loading █▀Assertion Failed▄█ Detection System Unresponsive<br>HubRis504: Error Loading ▀▄Illegal Protocol█▄ Firewall Deactivated<br><br>WARNING: Security system disrupted. Electrical signal anomaly detected.",
          "type": "Other",
          "statusName": "ERROR: Security System Compromised"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-385769957\">MEnemy_W4_IronTombCore_Main_CharacterForceVisible</a>",
          "modifierFlags": [
            "STAT_ForceActionable"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__669864246\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.000010000076
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__736974722\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_5</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.05
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_InsertCheck",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HpLockCheck",
                      "value": 1
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-777670637\">GlobalFunction_ClearAvatarArea_ByAbility</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Main_P3End",
                      "priorityTag": "PROG_MonsterLowest",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_HpLockCheck",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "W4_IronTombCorePart_Departed",
                      "state": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}} - {{BattleEvent60031}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-642581629\">Enemy_W4_IronTombCore_Main_BanUltra</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HpLockCheck",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1834862117\">Enemy_W4_IronTombCore_Main_P3_PartDisableAction</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "Endurance",
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Irontomb: Core}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1573745776\">Enemy_W4_IronTombCore_Main_P3_MuteBreak</a>",
                            "invertCondition": true
                          },
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
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Core}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1573745776\">Enemy_W4_IronTombCore_Main_P3_MuteBreak</a>",
          "modifierFlags": [
            "MuteBreak",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-660533962\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_50</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1573745776\">Enemy_W4_IronTombCore_Main_P3_MuteBreak</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1573745776\">Enemy_W4_IronTombCore_Main_P3_MuteBreak</a>"
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
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "set": 0
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
                      "set": 0
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
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 99
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 13
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__928063320\">Enemy_W4_IronTombCore_Main_P2PhaseLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1771971765\">Enemy_W4_IronTombCore_Main_P2PhaseController</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck02",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-777670637\">GlobalFunction_ClearAvatarArea_ByAbility</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HpLockCheck",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck02"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Main_P2End",
                      "priorityTag": "PROG_MonsterLowest",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_HpLockCheck",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}} + {{BattleEvent60030}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-642581629\">Enemy_W4_IronTombCore_Main_BanUltra</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HpLockCheck",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_PhaseCheck",
            "InsertCheck",
            "AIFlag",
            "_ChangePhaseEnd"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-778620552\">Enemy_W4_IronTombCore_Main_Status</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1415,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Cyrene"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"7842154\">Enemy_W4_IronTombCore_Main_LoseMark</a>",
                        "invertCondition": true
                      }
                    ]
                  }
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Memosprite"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1913133664\">Enemy_W4_IronTombCore_Main_NoDamage</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_AttackTimes",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AttackTimes",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[3]]}"
                      ]
                    }
                  },
                  "passed": [
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
                          "adjustmentValue": 0.01,
                          "adjustmentType": "="
                        },
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "set": 0.01
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Target is Next Turn",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "partOf": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "set": 0
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
                              "set": 0.01
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AttackTimes",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsTriggerTutorialBE1",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 60030,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsTriggerTutorialBE1",
                      "value": 1
                    },
                    {
                      "name": "Show BattleEvent Button",
                      "show": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsTriggerBE2",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 60031,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsTriggerBE2",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Phantom}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2031591014\">Enemy_W4_IronTombPhantom_Part1</a>[<span class=\"descriptionNumberColor\">ERROR: Security System Compromised</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MissionTalkEnd",
                      "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__7842154\">Enemy_W4_IronTombCore_Main_LoseMark</a>",
          "stackData": [],
          "latentQueue": [
            "_PhaseLock"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__848031818\">Enemy_W4_IronTombCore_WorldErosion_MainMark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-642581629\">Enemy_W4_IronTombCore_Main_BanUltra</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Skill Point Lock-Out",
                  "amount": 999
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_ChangePhaseEnd",
            "AIFlag",
            "InsertCheck",
            "_PhaseCheck",
            "InsertCheck02",
            "_HpLockCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1630579627\">Enemy_W4_IronTombCore_Main_NoDamagePart</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1913133664\">Enemy_W4_IronTombCore_Main_NoDamage</a>",
          "modifierFlags": [
            "BlockDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.1
                }
              ]
            },
            {
              "eventTrigger": "Losing HP [Owner]: Start",
              "execute": [
                {
                  "name": "Override HP Lost",
                  "setTo": 0.0000010000076
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [
            "_PhaseLock"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1521825305\">Enemy_W4_IronTombCore_Main_P1</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-717242715\">Monster_W4_IronTombCore_Main_P2_5</a>"
                  },
                  "passed": [
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 20
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Battle Event ID",
                        "ID": 60030,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_FirstBE",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FirstBE",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1095699636\">Standard_Monster_Floating_DamageReduceLock</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Entity Special Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Trial Entity"
                      },
                      {
                        "name": "Is Entity Special Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Mission Entity"
                      },
                      {
                        "name": "Is Entity Special Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Story Entity"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentSP",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxSP) || Constants[0] (0.5) || MUL || RETURN",
                          "displayLines": "(MDF_MaxSP * 0.5)",
                          "constants": [
                            0.5
                          ],
                          "variables": [
                            "MDF_MaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Variables[0] (MDF_MaxSP) || Constants[0] (0.5) || MUL || RETURN",
                            "displayLines": "(MDF_MaxSP * 0.5)",
                            "constants": [
                              0.5
                            ],
                            "variables": [
                              "MDF_MaxSP"
                            ]
                          },
                          "isFixed": "* ERR",
                          "isSetToValue": true
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
                    "modifier": "<a class=\"gModGreen\" id=\"395299548\">Monster_W4_IronTombCore_Main_P2BattlePerform</a>"
                  },
                  "passed": [
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Main_P2End",
                      "priorityTag": "PROG_MonsterLowest",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": 0.9
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                      "name": "Assign Unique Name",
                      "uniqueName": "BattleEvent02",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MissionTalkType",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Gender is",
                    "gender": "GENDER_MAN"
                  },
                  "passed": [
                    {
                      "name": "Add Battle Event",
                      "eventID": 60033,
                      "variables": null
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Battle Event",
                      "eventID": 60035,
                      "variables": null
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": 2
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WorldErosion02",
                  "value": 100
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Phantom}}"
                  },
                  "variableName": "_PhaseCheck",
                  "value": 3
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 11
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 11
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-470333037\">Enemy_W4_IronTombCore_Main_P3_HpRatioAdded</a>"
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-660533962\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_50</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"736974722\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_5</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"669864246\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_1</a>"
                },
                {
                  "name": "Set IronTomb Progress",
                  "display": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__106) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__106",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__106"
                    ]
                  },
                  "mode": "LOVE"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HpRatio",
                  "value": {
                    "operator": "Variables[0] (_CurrentHp) || Variables[1] (_MaxHp) || DIV || RETURN",
                    "displayLines": "(_CurrentHp / _MaxHp)",
                    "constants": [],
                    "variables": [
                      "_CurrentHp",
                      "_MaxHp"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_HpRatio",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__106) || Constants[0] (5) || SUB || Constants[1] (100) || DIV || RETURN",
                      "displayLines": "((ENEMIES_OBJECT_UNUSED__106 - 5) / 100)",
                      "constants": [
                        5,
                        100
                      ],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__106"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WorldErosion02",
                      "value": {
                        "operator": "Variables[0] (_HpRatio) || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "(_HpRatio * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_HpRatio"
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_HpRatio",
                        "compareType": "<=",
                        "value2": 0.75
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_IsTrigger75",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsTrigger75",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Phantom}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2014813395\">Enemy_W4_IronTombPhantom_Part2</a>[<span class=\"descriptionNumberColor\">ERROR: Repair System Compromised</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MissionTalkEnd",
                      "value": 1
                    }
                  ]
                },
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
                        "value1": "_HpRatio",
                        "compareType": "<=",
                        "value2": 0.25
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_IsTrigger25",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsTrigger25",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Phantom}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2115479109\">Enemy_W4_IronTombPhantom_Part4</a>[<span class=\"descriptionNumberColor\">ERROR: Core Damaged</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MissionTalkEnd",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Battle Event",
                  "eventID": 60032,
                  "assignOwner": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "#CL_First",
                      "value": 0
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
                    "modifier": "<a class=\"gModGreen\" id=\"154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
                    },
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "W4_IronTombCorePart_Departed",
                      "state": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}} - {{BattleEvent60031}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-642581629\">Enemy_W4_IronTombCore_Main_BanUltra</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Main_P3End",
                      "priorityTag": "PROG_MonsterLowest",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
                    "modifier": "<a class=\"gModGreen\" id=\"1833350337\">Enemy_W4_IronTombCore_Main_P3QTETest</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WorldErosion02",
                      "value": 5
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Main_Ability08_Part01",
                      "priorityTag": "LevelPerformMonster",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1313833624\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest02</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1833350337\">Enemy_W4_IronTombCore_Main_P3QTETest</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_FirstTutorial",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_FirstTutorial",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "MissionBattleEvent60031_Ability03_Insert",
                          "abilitySource": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "BattleEvent02"
                          },
                          "priorityTag": "LevelPerformAvatar",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__106",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                      "valuePerStack": {
                        "MDF_BPMaxCost": 3,
                        "MDF_DirtyHPRatio_PerLayer": {
                          "operator": "Constants[0] (3) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                          "displayLines": "(3 * {[PassiveSkill01[4]]})",
                          "constants": [
                            3
                          ],
                          "variables": [
                            "{[PassiveSkill01[4]]}"
                          ]
                        }
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set IronTomb Progress",
                      "display": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__106) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__106",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__106"
                        ]
                      },
                      "mode": "LOVE"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_WorldErosion02",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Constants[0] (100) || MUL || RETURN",
                              "displayLines": "({[PassiveSkill01[2]]} * 100)",
                              "constants": [
                                100
                              ],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "#PassiveSkill01_P3_Percentage",
                            "compareType": ">",
                            "value2": 0
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
                          "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                          "valuePerStack": {
                            "MDF_BPMaxCost": 3,
                            "MDF_DirtyHPRatio_PerLayer": {
                              "operator": "Constants[0] (3) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                              "displayLines": "(3 * {[PassiveSkill01[4]]})",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "{[PassiveSkill01[4]]}"
                              ]
                            }
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
                                "name": "Compare: Variable",
                                "value1": "_WorldErosion02",
                                "compareType": ">",
                                "value2": {
                                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                                  "displayLines": "({[PassiveSkill01[1]]} * 100)",
                                  "constants": [
                                    100
                                  ],
                                  "variables": [
                                    "{[PassiveSkill01[1]]}"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "#PassiveSkill01_P2_Percentage",
                                "compareType": ">",
                                "value2": 0
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
                              "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                              "valuePerStack": {
                                "MDF_BPMaxCost": 2,
                                "MDF_DirtyHPRatio_PerLayer": {
                                  "operator": "Constants[0] (2) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                                  "displayLines": "(2 * {[PassiveSkill01[4]]})",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "{[PassiveSkill01[4]]}"
                                  ]
                                }
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
                                    "name": "Compare: Variable",
                                    "value1": "_WorldErosion02",
                                    "compareType": ">",
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
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "#PassiveSkill01_P1_Percentage",
                                    "compareType": ">",
                                    "value2": 0
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                                  "valuePerStack": {
                                    "MDF_BPMaxCost": 1,
                                    "MDF_DirtyHPRatio_PerLayer": {
                                      "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[4]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[4]]}"
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>"
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
            },
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__107",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__108",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{BattleEvent60031}}"
                      },
                      "variableName": "_MissionTalkType",
                      "value": 2
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}} - {{BattleEvent60031}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{BattleEvent60031}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)",
                      "isSetToValue": true
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "skillType": "ControlSkill03",
                      "target": {
                        "name": "Target Name",
                        "target": "{{BattleEvent60031}}"
                      },
                      "afterInjection": []
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
          "for": "<a class=\"gModGreen\" id=\"mod__463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"71635503\">Cyrene_Main_P3</a>",
                      "casterAssign": "TargetSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__464716604\">Enemy_W4_IronTombCore_Main_P2PhaseDamageReduceController</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1095699636\">Standard_Monster_Floating_DamageReduceLock</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1095699636\">Standard_Monster_Floating_DamageReduceLock</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_PhaseCheck",
            "InsertCheck",
            "AIFlag",
            "_ChangePhaseEnd"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
                },
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Variables[0] ({[PassiveSkill03[2]]}) || Constants[0] (0.05) || SUB || RETURN",
                    "displayLines": "({[PassiveSkill03[2]]} - 0.05)",
                    "constants": [
                      0.05
                    ],
                    "variables": [
                      "{[PassiveSkill03[2]]}"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1095699636\">Standard_Monster_Floating_DamageReduceLock</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>",
                  "valuePerStack": {
                    "MDF_LockHpActionDecreaseRatio": {
                      "operator": "Variables[0] ({[PassiveSkill03[7]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[7]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[7]]}"
                      ]
                    },
                    "MDF_LastLockHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[2]]}"
                      ]
                    },
                    "MDF_LockHpUpLimitRatio": {
                      "operator": "Variables[0] ({[PassiveSkill03[6]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[6]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[6]]}"
                      ]
                    },
                    "MDF_DamageReduceRatio": {
                      "operator": "Variables[0] ({[PassiveSkill03[8]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[8]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[8]]}"
                      ]
                    }
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill03[2]]}) || Constants[0] (0.05) || ADD || RETURN",
                      "displayLines": "({[PassiveSkill03[2]]} + 0.05)",
                      "constants": [
                        0.05
                      ],
                      "variables": [
                        "{[PassiveSkill03[2]]}"
                      ]
                    }
                  },
                  "passed": [
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
                          "adjustmentValue": 0.01,
                          "adjustmentType": "="
                        },
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "set": 0.01
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Target is Next Turn",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "partOf": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "set": 0
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
                              "set": 0.01
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1092187046\">Enemy_W4_IronTombCore_Main_ShowBattleCondition</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1092187046\">Enemy_W4_IronTombCore_Main_ShowBattleCondition</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1092187046\">Enemy_W4_IronTombCore_Main_ShowBattleCondition</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1190345807\">Enemy_W4_IronTombCore_MainP3_ShowBattleCondition</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1190345807\">Enemy_W4_IronTombCore_MainP3_ShowBattleCondition</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1190345807\">Enemy_W4_IronTombCore_MainP3_ShowBattleCondition</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-403999961\">W4_IronTombCore_BattleScore3</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Binary Collapse",
                          "desc": "In the battle with Anti-Creator, Hatred Inundate, inflict the \"Grave Wound\" state on Imprisoned Mythos or Manipulated Logos #1 time(s)",
                          "rarity": "Low",
                          "params": [
                            1
                          ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-420777580\">W4_IronTombCore_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "IronTombCore_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "IronTombCore_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Do Not Let Hatred Blot Out The Stars",
                          "desc": "Win the battle against Anti-Creator, Hatred Inundate, while keeping \"Amphorean Hatred\" at no higher than #1%",
                          "rarity": "Low",
                          "params": [
                            66
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_WorldErosion02",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 67,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IronTombCore_BattleScore2_Flag",
                      "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__211705252\">MScoring_30231_TargetCharacterID_04</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Trailblazer}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CharacterID_30231_Flag04",
                      "value": 8001
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetWrite": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "CharacterID_30231_Flag04",
                      "value": "TargetCharacterID"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__194927633\">MScoring_30231_TargetCharacterID_03</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Trailblazer}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CharacterID_30231_Flag03",
                      "value": 8001
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetWrite": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "CharacterID_30231_Flag03",
                      "value": "TargetCharacterID"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__178150014\">MScoring_30231_TargetCharacterID_02</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Trailblazer}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CharacterID_30231_Flag02",
                      "value": 8001
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetWrite": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "CharacterID_30231_Flag02",
                      "value": "TargetCharacterID"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__161372395\">MScoring_30231_TargetCharacterID_01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Trailblazer}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CharacterID_30231_Flag01",
                      "value": 8001
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetWrite": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "CharacterID_30231_Flag01",
                      "value": "TargetCharacterID"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__13940540\">MScoring_30231_Listen_Sub</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Trailblazer}}"
                        }
                      },
                      {
                        "name": "Character ID",
                        "ID": 1413,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Evernight"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1414,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Dan Heng • Permansor Terrae"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1402,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Aglaea"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1403,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Tribbie"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1404,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Mydei"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1407,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Castorice"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1405,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Anaxa"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1409,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Hyacine"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1406,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Cipher"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1412,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Cerydra"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1410,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Hysilens"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1415,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Cyrene"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1408,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "characterName": "Phainon"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag01",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag02",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag03",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag04",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Ability Targets of Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
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
                                "value1": "CharacterID_30231_Flag01",
                                "compareType": ">=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag02",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag03",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag04",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                                  }
                                ]
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Ability Targets of Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
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
                                    "value1": "CharacterID_30231_Flag01",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag02",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag03",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag04",
                                    "compareType": "=",
                                    "value2": 0
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                                      }
                                    ]
                                  },
                                  "failed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Ability Targets of Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
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
                                        "value1": "CharacterID_30231_Flag01",
                                        "compareType": ">=",
                                        "value2": 1
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "CharacterID_30231_Flag02",
                                        "compareType": ">=",
                                        "value2": 1
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "CharacterID_30231_Flag03",
                                        "compareType": ">=",
                                        "value2": 1
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "CharacterID_30231_Flag04",
                                        "compareType": "=",
                                        "value2": 0
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Ability Targets of Modifier Holder}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                                          },
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Ability Targets of Modifier Holder}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                                          },
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Ability Targets of Modifier Holder}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                                          },
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Ability Targets of Modifier Holder}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                                          }
                                        ]
                                      },
                                      "failed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Ability Targets of Modifier Holder}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-370444723\">W4_IronTombCore_BattleScore1</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CharacterID_30231_Flag01"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CharacterID_30231_Flag02"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CharacterID_30231_Flag03"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CharacterID_30231_Flag04"
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Battle was Victory",
                  "passed": [
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "30231_TargetCharacterID01",
                      "value": {
                        "operator": "Variables[0] (CharacterID_30231_Flag01) || RETURN",
                        "displayLines": "CharacterID_30231_Flag01",
                        "constants": [],
                        "variables": [
                          "CharacterID_30231_Flag01"
                        ]
                      }
                    },
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "30231_TargetCharacterID02",
                      "value": {
                        "operator": "Variables[0] (CharacterID_30231_Flag02) || RETURN",
                        "displayLines": "CharacterID_30231_Flag02",
                        "constants": [],
                        "variables": [
                          "CharacterID_30231_Flag02"
                        ]
                      }
                    },
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "30231_TargetCharacterID03",
                      "value": {
                        "operator": "Variables[0] (CharacterID_30231_Flag03) || RETURN",
                        "displayLines": "CharacterID_30231_Flag03",
                        "constants": [],
                        "variables": [
                          "CharacterID_30231_Flag03"
                        ]
                      }
                    },
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "30231_TargetCharacterID04",
                      "value": {
                        "operator": "Variables[0] (CharacterID_30231_Flag04) || RETURN",
                        "displayLines": "CharacterID_30231_Flag04",
                        "constants": [],
                        "variables": [
                          "CharacterID_30231_Flag04"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 60032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"13940540\">MScoring_30231_Listen_Sub</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>[<span class=\"descriptionNumberColor\">Chronicled \"Love\"</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_1) || ADD || RETURN",
                    "displayLines": "(1 + MDF_1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Cyrene's \"Love\" greatly increases DMG dealt by the target.",
          "type": "Buff",
          "statusName": "Chronicled \"Love\""
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1529513281\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded_Listener</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>[<span class=\"descriptionNumberColor\">Chronicled \"Love\"</span>]",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[1]]}"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>[<span class=\"descriptionNumberColor\">Chronicled \"Love\"</span>]",
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill03[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill03[1]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_MissionTalkType",
            "_PhaseCheck",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-470333037\">Enemy_W4_IronTombCore_Main_P3_HpRatioAdded</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill03[0]]}"
                    ]
                  }
                },
                {
                  "name": "Divide BossHP into Bars",
                  "barCount": 99999
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_MissionTalkType",
            "_PhaseCheck",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>[<span class=\"descriptionNumberColor\">Descent into Chaos</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPRatio) || RETURN",
                    "displayLines": "MDF_DirtyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Maximum Restorable HP and Maximum Recoverable Skill Points are reduced. This effect can be weakened when \"Amphorean Hatred\" decreases.",
          "type": "Debuff",
          "statusName": "Descent into Chaos"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-453954106\">Enemy_W4_IronTombCorePart_DamageTransfer</a>[<span class=\"descriptionNumberColor\">Damage Resonance</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "When the target takes damage, \"Anti-Creator\" will also take the same damage.",
          "type": "Other",
          "statusName": "Damage Resonance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "AvatarBreak",
            "STAT_CTRL",
            "DisableAction"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1788054251\">MModifier_W4_IronTombCore_TimeLock_AddAbility</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-827834429\">MModifier_W4_IronTombCore_TimeLock_UIEff</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-827834429\">MModifier_W4_IronTombCore_TimeLock_UIEff</a>"
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{No Target}}"
                  },
                  "whitelistTag": 17,
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Layers",
                  "value": 100
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ActionDelayBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ActionDelayBefore",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_SPMax",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{No Target}}"
                  },
                  "whitelistTag": 17
                }
              ]
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPDelta",
                  "type": "RawDelta"
                },
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
                        "value1": "_SPDelta",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_SPMax",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Layers",
                      "context": "ContextModifier",
                      "value": {
                        "operator": "Variables[0] (_SPDelta) || INVERT || Variables[1] (_SPMax) || DIV || Constants[0] (100) || MUL || Variables[2] (MDF_SPConvert) || MUL || RETURN",
                        "displayLines": "(((-_SPDelta / _SPMax) * 100) * MDF_SPConvert)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_SPDelta",
                          "_SPMax",
                          "MDF_SPConvert"
                        ]
                      },
                      "max": 100
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_Layers",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_IsInsert",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_IsInsert",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_IronTombCore_TimeLock_Off",
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999999,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_ActionDelayAfter",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                      "context": "ContextModifier"
                    },
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
                            "value1": "_ActionDelayBefore",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (_ActionDelayAfter) || RETURN",
                              "displayLines": "_ActionDelayAfter",
                              "constants": [],
                              "variables": [
                                "_ActionDelayAfter"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "_ActionDelayBase",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_Layers",
                          "context": "ContextModifier",
                          "value": {
                            "operator": "Variables[0] (_ActionDelayBefore) || Variables[1] (_ActionDelayAfter) || SUB || INVERT || Variables[2] (_ActionDelayBase) || DIV || Constants[0] (100) || MUL || Variables[3] (MDF_ActionDelayConvert) || MUL || RETURN",
                            "displayLines": "(((-(_ActionDelayBefore - _ActionDelayAfter) / _ActionDelayBase) * 100) * MDF_ActionDelayConvert)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "_ActionDelayBefore",
                              "_ActionDelayAfter",
                              "_ActionDelayBase",
                              "MDF_ActionDelayConvert"
                            ]
                          },
                          "max": 100
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_ActionDelayBefore",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                      "context": "ContextModifier"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_IsInsert",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_IsInsert",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_IronTombCore_TimeLock_Off",
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_SPConvert",
            "MDF_ActionDelayConvert"
          ],
          "latentQueue": [],
          "description": "This target's action value will not change because of the end of any target's turn. This target can reduce the \"Unlock Value\" through action advance effects or Energy regeneration. When the \"Unlock Value\" is depleted, this state will be dispelled.",
          "type": "Debuff",
          "effectName": "Action Lock",
          "statusName": "Action Lock"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1788054251\">MModifier_W4_IronTombCore_TimeLock_AddAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_IronTombCore_TimeLock_Off"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-827834429\">MModifier_W4_IronTombCore_TimeLock_UIEff</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
          "stackType": "Replace",
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
                  "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>[<span class=\"descriptionNumberColor\">Descent into Chaos</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Skill Point Lock-Out",
                  "amount": {
                    "operator": "Variables[0] (_MissionTalkType) || RETURN",
                    "displayLines": "_MissionTalkType",
                    "constants": [],
                    "variables": [
                      "_MissionTalkType"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_BPMaxCost",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_BPMaxCost",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BPMaxCost",
            "MDF_DirtyHPRatio_PerLayer"
          ],
          "latentQueue": [
            "_MissionTalkType",
            "_PhaseCheck",
            "AIFlag",
            "_IsTrigger75",
            "_MissionTalkEnd",
            "_IsTrigger25",
            "#CL_First",
            "_FirstTutorial",
            "#PassiveSkill01_P3_Percentage",
            "#PassiveSkill01_P2_Percentage",
            "#PassiveSkill01_P1_Percentage"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>[<span class=\"descriptionNumberColor\">Descent into Chaos</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DirtyHPRatio": {
                  "operator": "Variables[0] (MDF_DirtyHPRatio_PerLayer) || RETURN",
                  "displayLines": "MDF_DirtyHPRatio_PerLayer",
                  "constants": [],
                  "variables": [
                    "MDF_DirtyHPRatio_PerLayer"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__608068418\">MModifier_W4_IronTombCorePart_Ability07_Charge_DisableAction</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "IronTombCorePart_Charge_Departed"
                },
                {
                  "name": "Create AV Link",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Core}}"
                  },
                  "to": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "linkOrder": 1,
                  "isStart": true,
                  "linkFollowerModifications": {
                    "OnBreak": "Bit_AutoForceSync"
                  },
                  "linkOwnerModifications": {
                    "OnBreak": "Bit_AutoForceSync"
                  }
                },
                {
                  "name": "Force-Sync AV Link",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Core}}"
                  },
                  "to": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 2}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Core}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]",
                        "invertCondition": true
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
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "IronTombCorePart_Charge_Departed",
                  "state": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1262350181\">MModifier_W4_IronTombCorePart_Ability07_Charge</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase0"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase0"
                    }
                  ]
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"608068418\">MModifier_W4_IronTombCorePart_Ability07_Charge_DisableAction</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase3"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase3"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>",
          "modifierFlags": [
            "Stealth",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Modify Weaknesses",
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1262350181\">MModifier_W4_IronTombCorePart_Ability07_Charge</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>"
                },
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "casterOverride": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "spot": "AfterCaster"
                },
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "casterOverride": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "spot": "BeforeCaster"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Phantom}}"
                    },
                    "value1": "_PhaseLock",
                    "compareType": "=",
                    "value2": 1
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "casterOverride": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "spot": "AfterCaster"
                },
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "casterOverride": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "spot": "BeforeCaster"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "variableName": "_CorePartBreakCount",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_CorePartBreakCount",
                            "compareType": ">=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_InsertFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_IronTombCore_Ability082_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "MonsterBuffSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
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
          "description": "\"Anti-Creator\" enters Charging state, and will use \"Resist and Destroy\" in the next action. Dispel the Charging state by dealing a killing blow to \"Mythos\" and \"Logos.\"",
          "type": "Other",
          "statusName": "Resist and Destroy"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>",
          "modifierFlags": [
            "STAT_SuperArmor"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Core}}"
                  },
                  "variableName": "_BreakCheck",
                  "value": -1,
                  "max": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 2}}"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Core}}"
                  },
                  "variableName": "_BreakCheck",
                  "value": 1,
                  "max": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 2}}"
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>"
                }
              ]
            }
          ],
          "description": "Target cannot take action.",
          "type": "Other",
          "effectName": "Grave Wound",
          "statusName": "Grave Wound"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__667872386\">Enemy_W4_IronTombCore_WorldErosionCtl</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set IronTomb Progress",
                  "display": {
                    "operator": "Variables[0] (_WorldErosion02) || RETURN",
                    "displayLines": "_WorldErosion02",
                    "constants": [],
                    "variables": [
                      "_WorldErosion02"
                    ]
                  },
                  "warningTheshold": {
                    "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "({[PassiveSkill01[0]]} * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "{[PassiveSkill01[0]]}"
                    ]
                  },
                  "errorThreshold": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "({[PassiveSkill01[1]]} * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WorldErosionIndex",
                    "compareType": "=",
                    "value2": 0
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_WorldErosionIndex",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 2,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_WorldErosionIndex",
                        "compareType": "=",
                        "value2": 0
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_WorldErosionIndex",
                            "compareType": "=",
                            "value2": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "_WorldErosion02",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Set IronTomb Progress",
                      "display": {
                        "operator": "Variables[0] (_WorldErosion02) || RETURN",
                        "displayLines": "_WorldErosion02",
                        "constants": [],
                        "variables": [
                          "_WorldErosion02"
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
                            "value1": "_WorldErosion",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Constants[0] (100) || MUL || RETURN",
                              "displayLines": "({[PassiveSkill01[2]]} * 100)",
                              "constants": [
                                100
                              ],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "#PassiveSkill01_P3_Percentage",
                            "compareType": ">=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_Trigger3",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_IronTombCore_WorldErosion_Insert",
                              "priorityTag": "MonsterChangePhase",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                              "valuePerStack": {
                                "MDF_BPMaxCost": 4,
                                "MDF_DirtyHPRatio_PerLayer": {
                                  "operator": "Constants[0] (4) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                                  "displayLines": "(4 * {[PassiveSkill01[4]]})",
                                  "constants": [
                                    4
                                  ],
                                  "variables": [
                                    "{[PassiveSkill01[4]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger3",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger3",
                          "value": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_WorldErosion",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                                  "displayLines": "({[PassiveSkill01[1]]} * 100)",
                                  "constants": [
                                    100
                                  ],
                                  "variables": [
                                    "{[PassiveSkill01[1]]}"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "#PassiveSkill01_P2_Percentage",
                                "compareType": ">=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "_Trigger2",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W4_IronTombCore_WorldErosion_Insert",
                                  "priorityTag": "MonsterChangePhase",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                                  "valuePerStack": {
                                    "MDF_BPMaxCost": 2,
                                    "MDF_DirtyHPRatio_PerLayer": {
                                      "operator": "Constants[0] (2) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                                      "displayLines": "(2 * {[PassiveSkill01[4]]})",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "{[PassiveSkill01[4]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Trigger2",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Trigger2",
                              "value": 0
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "_WorldErosion",
                                    "compareType": ">=",
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
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "#PassiveSkill01_P1_Percentage",
                                    "compareType": ">=",
                                    "value2": 0
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "_Trigger1",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                                        "invertCondition": true
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
                                        "modifier": "<a class=\"gModGreen\" id=\"848031818\">Enemy_W4_IronTombCore_WorldErosion_MainMark</a>",
                                        "invertCondition": true
                                      },
                                      "passed": [
                                        {
                                          "name": "Inject Ability Use",
                                          "abilityName": "Monster_W4_IronTombCore_WorldErosion_Insert",
                                          "priorityTag": "MonsterChangePhase",
                                          "canHitNonTargets": true,
                                          "showInActionOrder": true,
                                          "allowAbilityTriggers": false
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Inject Ability Use",
                                          "abilityName": "Monster_W4_IronTombCore_Main_WorldErosion_Insert",
                                          "priorityTag": "PROG_MonsterLowest",
                                          "ownerState": "Mask_AliveOrLimbo",
                                          "targetState": "Mask_AliveOrLimbo",
                                          "canHitNonTargets": true,
                                          "showInActionOrder": true,
                                          "allowAbilityTriggers": false
                                        },
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"848031818\">Enemy_W4_IronTombCore_WorldErosion_MainMark</a>"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                                      "valuePerStack": {
                                        "MDF_BPMaxCost": 1,
                                        "MDF_DirtyHPRatio_PerLayer": {
                                          "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill01[4]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill01[4]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_Trigger1",
                                  "value": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_Trigger1",
                                  "value": 0
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>"
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
                        "name": "Compare: Variable",
                        "value1": "_WorldErosionIndex",
                        "compareType": "=",
                        "value2": 0
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_WorldErosionIndex",
                            "compareType": "=",
                            "value2": 1
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 100,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_IronTombCore_Ability09_Part01",
                          "priorityTag": "LevelPerformMonster",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2029275245\">Enemy_W4_IronTombCore_P3_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck02",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck02"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_PassiveAbility_Insert02",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_PhaseCheck",
            "InsertCheck",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1187676843\">Enemy_W4_IronTombCore_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2003232733\">Enemy_W4_IronTombCore_BreakDisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1258256002\">Enemy_W4_IronTombCore_Status</a>",
          "modifierFlags": [
            "STAT_AITargetKeepActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"667872386\">Enemy_W4_IronTombCore_WorldErosionCtl</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Skill08_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                        "displayLines": "{[Skill08[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill08[0]]}"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Skill08_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] ({[Skill08[2]]}) || RETURN",
                        "displayLines": "{[Skill08[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill08[2]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{BattleEvent60031}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{BattleEvent60031}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{BattleEvent60032}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{BattleEvent60032}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Phantom}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1451515069\">Enemy_W4_TieMu_DisableHeadLookAt</a>"
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"458513520\">Enemy_W4_IronTombCore_BreakState</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
                    "invertCondition": true
                  },
                  "passed": [
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 1}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 2}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 11
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 1}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 11
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 2}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 11
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2003232733\">Enemy_W4_IronTombCore_BreakDisableAction</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"458513520\">Enemy_W4_IronTombCore_BreakState</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2003232733\">Enemy_W4_IronTombCore_BreakDisableAction</a>"
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
                }
              ]
            },
            {
              "eventTrigger": "Departed State: End [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_CorePartBreakCount",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[1]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__458513520\">Enemy_W4_IronTombCore_BreakState</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "4035011_Functions": {
      "fileName": "4035011_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 9,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "variableName": "_WorldErosion",
              "value": {
                "operator": "Variables[0] (_ErosionParam) || Variables[1] (_WorldErosion) || MUL || Constants[0] (100) || MUL || RETURN",
                "displayLines": "((_ErosionParam * _WorldErosion) * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "_ErosionParam",
                  "_WorldErosion"
                ]
              },
              "max": 100
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "variableName": "_WorldErosion02",
              "value": {
                "operator": "Variables[0] (_ErosionParam) || Constants[0] (80) || MUL || RETURN",
                "displayLines": "(_ErosionParam * 80)",
                "constants": [
                  80
                ],
                "variables": [
                  "_ErosionParam"
                ]
              },
              "min": 1,
              "max": 99
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WorldErosionCtl",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "variableName": "_WorldErosionCtl",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "variableName": "_LightTeamIgnoreServantCount",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_LightTeamIgnoreServantCount",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WorldErosionCtl",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "variableName": "_WorldErosionCtl",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_LightTeamIgnoreServantCount",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WorldErosionCtl",
                          "value": {
                            "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
                            "displayLines": "{[Skill09[2]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill09[2]]}"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                          },
                          "variableName": "_WorldErosionCtl",
                          "value": {
                            "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
                            "displayLines": "{[Skill09[2]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill09[2]]}"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_LightTeamIgnoreServantCount",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WorldErosionCtl",
                              "value": {
                                "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
                                "displayLines": "{[Skill09[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill09[1]]}"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                              },
                              "variableName": "_WorldErosionCtl",
                              "value": {
                                "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
                                "displayLines": "{[Skill09[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill09[1]]}"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WorldErosionCtl",
                              "value": {
                                "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
                                "displayLines": "{[Skill09[0]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill09[0]]}"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                              },
                              "variableName": "_WorldErosionCtl",
                              "value": {
                                "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
                                "displayLines": "{[Skill09[0]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill09[0]]}"
                                ]
                              }
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
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1500971197\">W4_IronTombCore_RemoveAllCharge</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"608068418\">MModifier_W4_IronTombCorePart_Ability07_Charge_DisableAction</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-151375815\">Enemy_W4_IronTombCorePart_01_Ability02_Mark</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__144377800\">W4_IronTombCore_RemoveBreakEffect</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1438614862\">W4_IronTombCore_RemoveChargeEffect_WithOutFade</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1291213263\">W4_IronTombCore_AddBreakEffect</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 1}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 2}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1496068463\">W4_IronTombCorePart_Recover</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2061848542\">W4_IronTombCorePart_01_Recover</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1359702869\">Monster4035010StartCamera</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "PauseLevelForCameraPerform",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "PauseLevelForCameraPerform"
            }
          ]
        }
      ],
      "references": []
    },
    "4035011_BE_BattleEvents": {
      "fileName": "4035011_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 60030,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 8
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Deal massive Ice DMG to one enemy and greatly reduce \"Amphorean Hatred\"!"
        },
        {
          "name": "Battle Event Construction",
          "ID": 60032,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 70
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "When \"Cyrene's Support ♪\" takes action, select an ally character to activate their Ultimate and dispel the \"Action Lock\" state."
        },
        {
          "name": "Battle Event Construction",
          "ID": 60031,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 8
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Deals massive True DMG to all enemies and greatly reduces \"Amphorean Hatred\"!"
        },
        {
          "name": "Battle Event Construction",
          "ID": 60035,
          "team": "Neutral Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            }
          ],
          "hardLevelEvent": true
        },
        {
          "name": "Battle Event Construction",
          "ID": 60033,
          "team": "Neutral Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}