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
      "for": "<a class=\"gModGreen\" id=\"mod__-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
      "type": "Buff",
      "effectName": "Nocturne",
      "statusName": "Nocturne"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                  },
                  {
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue4",
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
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_PropertyValue4"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue4",
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
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_PropertyValue4"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__582121474\">Advanced_Sparkle_Eidolon6_Mark</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"582121474\">Advanced_Sparkle_Eidolon6_Mark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1471334562\">Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"94548241\">Advanced_Sparkle_PassiveAbility_Real_DefenceDownRatio</a>"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                  "displayLines": "MDF_PropertyValue2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue2"
                  ]
                },
                "MDF_PropertyValue3": {
                  "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                  "displayLines": "MDF_PropertyValue3",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue3"
                  ]
                },
                "MDF_Count": {
                  "operator": "Variables[0] (MDF_Count) || RETURN",
                  "displayLines": "MDF_Count",
                  "constants": [],
                  "variables": [
                    "MDF_Count"
                  ]
                },
                "MDF_DefenceAddedRatio2": {
                  "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                  "displayLines": "MDF_DefenceAddedRatio2",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceAddedRatio2"
                  ]
                }
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
                  "name": "Update Modifier Description",
                  "popUpText": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio2</span>."
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
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"94548241\">Advanced_Sparkle_PassiveAbility_Real_DefenceDownRatio</a>",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
          "eventTrigger": "Attack DMG End [Owner]"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]"
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]"
        }
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue2",
        "MDF_PropertyValue3",
        "MDF_DefenceAddedRatio2"
      ],
      "latentQueue": [],
      "description": "The DMG taken by all enemies increases.",
      "type": "Buff",
      "statusName": "Figment",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1471334562\">Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
              "displayLines": "MDF_PropertyValue2",
              "constants": [],
              "variables": [
                "MDF_PropertyValue2"
              ]
            },
            "MDF_PropertyValue3": {
              "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
              "displayLines": "MDF_PropertyValue3",
              "constants": [],
              "variables": [
                "MDF_PropertyValue3"
              ]
            },
            "MDF_DefenceAddedRatio2": {
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__208852691\">Advanced_Sparkle_Eidolon6_CritDmgAddedRatio01</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>",
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
        "MDF_PropertyValueBase2",
        "MDF_AllDamageTypePenetrate"
      ],
      "latentQueue": [
        "MDF_PassiveLayer02"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
              "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>"
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
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Nocturne",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypePenetrate</span>."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypePenetrateAll) || RETURN",
                    "displayLines": "MDF_AllDamageTypePenetrateAll",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypePenetrateAll"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValueConvert",
        "MDF_PropertyValueBase",
        "MDF_AllDamageTypePenetrate"
      ],
      "latentQueue": [],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Dreamdiver"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2103842601\">Advanced_Sparkle_Eidolon4_CD</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
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
                  "popUpText": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>, and additionally enhances each stack of the Vulnerability effect provided by Sparkle's Talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
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
        "MDF_PassiveLayer02"
      ],
      "description": "Each stack of the Vulnerability effect provided by Sparkle's Talent additionally increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Cipher",
      "statusName": "Cipher"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1010036084\">Advanced_Sparkle_PointB2_FreeAbility</a>[<span class=\"descriptionNumberColor\">Artificial Flower</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill02"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill02"
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
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill02"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The next use of Skill does not consume any Skill Points.",
      "type": "Buff",
      "statusName": "Artificial Flower"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
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
                      "target": "{{Current Turn Owner}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "type": "Character"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Skill Points",
                  "variableName": "MDF_CurrentBP"
                },
                {
                  "name": "Define Custom Variable with Skill Points",
                  "variableName": "MDF_BPDirty"
                },
                {
                  "name": "Define Custom Variable with Skill Point Max",
                  "variableName": "MDF_BPMax"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPGap1",
                  "value": {
                    "operator": "Variables[0] (MDF_BPMax) || Variables[1] (MDF_CurrentBP) || SUB || Variables[2] (MDF_BPDirty) || SUB || RETURN",
                    "displayLines": "((MDF_BPMax - MDF_CurrentBP) - MDF_BPDirty)",
                    "constants": [],
                    "variables": [
                      "MDF_BPMax",
                      "MDF_CurrentBP",
                      "MDF_BPDirty"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MIN) || Variables[1] (MDF_Layer) || Variables[2] (MDF_BPGap1) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_Layer, MDF_BPGap1)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "MDF_Layer",
                      "MDF_BPGap1"
                    ]
                  },
                  "Event": [
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
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
                          "addStacksPerTrigger": -1
                        },
                        {
                          "name": "Skill Points Modification",
                          "adjustmentValue": 1,
                          "adjustmentType": "+"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Skill Points Modification",
                          "adjustmentValue": 1,
                          "adjustmentType": "+"
                        },
                        "Modifier Deletes Itself"
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
        "MDF_PassiveLayer02"
      ],
      "description": "After an ally's turn ends, if the current Skill Points are not at maximum, immediately recovers Skill Points for the team.",
      "type": "Buff",
      "statusName": "The Hero with a Thousand Faces"
    }
  ],
  "references": []
}