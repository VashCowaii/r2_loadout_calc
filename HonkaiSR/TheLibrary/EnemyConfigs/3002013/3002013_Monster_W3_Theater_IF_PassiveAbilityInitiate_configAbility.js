const configAbility = {
  "fileName": "3002013_Monster_W3_Theater_IF_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1754146880\">Enemy_W3_Theater_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1099674866\">Enemy_W3_Theather_Initiate</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1877150008\">Enemy_W3_Theater_IF_ImmuneDebuff</a>"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "TheaterCore",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W3_Theater_IF_Insert_RestartPhase2"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"772761347\">Enemy_W3_Theater_ViewModeListener</a>"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "TheaterCore",
      "state": false
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1408875788\">W3_Theater_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"629494345\">Enemy_W3_Theater_IF_HintToastController</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-781324174\">Enemy_W3_Theater_IF_AbilityEX01</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]",
      "valuePerStack": {
        "MDF_DamageStanceValue_Dinosaur": {
          "operator": "Variables[0] (UnusedUnderThisBase_255) || RETURN",
          "displayLines": "UnusedUnderThisBase_255",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_255"
          ]
        },
        "MDF_DamageStanceValue_TV": {
          "operator": "Variables[0] (UnusedUnderThisBase_254) || RETURN",
          "displayLines": "UnusedUnderThisBase_254",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_254"
          ]
        },
        "MDF_DamageStanceValue_Mecha": {
          "operator": "Variables[0] (UnusedUnderThisBase_253) || RETURN",
          "displayLines": "UnusedUnderThisBase_253",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_253"
          ]
        },
        "MDF_DamageStanceValue_Clock": {
          "operator": "Variables[0] (UnusedUnderThisBase_252) || RETURN",
          "displayLines": "UnusedUnderThisBase_252",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_252"
          ]
        },
        "MDF_DamageStanceValue_2": {
          "operator": "Variables[0] (UnusedUnderThisBase_251) || RETURN",
          "displayLines": "UnusedUnderThisBase_251",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_251"
          ]
        },
        "MDF_DamageStanceValue_All": {
          "operator": "Variables[0] (UnusedUnderThisBase_250) || RETURN",
          "displayLines": "UnusedUnderThisBase_250",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_250"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-781324174\">Enemy_W3_Theater_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1623952916\">Standard_StrongChallengeEX_SuperArmorController_Multi</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_98) || RETURN",
              "displayLines": "UnusedUnderThisBase_98",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_98"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_97) || RETURN",
              "displayLines": "UnusedUnderThisBase_97",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_97"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
              "displayLines": "UnusedUnderThisBase_96",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_96"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_92) || RETURN",
              "displayLines": "UnusedUnderThisBase_92",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_92"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_93) || RETURN",
              "displayLines": "UnusedUnderThisBase_93",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_93"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_94) || RETURN",
              "displayLines": "UnusedUnderThisBase_94",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_94"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_95) || RETURN",
              "displayLines": "UnusedUnderThisBase_95",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_95"
              ]
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1754146880\">Enemy_W3_Theater_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__114"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "silent": true
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Theater_IF_PassiveAbility01_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__772761347\">Enemy_W3_Theater_ViewModeListener</a>",
      "execute": [
        {
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1948547262\">Enemy_W3_Theater_TV2Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1990801725\">Enemy_W3_Theater_TV1Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1099674866\">Enemy_W3_Theather_Initiate</a>",
      "modifierFlags": [
        "MuteSpeed",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": true
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"824631784\">Enemy_W3_Theater_MainStoryMark</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Trigger: Break",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isRemove": true
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                }
              ]
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Battle Event ID",
                      "ID": 20010,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_246) || RETURN",
                "displayLines": "UnusedUnderThisBase_246",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_246"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_247) || RETURN",
                "displayLines": "UnusedUnderThisBase_247",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_247"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_248) || RETURN",
                "displayLines": "UnusedUnderThisBase_248",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_248"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID03) || RETURN",
                    "displayLines": "SummonID03",
                    "constants": [],
                    "variables": [
                      "SummonID03"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_249) || RETURN",
                "displayLines": "UnusedUnderThisBase_249",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_249"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID04) || RETURN",
                    "displayLines": "SummonID04",
                    "constants": [],
                    "variables": [
                      "SummonID04"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_256) || RETURN",
                "displayLines": "UnusedUnderThisBase_256",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_256"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__115) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__115",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__115"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-814879412\">Enemy_W3_Theater_IF_AbilityEX03</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-814879412\">Enemy_W3_Theater_IF_AbilityEX03</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-831657031\">Enemy_W3_Theater_IF_AbilityEX04</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-831657031\">Enemy_W3_Theater_IF_AbilityEX04</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__114"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1055277375\">MModifier_Monster_W3_Theater_DamageSharePhase1</a>"
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "removeShields": true
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990801725\">Enemy_W3_Theater_TV1Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1990801725\">Enemy_W3_Theater_TV1Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1948547262\">Enemy_W3_Theater_TV2Mark</a>"
                }
              ]
            }
          ],
          "priorityLevel": -91
        },
        {
          "eventTrigger": "Weakness Break [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}