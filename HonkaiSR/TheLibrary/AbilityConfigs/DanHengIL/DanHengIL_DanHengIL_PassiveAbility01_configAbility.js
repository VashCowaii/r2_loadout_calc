const configAbility = {
  "fileName": "DanHengIL_DanHengIL_PassiveAbility01",
  "childAbilityList": [
    "DanHengIL_DanHengIL_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "BPExChange",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Ability03PreShowModifier"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "DanHengIL_PassiveModifier"
    },
    {
      "name": "Modify Skill-Point Extras",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "function": "Set",
      "value": 0,
      "silentChange": true
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "False",
      "bar#": 6,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillRank_Rank04_LifeTime",
          "value": 2
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillRank_Rank04_LifeTime",
          "value": 1
        }
      ]
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
          "modifier": "DanHengIL_Eidolon6"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
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
              "variableName": "MDF_Layer",
              "modifierName": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
      "type": "Buff",
      "statusName": "Righteous Heart",
      "duration": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_PassiveModifier",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "BPNeed",
              "value": {
                "operator": "Variables[0] (EXSkill01) || RETURN",
                "displayLines": "EXSkill01",
                "constants": [],
                "variables": [
                  "EXSkill01"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurrentSkillPoints",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (BPNeed) || RETURN",
                  "displayLines": "BPNeed",
                  "constants": [],
                  "variables": [
                    "BPNeed"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_BPDisable"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_BPDisable"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Controlled Action [Owner]: End"
        },
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
                  "name": "Define Custom Variable",
                  "variableName": "AddMaxLayer",
                  "value": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AddLayer",
                  "value": 2
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_BPCost_1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_BPCost_2"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_BPCost_3"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EXSkill01",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End"
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
                    "name": "Trace Activated",
                    "conditionList": "Star Veil"
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
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Update Displayed Energy Bar"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
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
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Flag_AttackCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 99,
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
                  "duration": 1,
                  "stackLimit": {
                    "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                    "displayLines": "(6 + AddMaxLayer)",
                    "constants": [],
                    "variables": [
                      6,
                      "AddMaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                      "displayLines": "(6 + AddMaxLayer)",
                      "constants": [],
                      "variables": [
                        6,
                        "AddMaxLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (AddLayer) || RETURN",
                    "displayLines": "AddLayer",
                    "constants": [],
                    "variables": [
                      "AddLayer"
                    ]
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
                  "duration": 1,
                  "stackLimit": {
                    "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                    "displayLines": "(6 + AddMaxLayer)",
                    "constants": [],
                    "variables": [
                      6,
                      "AddMaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                      "displayLines": "(6 + AddMaxLayer)",
                      "constants": [],
                      "variables": [
                        6,
                        "AddMaxLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (AddLayer) || RETURN",
                    "displayLines": "AddLayer",
                    "constants": [],
                    "variables": [
                      "AddLayer"
                    ]
                  }
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
      "for": "Ability03PreShowModifier",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": -1
        }
      }
    }
  ]
}