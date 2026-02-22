const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3022011,
  "trimCharacterName": 3022011,
  "abilityList": [
    "3022011_Monster_W3_SundayPart_IF_PassiveAbility_Insert",
    "3022011_Monster_W3_SundayPart_IF_PassiveAbility",
    "3022011_Monster_W3_SundayPart_Ability01_Assist_Part02_02",
    "3022011_Monster_W3_SundayPart_Ability01_Assist_Part02_01",
    "3022011_Monster_W3_SundayPart_AbilityP01",
    "3022011_Monster_W3_SundayPart_Ability06_Part01",
    "3022011_Monster_W3_SundayPart_Ability04_Part01",
    "3022011_Monster_W3_SundayPart_Ability01_Part02",
    "3022011_Monster_W3_SundayPart_Ability01_Part01",
    "3022011_Modifiers"
  ],
  "abilityObject": {
    "3022011_Monster_W3_SundayPart_IF_PassiveAbility_Insert": {
      "fileName": "3022011_Monster_W3_SundayPart_IF_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
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
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "HardLevel",
                "compareType": ">=",
                "value2": 3
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"889164751\">Enemy_W3_SundayPart_IF_WeaknessShare</a>",
              "valuePerStack": {
                "MDF_WeaknessShare": {
                  "operator": "Variables[0] (_SummonerBreak) || RETURN",
                  "displayLines": "_SummonerBreak",
                  "constants": [],
                  "variables": [
                    "_SummonerBreak"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variable": "#SkillP01_P3_PartBreak_EnergyCharge",
          "target2": null,
          "variable2": "_EnergyCharge"
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
                "modifier": "<a class=\"gModGreen\" id=\"1375694400\">MissionBattleEvent60013_PassiveAbility</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1765479801\">MissionBattleEvent60019_Charge_permission</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": {
                "operator": "Variables[0] (_EnergyCharge) || RETURN",
                "displayLines": "_EnergyCharge",
                "constants": [],
                "variables": [
                  "_EnergyCharge"
                ]
              },
              "isFixed": "(Fixed)"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_BattleEvent60019_SP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_BattleEvent60019_SP",
                    "compareType": ">=",
                    "value2": 8
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "ability": "Monster_W3_Sunday_IF_PassiveAbilityInitiate_ChargeDone_Toast"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_IF_PassiveAbility": {
      "fileName": "3022011_Monster_W3_SundayPart_IF_PassiveAbility",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "PartBreak_StanceValue",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1443485628\">Enemy_W3_SundayPart_IF_AlreadyBreak</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__882833488\">Monster_W3_SundayPart_IF_Status</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 9
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "variableName": "_ActionDelaySummoner",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_ActionDelay",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_ActionDelay",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (_ActionDelaySummoner) || RETURN",
                          "displayLines": "_ActionDelaySummoner",
                          "constants": [],
                          "variables": [
                            "_ActionDelaySummoner"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "add": {
                            "operator": "Variables[0] (_ActionDelaySummoner) || RETURN",
                            "displayLines": "_ActionDelaySummoner",
                            "constants": [],
                            "variables": [
                              "_ActionDelaySummoner"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1443485628\">Enemy_W3_SundayPart_IF_AlreadyBreak</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1443485628\">Enemy_W3_SundayPart_IF_AlreadyBreak</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "_SummonerBreak",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "compareType": "<=",
                            "value2": 0,
                            "invertCondition": true
                          },
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
                          "abilityName": "Monster_W3_SundayPart_IF_PassiveAbility_Insert",
                          "priorityTag": "MonsterBattleCry",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_MonsterChangePhase"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster's Summoner}}"
                                },
                                "value1": "HardLevel",
                                "compareType": ">=",
                                "value2": 3
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>",
                                "invertCondition": true
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
                              "modifier": "<a class=\"gModGreen\" id=\"1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{All Team Members(Exclude Self)}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"889164751\">Enemy_W3_SundayPart_IF_WeaknessShare</a>",
                              "valuePerStack": {
                                "MDF_WeaknessShare": {
                                  "operator": "Variables[0] (_SummonerBreak) || RETURN",
                                  "displayLines": "_SummonerBreak",
                                  "constants": [],
                                  "variables": [
                                    "_SummonerBreak"
                                  ]
                                }
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3022011_Monster_W3_SundayPart_Ability01_Assist_Part02_02": {
      "fileName": "3022011_Monster_W3_SundayPart_Ability01_Assist_Part02_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_Ability01_Assist_Part02_01": {
      "fileName": "3022011_Monster_W3_SundayPart_Ability01_Assist_Part02_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_AbilityP01": {
      "fileName": "3022011_Monster_W3_SundayPart_AbilityP01",
      "childAbilityList": [
        "3022011_Monster_W3_SundayPart_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1257223640\">Monster_W3_SundayPart_LittleChorus</a>"
        },
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
          "modifier": "<a class=\"gModGreen\" id=\"1222159240\">Enemy_W3_SundayPart_Part1Camera</a>"
        }
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_Ability06_Part01": {
      "fileName": "3022011_Monster_W3_SundayPart_Ability06_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        }
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_Ability04_Part01": {
      "fileName": "3022011_Monster_W3_SundayPart_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
          }
        }
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_Ability01_Part02": {
      "fileName": "3022011_Monster_W3_SundayPart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Action Delayed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill01[1]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3022011_Monster_W3_SundayPart_Ability01_Part01": {
      "fileName": "3022011_Monster_W3_SundayPart_Ability01_Part01",
      "childAbilityList": [
        "3022011_Monster_W3_SundayPart_Ability01_Camera",
        "3022011_Monster_W3_SundayPart_Ability01_Part01",
        "3022011_Monster_W3_SundayPart_Ability01_Part02"
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
          "ability": "Monster_W3_SundayPart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3022011_Modifiers": {
      "fileName": "3022011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__889164751\">Enemy_W3_SundayPart_IF_WeaknessShare</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Physical"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Physical",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Fire"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Fire",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Ice"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Ice",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Thunder"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Thunder",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Wind"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Wind",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 6
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Quantum"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Quantum",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
                    "value1": "MDF_WeaknessShare",
                    "compareType": "=",
                    "value2": 7
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Stack Element Resistance",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stackType": "Delta",
                      "resistArray": [
                        {
                          "element": "Imaginary",
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                            "displayLines": "(-1 * _WeakResistance)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_WeakResistance"
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
            "MDF_WeaknessShare"
          ],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>",
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1222159240\">Enemy_W3_SundayPart_Part1Camera</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRoot",
                  "mapTo": "HighCameraRoot"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1396454665\">Enemy_W3_SundayPart_EntityFollowController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1257223640\">Monster_W3_SundayPart_LittleChorus</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_01"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_02"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AssistSkill02_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_Assist_DamagePercentage) || RETURN",
                    "displayLines": "MDF_Assist_DamagePercentage",
                    "constants": [],
                    "variables": [
                      "MDF_Assist_DamagePercentage"
                    ]
                  }
                }
              ]
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