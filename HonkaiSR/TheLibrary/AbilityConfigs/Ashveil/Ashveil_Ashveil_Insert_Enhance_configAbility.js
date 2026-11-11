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
      "value": 1,
      "variableName": "Ashveil_NeedContinueInsert"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "Ability_CountForSound"
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
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "target1": {
          "name": "Target Name",
          "target": "{{Ashveil: Parasite Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Voracity: 1}} + {{Voracity: 2}}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "target1": {
          "name": "Target Name",
          "target": "{{Ashveil: Parasite Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Voracity: 1}} + {{Voracity: 2}}"
        }
      }
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "Ashveil_IsFirstTimeInsert"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Ashveil_ContinueInsertSameTarget"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Ability_SPAddAlready"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Ashveil_NeedContinueInsert",
        "compareType": "=",
        "value2": 1
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Ashveil_NeedContinueInsert"
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
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "displayLines": "2"
                        },
                        "HitSplit": 0.1,
                        "Toughness": {
                          "displayLines": "ST Toughness Value"
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
                      "value": 1,
                      "variableName": "Ability_SPAddAlready"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "livingState": "Mask_AliveOnly"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_EnhanceInsertBuffStack",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "4"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ashveil_ContinueInsertSameTarget"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ashveil_ContinueInsertSameTarget"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ability_EndWaitTime"
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
                              "displayLines": "4"
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
                          "value": 1,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Ashveil_ContinueInsertSameTarget"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ability_EndWaitTime"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Ashveil_IsFirstTimeInsert"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "displayLines": "Ability_CountForSound"
              },
              "compareType": ">=",
              "caseTasks": [
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
              ]
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
                  "value": {
                    "displayLines": "(Ability_CountForSound + 1)"
                  },
                  "variableName": "Ability_CountForSound"
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
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Ashveil: Parasite Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Voracity: 1}} + {{Voracity: 2}}"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Ashveil: Parasite Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Voracity: 1}} + {{Voracity: 2}}"
                    }
                  }
                },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "livingState": "Mask_AliveOnly"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_EnhanceInsertBuffStack",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "4"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(SkillP01_EnhanceInsertBuffStack - 4)"
                      },
                      "variableName": "SkillP01_EnhanceInsertBuffStack"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(SkillRank_Rank02_EnhanceInsertBuffStackReturn + 4)"
                      },
                      "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn"
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 10,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "displayLines": "2"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "livingState": "Mask_AliveOnly"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_EnhanceInsertBuffStack",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "4"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ashveil_ContinueInsertSameTarget"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "Ashveil_ContinueInsertSameTarget"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 2,
                          "variableName": "Ability_EndWaitTime"
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
                              "displayLines": "4"
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
                          "value": 1,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Ashveil_ContinueInsertSameTarget"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Ashveil_NeedContinueInsert"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 2,
                          "variableName": "Ability_EndWaitTime"
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
      "value": {
        "displayLines": "(SkillP01_EnhanceInsertBuffStack + 2)"
      },
      "variableName": "SkillP01_EnhanceInsertBuffStack"
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
          "value": {
            "displayLines": "(SkillP01_EnhanceInsertBuffStack + &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((SkillRank_Rank02_EnhanceInsertBuffStackReturn * 0.35)))"
          },
          "variableName": "SkillP01_EnhanceInsertBuffStack"
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
                "displayLines": "30"
              },
              "addStacksPerTrigger": {
                "displayLines": "2"
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
                "displayLines": "30"
              },
              "addStacksPerTrigger": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((SkillRank_Rank02_EnhanceInsertBuffStackReturn * 0.35))"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn"
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
        "includeUnselectable": true,
        "invertCondition": true
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