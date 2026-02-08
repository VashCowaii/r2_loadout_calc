const configAbility = {
  "fileName": "DanHeng_DanHeng_PassiveAbility01",
  "childAbilityList": [
    "DanHeng_DanHeng_PassiveAbility01",
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Part01",
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02",
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Camera"
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
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Faster Than Light"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1621594543\">AbilityPreShowModifier</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-993379801\">AbilityPreShowModifier2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1693166190\">DanHeng_CheckSelfBeingTarget</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-997779121\">DanHeng_Passive_BeginTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1693166190\">DanHeng_CheckSelfBeingTarget</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
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
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Memosprite"
                      }
                    ]
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1284468000\">DanHeng_Passive_BeginTargetEnhanceCD</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Part Of",
                      "of": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "mustBeAlive2": true
                    }
                  },
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Sub-Targets}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                  "valuePerStack": {
                    "DanHeng_PassivePene": {
                      "operator": "Variables[0] (0.36) || RETURN",
                      "displayLines": "0.36",
                      "constants": [],
                      "variables": [
                        0.36
                      ]
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 1,
                  "cooldown": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-997779121\">DanHeng_Passive_BeginTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1284468000\">DanHeng_Passive_BeginTargetEnhanceCD</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Part Of",
                      "of": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "mustBeAlive2": true
                    }
                  },
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                  "valuePerStack": {
                    "DanHeng_PassivePene": {
                      "operator": "Variables[0] (0.36) || RETURN",
                      "displayLines": "0.36",
                      "constants": [],
                      "variables": [
                        0.36
                      ]
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 1,
                  "cooldown": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-997779121\">DanHeng_Passive_BeginTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1284468000\">DanHeng_Passive_BeginTargetEnhanceCD</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Part Of",
                      "of": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "mustBeAlive2": true
                    }
                  },
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                  "valuePerStack": {
                    "DanHeng_PassivePene": {
                      "operator": "Variables[0] (0.36) || RETURN",
                      "displayLines": "0.36",
                      "constants": [],
                      "variables": [
                        0.36
                      ]
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 1,
                  "cooldown": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-997779121\">DanHeng_Passive_BeginTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-993379801\">AbilityPreShowModifier2</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1147035290\">DanHeng_BPAbility_SpeedDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "-0.12(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1621594543\">AbilityPreShowModifier</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1050755614\">DanHeng_PointB2_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.2(SPD Change)"
        }
      }
    }
  ]
}