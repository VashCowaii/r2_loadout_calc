const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_27",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Init_Layer",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_DmgUp_Ratio",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_SP_Ratio",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
        "displayLines": "#BattleEvent_P3_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P3_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Current_Layer"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Trigger_Effect_Flag"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "EntityCurrentSP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "EntityStockSP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "EntityMaxSP"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Camear_AllLightTeamWithoutDither"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Challenge_Month_27_Insert"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"901866480\">Modifier_BattleEventAbility_Challenge_Month_27</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__901866480\">Modifier_BattleEventAbility_Challenge_Month_27</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Effect_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Trigger_Effect_Flag",
                  "value": 0
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
                  "isTrigger": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)v2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
                  "valuePerStack": {
                    "_SP_Ratio_get": {
                      "operator": "Variables[0] (_SP_Ratio) || RETURN",
                      "displayLines": "_SP_Ratio",
                      "constants": [],
                      "variables": [
                        "_SP_Ratio"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Player Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
                  "isTrigger": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_Init_Layer) || RETURN",
                    "displayLines": "_Init_Layer",
                    "constants": [],
                    "variables": [
                      "_Init_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "_DmgUp_Ratio_get": {
                      "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                      "displayLines": "_DmgUp_Ratio",
                      "constants": [],
                      "variables": [
                        "_DmgUp_Ratio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_Current_Layer) || RETURN",
                    "displayLines": "_Current_Layer",
                    "constants": [],
                    "variables": [
                      "_Current_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": {
                    "operator": "Variables[0] (_Current_Layer) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_Current_Layer + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_Current_Layer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Current_Layer",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_Init_Layer) || RETURN",
                      "displayLines": "_Init_Layer",
                      "constants": [],
                      "variables": [
                        "_Init_Layer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Effect_Flag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
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
                          "abilityName": "BattleEventAbility_Challenge_Month_27_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Effect_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Trigger_Effect_Flag",
                  "value": 0
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
                  "isTrigger": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)v2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
                  "valuePerStack": {
                    "_SP_Ratio_get": {
                      "operator": "Variables[0] (_SP_Ratio) || RETURN",
                      "displayLines": "_SP_Ratio",
                      "constants": [],
                      "variables": [
                        "_SP_Ratio"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
                  "casterAssign": "TargetSelf"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
                      "isTrigger": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
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
              "name": "Define Custom Variable",
              "variableName": "_Current_Layer",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_Current_Layer",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": {
                "operator": "Variables[0] (_Init_Layer) || RETURN",
                "displayLines": "_Init_Layer",
                "constants": [],
                "variables": [
                  "_Init_Layer"
                ]
              },
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "_DmgUp_Ratio_get": {
                          "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                          "displayLines": "_DmgUp_Ratio",
                          "constants": [],
                          "variables": [
                            "_DmgUp_Ratio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Current_Layer) || RETURN",
                        "displayLines": "_Current_Layer",
                        "constants": [],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
                    }
                  ]
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "_DmgUp_Ratio_get": {
                          "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                          "displayLines": "_DmgUp_Ratio",
                          "constants": [],
                          "variables": [
                            "_DmgUp_Ratio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Current_Layer) || RETURN",
                        "displayLines": "_Current_Layer",
                        "constants": [],
                        "variables": [
                          "_Current_Layer"
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
      "latentQueue": [
        "_DmgUp_Ratio",
        "_Trigger_Effect_Flag"
      ]
    }
  ]
}