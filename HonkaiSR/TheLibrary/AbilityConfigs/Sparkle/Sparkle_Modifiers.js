const configAbility = {
  "fileName": "Sparkle_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
      "stackType": "Replace",
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue3",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue2) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue + MDF_PropertyValue2)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_PropertyValue2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue2) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue + MDF_PropertyValue2)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue3",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue2"
      ],
      "latentQueue": [],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
      "type": "Buff",
      "effectName": "Nocturne",
      "statusName": "Nocturne"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__690939863\">Sparkle_Eidolon6_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"690939863\">Sparkle_Eidolon6_Mark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1056705380\">Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_DefenceAddedRatio)"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1668382571\">Sparkle_PointB3_Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1017813291\">Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Red Herring</span>]",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"1056705380\">Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>"
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
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Count",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                  "displayLines": "MDF_PassiveMaxLayer",
                  "constants": [],
                  "variables": [
                    "MDF_PassiveMaxLayer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                    "displayLines": "MDF_PassiveMaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_PassiveMaxLayer"
                    ]
                  }
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
                "modifier": "<a class=\"gModGreen\" id=\"1486907244\">Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_PropertyValue3) || ADD || Variables[2] (MDF_Count) || MUL || RETURN",
                    "displayLines": "((MDF_PropertyValue2 + MDF_PropertyValue3) * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      "MDF_PropertyValue3",
                      "MDF_Count"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue2 * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      "MDF_Count"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Ignores <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio2</span> of the target's DEF when dealing DMG."
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DefenceAddedRatio2",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio2) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_DefenceAddedRatio2 * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio2",
                      "MDF_Count"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"1056705380\">Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
              "valuePerStack": {
                "MDF_AllDamageAddedRatio": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                },
                "MDF_DefenceAddedRatio": {
                  "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                  "displayLines": "MDF_DefenceAddedRatio2",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceAddedRatio2"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1486907244\">Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                  },
                  {
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
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue2 * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1056705380\">Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_AllDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    },
                    "MDF_DefenceAddedRatio": {
                      "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                      "displayLines": "MDF_DefenceAddedRatio2",
                      "constants": [],
                      "variables": [
                        "MDF_DefenceAddedRatio2"
                      ]
                    }
                  }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1486907244\">Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                  },
                  {
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
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_PropertyValue3) || ADD || Variables[2] (MDF_Count) || MUL || RETURN",
                    "displayLines": "((MDF_PropertyValue2 + MDF_PropertyValue3) * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      "MDF_PropertyValue3",
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1056705380\">Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_AllDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    },
                    "MDF_DefenceAddedRatio": {
                      "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                      "displayLines": "MDF_DefenceAddedRatio2",
                      "constants": [],
                      "variables": [
                        "MDF_DefenceAddedRatio2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue2",
        "MDF_PropertyValue3",
        "MDF_DefenceAddedRatio2"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Red Herring"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1304623516\">Sparkle_Eidolon6_CritDmgAddedRatio01</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                "displayLines": "MDF_PropertyValueConvert",
                "constants": [],
                "variables": [
                  "MDF_PropertyValueConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                "displayLines": "MDF_PropertyValueConvert",
                "constants": [],
                "variables": [
                  "MDF_PropertyValueConvert"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1766946532\">Sparkle_Ability02_CritDmgAddedRatio02</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue2",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValueConvert2) || Variables[1] (MDF_PropertyValueBase2) || ADD || RETURN",
                "displayLines": "(MDF_PropertyValueConvert2 + MDF_PropertyValueBase2)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValueConvert2",
                  "MDF_PropertyValueBase2"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                "displayLines": "MDF_PropertyValue2",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValueConvert2",
        "MDF_PropertyValueBase2"
      ],
      "latentQueue": [
        "MDF_PassiveLayer01",
        "MDF_PassiveLayer02"
      ],
      "description": "Increase CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "statusName": "Dreamdiver"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Artificial Flower"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1766946532\">Sparkle_Ability02_CritDmgAddedRatio02</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_PropertyValueConvert2": {
                      "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                      "displayLines": "MDF_PropertyValueConvert",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValueConvert"
                      ]
                    },
                    "MDF_PropertyValueBase2": {
                      "operator": "Variables[0] (MDF_PropertyValueBase) || RETURN",
                      "displayLines": "MDF_PropertyValueBase",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValueBase"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1766946532\">Sparkle_Ability02_CritDmgAddedRatio02</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValueConvert) || Variables[1] (MDF_PropertyValueBase) || ADD || RETURN",
                "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValueConvert",
                  "MDF_PropertyValueBase"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValueConvert) || Variables[1] (MDF_PropertyValueBase) || ADD || RETURN",
                "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValueConvert",
                  "MDF_PropertyValueBase"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValueConvert",
        "MDF_PropertyValueBase"
      ],
      "latentQueue": [],
      "description": "Increase CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Dreamdiver"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-167826022\">Sparkle_Eidolon4_CD</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1486907244\">Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add",
                  "value": 1,
                  "valueType": "Duration"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> and additionally enhances the DMG Boost effect provided by each stack of Sparkle's talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End"
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue2"
      ],
      "latentQueue": [
        "MDF_PassiveLayer01",
        "MDF_PassiveLayer02"
      ],
      "description": "Additionally enhances the DMG Boost effect provided by each stack of Sparkle's talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Cipher",
      "statusName": "Cipher"
    }
  ],
  "references": []
}