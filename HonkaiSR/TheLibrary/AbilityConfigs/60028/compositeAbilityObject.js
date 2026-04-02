const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60028,
  "trimCharacterName": 60028,
  "abilityList": [
    "60028_BattleEventAbility_60028_Camera",
    "60028_MissionBattleEvent60028_PassiveAbility01",
    "60028_MissionBattleEvent60028_Ability03_Part02",
    "60028_MissionBattleEvent60028_Ability03_Part01",
    "60028_Modifiers"
  ],
  "abilityObject": {
    "60028_BattleEventAbility_60028_Camera": {
      "fileName": "60028_BattleEventAbility_60028_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60028_MissionBattleEvent60028_PassiveAbility01": {
      "fileName": "60028_MissionBattleEvent60028_PassiveAbility01",
      "childAbilityList": [
        "60028_MissionBattleEvent60028_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"318553874\">MissionBattleEvent60028_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1627847045\">MissionBattleEvent60028_Charge</a>",
          "valuePerStack": {
            "MDF_SPValue": 8
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1546986120\">MissionBattleEvent60028_AutoUseUltraAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"768878434\">Death_BattleEventAttackUPByMaxHP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1627847045\">MissionBattleEvent60028_Charge</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                        "operator": "Variables[0] (MDF_SPValue) || RETURN",
                        "displayLines": "MDF_SPValue",
                        "constants": [],
                        "variables": [
                          "MDF_SPValue"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End"
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
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
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Tutorial",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Saber"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"121064899\">Modifier_StageSpecialAbility_10441217_BanUltra</a>"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Saber"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1578480323\">Modifier_StageSpecialAbility_10441217_ForceActionable</a>"
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
            "MDF_SPValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__318553874\">MissionBattleEvent60028_PassiveAbility</a>",
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1014,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Saber"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Show BattleEvent Button",
                      "show": true
                    }
                  ],
                  "noTargetFound": [
                    "Show BattleEvent Button"
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": 0.84,
                  "isFixed": "(Fixed)"
                }
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__768878434\">Death_BattleEventAttackUPByMaxHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_BaseHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BaseHP) || Variables[1] (MDF_BaseAttack) || SUB || RETURN",
                    "displayLines": "(MDF_BaseHP - MDF_BaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_BaseHP",
                      "MDF_BaseAttack"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1546986120\">MissionBattleEvent60028_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60028_MissionBattleEvent60028_Ability03_Part02": {
      "fileName": "60028_MissionBattleEvent60028_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Trigger",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Trigger",
              "value": 1
            }
          ],
          "failed": [
            "Show BattleEvent Button"
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "valuePercent": 1,
          "isFixed": "(Fixed)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1300476012\">Modifier_StageSpecialAbility_10441217_Sub</a>[<span class=\"descriptionNumberColor\">Command Spell</span>]",
          "duration": 1,
          "immediateEffect": true
        },
        {
          "name": "Lock HP",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "lockHolder": "<a class=\"gModGreen\" id=\"-487712043\">1044121lock</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Tutorial",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"121064899\">Modifier_StageSpecialAbility_10441217_BanUltra</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Tutorial",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60028_MissionBattleEvent60028_Ability03_Part01": {
      "fileName": "60028_MissionBattleEvent60028_Ability03_Part01",
      "childAbilityList": [
        "60028_MissionBattleEvent60028_Ability03_Part01",
        "60028_MissionBattleEvent60028_Ability03_Part02",
        "60028_BattleEventAbility_60028_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "ID": 1014,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Saber"
          },
          "ifTargetFound": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "MissionBattleEvent60028_Ability03_Part02",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "MissionBattleEvent60028_Ability03_Part02",
                  "isTrigger": true
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "60028_Modifiers": {
      "fileName": "60028_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__121064899\">Modifier_StageSpecialAbility_10441217_BanUltra</a>",
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
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1578480323\">Modifier_StageSpecialAbility_10441217_ForceActionable</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Tutorial"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1578480323\">Modifier_StageSpecialAbility_10441217_ForceActionable</a>",
          "modifierFlags": [
            "STAT_ForceActionable"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
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
            "Tutorial"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1300476012\">Modifier_StageSpecialAbility_10441217_Sub</a>[<span class=\"descriptionNumberColor\">Command Spell</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageUpRatio",
                  "value": {
                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                    "displayLines": "{[Skill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[0]]}"
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
                    "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                    "displayLines": "MDF_DamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Trigger"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>.",
          "type": "Buff",
          "effectName": "Command Spell",
          "statusName": "Command Spell"
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6002801,
      "trigger": "Skill03",
      "name": "Command Spell",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Regenerates 100% Energy for Saber and increases her DMG dealt.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          5,
          1,
          0.2,
          1
        ]
      },
      "element": "Imaginary",
      "attackType": "Ultra",
      "skillEffect": "Support",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60028_Skill03_Phase01",
        "Avatar_MissionBattleEvent60028_Skill03_Phase02",
        "BattleEventAbility_60028_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6002802,
      "trigger": "SkillP01",
      "name": null,
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
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60028_PassiveSkill01"
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