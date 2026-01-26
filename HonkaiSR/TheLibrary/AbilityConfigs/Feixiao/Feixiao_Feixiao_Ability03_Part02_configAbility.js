const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Feixiao_Ultramode"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "M_Feixiao_UltraTarget"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "First_Break_Effect",
          "value": 0
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Show",
          "abilityName": "Ultimate"
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Hide",
          "abilityName": "Ultimate",
          "subAbilityIndex": 1
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Feixiao_Ultramode_StanceBreakPreshow"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "First_Break_Effect",
          "value": 1
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Hide",
          "abilityName": "Ultimate"
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Show",
          "abilityName": "Ultimate",
          "subAbilityIndex": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "MuteHitFly"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget_Visual_Stun"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget_Visual_Confine"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "M_Feixiao_UltraTarget_Mark"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        }
      ],
      "failed": [
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)",
          "subAbilityIndex": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "M_Feixiao_UltraTarget_FadeInFlag"
    },
    {
      "name": "Trigger: Ability End",
      "skipAttackSettle": true
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Feixiao_Ability03_ForceStance"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Feixiao_Ability03_StanceAddedPreshow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Feixiao_BreakableElite_Mark"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Feixiao_BreakableElite_Listener",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_RefreshUltraFrame"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_RefreshUltraFrame"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_RefreshUltraFrame"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_RefreshUltraFrame"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_RefreshUltraFrame"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_RefreshUltraFrame",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_StanceBreakAddedRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboAttackCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (6) || RETURN",
                      "displayLines": "6",
                      "constants": [],
                      "variables": [
                        6
                      ]
                    }
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "MuteBreak",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Target__Toughness",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (ComboAttackCount) || Variables[1] (MDF_BaseStance) || MUL || Constants[0] (1) || Variables[2] (MDF_StanceBreakAddedRatio) || ADD || MUL || RETURN",
                      "displayLines": "((ComboAttackCount * MDF_BaseStance) * (1 + MDF_StanceBreakAddedRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ComboAttackCount",
                        "MDF_BaseStance",
                        "MDF_StanceBreakAddedRatio"
                      ]
                    }
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
                  "modifier": "M_Feixiao_BreakableElite_Mark"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Feixiao_BreakableElite_Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Feixiao_BreakableEliteMarker",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                    "team": "TeamDark"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
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
                  "modifier": "M_Feixiao_BreakableElite_Listener",
                  "valuePerStack": {
                    "MDF_BaseStance": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 99,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "M_Feixiao_BreakableElite_Listener",
                  "valuePerStack": {
                    "MDF_BaseStance": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
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
                "name": "Modifier Was",
                "modifier": "M_Feixiao_BreakableElite_Mark"
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
                "modifier": "M_Feixiao_BreakableElite_Mark"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Feixiao_BreakableElite_Mark"
                    },
                    "invertCondition": true
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
      "for": "M_Feixiao_Ability03_StanceAddedPreshow",
      "stackData": [],
      "latentQueue": [
        "First_Break_Effect"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Feixiao_Ultramode",
              "invertCondition": true
            },
            {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "Break",
              "invertCondition": true
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Feixiao_Ability03_ForceStance",
      "stackData": [],
      "latentQueue": [
        "First_Break_Effect"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Feixiao_Ultramode",
          "invertCondition": true
        },
        "toughnessForcedReductionPreview": 1,
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Feixiao_UltraTarget_Mark",
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
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "M_Feixiao_UltraTarget_FadeInFlag"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "trigger": "State_FadeIn"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "M_Feixiao_UltraTarget_CutFlag"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "trigger": "State_Cut_2"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "M_Feixiao_UltraTarget_FinalHitFlag"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "trigger": "State_FadeOut"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "First_Break_Effect"
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "M_Feixiao_UltraTarget"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Feixiao_UltraTarget",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_Visual_Confine"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_Visual_Stun"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Feixiao_Ultramode",
                "invertCondition": true
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
    }
  ]
}