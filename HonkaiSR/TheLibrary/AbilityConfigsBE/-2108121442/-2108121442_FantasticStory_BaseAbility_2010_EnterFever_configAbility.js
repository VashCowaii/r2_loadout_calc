const configAbility = {
  "fileName": "-2108121442_FantasticStory_BaseAbility_2010_EnterFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2010_EnterFever_P1_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || RETURN",
        "displayLines": "ADF_1_Get",
        "constants": [],
        "variables": [
          "ADF_1_Get"
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
      "variableName": "DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_2_Get) || RETURN",
        "displayLines": "ADF_2_Get",
        "constants": [],
        "variables": [
          "ADF_2_Get"
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
      "variableName": "DV_FantasticStory_BaseAbility_2010_EnterFever_P3_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_3_Get) || RETURN",
        "displayLines": "ADF_3_Get",
        "constants": [],
        "variables": [
          "ADF_3_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_EnterFever",
      "stackType": "ReplaceByCaster",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura"
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                  "valuePerStack": {
                    "DV_Ratio_Get": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio"
                      ]
                    }
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura"
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_ForShow[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
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
                "name": "AND",
                "conditionList": [
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
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Attack Targets}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Active: Fast-Forward Animations"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is in Timeline Execution",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "DV_PerformanceDelay",
                              "value": 0.3
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "DV_PerformanceDelay",
                              "value": 0.2
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is in Timeline Execution",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "DV_PerformanceDelay",
                              "value": 0.5
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "DV_PerformanceDelay",
                              "value": 0.3
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Attack Targets}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 5,
                  "ifTargetFound": [
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
                          "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2010_BeforeFever_P1_Ratio) || MUL || RETURN",
                          "displayLines": "(BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2010_BeforeFever_P1_Ratio)",
                          "constants": [],
                          "variables": [
                            "BattleEvent_BaseHP",
                            "DV_FantasticStory_BaseAbility_2010_BeforeFever_P1_Ratio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2010_EnterFever_P3_Ratio) || MUL || RETURN",
                          "displayLines": "(BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2010_EnterFever_P3_Ratio)",
                          "constants": [],
                          "variables": [
                            "BattleEvent_BaseHP",
                            "DV_FantasticStory_BaseAbility_2010_EnterFever_P3_Ratio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                  "valuePerStack": {
                    "DV_Ratio_Get": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2010_EnterFever_P2_Ratio"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_ForShow[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                }
              ]
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
                "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_ForShow[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                }
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