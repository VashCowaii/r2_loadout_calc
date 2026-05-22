const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20022,
  "trimCharacterName": 20022,
  "abilityList": [
    "20022_Modifiers",
    "20022_BattleEventAbility_Monster_W4_Unicorn_01_Summon",
    "20022_Functions"
  ],
  "abilityObject": {
    "20022_Modifiers": {
      "fileName": "20022_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-199880551\">W4_Unicorn_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Like Dew and Lightning, Gone With The Wind",
                      "desc": "After Cyclonic Swarm Mother enters the \"Breeding Frenzy\" state, prevent it from spawning \"Mirage Fizzle Kid\" when its action is advanced",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Advance/Delay up to Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetRef": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "SummonMonster"
                      },
                      "refPoint": "After",
                      "isStartingAV": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Breeding Frenzy</span>]",
          "modifierFlags": [
            "MuteHitH",
            "STAT_SuperArmor"
          ],
          "description": "In this state, DMG taken from attacks is reduced. When action advances, HP will be consumed. Summons \"Mirage Fizzle Kid\" and slightly delays \"Incubation\" action. When \"Incubation\" takes action, all remaining \"Mirage Fizzle Kid\" will be summoned.",
          "type": "Other",
          "effectName": "Incubation",
          "statusName": "Breeding Frenzy",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "class": "A"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
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
                    "value1": "MDF_isAttack",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_AllDamageTypeResistance"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
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
                    "value1": "MDF_isAttack",
                    "compareType": "=",
                    "value2": 1
                  }
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
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Unicorn_01_Ability05_Insert_Part01",
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
                    "modifier": "<a class=\"gModGreen\" id=\"1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2140507283\">MWMonster_W4_Unicorn_01_BlockDamage</a>[<span class=\"descriptionNumberColor\">Maelstrom's Eye</span>]",
          "counter": 1,
          "modifierFlags": [
            "BlockDamageExcludeDot",
            "MuteBreak"
          ],
          "description": "Immune to all DMG except DoTs. This status is dispelled after being attacked.",
          "type": "Buff",
          "effectName": "Barrier",
          "statusName": "Maelstrom's Eye",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1300638915\">Enemy_W4_Unicorn_01_SummonMonsterWeak</a>[<span class=\"descriptionNumberColor\">Weakling</span>]",
          "description": "Due to premature hatching, decreases DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>.",
          "type": "Debuff",
          "effectName": "Weakened",
          "statusName": "Weakling",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_InitHP) || SUB || RETURN",
                    "displayLines": "(1 - MDF_InitHP)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_InitHP"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_DefenceAddedRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>[<span class=\"descriptionNumberColor\">Fetal Movement of the Ocean</span>]",
          "modifierFlags": [
            "MuteBreak"
          ],
          "description": "In this state, \"Cyclonic Swarm Mother's\" Toughness cannot be reduced. \"Cyclonic Swarm Mother\" will use \"Rain Is Born to Fall\". Eliminate all \"Mirage Fizzle Kids\" to dispel this state.",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Fetal Movement of the Ocean",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "SW_Minion01_03"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "SW_Minion01_03"
                      }
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "SW_Minion01_03"
                      },
                      "noTargetFound": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "20022_BattleEventAbility_Monster_W4_Unicorn_01_Summon": {
      "fileName": "20022_BattleEventAbility_Monster_W4_Unicorn_01_Summon",
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
          "modifier": "<a class=\"gModGreen\" id=\"-747106338\">Modifier_Monster_W4_Unicorn_01_Summon</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-682702222\">Modifier_Monster_W4_Unicorn_01_BattleEvent_Summon_BaseSpeed</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 1.5
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "Summon",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-747106338\">Modifier_Monster_W4_Unicorn_01_Summon</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  "passed": [
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "flagNames": []
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      }
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Monster_W4_Unicorn_01_SummonMonster",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "priorityTag": "EnemyBuffOthers",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
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
                  "noTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-682702222\">Modifier_Monster_W4_Unicorn_01_BattleEvent_Summon_BaseSpeed</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_W4_Unicorn_01_BattleEvent_Ultra_BaseSpeed) || RETURN",
                    "displayLines": "MDF_W4_Unicorn_01_BattleEvent_Ultra_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_W4_Unicorn_01_BattleEvent_Ultra_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "20022_Functions": {
      "fileName": "20022_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>",
          "parse": []
        }
      ],
      "references": []
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}