const configAbility = {
  "fileName": "1492485802_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-95096585\">ADV_StageAbility_MazeStandard_EnterBattle_Avatar</a>",
      "counter": 1,
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-324972026\">ADV_Modifier_MazeStandard_SwitchHand_Fear</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-906999006\">ADV_Modifier_MazeStandard_WolfBro_GetGun</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1687506066\">ADV_Modifier_MazeStandard_DinosaurRun_SpeedDown</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-835439013\">ADV_Modifier_MazeStandard_DinosaurRun_SpeedUP</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2074263955\">ADV_Modifier_MazeStandard_BombRobotATKHit</a>",
      "onCreation": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-652170808\">ADV_Modifier_MazeStandard_LateDead</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Player}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2000848006\">ADV_Modifier_MazeStandard_HitCount</a>"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-861393237\">ADV_Modifier_MazeStandard_AetherMonster</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-396654585\">ADV_Modifier_MazeStandard_MiniHero_NoBattle</a>",
      "modifierFlags": [
        "BeHitWithoutBattle"
      ],
      "onBeingAttacked": [
        "Set attacked targets without battle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__258602919\">ADV_Modifier_MazeStandard_Limao_HitNoBattle</a>",
      "onBeingAttacked": [
        "Set attacked targets without battle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__98695020\">ADV_Modifier_MazeStandard_MiniHero_HitToDie</a>",
      "onBeingAttacked": [
        "Set attacked targets without battle",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1983240383\">ADV_Modifier_MiniHero_LateDead</a>"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1259939804\">ADV_Modifier_MazeStandard_HitToDie</a>",
      "onBeingAttacked": [
        "Set attacked targets without battle",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-652170808\">ADV_Modifier_MazeStandard_LateDead</a>"
        },
        "Misc overworld eventstuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-925048754\">ADV_Modifier_MazeStandard_HitNoBattle</a>",
      "onRemoval": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Enemy NPCs}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1168684674\">ADV_Modifier_MazeStandard_PlayDead</a>"
        }
      ],
      "onAttack": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            "Set attacked targets without battle"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1168684674\">ADV_Modifier_MazeStandard_PlayDead</a>",
      "duration": 4,
      "onRemoval": [
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff"
      ],
      "onStack": [
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__308967017\">ADV_Modifier_MiniHero_PlayDead</a>",
      "stackType": "Replace",
      "onRemoval": [
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff"
      ],
      "onStack": [
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff",
        "Misc overworld eventstuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1983240383\">ADV_Modifier_MiniHero_LateDead</a>",
      "duration": 0.1,
      "onRemoval": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"308967017\">ADV_Modifier_MiniHero_PlayDead</a>"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-652170808\">ADV_Modifier_MazeStandard_LateDead</a>",
      "duration": 0.1,
      "onRemoval": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1168684674\">ADV_Modifier_MazeStandard_PlayDead</a>"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1165550133\">ADV_Modifier_MazeRogue_Dead</a>",
      "onAttack": [
        "Overworld Mark Target for Death(which we don't care about)"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1584595659\">ADV_Modifier_MazeStandard_DeDead</a>",
      "onRemoval": [
        "Overworld Mark Target for Death(which we don't care about)"
      ],
      "onBeingAttacked": [
        "Overworld Mark Target for Death(which we don't care about)"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__933709362\">ADV_Modifier_MazeStandard_WolfBro_MonsterHitPlayer</a>",
      "onAttack": [
        "Misc overworld eventstuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__882992060\">ADV_Modifier_MazeStandard_Dead</a>",
      "onAttack": [
        "Overworld Mark Target for Death(which we don't care about)"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__595646804\">ADV_StageAbility_MazeStandard_SneakEffect</a>",
      "modifierFlags": [
        "Sneak"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__50450718\">ADV_Modifier_MazeStandard_Sneak</a>",
      "modifierFlags": [
        "Sneak"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1108219219\">ADV_Modifier_MazeStandard_Stealth</a>",
      "modifierFlags": [
        "Stealth"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2006925697\">ADV_Modifier_MazeStandard_SpeedUp_Sub</a>",
      "counter": 1,
      "stackType": "Replace",
      "duration": 15
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__791150692\">ADV_Modifier_MazeStandard_SpeedUp</a>",
      "stackType": "Replace",
      "duration": 15,
      "onRemoval": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2006925697\">ADV_Modifier_MazeStandard_SpeedUp_Sub</a>"
        }
      ],
      "onStack": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2006925697\">ADV_Modifier_MazeStandard_SpeedUp_Sub</a>"
        }
      ],
      "onChangeTeamLead": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2006925697\">ADV_Modifier_MazeStandard_SpeedUp_Sub</a>"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__551123847\">ADV_Modifier_MazeStandard_EnterBattleAdvantage</a>",
      "counter": 1,
      "modifierFlags": [
        "EnterBattleAdvantage"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "1000121(StageAbility_MazeCommon_EnterBattle_CheckTeamLeader)"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1578555264\">ADV_StageAbility_MazeStandard_ListenEnterBattle_DisAdventage</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": "Check Posture Type",
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "1000102(StageAbility_MazeCommon_EnterBattle_Monster)"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000117(StageAbility_MazeCommon_EnterBattle_Imaginary)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000117(StageAbility_MazeCommon_EnterBattle_Imaginary)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000116(StageAbility_MazeCommon_EnterBattle_Quantum)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000116(StageAbility_MazeCommon_EnterBattle_Quantum)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000115(StageAbility_MazeCommon_EnterBattle_Wind)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000115(StageAbility_MazeCommon_EnterBattle_Wind)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000114(StageAbility_MazeCommon_EnterBattle_Thunder)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000114(StageAbility_MazeCommon_EnterBattle_Thunder)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000113(StageAbility_MazeCommon_EnterBattle_Ice)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000113(StageAbility_MazeCommon_EnterBattle_Ice)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000112(StageAbility_MazeCommon_EnterBattle_Fire)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000112(StageAbility_MazeCommon_EnterBattle_Fire)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>",
      "onBattlePrep": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Check Posture Type",
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Technique[?]"
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
                  "modifier": null,
                  "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                  "valuePerStack": {
                    "AbilityIndex": 2
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Adventure Lineup}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000119(StageAbility_MazeCommon_EnterBattle_IgnoreWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000111(StageAbility_MazeCommon_EnterBattle_Physical)",
                              "valuePerStack": {
                                "AbilityIndex": 1
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000111(StageAbility_MazeCommon_EnterBattle_Physical)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
                  "conditions": "Check Posture Type",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": null,
                          "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                          "valuePerStack": {
                            "AbilityIndex": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Technique[?]"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Type",
                            "skillType": "Custom Ability"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": null,
                              "ID": "1000120(StageAbility_MazeCommon_EnterBattle_NoWeakness)",
                              "valuePerStack": {
                                "AbilityIndex": 2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1288335137\">ADV_StageAbility_MazeStandard_EnterBattle_Imaginary</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1735918949\">ADV_StageAbility_MazeStandard_EnterBattle_Quantum</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1056955588\">ADV_StageAbility_MazeStandard_EnterBattle_Wind</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__601464140\">ADV_StageAbility_MazeStandard_EnterBattle_Thunder</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-118967539\">ADV_StageAbility_MazeStandard_EnterBattle_Ice</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-519655590\">ADV_StageAbility_MazeStandard_EnterBattle_Fire</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-210144997\">ADV_StageAbility_MazeStandard_EnterBattle_Physical</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2120825013\">ADV_StageAbility_MazeStandard_EnterBattle_IgnoreWeakness</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1954110967\">ADV_StageAbility_MazeStandard_EnterBattle_PlayerNoWeakness</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1542998344\">ADV_StageAbility_MazeStandard_EnterBattle_Monster</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-568500849\">ADV_StageAbility_MazeStandard_EnterBattle_Player</a>",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-287403589\">ADV_StageAbility_MazeStandard_ChallengeBoss_Empty</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2102146338\">ADV_StageAbility_MazeStandard_Empty2</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2047265880\">ADV_StageAbility_MazeStandard_Empty</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__671324861\">ADV_StageAbility_MazeStandard_MultiDamage</a>"
    }
  ],
  "references": []
}