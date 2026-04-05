const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012010,
  "trimCharacterName": 5012010,
  "abilityList": [
    "5012010_Monster_W3_TV_03_Ability02_Part02",
    "5012010_Monster_W3_TV_03_Ability02_Part01",
    "5012010_Monster_W3_TV_03_Ability01_Part02",
    "5012010_Monster_W3_TV_03_Ability01_Part01",
    "5012010_Monster_W3_TV_03_PassiveAbilityInitiate",
    "5012010_Modifiers"
  ],
  "abilityObject": {
    "5012010_Monster_W3_TV_03_Ability02_Part02": {
      "fileName": "5012010_Monster_W3_TV_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Happiness Charm"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1125178298\">Enemy_W3_TV_03_PowerUnlockListener</a>[<span class=\"descriptionNumberColor\">Happy Smiles</span>]"
        },
        {
          "name": "Random Event",
          "isUnique": true,
          "odds": [
            {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            {
              "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
              "displayLines": "{[Skill02[4]]}",
              "constants": [],
              "variables": [
                "{[Skill02[4]]}"
              ]
            },
            {
              "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
              "displayLines": "{[Skill02[5]]}",
              "constants": [],
              "variables": [
                "{[Skill02[5]]}"
              ]
            }
          ],
          "execute": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1638600472\">Standard_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
                }
              ]
            },
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "popUpText": "Action Advanced"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Constants[0] (0) || Variables[0] ({[Skill02[1]]}) || SUB || RETURN",
                            "displayLines": "(0 - {[Skill02[1]]})",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "{[Skill02[1]]}"
                            ]
                          },
                          "adjustmentType": "Advance"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "(0 - {[Skill02[1]]})"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "(0 - {[Skill02[1]]})"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1044186345\">Enemy_W3_TV_03_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                  "duration": 1,
                  "baseChance": 1,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012010_Monster_W3_TV_03_Ability02_Part01": {
      "fileName": "5012010_Monster_W3_TV_03_Ability02_Part01",
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
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_03_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012010_Monster_W3_TV_03_Ability01_Part02": {
      "fileName": "5012010_Monster_W3_TV_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
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
    "5012010_Monster_W3_TV_03_Ability01_Part01": {
      "fileName": "5012010_Monster_W3_TV_03_Ability01_Part01",
      "childAbilityList": [
        "5012010_Monster_W3_TV_03_Ability01_Part01",
        "5012010_Monster_W3_TV_03_Ability01_Part02",
        "5012010_Monster_W3_TV_03_Ability01_Camera"
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
          "ability": "Monster_W3_TV_03_Ability01_Part02",
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
    "5012010_Monster_W3_TV_03_PassiveAbilityInitiate": {
      "fileName": "5012010_Monster_W3_TV_03_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1125178298\">Enemy_W3_TV_03_PowerUnlockListener</a>[<span class=\"descriptionNumberColor\">Happy Smiles</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1125178298\">Enemy_W3_TV_03_PowerUnlockListener</a>[<span class=\"descriptionNumberColor\">Happy Smiles</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "value1": "MDF_isChange",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isChange",
                      "value": 1
                    },
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
                        ]
                      },
                      "adjustment": "Add"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_TV_03_Ability02_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyBuffSelf",
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
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Aborted",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W3_TV_03_Ability02_Part01"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isChange",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When this unit is attacked for the first time, the target team gains Punchline, and this unit uses \"Happiness Charm.\"",
          "type": "Other",
          "statusName": "Happy Smiles"
        }
      ]
    },
    "5012010_Modifiers": {
      "fileName": "5012010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1044186345\">Enemy_W3_TV_03_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
          "modifierFlags": [
            "STAT_CTRL",
            "DisableAction",
            "STAT_CTRL_Shake",
            "IdleStun",
            "STAT_Stun_Effect"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Variables[0] (MDF_ActionDelayRatio) || RETURN",
                        "displayLines": "MDF_ActionDelayRatio",
                        "constants": [],
                        "variables": [
                          "MDF_ActionDelayRatio"
                        ]
                      },
                      "adjustmentType": "Advance"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Engulfed in Strong Reverberations"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_ActionDelayRatio"
          ],
          "latentQueue": [],
          "description": "Action delayed. Cannot take actions for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Strong Reverberation",
          "statusName": "Strong Reverberation"
        }
      ],
      "references": []
    }
  }
}