const compositeAbilityObject = {
  "fullCharacterName": -483840662,
  "trimCharacterName": -483840662,
  "abilityList": [
    "-483840662_Modifiers"
  ],
  "abilityObject": {
    "-483840662_Modifiers": {
      "fileName": "-483840662_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1893750937\">Standard_Windfury_AbilityNoNeed</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Cost Deduction [Owner]: Start[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder's Hostile Entities(AOE)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReplayNormal",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_ChangeValue"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                      "variableName": "_ChangeValue",
                      "value": {
                        "operator": "Variables[0] (_ChangeValue) || RETURN",
                        "displayLines": "_ChangeValue",
                        "constants": [],
                        "variables": [
                          "_ChangeValue"
                        ]
                      }
                    },
                    {
                      "name": "Update Ability Properties",
                      "abilityTypeList": [
                        "Basic ATK"
                      ],
                      "propertyList": [
                        {
                          "name": "Ability Property Action",
                          "propertyName": "Skill Point Cost",
                          "propertyAction": "Remove"
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder's Hostile Entities(AOE)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReplaySkill",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_ChangeValue"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                      "variableName": "_ChangeValue",
                      "value": {
                        "operator": "Variables[0] (_ChangeValue) || RETURN",
                        "displayLines": "_ChangeValue",
                        "constants": [],
                        "variables": [
                          "_ChangeValue"
                        ]
                      }
                    },
                    {
                      "name": "Update Ability Properties",
                      "abilityTypeList": [
                        "Skill"
                      ],
                      "propertyList": [
                        {
                          "name": "Ability Property Action",
                          "propertyName": "Skill Point Cost",
                          "propertyAction": "Remove"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTypeList": [
                    "Skill"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove",
                      "value": {
                        "operator": "Variables[0] (_ChangeValue) || RETURN",
                        "displayLines": "_ChangeValue",
                        "constants": [],
                        "variables": [
                          "_ChangeValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTypeList": [
                    "Basic ATK"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove",
                      "value": {
                        "operator": "Variables[0] (_ChangeValue) || RETURN",
                        "displayLines": "_ChangeValue",
                        "constants": [],
                        "variables": [
                          "_ChangeValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1031496924\">Standard_Windfury</a>",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>",
                  "valuePerStack": {
                    "_ReplayNormal": {
                      "operator": "Variables[0] (_ReplayNormal) || RETURN",
                      "displayLines": "_ReplayNormal",
                      "constants": [],
                      "variables": [
                        "_ReplayNormal"
                      ]
                    },
                    "_ReplayAbility": {
                      "operator": "Variables[0] (_ReplayAbility) || RETURN",
                      "displayLines": "_ReplayAbility",
                      "constants": [],
                      "variables": [
                        "_ReplayAbility"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsAimEnemySkill",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsWindfurySkill",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1412,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Cerydra"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsAimEnemySkill",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsWindfurySkill",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_WindfuryCount",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Cost Deduction [Owner]: Start[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder's Hostile Entities(AOE)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReplayNormal",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 0
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder's Hostile Entities(AOE)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReplaySkill",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 0
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder's Hostile Entities(AOE)}}"
                        },
                        "mustBeAlive2": true
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
                            "skillType": "Skill"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsAimEnemySkill",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsAimEnemySkill",
                      "value": 0
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
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Skill"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_ReplaySkill",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Basic ATK"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_ReplayNormal",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsAimEnemySkill",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_WindfuryCount",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Windfury_Flag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1412,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Cerydra"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
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
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Skill"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_ReplaySkill",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Basic ATK"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_ReplayNormal",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsAimEnemySkill",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_WindfuryCount",
                        "compareType": ">=",
                        "value2": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                      "immediateEffect": true,
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsAimEnemySkill",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsWindfurySkill",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1213,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Dan Heng • Imbibitor Lunae"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Varying Data",
                          "target": null,
                          "variableName": "_CurrnetSkillIndex",
                          "value": "CurrentActionSkillIndex"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>",
                          "valuePerStack": {
                            "_ChangeValue": {
                              "operator": "Variables[0] (_ChangeValue) || RETURN",
                              "displayLines": "_ChangeValue",
                              "constants": [],
                              "variables": [
                                "_ChangeValue"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "ActionTag_Windfury",
                          "skillIndex": {
                            "operator": "Variables[0] (_CurrnetSkillIndex) || RETURN",
                            "displayLines": "_CurrnetSkillIndex",
                            "constants": [],
                            "variables": [
                              "_CurrnetSkillIndex"
                            ]
                          },
                          "forceAction": true,
                          "castTarget": {
                            "name": "Target Name",
                            "target": "{{Ability Targets of Modifier Holder}}"
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "afterInjection": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Enemies Still Alive",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_OnWaveMonster_SkillType",
                                  "value": {
                                    "operator": "Variables[0] (_CurrnetSkillIndex) || RETURN",
                                    "displayLines": "_CurrnetSkillIndex",
                                    "constants": [],
                                    "variables": [
                                      "_CurrnetSkillIndex"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "Windfury_Flag",
                                  "value": 0
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_WindfuryCount",
                                    "compareType": "<",
                                    "value2": 1
                                  },
                                  "passed": [
                                    "Modifier Deletes Itself"
                                  ]
                                }
                              ]
                            }
                          ],
                          "priorityTag": "Windfury"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>",
                              "valuePerStack": {
                                "_ChangeValue": {
                                  "operator": "Variables[0] (_ChangeValue) || RETURN",
                                  "displayLines": "_ChangeValue",
                                  "constants": [],
                                  "variables": [
                                    "_ChangeValue"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": "ActionTag_Windfury",
                              "forceAction": true,
                              "castTarget": {
                                "name": "Target Name",
                                "target": "{{Ability Targets of Modifier Holder}}"
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "afterInjection": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Enemies Still Alive",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "invertCondition": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "_OnWaveMonster_SkillType",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "Windfury_Flag",
                                      "value": 0
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "MDF_WindfuryCount",
                                        "compareType": "<",
                                        "value2": 1
                                      },
                                      "passed": [
                                        "Modifier Deletes Itself"
                                      ]
                                    }
                                  ]
                                }
                              ],
                              "priorityTag": "Windfury"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>",
                              "valuePerStack": {
                                "_ChangeValue": {
                                  "operator": "Variables[0] (_ChangeValue) || RETURN",
                                  "displayLines": "_ChangeValue",
                                  "constants": [],
                                  "variables": [
                                    "_ChangeValue"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": "ActionTag_Windfury",
                              "skillType": "ControlSkill02",
                              "forceAction": true,
                              "castTarget": {
                                "name": "Target Name",
                                "target": "{{Ability Targets of Modifier Holder}}"
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "afterInjection": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Enemies Still Alive",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "invertCondition": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "_OnWaveMonster_SkillType",
                                      "value": 2
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "Windfury_Flag",
                                      "value": 0
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "MDF_WindfuryCount",
                                        "compareType": "<",
                                        "value2": 1
                                      },
                                      "passed": [
                                        "Modifier Deletes Itself"
                                      ]
                                    }
                                  ]
                                }
                              ],
                              "priorityTag": "Windfury"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1412,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Cerydra"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "ActionTag_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsWindfurySkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "ActionTag_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Windfury_Flag",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_IsAimEnemySkill",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_IsWindfurySkill",
                          "value": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>",
                          "valuePerStack": {
                            "_ReplayNormal": {
                              "operator": "Variables[0] (_ReplayNormal) || RETURN",
                              "displayLines": "_ReplayNormal",
                              "constants": [],
                              "variables": [
                                "_ReplayNormal"
                              ]
                            },
                            "_ReplayAbility": {
                              "operator": "Variables[0] (_ReplayAbility) || RETURN",
                              "displayLines": "_ReplayAbility",
                              "constants": [],
                              "variables": [
                                "_ReplayAbility"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OnWaveMonster_SkillType",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1213,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Dan Heng • Imbibitor Lunae"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>",
                          "valuePerStack": {
                            "_ChangeValue": {
                              "operator": "Variables[0] (_ChangeValue) || RETURN",
                              "displayLines": "_ChangeValue",
                              "constants": [],
                              "variables": [
                                "_ChangeValue"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "ActionTag_Windfury",
                          "skillIndex": {
                            "operator": "Variables[0] (_OnWaveMonster_SkillType) || RETURN",
                            "displayLines": "_OnWaveMonster_SkillType",
                            "constants": [],
                            "variables": [
                              "_OnWaveMonster_SkillType"
                            ]
                          },
                          "forceAction": true,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "afterInjection": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Enemies Still Alive",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_OnWaveMonster_SkillType",
                                  "value": {
                                    "operator": "Variables[0] (_OnWaveMonster_SkillType) || RETURN",
                                    "displayLines": "_OnWaveMonster_SkillType",
                                    "constants": [],
                                    "variables": [
                                      "_OnWaveMonster_SkillType"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "Windfury_Flag",
                                  "value": 0
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_WindfuryCount",
                                    "compareType": "<",
                                    "value2": 1
                                  },
                                  "passed": [
                                    "Modifier Deletes Itself"
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_OnWaveMonster_SkillType",
                                  "value": 0
                                }
                              ]
                            }
                          ],
                          "priorityTag": "Windfury"
                        }
                      ],
                      "failed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (_OnWaveMonster_SkillType) || RETURN",
                            "displayLines": "_OnWaveMonster_SkillType",
                            "constants": [],
                            "variables": [
                              "_OnWaveMonster_SkillType"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>",
                                  "valuePerStack": {
                                    "_ChangeValue": {
                                      "operator": "Variables[0] (_ChangeValue) || RETURN",
                                      "displayLines": "_ChangeValue",
                                      "constants": [],
                                      "variables": [
                                        "_ChangeValue"
                                      ]
                                    }
                                  }
                                },
                                {
                                  "name": "Inject Extra-Turn",
                                  "actionTag": "ActionTag_Windfury",
                                  "forceAction": true,
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "afterInjection": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Enemies Still Alive",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "invertCondition": true
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "_OnWaveMonster_SkillType",
                                          "value": 1
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-86253490\">Standard_Windfury_ModifyAbilityPropertyByType_Normal</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "Windfury_Flag",
                                          "value": 0
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "MDF_WindfuryCount",
                                            "compareType": "<",
                                            "value2": 1
                                          },
                                          "passed": [
                                            "Modifier Deletes Itself"
                                          ]
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "_OnWaveMonster_SkillType",
                                          "value": 0
                                        }
                                      ]
                                    }
                                  ],
                                  "priorityTag": "Windfury"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>",
                                  "valuePerStack": {
                                    "_ChangeValue": {
                                      "operator": "Variables[0] (_ChangeValue) || RETURN",
                                      "displayLines": "_ChangeValue",
                                      "constants": [],
                                      "variables": [
                                        "_ChangeValue"
                                      ]
                                    }
                                  }
                                },
                                {
                                  "name": "Inject Extra-Turn",
                                  "actionTag": "ActionTag_Windfury",
                                  "skillType": "ControlSkill02",
                                  "forceAction": true,
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "afterInjection": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Enemies Still Alive",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "invertCondition": true
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "_OnWaveMonster_SkillType",
                                          "value": 2
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-361819910\">Standard_Windfury_ModifyAbilityPropertyByType_Skill</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "Windfury_Flag",
                                          "value": 0
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "MDF_WindfuryCount",
                                            "compareType": "<",
                                            "value2": 1
                                          },
                                          "passed": [
                                            "Modifier Deletes Itself"
                                          ]
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "_OnWaveMonster_SkillType",
                                          "value": 0
                                        }
                                      ]
                                    }
                                  ],
                                  "priorityTag": "Windfury"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Energy/Special Cost Value Change [Owner]: Before",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "changeIndex": 1,
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Skill"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_ReplaySkill",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Basic ATK"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_ReplayNormal",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsAimEnemySkill",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_WindfuryCount",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Override Special Cost Deductions",
                      "overrideValue": 0
                    }
                  ]
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__985995630\">Standard_AbilityTarget</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__564198756\">Standard_ModifyActionDelayOnTurnEnd</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - MDF_DelayCost)"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Basic ATK",
              "Skill",
              "Memosprite"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_DelayCost) || SUB || RETURN",
                "displayLines": "(0 - MDF_DelayCost)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_DelayCost"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1906668410\">Standard_GM_Revive</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "StageAbility_61255101_Camera"
                }
              ]
            },
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "StageAbility_61255101_Camera",
                      "priorityTag": "AvatarReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "AADF_1": {
                          "operator": "Variables[0] (ADF_1) || RETURN",
                          "displayLines": "ADF_1",
                          "constants": [],
                          "variables": [
                            "ADF_1"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-272210701\">Standard_ChallengeTurnLimit</a>",
          "modifierFlags": [
            "STAT_TurnCountAccumulator"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Increment Cycles Counter",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CyclesRemaining[?]",
                    "compareType": ">",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "BattleEventTurnLeftParam"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CyclesRemaining[?]",
                        "compareType": "=",
                        "value2": 3
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CyclesRemaining[?]",
                        "compareType": "=",
                        "value2": 2
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CyclesRemaining[?]",
                        "compareType": "=",
                        "value2": 1
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CyclesRemaining[?]",
                            "compareType": "<="
                          },
                          "passed": [
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CyclesRemaining[?]",
                        "compareType": "="
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -12
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.5
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1118024096\">Standard_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Imaginary",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Imaginary Weakness.",
          "type": "Debuff",
          "effectName": "Implant Imaginary Weakness",
          "statusName": "Additional Imaginary Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1012677236\">Standard_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Quantum",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Quantum Weakness.",
          "type": "Debuff",
          "effectName": "Implant Quantum Weakness",
          "statusName": "Additional Quantum Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1930557999\">Standard_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Thunder",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Lightning Weakness.",
          "type": "Debuff",
          "effectName": "Implant Lightning Weakness",
          "statusName": "Additional Lightning Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1724958950\">Standard_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Physical",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Physical Weakness.",
          "type": "Debuff",
          "effectName": "Implant Physical Weakness",
          "statusName": "Additional Physical Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1938125975\">Standard_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Wind",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Wind Weakness.",
          "type": "Debuff",
          "effectName": "Implant Wind Weakness",
          "statusName": "Additional Wind Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1497676034\">Standard_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Ice",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Ice Weakness.",
          "type": "Debuff",
          "effectName": "Implant Ice Weakness",
          "statusName": "Additional Ice Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2009288629\">Standard_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Fire",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          }
                        },
                        {
                          "name": "Update Modifier Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Fire Weakness.",
          "type": "Debuff",
          "effectName": "Implant Fire Weakness",
          "statusName": "Additional Fire Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_Entangle",
            "DisableAction",
            "STAT_CTRL"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageBreak": {
                      "operator": "Constants[0] (1) || Variables[0] (MDF_BeingHitDamageValue) || ADD || Variables[1] (MDF_DamagePercentage) || MUL || RETURN",
                      "displayLines": "((1 + MDF_BeingHitDamageValue) * MDF_DamagePercentage)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_BeingHitDamageValue",
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
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
                        "value1": null,
                        "compareType": ">",
                        "value2": 1,
                        "valueType": "LifeTime"
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
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": "<=",
                        "value2": 3,
                        "contextScope": "ContextModifier"
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
                            "value1": null,
                            "compareType": ">",
                            "value2": 1,
                            "valueType": "LifeTime"
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
                            "value1": null,
                            "compareType": ">",
                            "value2": 1,
                            "valueType": "LifeTime"
                          }
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
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "_CasterBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(MDF_ActionDelayRatio * (1 + _CasterBreakDamageAddedRatio))"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Max_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_BeingHitDamageValue) || Variables[1] (STANDARDSPECIFIC_OBJECT_UNUSED_7) || ADD || RETURN",
                      "displayLines": "(MDF_BeingHitDamageValue + STANDARDSPECIFIC_OBJECT_UNUSED_7)",
                      "constants": [],
                      "variables": [
                        "MDF_BeingHitDamageValue",
                        "STANDARDSPECIFIC_OBJECT_UNUSED_7"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "value": {
                        "operator": "Variables[0] (MDF_BeingHitDamageValue) || Variables[1] (STANDARDSPECIFIC_OBJECT_UNUSED_7) || ADD || RETURN",
                        "displayLines": "(MDF_BeingHitDamageValue + STANDARDSPECIFIC_OBJECT_UNUSED_7)",
                        "constants": [],
                        "variables": [
                          "MDF_BeingHitDamageValue",
                          "STANDARDSPECIFIC_OBJECT_UNUSED_7"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "value": {
                        "operator": "Variables[0] (Max_Count) || RETURN",
                        "displayLines": "Max_Count",
                        "constants": [],
                        "variables": [
                          "Max_Count"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BeHitFlag",
                  "value": 1
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
                    "value1": "MDF_BeHitFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (Max_Count) || Constants[0] (1) || SUB || RETURN",
                          "displayLines": "(Max_Count - 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "Max_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_BeingHitDamageValue",
                          "value": {
                            "operator": "Variables[0] (Max_Count) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(Max_Count - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Max_Count"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Max_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_BeingHitDamageValue) || Variables[1] (STANDARDSPECIFIC_OBJECT_UNUSED_7) || ADD || Constants[0] (1) || ADD || RETURN",
                              "displayLines": "((MDF_BeingHitDamageValue + STANDARDSPECIFIC_OBJECT_UNUSED_7) + 1)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MDF_BeingHitDamageValue",
                                "STANDARDSPECIFIC_OBJECT_UNUSED_7"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MDF_BeingHitDamageValue",
                              "value": {
                                "operator": "Variables[0] (MDF_BeingHitDamageValue) || Variables[1] (STANDARDSPECIFIC_OBJECT_UNUSED_7) || ADD || RETURN",
                                "displayLines": "(MDF_BeingHitDamageValue + STANDARDSPECIFIC_OBJECT_UNUSED_7)",
                                "constants": [],
                                "variables": [
                                  "MDF_BeingHitDamageValue",
                                  "STANDARDSPECIFIC_OBJECT_UNUSED_7"
                                ]
                              }
                            },
                            {
                              "name": "Define Modifier Variable",
                              "modifierName": null,
                              "function": "Add",
                              "value": {
                                "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_7) || RETURN",
                                "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_7",
                                "constants": [],
                                "variables": [
                                  "STANDARDSPECIFIC_OBJECT_UNUSED_7"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MDF_BeingHitDamageValue",
                              "value": {
                                "operator": "Variables[0] (Max_Count) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(Max_Count - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Max_Count"
                                ]
                              }
                            },
                            {
                              "name": "Define Modifier Variable",
                              "modifierName": null,
                              "value": {
                                "operator": "Variables[0] (Max_Count) || RETURN",
                                "displayLines": "Max_Count",
                                "constants": [],
                                "variables": [
                                  "Max_Count"
                                ]
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": "<=",
                        "value2": 3,
                        "contextScope": "ContextModifier"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Action delayed and receives Additional Quantum DMG at the start of the next turn.<br>This Additional DMG is increased when Entangled enemies are attacked. This effect can stack up to 5 times.",
          "type": "Debuff",
          "effectName": "Entanglement",
          "statusName": "Entanglement",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-838929203\">Standard_Element_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_Confine",
            "DisableAction",
            "STAT_CTRL",
            "STAT_SpeedDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_SpeedDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedDownRatio"
                    ]
                  }
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CasterBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(MDF_ActionDelayRatio * (1 + _CasterBreakDamageAddedRatio))"
                }
              ]
            }
          ],
          "description": "Action is delayed and SPD is reduced.",
          "type": "Debuff",
          "effectName": "Imprisonment",
          "statusName": "Imprisonment"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1979618180\">Standard_Element_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageBreak": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageBreak": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the beginning of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageBreak": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Variables[1] (MDF_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * MDF_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage",
                        "MDF_PoisonLayer"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageBreak": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamagePercentage) || MUL || Variables[2] (MDF_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DamagePercentage) * MDF_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamagePercentage",
                        "MDF_PoisonLayer"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the beginning of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Wind Shear",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1852685234\">Standard_Element_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageBreak": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageBreak": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Burn",
          "statusName": "Burn",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-130814791\">Standard_Element_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Frozen_Effect",
            "STAT_CTRL_Frozen",
            "STAT_CTRL"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": 0.5,
                  "adjustmentType": "="
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "useEntitySnapshot": true,
          "description": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
          "type": "Debuff",
          "effectName": "Frozen",
          "statusName": "Frozen"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1797970053\">Standard_Element_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (MDF_EliteRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * MDF_EliteRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "MDF_EliteRatio"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (MDF_CommonRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * MDF_CommonRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "MDF_CommonRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "_CasterBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DamageValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_DamageMax) || RETURN",
                      "displayLines": "MDF_DamageMax",
                      "constants": [],
                      "variables": [
                        "MDF_DamageMax"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageMax) || RETURN",
                        "displayLines": "MDF_DamageMax",
                        "constants": [],
                        "variables": [
                          "MDF_DamageMax"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (MDF_EliteRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * MDF_EliteRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "MDF_EliteRatio"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (MDF_CommonRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * MDF_CommonRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "MDF_CommonRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "_CasterBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DamageValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_DamageMax) || RETURN",
                      "displayLines": "MDF_DamageMax",
                      "constants": [],
                      "variables": [
                        "MDF_DamageMax"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageMax) || RETURN",
                        "displayLines": "MDF_DamageMax",
                        "constants": [],
                        "variables": [
                          "MDF_DamageMax"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || Constants[0] (1) || Variables[1] (_CasterBreakDamageAddedRatio) || ADD || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((MDF_DamageValue * (1 + _CasterBreakDamageAddedRatio)) * _Layer)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamageValue",
                        "_CasterBreakDamageAddedRatio",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (MDF_EliteRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * MDF_EliteRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "MDF_EliteRatio"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (MDF_CommonRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * MDF_CommonRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "MDF_CommonRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "_CasterBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DamageValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_DamageMax) || RETURN",
                      "displayLines": "MDF_DamageMax",
                      "constants": [],
                      "variables": [
                        "MDF_DamageMax"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageMax) || RETURN",
                        "displayLines": "MDF_DamageMax",
                        "constants": [],
                        "variables": [
                          "MDF_DamageMax"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || Constants[0] (1) || Variables[2] (_CasterBreakDamageAddedRatio) || ADD || MUL || Variables[3] (_Layer) || MUL || RETURN",
                      "displayLines": "(((DOT_TriggerRatio * MDF_DamageValue) * (1 + _CasterBreakDamageAddedRatio)) * _Layer)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue",
                        "_CasterBreakDamageAddedRatio",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1845786667\">Standard_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1404590263\">Standard_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1788719875\">Standard_Protect_AbilityRetarget</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Redirect Targeting",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "affectedTeam": "EnemyTeam"
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Buff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1797420881\">Standard_Protect_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue) || RETURN",
                    "displayLines": "MDF_ShowValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue"
                    ]
                  }
                },
                {
                  "name": "Set Hit-Class"
                }
              ]
            }
          ],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
          "modifierFlags": [
            "ListenUnStage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Standard_Servant_Forcekill"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Standard_Servant_Forcekill",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrRevivable",
                      "targetState": "Mask_AliveOrRevivable",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "When the summoner is defeated, the summoned objects will also be defeated.",
          "type": "Other",
          "statusName": "Self-Destruct"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__815559009\">Standard_Stealth</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "modifierFlags": [
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "description": "Missing Description",
          "type": "Buff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1445032651\">Standard_BAN_Silence</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Merge",
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
                    "Skill",
                    "Ultimate"
                  ]
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-475439782\">Standard_BAN_Heal</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Merge",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "DisableHealHP"
          ],
          "description": "Missing Description",
          "type": "Debuff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1724913010\">Standard_Shake_IgnoreImmune</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
          "modifierFlags": [
            "AlwaysSuccess",
            "DisableAction",
            "STAT_CTRL_Shake",
            "STAT_CTRL",
            "AvatarBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ActionDelayRatio",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            },
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
          "description": "Action delayed. Cannot take actions for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Strong Reverberation",
          "statusName": "Strong Reverberation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__906599448\">Standard_BlackBlood_Stackable</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPRatio) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                    "displayLines": "(MDF_DirtyHPRatio * Modifier_Poison_PoisonLayer)",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPRatio",
                      "Modifier_Poison_PoisonLayer"
                    ]
                  }
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_DirtyHPRatio) || RETURN",
                    "displayLines": "MDF_DirtyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPRatio"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPRatio) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                    "displayLines": "(MDF_DirtyHPRatio * Modifier_Poison_PoisonLayer)",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPRatio",
                      "Modifier_Poison_PoisonLayer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
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
          "description": "Decreases Maximum Restorable HP by <span class=\"descriptionNumberColor\">MDF_DirtyHPRatio</span>.",
          "type": "Debuff",
          "effectName": "Prana-Siphoned",
          "statusName": "Prana-Siphoned"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_Crazy",
            "Crazy",
            "AvatarBreak",
            "STAT_CTRL",
            "DispelPriorityHigh"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "<=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "living": true
                    }
                  ]
                }
              ]
            },
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
          "description": "Cannot be controlled. Automatically attacks a random enemy target. If the target is about to have any debuff removed by an ability, then the Outrage state will be prioritized for removal.",
          "type": "Debuff",
          "effectName": "Outrage",
          "statusName": "Outrage"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__646228171\">Standard_MindControl_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.000010000076
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1009521621\">Standard_MindControl_Damage</a>",
          "execute": [
            {
              "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ATK_AvatarSum",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AvatarCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "ATK_Avatar",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ATK_AvatarSum",
                      "value": {
                        "operator": "Variables[0] (ATK_AvatarSum) || Variables[1] (ATK_Avatar) || ADD || RETURN",
                        "displayLines": "(ATK_AvatarSum + ATK_Avatar)",
                        "constants": [],
                        "variables": [
                          "ATK_AvatarSum",
                          "ATK_Avatar"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AvatarCount",
                      "value": {
                        "operator": "Variables[0] (MDF_AvatarCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_AvatarCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_AvatarCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target 2}}"
                  },
                  "variableName": "ATK_Avatar",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDamageRatio",
                  "value": {
                    "operator": "Variables[0] (ATK_Avatar) || Variables[1] (MDF_AvatarCount) || MUL || Variables[2] (ATK_AvatarSum) || DIV || RETURN",
                    "displayLines": "((ATK_Avatar * MDF_AvatarCount) / ATK_AvatarSum)",
                    "constants": [],
                    "variables": [
                      "ATK_Avatar",
                      "MDF_AvatarCount",
                      "ATK_AvatarSum"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_FinalDamageRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                      "displayLines": "MDF_MaxDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MaxDamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamageRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                        "displayLines": "MDF_MaxDamageRatio",
                        "constants": [],
                        "variables": [
                          "MDF_MaxDamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_FinalDamageRatio",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                      "displayLines": "MDF_MinDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinDamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamageRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                        "displayLines": "MDF_MinDamageRatio",
                        "constants": [],
                        "variables": [
                          "MDF_MinDamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Ability Hits",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target 2}}"
                  },
                  "variableName": "MDF_SkillMaxHit"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (MDF_MindControlDamagePercentage) || Variables[1] (MDF_FinalDamageRatio) || MUL || Variables[2] (MDF_SkillMaxHit) || DIV || RETURN",
                      "displayLines": "((MDF_MindControlDamagePercentage * MDF_FinalDamageRatio) / MDF_SkillMaxHit)",
                      "constants": [],
                      "variables": [
                        "MDF_MindControlDamagePercentage",
                        "MDF_FinalDamageRatio",
                        "MDF_SkillMaxHit"
                      ]
                    },
                    "Toughness": null,
                    "keepDMGType": true,
                    "inheritTargetFrom": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "Tags": null,
                    "attackType": "Additional DMG",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
              "execute": [
                "Trigger: Attack End"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__821900269\">Standard_MindControl_Target</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__160325498\">Standard_MindControl_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_CTRL",
            "AvatarBreak",
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage",
            "DispelPriorityHigh",
            "Charm"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"821900269\">Standard_MindControl_Target</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"646228171\">Standard_MindControl_LockHP</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"160325498\">Standard_MindControl_DisableAction</a>"
                },
                "Reset Triggers: Attack"
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "<=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "living": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"160325498\">Standard_MindControl_DisableAction</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Controlled Action [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is CC Immune",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "NOT",
                              "condition": {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "mustBeAlive2": true
                              }
                            }
                          }
                        ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"821900269\">Standard_MindControl_Target</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"646228171\">Standard_MindControl_LockHP</a>"
                        },
                        {
                          "name": "Use Controlled Ability",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        "Trigger: Skip Death Handling"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"821900269\">Standard_MindControl_Target</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"646228171\">Standard_MindControl_LockHP</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck"
                },
                "Reset Triggers: Attack"
              ]
            },
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
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1009521621\">Standard_MindControl_Damage</a>",
                  "valuePerStack": {
                    "MDF_MindControlDamagePercentage": {
                      "operator": "Variables[0] (MDF_MindControlDamagePercentage) || RETURN",
                      "displayLines": "MDF_MindControlDamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_MindControlDamagePercentage"
                      ]
                    },
                    "MDF_MaxDamageRatio": {
                      "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                      "displayLines": "MDF_MaxDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MaxDamageRatio"
                      ]
                    },
                    "MDF_MinDamageRatio": {
                      "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                      "displayLines": "MDF_MinDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinDamageRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"821900269\">Standard_MindControl_Target</a>"
                },
                "Reset Triggers: Attack"
              ]
            }
          ],
          "description": "Makes a single target unable to take action. Target will use Basic ATK to attack a random ally of theirs. If an ability is cast on the target to remove a debuff, the Dominated status will be removed first.",
          "type": "Debuff",
          "effectName": "Dominated",
          "statusName": "Dominated"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_Entangle",
            "DisableAction",
            "AvatarBreak",
            "STAT_CTRL"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Constants[0] (1) || Variables[0] (MDF_BeingHitDamageValue) || ADD || Variables[1] (Modifier_Entangle_DamagePercentage) || MUL || RETURN",
                      "displayLines": "((1 + MDF_BeingHitDamageValue) * Modifier_Entangle_DamagePercentage)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_BeingHitDamageValue",
                        "Modifier_Entangle_DamagePercentage"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Entangle_DamageValue) || RETURN",
                      "displayLines": "Modifier_Entangle_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Entangle_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
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
                        "value1": null,
                        "compareType": ">",
                        "value2": 1,
                        "valueType": "LifeTime"
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
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": "<=",
                        "value2": 3,
                        "contextScope": "ContextModifier"
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
                            "value1": null,
                            "compareType": ">",
                            "value2": 1,
                            "valueType": "LifeTime"
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
                            "value1": null,
                            "compareType": ">",
                            "value2": 1,
                            "valueType": "LifeTime"
                          }
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
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (MDF_BeingHitDamageValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_BeingHitDamageValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_BeingHitDamageValue"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BeHitFlag",
                  "value": 1
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
                    "value1": "MDF_BeHitFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_BeingHitDamageValue",
                          "value": 4
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_BeingHitDamageValue",
                          "value": {
                            "operator": "Variables[0] (MDF_BeingHitDamageValue) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_BeingHitDamageValue + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_BeingHitDamageValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": null,
                          "function": "Add",
                          "value": {
                            "operator": "Constants[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [
                              1
                            ],
                            "variables": []
                          }
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": "<=",
                        "value2": 3,
                        "contextScope": "ContextModifier"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_BeingHitDamageValue",
                      "value": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_BeingHitDamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_BeingHitDamageValue) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_BeingHitDamageValue + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_BeingHitDamageValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BeingHitDamageValue",
                        "compareType": "<=",
                        "value2": 3,
                        "contextScope": "ContextModifier"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Action delayed and receives Additional Quantum DMG at the start of the next turn.<br>This Additional DMG is increased when Entangled enemies are attacked. This effect can stack up to 5 times.",
          "type": "Debuff",
          "effectName": "Entanglement",
          "statusName": "Entanglement",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_CTRL",
            "STAT_Confine",
            "DisableAction",
            "STAT_SpeedDown",
            "AvatarBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
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
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_SpeedDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedDownRatio"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                }
              ]
            }
          ],
          "description": "Action is delayed and SPD is reduced.",
          "type": "Debuff",
          "effectName": "Imprisonment",
          "statusName": "Imprisonment"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Frozen_Effect",
            "STAT_CTRL_Frozen",
            "STAT_CTRL"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Frozen_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_Frozen_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_Frozen_DamagePercentage"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Frozen_DamageValue) || RETURN",
                      "displayLines": "Modifier_Frozen_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Frozen_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]) || RETURN",
                    "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]",
                    "constants": [],
                    "variables": [
                      "STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]"
                    ]
                  },
                  "adjustmentType": "="
                }
              ]
            },
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
          "useEntitySnapshot": true,
          "description": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
          "type": "Debuff",
          "effectName": "Frozen",
          "statusName": "Frozen"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__234868487\">Stun_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1162946172\">Standard_CTRL_Stun</a>[<span class=\"descriptionNumberColor\">Stunned</span>]",
          "stackType": "Merge",
          "modifierFlags": [
            "DisableAction",
            "IdleStun",
            "STAT_CTRL_Stun",
            "STAT_CTRL"
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
                  "modifier": "<a class=\"gModGreen\" id=\"234868487\">Stun_Effect</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"234868487\">Stun_Effect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": 0.5,
                  "adjustmentType": "="
                }
              ]
            }
          ],
          "description": "Cannot take action for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Stunned",
          "statusName": "Stunned"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "stackType": "Replace",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "Taunt",
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "description": "Can only select %CasterName as the target to attack.",
          "type": "Debuff",
          "effectName": "Taunt",
          "statusName": "Taunt"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1364993633\">BlockDamage_Count</a>[<span class=\"descriptionNumberColor\">Repel</span>]",
          "counter": 1,
          "modifierFlags": [
            "BlockDamageExcludeDot"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Attack Type",
                      "attackTypes": [
                        "DOT"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
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
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Nullifies all DMG received except for DoT until after being attacked.",
          "type": "Buff",
          "effectName": "Barrier",
          "statusName": "Repel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-384231137\">BlockDamage_Turn</a>",
          "modifierFlags": [
            "BlockDamage"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2090146765\">Standard_HOT_SP</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue) || RETURN",
                    "displayLines": "MDF_ShowValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Missing Description",
          "type": "Buff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1156628335\">Standard_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                    "displayLines": "MDF_ShowValue2",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue2"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Restores a certain amount of HP at the start of each turn.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Healing Over Time"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(MDF_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Wind Shear",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage_Defence",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamageValue",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage_Defence",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamageValue",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Burn",
          "statusName": "Burn",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1147160586\">Standard_DOT_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Bleed_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Bleed_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Bleed_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Bleed_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Bleed_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Bleed_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Bleed_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Bleed_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Bleed_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Bleed_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Bleed_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-890737997\">MoreOneMorePerTurn_5</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "OneMoreCount"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                  "duration": 4
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMoreCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(OneMoreCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "OneMoreCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-907515616\">MoreOneMorePerTurn_4</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "OneMoreCount"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                  "duration": 3
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMoreCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(OneMoreCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "OneMoreCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-129923965\">MoreOneMorePerTurn</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "OneMoreCount"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                  "duration": 2
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMoreCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(OneMoreCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "OneMoreCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__883139622\">OneMorePerTurn</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "OneMoreCount"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMoreCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(OneMoreCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "OneMoreCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OneMoreCount",
                  "value": {
                    "operator": "Variables[0] (OneMore[?]) || RETURN",
                    "displayLines": "OneMore[?]",
                    "constants": [],
                    "variables": [
                      "OneMore[?]"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__763823194\">OneMore</a>",
          "stackType": "Merge",
          "lifeCyclePhaseAllowed": "ActionPhaseEnd",
          "modifierFlags": [
            "OneMore",
            "LifeStepImmediately"
          ],
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-666144302\">StageAbility_MazeStandard_EnterBattle_StanceBreakModifier</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-237425029\">StanceBreakState_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "SWITCH",
                  "source": {
                    "name": "Damage Type Source",
                    "sourceType": "ReadTargetType",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target DEALING DMG}}"
                    }
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Physical"
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Fire",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1310,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Target DEALING DMG}}"
                            },
                            "characterName": "Firefly"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Ice",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1310,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Current Action Owner}}"
                                },
                                "characterName": "Firefly"
                              },
                              {
                                "name": "Character ID",
                                "ID": 1303,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Target DEALING DMG}}"
                                },
                                "characterName": "Ruan Mei"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Character ID",
                                    "ID": 1303,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Target DEALING DMG}}"
                                    },
                                    "characterName": "Ruan Mei"
                                  },
                                  {
                                    "name": "Character ID",
                                    "ID": 1220,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Current Action Owner}}"
                                    },
                                    "characterName": "Feixiao"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Current Action Owner}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>"
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
                                    "name": "Character ID",
                                    "ID": 1303,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Target DEALING DMG}}"
                                    },
                                    "characterName": "Ruan Mei"
                                  },
                                  {
                                    "name": "Character ID",
                                    "ID": 1317,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Current Action Owner}}"
                                    },
                                    "characterName": "Rappa"
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Thunder"
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Wind",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1220,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Target DEALING DMG}}"
                                },
                                "characterName": "Feixiao"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Target DEALING DMG}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Quantum"
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Imaginary",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1317,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Target DEALING DMG}}"
                            },
                            "characterName": "Rappa"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1705654267\">MonsterAllDamageReduce</a>",
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
                  "value": 0.1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1775147687\">RedStanceState</a>",
          "modifierFlags": [
            "RedStance"
          ],
          "execute": [
            {
              "eventTrigger": "Being Exo-Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.25
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2098906249\">Standard_MonsterCharge_ActionBarText</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2089166112\">Standard_MonsterBreak_ActionBarText</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-898477955\">StanceBreakState</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "Break"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.25
                },
                {
                  "name": "Trigger: Break",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skipTeamLock": true
                },
                {
                  "name": "Define Toughness Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1705654267\">MonsterAllDamageReduce</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2089166112\">Standard_MonsterBreak_ActionBarText</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2089166112\">Standard_MonsterBreak_ActionBarText</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}