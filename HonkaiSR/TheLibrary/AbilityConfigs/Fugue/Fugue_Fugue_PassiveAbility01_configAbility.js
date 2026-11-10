const configAbility = {
  "fileName": "Fugue_Fugue_PassiveAbility01",
  "childAbilityList": [
    "Fugue_Fugue_PassiveAbility01"
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
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 3,
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-825933762\">Fugue_PassiveAbility_OnListenBreakModifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"873674204\">Fugue_StancePreview</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Verdantia Renaissance"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1113685163\">Fugue_PointB1_Listen</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sylvan Enigma"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-880987638\">Fugue_PointB2_BpBack</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1748420043\">Fugue_PointB2_Sub</a>[<span class=\"descriptionNumberColor\">Sylvan Enigma</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio_BreakDamageSelf": {
              "displayLines": "0.3"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Phecda Primordia"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"32106889\">Fugue_PointB3_Listen</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-18674978\">Fugue_Eidolon2_Listen</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"915939939\">Fugue_Eidolon2_PreShow</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1045772852\">Fugue_Eidolon6</a>[<span class=\"descriptionNumberColor\">Clairvoyance of Boom and Doom</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1045772852\">Fugue_Eidolon6</a>[<span class=\"descriptionNumberColor\">Clairvoyance of Boom and Doom</span>]",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Weakness Break Efficiency Boost",
      "statusName": "Clairvoyance of Boom and Doom",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-18674978\">Fugue_Eidolon2_Listen</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "advanceType": "Advance",
                  "multiAdd": "-0.24"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "3"
              },
              "isFixed": "* ERR"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__281541797\">Fugue_PointB3_Sub03</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "displayLines": "MDF_Sub3_PointB3_BreakDamageValue"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}} - {{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                  "stackLimit": {
                    "displayLines": "(MDF_Sub3_MaxLayer + 1)"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "MDF_Sub3_MaxPropertyRatio"
                    }
                  },
                  "addStacksPerTrigger": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}} - {{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
                  "duration": {
                    "displayLines": "MDF_Sub3_LifeTime"
                  },
                  "stackLimit": {
                    "displayLines": "MDF_Sub3_MaxLayer"
                  },
                  "valuePerStack": {
                    "MDF_BreakDamageAdd": {
                      "displayLines": "MDF_Sub3_MaxPropertyRatio"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}} - {{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                  "stackLimit": {
                    "displayLines": "(MDF_Sub3_MaxLayer + 1)"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "MDF_Sub3_PropertyRatio"
                    }
                  },
                  "addStacksPerTrigger": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}} - {{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
                  "duration": {
                    "displayLines": "MDF_Sub3_LifeTime"
                  },
                  "stackLimit": {
                    "displayLines": "MDF_Sub3_MaxLayer"
                  },
                  "valuePerStack": {
                    "MDF_BreakDamageAdd": {
                      "displayLines": "MDF_Sub3_PropertyRatio"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__264764178\">Fugue_PointB3_Sub02</a>",
      "stackType": "Replace",
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "execute": [
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
              "modifierName": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_PropertyRatio * (MDF_Layer - 1))"
              },
              "variableName": "MDF_PropertyRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyRatio"
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
                "modifier": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_PropertyRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "livingState": "Mask_AliveOrRevivable",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "valueType": "Layer",
                      "variableName": "Layer_Count",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                      "addStacksPerTrigger": {
                        "displayLines": "(1 - Layer_Count)"
                      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_BreakDamageAdd"
      ],
      "description": "Each stack increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. This effect can stack up to <span class=\"descriptionNumberColor\">#SkillTree_PointB3_P3_Layer</span> time(s).",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Phecda Primordia",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__32106889\">Fugue_PointB3_Listen</a>",
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
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                  "stackLimit": {
                    "displayLines": "(2 + 1)"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": 0,
                    "MDF_Layer": 0
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"281541797\">Fugue_PointB3_Sub03</a>",
                  "valuePerStack": {
                    "MDF_Sub3_MaxLayer": {
                      "displayLines": "2"
                    },
                    "MDF_Sub3_LifeTime": {
                      "displayLines": "2"
                    },
                    "MDF_Sub3_PropertyRatio": {
                      "displayLines": "0.06"
                    },
                    "MDF_Sub3_MaxPropertyRatio": {
                      "displayLines": "(0.06 + 0.12)"
                    },
                    "MDF_Sub3_PointB3_BreakDamageValue": {
                      "displayLines": "2.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
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
                "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                  "stackLimit": {
                    "displayLines": "(2 + 1)"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": 0,
                    "MDF_Layer": 0
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"281541797\">Fugue_PointB3_Sub03</a>",
              "valuePerStack": {
                "MDF_Sub3_MaxLayer": {
                  "displayLines": "2"
                },
                "MDF_Sub3_LifeTime": {
                  "displayLines": "2"
                },
                "MDF_Sub3_PropertyRatio": {
                  "displayLines": "0.06"
                },
                "MDF_Sub3_MaxPropertyRatio": {
                  "displayLines": "(0.06 + 0.12)"
                },
                "MDF_Sub3_PointB3_BreakDamageValue": {
                  "displayLines": "2.2"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1748420043\">Fugue_PointB2_Sub</a>[<span class=\"descriptionNumberColor\">Sylvan Enigma</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyRatio_BreakDamageSelf"
      ],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio_BreakDamageSelf</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Sylvan Enigma",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyRatio_BreakDamageSelf"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-880987638\">Fugue_PointB2_BpBack</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "displayLines": "1"
                  },
                  "adjustmentType": "+"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1523669098\">Fugue_PointB1_Bonus_Preshow</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "conditions": {
          "name": "Has Toughness Reduction Preview",
          "abilityCaster": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "MDF_PropertyValue2"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1113685163\">Fugue_PointB1_Listen</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1523669098\">Fugue_PointB1_Bonus_Preshow</a>",
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "displayLines": "0.15"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1523669098\">Fugue_PointB1_Bonus_Preshow</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "displayLines": "0.15"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": "0.15"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-825933762\">Fugue_PassiveAbility_OnListenBreakModifier</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2001305717\">Fugue_PassiveAbility_ListenBreakDamage</a>",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PassiveDamage2": {
              "displayLines": "1"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1774454693\">Fugue_RedStance</a>[<span class=\"descriptionNumberColor\">Cloudflame Luster</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PassiveDamage2": {
              "displayLines": "1"
            },
            "MDF_RedStanceRatio": {
              "displayLines": "0.4"
            },
            "MDF_MinStance": 30
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-74108309\">Fugue_PassiveAbility_ElementDamage</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_SuperBreakDamagePercentage": 0
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}