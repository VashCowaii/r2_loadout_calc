const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3012030,
  "trimCharacterName": 3012030,
  "abilityList": [
    "3012030_Monster_W3_DeathPart_Ability03_Part03",
    "3012030_Monster_W3_DeathPart_Ability03_Part02",
    "3012030_Monster_W3_DeathPart_Ability03_Insert",
    "3012030_Monster_W3_DeathPart_Ability02_Part02",
    "3012030_Monster_W3_DeathPart_Ability02_Part01",
    "3012030_Monster_W3_DeathPart_SKill01_Part02",
    "3012030_Monster_W3_DeathPart_SKill01_Insert",
    "3012030_Monster_W3_DeathPart_PassiveAbilityInitiate_Main2",
    "3012030_Monster_W3_DeathPart_PassiveAbilityInitiate",
    "3012030_Modifiers"
  ],
  "abilityObject": {
    "3012030_Monster_W3_DeathPart_Ability03_Part03": {
      "fileName": "3012030_Monster_W3_DeathPart_Ability03_Part03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
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
                "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
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
              "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_Ability03_Part02": {
      "fileName": "3012030_Monster_W3_DeathPart_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
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
                "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
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
              "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_Ability03_Insert": {
      "fileName": "3012030_Monster_W3_DeathPart_Ability03_Insert",
      "childAbilityList": [
        "3012030_Monster_W3_DeathPart_Ability03_Insert",
        "3012030_Monster_W3_DeathPart_Ability03_Part02",
        "3012030_Monster_W3_DeathPart_Ability03_Part03",
        "3012030_Monster_W3_DeathPart_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "DeathPart_Appear_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W3_DeathPart_Ability03_Part03",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "DeathPart_Appear_Flag",
              "value": 1
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W3_DeathPart_Ability03_Part02",
              "isTrigger": true
            }
          ]
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_Ability02_Part02": {
      "fileName": "3012030_Monster_W3_DeathPart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_Ability02_Part01": {
      "fileName": "3012030_Monster_W3_DeathPart_Ability02_Part01",
      "childAbilityList": [
        "3012030_Monster_W3_DeathPart_Ability02_Part01",
        "3012030_Monster_W3_DeathPart_Ability02_Part02",
        "3012030_Monster_W3_DeathPart_Ability02_Camera"
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
          "ability": "Monster_W3_DeathPart_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_SKill01_Part02": {
      "fileName": "3012030_Monster_W3_DeathPart_SKill01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{MZM: Unselectable Part}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_SKill01_Insert": {
      "fileName": "3012030_Monster_W3_DeathPart_SKill01_Insert",
      "childAbilityList": [
        "3012030_Monster_W3_DeathPart_SKill01_Insert",
        "3012030_Monster_W3_DeathPart_SKill01_Part02",
        "3012030_Monster_W3_DeathPart_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Slumber Awakening"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_DeathPart_SKill01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_PassiveAbilityInitiate_Main2": {
      "fileName": "3012030_Monster_W3_DeathPart_PassiveAbilityInitiate_Main2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Divide HP Bar into Segments",
          "segCount": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "phase": "PhaseCharge"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
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
                "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
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
              "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012030_Monster_W3_DeathPart_PassiveAbilityInitiate": {
      "fileName": "3012030_Monster_W3_DeathPart_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Divide HP Bar into Segments",
          "segCount": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"94854948\">Monster_W3_DeathPart_RLBoss_SetMaxHP</a>"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "phase": "PhaseCharge"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          }
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
                "name": "Enemy ID",
                "ID": 301402020,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "DeathPart_AppearSkill_Flag",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "noTargetFound": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_DeathPart_Ability03_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"785799791\">Monster_W3_DeathPart_PreShow_Attack</a>",
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1415744166\">Monster_W3_DeathPart_PreShow_Break</a>",
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1415744166\">Monster_W3_DeathPart_PreShow_Break</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
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
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Toughness Reduction Preview",
                        "caster": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Basic ATK",
                            "Skill",
                            "Ultimate"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_ShowValue) || DIV || RETURN",
                            "displayLines": "(MDF_MaxHP / MDF_ShowValue)",
                            "constants": [],
                            "variables": [
                              "MDF_MaxHP",
                              "MDF_ShowValue"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue"
          ],
          "latentQueue": [
            "Insert_Flag",
            "DeathPart_AppearSkill_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__785799791\">Monster_W3_DeathPart_PreShow_Attack</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
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
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Basic ATK",
                        "Skill",
                        "Ultimate"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_ShowValue) || DIV || RETURN",
                        "displayLines": "(MDF_MaxHP / MDF_ShowValue)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          "MDF_ShowValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue"
          ],
          "latentQueue": [
            "Insert_Flag",
            "DeathPart_AppearSkill_Flag"
          ]
        }
      ]
    },
    "3012030_Modifiers": {
      "fileName": "3012030_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BeingAttackCountDown",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CreatFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"504350425\">RefreshDamagePerHit</a>"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                      "value": "(MDF_DamagerPerHit * MDF_BeingAttackCountDown)"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BeingAttackCountDown",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT",
                          "Break DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": "MDF_DamagerPerHit"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W3_DeathPart_SKill01_Insert",
                  "priorityTag": "AvatarReviveSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            },
            {
              "eventTrigger": "Losing HP [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"504350425\">RefreshDamagePerHit</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_InBeingAttackFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Override HP Lost",
                      "setTo": {
                        "operator": "Variables[0] (MDF_DamagerPerHit) || RETURN",
                        "displayLines": "MDF_DamagerPerHit",
                        "constants": [],
                        "variables": [
                          "MDF_DamagerPerHit"
                        ]
                      }
                    },
                    {
                      "name": "Override HP Lost",
                      "setTo": {
                        "operator": "Variables[0] (MDF_DamagerPerHit) || Variables[1] (MDF_BeingAttackCountDown) || MUL || RETURN",
                        "displayLines": "(MDF_DamagerPerHit * MDF_BeingAttackCountDown)",
                        "constants": [],
                        "variables": [
                          "MDF_DamagerPerHit",
                          "MDF_BeingAttackCountDown"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BeingAttackCountDown",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Override HP Lost",
                      "setTo": {
                        "operator": "Variables[0] (MDF_DamagerPerHit) || RETURN",
                        "displayLines": "MDF_DamagerPerHit",
                        "constants": [],
                        "variables": [
                          "MDF_DamagerPerHit"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"504350425\">RefreshDamagePerHit</a>"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_BeingAttackCountDown",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InBeingAttackFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InBeingAttackFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CreatFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__504350425\">RefreshDamagePerHit</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CreatFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CreatFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamagerPerHit",
                      "value": {
                        "operator": "Variables[0] (CEIL) || Variables[1] (MDF_MaxHP) || Variables[2] (MDF_ShowValue) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((MDF_MaxHP / MDF_ShowValue))",
                        "constants": [],
                        "variables": [
                          "CEIL",
                          "MDF_MaxHP",
                          "MDF_ShowValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue"
          ],
          "latentQueue": [
            "Insert_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__488990783\">W3_DeathPart_Sgin_Modifier</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
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
                        "target": "{{Caster}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Insert_Flag"
          ]
        }
      ],
      "references": []
    }
  }
}