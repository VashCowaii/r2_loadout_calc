const compositeAbilityObject = {
  "fullCharacterName": 4043010,
  "trimCharacterName": 4043010,
  "abilityList": [
    "4043010_Monster_W3_TV_01_Ability02_Part02",
    "4043010_Monster_W3_TV_01_Ability02_Part01",
    "4043010_Monster_W3_TV_01_Ability01_Part02",
    "4043010_Monster_W3_TV_01_Ability01_Part01",
    "4043010_Monster_W3_TV_01_PassiveAbility",
    "4043010_Monster_W4_Herta_Ability01_Part02_Insert",
    "4043010_Monster_W4_Herta_Ability01_Part01_Insert",
    "4043010_Monster_W4_Herta_Ability01_Part02",
    "4043010_Monster_W4_Herta_Ability01_Part01",
    "4043010_Monster_W4_Herta_WeaponControl",
    "4043010_Modifiers",
    "4043010_Functions"
  ],
  "abilityObject": {
    "4043010_Monster_W3_TV_01_Ability02_Part02": {
      "fileName": "4043010_Monster_W3_TV_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4043010_Monster_W3_TV_01_Ability02_Part01": {
      "fileName": "4043010_Monster_W3_TV_01_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_01_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4043010_Monster_W3_TV_01_Ability01_Part02": {
      "fileName": "4043010_Monster_W3_TV_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "TV_01_EliteFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                {
                  "operator": "Variables[0] (TV_01_EliteChance) || RETURN",
                  "displayLines": "TV_01_EliteChance",
                  "constants": [],
                  "variables": [
                    "TV_01_EliteChance"
                  ]
                },
                {
                  "operator": "Constants[0] (1) || Variables[0] (TV_01_EliteChance) || SUB || RETURN",
                  "displayLines": "(1 - TV_01_EliteChance)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "TV_01_EliteChance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Select Random Enemy from Pool",
                      "poolID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__105) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__105",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__105"
                        ]
                      },
                      "filter": [
                        "Elite"
                      ],
                      "poolKey": "MonsterIDKey"
                    }
                  ]
                },
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Select Random Enemy from Pool",
                      "poolID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__105) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__105",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__105"
                        ]
                      },
                      "filter": [
                        "Minion"
                      ],
                      "poolKey": "MonsterIDKey"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Select Random Enemy from Pool",
              "poolID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__105) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__105",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__105"
                ]
              },
              "filter": [
                "Minion"
              ],
              "poolKey": "MonsterIDKey"
            }
          ]
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"533043980\">Monster_FormChange</a>",
          "isGlobal": true,
          "variables": {
            "Summon_MonsterIDKey": {
              "operator": "Variables[0] (MonsterIDKey) || RETURN",
              "displayLines": "MonsterIDKey",
              "constants": [],
              "variables": [
                "MonsterIDKey"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"303346537\">Monster_W3_TV_01_SummonMonsterKillTogether</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "advanceType": "Delay",
          "multiAdd": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Recently Summoned Enemies}}"
            },
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "TV_01_EliteFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868255192\">Monster_W3_TV_01_SummonMonsterEnd</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__303346537\">Monster_W3_TV_01_SummonMonsterKillTogether</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "TV_01_EliteFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "TV_01_EliteFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "TV_01_EliteFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__868255192\">Monster_W3_TV_01_SummonMonsterEnd</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Entity Exit Stage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "reason": "Vanish",
                  "living": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "TV_01_EliteFlag"
          ]
        }
      ]
    },
    "4043010_Monster_W3_TV_01_Ability01_Part01": {
      "fileName": "4043010_Monster_W3_TV_01_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4043010_Monster_W3_TV_01_PassiveAbility": {
      "fileName": "4043010_Monster_W3_TV_01_PassiveAbility",
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "TV_01_GroupFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "TV_01_GroupFlag"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "TV_01_EliteFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "TV_01_EliteFlag"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "TV_01_EliteChance",
                "compareType": "<",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "TV_01_EliteChance",
                "compareType": ">",
                "value2": 100
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TV_01_EliteChance",
              "value": {
                "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                "displayLines": "{[Skill01[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[0]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TV_01_EliteChance",
              "value": {
                "operator": "Variables[0] (TV_01_EliteChance) || Constants[0] (100) || DIV || RETURN",
                "displayLines": "(TV_01_EliteChance / 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "TV_01_EliteChance"
                ]
              }
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "RandomFlagTemp"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        }
      ],
      "references": []
    },
    "4043010_Monster_W4_Herta_Ability01_Part02_Insert": {
      "fileName": "4043010_Monster_W4_Herta_Ability01_Part02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 0,
                "TP_DelayRatio": 0.75
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 1,
                "TP_DelayRatio": 1
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 1,
                "TP_DelayRatio": 1.5
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 2,
                "TP_DelayRatio": 1
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 2,
                "TP_DelayRatio": 1.5
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 0,
                "TP_DelayRatio": 0.75
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 1,
                "TP_DelayRatio": 1
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 2,
                "TP_DelayRatio": 1
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Multiple Functions",
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1673790475\">MonsterHerta_Explode</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Trigger Multiple Functions",
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1673790475\">MonsterHerta_Explode</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1110556528\">Monster_W4_Herta_SummonMonsterEnd</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Destroy Battle Entity",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1110556528\">Monster_W4_Herta_SummonMonsterEnd</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Entity Exit Stage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "reason": "Vanish",
                  "living": false
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Minions of Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Destroy Battle Entity",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Entity Exit Stage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "reason": "Vanish",
                  "living": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4043010_Monster_W4_Herta_Ability01_Part01_Insert": {
      "fileName": "4043010_Monster_W4_Herta_Ability01_Part01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flagNames": []
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Herta_Ability01_Part02_Insert",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4043010_Monster_W4_Herta_Ability01_Part02": {
      "fileName": "4043010_Monster_W4_Herta_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 0,
                "TP_DelayRatio": 0.75
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 1,
                "TP_DelayRatio": 1
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 1,
                "TP_DelayRatio": 1.5
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 2,
                "TP_DelayRatio": 1
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 2,
                "TP_DelayRatio": 1.5
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 0,
                "TP_DelayRatio": 0.75
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 1,
                "TP_DelayRatio": 1
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
              "isGlobal": true,
              "variables": {
                "TP_SummonLocation": 2,
                "TP_DelayRatio": 1
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Multiple Functions",
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1673790475\">MonsterHerta_Explode</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Trigger Multiple Functions",
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1673790475\">MonsterHerta_Explode</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
                  "baseDelay": 0.0666
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1110556528\">Monster_W4_Herta_SummonMonsterEnd</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Destroy Battle Entity",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1110556528\">Monster_W4_Herta_SummonMonsterEnd</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Entity Exit Stage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "reason": "Vanish",
                  "living": false
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Minions of Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Destroy Battle Entity",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      }
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
    },
    "4043010_Monster_W4_Herta_Ability01_Part01": {
      "fileName": "4043010_Monster_W4_Herta_Ability01_Part01",
      "childAbilityList": [
        "4043010_Monster_W4_Herta_Ability01_Part01",
        "4043010_Monster_W4_Herta_Ability01_Part02",
        "4043010_Monster_W4_Herta_Ability01_Part01_Insert",
        "4043010_Monster_W4_Herta_Ability01_Part02_Insert",
        "4043010_Monster_W4_Herta_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Herta_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4043010_Monster_W4_Herta_WeaponControl": {
      "fileName": "4043010_Monster_W4_Herta_WeaponControl",
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-690947002\">Monster_W4_Herta_Basic</a>"
        }
      ],
      "references": []
    },
    "4043010_Modifiers": {
      "fileName": "4043010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-690947002\">Monster_W4_Herta_Basic</a>",
          "modifierFlags": [
            "MuteHitFly",
            "MuteHitH",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Herta_Ability01_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "PROG_MonsterLowest",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -70
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-947845666\">Monster_W4_Herta_SummonMark</a>"
        }
      ],
      "references": []
    },
    "4043010_Functions": {
      "fileName": "4043010_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1206781785\">Random_MonsterIDKey</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonType",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "Summon_MonsterIDKey",
                      "value": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "Summon_MonsterIDKey",
                      "value": {
                        "operator": "Variables[0] (SummonID02) || RETURN",
                        "displayLines": "SummonID02",
                        "constants": [],
                        "variables": [
                          "SummonID02"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonType",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TP_SummonLocation",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        1
                      ],
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "Summon_MonsterIDKey",
                          "value": {
                            "operator": "Variables[0] (SummonID01) || RETURN",
                            "displayLines": "SummonID01",
                            "constants": [],
                            "variables": [
                              "SummonID01"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        1
                      ],
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "Summon_MonsterIDKey",
                          "value": {
                            "operator": "Variables[0] (SummonID02) || RETURN",
                            "displayLines": "SummonID02",
                            "constants": [],
                            "variables": [
                              "SummonID02"
                            ]
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-61933346\">MonsterHerta_SummonOnce</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1206781785\">Random_MonsterIDKey</a>",
              "variables": {
                "TP_SummonLocation": {
                  "operator": "Variables[0] (TP_SummonLocation) || RETURN",
                  "displayLines": "TP_SummonLocation",
                  "constants": [],
                  "variables": [
                    "TP_SummonLocation"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TP_SummonLocation",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (TP_DelayRatio) || RETURN",
                    "displayLines": "TP_DelayRatio",
                    "constants": [],
                    "variables": [
                      "TP_DelayRatio"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                        "displayLines": "Summon_MonsterIDKey",
                        "constants": [],
                        "variables": [
                          "Summon_MonsterIDKey"
                        ]
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TP_SummonLocation",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (TP_DelayRatio) || RETURN",
                    "displayLines": "TP_DelayRatio",
                    "constants": [],
                    "variables": [
                      "TP_DelayRatio"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                        "displayLines": "Summon_MonsterIDKey",
                        "constants": [],
                        "variables": [
                          "Summon_MonsterIDKey"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TP_SummonLocation",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (TP_DelayRatio) || RETURN",
                    "displayLines": "TP_DelayRatio",
                    "constants": [],
                    "variables": [
                      "TP_DelayRatio"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                        "displayLines": "Summon_MonsterIDKey",
                        "constants": [],
                        "variables": [
                          "Summon_MonsterIDKey"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CasterMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CasterCurrHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "variableName": "_SummonMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "setValue": {
                "operator": "Variables[0] (_SummonMaxHP) || Variables[1] (_CasterCurrHP) || Variables[2] (_CasterMaxHP) || DIV || MUL || RETURN",
                "displayLines": "(_SummonMaxHP * (_CasterCurrHP / _CasterMaxHP))",
                "constants": [],
                "variables": [
                  "_SummonMaxHP",
                  "_CasterCurrHP",
                  "_CasterMaxHP"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CasterMaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CasterCurrStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CasterCurrStance",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "valuePercentReduce": 0.99,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Deal Toughness DMG",
                  "valuePercentReduce": {
                    "operator": "Constants[0] (1) || Variables[0] (_CasterCurrStance) || Variables[1] (_CasterMaxStance) || DIV || SUB || RETURN",
                    "displayLines": "(1 - (_CasterCurrStance / _CasterMaxStance))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CasterCurrStance",
                      "_CasterMaxStance"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  }
                }
              ]
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_Herta",
              "state": false
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-947845666\">Monster_W4_Herta_SummonMark</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1673790475\">MonsterHerta_Explode</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__372443677\">MonsterHerta_FireOnce</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  {
                    "name": "Sort by Action Order"
                  }
                ]
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-947845666\">Monster_W4_Herta_SummonMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-947845666\">Monster_W4_Herta_SummonMark</a>"
                },
                {
                  "name": "Shot Fired"
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_Herta"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}