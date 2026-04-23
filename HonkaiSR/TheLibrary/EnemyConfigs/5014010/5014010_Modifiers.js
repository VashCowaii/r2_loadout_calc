const configAbility = {
  "fileName": "5014010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2068466533\">Enemy_W5_Vtuber_AbortInsert</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W5_Vtuber_AbortInsert"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W5_Vtuber_AbortInsert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "priorityTag": "EnemyForceKill",
              "allowAbilityTriggers": false
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
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
                "value1": "MDF_SwitchField",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068466533\">Enemy_W5_Vtuber_AbortInsert</a>"
                }
              ]
            }
          ],
          "priorityLevel": -100
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
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 5012031,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Aggressive Reading Material",
                        "isBaseCompare": true
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
                      ]
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
}