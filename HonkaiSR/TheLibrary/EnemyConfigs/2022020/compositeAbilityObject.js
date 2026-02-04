const compositeAbilityObject = {
  "fullCharacterName": 2022020,
  "trimCharacterName": 2022020,
  "abilityList": [
    "2022020_Monster_W2_Abomi02_Ability02_Part02",
    "2022020_Monster_W2_Abomi02_Ability02_Part01",
    "2022020_Monster_W2_Abomi02_Ability01_Part02",
    "2022020_Monster_W2_Abomi02_Ability01_Part01",
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail_Part02",
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail",
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Part02",
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert",
    "2022020_Monster_W2_Abomi02_Passive01",
    "2022020_Modifiers"
  ],
  "abilityObject": {
    "2022020_Monster_W2_Abomi02_Ability02_Part02": {
      "fileName": "2022020_Monster_W2_Abomi02_Ability02_Part02",
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
                "DamageType": "Thunder",
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_Ability02_Part01": {
      "fileName": "2022020_Monster_W2_Abomi02_Ability02_Part01",
      "childAbilityList": [
        "2022020_Monster_W2_Abomi02_Ability02_Part01",
        "2022020_Monster_W2_Abomi02_Ability02_Part02",
        "2022020_Monster_W2_Abomi02_Ability02_Camera"
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
          "ability": "Monster_W2_Abomi02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_Ability01_Part02": {
      "fileName": "2022020_Monster_W2_Abomi02_Ability01_Part02",
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
          "modifier": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AttackCount",
          "context": "TargetEntity",
          "value": 1,
          "max": 2
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MarkRemainCount",
          "context": "TargetEntity",
          "value": 1,
          "max": 2
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Abomi02_TargetList[<span class=\"descriptionNumberColor\">Core Formation</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_Ability01_Part01": {
      "fileName": "2022020_Monster_W2_Abomi02_Ability01_Part01",
      "childAbilityList": [
        "2022020_Monster_W2_Abomi02_Ability01_Part01",
        "2022020_Monster_W2_Abomi02_Ability01_Part02",
        "2022020_Monster_W2_Abomi02_Ability01_Camera"
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
          "ability": "Monster_W2_Abomi02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail_Part02": {
      "fileName": "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "IsInDeathRattle",
          "value": 1
        },
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
          "state": "Skill03_Fail",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DeathrattleFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Mark Entity For Immediate Death"
        }
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail": {
      "fileName": "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Core Rupture"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi02_PassiveAbility_Insert_Fail_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Part02": {
      "fileName": "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "IsInDeathRattle",
          "value": 1
        },
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
                    "name": "Compare: Variable",
                    "value1": "MarkRemainCount",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MarkRemainCount",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DeathrattleFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
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
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Attack End",
        {
          "name": "Mark Entity For Immediate Death"
        }
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_PassiveAbility_Insert": {
      "fileName": "2022020_Monster_W2_Abomi02_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Core Rupture"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi02_PassiveAbility_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022020_Monster_W2_Abomi02_Passive01": {
      "fileName": "2022020_Monster_W2_Abomi02_Passive01",
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
          "modifier": "Monster_W2_Abomi02_Initiate"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AttackCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "IsInDeathRattle"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "MarkRemainCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Abomi02_EffectControl"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Abomi02_Initiate",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "LightTeam_Count"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "LightTeam_Count",
                  "livingTargets": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": {
                    "operator": "Variables[0] (LightTeam_Count) || RETURN",
                    "displayLines": "LightTeam_Count",
                    "constants": [],
                    "variables": [
                      "LightTeam_Count"
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "noTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DeathrattleFlag"
                    }
                  ]
                }
              ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MarkRemainCount",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Abomi02_PassiveAbility_Insert",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Abomi02_PassiveAbility_Insert_Fail",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
    "2022020_Modifiers": {
      "fileName": "2022020_Modifiers",
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
          "for": "Monster_W2_Abomi02_EffectControl",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MarkRemainCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AttackCount",
            "IsInDeathRattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "IsInDeathRattle",
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
                      "variableName": "MarkRemainCount",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 2
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Upon receiving a killing blow, the Disciples of Sanctus Medicus: Internal Alchemist deals DMG 1 time to targets that are inflicted with Spur of Thunderwoe by them.",
          "type": "Debuff",
          "effectName": "Thunderwoe Strike",
          "statusName": "Spur of Thunderwoe"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Abomi02_TargetList[<span class=\"descriptionNumberColor\">Core Formation</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MarkRemainCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{No Target}}"
                      },
                      "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "LightTeam_Count"
                    },
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "variableName": "LightTeam_Count",
                      "livingTargets": true
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": {
                        "operator": "Variables[0] (LightTeam_Count) || RETURN",
                        "displayLines": "LightTeam_Count",
                        "constants": [],
                        "variables": [
                          "LightTeam_Count"
                        ]
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Set Target Parameter",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "paramTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{No Target}}"
                      },
                      "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "LightTeam_Count"
                    },
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "variableName": "LightTeam_Count",
                      "livingTargets": true
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": {
                        "operator": "Variables[0] (LightTeam_Count) || RETURN",
                        "displayLines": "LightTeam_Count",
                        "constants": [],
                        "variables": [
                          "LightTeam_Count"
                        ]
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Abomi02_Mark[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Set Target Parameter",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "paramTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W2_Abomi02_TargetList[<span class=\"descriptionNumberColor\">Core Formation</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AttackCount"
          ],
          "description": "Upon receiving a killing blow, the unit deals DMG 1 time to targets that are afflicted with Spur of Thunderwoe by them.<br>The current targets who have Spur of Thunderwoe on them are: %DynamicTargetName.",
          "type": "Buff",
          "effectName": "Core Formation",
          "statusName": "Core Formation"
        }
      ],
      "references": []
    }
  }
}