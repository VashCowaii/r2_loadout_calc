const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5014012,
  "trimCharacterName": 5014012,
  "abilityList": [
    "5014012_Monster_W5_Vtuber_ChangePhase01",
    "5014012_Monster_W5_Vtuber_PassiveAbilityInitiate",
    "5014012_Monster_W5_Vtuber_Ability07_Part02",
    "5014012_Monster_W5_Vtuber_Ability07_Part01",
    "5014012_Monster_W5_Vtuber_Ability06_Lose_Part02",
    "5014012_Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
    "5014012_Monster_W5_Vtuber_Ability06_Win_Part02",
    "5014012_Monster_W5_Vtuber_Ability06_Part01",
    "5014012_Monster_W5_Vtuber_Ability04_Part02",
    "5014012_Monster_W5_Vtuber_Ability04_Part01",
    "5014012_Monster_W5_Vtuber_Ability03_Part03",
    "5014012_Monster_W5_Vtuber_Ability03_Part02",
    "5014012_Monster_W5_Vtuber_Ability03_Part01",
    "5014012_BattleEvent_Monster_W5_Vtuber_Part01",
    "5014012_BattleEvent_Monster_W5_Vtuber_EnterReady",
    "5014012_Monster_W5_Vtuber_Ability03_Part00",
    "5014012_Monster_W5_Vtuber_Ability02_Part02",
    "5014012_Monster_W5_Vtuber_Ability02_Part01",
    "5014012_Monster_W5_Vtuber_Ability01_Part02",
    "5014012_Monster_W5_Vtuber_Ability01_Part01",
    "5014012_Monster_W5_Vtuber_PassiveAbility_BGM",
    "5014012_Modifiers",
    "5014012_Functions",
    "5014012_BE_BattleEvents"
  ],
  "abilityObject": {
    "5014012_Monster_W5_Vtuber_ChangePhase01": {
      "fileName": "5014012_Monster_W5_Vtuber_ChangePhase01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "silent": true
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ChangePhase_MaxHP"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "ChangePhase_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "setPercent": 1
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
          }
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1656334834\">Monster_W5_Vtuber_Eff</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"361111729\">Enemy_W5_VtuberPart01_Eff</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"41880618\">Enemy_W5_VtuberPart02_Eff</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1693390580\">Enemy_W5_Vtuber_Ability03</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_PassiveAbilityInitiate": {
      "fileName": "5014012_Monster_W5_Vtuber_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 5014011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Live Stream Assistant",
            "isBaseCompare": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                20039,
                20040
              ]
            },
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "dmgCountsForTeam": "Enemy Team",
              "eventID": 20040,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "SelectTarget",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1568913221\">Enemy_W5_Vtuber_PickUpMessage</a>"
                },
                "Show BattleEvent Button"
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"272622941\">Enemy_W5_Vtuber_AudioReset</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>"
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "W5_Vtuber_00",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1656334834\">Monster_W5_Vtuber_Eff</a>"
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                    "displayLines": "SummonList_ADF_1",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_1"
                    ]
                  },
                  "locationType": "BeforeCaster",
                  "locationOffset": -1,
                  "leader": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                    "displayLines": "SummonList_ADF_2",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_2"
                    ]
                  },
                  "locationType": "AfterCaster",
                  "locationOffset": 1,
                  "leader": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "removeShields": true
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
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2037166286\">Monster_W5_Vtuber_PartController</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1693390580\">Enemy_W5_Vtuber_Ability03</a>"
            }
          ],
          "failed": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W5_Vtuber_00_Virtual",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2041132439\">Monster_W5_Vtuber_Death</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2037166286\">Monster_W5_Vtuber_PartController</a>",
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
                    "value1": "ChangePhaseCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1656334834\">Monster_W5_Vtuber_Eff</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"361111729\">Enemy_W5_VtuberPart01_Eff</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"41880618\">Enemy_W5_VtuberPart02_Eff</a>"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 5014012,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "@SparxiConOfficial",
                                "isBaseCompare": true,
                                "invertCondition": true
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "value": "RLBoss",
                                "invertCondition": true
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "value": "RLBoss"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 5014012,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "@SparxiConOfficial",
                                "isBaseCompare": true
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhaseCheck"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Minions of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1797863602\">Monster_W5_Vtuber_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Tilted</span>]"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Vtuber_ChangePhase01",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                        "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Minions of Modifier Holder}}"
                          },
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1733040515\">Enemy_W5_VtuberPart01_00</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1182558090\">Enemy_W5_VtuberPart02_00</a>"
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2041132439\">Monster_W5_Vtuber_Death</a>"
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__272622941\">Enemy_W5_Vtuber_AudioReset</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1568913221\">Enemy_W5_Vtuber_PickUpMessage</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5014012_Monster_W5_Vtuber_Ability07_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
          },
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
                "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-834553527\">Enemy_W5_Vtuber_Screen01_Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1325948714\">Enemy_W5_Vtuber_Screen02_Effect</a>"
        },
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
          "variableName": "MDF_Phase2",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"724622034\">Enemy_W5_Vtuber_Charge02</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]",
          "variable": "MDF_Ratio",
          "target2": null,
          "variable2": "Skill07_HPRatio"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
              "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}",
                "Skill07_HPRatio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
              "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}",
                "Skill07_HPRatio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
              "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}",
                "Skill07_HPRatio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
              "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}",
                "Skill07_HPRatio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"945954519\">Monster_W5_Vtuber_Ability07_Ctrl</a>"
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": -1
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>",
          "parse": [
            {
              "name": "Random Event",
              "odds": [
                0.25,
                0.25,
                0.25,
                0.25
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1592948509\">Standard_AttackRatioDown</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                    "displayLines": "{[Skill07[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill07[3]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                    "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[1]]}",
                      "Skill07_HPRatio"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                      "displayLines": "{[Skill07[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                    "displayLines": "{[Skill07[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill07[3]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                    "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[1]]}",
                      "Skill07_HPRatio"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                      "displayLines": "{[Skill07[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-958879550\">Monster_Standard_SpeedRatioDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                    "displayLines": "{[Skill07[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill07[3]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                    "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[1]]}",
                      "Skill07_HPRatio"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                      "displayLines": "{[Skill07[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                    "displayLines": "{[Skill07[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill07[3]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                    "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[1]]}",
                      "Skill07_HPRatio"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                      "displayLines": "{[Skill07[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[2]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__945954519\">Monster_W5_Vtuber_Ability07_Ctrl</a>",
          "parse": [
            {
              "name": "Random Event",
              "odds": [
                1
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill07[5]]}) || RETURN",
                    "displayLines": "{[Skill07[5]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill07[5]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill07[4]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                    "displayLines": "({[Skill07[4]]} * Skill07_HPRatio)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[4]]}",
                      "Skill07_HPRatio"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] ({[Skill07[6]]}) || RETURN",
                      "displayLines": "{[Skill07[6]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[6]]}"
                      ]
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill07[7]]}) || RETURN",
                      "displayLines": "{[Skill07[7]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[7]]}"
                      ]
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
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
    "5014012_Monster_W5_Vtuber_Ability07_Part01": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability07_Part01",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_Ability07_Part01",
        "5014012_Monster_W5_Vtuber_Ability07_Part02",
        "5014012_Monster_W5_Vtuber_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "silent": true,
          "toRemove": [
            "DisableAction",
            "STAT_CTRL"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1646818833\">Enemy_W5_Vtuber_MainStory_Ability07</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-902917045\">Modifier_StageSpecialAbility_20501090_Ability07</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Unique Effect Name",
                "uniqueName": "W5_Vtuber_00_Screen01",
                "allowUnReady": true
              },
              "passed": [
                "EventTypeSPARXIECON (Not always an error)[1 false]"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Unique Effect Name",
                "uniqueName": "W5_Vtuber_00_Screen02",
                "allowUnReady": true
              },
              "passed": [
                "EventTypeSPARXIECON (Not always an error)[1 false]"
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-902917045\">Modifier_StageSpecialAbility_20501090_Ability07</a>"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Vtuber_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability06_Lose_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability06_Lose_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
          "variableName": "MDF_Phase1",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Projectile's Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                  "displayLines": "{[Skill06[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[Skill06[6]]}) || RETURN",
                  "displayLines": "{[Skill06[6]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[6]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[7]]}) || RETURN",
                  "displayLines": "{[Skill06[7]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[7]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": -1
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability06_Win_ExtraElationTime": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
          "variables": {
            "TryStartElationTime_OverrideElationPoint": {
              "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
              "displayLines": "{[Skill06[4]]}",
              "constants": [],
              "variables": [
                "{[Skill06[4]]}"
              ]
            },
            "TryStartElationTime_ElationTimeIsNoConsume": 1
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability06_Win_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability06_Win_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>",
              "variableName": "MDF_Phase1",
              "value": 1
            },
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
              "variableName": "MDF_Suc",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>"
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
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>",
              "variableName": "MDF_Phase2",
              "value": 1
            },
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
              "variableName": "MDF_Suc",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1797863602\">Monster_W5_Vtuber_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Tilted</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill06[8]]}"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                },
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                    "displayLines": "{[Skill06[5]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[5]]}"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Aha-Instant"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyBuffOthers",
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyForceKill",
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill06[8]]}"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": -1
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability06_Part01": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability06_Part01",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_Ability06_Part01",
        "5014012_Monster_W5_Vtuber_Ability06_Win_Part02",
        "5014012_Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
        "5014012_Monster_W5_Vtuber_Ability06_Lose_Part02",
        "5014012_Monster_W5_Vtuber_Ability06_Win_Camera",
        "5014012_Monster_W5_Vtuber_Ability06_Lose_Camera"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "silent": true,
          "toRemove": [
            "DisableAction",
            "STAT_CTRL"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1630041214\">Enemy_W5_Vtuber_MainStory_Ability06</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
          },
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Win",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Monster_W5_Vtuber_Ability06_Win_Part02",
                  "isTrigger": true
                },
                "Deleted bullshit",
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "ability": "Monster_W5_Vtuber_Ability06_Lose_Part02",
                          "isTrigger": true
                        },
                        "Deleted bullshit"
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Monster_W5_Vtuber_Ability06_Lose_Part02",
                      "isTrigger": true
                    },
                    "Deleted bullshit"
                  ]
                },
                "Deleted bullshit"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}",
        "allowMemoHostileTarget": "Forbidden",
        "targetIsVariable": true
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability04_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1255636057\">Enemy_W5_Vtuber_Ability04_Bonus</a>[<span class=\"descriptionNumberColor\">Flooding Viewers</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                  "displayLines": "{[Skill04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "advanceType": "Set",
              "multiAdd": "-{[Skill04[0]]}"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1255636057\">Enemy_W5_Vtuber_Ability04_Bonus</a>[<span class=\"descriptionNumberColor\">Flooding Viewers</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Increases action advances and CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Flooding Viewers"
        }
      ]
    },
    "5014012_Monster_W5_Vtuber_Ability04_Part01": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability04_Part01",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_Ability04_Part01",
        "5014012_Monster_W5_Vtuber_Ability04_Part02",
        "5014012_Monster_W5_Vtuber_Ability04_Camera"
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
          "ability": "Monster_W5_Vtuber_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target",
        "targetIsVariable": true
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability03_Part03": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability03_Part03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 1}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_VtuberPart01_VtuberAbility03",
          "isTrigger": true
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "dmgCountsForTeam": "Enemy Team",
          "eventID": 20039,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"40442905\">Enemy_W5_Vtuber_CountDown02</a>"
            },
            "Show BattleEvent Button"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"724622034\">Enemy_W5_Vtuber_Charge02</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 5014012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "@SparxiConOfficial",
                    "isBaseCompare": true
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "RLBoss"
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                "displayLines": "{[Skill03[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[5]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_6) || RETURN",
                    "displayLines": "SummonList_ADF_6",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_6"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                "displayLines": "{[Skill03[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[5]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_5) || RETURN",
                    "displayLines": "SummonList_ADF_5",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_5"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "stayInTeam": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 5014012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "@SparxiConOfficial",
                    "isBaseCompare": true
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "RLBoss"
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
                    "displayLines": "SummonList_ADF_4",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_4"
                    ]
                  },
                  "locationType": "KeepOnFirst"
                },
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
                    "displayLines": "SummonList_ADF_4",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_4"
                    ]
                  },
                  "locationType": "KeepOnLast"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "stayInTeam": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__40442905\">Enemy_W5_Vtuber_CountDown02</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Vtuber_Ability07_Part01",
                  "abilitySource": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W5_Vtuber_00"
                  },
                  "priorityTag": "EnemyForceKill",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All(with Unselectable)V2}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                                  },
                                  {
                                    "name": "Is Entity Type",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "type": "Character"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                                    "invertCondition": true
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "compareType": "=",
                        "value2": 0,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Vtuber_Ability07_Part01",
                      "abilitySource": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W5_Vtuber_00"
                      },
                      "priorityTag": "EnemyForceKill",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    "Modifier Deletes Itself"
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
    "5014012_Monster_W5_Vtuber_Ability03_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 1}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_VtuberPart01_VtuberAbility03",
          "isTrigger": true
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "dmgCountsForTeam": "Enemy Team",
          "eventID": 20039,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9889952\">Enemy_W5_Vtuber_CountDown01</a>"
            },
            "Show BattleEvent Button"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"707844415\">Enemy_W5_Vtuber_Charge01</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
            "displayLines": "{[Skill03[3]]}",
            "constants": [],
            "variables": [
              "{[Skill03[3]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                "displayLines": "SummonList_ADF_3",
                "constants": [],
                "variables": [
                  "SummonList_ADF_3"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "stayInTeam": true
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
            "displayLines": "{[Skill03[4]]}",
            "constants": [],
            "variables": [
              "{[Skill03[4]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                "displayLines": "SummonList_ADF_3",
                "constants": [],
                "variables": [
                  "SummonList_ADF_3"
                ]
              },
              "locationType": "AroundCaster"
            },
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                "displayLines": "SummonList_ADF_3",
                "constants": [],
                "variables": [
                  "SummonList_ADF_3"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "stayInTeam": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-9889952\">Enemy_W5_Vtuber_CountDown01</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Vtuber_Ability06_Part01",
                  "abilitySource": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W5_Vtuber_00"
                  },
                  "priorityTag": "EnemyForceKill",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All(with Unselectable)V2}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                                  },
                                  {
                                    "name": "Is Entity Type",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "type": "Character"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                                    "invertCondition": true
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "compareType": "=",
                        "value2": 0,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Vtuber_Ability06_Part01",
                      "abilitySource": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W5_Vtuber_00"
                      },
                      "priorityTag": "EnemyForceKill",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    "Modifier Deletes Itself"
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
    "5014012_Monster_W5_Vtuber_Ability03_Part01": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "revertDefault": true
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "revertDefault": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W5_Vtuber_Ability03_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W5_Vtuber_Ability03_Part03",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5014012_BattleEvent_Monster_W5_Vtuber_Part01": {
      "fileName": "5014012_BattleEvent_Monster_W5_Vtuber_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1713929309\">Enemy_W5_Vtuber_MainStory_Ability03</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1869034007\">Enemy_W5_Vtuber_MuteUltra</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2019186097\">Enemy_W5_Vtuber_Locking</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_Vtuber_Ability03_Part01",
          "isTrigger": true
        },
        "Wait for Pending Ability Completions",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5014012_BattleEvent_Monster_W5_Vtuber_EnterReady": {
      "fileName": "5014012_BattleEvent_Monster_W5_Vtuber_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability03_Part00": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability03_Part00",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_Ability03_Part00",
        "5014012_Monster_W5_Vtuber_Ability03_Part01",
        "5014012_Monster_W5_Vtuber_Ability03_Part02",
        "5014012_Monster_W5_Vtuber_Ability03_Part03",
        "5014012_Monster_W5_Vtuber_Ability03Pre_Camera",
        "5014012_Monster_W5_Vtuber_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1869034007\">Enemy_W5_Vtuber_MuteUltra</a>"
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase03"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Output Port 1}}"
          },
          "phase": "Phase03"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2019186097\">Enemy_W5_Vtuber_Locking</a>"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SelectTarget"
          },
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "allowMemoHostileTarget": "Forbidden",
        "targetIsVariable": true
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2019186097\">Enemy_W5_Vtuber_Locking</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1869034007\">Enemy_W5_Vtuber_MuteUltra</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
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
    "5014012_Monster_W5_Vtuber_Ability02_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability02_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability02_Part01": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability02_Part01",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_Ability02_Part01",
        "5014012_Monster_W5_Vtuber_Ability02_Part02",
        "5014012_Monster_W5_Vtuber_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Vtuber_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_Ability01_Part02": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability01_Part02",
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
          "AttackScaling": {
            "DamageType": "Quantum",
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
    "5014012_Monster_W5_Vtuber_Ability01_Part01": {
      "fileName": "5014012_Monster_W5_Vtuber_Ability01_Part01",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_Ability01_Part01",
        "5014012_Monster_W5_Vtuber_Ability01_Part02",
        "5014012_Monster_W5_Vtuber_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Vtuber_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5014012_Monster_W5_Vtuber_PassiveAbility_BGM": {
      "fileName": "5014012_Monster_W5_Vtuber_PassiveAbility_BGM",
      "childAbilityList": [
        "5014012_Monster_W5_Vtuber_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2105349163\">Enemy_W5_Vtuber_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2105349163\">Enemy_W5_Vtuber_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5014012_Modifiers": {
      "fileName": "5014012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1797863602\">Monster_W5_Vtuber_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Tilted</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SuperArmorBreak"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeTakenRatio"
          ],
          "latentQueue": [
            "MDF_Phase1",
            "MDF_Suc",
            "MDF_Phase2"
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>. Action delayed.",
          "type": "Debuff",
          "effectName": "Tilted",
          "statusName": "Tilted"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W5_Vtuber_00"
                  },
                  "counter": 1,
                  "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Variable",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W5_Vtuber_00"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                          "variableName": "MDF_SwitchField",
                          "value": 0
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"57556268\">Monster_W5_Vtuber_SwitchInField</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -11
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                      "blockTeams": "Enemy Team",
                      "entityType": "All"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                      "entityType": "All"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1627710607\">Enemy_W5_Vtuber_SwitchField_InsertActionPrepare</a>",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>",
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": "Unknown CONDITON1 ",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]: Start[?]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1281523660\">Enemy_W5_Vtuber_SwitchField_UltraPrepare</a>",
                  "casterAssign": "CasterSelf"
                }
              ]
            },
            {
              "eventTrigger": "Event Owner Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Located on the sub-field.",
          "type": "Other",
          "statusName": "Epic showdown in progress!"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1334912120\">Enemy_W5_Vtuber_OutField</a>",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "AllowAddToGridFightBackend"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W5_Vtuber_00"
                  },
                  "counter": 1,
                  "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Variable",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W5_Vtuber_00"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                          "variableName": "MDF_SwitchField",
                          "value": 1
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1056767111\">Monster_W5_Vtuber_SwitchOutField</a>"
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_DOT"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1739259031\">Enemy_W5_Vtuber_OutField_Part1DotMark</a>"
                    }
                  ]
                }
              ],
              "priorityLevel": -11
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                      "blockTeams": "Enemy Team",
                      "entityType": "All"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                      "entityType": "All"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1627710607\">Enemy_W5_Vtuber_SwitchField_InsertActionPrepare</a>",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>",
                  "execute": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": "Unknown CONDITON1 ",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]: Start[?]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1281523660\">Enemy_W5_Vtuber_SwitchField_UltraPrepare</a>",
                  "casterAssign": "CasterSelf"
                }
              ]
            },
            {
              "eventTrigger": "Event Owner Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1739259031\">Enemy_W5_Vtuber_OutField_Part1DotMark</a>",
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-354483792\">Enemy_W5_Vtuber_ElationAbilityUser</a>",
          "modifierFlags": [
            "AllowAddToGridFightBackend"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1281523660\">Enemy_W5_Vtuber_SwitchField_UltraPrepare</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-249689500\">Enemy_W5_Vtuber_SpecialInField</a>",
          "modifierFlags": [
            "AllowAddToGridFightBackend"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1600631937\">Enemy_W5_Vtuber_SpecialOutField</a>",
          "modifierFlags": [
            "AllowAddToGridFightBackend"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1627710607\">Enemy_W5_Vtuber_SwitchField_InsertActionPrepare</a>",
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1281523660\">Enemy_W5_Vtuber_SwitchField_UltraPrepare</a>",
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__308759632\">Enemy_W5_Vtuber_SwitchField</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Next Ability Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SwitchField",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SwitchField",
                          "value": 0
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"57556268\">Monster_W5_Vtuber_SwitchInField</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Next Ability Caster}}"
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
                      "target": "{{Next Ability Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SwitchField",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SwitchField",
                          "value": 1
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Next Ability Caster}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Anyone]",
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
                        "team": "Enemy Team",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"91828859\">Monster_W5_Vtuber_HitEff</a>"
                    }
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1281523660\">Enemy_W5_Vtuber_SwitchField_UltraPrepare</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_SwitchField",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SwitchField",
                              "value": 0
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"57556268\">Monster_W5_Vtuber_SwitchInField</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_SwitchField",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SwitchField",
                              "value": 1
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1627710607\">Enemy_W5_Vtuber_SwitchField_InsertActionPrepare</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                          },
                          "Unknown CONDITON1 "
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_SwitchField",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SwitchField",
                              "value": 0
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"57556268\">Monster_W5_Vtuber_SwitchInField</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                          },
                          "Unknown CONDITON1 [inverse: true]"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_SwitchField",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SwitchField",
                              "value": 1
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Modifier Was",
                            "modifier": "<a class=\"gModGreen\" id=\"-1281523660\">Enemy_W5_Vtuber_SwitchField_UltraPrepare</a>"
                          },
                          {
                            "name": "Modifier Was",
                            "modifier": "<a class=\"gModGreen\" id=\"-1627710607\">Enemy_W5_Vtuber_SwitchField_InsertActionPrepare</a>"
                          }
                        ]
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"91828859\">Monster_W5_Vtuber_HitEff</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1739259031\">Enemy_W5_Vtuber_OutField_Part1DotMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"91828859\">Monster_W5_Vtuber_HitEff</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "Monster_W5_JK_PowerOut"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageSpecialAbility_20501090_Ability03End"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "Monster_W5_Vtuber_IF_AbilityP01_Insert02_Part01"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "RuanMei_TriggerImprintEffect",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SwitchField",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SwitchField",
                          "value": 0
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"57556268\">Monster_W5_Vtuber_SwitchInField</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "Monster_W5_Vtuber_IF_AbilityP01_Insert01_Part01"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "RuanMei_TriggerImprintEffect",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SwitchField",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SwitchField",
                          "value": 1
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"91828859\">Monster_W5_Vtuber_HitEff</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "DanHengPT_BE_InsertShield_Part01"
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "DanHengPT_BE_InsertAttack_Part01"
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "BattleEvent_GridFight_DanHengPT_BE_InsertAttack_Part01"
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}.[[getCreator]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1600631937\">Enemy_W5_Vtuber_SpecialOutField</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}.[[getCreator]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-249689500\">Enemy_W5_Vtuber_SpecialInField</a>"
                        }
                      ]
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "DanHengPT_BE_InsertShield_Part01"
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "DanHengPT_BE_InsertAttack_Part01"
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "BattleEvent_GridFight_DanHengPT_BE_InsertAttack_Part01"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCreator]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1600631937\">Enemy_W5_Vtuber_SpecialOutField</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCreator]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-249689500\">Enemy_W5_Vtuber_SpecialInField</a>"
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
                          "target": "{{Next Ability Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Origin_2001_Sub"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Origin_2002_Sub"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Origin_2008_Insert"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "GridFight_Augment_35402032_Insert"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Augment_35402043_AttackAbility"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SwitchField",
                      "value": 0
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"57556268\">Monster_W5_Vtuber_SwitchInField</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Next Ability Caster}}"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Next Ability Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Origin_2001_Sub"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Origin_2002_Sub"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Origin_2008_Insert"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "GridFight_Augment_35402032_Insert"
                          },
                          {
                            "name": "Compare: Parameter String",
                            "compareType": "=",
                            "value2": "StageAbility_GridFight_Augment_35402043_AttackAbility"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SwitchField",
                      "value": 1
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Next Ability Caster}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start"
            },
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_SwitchField",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Sub-Field Targets}}"
                      },
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player & Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                      },
                      "ifTargetFound": [
                        "EventTypeSPARXIECON (Not always an error)",
                        "EventTypeSPARXIECON (Not always an error)",
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1144324322\">Enemy_W5_Vtuber_InField_Mask</a>"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1144324322\">Enemy_W5_Vtuber_InField_Mask</a>"
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"91828859\">Monster_W5_Vtuber_HitEff</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SwitchField",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"91828859\">Monster_W5_Vtuber_HitEff</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                      },
                      "ifTargetFound": [
                        "EventTypeSPARXIECON (Not always an error)[1 false]"
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                      },
                      "ifTargetFound": [
                        "EventTypeSPARXIECON (Not always an error)[1 false]",
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1144324322\">Enemy_W5_Vtuber_InField_Mask</a>"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1144324322\">Enemy_W5_Vtuber_InField_Mask</a>"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SwitchField",
                        "compareType": "=",
                        "value2": 0
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__91828859\">Monster_W5_Vtuber_HitEff</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{@Sparxiecon: Output Port 1}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{@Sparxiecon: Output Port 1}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "valueType": "Layer"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{@Sparxiecon: Output Port 2}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{@Sparxiecon: Output Port 2}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "Layer"
                      }
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
                "target": "{{@Sparxiecon: Aha Instant Battle Event}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]",
              "haloStatus": true,
              "includeBattleEvent": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{@Sparxiecon: Prime-Field Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]",
              "haloStatus": true,
              "includeBattleEvent": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{@Sparxiecon: Sub-Field Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>",
              "haloStatus": true,
              "includeBattleEvent": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Currency Wars Full OffFieldList}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>",
              "haloStatus": true,
              "includeBattleEvent": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2034025703\">Enemy_W5_Vtuber_InField_Glitch</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1144324322\">Enemy_W5_Vtuber_InField_Mask</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"1144324322\">Enemy_W5_Vtuber_InField_Mask</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2034025703\">Enemy_W5_Vtuber_InField_Glitch</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Enemy"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHP_DownScale",
                      "value": 1000
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W5_Vtuber_00"
                      },
                      "variableName": "TotalHP",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentHP_DownScale) || RETURN",
                        "displayLines": "MDF_CurrentHP_DownScale",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentHP_DownScale"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W5_Vtuber_00"
                      },
                      "variableName": "RemainHP",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentHP_DownScale) || RETURN",
                        "displayLines": "MDF_CurrentHP_DownScale",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentHP_DownScale"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W5_Vtuber_00"
                      },
                      "variableName": "TotalHP_DownScale",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentHP_DownScale) || RETURN",
                        "displayLines": "MDF_CurrentHP_DownScale",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentHP_DownScale"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W5_Vtuber_00"
                      },
                      "variableName": "RemainHP_DownScale",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentHP_DownScale) || RETURN",
                        "displayLines": "MDF_CurrentHP_DownScale",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentHP_DownScale"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1144324322\">Enemy_W5_Vtuber_InField_Mask</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2034025703\">Enemy_W5_Vtuber_InField_Glitch</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
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
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W5_Vtuber_00"
                        },
                        "value1": "HP_Bars_Remaining",
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
                          "abilityName": "Monster_W5_Vtuber_Ability06_Part01",
                          "abilitySource": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W5_Vtuber_00"
                          },
                          "priorityTag": "EnemyForceKill",
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W5_Vtuber_Ability07_Part01",
                          "abilitySource": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W5_Vtuber_00"
                          },
                          "priorityTag": "EnemyForceKill",
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Enemy"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                      },
                      "noTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W5_Vtuber_00"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Win",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W5_Vtuber_Ability06_Part01",
                          "abilitySource": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W5_Vtuber_00"
                          },
                          "priorityTag": "EnemyForceKill",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1325948714\">Enemy_W5_Vtuber_Screen02_Effect</a>",
          "stackType": "RetainGlobalLatestUnique",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W5_Vtuber_00_Virtual"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-834553527\">Enemy_W5_Vtuber_Screen01_Effect</a>",
          "stackType": "RetainGlobalLatestUnique",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                },
                "EventTypeSPARXIECON (Not always an error)[1 false]",
                "EventTypeSPARXIECON (Not always an error)[1 false]"
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                "EventTypeSPARXIECON (Not always an error)",
                "EventTypeSPARXIECON (Not always an error)"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__610660362\">Enemy_W5_Vtuber_Screen02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W5_Vtuber_00_Virtual"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1325948714\">Enemy_W5_Vtuber_Screen02_Effect</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>",
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{@Sparxiecon: Output Port 2}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{@Sparxiecon: Output Port 2}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
                          }
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Prime-Field Targets}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>",
                          "casterAssign": "TargetSelf"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1325948714\">Enemy_W5_Vtuber_Screen02_Effect</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{@Sparxiecon: Output Port 2}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{@Sparxiecon: Output Port 2}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                                "compareType": ">",
                                "value2": 0,
                                "valueType": "Layer"
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
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__593882743\">Enemy_W5_Vtuber_Screen01</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{@Sparxiecon: Prime-Field Targets}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-834553527\">Enemy_W5_Vtuber_Screen01_Effect</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-27638419\">Enemy_W5_Vtuber_Screen_Visible</a>",
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{@Sparxiecon: Output Port 1}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{@Sparxiecon: Output Port 1}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            },
                            "valueType": "Layer"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_SwitchField"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__724622034\">Enemy_W5_Vtuber_Charge02</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "RemainHP",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "variableName": "MDF_HPRatio",
                          "value": 1000
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainHP",
                          "value": {
                            "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                            "displayLines": "MDF_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_HPRatio"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Ratio",
                      "value": {
                        "operator": "Variables[0] (RemainHP) || Variables[1] (TotalHP) || DIV || RETURN",
                        "displayLines": "(RemainHP / TotalHP)",
                        "constants": [],
                        "variables": [
                          "RemainHP",
                          "TotalHP"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Ratio) || RETURN",
                        "displayLines": "MDF_Ratio",
                        "constants": [],
                        "variables": [
                          "MDF_Ratio"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The current remaining HP percentage of the enemy on the sub-field is at <span class=\"descriptionNumberColor\">MDF_Ratio</span>. When Live Showdown ends, if all enemies in the sub-field are defeated, uses \"Commence Chat Bombing!\" on ally characters going to the sub-field, or else uses \"Bullet Comments Ready!\" on all allies.",
          "type": "Other",
          "statusName": "Live Showdown"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__707844415\">Enemy_W5_Vtuber_Charge01</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "RemainHP",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "variableName": "MDF_HPRatio",
                          "value": 1000
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainHP",
                          "value": {
                            "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                            "displayLines": "MDF_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_HPRatio"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Ratio",
                      "value": {
                        "operator": "Variables[0] (RemainHP) || Variables[1] (TotalHP) || DIV || RETURN",
                        "displayLines": "(RemainHP / TotalHP)",
                        "constants": [],
                        "variables": [
                          "RemainHP",
                          "TotalHP"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Ratio) || RETURN",
                        "displayLines": "MDF_Ratio",
                        "constants": [],
                        "variables": [
                          "MDF_Ratio"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The current remaining HP percentage of the enemy on the sub-field is at <span class=\"descriptionNumberColor\">MDF_Ratio</span>. When Live Showdown ends, uses \"Commence Chat Bombing!\" on ally characters going to the sub-field.",
          "type": "Other",
          "statusName": "Live Showdown"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__404660666\">Enemy_W5_Vtuber_ChargeEnd_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">Privacy Protection</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W5_Vtuber_00"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AllDamageReduce",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || Variables[1] (MDF_Ratio) || MUL || RETURN",
                    "displayLines": "(MDF_AllDamageReduce * MDF_Ratio)",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce",
                      "MDF_Ratio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>.",
          "type": "Buff",
          "effectName": "DMG Received Reduction",
          "statusName": "Privacy Protection"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__888915891\">Enemy_W5_Vtuber_Charge_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">Privacy Protection</span>]",
          "modifierFlags": [
            "EnduranceLogicOnly"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W5_Vtuber_00"
                    }
                  }
                }
              ]
            },
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
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Immune to Crowd Control debuffs and DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>.",
          "type": "Buff",
          "effectName": "DMG Received Reduction",
          "statusName": "Privacy Protection"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-321445076\">Enemy_W5_Vtuber_Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TotalHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "RemainHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TotalHP_DownScale",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "RemainHP_DownScale",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}} + {{@Sparxiecon: Output Port 1}} + {{@Sparxiecon: Output Port 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"404660666\">Enemy_W5_Vtuber_ChargeEnd_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">Privacy Protection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}} + {{@Sparxiecon: Output Port 1}} + {{@Sparxiecon: Output Port 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"888915891\">Enemy_W5_Vtuber_Charge_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">Privacy Protection</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Win",
                  "value": 0
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
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-834553527\">Enemy_W5_Vtuber_Screen01_Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1325948714\">Enemy_W5_Vtuber_Screen02_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{@Sparxiecon: Output Port 1}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{@Sparxiecon: Output Port 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}} + {{@Sparxiecon: Output Port 1}} + {{@Sparxiecon: Output Port 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"888915891\">Enemy_W5_Vtuber_Charge_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">Privacy Protection</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "RemainHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{@Sparxiecon: Output Port 1}} + {{@Sparxiecon: Output Port 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"404660666\">Enemy_W5_Vtuber_ChargeEnd_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">Privacy Protection</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageReduce": {
                          "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                          "displayLines": "MDF_AllDamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageReduce"
                          ]
                        },
                        "MDF_Ratio": {
                          "operator": "Variables[0] (RemainHP) || Variables[1] (TotalHP) || DIV || RETURN",
                          "displayLines": "(RemainHP / TotalHP)",
                          "constants": [],
                          "variables": [
                            "RemainHP",
                            "TotalHP"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"707844415\">Enemy_W5_Vtuber_Charge01</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"724622034\">Enemy_W5_Vtuber_Charge02</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 20039,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Output Port 1}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Output Port 1}}"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Output Port 1}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Output Port 2}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Output Port 2}}"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{@Sparxiecon: Output Port 2}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageReduce"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1656334834\">Monster_W5_Vtuber_Eff</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill03"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill03"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1693390580\">Enemy_W5_Vtuber_Ability03</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
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
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill03"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1092944424\">W5_Vtuber_BattleScore2</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                        "value1": "MDF_Phase1",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Phase2",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Suc",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "End the Stream in Shame",
                          "desc": "Lose the \"Live Showdown\" in both phases during the battle against \"@SparxiConOfficial\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_Phase1"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1143277281\">W5_Vtuber_BattleScore1</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                        "value1": "MDF_Phase1",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Phase2",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Win-Win Means Winning Twice",
                          "desc": "Win the \"Live Showdown\" in both phases during the battle against \"@SparxiConOfficial\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_Phase1",
            "MDF_Suc",
            "MDF_Phase2"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1646818833\">Enemy_W5_Vtuber_MainStory_Ability07</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1630041214\">Enemy_W5_Vtuber_MainStory_Ability06</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1713929309\">Enemy_W5_Vtuber_MainStory_Ability03</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "5014012_Functions": {
      "fileName": "5014012_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__57556268\">Monster_W5_Vtuber_SwitchInField</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{@Sparxiecon: Sub-Field Targets}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
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
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{@Sparxiecon: Prime-Field Targets}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
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
                      "name": "Add to Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W5_Vtuber_00"
              },
              "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W5_Vtuber_00"
              },
              "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Unique Effect Name",
                "uniqueName": "Eff_Monster_W5_Vtuber_00_Skill03_ScreenUITransition_02",
                "invertCondition": true,
                "allowUnReady": true
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{@Sparxiecon: Prime-Field Targets}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
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
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{@Sparxiecon: Sub-Field Targets}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
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
                      "name": "Add to Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W5_Vtuber_00"
              },
              "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W5_Vtuber_00"
              },
              "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "5014012_BE_BattleEvents": {
      "fileName": "5014012_BE_BattleEvents",
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
          "ID": 20040,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        },
        {
          "name": "Battle Event Construction",
          "ID": 20039,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 40
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}