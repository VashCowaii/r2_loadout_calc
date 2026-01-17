const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Animator Variable",
        "paramType": "Bool",
        "paramName": "IsRareMilk",
        "compareType": "=",
        "compareValue": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Mar_7th_10_AchievementFlag"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Mar_7th_10_Ability02_Master_SpeedUp[<span class=\"descriptionNumberColor\">Master, It's Tea Time!</span>]",
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        }
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Mar_7th_10_AbilityPreShowModifier_Self"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Mar_7th_10_AbilityPreShowModifier_Target"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Mar_7th_10_SpecialMark_Adder"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_SpecialMark_2",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
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
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Turn Owner}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
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
                        "target": "{{Modifier Holder}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
                      ],
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
                      ],
                      "trigger": "State_Normal"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_SpecialMark_1",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
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
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Turn Owner}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
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
                        "target": "{{Modifier Holder}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
                      ],
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
                      ],
                      "trigger": "State_Normal"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_SpecialMark_Adder",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Mar_7th_10_SpecialMark_1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Harmony",
                          "Nihility",
                          "Preservation",
                          "Abundance"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Mar_7th_10_SpecialMark_2"
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Mar_7th_10_SpecialMark_1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Harmony",
                          "Nihility",
                          "Preservation",
                          "Abundance"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Mar_7th_10_SpecialMark_2"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": 999999
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_AbilityPreShowModifier_Target",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Mar_7th_10_Ability02_Master_SpeedUp[<span class=\"descriptionNumberColor\">Master, It's Tea Time!</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.1(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_AbilityPreShowModifier_Self",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Mar_7th_10_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]",
              "invertCondition": true
            },
            {
              "name": "Eidolon Activated",
              "eidolon": 1
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.1(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_AchievementFlag",
      "stackData": [],
      "latentQueue": []
    }
  ]
}