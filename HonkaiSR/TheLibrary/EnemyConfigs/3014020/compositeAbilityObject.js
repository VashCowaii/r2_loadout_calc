const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3014020,
  "trimCharacterName": 3014020,
  "abilityList": [
    "3014020_Monster_W3_Death_Ability12_Part02",
    "3014020_Monster_W3_Death_Ability12_Part01",
    "3014020_Monster_W3_Death_Ability10_Part02",
    "3014020_Monster_W3_Death_Ability10_Insert",
    "3014020_Monster_W3_Death_Part1T2",
    "3014020_Monster_W3_Death_Ability08_Part02",
    "3014020_Monster_W3_Death_Ability08_Insert",
    "3014020_Monster_W3_Death_Ability07_Part02",
    "3014020_Monster_W3_Death_Ability07_Part01",
    "3014020_Monster_W3_Death_Ability06_Part02",
    "3014020_Monster_W3_Death_Ability06_Part01",
    "3014020_Monster_W3_Death_Ability05_Part02",
    "3014020_Monster_W3_Death_Ability05_Insert",
    "3014020_Monster_W3_Death_Ability04_Part02",
    "3014020_Monster_W3_Death_Ability04_Part01",
    "3014020_Monster_W3_Death_Ability03_Part02",
    "3014020_Monster_W3_Death_Ability03_Part01",
    "3014020_Monster_W3_Death_Ability02_Part02",
    "3014020_Monster_W3_Death_Ability02_Part01",
    "3014020_Monster_W3_Death_Ability01_Part02",
    "3014020_Monster_W3_Death_Ability01_Part01",
    "3014020_Monster_W3_Death_PassiveAbilityInitiate",
    "3014020_Monster_W3_Death_PassiveAbility_BGM",
    "3014020_Modifiers"
  ],
  "abilityObject": {
    "3014020_Monster_W3_Death_Ability12_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "setValue": {
                "operator": "Constants[0] (0.01) || RETURN",
                "displayLines": "0.01",
                "constants": [
                  0.01
                ],
                "variables": []
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"787482349\">Death_Control_Modifier_MainLine</a>",
              "valuePerStack": {
                "MDF_HealHPPercentage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "MDF_AddSPValue": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill07_EffectFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill07_EffectFlag",
                  "context": "TargetEntity",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Skill07_EffectFlag"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill07_EffectFlag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Death_SpecialVictory_Flag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Assign Value to Stat",
              "variableName": "MainLine_Character_1",
              "value": {
                "operator": "Variables[0] (MainLine_Character_1) || RETURN",
                "displayLines": "MainLine_Character_1",
                "constants": [],
                "variables": [
                  "MainLine_Character_1"
                ]
              }
            },
            {
              "name": "Assign Value to Stat",
              "variableName": "MainLine_Character_2",
              "value": {
                "operator": "Variables[0] (MainLine_Character_2) || RETURN",
                "displayLines": "MainLine_Character_2",
                "constants": [],
                "variables": [
                  "MainLine_Character_2"
                ]
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability12_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability12_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability12_Part01",
        "3014020_Monster_W3_Death_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Watery Dissolution"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "targetWrite": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MainLine_Character_1",
              "value": "TargetCharacterID"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2003204085\">Enemy_W3_Death_Mainline_Battle1_CatchID1</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
              },
              {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2003204085\">Enemy_W3_Death_Mainline_Battle1_CatchID1</a>"
                }
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "targetWrite": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MainLine_Character_2",
              "value": "TargetCharacterID"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Death_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability10_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "BonusAttackCounter",
          "value": {
            "operator": "Variables[0] (BonusAttackCounter) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(BonusAttackCounter + 1)",
            "constants": [
              1
            ],
            "variables": [
              "BonusAttackCounter"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BonusAttackCounter",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BonusAttackCounter",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BonusAttackCounter",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BonusAttackCounter",
            "compareType": "=",
            "value2": 2,
            "contextScope": "TargetEntity"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability10_Insert": {
      "fileName": "3014020_Monster_W3_Death_Ability10_Insert",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability10_Insert",
        "3014020_Monster_W3_Death_Ability10_Part02",
        "3014020_Monster_W3_Death_Ability10_1_Camera",
        "3014020_Monster_W3_Death_Ability10_2_Camera"
      ],
      "skillTrigger": "Skill10",
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
          "ability": "Monster_W3_Death_Ability10_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BonusAttackCounter",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Part1T2": {
      "fileName": "3014020_Monster_W3_Death_Part1T2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-745487733\">Modifier_W3_Death_PartController_LockHP</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BonusAttackCounter",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability08_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability08_Part02",
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
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Unselectable Targets}}"
              },
              "variableName": "LightTeamCount",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
              }
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}.[[removeUnselectable]]"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (LightTeamCount) || RETURN",
                      "displayLines": "LightTeamCount",
                      "constants": [],
                      "variables": [
                        "LightTeamCount"
                      ]
                    }
                  }
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                        "displayLines": "{[Skill08[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill08[0]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                        "displayLines": "{[Skill08[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill08[0]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 3014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Owner_MaxHPCount",
                      "value": {
                        "operator": "Variables[0] (DeathPartMaxHPCount) || RETURN",
                        "displayLines": "DeathPartMaxHPCount",
                        "constants": [],
                        "variables": [
                          "DeathPartMaxHPCount"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability08_Insert": {
      "fileName": "3014020_Monster_W3_Death_Ability08_Insert",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability08_Insert",
        "3014020_Monster_W3_Death_Ability08_Part02",
        "3014020_Monster_W3_Death_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W3_Death_Ability08_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability07_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
          },
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "ifTargetFound": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 5
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "mortalWound": true,
                    "Toughness": null,
                    "instanceTag": "MortallyWonded",
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-437635334\">Monster_W3_Death_Ability07_EffectFlagPredicate</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "mortalWound": true,
                        "Toughness": null,
                        "instanceTag": "MortallyWonded",
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-437635334\">Monster_W3_Death_Ability07_EffectFlagPredicate</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1708631805\">Monster_W3_Death_Ability07_RetargetMark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1708631805\">Monster_W3_Death_Ability07_RetargetMark</a>"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "mortalWound": true,
                        "Toughness": null,
                        "instanceTag": "MortallyWonded",
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-437635334\">Monster_W3_Death_Ability07_EffectFlagPredicate</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "mortalWound": true,
                        "Toughness": null,
                        "instanceTag": "MortallyWonded",
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-437635334\">Monster_W3_Death_Ability07_EffectFlagPredicate</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2000867371\">Monster_W3_Death_Ability07_DamagePerformFinishToSkillPerformFinish</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1708631805\">Monster_W3_Death_Ability07_RetargetMark</a>"
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1107646124\">Monster_W3_Death_Ability07_AfterTimelineFinish</a>",
          "parse": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Skill07_EffectFlag"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-218130180\">Monster_W3_Death_Ability07_DamagePerformFinishToWaitAnime87</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1728469043\">Death_UseAbility07_Modifier</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster with Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"721704074\">Monster_W3_Death_Ability06_Charge_CharacterChangePhase</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Bullet_Flag"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-437635334\">Monster_W3_Death_Ability07_EffectFlagPredicate</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill07_EffectFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill07_EffectFlag",
                  "context": "TargetEntity",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Skill07_EffectFlag"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2000867371\">Monster_W3_Death_Ability07_DamagePerformFinishToSkillPerformFinish</a>",
          "parse": [
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Death_Ability08_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterInsertAttackOthers",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-218130180\">Monster_W3_Death_Ability07_DamagePerformFinishToWaitAnime87</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1107646124\">Monster_W3_Death_Ability07_AfterTimelineFinish</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1708631805\">Monster_W3_Death_Ability07_RetargetMark</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3014020_Monster_W3_Death_Ability07_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability07_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability07_Part01",
        "3014020_Monster_W3_Death_Ability07_Part02",
        "3014020_Monster_W3_Death_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
          },
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Death_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability06_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)v2}}"
              },
              "valuePercent": 1,
              "isFixed": "(Fixed)"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bullet_Flag",
          "value": 2
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"721704074\">Monster_W3_Death_Ability06_Charge_CharacterChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability06_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability06_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability06_Part01",
        "3014020_Monster_W3_Death_Ability06_Part02",
        "3014020_Monster_W3_Death_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W3_Death_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability05_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "BonusAttackCounter",
          "value": {
            "operator": "Variables[0] (BonusAttackCounter) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(BonusAttackCounter + 1)",
            "constants": [
              1
            ],
            "variables": [
              "BonusAttackCounter"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
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
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 5
              },
              {
                "name": "Stage Type",
                "stageType": "FightFest"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-393984788\">Enemy_W3_Death_FightFest_LockHP</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1000000
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-393984788\">Enemy_W3_Death_FightFest_LockHP</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Bullet_Flag",
              "context": "TargetEntity",
              "value": -1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "mortalWound": true,
                    "Toughness": null,
                    "instanceTag": "MortallyWonded",
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Bullet_Flag",
                  "context": "TargetEntity",
                  "value": -1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "mortalWound": true,
                    "Toughness": null,
                    "instanceTag": "MortallyWonded",
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
                },
                "Trigger: Attack End",
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Bullet_Flag",
                  "context": "TargetEntity",
                  "value": -1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Death_Ability08_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterInsertAttackOthers",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-393984788\">Enemy_W3_Death_FightFest_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-739114828\">Monster_W3_Death_FightFest_LockHP</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Constants[0] (0.000010000076) || RETURN",
                    "displayLines": "0.000010000076",
                    "constants": [
                      0.000010000076
                    ],
                    "variables": []
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-739114828\">Monster_W3_Death_FightFest_LockHP</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Bullet_Flag"
          ]
        }
      ]
    },
    "3014020_Monster_W3_Death_Ability05_Insert": {
      "fileName": "3014020_Monster_W3_Death_Ability05_Insert",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability05_Insert",
        "3014020_Monster_W3_Death_Ability05_Part02",
        "3014020_Monster_W3_Death_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Death_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability04_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability04_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability04_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability04_Part01",
        "3014020_Monster_W3_Death_Ability04_Part02",
        "3014020_Monster_W3_Death_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W3_Death_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability03_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability03_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability03_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability03_Part01",
        "3014020_Monster_W3_Death_Ability03_Part02",
        "3014020_Monster_W3_Death_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W3_Death_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability02_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Effect_Flag",
          "value": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Effect_Flag"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability02_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability02_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability02_Part01",
        "3014020_Monster_W3_Death_Ability02_Part02",
        "3014020_Monster_W3_Death_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W3_Death_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability01_Part02": {
      "fileName": "3014020_Monster_W3_Death_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Effect_Flag",
          "value": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Effect_Flag"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BonusAttackCounter",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BonusAttackCounter",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_Ability01_Part01": {
      "fileName": "3014020_Monster_W3_Death_Ability01_Part01",
      "childAbilityList": [
        "3014020_Monster_W3_Death_Ability01_Part01",
        "3014020_Monster_W3_Death_Ability01_Part02",
        "3014020_Monster_W3_Death_Ability01_Camera"
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
          "ability": "Monster_W3_Death_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "3014020_Monster_W3_Death_PassiveAbilityInitiate": {
      "fileName": "3014020_Monster_W3_Death_PassiveAbilityInitiate",
      "childAbilityList": [
        "3014020_Monster_W3_Death_PassiveAbilityInitiate"
      ],
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-874770796\">W2_Death_BattleScore1</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1278468708\">Monster_W3_Death_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 301402020,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1038288757\">Enemy_W3_Death_MainLine02_DeathControl</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "DeathPart_AppearSkill_Flag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Effect_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1091581769\">Monster_W3_Death_ListenBreak</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "UsedSkill08_Flag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bullet_Flag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 301402020,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-117176315\">Monster_W3_Death_SpecialVictory_LockHP</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1332827782\">Enemy_W3_Death_MainCustomString</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 301402020,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Set Enemy Phase",
                  "phase": 2
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 3014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"91362459\">Modifier_W3_Death_RLBoss_PartController_LockHP</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-745487733\">Modifier_W3_Death_PartController_LockHP</a>"
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase"
                }
              ]
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "DeathPart_AppearSkill_Flag"
        }
      ],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "DeathPart_AppearSkill_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1087767431\">Enemy_W3_Deathpart_Appear</a>"
        }
      ],
      "whenRemoved": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1278468708\">Monster_W3_Death_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1332827782\">Enemy_W3_Death_MainCustomString</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.2
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DeathPart_AppearSkill_Flag",
            "Effect_Flag",
            "UsedSkill08_Flag",
            "Bullet_Flag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117176315\">Monster_W3_Death_SpecialVictory_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Death_SpecialVictory_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 7
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"740710426\">Monster_Standard_DisableAction</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Death_SpecialVictory_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DeathPart_AppearSkill_Flag",
            "Effect_Flag",
            "UsedSkill08_Flag",
            "Bullet_Flag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1038288757\">Enemy_W3_Death_MainLine02_DeathControl</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": "MainLine_Character_1",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                      "valuePerStack": {
                        "MDF_HealHPPercentage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "MDF_AddSPValue": {
                          "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                          "displayLines": "{[Skill05[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[1]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": "MainLine_Character_2",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                      "valuePerStack": {
                        "MDF_HealHPPercentage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "MDF_AddSPValue": {
                          "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                          "displayLines": "{[Skill05[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[1]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  },
                  "variableName": "LightTeamCount",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
                  }
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (LightTeamCount) || RETURN",
                    "displayLines": "LightTeamCount",
                    "constants": [],
                    "variables": [
                      "LightTeamCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 2,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": 3012031,
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 2,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": 3012031,
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 3014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Owner_MaxHPCount",
                      "value": {
                        "operator": "Variables[0] (DeathPartMaxHPCount) || RETURN",
                        "displayLines": "DeathPartMaxHPCount",
                        "constants": [],
                        "variables": [
                          "DeathPartMaxHPCount"
                        ]
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
    "3014020_Monster_W3_Death_PassiveAbility_BGM": {
      "fileName": "3014020_Monster_W3_Death_PassiveAbility_BGM",
      "childAbilityList": [
        "3014020_Monster_W3_Death_PassiveAbility_BGM"
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
          "modifier": "<a class=\"gModGreen\" id=\"2063481\">Enemy_W3_Death_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2063481\">Enemy_W3_Death_ResetStageBGM</a>",
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
    "3014020_Modifiers": {
      "fileName": "3014020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-874770796\">W2_Death_BattleScore1</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Death_CharacterCount"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Death_CharacterCount",
                      "value": 1,
                      "max": 5
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Death_CharacterCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Memento Mori",
                          "desc": "Defeat the Memory Zone meme \"Something Unto Death\" with only one character able to take action",
                          "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1087767431\">Enemy_W3_Deathpart_Appear</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DeathPart_Appear_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Monster_DeathPart",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DeathPart_Appear_Flag"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DeathPart_AppearSkill_Flag",
            "Effect_Flag",
            "UsedSkill08_Flag",
            "Bullet_Flag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__721704074\">Monster_W3_Death_Ability06_Charge_CharacterChangePhase</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseCharge"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseChargeBreak"
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
          "stackData": [],
          "latentQueue": [
            "Bullet_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1728469043\">Death_UseAbility07_Modifier</a>",
          "stackData": [],
          "latentQueue": [
            "Skill07_EffectFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1176710437\">Monster_W3_Death_IsSummoner</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill07"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill12"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill07"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill12"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_ShowValue1"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. This effect is removed when this unit becomes Weakness Broken.",
          "type": "Buff",
          "effectName": "Biting Obituary",
          "statusName": "Biting Obituary"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-9479983\">Monster_W3_Death_HasUseAbility</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]",
          "stackType": "Refresh",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Death [Anyone]"
            },
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
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "Break"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Bullet_Flag",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>"
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Bullet_Flag",
                          "context": "TargetEntity",
                          "value": -1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Bullet_Flag",
                            "compareType": "<",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
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
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Locks on to the next 2 characters who either use their Basic ATK, Skill, or Ultimate.",
          "type": "Other",
          "effectName": "Nightfall",
          "statusName": "Nightfall"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2068180165\">Modifier_W3_Death_AbilityTypeDisable</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Basic ATK",
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "TeamAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Bullet_Flag"
          ],
          "description": "Locked On by \"Something Unto Death\" as an attack target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-466857338\">Monster_W3_Death_SummonerSpeed0</a>",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W3_Death_00"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W3_Death_00",
                  "state": false
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Event Owner Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]",
          "modifierFlags": [
            "AlwaysSuccess",
            "DisableAction",
            "STAT_CTRL",
            "Stealth",
            "DisableHealHP"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
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
                  "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>"
                }
              ]
            }
          ],
          "description": "Cannot be selected, cannot take action.",
          "type": "Other",
          "effectName": "Morbid Dream",
          "statusName": "Morbid Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__787482349\">Death_Control_Modifier_MainLine</a>",
          "modifierFlags": [
            "AlwaysSuccess",
            "STAT_ForceControl",
            "STAT_CTRL_UnOperable"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-1139623579\">Monster_W3_Death_LockHP</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_AddSPValue) || RETURN",
                    "displayLines": "MDF_AddSPValue",
                    "constants": [],
                    "variables": [
                      "MDF_AddSPValue"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealHPPercentage) || RETURN",
                    "displayLines": "MDF_HealHPPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HealHPPercentage"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Effect_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]",
                  "valuePerStack": {}
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_HealHPPercentage",
            "MDF_AddSPValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-804634083\">Death_Control_Modifier</a>",
          "modifierFlags": [
            "AlwaysSuccess",
            "STAT_ForceControl",
            "UnOperable",
            "STAT_CTRL_UnOperable"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-1139623579\">Monster_W3_Death_LockHP</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_AddSPValue) || RETURN",
                    "displayLines": "MDF_AddSPValue",
                    "constants": [],
                    "variables": [
                      "MDF_AddSPValue"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealHPPercentage) || RETURN",
                    "displayLines": "MDF_HealHPPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HealHPPercentage"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Effect_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]",
                  "valuePerStack": {}
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_HealHPPercentage",
            "MDF_AddSPValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2048900042\">W3_Death_AddDeathSuccess</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1295202561\">W3_Death_AddMoifierSuccess</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Death_Ability08_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterInsertAttackOthers",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1985441632\">Monster_W3_Death_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Fatal Damage [Owner]: Start",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Constants[0] (0.000010000076) || RETURN",
                    "displayLines": "0.000010000076",
                    "constants": [
                      0.000010000076
                    ],
                    "variables": []
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-1139623579\">Monster_W3_Death_LockHP</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                  "valuePerStack": {
                    "MDF_HealHPPercentage": {
                      "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                      "displayLines": "{[Skill05[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[0]]}"
                      ]
                    },
                    "MDF_AddSPValue": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1091581769\">Monster_W3_Death_ListenBreak</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                      }
                    ]
                  },
                  "passed": [
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Death_SpecialVictory_Flag",
                            "compareType": "NOT=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 3
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team(Exclude Memosprites)}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 6
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DeathPart_AppearSkill_Flag",
            "Effect_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1562873953\">Monster_W3_Death_BattleAlert</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BonusAttackCounter",
                    "compareType": "=",
                    "value2": 2
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BonusAttackCounter",
                    "compareType": "=",
                    "value2": 2
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained 3 stacks of Sunset. It is about to deal a killing blow.",
          "type": "Other",
          "effectName": "The Sun Sinks, Night Falls",
          "statusName": "Sunset"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained 2 stacks of Sunset.",
          "type": "Other",
          "effectName": "The Sun Sinks, Dusk Arrives",
          "statusName": "Sunset"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Gained 1 stack of Sunset.",
          "type": "Other",
          "effectName": "The Sun Sinks, In Dying Light",
          "statusName": "Sunset"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
          "description": "\"Death\" has gained 0 stacks of \"Sunset.\"",
          "type": "Other",
          "effectName": "Sunset, Afternoon",
          "statusName": "Sunset"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1900940108\">Modifier_W3_Death_HuntingMode</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1646802425\">Modifier_W3_Death_BonusAttackCounter</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1731578033\">Modifier_W3_Death_BonusAttackHandler</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1731578033\">Modifier_W3_Death_BonusAttackHandler</a>"
                }
              ]
            },
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
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "BonusAttackCounter",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || Constants[0] (1) || SUB || RETURN",
                          "displayLines": "({[PassiveSkill02[0]]} - 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "Break"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": "Base Insert Condition",
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "Death_SpecialVictory_Flag",
                                "compareType": "=",
                                "value2": 0,
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "abilityName": "Monster_W3_Death_Ability05_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackOthers",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__1646802425\">Modifier_W3_Death_BonusAttackCounter</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BonusAttackCounter",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "BonusAttackCounter",
                        "compareType": "<=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Death_Ability10_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterInsertAttackOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1731578033\">Modifier_W3_Death_BonusAttackHandler</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "Break"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "STAT_CTRL"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "DisableAction"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Skill Type",
                          "skillType": "Elation"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1646802425\">Modifier_W3_Death_BonusAttackCounter</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-314968673\">Enemy_W3_Death_Minions_Mark_PartChange</a>",
          "modifierFlags": [
            "DisableHealHP"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-745487733\">Modifier_W3_Death_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-314968673\">Enemy_W3_Death_Minions_Mark_PartChange</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
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
                      "abilityName": "Monster_W3_Death_Part1T2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DeathPart_AppearSkill_Flag",
            "Effect_Flag",
            "UsedSkill08_Flag",
            "Bullet_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__77028713\">Monster_W3_Death_HitTarget</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"77028713\">Monster_W3_Death_HitTarget</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2003204085\">Enemy_W3_Death_Mainline_Battle1_CatchID1</a>",
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}