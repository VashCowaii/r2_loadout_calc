const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 8022010,
  "trimCharacterName": 8022010,
  "abilityList": [
    "8022010_Modifiers",
    "8022010_Monster_SW_Minion01_PassiveAbility_Insert_Part01",
    "8022010_Monster_SW_Minion01_Passive01",
    "8022010_Monster_SW_Minion01_Ability03_Part02",
    "8022010_Monster_SW_Minion01_Ability03_Part01",
    "8022010_Monster_SW_Minion01_Ability02_Part02",
    "8022010_Monster_SW_Minion01_Ability02_Part01",
    "8022010_Monster_SW_Minion01_Ability01_Part02",
    "8022010_Monster_SW_Minion01_Ability01_Part01",
    "8022010_Handling"
  ],
  "abilityObject": {
    "8022010_Modifiers": {
      "fileName": "8022010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__976017528\">Monster_SW_Minion01_Split_Old</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-157441217\">Monster_SW_Minion01_SplitEffect</a>[<span class=\"descriptionNumberColor\">Propagation</span>]",
          "description": "Propagate in the next turn.",
          "type": "Other",
          "effectName": "Propagation",
          "statusName": "Propagation",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1780753426\">Monster_SW_Minion01_Split</a>[<span class=\"descriptionNumberColor\">Mitosis: Warning</span>]",
          "description": "Propagate after <span class=\"descriptionNumberColor\">Modifier_TurnCount</span> turn(s). Cannot propagate during the turn in which this unit recovers from Weakness Break.",
          "type": "Other",
          "effectName": "Mitosis: Warning",
          "statusName": "Mitosis: Warning",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_TurnCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "value": {
                        "displayLines": "(Modifier_TurnCount - 1)"
                      },
                      "variableName": "Modifier_TurnCount"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_TurnCount",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
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
                              "target": "{{Enemy Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "<",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "BreakRecover",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "value": 2,
                          "variableName": "Modifier_TurnCount"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_SW_Minion01_Ability02_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "EnemyReviveOthers",
                          "canHitNonTargets": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "value": 1,
                          "variableName": "Modifier_TurnCount"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "BreakRecover",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "BreakRecover"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_TurnCount",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-157441217\">Monster_SW_Minion01_SplitEffect</a>[<span class=\"descriptionNumberColor\">Propagation</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "BreakRecover"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen_Effect"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8022010_Monster_SW_Minion01_PassiveAbility_Insert_Part01": {
      "fileName": "8022010_Monster_SW_Minion01_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Entomon Eulogy"
        },
        "Deleted bullshit",
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "{[PassiveSkill01[0]]}"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "displayLines": "{[PassiveSkill01[5]]}"
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Wind"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"664236628\">StageAbility_RogueDLC_Floor03_02_Modifier</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "displayLines": "{[PassiveSkill01[3]]}"
                      },
                      "stackLimit": {
                        "displayLines": "{[PassiveSkill01[4]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamageTakenUpRatio_PerLayer": {
                          "displayLines": "({[PassiveSkill01[2]]} + {[Skill03[2]]})"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "{[PassiveSkill01[1]]}"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "displayLines": "{[PassiveSkill01[3]]}"
                      },
                      "stackLimit": {
                        "displayLines": "{[PassiveSkill01[4]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamageTakenUpRatio_PerLayer": {
                          "displayLines": "{[PassiveSkill01[2]]}"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "{[PassiveSkill01[1]]}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "8022010_Monster_SW_Minion01_Passive01": {
      "fileName": "8022010_Monster_SW_Minion01_Passive01",
      "skillTrigger": "Monster_SW_Minion01_00_Passive01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "variableName": "SW_Minion01_Sam01",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1780753426\">Monster_SW_Minion01_Split</a>[<span class=\"descriptionNumberColor\">Mitosis: Warning</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1848557291\">Monster_SW_Minion01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1918463862\">Monster_SW_Minion01_Deathrattle</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1918463862\">Monster_SW_Minion01_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
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
                  "abilityName": "Monster_SW_Minion01_PassiveAbility_Insert_Part01",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1848557291\">Monster_SW_Minion01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ]
        }
      ]
    },
    "8022010_Monster_SW_Minion01_Ability03_Part02": {
      "fileName": "8022010_Monster_SW_Minion01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "displayLines": "{[Skill03[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "displayLines": "{[Skill01[3]]}"
              },
              "baseChance": 1,
              "stackLimit": {
                "displayLines": "{[Skill01[4]]}"
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "displayLines": "{[Skill01[2]]}"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "{[Skill03[1]]}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8022010_Monster_SW_Minion01_Ability03_Part01": {
      "fileName": "8022010_Monster_SW_Minion01_Ability03_Part01",
      "childAbilityList": [
        "8022010_Monster_SW_Minion01_Ability03_Camera",
        "8022010_Monster_SW_Minion01_Ability03_Part01",
        "8022010_Monster_SW_Minion01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_SW_Minion01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
            "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8022010_Monster_SW_Minion01_Ability02_Part02": {
      "fileName": "8022010_Monster_SW_Minion01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Meiotic Division"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-157441217\">Monster_SW_Minion01_SplitEffect</a>[<span class=\"descriptionNumberColor\">Propagation</span>]"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonList_ADF_1"
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"976017528\">Monster_SW_Minion01_Split_Old</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "DamageUpLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "multiplier": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "NOT",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "displayLines": "DamageUpRatio"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "DamageUpLayer"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "value": 0,
          "variableName": "BossCount"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 8024010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Swarm: True Sting (Complete)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 8024012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Swarm: True Sting (Complete)",
                "isBaseCompare": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "value": {
                "displayLines": "(BossCount + 1)"
              },
              "variableName": "BossCount"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BossCount",
            "compareType": ">",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "displayLines": "DamageUpRatio"
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"976017528\">Monster_SW_Minion01_Split_Old</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "DamageUpRatio"
          },
          "variableName": "DamageUpRatio"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8022010_Monster_SW_Minion01_Ability02_Part01": {
      "fileName": "8022010_Monster_SW_Minion01_Ability02_Part01",
      "childAbilityList": [
        "8022010_Monster_SW_Minion01_Ability02_Camera",
        "8022010_Monster_SW_Minion01_Ability02_Part01",
        "8022010_Monster_SW_Minion01_Ability02_Part02"
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
          "ability": "Monster_SW_Minion01_Ability02_Part02",
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
    "8022010_Monster_SW_Minion01_Ability01_Part02": {
      "fileName": "8022010_Monster_SW_Minion01_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "displayLines": "{[Skill01[3]]}"
          },
          "baseChance": 1,
          "stackLimit": {
            "displayLines": "{[Skill01[4]]}"
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "displayLines": "{[Skill01[2]]}"
            }
          },
          "addStacksPerTrigger": {
            "displayLines": "{[Skill01[1]]}"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8022010_Monster_SW_Minion01_Ability01_Part01": {
      "fileName": "8022010_Monster_SW_Minion01_Ability01_Part01",
      "childAbilityList": [
        "8022010_Monster_SW_Minion01_Ability01_Camera",
        "8022010_Monster_SW_Minion01_Ability01_Part01",
        "8022010_Monster_SW_Minion01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_SW_Minion01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "8022010_Handling": {
      "fileName": "8022010_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSequenceSkill",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  "Use Sequence Ability Option"
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
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