const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033010,
  "trimCharacterName": 4033010,
  "abilityList": [
    "4033010_Monster_XP_Elite01_02_Ability05_Part02",
    "4033010_Monster_XP_Elite01_02_Ability05_Part01",
    "4033010_Monster_XP_Elite01_02_Ability04_Part02",
    "4033010_Monster_XP_Elite01_02_Ability04_Part01",
    "4033010_Monster_XP_Elite01_02_Ability06_Part02",
    "4033010_Monster_XP_Elite01_02_Ability06_Part01",
    "4033010_Monster_XP_Elite01_02_Ability03_Part02",
    "4033010_Monster_XP_Elite01_02_Ability03_Part01",
    "4033010_Monster_XP_Elite01_02_Ability02_Part02",
    "4033010_Monster_XP_Elite01_02_Ability02_Part01",
    "4033010_Monster_XP_Elite01_02_Ability01_Part02",
    "4033010_Monster_XP_Elite01_02_Ability01_Part01",
    "4033010_Monster_XP_Elite01_02_PassiveAbility01",
    "4033010_Modifiers"
  ],
  "abilityObject": {
    "4033010_Monster_XP_Elite01_02_Ability05_Part02": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2071311511\">Enemy_XP_Elite01_02_Charge_Enhance</a>[<span class=\"descriptionNumberColor\">Ominous Degeneration</span>]"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "consumeFloor": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_CurrentHP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
                  "valuePerStack": {
                    "MDF_RallyTransferRatio": {
                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                      "displayLines": "{[SkillP01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[1]]}"
                      ]
                    },
                    "MDF_Rally_HealPercentage": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    },
                    "MDF_Rally_HealUpRatio": {
                      "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                      "displayLines": "{[SkillP01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[3]]}"
                      ]
                    },
                    "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                      "displayLines": "{[SkillP01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[4]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                  "valuePerStack": {
                    "MDF_RallyHP": {
                      "operator": "Variables[0] (_CurrentHP) || RETURN",
                      "displayLines": "_CurrentHP",
                      "constants": [],
                      "variables": [
                        "_CurrentHP"
                      ]
                    },
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    },
                    "MDF_HealUpRatio": {
                      "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                      "displayLines": "{[SkillP01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[3]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "consumeFloor": 1
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability05_Part01": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability05_Part01",
      "childAbilityList": [
        "4033010_Monster_XP_Elite01_02_Ability05_Camera",
        "4033010_Monster_XP_Elite01_02_Ability05_Part01",
        "4033010_Monster_XP_Elite01_02_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_XP_Elite01_02_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability04_Part02": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2071311511\">Enemy_XP_Elite01_02_Charge_Enhance</a>[<span class=\"descriptionNumberColor\">Ominous Degeneration</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2071311511\">Enemy_XP_Elite01_02_Charge_Enhance</a>[<span class=\"descriptionNumberColor\">Ominous Degeneration</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Uses \"Torrential Surge\" in the next action.",
          "type": "Other",
          "statusName": "Ominous Degeneration"
        }
      ]
    },
    "4033010_Monster_XP_Elite01_02_Ability04_Part01": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability04_Part01",
      "childAbilityList": [
        "4033010_Monster_XP_Elite01_02_Ability04_Camera",
        "4033010_Monster_XP_Elite01_02_Ability04_Part01",
        "4033010_Monster_XP_Elite01_02_Ability04_Part02"
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
          "ability": "Monster_XP_Elite01_02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability06_Part02": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability06_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"550129180\">Enemy_XP_Elite01_02_DefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          }
        },
        {
          "name": "Achievement",
          "relatedAchievements": [
            {
              "title": "Immaculate Body",
              "desc": "In a single battle, ensure the Black Tide's Corroded Daemon does not absorb any \"corrosion\" when using \"Filth Eater\"",
              "rarity": "Low"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__550129180\">Enemy_XP_Elite01_02_DefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill06[0]]}) || MUL || RETURN",
                    "displayLines": "(-1 * {[Skill06[0]]})",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "{[Skill06[0]]}"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">#Skill06_P1_Ratio</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction"
        }
      ]
    },
    "4033010_Monster_XP_Elite01_02_Ability06_Part01": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability06_Part01",
      "childAbilityList": [
        "4033010_Monster_XP_Elite01_02_Ability03_Camera",
        "4033010_Monster_XP_Elite01_02_Ability03_Part01",
        "4033010_Monster_XP_Elite01_02_Ability03_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
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
          "ability": "Monster_XP_Elite01_02_Ability06_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability03_Part02": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(RallyCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "RallyCount",
            "compareType": ">",
            "value2": 0
          },
          "Event": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(RallyCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(RallyCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "RallyCount",
            "compareType": ">",
            "value2": 0
          },
          "Event": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(RallyCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(RallyCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "RallyCount",
            "compareType": ">",
            "value2": 0
          },
          "Event": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(RallyCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(RallyCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
          },
          "ifTargetFound": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "popUpText": "\"Corrosion\" is absorbed",
              "living": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
            }
          ]
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "RallyCount",
            "compareType": ">",
            "value2": 1
          },
          "Event": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1810848072\">Enemy_XP_Elite01_02_Charge</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "RallyCount",
              "value": {
                "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(RallyCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "RallyCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1810848072\">Enemy_XP_Elite01_02_Charge</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(RallyCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability03_Part01": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability03_Part01",
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
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
          "ability": "Monster_XP_Elite01_02_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability02_Part02": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "FireBallNum",
          "value": 1
        },
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
              "delayInterval": 0.2537,
              "parallelCount": 5
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FireBallNum",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Multiple Functions",
                      "functionList": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2055465700\">Enemy_XP_Elite01_02_Ability02AlreadyAttacked</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Multiple Functions",
                      "functionList": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2055465700\">Enemy_XP_Elite01_02_Ability02AlreadyAttacked</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Trigger Multiple Functions",
                          "functionList": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
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
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2055465700\">Enemy_XP_Elite01_02_Ability02AlreadyAttacked</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2055465700\">Enemy_XP_Elite01_02_Ability02AlreadyAttacked</a>"
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonType) || RETURN",
                "displayLines": "SummonType",
                "constants": [],
                "variables": [
                  "SummonType"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5
                }
              ],
              "defaultEvents": []
            },
            {
              "name": "Shot Fired"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallNum",
              "context": "ContextAbility",
              "value": 1,
              "max": 100
            },
            {
              "name": "IF",
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
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
                  "valuePerStack": {
                    "MDF_RallyTransferRatio": {
                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                      "displayLines": "{[SkillP01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[1]]}"
                      ]
                    },
                    "MDF_Rally_HealPercentage": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    },
                    "MDF_Rally_HealUpRatio": {
                      "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                      "displayLines": "{[SkillP01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[3]]}"
                      ]
                    },
                    "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                      "displayLines": "{[SkillP01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[4]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2055465700\">Enemy_XP_Elite01_02_Ability02AlreadyAttacked</a>",
          "stackData": [],
          "latentQueue": [
            "FireBallNum"
          ]
        }
      ]
    },
    "4033010_Monster_XP_Elite01_02_Ability02_Part01": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability02_Part01",
      "childAbilityList": [
        "4033010_Monster_XP_Elite01_02_Ability02_Camera",
        "4033010_Monster_XP_Elite01_02_Ability02_Part01",
        "4033010_Monster_XP_Elite01_02_Ability02_Part02"
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
          "ability": "Monster_XP_Elite01_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability01_Part02": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                  "displayLines": "{[SkillP01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                  "displayLines": "{[SkillP01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_Ability01_Part01": {
      "fileName": "4033010_Monster_XP_Elite01_02_Ability01_Part01",
      "childAbilityList": [
        "4033010_Monster_XP_Elite01_02_Ability01_Camera",
        "4033010_Monster_XP_Elite01_02_Ability01_Part01",
        "4033010_Monster_XP_Elite01_02_Ability01_Part02"
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
          "ability": "Monster_XP_Elite01_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033010_Monster_XP_Elite01_02_PassiveAbility01": {
      "fileName": "4033010_Monster_XP_Elite01_02_PassiveAbility01",
      "childAbilityList": [
        "4033010_Monster_XP_Elite01_02_PassiveAbility01"
      ],
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-381723021\">Enemy_XP_Elite01_02_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1205033025\">Enemy_XP_Elite01_02_Charge_Controller</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-621544638\">Enemy_XP_Elite01_02_Charge_Complete</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1205033025\">Enemy_XP_Elite01_02_Charge_Controller</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-621544638\">Enemy_XP_Elite01_02_Charge_Complete</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill05"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-621544638\">Enemy_XP_Elite01_02_Charge_Complete</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CurrentCount",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_CurrentCount) || RETURN",
                        "displayLines": "_CurrentCount",
                        "constants": [],
                        "variables": [
                          "_CurrentCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
                        ]
                      },
                      "assignState": "True"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1810848072\">Enemy_XP_Elite01_02_Charge</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CurrentCount",
                      "value": {
                        "operator": "Variables[0] (_CurrentCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_CurrentCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_CurrentCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CurrentCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_CurrentCount",
                          "value": {
                            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                            "displayLines": "{[SkillP01[0]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP01[0]]}"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-621544638\">Enemy_XP_Elite01_02_Charge_Complete</a>"
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_CurrentCount) || RETURN",
                        "displayLines": "_CurrentCount",
                        "constants": [],
                        "variables": [
                          "_CurrentCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
                        ]
                      },
                      "assignState": "True"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-381723021\">Enemy_XP_Elite01_02_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4033010_Modifiers": {
      "fileName": "4033010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1810848072\">Enemy_XP_Elite01_02_Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}