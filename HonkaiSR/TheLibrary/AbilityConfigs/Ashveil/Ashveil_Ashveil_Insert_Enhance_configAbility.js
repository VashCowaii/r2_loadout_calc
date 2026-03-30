const configAbility = {
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
}