const compositeAbilityObject = {
  "fullCharacterName": 1002030,
  "trimCharacterName": 1002030,
  "abilityList": [
    "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle",
    "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack",
    "1002030_Monster_W1_Soldier04_AbilityP01_Initiate",
    "1002030_Monster_W1_Soldier04_Ability02_Part02",
    "1002030_Monster_W1_Soldier04_Ability02_Part01",
    "1002030_Monster_W1_Soldier04_Ability01_Part02",
    "1002030_Monster_W1_Soldier04_Ability01_Part01",
    "1002030_Modifiers"
  ],
  "abilityObject": {
    "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle": {
      "fileName": "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack": {
      "fileName": "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack",
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
              "target": "{{Ability Target(ST)}}"
            },
            "team": "Player Team",
            "location": "Max"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "team": "Player Team"
              }
            }
          ]
        },
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
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                  "displayLines": "{[SkillP01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1002030_Monster_W1_Soldier04_AbilityP01_Initiate": {
      "fileName": "1002030_Monster_W1_Soldier04_AbilityP01_Initiate",
      "childAbilityList": [
        "1002030_Monster_W1_Soldier04_AbilityP01_Initiate",
        "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack",
        "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 100203010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Silvermane Cannoneer"
              },
              {
                "name": "Enemy ID",
                "ID": 100203010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Silvermane Cannoneer"
              }
            ]
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W1_Soldier04_AbilityP01_EnterBattle"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateAttack"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateDie"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenSelfDie"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenSelfBreak"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "CurrentSupportNumber"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_ListenSelfBreak",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurrentSupportNumber"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_ListenSelfDie",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateDie",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_W1_Soldier04_AbilityP01_OnDieOrEscape"
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_W1_Soldier04_AbilityP01_OnDieOrEscape"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "TaskList_W1_Soldier04_AbilityP01_OnDieOrEscape",
              "parse": [
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "CurrentSupportNumber",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 99
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentSupportNumber",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
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
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateAttack",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "flagName": "STAT_CTRL"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "flagName": "Break"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "flagName": "DisableAction"
                            }
                          ]
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 1,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackOthers",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "Break",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                      "onlyRemoveOwnersInstance": true
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CurrentSupportNumber",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 99
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentSupportNumber",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
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
          "for": "Enemy_W1_Soldier04_AbilityP01_EnterBattle",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle",
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
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "Break",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1002030_Monster_W1_Soldier04_Ability02_Part02": {
      "fileName": "1002030_Monster_W1_Soldier04_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentSupportNumber",
          "context": "TargetEntity",
          "value": 1,
          "max": 99
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1002030_Monster_W1_Soldier04_Ability02_Part01": {
      "fileName": "1002030_Monster_W1_Soldier04_Ability02_Part01",
      "childAbilityList": [
        "1002030_Monster_W1_Soldier04_Ability02_Part01",
        "1002030_Monster_W1_Soldier04_Ability02_Part02",
        "1002030_Monster_W1_Soldier04_Ability02_Camera"
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
          "ability": "Monster_W1_Soldier04_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002030_Monster_W1_Soldier04_Ability01_Part02": {
      "fileName": "1002030_Monster_W1_Soldier04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired"
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
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1002030_Monster_W1_Soldier04_Ability01_Part01": {
      "fileName": "1002030_Monster_W1_Soldier04_Ability01_Part01",
      "childAbilityList": [
        "1002030_Monster_W1_Soldier04_Ability01_Part01",
        "1002030_Monster_W1_Soldier04_Ability01_Part02",
        "1002030_Monster_W1_Soldier04_Ability01_Camera"
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
          "ability": "Monster_W1_Soldier04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002030_Modifiers": {
      "fileName": "1002030_Modifiers",
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
          "for": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
          "stackType": "ReplaceByCaster",
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
                  "scope": "TargetEntity",
                  "variableName": "SupportAttackCounter"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SupportAttackTriggerFlag"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SupportAttackCounter",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SupportAttackCounter"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SupportAttackTriggerFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "SupportAttackCounter",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SupportAttackCounter"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SupportAttackTriggerFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CurrentSupportNumber"
          ],
          "description": "Receives Support from %CasterName.",
          "type": "Other",
          "effectName": "Support Target",
          "statusName": "Reinforced"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When a Supported friendly unit attacks any target, this unit will immediately launch a Follow-Up ATK on the target.",
          "type": "Buff",
          "effectName": "Provide Support",
          "statusName": "Support"
        }
      ],
      "references": []
    }
  }
}