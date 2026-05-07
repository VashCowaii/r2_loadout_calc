const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60001,
  "trimCharacterName": 60001,
  "abilityList": [
    "60001_Colossus_PassiveAbility02",
    "60001_Colossus_AbilityP01_InsertAbility",
    "60001_Colossus_PassiveAbility01",
    "60001_Colossus_Ability03_Part02",
    "60001_Colossus_Ability03_Part01",
    "60001_Colossus_Ability03_Pre"
  ],
  "abilityObject": {
    "60001_Colossus_PassiveAbility02": {
      "fileName": "60001_Colossus_PassiveAbility02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1565616527\">Colossus_ButtonUIController</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1565616527\">Colossus_ButtonUIController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Show BattleEvent Button"
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Show BattleEvent Button",
                  "show": true
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                    "displayLines": "{[SkillP01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[2]]}"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team(Exclude Memosprites)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1592345722\">Enemy_W1_CocoliaP2_FirstSummonSpecial</a>"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1755008882\">Enemy_W1_CocoliaP2_Battle3LockHP</a>"
                    },
                    {
                      "name": "Show BattleEvent Button",
                      "show": true
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                        "displayLines": "{[SkillP01[2]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[2]]}"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60001_Colossus_AbilityP01_InsertAbility": {
      "fileName": "60001_Colossus_AbilityP01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1478170495\">Colossus_EnterBattlePowerUp</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
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
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Character ID",
            "ID": 8003,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Trailblazer - Preservation[M]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1077563857\">Colossus_EnterBattlePowerUp_EX</a>",
              "valuePerStack": {
                "MDF_AllDamageAddedRatio": 0.3
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1077563857\">Colossus_EnterBattlePowerUp_EX</a>",
          "stackData": [
            "MDF_AllDamageAddedRatio"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageAddedRatio) || RETURN",
                    "displayLines": "MDF_AllDamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1478170495\">Colossus_EnterBattlePowerUp</a>",
          "stackData": [
            "MDF_AllDamageReduce"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60001_Colossus_PassiveAbility01": {
      "fileName": "60001_Colossus_PassiveAbility01",
      "childAbilityList": [
        "60001_Colossus_PassiveAbility01",
        "60001_Colossus_AbilityP01_InsertAbility"
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
          "modifier": "<a class=\"gModGreen\" id=\"609975280\">Colossus_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"755974517\">Colossus_BanBPAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1345283877\">Colossus_Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-150978282\">Colossus_AutoUseUltraAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"22827807\">Colossus_SetLevel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1109384574\">Colossus_AttackIgnoreDEF</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1109384574\">Colossus_AttackIgnoreDEF</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": -1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__22827807\">Colossus_SetLevel</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Entity Level",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "byStage": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-150978282\">Colossus_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1345283877\">Colossus_Charge</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Action Holder's Team",
                            "team": "Player Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Skill Type",
                              "skillType": "Ultimate"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                        "displayLines": "{[SkillP01[1]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[1]]}"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__755974517\">Colossus_BanBPAbility</a>",
          "execute": [
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
                    "Skill"
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": -1000
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__609975280\">Colossus_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
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
    },
    "60001_Colossus_Ability03_Part02": {
      "fileName": "60001_Colossus_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
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
              "target": "{{Enemy Team All}}"
            },
            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
            "minOrMax": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Colossus_EnemyBoss_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageFlat": {
              "operator": "Variables[0] (Colossus_EnemyBoss_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
              "displayLines": "(Colossus_EnemyBoss_MaxHP * {[Skill03[0]]})",
              "constants": [],
              "variables": [
                "Colossus_EnemyBoss_MaxHP",
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 0,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60001_Colossus_Ability03_Part01": {
      "fileName": "60001_Colossus_Ability03_Part01",
      "childAbilityList": [
        "60001_Colossus_Ability03_Camera",
        "60001_Colossus_Ability03_Camera_02",
        "60001_Colossus_Ability03_Pre",
        "60001_Colossus_Ability03_Part01",
        "60001_Colossus_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        60,
        0
      ],
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Preservation Creation's Wrath"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Colossus_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60001_Colossus_Ability03_Pre": {
      "fileName": "60001_Colossus_Ability03_Pre",
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
          "modifier": "<a class=\"gModGreen\" id=\"1565616527\">Colossus_ButtonUIController</a>"
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Target has Extra-Turn Queued",
            "target": {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            }
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6000101,
      "trigger": "Skill03",
      "name": "Preservation Creation's Wrath",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals massive Fire DMG to all enemies.",
      "energyCost": 140,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.075
        ]
      },
      "element": "Fire",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_Colossus_00_Skill03_Camera",
        "Avatar_Colossus_00_Skill03_Camera_02",
        "Avatar_Colossus_00_Skill03_Pre",
        "Avatar_Colossus_00_Skill03_Phase01",
        "Avatar_Colossus_00_Skill03_Phase02"
      ],
      "toughnessList": [
        0,
        180,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6000102,
      "trigger": "SkillP01",
      "name": "",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.3,
          20,
          60
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_Colossus_00_PassiveSkill01",
        "Avatar_Colossus_00_SkillP01_InsertAbility"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}