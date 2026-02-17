const configAbility = {
  "fileName": "3002051_Modifiers",
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