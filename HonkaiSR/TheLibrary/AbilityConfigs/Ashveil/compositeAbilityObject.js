const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Ashveil",
  "trimCharacterName": "Ashveil",
  "abilityList": [
    "Ashveil_Ashveil_TechniqueInLevel",
    "Ashveil_Ashveil_Passive_FirstInsert_ForTest1",
    "Ashveil_Ashveil_Insert_SelectTargetSelf_Enhance",
    "Ashveil_Ashveil_Insert_SelectTargetSelf",
    "Ashveil_Ashveil_Insert_Enhance",
    "Ashveil_Ashveil_Insert",
    "Ashveil_Ashveil_PassiveAbility01",
    "Ashveil_Ashveil_Ability03_Part02",
    "Ashveil_Ashveil_Ability03_Part01",
    "Ashveil_Ashveil_Ability03_EnterReady",
    "Ashveil_Ashveil_Ability02_Part02",
    "Ashveil_Ashveil_Ability02_Part01",
    "Ashveil_Ashveil_Ability01_Part02",
    "Ashveil_Ashveil_Ability01_Part01",
    "Ashveil_Modifiers",
    "Ashveil_Functions"
  ],
  "abilityObject": {
    "Ashveil_Ashveil_TechniqueInLevel": {
      "fileName": "Ashveil_Ashveil_TechniqueInLevel",
      "childAbilityList": [
        "Ashveil_Ashveil_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-182161433\">Technique_Ashveil_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-182161433\">Technique_Ashveil_Modifier</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillP01_CurrentEnergy",
                      "value": {
                        "operator": "Variables[0] (SkillP01_CurrentEnergy) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(SkillP01_CurrentEnergy + 1)",
                        "constants": [],
                        "variables": [
                          "SkillP01_CurrentEnergy",
                          1
                        ]
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Ashveil_Ashveil_Passive_FirstInsert_ForTest1": {
      "fileName": "Ashveil_Ashveil_Passive_FirstInsert_ForTest1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Ashveil_NeedContinueInsert",
            "compareType": "=",
            "value2": 1
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "Ashveil_NeedContinueInsert",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": 10,
                  "Event": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "displayLines": 1
                        },
                        "HitSplit": 0.1,
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Follow-up"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Ashveil_NeedContinueInsert",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Ashveil_Ashveil_Insert_SelectTargetSelf_Enhance": {
      "fileName": "Ashveil_Ashveil_Insert_SelectTargetSelf_Enhance",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "living": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Ashveil_Insert_Enhance",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"972275728\">Ashveil_InsertCheckSelf_Enhance</a>"
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"972275728\">Ashveil_InsertCheckSelf_Enhance</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Ashveil_Ashveil_Insert_SelectTargetSelf": {
      "fileName": "Ashveil_Ashveil_Insert_SelectTargetSelf",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "living": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Ashveil_Insert",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"532779389\">Ashveil_InsertCheckSelf</a>"
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532779389\">Ashveil_InsertCheckSelf</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Ashveil_Ashveil_Insert_Enhance": {
      "fileName": "Ashveil_Ashveil_Insert_Enhance",
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
          "modifier": "<a class=\"gModGreen\" id=\"972275728\">Ashveil_InsertCheckSelf_Enhance</a>"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Ashveil_NeedContinueInsert",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Ability_CountForSound",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Rancor: Enmity Reprisal"
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "Ashveil_IsFirstTimeInsert",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Ashveil_ContinueInsertSameTarget",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Ability_SPAddAlready",
          "value": 0
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Ashveil_NeedContinueInsert",
            "compareType": "=",
            "value2": 1
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "Ashveil_NeedContinueInsert",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Ashveil_IsFirstTimeInsert",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 10,
                      "Event": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "HitSplit": 0.1,
                            "Toughness": {
                              "operator": "Variables[0] (ST Toughness Value) || RETURN",
                              "displayLines": "ST Toughness Value",
                              "constants": [],
                              "variables": [
                                "ST Toughness Value"
                              ]
                            },
                            "Tags": null,
                            "attackType": "Follow-up"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Ability_SPAddAlready",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 5,
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Ability_SPAddAlready",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillP01_EnhanceInsertBuffStack",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (4) || RETURN",
                              "displayLines": "4",
                              "constants": [],
                              "variables": [
                                4
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_ContinueInsertSameTarget",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_ContinueInsertSameTarget",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ability_EndWaitTime",
                              "value": 1
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
                                "value1": "SkillP01_EnhanceInsertBuffStack",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (4) || RETURN",
                                  "displayLines": "4",
                                  "constants": [],
                                  "variables": [
                                    4
                                  ]
                                }
                              },
                              {
                                "name": "Enemies Still Alive",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_ContinueInsertSameTarget",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ability_EndWaitTime",
                              "value": 1
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Ashveil_IsFirstTimeInsert",
                      "value": 0
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (Ability_CountForSound) || RETURN",
                    "displayLines": "Ability_CountForSound",
                    "constants": [],
                    "variables": [
                      "Ability_CountForSound"
                    ]
                  },
                  "compareType": ">=",
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Ability_CountForSound",
                    "compareType": "<",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Ability_CountForSound",
                      "value": {
                        "operator": "Variables[0] (Ability_CountForSound) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Ability_CountForSound + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Ability_CountForSound"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Ashveil_ContinueInsertSameTarget",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "SkillP01_EnhanceInsertBuffStack",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (4) || RETURN",
                              "displayLines": "4",
                              "constants": [],
                              "variables": [
                                4
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_EnhanceInsertBuffStack",
                          "value": {
                            "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (4) || SUB || RETURN",
                            "displayLines": "(SkillP01_EnhanceInsertBuffStack - 4)",
                            "constants": [],
                            "variables": [
                              "SkillP01_EnhanceInsertBuffStack",
                              4
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
                          "value": {
                            "operator": "Variables[0] (SkillRank_Rank02_EnhanceInsertBuffStackReturn) || Variables[1] (4) || ADD || RETURN",
                            "displayLines": "(SkillRank_Rank02_EnhanceInsertBuffStackReturn + 4)",
                            "constants": [],
                            "variables": [
                              "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
                              4
                            ]
                          }
                        },
                        {
                          "name": "Looped Event",
                          "maxLoops": 10,
                          "Event": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Thunder",
                                "Damage": {
                                  "operator": "Variables[0] (2) || RETURN",
                                  "displayLines": "2",
                                  "constants": [],
                                  "variables": [
                                    2
                                  ]
                                },
                                "HitSplit": 0.1,
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Follow-up"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillP01_EnhanceInsertBuffStack",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (4) || RETURN",
                              "displayLines": "4",
                              "constants": [],
                              "variables": [
                                4
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_ContinueInsertSameTarget",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_ContinueInsertSameTarget",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ability_EndWaitTime",
                              "value": 2
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
                                "value1": "SkillP01_EnhanceInsertBuffStack",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (4) || RETURN",
                                  "displayLines": "4",
                                  "constants": [],
                                  "variables": [
                                    4
                                  ]
                                }
                              },
                              {
                                "name": "Enemies Still Alive",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_ContinueInsertSameTarget",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ashveil_NeedContinueInsert",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Ability_EndWaitTime",
                              "value": 2
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
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_EnhanceInsertBuffStack",
          "value": {
            "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(SkillP01_EnhanceInsertBuffStack + 2)",
            "constants": [],
            "variables": [
              "SkillP01_EnhanceInsertBuffStack",
              2
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_EnhanceInsertBuffStack",
              "value": {
                "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (FLOOR) || Variables[2] (SkillRank_Rank02_EnhanceInsertBuffStackReturn) || Variables[3] (0.35) || MUL || PARAM_1 || FUNCTION || ADD || RETURN",
                "displayLines": "(SkillP01_EnhanceInsertBuffStack + &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((SkillRank_Rank02_EnhanceInsertBuffStackReturn * 0.35)))",
                "constants": [],
                "variables": [
                  "SkillP01_EnhanceInsertBuffStack",
                  "FLOOR",
                  "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
                  0.35
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (30) || RETURN",
                    "displayLines": "30",
                    "constants": [],
                    "variables": [
                      30
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (30) || RETURN",
                    "displayLines": "30",
                    "constants": [],
                    "variables": [
                      30
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (SkillRank_Rank02_EnhanceInsertBuffStackReturn) || Variables[2] (0.35) || MUL || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((SkillRank_Rank02_EnhanceInsertBuffStackReturn * 0.35))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
                      0.35
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Ability_EndWaitTime",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Ability_EndWaitTime",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true,
            "includeNonTargets": true
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ashveil: Parasite Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
            },
            "Trigger: Skip Death Handling"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Ashveil_Ashveil_Insert": {
      "fileName": "Ashveil_Ashveil_Insert",
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
          "modifier": "<a class=\"gModGreen\" id=\"532779389\">Ashveil_InsertCheckSelf</a>"
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_CurrentEnergy",
          "value": {
            "operator": "Variables[0] (SkillP01_CurrentEnergy) || Variables[1] (1) || SUB || RETURN",
            "displayLines": "(SkillP01_CurrentEnergy - 1)",
            "constants": [],
            "variables": [
              "SkillP01_CurrentEnergy",
              1
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Rancor: Enmity Reprisal"
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "Ability_SPAddAlready",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": 10,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "HitSplit": 0.1,
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Ability_SPAddAlready",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 5,
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Ability_SPAddAlready",
                  "value": 1
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_EnhanceInsertBuffStack",
          "value": {
            "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(SkillP01_EnhanceInsertBuffStack + 2)",
            "constants": [],
            "variables": [
              "SkillP01_EnhanceInsertBuffStack",
              2
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
              "stackLimit": {
                "operator": "Variables[0] (30) || RETURN",
                "displayLines": "30",
                "constants": [],
                "variables": [
                  30
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true,
            "includeNonTargets": true
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ashveil: Parasite Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
            },
            "Trigger: Skip Death Handling"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Ashveil_Ashveil_PassiveAbility01": {
      "fileName": "Ashveil_Ashveil_PassiveAbility01",
      "childAbilityList": [
        "Ashveil_Ashveil_PassiveAbility01",
        "Ashveil_Ashveil_PassiveAbility_Camera",
        "Ashveil_Ashveil_Passive_FirstInsert_Camera",
        "Ashveil_Ashveil_Passive_EnhanceContinueInsert_Camera",
        "Ashveil_Ashveil_Insert_SelectTargetSelf",
        "Ashveil_Ashveil_Insert_SelectTargetSelf_Enhance",
        "Ashveil_Ashveil_Insert",
        "Ashveil_Ashveil_Insert_Enhance",
        "Ashveil_Ashveil_Passive_FirstInsert_ForTest1"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_CurrentEnergy",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_MaxEnergy",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (SkillP01_CurrentEnergy) || RETURN",
            "displayLines": "SkillP01_CurrentEnergy",
            "constants": [],
            "variables": [
              "SkillP01_CurrentEnergy"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (SkillP01_MaxEnergy) || RETURN",
            "displayLines": "SkillP01_MaxEnergy",
            "constants": [],
            "variables": [
              "SkillP01_MaxEnergy"
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1062721873\">Ashveil_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1818760526\">Ashveil_Ability02_DebuffShift</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_EnhanceInsertBuffStack",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_EnhanceInsertBuffStackLimit",
              "value": {
                "operator": "Variables[0] (18) || RETURN",
                "displayLines": "18",
                "constants": [],
                "variables": [
                  18
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_EnhanceInsertBuffStackLimit",
              "value": {
                "operator": "Variables[0] (12) || RETURN",
                "displayLines": "12",
                "constants": [],
                "variables": [
                  12
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"826719973\">Ashveil_Passive_ListenEnergy</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1000668599\">Ashveil_Passive_ListenEnhanceInsertBonusStack</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Damnation Trail"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1782538245\">Ashveil_PointB1_ListenCharacterLimbo</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Phantom Limb"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"499961464\">Ashveil_PointB2_ListenAttack</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "First Fang"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2049711974\">Ashveil_PointB3_CriticalDamageAddPre</a>",
              "valuePerStack": {
                "MDF_CriticalDamageTemp": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_InsertCriticalDamageAddTemp": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"35105186\">Ashveil_Eidolon1_DamageTakenAddPre</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1062721873\">Ashveil_Passive</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1062721873\">Ashveil_Passive</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-422850470\">Ashveil_InsertAbilityHit</a>"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_CurrentEnergy",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1726722231\">Ashveil_TryInsert</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-422850470\">Ashveil_InsertAbilityHit</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Ashveil_Ashveil_Ability03_Part02": {
      "fileName": "Ashveil_Ashveil_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"212291347\">Ashveil_DebuffRemove</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Damnation Trail"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_EnhanceInsertBuffStack",
              "value": {
                "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (2) || ADD || RETURN",
                "displayLines": "(SkillP01_EnhanceInsertBuffStack + 2)",
                "constants": [],
                "variables": [
                  "SkillP01_EnhanceInsertBuffStack",
                  2
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (30) || RETURN",
                    "displayLines": "30",
                    "constants": [],
                    "variables": [
                      30
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-599775826\">Ashveil_Eidolon4_AttackUp</a>[<span class=\"descriptionNumberColor\">Heed: Swallow Truth Whole</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_AttackUp": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"811958138\">Ashveil_Ability03_FloatingOnEnemy</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": 15,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"811958138\">Ashveil_Ability03_FloatingOnEnemy</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-469638766\">Ashveil_TryInsert_Enhance</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_CurrentEnergy",
          "value": {
            "operator": "Variables[0] (SkillP01_CurrentEnergy) || Variables[1] (3) || ADD || RETURN",
            "displayLines": "(SkillP01_CurrentEnergy + 3)",
            "constants": [],
            "variables": [
              "SkillP01_CurrentEnergy",
              3
            ]
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"441988386\">Ashveil_SpecialMarkAdder</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__811958138\">Ashveil_Ability03_FloatingOnEnemy</a>",
          "modifierFlags": [
            "STAT_Confine_Effect"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Ashveil_Ashveil_Ability03_Part01": {
      "fileName": "Ashveil_Ashveil_Ability03_Part01",
      "childAbilityList": [
        "Ashveil_Ashveil_Ability03_Camera",
        "Ashveil_Ashveil_Ability03_Part01",
        "Ashveil_Ashveil_Ability03_Part02",
        "Ashveil_Ashveil_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Ashveil_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Ashveil_Ashveil_Ability03_EnterReady": {
      "fileName": "Ashveil_Ashveil_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Ashveil_Ashveil_Ability02_Part02": {
      "fileName": "Ashveil_Ashveil_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Ability_IsParasitee",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Ability_IsParasitee",
              "value": 1
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"212291347\">Ashveil_DebuffRemove</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Damnation Trail"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_EnhanceInsertBuffStack",
              "value": {
                "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(SkillP01_EnhanceInsertBuffStack + 1)",
                "constants": [],
                "variables": [
                  "SkillP01_EnhanceInsertBuffStack",
                  1
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (30) || RETURN",
                    "displayLines": "30",
                    "constants": [],
                    "variables": [
                      30
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Ability_IsParasitee",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "adjustmentType": "+"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"441988386\">Ashveil_SpecialMarkAdder</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Ashveil_Ashveil_Ability02_Part01": {
      "fileName": "Ashveil_Ashveil_Ability02_Part01",
      "childAbilityList": [
        "Ashveil_Ashveil_Ability02_Camera",
        "Ashveil_Ashveil_Ability02_Part01",
        "Ashveil_Ashveil_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Ashveil_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Ashveil_Ashveil_Ability01_Part02": {
      "fileName": "Ashveil_Ashveil_Ability01_Part02",
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Ashveil_Ashveil_Ability01_Part01": {
      "fileName": "Ashveil_Ashveil_Ability01_Part01",
      "childAbilityList": [
        "Ashveil_Ashveil_Ability01_Camera",
        "Ashveil_Ashveil_Ability01_Part01",
        "Ashveil_Ashveil_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Ashveil_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Ashveil_Modifiers": {
      "fileName": "Ashveil_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalRatio",
                  "value": {
                    "operator": "Variables[0] (0.04) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(0.04 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      0.04,
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalRatio) || RETURN",
                    "displayLines": "MDF_TotalRatio",
                    "constants": [],
                    "variables": [
                      "MDF_TotalRatio"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Ability_IsParasitee"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_TotalRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Finale: And Then There Were None"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__544701936\">Ashveil_Eidolon6_AllDamageTypeResistenceDown</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeResistenceDown) || INVERT || RETURN",
                    "displayLines": "-MDF_AllDamageTypeResistenceDown",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeResistenceDown"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistenceDown</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Finale: And Then There Were None"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-599775826\">Ashveil_Eidolon4_AttackUp</a>[<span class=\"descriptionNumberColor\">Heed: Swallow Truth Whole</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUp) || RETURN",
                    "displayLines": "MDF_AttackUp",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUp"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackUp"
          ],
          "latentQueue": [],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackUp</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Heed: Swallow Truth Whole"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2023732335\">Ashveil_Eidolon1_DamageTakenAdd</a>[<span class=\"descriptionNumberColor\">Beware: Venture Not at Full Moon</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HPRatio",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPThreshold) || RETURN",
                      "displayLines": "MDF_HPThreshold",
                      "constants": [],
                      "variables": [
                        "MDF_HPThreshold"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd2) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd2",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd2"
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageTakenForShow",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd2) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd2",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd1) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd1",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd1"
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageTakenForShow",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd1) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd1",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd1"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HPRatio",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPThreshold) || RETURN",
                      "displayLines": "MDF_HPThreshold",
                      "constants": [],
                      "variables": [
                        "MDF_HPThreshold"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd2) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd2",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd2"
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageTakenForShow",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd2) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd2",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd1) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd1",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd1"
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageTakenForShow",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageTakenAdd1) || RETURN",
                        "displayLines": "MDF_DamageTakenAdd1",
                        "constants": [],
                        "variables": [
                          "MDF_DamageTakenAdd1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenForShow</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Beware: Venture Not at Full Moon"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__35105186\">Ashveil_Eidolon1_DamageTakenAddPre</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2023732335\">Ashveil_Eidolon1_DamageTakenAdd</a>[<span class=\"descriptionNumberColor\">Beware: Venture Not at Full Moon</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamageTakenAdd1": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "MDF_DamageTakenAdd2": {
                  "operator": "Variables[0] (0.36) || RETURN",
                  "displayLines": "0.36",
                  "constants": [],
                  "variables": [
                    0.36
                  ]
                },
                "MDF_HPThreshold": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1022843803\">Ashveil_PointB3_CriticalDamageAdd</a>[<span class=\"descriptionNumberColor\">First Fang</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "MDF_InsertCriticalDamageAdd"
                        }
                      ]
                    }
                  ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalDamage) || RETURN",
                    "displayLines": "MDF_CriticalDamage",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalDamage"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "description": "CRIT DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>. CRIT DMG dealt by Follow-Up ATK additionally increases by <span class=\"descriptionNumberColor\">MDF_InsertCriticalDamageAdd</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "First Fang"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2049711974\">Ashveil_PointB3_CriticalDamageAddPre</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [
            "MDF_CriticalDamageTemp",
            "MDF_InsertCriticalDamageAddTemp"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1022843803\">Ashveil_PointB3_CriticalDamageAdd</a>[<span class=\"descriptionNumberColor\">First Fang</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_CriticalDamage": {
                  "operator": "Variables[0] (MDF_CriticalDamageTemp) || RETURN",
                  "displayLines": "MDF_CriticalDamageTemp",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageTemp"
                  ]
                },
                "MDF_InsertCriticalDamageAdd": {
                  "operator": "Variables[0] (MDF_InsertCriticalDamageAddTemp) || RETURN",
                  "displayLines": "MDF_InsertCriticalDamageAddTemp",
                  "constants": [],
                  "variables": [
                    "MDF_InsertCriticalDamageAddTemp"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__499961464\">Ashveil_PointB2_ListenAttack</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Cal1",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (SkillP01_EnhanceInsertBuffStack) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((SkillP01_EnhanceInsertBuffStack / 1))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "SkillP01_EnhanceInsertBuffStack",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Cal2",
                      "value": {
                        "operator": "Variables[0] (0.8) || Variables[1] (0.1) || Variables[2] (MDF_Cal1) || MUL || ADD || RETURN",
                        "displayLines": "(0.8 + (0.1 * MDF_Cal1))",
                        "constants": [],
                        "variables": [
                          0.8,
                          0.1,
                          "MDF_Cal1"
                        ]
                      }
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_Cal2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1782538245\">Ashveil_PointB1_ListenCharacterLimbo</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnemyCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Is Hostile",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Battle Event",
                        "invertCondition": true
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
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnemyCount",
                          "value": {
                            "operator": "Variables[0] (MDF_EnemyCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_EnemyCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_EnemyCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Looped Event",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_EnemyCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      },
                      "Event": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_EnhanceInsertBuffStack",
                          "value": {
                            "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(SkillP01_EnhanceInsertBuffStack + 1)",
                            "constants": [],
                            "variables": [
                              "SkillP01_EnhanceInsertBuffStack",
                              1
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (30) || RETURN",
                                "displayLines": "30",
                                "constants": [],
                                "variables": [
                                  30
                                ]
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnemyCount",
                          "value": {
                            "operator": "Variables[0] (MDF_EnemyCount) || Variables[1] (1) || SUB || RETURN",
                            "displayLines": "(MDF_EnemyCount - 1)",
                            "constants": [],
                            "variables": [
                              "MDF_EnemyCount",
                              1
                            ]
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1644737943\">Ashveil_Passive_ListenEnhanceInsertBonusStackForShow</a>[<span class=\"descriptionNumberColor\">Gluttony</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ExtraInsertCountForShow",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_ExtraInsertCountForShow) || Variables[2] (4) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_ExtraInsertCountForShow / 4))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "MDF_ExtraInsertCountForShow",
                      4
                    ]
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraInsertCountForShow) || RETURN",
                    "displayLines": "MDF_ExtraInsertCountForShow",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraInsertCountForShow"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "The current stack count of \"Gluttony\" is <span class=\"descriptionNumberColor\">MDF_LayerForShow</span>. The next enhanced Talent's Follow-Up ATK will additionally deal up to a maximum of <span class=\"descriptionNumberColor\">MDF_ExtraInsertCountForShow</span> instance(s) of DMG.",
          "type": "Other",
          "statusName": "Gluttony"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1000668599\">Ashveil_Passive_ListenEnhanceInsertBonusStack</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "SkillP01_EnhanceInsertBuffStack",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_EnhanceInsertBuffStack",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStackLimit) || RETURN",
                          "displayLines": "SkillP01_EnhanceInsertBuffStackLimit",
                          "constants": [],
                          "variables": [
                            "SkillP01_EnhanceInsertBuffStackLimit"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_EnhanceInsertBuffStack",
                          "value": {
                            "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStackLimit) || RETURN",
                            "displayLines": "SkillP01_EnhanceInsertBuffStackLimit",
                            "constants": [],
                            "variables": [
                              "SkillP01_EnhanceInsertBuffStackLimit"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_EnhanceInsertBuffStack",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1644737943\">Ashveil_Passive_ListenEnhanceInsertBonusStackForShow</a>[<span class=\"descriptionNumberColor\">Gluttony</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1644737943\">Ashveil_Passive_ListenEnhanceInsertBonusStackForShow</a>[<span class=\"descriptionNumberColor\">Gluttony</span>]",
                          "counter": 0,
                          "valuePerStack": {
                            "MDF_LayerForShow": {
                              "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || RETURN",
                              "displayLines": "SkillP01_EnhanceInsertBuffStack",
                              "constants": [],
                              "variables": [
                                "SkillP01_EnhanceInsertBuffStack"
                              ]
                            }
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__826719973\">Ashveil_Passive_ListenEnergy</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "SkillP01_CurrentEnergy",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_CurrentEnergy",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (SkillP01_MaxEnergy) || RETURN",
                          "displayLines": "SkillP01_MaxEnergy",
                          "constants": [],
                          "variables": [
                            "SkillP01_MaxEnergy"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_CurrentEnergy",
                          "value": {
                            "operator": "Variables[0] (SkillP01_MaxEnergy) || RETURN",
                            "displayLines": "SkillP01_MaxEnergy",
                            "constants": [],
                            "variables": [
                              "SkillP01_MaxEnergy"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (SkillP01_CurrentEnergy) || RETURN",
                        "displayLines": "SkillP01_CurrentEnergy",
                        "constants": [],
                        "variables": [
                          "SkillP01_CurrentEnergy"
                        ]
                      },
                      "priorState": "Active"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_CurrentEnergy",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (SkillP01_CurrentEnergy) || RETURN",
                            "displayLines": "SkillP01_CurrentEnergy",
                            "constants": [],
                            "variables": [
                              "SkillP01_CurrentEnergy"
                            ]
                          },
                          "priorState": "Normal"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 801502,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true,
                    "invertCondition": true
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Ability_SPAddAlready"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1362659531\">Ashveil_ParasiteDebuffForShow</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 801502,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true,
                    "invertCondition": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__874485230\">Ashveil_PassiveFlag_Enhance</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1584183733\">Ashveil_PassiveFlag</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1569458515\">Ashveil_InsertAbility_LastTarget</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [
            "Ability_SPAddAlready"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__972275728\">Ashveil_InsertCheckSelf_Enhance</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
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
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Ashveil_Insert_SelectTargetSelf_Enhance",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__532779389\">Ashveil_InsertCheckSelf</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
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
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__99569822\">Ashveil_InsertRetargetSelf</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Ashveil_Insert_SelectTargetSelf",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1818760526\">Ashveil_Ability02_DebuffShift</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                          "valuePerStack": {
                            "MDF_DefenceDownTemp": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            },
                            "MDF_AllDamageTypeResistenceDownTemp": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-422850470\">Ashveil_InsertAbilityHit</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__942921741\">Ashveil_Ability02_Debuff_DefenceDown</a>[<span class=\"descriptionNumberColor\">Flog: Smite Evil</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceDown) || INVERT || RETURN",
                    "displayLines": "-MDF_DefenceDown",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceDown"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "description": "While \"Bait\" is on the field, DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceDown</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Flog: Smite Evil"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill",
            "STAT_AITargetHigherPriority"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1062721873\">Ashveil_Passive</a>",
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
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-422850470\">Ashveil_InsertAbilityHit</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                          "valuePerStack": {
                            "MDF_DefenceDownTemp": {
                              "operator": "Variables[0] (MDF_DefenceDownTemp) || RETURN",
                              "displayLines": "MDF_DefenceDownTemp",
                              "constants": [],
                              "variables": [
                                "MDF_DefenceDownTemp"
                              ]
                            },
                            "MDF_AllDamageTypeResistenceDownTemp": {
                              "operator": "Variables[0] (MDF_AllDamageTypeResistenceDownTemp) || RETURN",
                              "displayLines": "MDF_AllDamageTypeResistenceDownTemp",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeResistenceDownTemp"
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK"
                      ],
                      "trigger": "State_Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target Count SUM",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player's Aim Target List}}"
                            },
                            "conditions": {
                              "name": "Compare: Target",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "target2": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "SkillP01_CurrentEnergy",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "trigger": "State_Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "trigger": "State_Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                          "valuePerStack": {
                            "MDF_DefenceDownTemp": {
                              "operator": "Variables[0] (MDF_DefenceDownTemp) || RETURN",
                              "displayLines": "MDF_DefenceDownTemp",
                              "constants": [],
                              "variables": [
                                "MDF_DefenceDownTemp"
                              ]
                            },
                            "MDF_AllDamageTypeResistenceDownTemp": {
                              "operator": "Variables[0] (MDF_AllDamageTypeResistenceDownTemp) || RETURN",
                              "displayLines": "MDF_AllDamageTypeResistenceDownTemp",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeResistenceDownTemp"
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
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
          "stackData": [
            "MDF_DefenceDownTemp",
            "MDF_AllDamageTypeResistenceDownTemp"
          ],
          "latentQueue": [],
          "description": "This target is the \"Bait.\"",
          "type": "Other",
          "effectName": "Bait",
          "statusName": "Bait",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"942921741\">Ashveil_Ability02_Debuff_DefenceDown</a>[<span class=\"descriptionNumberColor\">Flog: Smite Evil</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DefenceDown": {
                  "operator": "Variables[0] (MDF_DefenceDownTemp) || RETURN",
                  "displayLines": "MDF_DefenceDownTemp",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceDownTemp"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"544701936\">Ashveil_Eidolon6_AllDamageTypeResistenceDown</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "valuePerStack": {
                "MDF_AllDamageTypeResistenceDown": {
                  "operator": "Variables[0] (MDF_AllDamageTypeResistenceDownTemp) || RETURN",
                  "displayLines": "MDF_AllDamageTypeResistenceDownTemp",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTypeResistenceDownTemp"
                  ]
                }
              }
            }
          ],
          "copySubModifiers": true
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1998878672\">Ashveil_SpecialMarkAdder2</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill",
                        "Ultimate"
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__441988386\">Ashveil_SpecialMarkAdder</a>",
          "stackData": [],
          "latentQueue": [
            "Ability_IsParasitee"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1998878672\">Ashveil_SpecialMarkAdder2</a>",
              "aliveOnly": "True",
              "haloStatus": true
            }
          ]
        }
      ],
      "references": []
    },
    "Ashveil_Functions": {
      "fileName": "Ashveil_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1726722231\">Ashveil_TryInsert</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ashveil: Parasite Target}}"
                    },
                    "source": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Ashveil_Insert_SelectTargetSelf",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"532779389\">Ashveil_InsertCheckSelf</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-469638766\">Ashveil_TryInsert_Enhance</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ashveil: Parasite Target}}"
                    },
                    "source": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Ashveil_Insert_SelectTargetSelf_Enhance",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"972275728\">Ashveil_InsertCheckSelf_Enhance</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__212291347\">Ashveil_DebuffRemove</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
              "valuePerStack": {
                "MDF_DefenceDownTemp": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_AllDamageTypeResistenceDownTemp": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-178840964\">Ashveil_Ability02_DebuffTransfer</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                      "valuePerStack": {
                        "MDF_DefenceDownTemp": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_AllDamageTypeResistenceDownTemp": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
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
      "references": []
    }
  }
}