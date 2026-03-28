const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3002053,
  "trimCharacterName": 3002053,
  "abilityList": [
    "3002053_BattleEventAbility_Monster_W3_Junk_PuzzleAbility",
    "3002053_Monster_W3_Junk_ActivityTelevision",
    "3002053_Monster_W3_Junk_Insert_Part01",
    "3002053_Monster_W3_Junk_Ability02_Part02",
    "3002053_Monster_W3_Junk_Ability02_Part01",
    "3002053_Monster_W3_Junk_Ability01_Part02",
    "3002053_Monster_W3_Junk_Ability01_Part01",
    "3002053_Monster_W3_Junk_PassiveAbility",
    "3002053_Modifiers"
  ],
  "abilityObject": {
    "3002053_BattleEventAbility_Monster_W3_Junk_PuzzleAbility": {
      "fileName": "3002053_BattleEventAbility_Monster_W3_Junk_PuzzleAbility",
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
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED_11",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-349736416\">Monster_W3_Junk_ExtraWeakness_Imaginary</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__284863540\">Monster_W3_Junk_ExtraWeakness_Quantum</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__862965545\">Monster_W3_Junk_ExtraWeakness_Wind</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-161542417\">Monster_W3_Junk_ExtraWeakness_Thunder</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1631339070\">Monster_W3_Junk_ExtraWeakness_Ice</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__325665547\">Monster_W3_Junk_ExtraWeakness_Fire</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2117131994\">Monster_W3_Junk_ExtraWeakness_Physical</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "3002053_Monster_W3_Junk_ActivityTelevision": {
      "fileName": "3002053_Monster_W3_Junk_ActivityTelevision",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "WeaknessCount",
          "value": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"945585904\">Monster_W3_Junk_AttackListenerForPuzzle</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2087901039\">Monster_W3_Junk_ATMark</a>",
          "modifierFlags": [
            "Deathrattle"
          ],
          "stackData": [],
          "latentQueue": [
            "WeaknessCount"
          ]
        }
      ]
    },
    "3002053_Monster_W3_Junk_Insert_Part01": {
      "fileName": "3002053_Monster_W3_Junk_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "state": "Skill03",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002053_Monster_W3_Junk_Ability02_Part02": {
      "fileName": "3002053_Monster_W3_Junk_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1796573830\">Monster_W3_Junk_AttackAddRatio1</a>[<span class=\"descriptionNumberColor\">The Can's Battle Pose</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002053_Monster_W3_Junk_Ability02_Part01": {
      "fileName": "3002053_Monster_W3_Junk_Ability02_Part01",
      "childAbilityList": [
        "3002053_Monster_W3_Junk_Ability02_Part01",
        "3002053_Monster_W3_Junk_Ability02_Part02",
        "3002053_Monster_W3_Junk_Ability02_Camera"
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
          "ability": "Monster_W3_Junk_Ability02_Part02",
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
    "3002053_Monster_W3_Junk_Ability01_Part02": {
      "fileName": "3002053_Monster_W3_Junk_Ability01_Part02",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3002053_Monster_W3_Junk_Ability01_Part01": {
      "fileName": "3002053_Monster_W3_Junk_Ability01_Part01",
      "childAbilityList": [
        "3002053_Monster_W3_Junk_Ability01_Part01",
        "3002053_Monster_W3_Junk_Ability01_Part02",
        "3002053_Monster_W3_Junk_Ability01_Camera"
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
          "ability": "Monster_W3_Junk_Ability01_Part02",
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
    "3002053_Monster_W3_Junk_PassiveAbility": {
      "fileName": "3002053_Monster_W3_Junk_PassiveAbility",
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-298230207\">Monster_W3_Junk_AttackListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1622466775\">Monster_W3_Junk_Deathrattle</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-981101613\">W3_Junk_BattleScore1</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1622466775\">Monster_W3_Junk_Deathrattle</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle",
            "MuteHitFly",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo"
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Junk_Insert_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-298230207\">Monster_W3_Junk_AttackListener</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_AITargetHigherPriority"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Basic ATK",
                          "Skill",
                          "Ultimate",
                          "Follow-up",
                          "Memosprite",
                          "Elation DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
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
                        "name": "Compare: Variable",
                        "value1": "Unlock_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "WeaknessCount",
                        "compareType": "<",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Unlock_Flag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Fire"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Fire",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Fire"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1961937355\">Monster_W3_Junk_AttachWeaknessFire</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Ice"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Ice",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Ice"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1961481854\">Monster_W3_Junk_AttachWeaknessIce</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Imaginary"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Imaginary",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Imaginary"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1608631584\">Monster_W3_Junk_AttachWeaknessImaginary</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Physical"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Physical",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Physical"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"90925210\">Monster_W3_Junk_AttachWeaknessPhysical</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Quantum"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Quantum",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Quantum"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1811165940\">Monster_W3_Junk_AttachWeaknessQuantum</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Lightning"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Thunder",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Thunder"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1565920593\">Monster_W3_Junk_AttachWeaknessThunder</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Wind"
                            ]
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": "Wind",
                            "invertCondition": true,
                            "defaultOnly": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Wind"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2033100009\">Monster_W3_Junk_AttachWeaknessWind</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Unlock_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "killer": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
    "3002053_Modifiers": {
      "fileName": "3002053_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-981101613\">W3_Junk_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Hazardous Waste",
                          "desc": "Have #1 allies get defeated by the Lordly Trashcan",
                          "rarity": "Low",
                          "params": [
                            1
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1961481854\">Monster_W3_Junk_AttachWeaknessIce</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1811165940\">Monster_W3_Junk_AttachWeaknessQuantum</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1608631584\">Monster_W3_Junk_AttachWeaknessImaginary</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1565920593\">Monster_W3_Junk_AttachWeaknessThunder</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2033100009\">Monster_W3_Junk_AttachWeaknessWind</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1961937355\">Monster_W3_Junk_AttachWeaknessFire</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__90925210\">Monster_W3_Junk_AttachWeaknessPhysical</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WeaknessCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Unlock_Flag",
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__945585904\">Monster_W3_Junk_AttackListenerForPuzzle</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Monster_W3_Junk_PuzzleAbility"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Basic ATK",
                          "Skill",
                          "Ultimate",
                          "Follow-up"
                        ]
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED_11"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Fire"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Fire"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Ice"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Ice"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Imaginary"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Imaginary"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Physical"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Physical"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Quantum"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Quantum"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Thunder"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Wind"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "action": "Attach",
                          "valueList": [
                            "Wind"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED_11"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "BattleEventAbility_Monster_W3_Junk_PuzzleAbility",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "WeaknessCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1796573830\">Monster_W3_Junk_AttackAddRatio1</a>[<span class=\"descriptionNumberColor\">The Can's Battle Pose</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackAddRatioCurrent",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_CurrentLayer) || RETURN",
                        "displayLines": "MDF_CurrentLayer",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentLayer"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AttackAddRatioCurrent",
                          "value": {
                            "operator": "Variables[0] (MDF_AttackAddRatioCurrent) || Constants[0] (2) || MUL || RETURN",
                            "displayLines": "(MDF_AttackAddRatioCurrent * 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "MDF_AttackAddRatioCurrent"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CurrentLayer",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackAddRatioCurrent",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_AttackAddRatioCurrent) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_AttackAddRatioCurrent)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_AttackAddRatioCurrent"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatioCurrent) || RETURN",
                    "displayLines": "MDF_AttackAddRatioCurrent",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatioCurrent"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddRatioCurrent</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "The Can's Battle Pose"
        }
      ],
      "references": []
    }
  }
}