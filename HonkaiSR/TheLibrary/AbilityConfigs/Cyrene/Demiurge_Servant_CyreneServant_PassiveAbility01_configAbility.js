const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_PassiveAbility01",
  "childAbilityList": [
    "Demiurge_Servant_CyreneServant_PassiveAbility01",
    "Demiurge_Servant_CyreneServant_EnterBattle"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"684175961\">Memosprite_CyreneServant_Energy</a>[<span class=\"descriptionNumberColor\">Story</span>]",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1085868311\">Memosprite_CyreneServant_AmazingBonus</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"577014273\">Cyrene_UITop</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-335355360\">Memosprite_CyreneServant_PassiveAbility01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-839103023\">Memosprite_CyreneServant_PreShowForDanHengPT</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1827457473\">Memosprite_CyreneServant_PreShowForMydeimos</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1827457473\">Memosprite_CyreneServant_PreShowForMydeimos</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Character ID",
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "characterID": "1404 (Mydei)"
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1763336434\">Mydeimos_Transfer</a>[<span class=\"descriptionNumberColor\">Vendetta</span>]",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": -1
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-839103023\">Memosprite_CyreneServant_PreShowForDanHengPT</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Souldragon}}"
        },
        "conditions": {
          "name": "Character ID",
          "target": {
            "name": "Target Name",
            "target": "{{Player's Aim Target List}}"
          },
          "characterID": "1414 (Dan Heng • Permansor Terrae)"
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": -1
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__848098524\">Memosprite_CyreneServant_Ability01CostCaster</a>",
      "stackType": "ReplaceByCaster",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CurAmazingCount",
          "scope": "ContextOwner"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__340897413\">Memosprite_CyreneServant_PassiveAbility01_HPIncrease</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-335355360\">Memosprite_CyreneServant_PassiveAbility01</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Endurance"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Memosprite"
        ],
        "conditions": {
          "name": "Character ID",
          "target": {
            "name": "Target Name",
            "target": "{{Player's Aim Target List}}"
          },
          "characterID": "1405 (Anaxa)"
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      },
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}+{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"340897413\">Memosprite_CyreneServant_PassiveAbility01_HPIncrease</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.24"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-255863654\">HPSync</a>"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "statValue": 0
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Cyrene_Summon",
              "state": false
            },
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
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
                  "target": "{{Caster's Summoner}}"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-255863654\">HPSync</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill01"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}.[[removeMemosprite]]"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Target is Pathstrider",
                            "path": [
                              "Remembrance"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      ]
                    },
                    "compareType": ">=",
                    "value2": 4
                  }
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "TutorialSwitch",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "value": 2,
                  "variableName": "TutorialSwitch"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill01"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill01Count",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-156616153\">Memosprite_CyreneServant_Eidolon4_Count</a>[<span class=\"descriptionNumberColor\">Please Write On, With a Smile</span>]",
                      "valuePerStack": {
                        "MDF_Count": {
                          "displayLines": "Skill01Count"
                        },
                        "MDF_Damage": {
                          "displayLines": "(Skill01Count * 0.06)"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Decrement Buff Durations",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"339481432\">Memosprite_CyreneServant_Ability02Disable</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "CurAmazingCount"
                    }
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "12"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill02",
                    "useActive": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "#CL_MirrorSetupFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextOwner"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"344221092\">Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Action Owner}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#CL_HasBeenInVeiwMode",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "#CL_HasBeenInVeiwMode"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Update Target ViewMode(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Targets Entering Selection}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "#CL_HasBeenInVeiwMode"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Targets Entering Selection}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#CL_HasBeenInVeiwMode",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "#CL_HasBeenInVeiwMode"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CurSpecialSP",
          "scope": "ContextOwner"
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