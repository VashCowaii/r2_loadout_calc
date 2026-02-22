const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2024020,
  "trimCharacterName": 2024020,
  "abilityList": [
    "2024020_Monster_Fuyan_Die",
    "2024020_Monster_Fuyan_Hit_Part02",
    "2024020_Monster_Fuyan_Hit_Part01",
    "2024020_Monster_Fuyan_Ability02_Part02",
    "2024020_Monster_Fuyan_Ability02_Part01",
    "2024020_Monster_Fuyan_Ability01_Part02",
    "2024020_Monster_Fuyan_Ability01_Part01",
    "2024020_Monster_Fuyan_Born_Part02",
    "2024020_Monster_Fuyan_Born_Part01",
    "2024020_Monster_Fuyan_PassiveAbilityInitiate",
    "2024020_Monster_W2_Fuyan_PassiveAbility_BGM",
    "2024020_Modifiers"
  ],
  "abilityObject": {
    "2024020_Monster_Fuyan_Die": {
      "fileName": "2024020_Monster_Fuyan_Die",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Hit_Part02": {
      "fileName": "2024020_Monster_Fuyan_Hit_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Hit_Part01": {
      "fileName": "2024020_Monster_Fuyan_Hit_Part01",
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
          "ability": "Monster_Fuyan_Hit_Part02"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ADF_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_HPDamageRatioValue",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.000010000076) || ADD || RETURN",
            "displayLines": "((1 / MonsterCount) + 0.000010000076)",
            "constants": [
              1,
              0.000010000076
            ],
            "variables": [
              "MonsterCount"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (DeathCount) || RETURN",
            "displayLines": "DeathCount",
            "constants": [],
            "variables": [
              "DeathCount"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ADF_CurrentHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_CurrentHPValue",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || RETURN",
                  "displayLines": "(ADF_MaxHPValue * ADF_HPDamageRatioValue)",
                  "constants": [],
                  "variables": [
                    "ADF_MaxHPValue",
                    "ADF_HPDamageRatioValue"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ADF_HPDamageRatioValue) || RETURN",
                    "displayLines": "ADF_HPDamageRatioValue",
                    "constants": [],
                    "variables": [
                      "ADF_HPDamageRatioValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 0.1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MonsterCount",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
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
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "DeathCount",
          "value": 0
        }
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Ability02_Part02": {
      "fileName": "2024020_Monster_Fuyan_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Hesitation"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Ability02_Part01": {
      "fileName": "2024020_Monster_Fuyan_Ability02_Part01",
      "childAbilityList": [
        "2024020_Monster_Fuyan_Ability02_Part01",
        "2024020_Monster_Fuyan_Ability02_Part02",
        "2024020_Monster_Fuyan_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Ability01_Part02": {
      "fileName": "2024020_Monster_Fuyan_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Rapid Gambit"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Ability01_Part01": {
      "fileName": "2024020_Monster_Fuyan_Ability01_Part01",
      "childAbilityList": [
        "2024020_Monster_Fuyan_Ability01_Part01",
        "2024020_Monster_Fuyan_Ability01_Part02",
        "2024020_Monster_Fuyan_Ability01_Camera"
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
          "ability": "Monster_Fuyan_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Born_Part02": {
      "fileName": "2024020_Monster_Fuyan_Born_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        }
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_Born_Part01": {
      "fileName": "2024020_Monster_Fuyan_Born_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_Born_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "2024020_Monster_Fuyan_PassiveAbilityInitiate": {
      "fileName": "2024020_Monster_Fuyan_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "Fuyan",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940788756\">Enemy_Fuyan_MonsterDieListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1988405555\">Enemy_Fuyan_Born</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-51927245\">Enemy_Fuyan_Unselectable</a>"
        }
      ],
      "references": []
    },
    "2024020_Monster_W2_Fuyan_PassiveAbility_BGM": {
      "fileName": "2024020_Monster_W2_Fuyan_PassiveAbility_BGM",
      "childAbilityList": [
        "2024020_Monster_W2_Fuyan_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"649895739\">Enemy_W2_Fuyan_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__649895739\">Enemy_W2_Fuyan_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2024020_Modifiers": {
      "fileName": "2024020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__288555768\">Monster_Fuyan_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940788756\">Enemy_Fuyan_MonsterDieListener</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                        "invertCondition": true,
                        "includePreDeath": true
                      },
                      {
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
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DeathCount",
                      "value": {
                        "operator": "Variables[0] (DeathCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(DeathCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DeathCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ADF_MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ADF_HPDamageRatioValue",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                        "displayLines": "((1 / MonsterCount) + 0.0009999999)",
                        "constants": [
                          1,
                          0.0009999999
                        ],
                        "variables": [
                          "MonsterCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ADF_CurrentHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ADF_CurrentHPValue",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || Variables[2] (DeathCount) || MUL || RETURN",
                          "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)",
                          "constants": [],
                          "variables": [
                            "ADF_MaxHPValue",
                            "ADF_HPDamageRatioValue",
                            "DeathCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_Hit_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_Hit_Part01"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AchievementCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8001010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Flamespawn"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AchievementCount",
                          "value": {
                            "operator": "Variables[0] (AchievementCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(AchievementCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "AchievementCount"
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
                    "value1": "AchievementCount",
                    "compareType": ">",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Inferno",
                          "desc": "Have #1[i] Flamespawns simultaneously on the field during the \"Illusory Maze: Cirrus\" challenge",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_Fuyan_Die",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Attack Targets}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-51927245\">Enemy_Fuyan_Unselectable</a>",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"429388357\">Modifier_Heliobus_Suiyang_Ability_StealBP_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1278953211\">Modifier_Heliobus_Suiyang_Ability_ActionBonus_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-210455569\">Modifier_Heliobus_Suiyang_Ability_DeathBonus_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"87920602\">Modifier_Heliobus_Suiyang_Ability_DamageBurn_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1274529835\">Modifier_Heliobus_Suiyang_Ability_AttackUp_Enemy</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1988405555\">Enemy_Fuyan_Born</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Monster_Fuyan_Born_Part02",
                  "isTrigger": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__1642513753\">Enemy_Fuyan_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}