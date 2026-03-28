const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2024021,
  "trimCharacterName": 2024021,
  "abilityList": [
    "2024021_Monster_Fuyan_RL_Hit_Part02",
    "2024021_Monster_Fuyan_RL_Hit_Part01",
    "2024021_Monster_Fuyan_PassiveAbility_Insert2",
    "2024021_Monster_Fuyan_PassiveAbility_Insert",
    "2024021_Monster_Fuyan_RL_Ability04_Part02",
    "2024021_Monster_Fuyan_RL_Ability04_Part01",
    "2024021_Monster_Fuyan_RL_Ability03_Part02",
    "2024021_Monster_Fuyan_RL_Ability03_Part01",
    "2024021_Monster_Fuyan_RL_Ability01_Part02",
    "2024021_Monster_Fuyan_RL_Ability01_Part01",
    "2024021_Monster_Fuyan_PassiveAbilityInitiate2",
    "2024021_Monster_Fuyan_Die",
    "2024021_Monster_Fuyan_Hit_Part02",
    "2024021_Monster_Fuyan_Hit_Part01",
    "2024021_Monster_Fuyan_Ability02_Part02",
    "2024021_Monster_Fuyan_Ability02_Part01",
    "2024021_Monster_Fuyan_Ability01_Part02",
    "2024021_Monster_Fuyan_Ability01_Part01",
    "2024021_Monster_Fuyan_Born_Part02",
    "2024021_Monster_Fuyan_Born_Part01",
    "2024021_Monster_Fuyan_PassiveAbilityInitiate",
    "2024021_Monster_W2_Fuyan_PassiveAbility_BGM",
    "2024021_Modifiers"
  ],
  "abilityObject": {
    "2024021_Monster_Fuyan_RL_Hit_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Hit_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Hit_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Hit_Part01",
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
          "ability": "Monster_Fuyan_RL_Hit_Part02"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ADF_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_HPDamageRatioValue",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
            "displayLines": "((1 / MonsterCount) + 0.0009999999)",
            "constants": [
              1,
              0.0009999999
            ],
            "variables": [
              "MonsterCount"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (DeathCount) || RETURN",
            "displayLines": "DeathCount",
            "constants": [],
            "variables": [
              "DeathCount"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ADF_CurrentHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_CurrentHPValue",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || RETURN",
                  "displayLines": "(ADF_MaxHPValue * ADF_HPDamageRatioValue)",
                  "constants": [],
                  "variables": [
                    "ADF_MaxHPValue",
                    "ADF_HPDamageRatioValue"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ADF_HPDamageRatioValue) || RETURN",
                    "displayLines": "ADF_HPDamageRatioValue",
                    "constants": [],
                    "variables": [
                      "ADF_HPDamageRatioValue"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ADF_HPDamageRatioValue) || RETURN",
                    "displayLines": "ADF_HPDamageRatioValue",
                    "constants": [],
                    "variables": [
                      "ADF_HPDamageRatioValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "DeathCount",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbility_Insert2": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbility_Insert2",
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Update Max Wave Count",
          "add": 3
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              }
            ]
          },
          "variableName": null,
          "eventType": "InfiniteDoSummon",
          "value": null
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1368675926\">Monster_Fuyan_PartController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"574070131\">Monster_Fuyan_LeaveTeam</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"417134444\">Monster_Fuyan_RL_HPShared_Part3</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbility_Insert": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbility_Insert",
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Update Max Wave Count",
          "add": 3
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              }
            ]
          },
          "variableName": null,
          "eventType": "InfiniteDoSummon",
          "value": null
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"574070131\">Monster_Fuyan_LeaveTeam</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1663924159\">Monster_Fuyan_RL_HPShared</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability04_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageUpCount",
              "value": {
                "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(DamageUpCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DamageUpCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddCount",
                  "value": {
                    "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SpeedAddCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SpeedAddCount"
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageUpCount",
                  "value": {
                    "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DamageUpCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DamageUpCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddCount",
                  "value": {
                    "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SpeedAddCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SpeedAddCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability04_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability04_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_RL_Ability04_Part01",
        "2024021_Monster_Fuyan_RL_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_Fuyan_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability03_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageUpCount",
              "value": {
                "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(DamageUpCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DamageUpCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddCount",
                  "value": {
                    "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SpeedAddCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SpeedAddCount"
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageUpCount",
                  "value": {
                    "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DamageUpCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DamageUpCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddCount",
                  "value": {
                    "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SpeedAddCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SpeedAddCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability03_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability03_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_RL_Ability03_Part01",
        "2024021_Monster_Fuyan_RL_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_Fuyan_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability01_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageUpCount",
              "value": {
                "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(DamageUpCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DamageUpCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddCount",
                  "value": {
                    "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SpeedAddCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SpeedAddCount"
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageUpCount",
                  "value": {
                    "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DamageUpCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DamageUpCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddCount",
                  "value": {
                    "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SpeedAddCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SpeedAddCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability01_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability01_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_RL_Ability01_Part01",
        "2024021_Monster_Fuyan_RL_Ability01_Part02",
        "2024021_Monster_Fuyan_RL_Ability01_Camera"
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
          "ability": "Monster_Fuyan_RL_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbilityInitiate2": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbilityInitiate2",
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"574070131\">Monster_Fuyan_LeaveTeam</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1968119799\">Monster_Fuyan_AddBonus</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-100079329\">Enemy_Fuyan_RL_MonsterDieListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1368675926\">Monster_Fuyan_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Die": {
      "fileName": "2024021_Monster_Fuyan_Die",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Hit_Part02": {
      "fileName": "2024021_Monster_Fuyan_Hit_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Hit_Part01": {
      "fileName": "2024021_Monster_Fuyan_Hit_Part01",
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
          "ability": "Monster_Fuyan_Hit_Part02"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ADF_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_HPDamageRatioValue",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.000010000076) || ADD || RETURN",
            "displayLines": "((1 / MonsterCount) + 0.000010000076)",
            "constants": [
              1,
              0.000010000076
            ],
            "variables": [
              "MonsterCount"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (DeathCount) || RETURN",
            "displayLines": "DeathCount",
            "constants": [],
            "variables": [
              "DeathCount"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ADF_CurrentHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_CurrentHPValue",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || RETURN",
                  "displayLines": "(ADF_MaxHPValue * ADF_HPDamageRatioValue)",
                  "constants": [],
                  "variables": [
                    "ADF_MaxHPValue",
                    "ADF_HPDamageRatioValue"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ADF_HPDamageRatioValue) || RETURN",
                    "displayLines": "ADF_HPDamageRatioValue",
                    "constants": [],
                    "variables": [
                      "ADF_HPDamageRatioValue"
                    ]
                  }
                },
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
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 0.1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MonsterCount",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "DeathCount",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Ability02_Part02": {
      "fileName": "2024021_Monster_Fuyan_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Hesitation"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Ability02_Part01": {
      "fileName": "2024021_Monster_Fuyan_Ability02_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_Ability02_Part01",
        "2024021_Monster_Fuyan_Ability02_Part02",
        "2024021_Monster_Fuyan_Ability02_Camera"
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
          "ability": "Monster_Fuyan_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Ability01_Part02": {
      "fileName": "2024021_Monster_Fuyan_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Rapid Gambit"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Ability01_Part01": {
      "fileName": "2024021_Monster_Fuyan_Ability01_Part01",
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
          "ability": "Monster_Fuyan_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Born_Part02": {
      "fileName": "2024021_Monster_Fuyan_Born_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Born_Part01": {
      "fileName": "2024021_Monster_Fuyan_Born_Part01",
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
          "ability": "Monster_Fuyan_Born_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbilityInitiate": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "Fuyan",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940788756\">Enemy_Fuyan_MonsterDieListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1988405555\">Enemy_Fuyan_Born</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-51927245\">Enemy_Fuyan_Unselectable</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_W2_Fuyan_PassiveAbility_BGM": {
      "fileName": "2024021_Monster_W2_Fuyan_PassiveAbility_BGM",
      "childAbilityList": [
        "2024021_Monster_W2_Fuyan_PassiveAbility_BGM"
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
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"649895739\">Enemy_W2_Fuyan_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__649895739\">Enemy_W2_Fuyan_ResetStageBGM</a>",
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
    "2024021_Modifiers": {
      "fileName": "2024021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1968119799\">Monster_Fuyan_AddBonus</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
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
                        "name": "Compare: Variable",
                        "value1": "DamageUpCount",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                              "displayLines": "{[Skill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill01[0]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (DamageUpCount) || RETURN",
                            "displayLines": "DamageUpCount",
                            "constants": [],
                            "variables": [
                              "DamageUpCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SpeedAddCount",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                          "valuePerStack": {
                            "MDF_SpeedAddedRatio_PerLayer": {
                              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                              "displayLines": "{[Skill01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill01[1]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (SpeedAddCount) || RETURN",
                            "displayLines": "SpeedAddCount",
                            "constants": [],
                            "variables": [
                              "SpeedAddCount"
                            ]
                          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SummonValue",
                      "value": {
                        "operator": "Variables[0] (MDF_SummonValue) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_SummonValue + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SummonValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SummonValue",
                        "compareType": ">=",
                        "value2": 5
                      },
                      "passed": [
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__417134444\">Monster_Fuyan_RL_HPShared_Part3</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_SummonValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_SummonValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_SummonValue",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1663924159\">Monster_Fuyan_RL_HPShared</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_SummonValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_SummonValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_SummonValue",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Create Shared HP Group",
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedAddedRatio_PerLayer"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Transfer Move",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Slay Move",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-100079329\">Enemy_Fuyan_RL_MonsterDieListener</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1940788756\">Enemy_Fuyan_MonsterDieListener</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                        "invertCondition": true,
                        "includePreDeath": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DeathCount",
                      "value": {
                        "operator": "Variables[0] (DeathCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(DeathCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DeathCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ADF_MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ADF_HPDamageRatioValue",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                        "displayLines": "((1 / MonsterCount) + 0.0009999999)",
                        "constants": [
                          1,
                          0.0009999999
                        ],
                        "variables": [
                          "MonsterCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ADF_CurrentHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ADF_CurrentHPValue",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || Variables[2] (DeathCount) || MUL || RETURN",
                          "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)",
                          "constants": [],
                          "variables": [
                            "ADF_MaxHPValue",
                            "ADF_HPDamageRatioValue",
                            "DeathCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_RL_Hit_Part01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_RL_Hit_Part01"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AchievementCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8001010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Flamespawn"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AchievementCount",
                          "value": {
                            "operator": "Variables[0] (AchievementCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(AchievementCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "AchievementCount"
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
                    "value1": "AchievementCount",
                    "compareType": ">",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Inferno",
                          "desc": "Have #1[i] Flamespawns simultaneously on the field during the \"Illusory Maze: Cirrus\" challenge",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_Fuyan_Die",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Attack Targets}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__2135326892\">Monster_Fuyan_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1368675926\">Monster_Fuyan_PartController</a>",
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_PassiveAbility_Insert2",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__574070131\">Monster_Fuyan_LeaveTeam</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        }
                      ]
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (2022110) || RETURN",
                                "displayLines": "2022110",
                                "constants": [
                                  2022110
                                ],
                                "variables": []
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (2022110) || RETURN",
                                "displayLines": "2022110",
                                "constants": [
                                  2022110
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Constants[0] (8012030) || RETURN",
                                    "displayLines": "8012030",
                                    "constants": [
                                      8012030
                                    ],
                                    "variables": []
                                  },
                                  "locationType": "First"
                                },
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Constants[0] (8012030) || RETURN",
                                    "displayLines": "8012030",
                                    "constants": [
                                      8012030
                                    ],
                                    "variables": []
                                  },
                                  "locationType": "Last"
                                }
                              ]
                            },
                            {
                              "name": "Create Shared HP Group",
                              "subTarget": {
                                "name": "Target Name",
                                "target": "{{All Team Members(Exclude Self)}}"
                              }
                            },
                            {
                              "name": "Update Max Wave Count",
                              "add": 5
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Update Max Wave Count",
                      "add": 5
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Update Max Wave Count",
                      "add": 5
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Update Max Wave Count",
                      "add": 5
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__288555768\">Monster_Fuyan_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940788756\">Enemy_Fuyan_MonsterDieListener</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                        "invertCondition": true,
                        "includePreDeath": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DeathCount",
                      "value": {
                        "operator": "Variables[0] (DeathCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(DeathCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DeathCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ADF_MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ADF_HPDamageRatioValue",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                        "displayLines": "((1 / MonsterCount) + 0.0009999999)",
                        "constants": [
                          1,
                          0.0009999999
                        ],
                        "variables": [
                          "MonsterCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ADF_CurrentHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ADF_CurrentHPValue",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || Variables[2] (DeathCount) || MUL || RETURN",
                          "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)",
                          "constants": [],
                          "variables": [
                            "ADF_MaxHPValue",
                            "ADF_HPDamageRatioValue",
                            "DeathCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_Hit_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_Hit_Part01"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AchievementCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8001010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Flamespawn"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AchievementCount",
                          "value": {
                            "operator": "Variables[0] (AchievementCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(AchievementCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "AchievementCount"
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
                    "value1": "AchievementCount",
                    "compareType": ">",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Inferno",
                          "desc": "Have #1[i] Flamespawns simultaneously on the field during the \"Illusory Maze: Cirrus\" challenge",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_Fuyan_Die",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Attack Targets}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-51927245\">Enemy_Fuyan_Unselectable</a>",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"429388357\">Modifier_Heliobus_Suiyang_Ability_StealBP_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1278953211\">Modifier_Heliobus_Suiyang_Ability_ActionBonus_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-210455569\">Modifier_Heliobus_Suiyang_Ability_DeathBonus_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"87920602\">Modifier_Heliobus_Suiyang_Ability_DamageBurn_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1274529835\">Modifier_Heliobus_Suiyang_Ability_AttackUp_Enemy</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1988405555\">Enemy_Fuyan_Born</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Monster_Fuyan_Born_Part02",
                  "isTrigger": true
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1642513753\">Enemy_Fuyan_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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