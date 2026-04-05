const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4034012,
  "trimCharacterName": 4034012,
  "abilityList": [
    "4034012_Monster_W4_FireProwler_ChargeBreak",
    "4034012_Monster_W4_FireProwler_HPBack",
    "4034012_Monster_W4_FireProwler_01_DeathRattle",
    "4034012_Monster_W4_FireProwler_Ability06_Part02",
    "4034012_Monster_W4_FireProwler_Ability06_Part01",
    "4034012_Monster_W4_FireProwler_Ability07_Part02",
    "4034012_Monster_W4_FireProwler_Ability07_Part01",
    "4034012_Monster_W4_FireProwler_Ability05_Part02",
    "4034012_Monster_W4_FireProwler_Ability05_Part01",
    "4034012_Monster_W4_FireProwler_Ability04_Part02",
    "4034012_Monster_W4_FireProwler_Ability04_Part01",
    "4034012_Monster_W4_FireProwler_Ability03_Part02",
    "4034012_Monster_W4_FireProwler_Ability03_Part01",
    "4034012_Monster_W4_FireProwler_Ability02_Assist",
    "4034012_Monster_W4_FireProwler_Ability01_Assist",
    "4034012_Monster_W4_FireProwler_Ability02_Part02",
    "4034012_Monster_W4_FireProwler_Ability02_Part01",
    "4034012_Monster_W4_FireProwler_Ability01_Part02",
    "4034012_Monster_W4_FireProwler_Ability01_Part01",
    "4034012_Monster_W4_FireProwler_ChangePhase1",
    "4034012_Monster_W4_FireProwler_PassiveAbility02",
    "4034012_Monster_W4_FireProwler_PassiveAbility01",
    "4034012_Monster_W4_FireProwler_ChangePhase",
    "4034012_Monster_W4_FireProwler_PassiveAbility_BGM",
    "4034012_Modifiers"
  ],
  "abilityObject": {
    "4034012_Monster_W4_FireProwler_ChargeBreak": {
      "fileName": "4034012_Monster_W4_FireProwler_ChargeBreak",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP",
            "compareType": "<=",
            "value2": 0
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "HPBack",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_HPBack": {
      "fileName": "4034012_Monster_W4_FireProwler_HPBack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Lost Sacrifice"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "HPBack_TimePowerCount"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "HPBack_TimePowerCount",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HPBack_TimePowerCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "EvolveBuildActivity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "HPBack",
            "compareType": "=",
            "value2": 1
          },
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "HPBack_TimePowerCount",
              "value": -1
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
            "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
          },
          "passed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "\"Entangled By Agony\"'s restoration reduced"
            }
          ],
          "failed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "\"Entangled By Agony\" dispelled"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
            "compareType": ">",
            "value2": 0,
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "barType": "FireProwler",
              "trigger": "NumChange_Decrease"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "includeDyingTargets": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "HPBack",
                "compareType": "=",
                "value2": 1
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID_3",
                          "summonLocation": "FormationRecord"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HPBack_TimePowerCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Stage Type",
                        "stageType": "EvolveBuildActivity"
                      }
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Stage Type",
                        "stageType": "EvolveBuildActivity"
                      }
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "maximum": 0,
                  "assignState": "True",
                  "barType": "FireProwler",
                  "trigger": "Step_01"
                }
              ]
            },
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentHPRatio"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "phase": "Phase03"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]"
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
                    "displayLines": "({[Skill04[1]]} * CurrentHPRatio)",
                    "constants": [],
                    "variables": [
                      "{[Skill04[1]]}",
                      "CurrentHPRatio"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
                  "valuePerStack": {
                    "MDF_RallyHP": {
                      "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
                      "displayLines": "({[Skill04[1]]} * CurrentHPRatio)",
                      "constants": [],
                      "variables": [
                        "{[Skill04[1]]}",
                        "CurrentHPRatio"
                      ]
                    }
                  }
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
                "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "popUpText": "Entangled By Agony"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "HPBack",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_01_DeathRattle": {
      "fileName": "4034012_Monster_W4_FireProwler_01_DeathRattle",
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
          "variableName": "Deathrattle_Count"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "EvolveBuildActivity"
              }
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "Deathrattle",
            "compareType": "=",
            "value2": 1
          },
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Deathrattle_Count",
              "value": 1,
              "max": 4
            },
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
              "includeTargetsInLimbo": true,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "Deathrattle",
              "value": 0
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
          },
          "passed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "\"Entangled By Agony\"'s restoration reduced"
            }
          ],
          "failed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "\"Entangled By Agony\" dispelled"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability06_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill01_AssistCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill02_AssistCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill01_CurCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill02_CurCount",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Assist_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Right of Caster}}"
                        },
                        "characterName": null
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Right of Caster}}"
                        },
                        "characterName": null
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Far Left Enemy Entity}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.4,
                          "ability": "Monster_W4_FireProwler_01_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.8,
                          "ability": "Monster_W4_FireProwler_01_Ability01_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage Type",
                            "stageType": "EvolveBuildActivity"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_Ability01_Assist"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.4,
                          "ability": "Monster_W4_FireProwler_01_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.6,
                          "ability": "Monster_W4_FireProwler_01_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 2
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 2.1,
                          "ability": "Monster_W4_FireProwler_01_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 3
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 2.4,
                          "ability": "Monster_W4_FireProwler_01_Ability01_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage Type",
                            "stageType": "EvolveBuildActivity"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_Ability01_Assist"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Assist_Flag",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Right Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Right Enemy Entity}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Left of Caster}}"
                        },
                        "characterName": null
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Left of Caster}}"
                        },
                        "characterName": null
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Far Right Enemy Entity}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "delay": 1.5,
                          "ability": "Monster_W4_FireProwler_01_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "delay": 2,
                          "ability": "Monster_W4_FireProwler_01_Ability02_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage Type",
                            "stageType": "EvolveBuildActivity"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_Ability02_Assist"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "delay": 1.5,
                          "ability": "Monster_W4_FireProwler_01_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "delay": 1.8,
                          "ability": "Monster_W4_FireProwler_01_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 2
                              }
                            ]
                          },
                          "delay": 2.3,
                          "ability": "Monster_W4_FireProwler_01_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 3
                              }
                            ]
                          },
                          "delay": 2.7,
                          "ability": "Monster_W4_FireProwler_01_Ability02_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage Type",
                            "stageType": "EvolveBuildActivity"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_Ability02_Assist"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Assist_Flag",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>",
          "stackData": [],
          "latentQueue": [
            "Skill01_AssistCount",
            "Skill02_AssistCount"
          ]
        }
      ]
    },
    "4034012_Monster_W4_FireProwler_Ability06_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability06_Part01",
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
          "ability": "Monster_W4_FireProwler_Ability06_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability07_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-415724336\">Monster_W4_FireProwler_MainStory_04</a>"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "AttackCount",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": {
            "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
            "displayLines": "{[Skill07[0]]}",
            "constants": [],
            "variables": [
              "{[Skill07[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (AttackCount) || INVERT || Variables[1] ({[Skill07[0]]}) || DIV || RETURN",
            "displayLines": "(-AttackCount / {[Skill07[0]]})",
            "constants": [],
            "variables": [
              "AttackCount",
              "{[Skill07[0]]}"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "maximum": 0,
          "assignState": "True",
          "barType": "FireProwler",
          "trigger": "Step_01"
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "barType": "FireProwler",
          "trigger": "NumChange_Purge"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
              "displayLines": "{[Skill07[2]]}",
              "constants": [],
              "variables": [
                "{[Skill07[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (AttackCount) || RETURN",
            "displayLines": "AttackCount",
            "constants": [],
            "variables": [
              "AttackCount"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
                  "displayLines": "{[Skill07[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[1]]}"
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-415724336\">Monster_W4_FireProwler_MainStory_04</a>"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill07_HealHP"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill07_HealHP",
              "value": {
                "operator": "Variables[0] (Skill07_HealHP) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Skill07_HealHP + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Skill07_HealHP"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Reconstruct Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "casterFilter": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "counter": 1,
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
              "variable": "MDF_RallyHP",
              "target2": null,
              "variable2": "Skill07_HealHPRatio"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (Skill07_HealHPRatio) || Variables[1] (Skill07_HealHP) || MUL || RETURN",
            "displayLines": "(Skill07_HealHPRatio * Skill07_HealHP)",
            "constants": [],
            "variables": [
              "Skill07_HealHPRatio",
              "Skill07_HealHP"
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "onlyRemoveOwnersInstance": true,
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4034012_Monster_W4_FireProwler_Ability07_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability07_Part01",
      "childAbilityList": [
        "4034012_Monster_W4_FireProwler_Ability07_Camera",
        "4034012_Monster_W4_FireProwler_Ability07_Part01",
        "4034012_Monster_W4_FireProwler_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W4_FireProwler_Ability07_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
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
    "4034012_Monster_W4_FireProwler_Ability05_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
            "compareType": ">",
            "value2": 0,
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] (AttackCount) || INVERT || Variables[1] ({[Skill05[0]]}) || DIV || RETURN",
                "displayLines": "(-AttackCount / {[Skill05[0]]})",
                "constants": [],
                "variables": [
                  "AttackCount",
                  "{[Skill05[0]]}"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "maximum": 0,
              "assignState": "True",
              "barType": "FireProwler",
              "trigger": "Step_01"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "barType": "FireProwler",
              "trigger": "NumChange_Purge"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": ">=",
                "value2": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AttackCount",
                    "compareType": "=",
                    "value2": 8
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill05[1]]}) || Constants[0] (2) || MUL || RETURN",
                          "displayLines": "({[Skill05[1]]} * 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            "{[Skill05[1]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
              },
              "passed": [
                "Trigger: Ability End"
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                "Trigger: Ability End"
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AttackCount",
              "value": 0
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
              },
              "passed": [
                "Trigger: Ability End"
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                "Trigger: Ability End"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability05_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability05_Part01",
      "childAbilityList": [
        "4034012_Monster_W4_FireProwler_Ability05_Camera",
        "4034012_Monster_W4_FireProwler_Ability05_Camera_NoClone",
        "4034012_Monster_W4_FireProwler_Ability05_Part01",
        "4034012_Monster_W4_FireProwler_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
            "compareType": ">",
            "value2": 0,
            "valueType": "Layer"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "AttackCount",
              "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "multiplier": {
                "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                "displayLines": "{[Skill05[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[0]]}"
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (AttackCount) || RETURN",
                "displayLines": "AttackCount",
                "constants": [],
                "variables": [
                  "AttackCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 8
                }
              ],
              "defaultEvents": []
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "EvolveBuildActivity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_Ability05_Part02",
          "isTrigger": true
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
    "4034012_Monster_W4_FireProwler_Ability04_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
        },
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentHPRatio"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_3",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_3",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_3",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_3",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_3) || RETURN",
              "displayLines": "SummonID_3",
              "constants": [],
              "variables": [
                "SummonID_3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase03"
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
                "displayLines": "({[Skill04[1]]} * CurrentHPRatio)",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}",
                  "CurrentHPRatio"
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Physical"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
              "valuePerStack": {
                "MDF_RallyHP": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
                  "displayLines": "({[Skill04[1]]} * CurrentHPRatio)",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}",
                    "CurrentHPRatio"
                  ]
                }
              }
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
            "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "Entangled By Agony"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
            "displayLines": "{[Skill04[0]]}",
            "constants": [],
            "variables": [
              "{[Skill04[0]]}"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "barType": "FireProwler",
          "trigger": "NumChange_Increase"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Calamity Power"
        },
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": {
            "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
            "displayLines": "{[Skill04[2]]}",
            "constants": [],
            "variables": [
              "{[Skill04[2]]}"
            ]
          },
          "adjustmentType": "="
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "EvolveBuildActivity"
              }
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"998450039\">Enemy_W4_FireProwler_MainStory_04_CustomTrigger</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4034012_Monster_W4_FireProwler_Ability04_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability04_Part01",
      "childAbilityList": [
        "4034012_Monster_W4_FireProwler_Ability04_Camera",
        "4034012_Monster_W4_FireProwler_Ability04_Part01",
        "4034012_Monster_W4_FireProwler_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W4_FireProwler_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability03_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "EvolveBuildActivity"
                  }
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "EvolveBuildActivity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_1) || RETURN",
              "displayLines": "SummonID_1",
              "constants": [],
              "variables": [
                "SummonID_1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase01"
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-585162959\">Enemy_W4_FireProwler_01_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_2) || RETURN",
              "displayLines": "SummonID_2",
              "constants": [],
              "variables": [
                "SummonID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase02"
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-635495816\">Enemy_W4_FireProwler_01_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "adjustmentType": "Advance"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-635495816\">Enemy_W4_FireProwler_01_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
          "type": "Other",
          "effectName": "Simultaneously use \"Fading Fate\"",
          "statusName": "Mutual Sacrifice"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-585162959\">Enemy_W4_FireProwler_01_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When \"%CasterName\" uses \"Demise's Storm\", also use \"Demise's Storm\" at the same time.",
          "type": "Other",
          "effectName": "Simultaneously use \"Demise's Storm\"",
          "statusName": "Mutual Sacrifice"
        }
      ]
    },
    "4034012_Monster_W4_FireProwler_Ability03_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability03_Part01",
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
          "ability": "Monster_W4_FireProwler_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Right Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Right Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Left of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Right Enemy Entity}}"
                    },
                    "characterName": null
                  }
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
    "4034012_Monster_W4_FireProwler_Ability02_Assist": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          }
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill02_Assist_Damage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "variable": "MDF_Skill02",
          "target2": null,
          "variable2": "Skill02_Assist_Damage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 4
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability01_Assist": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability01_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          }
        },
        "Deleted bullshit",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill01_Assist_Damage"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill01_Assist_Damage_Adjoin"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "variable": "MDF_Skill01",
          "target2": null,
          "variable2": "Skill01_Assist_Damage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "variable": "MDF_Skill01_Adjoin",
          "target2": null,
          "variable2": "Skill01_Assist_Damage_Adjoin"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 4
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability02_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentHPRatio"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_2",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_2",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                "invertCondition": true
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_2",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_2",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_2",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_2",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_2) || RETURN",
              "displayLines": "SummonID_2",
              "constants": [],
              "variables": [
                "SummonID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase02_Still"
            },
            "Deleted bullshit"
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability02_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability01_Part02": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          }
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
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentHPRatio"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                "invertCondition": true
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034017,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Flame Reaver of the Deepest Dark",
                    "isBaseCompare": true
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "AroundCasterOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_1) || RETURN",
              "displayLines": "SummonID_1",
              "constants": [],
              "variables": [
                "SummonID_1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase01_Still"
            },
            "Deleted bullshit"
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_Ability01_Part01": {
      "fileName": "4034012_Monster_W4_FireProwler_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_ChangePhase1": {
      "fileName": "4034012_Monster_W4_FireProwler_ChangePhase1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ChangePhase_Layer"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "ChangePhase_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ChangePhase_Layer) || INVERT || RETURN",
            "displayLines": "-ChangePhase_Layer",
            "constants": [],
            "variables": [
              "ChangePhase_Layer"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "maximum": 0,
          "assignState": "True",
          "barType": "FireProwler",
          "trigger": "Step_01"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
            "displayLines": "{[Skill01[3]]}",
            "constants": [],
            "variables": [
              "{[Skill01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
            "displayLines": "{[Skill01[3]]}",
            "constants": [],
            "variables": [
              "{[Skill01[3]]}"
            ]
          }
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "DMG Reduction"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChangePhase",
          "value": 1
        },
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillFlag",
          "value": 2
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Deathrattle"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-415724336\">Monster_W4_FireProwler_MainStory_04</a>"
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
              "value": 4
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 2
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-29397814\">Monster_W4_FireProwler_MainStory_33</a>"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_PassiveAbility02": {
      "fileName": "4034012_Monster_W4_FireProwler_PassiveAbility02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_PassiveAbility01": {
      "fileName": "4034012_Monster_W4_FireProwler_PassiveAbility01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1416002547\">Enemy_W4_FireProwler_AudioReset</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1791597207\">W4_FireProwler_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808374826\">W4_FireProwler_BattleScore2</a>"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "W4_FireProwler_00",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4034014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Flame Reaver of the Deepest Dark",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4034015,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Dawn-Denied Khaslana",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
            }
          ]
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
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                "invertCondition": true
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1319355089\">Enemy_W4_FireProwler_ChangePhaseController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-442867397\">Enemy_W4_FireProwler_EffectController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"911157260\">Enemy_W4_FireProwler_TimePowerListener</a>",
          "valuePerStack": {
            "MDF_MaxCount": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1332813778\">Enemy_W4_FireProwler_RallyHPListener</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                "displayLines": "{[Skill01[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                "displayLines": "{[Skill01[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[3]]}"
                ]
              }
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "DMG Reduction"
            }
          ]
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-442867397\">Enemy_W4_FireProwler_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">",
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4034017,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Flame Reaver of the Deepest Dark",
                        "isBaseCompare": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">",
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4034017,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Flame Reaver of the Deepest Dark",
                        "isBaseCompare": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]",
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4034017,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Flame Reaver of the Deepest Dark",
                        "isBaseCompare": true,
                        "invertCondition": true
                      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1319355089\">Enemy_W4_FireProwler_ChangePhaseController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ChangePhase",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]"
                        },
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhase"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_FireProwler_ChangePhase1",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1416002547\">Enemy_W4_FireProwler_AudioReset</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4034012_Monster_W4_FireProwler_ChangePhase": {
      "fileName": "4034012_Monster_W4_FireProwler_ChangePhase",
      "childAbilityList": [
        "4034012_Monster_W4_FireProwler_ChangePhase",
        "4034012_Monster_W4_FireProwler_ChangePhase_Camera"
      ],
      "skillTrigger": "ChangePhase",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4034012_Monster_W4_FireProwler_PassiveAbility_BGM": {
      "fileName": "4034012_Monster_W4_FireProwler_PassiveAbility_BGM",
      "childAbilityList": [
        "4034012_Monster_W4_FireProwler_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 4034015,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Dawn-Denied Khaslana",
                    "isBaseCompare": true
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1998379583\">Enemy_W4_FireProwler_ResetStageBGM</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1998379583\">Enemy_W4_FireProwler_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
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
    "4034012_Modifiers": {
      "fileName": "4034012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1808374826\">W4_FireProwler_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_3) || RETURN",
                          "displayLines": "SummonID_3",
                          "constants": [],
                          "variables": [
                            "SummonID_3"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_3) || RETURN",
                          "displayLines": "SummonID_3",
                          "constants": [],
                          "variables": [
                            "SummonID_3"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "noTargetFound": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "One Who Is Without Shadow",
                              "desc": "Defeat all Long-Shattered Vessels during the Flame Reaver of the Deepest Dark's casting of \"Silent Sorrow\"",
                              "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1791597207\">W4_FireProwler_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill06"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Assist_Flag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Minions of Modifier Holder}}"
                          },
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonID_1) || RETURN",
                              "displayLines": "SummonID_1",
                              "constants": [],
                              "variables": [
                                "SummonID_1"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          },
                          "noTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MDF_Skill06",
                              "value": {
                                "operator": "Variables[0] (MDF_Skill06) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_Skill06 + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_Skill06"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Assist_Flag",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Minions of Modifier Holder}}"
                          },
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonID_2) || RETURN",
                              "displayLines": "SummonID_2",
                              "constants": [],
                              "variables": [
                                "SummonID_2"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          },
                          "noTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MDF_Skill06",
                              "value": {
                                "operator": "Variables[0] (MDF_Skill06) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_Skill06 + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_Skill06"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Skill06",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "One Who Lost Their Shadow",
                              "desc": "Allows Flame Reaver of the Deepest Dark to cast \"Underworld's Grief\" consecutively #1 times in Phase 1 without triggering a synergy with Long-Shattered Vessel",
                              "rarity": "Low",
                              "params": [
                                2
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Skill06",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_FireProwler_10_Ability07_Camera"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__429916549\">Enemy_W4_FireProwler_PersistLoseHPPreShow</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-589756154\">Enemy_W4_FireProwler_01_LoseHP</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_TriggerOnce",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TriggerOnce",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "MDF_ChangeValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_CloneMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-589756154\">Enemy_W4_FireProwler_01_LoseHP</a>",
                      "variable": "MDF_LoseHPRatio",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_LoseHPRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PersistLoseHP",
                      "value": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || Variables[1] (MDF_HealedHP) || Variables[2] (MDF_CloneMaxHP) || DIV || Variables[3] (MDF_LoseHPRatio) || MUL || Variables[4] (MDF_MaxHP) || MUL || ADD || RETURN",
                        "displayLines": "(MDF_PersistLoseHP + (((MDF_HealedHP / MDF_CloneMaxHP) * MDF_LoseHPRatio) * MDF_MaxHP))",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP",
                          "MDF_HealedHP",
                          "MDF_CloneMaxHP",
                          "MDF_LoseHPRatio",
                          "MDF_MaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": "Persisting HP Loss",
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                        "displayLines": "-MDF_PersistLoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP"
                        ]
                      }
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": "Persisting HP Loss",
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                        "displayLines": "-MDF_PersistLoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
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
                    "value2": {
                      "operator": "Variables[0] (MDF_Layer) || RETURN",
                      "displayLines": "MDF_Layer",
                      "constants": [],
                      "variables": [
                        "MDF_Layer"
                      ]
                    },
                    "valueType": "MaxLayer"
                  },
                  "failed": [
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
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "\"DMG Reduction\" dispelled"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "\"DMG Reduction\" reduced"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Each stack reduces DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. 1 stack is lost after 1 \"Long-Shattered Vessel\" is defeated.",
          "type": "Buff",
          "statusName": "DMG Reduction",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HPBack",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "HPBack",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "abilityName": "Monster_W4_FireProwler_HPBack",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HPBack",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_FireProwler_01_NoDeathRattle",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After receiving a killing blow, if \"%CasterName\"'s \"Calamity Power\" stacks are not 0, be instantly resummoned and enter the \"Enfettered\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
          "type": "Other",
          "effectName": "Enfettered",
          "statusName": "Enfettered"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [
            "MDF_RallyHP"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RallyHP) || Variables[1] (MDF_CurrentHPRatio) || ADD || RETURN",
                    "displayLines": "(MDF_RallyHP + MDF_CurrentHPRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_RallyHP",
                      "MDF_CurrentHPRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RallyHP) || Variables[1] (MDF_CurrentHPRatio) || ADD || RETURN",
                    "displayLines": "(MDF_RallyHP + MDF_CurrentHPRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_RallyHP",
                      "MDF_CurrentHPRatio"
                    ]
                  }
                },
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
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "After absorbing \"Long-Shattered Vessel,\" restores the HP consumed to summon the current \"Long-Shattered Vessel.\" After \"Long-Shattered Vessel\" is defeated, this unit cannot restore the HP consumed used to summon the current \"Long-Shattered Vessel\" again.",
          "type": "Other",
          "statusName": "Entangled By Agony",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1332813778\">Enemy_W4_FireProwler_RallyHPListener</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "variable": "MDF_RallyHP",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_RallyHP",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalRallyHP",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalRallyHP) || Variables[1] (MDF_RallyHP) || ADD || RETURN",
                        "displayLines": "(MDF_TotalRallyHP + MDF_RallyHP)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalRallyHP",
                          "MDF_RallyHP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]",
                      "valuePerStack": {
                        "MDF_RallyHP": {
                          "operator": "Variables[0] (MDF_TotalRallyHP) || RETURN",
                          "displayLines": "MDF_TotalRallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_TotalRallyHP"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "variable": "MDF_RallyHP",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_RallyHP",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalRallyHP",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalRallyHP) || Variables[1] (MDF_RallyHP) || SUB || RETURN",
                        "displayLines": "(MDF_TotalRallyHP - MDF_RallyHP)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalRallyHP",
                          "MDF_RallyHP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]",
                      "valuePerStack": {
                        "MDF_RallyHP": {
                          "operator": "Variables[0] (MDF_TotalRallyHP) || RETURN",
                          "displayLines": "MDF_TotalRallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_TotalRallyHP"
                          ]
                        }
                      },
                      "addStacksPerTrigger": -1
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
          "for": "<a class=\"gModGreen\" id=\"mod__33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": [],
          "description": "When using certain abilities, consume all \"Calamity Power\" stacks to increase Hits Per Action.",
          "type": "Other",
          "statusName": "Calamity Power",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__911157260\">Enemy_W4_FireProwler_TimePowerListener</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "addStacksPerTrigger": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 0,
                  "assignState": "True",
                  "barType": "FireProwler",
                  "trigger": "Step_01"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SummonCount",
                      "value": {
                        "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_SummonCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SummonCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SummonCount",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Stage Type",
                                "stageType": "EvolveBuildActivity"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SummonCount",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Count",
                      "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4034017,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Flame Reaver of the Deepest Dark",
                            "isBaseCompare": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_01"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_02"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_03"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_03"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_Count",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "MDF_Count",
                                "compareType": "<",
                                "value2": 4
                              },
                              "passed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_01"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "MDF_Count",
                                    "compareType": "<",
                                    "value2": 8
                                  },
                                  "passed": [
                                    {
                                      "name": "Update Displayed Energy Bar",
                                      "value": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "entityClass": "Enemy",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "maximum": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "assignState": "True",
                                      "barType": "FireProwler",
                                      "trigger": "Step_02"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Update Displayed Energy Bar",
                                      "value": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "entityClass": "Enemy",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "maximum": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "assignState": "True",
                                      "barType": "FireProwler",
                                      "trigger": "Step_03"
                                    }
                                  ]
                                }
                              ]
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
            "MDF_MaxCount"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1",
                  "revertDefault": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
                      "removeAllInstances": true
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_FireProwler_ChargeBreak",
                  "priorityTag": "EnemyForceKill",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
                        "displayLines": "-MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 0,
                      "assignState": "True",
                      "barType": "FireProwler",
                      "trigger": "Step_01"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Use \"Cry Not For The Discarded\" during the next action.",
          "type": "Other",
          "effectName": "Silent Sorrow",
          "statusName": "Silent Sorrow"
        }
      ],
      "references": []
    }
  }
}