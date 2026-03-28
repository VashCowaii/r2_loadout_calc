const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032027,
  "trimCharacterName": 4032027,
  "abilityList": [
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part02",
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part01",
    "4032027_Monster_W4_FireProwler_01_Main_PassiveAbilityInitiate",
    "4032027_Monster_W4_Phainon_PassiveInsert02",
    "4032027_Monster_W4_Phainon_PassiveInsert01",
    "4032027_Monster_W4_Phainon_BattlePerform2",
    "4032027_Monster_W4_Phainon_BattlePerform1",
    "4032027_Monster_W4_Phainon_PassiveAbilityInitiate",
    "4032027_Modifiers"
  ],
  "abilityObject": {
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part02": {
      "fileName": "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part01": {
      "fileName": "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part01",
      "childAbilityList": [
        "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part01",
        "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part02",
        "4032027_Monster_W4_FireProwler_01_Main_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_01_Main_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032027_Monster_W4_FireProwler_01_Main_PassiveAbilityInitiate": {
      "fileName": "4032027_Monster_W4_FireProwler_01_Main_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2021392801\">Enemy_W4_FireProwler_01_Main_Status</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Enemy Phainon}}"
            }
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Physical"
              }
            }
          ]
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032027_Monster_W4_Phainon_PassiveInsert02": {
      "fileName": "4032027_Monster_W4_Phainon_PassiveInsert02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Question",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"497709831\">Enemy_W4_Phainon_LockHp_01</a>"
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"514487450\">Enemy_W4_Phainon_LockHp_02</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Question",
          "value": 1
        },
        "Deleted bullshit",
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 4032027,
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 4032027,
              "locationType": "AfterCaster"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032027_Monster_W4_Phainon_PassiveInsert01": {
      "fileName": "4032027_Monster_W4_Phainon_PassiveInsert01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Question",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"497709831\">Enemy_W4_Phainon_LockHp_01</a>"
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"514487450\">Enemy_W4_Phainon_LockHp_02</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Question",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "popUpText": "Energy Regeneration",
              "living": true
            },
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032027_Monster_W4_Phainon_BattlePerform2": {
      "fileName": "4032027_Monster_W4_Phainon_BattlePerform2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032027_Monster_W4_Phainon_BattlePerform1": {
      "fileName": "4032027_Monster_W4_Phainon_BattlePerform1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032027_Monster_W4_Phainon_PassiveAbilityInitiate": {
      "fileName": "4032027_Monster_W4_Phainon_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"128277730\">Enemy_W4_Phainon_PassiveAbility</a>"
        }
      ],
      "whenAdded": [
        "Block Battle-Conditions On Start"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__128277730\">Enemy_W4_Phainon_PassiveAbility</a>",
          "modifierFlags": [
            "MuteBreak",
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"497709831\">Enemy_W4_Phainon_LockHp_01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"514487450\">Enemy_W4_Phainon_LockHp_02</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"531265069\">Enemy_W4_Phainon_LockHp_03</a>"
                },
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
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"561115494\">Enemy_W4_Phainon_Part1</a>[<span class=\"descriptionNumberColor\">May You End the Evernight</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  }
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
                    "value1": "_LockHp03",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"527560256\">Enemy_W4_Phainon_Part3</a>[<span class=\"descriptionNumberColor\">May You Become The First Blazing Sun</span>]"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1700303456\">Enemy_W4_Phainon_ShowBattleCondition</a>"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__173",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Phainon_PassiveInsert01",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Phainon_PassiveInsert02",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__174",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Phainon_PassiveInsert01",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Phainon_PassiveInsert02",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "_BanUltra",
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BanUltra",
                      "value": 0
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4032027_Modifiers": {
      "fileName": "4032027_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__527560256\">Enemy_W4_Phainon_Part3</a>[<span class=\"descriptionNumberColor\">May You Become The First Blazing Sun</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_InitDelay",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "DV_InitDelay",
                      "value": "ParamValue2"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "DV_CurrentDelay",
                  "value": "ParamValue2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_CurrentDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__178) || Variables[1] (DV_InitDelay) || ADD || RETURN",
                      "displayLines": "(ENEMIES_OBJECT_UNUSED__178 + DV_InitDelay)",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__178",
                        "DV_InitDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "consumePercent": 0.34
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Khaslana awaits the break of dawn.",
          "type": "Other",
          "statusName": "May You Become The First Blazing Sun"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__544337875\">Enemy_W4_Phainon_Part2</a>[<span class=\"descriptionNumberColor\">May You Dispel the Sky's Gloom</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_InitDelay",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "DV_InitDelay",
                      "value": "ParamValue2"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "DV_CurrentDelay",
                  "value": "ParamValue2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_CurrentDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__178) || Variables[1] (DV_InitDelay) || ADD || RETURN",
                      "displayLines": "(ENEMIES_OBJECT_UNUSED__178 + DV_InitDelay)",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__178",
                        "DV_InitDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "consumePercent": 0.34
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Khaslana looks forward to saving the world with you.",
          "type": "Other",
          "statusName": "May You Dispel the Sky's Gloom"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__561115494\">Enemy_W4_Phainon_Part1</a>[<span class=\"descriptionNumberColor\">May You End the Evernight</span>]",
          "execute": [
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "DV_CurrentDelay",
                  "value": "ParamValue2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_CurrentDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__178) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__178",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__178"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "consumePercent": 0.34
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Khaslana awaits your return.",
          "type": "Other",
          "statusName": "May You End the Evernight"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2021392801\">Enemy_W4_FireProwler_01_Main_Status</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__531265069\">Enemy_W4_Phainon_LockHp_03</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_LockHp03",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__514487450\">Enemy_W4_Phainon_LockHp_02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"527560256\">Enemy_W4_Phainon_Part3</a>[<span class=\"descriptionNumberColor\">May You Become The First Blazing Sun</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"544337875\">Enemy_W4_Phainon_Part2</a>[<span class=\"descriptionNumberColor\">May You Dispel the Sky's Gloom</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.334
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
                    "value1": "_LockHp02",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_LockHp02",
                      "value": 0
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Phainon_BattlePerform2",
                      "priorityTag": "PROG_MonsterLowest",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__497709831\">Enemy_W4_Phainon_LockHp_01</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"544337875\">Enemy_W4_Phainon_Part2</a>[<span class=\"descriptionNumberColor\">May You Dispel the Sky's Gloom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"561115494\">Enemy_W4_Phainon_Part1</a>[<span class=\"descriptionNumberColor\">May You End the Evernight</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.667
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_LockHp01",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_LockHp01",
                      "value": 0
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Phainon_BattlePerform1",
                      "priorityTag": "PROG_MonsterLowest",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__1700303456\">Enemy_W4_Phainon_ShowBattleCondition</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1700303456\">Enemy_W4_Phainon_ShowBattleCondition</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_LockHp03",
            "MDF_CurrentSP"
          ]
        }
      ],
      "references": []
    }
  }
}