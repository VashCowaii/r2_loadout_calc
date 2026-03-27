const configAbility = {
  "fileName": "3024033_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1278888154\">W3_Sam_01_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Catch the Locust, Catch the Swarm",
                      "desc": "During the battle with Harbinger of Death: Swarm Nightmare, break the Harbinger of Death: Swarm Nightmare before defeating all Juvenile Stings, and it recovers Toughness before exiting \"Gene Duplication\" state",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__1262110535\">W3_Sam_01_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Ragtag Swarm",
                  "desc": "In combat with Harbinger of Death: Swarm Nightmare, defeat all Juvenile Stings to force it out of the \"Gene Duplication\" state",
                  "rarity": "Low",
                  "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                "displayLines": "MDF_BreakDamageAddedRatioBase",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAddedRatioBase"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatioBase</span>. When attacking enemy targets in the \"Rapid Evolution\" state, ignores the \"Rapid Evolution\" effect that prevents attackers from dealing CRIT Hits.",
      "type": "Other",
      "effectName": "Nemesis",
      "statusName": "Nemesis"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-836809540\">Enemy_W3_Sam_01_Ability04Command</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
                  "valuePerStack": {
                    "MDF_BreakDamageAddedRatioBase": {
                      "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                      "displayLines": "MDF_BreakDamageAddedRatioBase",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDamageAddedRatioBase"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                "displayLines": "MDF_BreakDamageAddedRatioBase",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAddedRatioBase"
                ]
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
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}.[[getMemosprite]]"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
                  "valuePerStack": {
                    "MDF_BreakDamageAddedRatioBase": {
                      "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                      "displayLines": "MDF_BreakDamageAddedRatioBase",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDamageAddedRatioBase"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BreakDamageAddedRatioBase"
      ],
      "latentQueue": [],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatioBase</span>. When attacking an enemy target in the \"Rapid Evolution\" state, ignores the \"Rapid Evolution\" effect that prevents attackers from dealing CRIT Hits. \"Juvenile Sting\" will prioritize attacking ally characters in the \"Nemesis\" state.",
      "type": "Other",
      "effectName": "Nemesis",
      "statusName": "Nemesis"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W3_Sam_01"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_TargetAttackFlag",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TargetAttackFlag",
                  "value": 1
                }
              ],
              "failed": [
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TargetAttackFlag",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TargetAttackFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TargetAttackFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "Weakness Break [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When attacked by ally targets not in the \"Nemesis\" state, cannot receive CRIT Hits.",
      "type": "Other",
      "effectName": "Rapid Evolution",
      "statusName": "Rapid Evolution"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-836809540\">Enemy_W3_Sam_01_Ability04Command</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Team Action",
              "conditionsActor": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "conditionsTarget": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
              },
              "abilityName": "Sam01Command"
            },
            {
              "name": "Team Action",
              "conditionsActor": {
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
              "conditionsTarget": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
                "invertCondition": true
              },
              "abilityName": "Sam01CommandCaster"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Team Action",
              "abilityName": "Sam01Command",
              "activated": false
            },
            {
              "name": "Team Action",
              "abilityName": "Sam01CommandCaster",
              "activated": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1121915816\">Enemy_W3_Sam_01_TakenDamage</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || RETURN",
                "displayLines": "MDF_DamageTakenUpRatio_PerLayer",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUpRatio_PerLayer"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_DamageTakenUpRatio_PerLayer"
      ],
      "latentQueue": [
        "AIFlag"
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is dispelled when this unit recovers from Weakness Break state.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2048366509\">Enemy_W3_Sam_01_EnhanceEffectMinion</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]",
      "stackType": "Replace",
      "description": "\"Mortal Instinct\" stacked <span class=\"descriptionNumberColor\">MDF_Layer</span> time(s)",
      "type": "Other",
      "effectName": "Mortal Instinct",
      "statusName": "Mortal Instinct",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1049305365\">Enemy_W3_Sam_01_EnhanceEnergyBar</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                "value2": 3
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PassiveSkill03_MaxCharge",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill03[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill03[4]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PassiveSkill03_MaxCharge",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill03[1]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (ChargeCount) || RETURN",
                "displayLines": "ChargeCount",
                "constants": [],
                "variables": [
                  "ChargeCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                "displayLines": "PassiveSkill03_MaxCharge",
                "constants": [],
                "variables": [
                  "PassiveSkill03_MaxCharge"
                ]
              },
              "assignState": "True"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "ChargeCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                "displayLines": "PassiveSkill03_MaxCharge",
                "constants": [],
                "variables": [
                  "PassiveSkill03_MaxCharge"
                ]
              },
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ChargeCount) || RETURN",
                    "displayLines": "ChargeCount",
                    "constants": [],
                    "variables": [
                      "ChargeCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                    "displayLines": "PassiveSkill03_MaxCharge",
                    "constants": [],
                    "variables": [
                      "PassiveSkill03_MaxCharge"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]",
      "modifierFlags": [
        "STAT_AITargetLowerPriority"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "HintCheck",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1049305365\">Enemy_W3_Sam_01_EnhanceEnergyBar</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2048366509\">Enemy_W3_Sam_01_EnhanceEffectMinion</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                "displayLines": "MDF_SpeedUpRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ChargeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[0]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[0]]}"
                ]
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PassiveSkill03_MaxCharge"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1049305365\">Enemy_W3_Sam_01_EnhanceEnergyBar</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2048366509\">Enemy_W3_Sam_01_EnhanceEffectMinion</a>"
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
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PassiveSkill03_MaxCharge",
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                        "displayLines": "{[PassiveSkill03[4]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill03[4]]}"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PassiveSkill03_MaxCharge",
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                        "displayLines": "{[PassiveSkill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill03[1]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "RLBoss"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill03[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill03[5]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                    "displayLines": "PassiveSkill03_MaxCharge",
                    "constants": [],
                    "variables": [
                      "PassiveSkill03_MaxCharge"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ChargeCount",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                    "displayLines": "PassiveSkill03_MaxCharge",
                    "constants": [],
                    "variables": [
                      "PassiveSkill03_MaxCharge"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ChargeCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                      "displayLines": "PassiveSkill03_MaxCharge",
                      "constants": [],
                      "variables": [
                        "PassiveSkill03_MaxCharge"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 7
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "noTargetFound": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUpRatio"
      ],
      "latentQueue": [],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
      "type": "Buff",
      "effectName": "Enhance",
      "statusName": "Gene Duplication"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__599604616\">Enemy_W3_Sam_01_ShieldRecoverMark</a>",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-16655209\">Enemy_W3_Sam_01_Shield</a>[<span class=\"descriptionNumberColor\">Whirling Carapace</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentHPRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                "displayLines": "MDF_CurrentHPRatio",
                "constants": [],
                "variables": [
                  "MDF_CurrentHPRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP_DownScale",
              "value": 1000
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
              "variableName": "MDF_CurrentHP_DownScale",
              "value": 1000
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_LastHPRatio",
              "value": {
                "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                "displayLines": "MDF_CurrentHPRatio",
                "constants": [],
                "variables": [
                  "MDF_CurrentHPRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentHPRatio"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_RallyHPRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPChangeRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_LastHPRatio) || Variables[1] (MDF_CurrentHPRatio) || SUB || RETURN",
                    "displayLines": "(MDF_LastHPRatio - MDF_CurrentHPRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_LastHPRatio",
                      "MDF_CurrentHPRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isAttack",
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
                        "value1": "MDF_HPChangeRatio",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxRallyHPRatio) || Variables[1] (MDF_TotalDamageRatio) || SUB || RETURN",
                          "displayLines": "(MDF_MaxRallyHPRatio - MDF_TotalDamageRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_MaxRallyHPRatio",
                            "MDF_TotalDamageRatio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_RallyHPRatio",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_ShieldThreshold) || Variables[1] (MDF_TotalDamageRatio) || ADD || Variables[2] (MDF_MaxRallyHPRatio) || SUB || SUB || RETURN",
                            "displayLines": "(0 - ((MDF_ShieldThreshold + MDF_TotalDamageRatio) - MDF_MaxRallyHPRatio))",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_ShieldThreshold",
                              "MDF_TotalDamageRatio",
                              "MDF_MaxRallyHPRatio"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_CurrentHPRatio) || Variables[1] (MDF_HPChangeRatio) || ADD || RETURN",
                            "displayLines": "(MDF_CurrentHPRatio + MDF_HPChangeRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentHPRatio",
                              "MDF_HPChangeRatio"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_TotalDamageRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_ShieldThreshold) || RETURN",
                        "displayLines": "MDF_ShieldThreshold",
                        "constants": [],
                        "variables": [
                          "MDF_ShieldThreshold"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_MaxRallyHPRatio) || RETURN",
                        "displayLines": "MDF_MaxRallyHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_MaxRallyHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_RallyHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentHPRatio) || Variables[1] (MDF_HPChangeRatio) || ADD || RETURN",
                          "displayLines": "(MDF_CurrentHPRatio + MDF_HPChangeRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentHPRatio",
                            "MDF_HPChangeRatio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_RallyHPRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentHPRatio) || Variables[1] (MDF_HPChangeRatio) || ADD || RETURN",
                            "displayLines": "(MDF_CurrentHPRatio + MDF_HPChangeRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentHPRatio",
                              "MDF_HPChangeRatio"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_RallyHPRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_RallyHPRatio) || Variables[1] (MDF_ShieldThreshold) || SUB || RETURN",
                        "displayLines": "(MDF_RallyHPRatio - MDF_ShieldThreshold)",
                        "constants": [],
                        "variables": [
                          "MDF_RallyHPRatio",
                          "MDF_ShieldThreshold"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RallyHPRatio) || RETURN",
                    "displayLines": "MDF_RallyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_RallyHPRatio"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_RallyHPRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                      "displayLines": "MDF_CurrentHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentHPRatio"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_RallyHPRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                        "displayLines": "MDF_CurrentHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_RallyHPRatio) || RETURN",
                        "displayLines": "MDF_RallyHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_RallyHPRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isAttack",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TotalDamageRatio",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TotalDamageRatio",
              "value": 0
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
                "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_RallyHPRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RallyHPRatio) || RETURN",
                    "displayLines": "MDF_RallyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_RallyHPRatio"
                    ]
                  }
                }
              ]
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
                "modifier": "<a class=\"gModGreen\" id=\"599604616\">Enemy_W3_Sam_01_ShieldRecoverMark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_RallyHPRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_RallyHPRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HealPercentage) || Variables[1] (MDF_CurrentHPRatio) || ADD || RETURN",
                      "displayLines": "(MDF_HealPercentage + MDF_CurrentHPRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_HealPercentage",
                        "MDF_CurrentHPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                        "displayLines": "MDF_HealPercentage",
                        "constants": [],
                        "variables": [
                          "MDF_HealPercentage"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_RallyHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentHPRatio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_RallyHPRatio) || Variables[1] (MDF_CurrentHPRatio) || SUB || RETURN",
                            "displayLines": "(MDF_RallyHPRatio - MDF_CurrentHPRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_RallyHPRatio",
                              "MDF_CurrentHPRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldThreshold",
        "MDF_HealPercentage",
        "MDF_MaxRallyHPRatio"
      ],
      "latentQueue": [],
      "description": "After \"Harbinger of Death: Swarm Nightmare\" is attacked, a portion of the reduced HP is converted into \"Corrosion.\" When \"Harbinger of Death: Swarm Nightmare\" uses \"Primordial Tide, Swarm of Death,\" this unit will restore HP equal to the amount of Corrosion.",
      "type": "Buff",
      "statusName": "Whirling Carapace"
    }
  ],
  "references": []
}