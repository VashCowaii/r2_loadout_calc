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
      "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1539174332\">Feixiao_Ultramode_StanceBreakPreshow</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1192517657\">M_Feixiao_UltraTarget_Visual_Stun</a>"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169885953\">M_Feixiao_UltraTarget_Visual_Confine</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"176878499\">M_Feixiao_UltraTarget_Mark</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"385618061\">M_Feixiao_UltraTarget_FadeInFlag</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-233737306\">M_Feixiao_Ability03_ForceStance</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"922102305\">M_Feixiao_Ability03_StanceAddedPreshow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__802330220\">M_Feixiao_BreakableElite_Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1999108381\">M_Feixiao_BreakableElite_Listener</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1135796130\">Feixiao_RefreshUltraFrame</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__224032294\">M_Feixiao_BreakableEliteMarker</a>",
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
                    "team": "Enemy Team"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1999108381\">M_Feixiao_BreakableElite_Listener</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1999108381\">M_Feixiao_BreakableElite_Listener</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__922102305\">M_Feixiao_Ability03_StanceAddedPreshow</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-233737306\">M_Feixiao_Ability03_ForceStance</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
          "invertCondition": true
        },
        "toughnessForcedReductionPreview": 1,
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__176878499\">M_Feixiao_UltraTarget_Mark</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"385618061\">M_Feixiao_UltraTarget_FadeInFlag</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"965737321\">M_Feixiao_UltraTarget_FinalHitFlag</a>"
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
        "dependancyName": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__550698929\">M_Feixiao_UltraTarget</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1169885953\">M_Feixiao_UltraTarget_Visual_Confine</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1192517657\">M_Feixiao_UltraTarget_Visual_Stun</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
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