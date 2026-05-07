const configAbility = {
  "fileName": "61006_HeliobusActionAbilitySetBoom_Boom",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "BombCount",
      "value": 0
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
        "name": "Target Has Lowest/Highest Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "partOf": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
        "minOrMax": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
        "justAddedOrActive": true
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "BombCount",
          "value": {
            "operator": "Variables[0] (BombCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(BombCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "BombCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "_BombLayer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
          "multiplier": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"848367644\">HeliobusActionAbilitySetBoom_Ability03_BreakListener</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (_BombLayer) || RETURN",
            "displayLines": "_BombLayer",
            "constants": [],
            "variables": [
              "_BombLayer"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageFlat": {
                  "operator": "Variables[0] (Damage) || Variables[1] (_MaxAttack) || MUL || Constants[0] (1) || Variables[2] (AdditionRatio) || Variables[3] (_Layer) || MUL || ADD || MUL || RETURN",
                  "displayLines": "((Damage * _MaxAttack) * (1 + (AdditionRatio * _Layer)))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "Damage",
                    "_MaxAttack",
                    "AdditionRatio",
                    "_Layer"
                  ]
                },
                "Toughness": {
                  "displayLines": 30
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Follow-up"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
              "stackLimit": {
                "operator": "Variables[0] (_MaxLayer) || RETURN",
                "displayLines": "_MaxLayer",
                "constants": [],
                "variables": [
                  "_MaxLayer"
                ]
              },
              "valuePerStack": {
                "DisplayRatio": {
                  "operator": "Variables[0] (AdditionRatio) || RETURN",
                  "displayLines": "AdditionRatio",
                  "constants": [],
                  "variables": [
                    "AdditionRatio"
                  ]
                },
                "DisplayMaxLayer": {
                  "operator": "Variables[0] (_MaxLayer) || RETURN",
                  "displayLines": "_MaxLayer",
                  "constants": [],
                  "variables": [
                    "_MaxLayer"
                  ]
                }
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (AdjoinDamage) || Variables[1] (_MaxAttack) || MUL || Constants[0] (1) || Variables[2] (AdditionRatio) || Variables[3] (_Layer) || MUL || ADD || MUL || RETURN",
                      "displayLines": "((AdjoinDamage * _MaxAttack) * (1 + (AdditionRatio * _Layer)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "AdjoinDamage",
                        "_MaxAttack",
                        "AdditionRatio",
                        "_Layer"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Fire"
                    },
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DisplayRatio": {
                      "operator": "Variables[0] (AdditionRatio) || RETURN",
                      "displayLines": "AdditionRatio",
                      "constants": [],
                      "variables": [
                        "AdditionRatio"
                      ]
                    },
                    "DisplayMaxLayer": {
                      "operator": "Variables[0] (_MaxLayer) || RETURN",
                      "displayLines": "_MaxLayer",
                      "constants": [],
                      "variables": [
                        "_MaxLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"848367644\">HeliobusActionAbilitySetBoom_Ability03_BreakListener</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BombCount",
        "compareType": ">",
        "value2": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertFlag",
      "value": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "DisplayRatio",
        "DisplayMaxLayer"
      ],
      "description": "Each stack increases DMG received from Skyfire Curse by <span class=\"descriptionNumberColor\">DisplayRatio</span>, up to <span class=\"descriptionNumberColor\">DisplayMaxLayer</span> stack(s).",
      "type": "Debuff",
      "effectName": "Quincunx Smite (Max)",
      "statusName": "Quincunx Smite (Max)",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DisplayRatio",
              "value": {
                "operator": "Variables[0] (DisplayRatio) || RETURN",
                "displayLines": "DisplayRatio",
                "constants": [],
                "variables": [
                  "DisplayRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DisplayMaxLayer",
              "value": {
                "operator": "Variables[0] (DisplayMaxLayer) || RETURN",
                "displayLines": "DisplayMaxLayer",
                "constants": [],
                "variables": [
                  "DisplayMaxLayer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>",
      "functionalTurn": "AnyOneTurn",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Quintuple Savage",
                  "desc": "Simultaneously trigger #1[i] or more \"Quincunx Smite\" and end the battle",
                  "rarity": "Low",
                  "type": "Hidden until Completion",
                  "params": [
                    3
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-249465188\">HeliobusActionAbilitySetBoom_Ability03_Break</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"483030905\">StanceBreak_Fire</a>",
              "variables": {}
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-249465188\">HeliobusActionAbilitySetBoom_Ability03_Break</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__848367644\">HeliobusActionAbilitySetBoom_Ability03_BreakListener</a>",
      "execute": [
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-249465188\">HeliobusActionAbilitySetBoom_Ability03_Break</a>"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}