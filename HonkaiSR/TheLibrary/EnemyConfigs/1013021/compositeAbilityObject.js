const compositeAbilityObject = {
  "fullCharacterName": 1013021,
  "trimCharacterName": 1013021,
  "abilityList": [
    "1013021_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock",
    "1013021_WMonster_W1_Mecha_05_Ability12_Part02",
    "1013021_WMonster_W1_Mecha_05_Ability12_Part01",
    "1013021_WMonster_W1_Mecha_05_Ability11_Part02",
    "1013021_WMonster_W1_Mecha_05_Ability11_Part01",
    "1013021_WMonster_W1_Mecha_05_AbilityP09_Part02",
    "1013021_WMonster_W1_Mecha_05_AbilityP09_Part01",
    "1013021_WMonster_W1_Mecha_05_Ability09_Part02",
    "1013021_WMonster_W1_Mecha_05_Ability09_Part01",
    "1013021_WMonster_W1_Mecha_05_Ability07_Part02",
    "1013021_WMonster_W1_Mecha_05_Ability07_Part01",
    "1013021_WMonster_W1_Mecha_05_Ability06_Part02",
    "1013021_WMonster_W1_Mecha_05_Ability06_Part01",
    "1013021_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
    "1013021_Modifiers"
  ],
  "abilityObject": {
    "1013021_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock",
      "childAbilityList": [
        "1013021_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock"
      ],
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "Monster_Mecha04_BattleScore1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_InsertControl"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Direwolf (Bug)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_Mecha04_ResetAI"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RemoveOneMore"
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "HideMonsterHUD"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "If \"Felling Order\" hits one target that does not currently have a Shield, immediately use \"Dismantle\" on a random target.",
          "type": "Other",
          "statusName": "Hounding Pursuit"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedNormal",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "StanceBreakState"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
          "for": "WMonster_Mecha_02_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "HideMonsterHUD",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_InsertControl",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W1_Mecha04_00_InsertFlag"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1013021,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Automaton Direwolf (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain"
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
          "for": "Monster_Mecha04_ResetAI",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ResetValue",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 10
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_ResetValue",
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
                          "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                          "value": 3
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      }
                    ]
                  },
                  "noTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_APShow"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 10
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 10
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 3
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 3
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
    "1013021_WMonster_W1_Mecha_05_Ability12_Part02": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability12_Part02",
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
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Mecha04_Aim_Flag"
        },
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mecha04_Aim_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_Aim_Flag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "counter": 1
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "counter": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Ability12_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability12_Part01": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability12_Part01",
      "childAbilityList": [
        "1013021_WMonster_W1_Mecha_05_Ability12_Camera",
        "1013021_WMonster_W1_Mecha_05_Ability12_Part01",
        "1013021_WMonster_W1_Mecha_05_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
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
          "ability": "WMonster_W1_Mecha_05_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability11_Part02": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
              "displayLines": "{[Skill11[0]]}",
              "constants": [],
              "variables": [
                "{[Skill11[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability11_Part01": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability11_Part01",
      "childAbilityList": [
        "1013021_WMonster_W1_Mecha_05_Ability11_Camera",
        "1013021_WMonster_W1_Mecha_05_Ability11_Part01",
        "1013021_WMonster_W1_Mecha_05_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "WMonster_W1_Mecha_05_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_AbilityP09_Part02": {
      "fileName": "1013021_WMonster_W1_Mecha_05_AbilityP09_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_AbilityP09_Part01": {
      "fileName": "1013021_WMonster_W1_Mecha_05_AbilityP09_Part01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "WMonster_W1_Mecha_05_AbilityP09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability09_Part02": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability09_Part01": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability09_Part01",
      "childAbilityList": [
        "1013021_WMonster_W1_Mecha_05_Ability09_Camera",
        "1013021_WMonster_W1_Mecha_05_Ability09_Part01",
        "1013021_WMonster_W1_Mecha_05_Ability09_Part02"
      ],
      "skillTrigger": "Skill09",
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
          "ability": "WMonster_W1_Mecha_05_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability07_Part02": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability07_Part02",
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
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "counter": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability07_Part01": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability07_Part01",
      "childAbilityList": [
        "1013021_WMonster_W1_Mecha_05_Ability07_Camera",
        "1013021_WMonster_W1_Mecha_05_Ability07_Part01",
        "1013021_WMonster_W1_Mecha_05_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "WMonster_W1_Mecha_05_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability06_Part02": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "failed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Mecha04_BattleScore2_Flag",
              "context": "TargetEntity",
              "value": 1,
              "max": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Target Has Lowest/Highest Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "partOf": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                "minOrMax": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1013021,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Mecha04_EnemySelector"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Mecha04_EnemySelector",
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
                          "variableName": "Mecha04_EnemySelector",
                          "value": 2
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013022,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013023,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013024,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "OneMore"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "OneMore",
                                  "duration": 2
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "OneMore"
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
                              "variableName": "Monster_W1_Mecha04_00_InsertFlag",
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
                              "variableName": "Mecha04_EnemySelector"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Target(ST)}}"
                                },
                                "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "Mecha04_EnemySelector",
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
                                  "variableName": "Mecha04_EnemySelector",
                                  "value": 2
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "OneMore"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "OneMore",
                              "duration": 2
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "OneMore"
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
                          "variableName": "Monster_W1_Mecha04_00_InsertFlag",
                          "value": 1
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
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "({[Skill06[2]]} * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
              "duration": 2,
              "baseChance": {
                "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                "displayLines": "{[Skill06[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Bleed_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                  "displayLines": "{[Skill06[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[1]]}"
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                  "displayLines": "{[Skill06[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "({[Skill06[2]]} * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
              "duration": 2,
              "baseChance": {
                "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                "displayLines": "{[Skill06[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Bleed_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                  "displayLines": "{[Skill06[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[1]]}"
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                  "displayLines": "{[Skill06[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Direwolf (Bug)"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mecha04_AttackCount",
                "compareType": ">",
                "value2": 3,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RemoveAim"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_AttackCount"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013024,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Mecha04_AttackCount",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W1_Mecha04_RemoveAim"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Mecha04_AttackCount"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013021_WMonster_W1_Mecha_05_Ability06_Part01": {
      "fileName": "1013021_WMonster_W1_Mecha_05_Ability06_Part01",
      "childAbilityList": [
        "1013021_WMonster_W1_Mecha_05_Ability06_Camera",
        "1013021_WMonster_W1_Mecha_05_Ability06_Part01",
        "1013021_WMonster_W1_Mecha_05_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Direwolf (Bug)"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013024,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "OneMore"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "OneMore"
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
          "ability": "WMonster_W1_Mecha_05_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013021_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory": {
      "fileName": "1013021_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
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
          "modifier": "Monster_W1_Mecha04_KlaraSpecialVictory_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_Instance_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_KlaraSpecialVictory_LockHP",
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
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Instance_DisableAction"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1013021_Modifiers": {
      "fileName": "1013021_Modifiers",
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
          "for": "W1_Mecha02_AttackBonus_Effect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "W1_Mecha02_AttackBonus_Effect"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Buff_ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (ModifierDamageUpValue) || Variables[1] (Buff_ModifierLayers) || MUL || RETURN",
                    "displayLines": "(ModifierDamageUpValue * Buff_ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "ModifierDamageUpValue",
                      "Buff_ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "W1_Mecha02_AttackBonus_Effect"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierDamageUpValue</span>.",
          "type": "Buff",
          "effectName": "Charging",
          "statusName": "Charging",
          "duration": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                      "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                      "constants": [],
                      "variables": [
                        "Owner_MaxHP",
                        "Modifier_Bleed_DamagePercentage",
                        "Modifier_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Owner_MaxHP) || MUL || Variables[2] (Modifier_Bleed_DamagePercentage) || MUL || Variables[3] (Modifier_Layer) || MUL || RETURN",
                      "displayLines": "(((DOT_TriggerRatio * Owner_MaxHP) * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Owner_MaxHP",
                        "Modifier_Bleed_DamagePercentage",
                        "Modifier_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Modifier_Bleed_DamagePercentage",
            "MDF_MaxLayer"
          ],
          "latentQueue": [
            "Mecha04_BattleScore2_Flag",
            "Monster_W1_Mecha04_00_InsertFlag",
            "Mecha04_EnemySelector"
          ],
          "description": "For a certain number of turns, receive Physical DMG based on Max HP at the beginning of each turn, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "duration": 3,
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_Mecha04_BattleScore1",
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
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Mecha04_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "The Limping Lupine",
                          "desc": "Defeat Automaton Direwolf without triggering Felling Order",
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
          "for": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_W1_Mecha04_00_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedUp",
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
                  "phase": "PhaseSpeedUp"
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
                  "phase": "PhaseSpeedUp"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
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
            "Monster_W1_Mecha04_00_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RemoveAim",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                  "value": 2
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_BattleScore2_Flag",
            "Monster_W1_Mecha04_00_InsertFlag",
            "Mecha04_EnemySelector",
            "Mecha04_AttackCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_Aim_Flag"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_Aim_Flag"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RemoveOneMore",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "WMonster_W1_Mecha_02_AIFlag_P2",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Monster_W1_Mecha04_00_InsertFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "OneMorePerTurn"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "OneMorePerTurn"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "OneMorePerTurn"
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
      ],
      "references": []
    }
  }
}