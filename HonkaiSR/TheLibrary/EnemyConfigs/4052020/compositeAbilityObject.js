const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4052020,
  "trimCharacterName": 4052020,
  "abilityList": [
    "4052020_Modifiers",
    "4052020_Monster_SW_Minion01_03_PassiveAbility_Insert_Part01",
    "4052020_Monster_SW_Minion01_03_Passive01",
    "4052020_Monster_SW_Minion01_03_Ability02_Part02",
    "4052020_Monster_SW_Minion01_03_Ability02_Part01",
    "4052020_Monster_SW_Minion01_03_Ability01_Part02",
    "4052020_Monster_SW_Minion01_03_Ability01_Part01",
    "4052020_Handling"
  ],
  "abilityObject": {
    "4052020_Modifiers": {
      "fileName": "4052020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-360637105\">Enemy_SW_Minion01_03_CommandMarkTarget</a>[<span class=\"descriptionNumberColor\">Shadow of the Grand Fair</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "description": "Locked on by all \"Mirage Fizzle Kids\" as an attack target.",
          "type": "Other",
          "effectName": "Aggravate",
          "statusName": "Shadow of the Grand Fair",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1665795245\">Enemy_SW_Minion01_03_CommandMarkDarkTeam</a>",
          "lifeCyclePhaseAllowed": "ActionPhaseEnd"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-173051125\">Enemy_SW_Minion01_03_CommandMarkLevelCD</a>",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1665795245\">Enemy_SW_Minion01_03_CommandMarkDarkTeam</a>"
                  },
                  "noTargetFound": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1270842428\">Enemy_SW_Minion01_03_CommandMarkLevel</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "description": "Before \"Mirage Rush\" state is dispelled, other \"Mirage Fizzle Kids\" will prioritize attacking the locked-on target. This state is dispelled when this unit is Broken or receives a killing blow.",
          "type": "Other",
          "effectName": "Charge",
          "statusName": "Mirage Rush",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "PartControl"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1270842428\">Enemy_SW_Minion01_03_CommandMarkLevel</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-360637105\">Enemy_SW_Minion01_03_CommandMarkTarget</a>[<span class=\"descriptionNumberColor\">Shadow of the Grand Fair</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-173051125\">Enemy_SW_Minion01_03_CommandMarkLevelCD</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1665795245\">Enemy_SW_Minion01_03_CommandMarkDarkTeam</a>",
                  "duration": {
                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                    "displayLines": "{[Skill02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[0]]}"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "PartControl",
                  "state": false
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "SW_Minion01_03"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "noTargetFound": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__42504273\">Enemy_SW_Minion01_03_Ability01Mark</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        }
      ],
      "references": []
    },
    "4052020_Monster_SW_Minion01_03_PassiveAbility_Insert_Part01": {
      "fileName": "4052020_Monster_SW_Minion01_03_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Such Is the Fate of Bubbles"
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
                    "target": "{{Targets Adjacent to Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Quantum"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End"
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
    "4052020_Monster_SW_Minion01_03_Passive01": {
      "fileName": "4052020_Monster_SW_Minion01_03_Passive01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-481167475\">Enemy_SW_Minion01_03_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-463923185\">Enemy_SW_Minion01_03_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1927347166\">Enemy_SW_Minion01_03_Deathrattle</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1927347166\">Enemy_SW_Minion01_03_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle"
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
                  "abilityName": "Monster_SW_Minion01_03_PassiveAbility_Insert_Part01",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-463923185\">Enemy_SW_Minion01_03_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-481167475\">Enemy_SW_Minion01_03_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ]
        }
      ]
    },
    "4052020_Monster_SW_Minion01_03_Ability02_Part02": {
      "fileName": "4052020_Monster_SW_Minion01_03_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1270842428\">Enemy_SW_Minion01_03_CommandMarkLevel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-360637105\">Enemy_SW_Minion01_03_CommandMarkTarget</a>[<span class=\"descriptionNumberColor\">Shadow of the Grand Fair</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4052020_Monster_SW_Minion01_03_Ability02_Part01": {
      "fileName": "4052020_Monster_SW_Minion01_03_Ability02_Part01",
      "childAbilityList": [
        "4052020_Monster_SW_Minion01_03_Ability02_Camera",
        "4052020_Monster_SW_Minion01_03_Ability02_Part01",
        "4052020_Monster_SW_Minion01_03_Ability02_Part02"
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
          "ability": "Monster_SW_Minion01_03_Ability02_Part02",
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
    "4052020_Monster_SW_Minion01_03_Ability01_Part02": {
      "fileName": "4052020_Monster_SW_Minion01_03_Ability01_Part02",
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
            "DamageType": "Quantum",
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1270842428\">Enemy_SW_Minion01_03_CommandMarkLevel</a>"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4052020_Monster_SW_Minion01_03_Ability01_Part01": {
      "fileName": "4052020_Monster_SW_Minion01_03_Ability01_Part01",
      "childAbilityList": [
        "4052020_Monster_SW_Minion01_03_Ability01_Camera",
        "4052020_Monster_SW_Minion01_03_Ability01_Part01",
        "4052020_Monster_SW_Minion01_03_Ability01_Part02"
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
          "ability": "Monster_SW_Minion01_03_Ability01_Part02",
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
    "4052020_Handling": {
      "fileName": "4052020_Handling",
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
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "指挥",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Level Entity}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1270842428\">Enemy_SW_Minion01_03_CommandMarkLevel</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Level Entity}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-173051125\">Enemy_SW_Minion01_03_CommandMarkLevelCD</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1665795245\">Enemy_SW_Minion01_03_CommandMarkDarkTeam</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Target Count",
                                "target": {
                                  "name": "Target Sequence",
                                  "Sequence": [
                                    {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team All}}"
                                    },
                                    {
                                      "name": "Target Filter",
                                      "conditions": {
                                        "name": "Check Boolean Value",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "value": "SW_Minion01_03"
                                      }
                                    }
                                  ]
                                },
                                "compareType": ">=",
                                "value2": 2
                              }
                            ]
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
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill02"
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
                              "value": 1
                            },
                            {
                              "name": "Choose Ability Target",
                              "skillName": "Skill01",
                              "target": {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-360637105\">Enemy_SW_Minion01_03_CommandMarkTarget</a>[<span class=\"descriptionNumberColor\">Shadow of the Grand Fair</span>]",
                                "target": null,
                                "max": 1
                              }
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill01"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  }
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