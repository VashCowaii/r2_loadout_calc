const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032010,
  "trimCharacterName": 4032010,
  "abilityList": [
    "4032010_Monster_AML_Minion02_01_Ability01_Part02",
    "4032010_Monster_AML_Minion02_01_Ability01_Part01",
    "4032010_Monster_AML_Minion02_01_AbilityP01",
    "4032010_Modifiers"
  ],
  "abilityObject": {
    "4032010_Monster_AML_Minion02_01_Ability01_Part02": {
      "fileName": "4032010_Monster_AML_Minion02_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            }
          }
        },
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
            "HitSplit": 0.2,
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
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "HitSplit": 0.2,
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
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "HitSplit": 0.2,
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
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "HitSplit": 0.4,
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
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
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
    "4032010_Monster_AML_Minion02_01_Ability01_Part01": {
      "fileName": "4032010_Monster_AML_Minion02_01_Ability01_Part01",
      "childAbilityList": [
        "4032010_Monster_AML_Minion02_01_Ability01_Camera",
        "4032010_Monster_AML_Minion02_01_Ability01_Part01",
        "4032010_Monster_AML_Minion02_01_Ability01_Part02"
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
          "ability": "Monster_AML_Minion02_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032010_Monster_AML_Minion02_01_AbilityP01": {
      "fileName": "4032010_Monster_AML_Minion02_01_AbilityP01",
      "childAbilityList": [
        "4032010_Monster_AML_Minion02_01_AbilityP01"
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
          "modifier": "<a class=\"gModGreen\" id=\"528776627\">Enemy_AML_Minion02_01_AbilityP01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1754811478\">Enemy_AML_Minion02_01_EffectController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage Type",
            "stageType": "Mainline"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"351278960\">Enemy_AML_Minion02_01_RallyHP_Tutorial</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__528776627\">Enemy_AML_Minion02_01_AbilityP01</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                        }
                      }
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
    "4032010_Modifiers": {
      "fileName": "4032010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1976044893\">AML_Minion02_01_RageStandby</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1287044096\">AML_Minion02_01_Rage</a>",
                  "valuePerStack": {
                    "PassiveAbilityInitiate_P1_AttackAddedRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_388) || RETURN",
                      "displayLines": "UnusedUnderThisBase_388",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_388"
                      ]
                    },
                    "PassiveAbilityInitiate_P2_DefenceAddedRatio": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__187) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__187",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__187"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1287044096\">AML_Minion02_01_Rage</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "attacked",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1287044096\">AML_Minion02_01_Rage</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "attacked"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (PassiveSkillInitiate_P1_AttackAddedRatio) || RETURN",
                    "displayLines": "PassiveSkillInitiate_P1_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "PassiveSkillInitiate_P1_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (PassiveSkillInitiate_P2_DefenceAddedRatio) || SUB || RETURN",
                    "displayLines": "(0 - PassiveSkillInitiate_P2_DefenceAddedRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PassiveSkillInitiate_P2_DefenceAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1976044893\">AML_Minion02_01_RageStandby</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "attacked",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [
            "PassiveSkillInitiate_P1_AttackAddedRatio",
            "PassiveSkillInitiate_P2_DefenceAddedRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__351278960\">Enemy_AML_Minion02_01_RallyHP_Tutorial</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1754811478\">Enemy_AML_Minion02_01_EffectController</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1286501859\">Enemy_AML_Minion02_01_AbilityP01_AttackUp</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_AllDamageTypeAddedRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TriggerFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "The next attack's DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Renewal"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "Mainline"
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "HealCount",
                      "value": {
                        "operator": "Variables[0] (HealCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(HealCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "HealCount"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Receiving Heal Start [Owner]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                    "displayLines": "MDF_RallyHP",
                    "constants": [],
                    "variables": [
                      "MDF_RallyHP"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHPRatio"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                          "displayLines": "MDF_RallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_RallyHP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "HealCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP_DownScale"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healer": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healFlat": {
                    "operator": "Variables[0] (HealCount) || Variables[1] (MDF_HealPercentage) || MUL || Variables[2] (MDF_RallyHP) || Variables[3] (MDF_CurrentHPRatio) || SUB || MUL || Variables[4] (MDF_CurrentHP_DownScale) || MUL || Constants[0] (1) || MUL || RETURN",
                    "displayLines": "((((HealCount * MDF_HealPercentage) * (MDF_RallyHP - MDF_CurrentHPRatio)) * MDF_CurrentHP_DownScale) * 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "HealCount",
                      "MDF_HealPercentage",
                      "MDF_RallyHP",
                      "MDF_CurrentHPRatio",
                      "MDF_CurrentHP_DownScale"
                    ]
                  },
                  "debtHeal": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "HealCount",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHPRatio"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                          "displayLines": "MDF_RallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_RallyHP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHPRatio"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                          "displayLines": "MDF_RallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_RallyHP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHPRatio"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                          "displayLines": "MDF_RallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_RallyHP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "After attacking, restore a portion of Corroded HP. The more targets are attacked, the more HP is restored. When Corrosion is dispelled via restorative means, obtain \"Renewal.\"",
          "type": "Other",
          "statusName": "Corrosion"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "HealCount",
                      "value": {
                        "operator": "Variables[0] (HealCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(HealCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "HealCount"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                    "displayLines": "MDF_RallyHP",
                    "constants": [],
                    "variables": [
                      "MDF_RallyHP"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHPRatio"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_RallyHP) || RETURN",
                          "displayLines": "MDF_RallyHP",
                          "constants": [],
                          "variables": [
                            "MDF_RallyHP"
                          ]
                        }
                      },
                      "passed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (HealCount) || Variables[1] (MDF_HealPercentage) || MUL || RETURN",
                    "displayLines": "(HealCount * MDF_HealPercentage)",
                    "constants": [],
                    "variables": [
                      "HealCount",
                      "MDF_HealPercentage"
                    ]
                  },
                  "formula": "Heal from Target MaxHP",
                  "debtHeal": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "HealCount",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                }
              ]
            }
          ],
          "useEntitySnapshot": true
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
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
                  "variableName": "MDF_DefenderCurrentHPRatio_Before"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DefenderCurrentHPRatio_After"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DefenderCurrentHPRatio_After",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_DefenderCurrentHPRatio_Before) || RETURN",
                      "displayLines": "MDF_DefenderCurrentHPRatio_Before",
                      "constants": [],
                      "variables": [
                        "MDF_DefenderCurrentHPRatio_Before"
                      ]
                    }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DefenderRallyHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                          "context": "ContextModifier"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "operator": "Constants[0] (1) || Variables[0] (MDF_RallyTransferRatio) || SUB || Variables[1] (MDF_DefenderCurrentHPRatio_After) || Variables[2] (MDF_DefenderCurrentHPRatio_Before) || SUB || MUL || Variables[3] (MDF_DefenderRallyHP) || ADD || RETURN",
                              "displayLines": "(((1 - MDF_RallyTransferRatio) * (MDF_DefenderCurrentHPRatio_After - MDF_DefenderCurrentHPRatio_Before)) + MDF_DefenderRallyHP)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MDF_RallyTransferRatio",
                                "MDF_DefenderCurrentHPRatio_After",
                                "MDF_DefenderCurrentHPRatio_Before",
                                "MDF_DefenderRallyHP"
                              ]
                            },
                            "MDF_HealPercentage": {
                              "operator": "Variables[0] (MDF_Rally_HealPercentage) || RETURN",
                              "displayLines": "MDF_Rally_HealPercentage",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealPercentage"
                              ]
                            },
                            "MDF_HealUpRatio": {
                              "operator": "Variables[0] (MDF_Rally_HealUpRatio) || RETURN",
                              "displayLines": "MDF_Rally_HealUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealUpRatio"
                              ]
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Rally_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "operator": "Constants[0] (1) || Variables[0] (MDF_RallyTransferRatio) || SUB || Variables[1] (MDF_DefenderCurrentHPRatio_After) || MUL || Variables[0] (MDF_RallyTransferRatio) || Variables[2] (MDF_DefenderCurrentHPRatio_Before) || MUL || ADD || RETURN",
                              "displayLines": "(((1 - MDF_RallyTransferRatio) * MDF_DefenderCurrentHPRatio_After) + (MDF_RallyTransferRatio * MDF_DefenderCurrentHPRatio_Before))",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MDF_RallyTransferRatio",
                                "MDF_DefenderCurrentHPRatio_After",
                                "MDF_DefenderCurrentHPRatio_Before"
                              ]
                            },
                            "MDF_HealPercentage": {
                              "operator": "Variables[0] (MDF_Rally_HealPercentage) || RETURN",
                              "displayLines": "MDF_Rally_HealPercentage",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealPercentage"
                              ]
                            },
                            "MDF_HealUpRatio": {
                              "operator": "Variables[0] (MDF_Rally_HealUpRatio) || RETURN",
                              "displayLines": "MDF_Rally_HealUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealUpRatio"
                              ]
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Rally_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1966517473\">TaskList_Standard_RallyHP_ListenDirtyHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1966517473\">TaskList_Standard_RallyHP_ListenDirtyHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1966517473\">TaskList_Standard_RallyHP_ListenDirtyHPChange</a>",
              "parse": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP_DownScale"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "variableName": "MDF_CurrentHP_DownScale"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DirtyRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DirtyValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxHP_Dirty_Ratio",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_DirtyRatio) || SUB || Variables[1] (MDF_DirtyValue) || Variables[2] (MDF_CurrentHP_DownScale) || DIV || Constants[0] (1) || DIV || SUB || RETURN",
                    "displayLines": "((1 - MDF_DirtyRatio) - ((MDF_DirtyValue / MDF_CurrentHP_DownScale) / 1))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_DirtyRatio",
                      "MDF_DirtyValue",
                      "MDF_CurrentHP_DownScale"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxHP_Dirty_Ratio) || RETURN",
                      "displayLines": "MDF_MaxHP_Dirty_Ratio",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHP_Dirty_Ratio"
                      ]
                    }
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
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxHP_Dirty_Ratio) || RETURN",
                          "displayLines": "MDF_MaxHP_Dirty_Ratio",
                          "constants": [],
                          "variables": [
                            "MDF_MaxHP_Dirty_Ratio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "operator": "Variables[0] (MDF_MaxHP_Dirty_Ratio) || RETURN",
                              "displayLines": "MDF_MaxHP_Dirty_Ratio",
                              "constants": [],
                              "variables": [
                                "MDF_MaxHP_Dirty_Ratio"
                              ]
                            },
                            "MDF_HealPercentage": {
                              "operator": "Variables[0] (MDF_Rally_HealPercentage) || RETURN",
                              "displayLines": "MDF_Rally_HealPercentage",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealPercentage"
                              ]
                            },
                            "MDF_HealUpRatio": {
                              "operator": "Variables[0] (MDF_Rally_HealUpRatio) || RETURN",
                              "displayLines": "MDF_Rally_HealUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealUpRatio"
                              ]
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Rally_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>",
              "parse": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP_DownScale"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "variableName": "MDF_CurrentHP_DownScale"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                    "compareType": ">",
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
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": 1,
                            "MDF_HealPercentage": {
                              "operator": "Variables[0] (MDF_Rally_HealPercentage) || RETURN",
                              "displayLines": "MDF_Rally_HealPercentage",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealPercentage"
                              ]
                            },
                            "MDF_HealUpRatio": {
                              "operator": "Variables[0] (MDF_Rally_HealUpRatio) || RETURN",
                              "displayLines": "MDF_Rally_HealUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_HealUpRatio"
                              ]
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_Rally_Strongth_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_RallyTransferRatio",
            "MDF_Rally_HealPercentage",
            "MDF_Rally_HealUpRatio",
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1756618074\">Enemy_AML_Minion02_01_RallyHP_Controller</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_DefenderCurrentHP_Before",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "context": "ContextModifier"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_DefenderCurrentHP_After",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_DefenderCurrentHP_Before) || RETURN",
                      "displayLines": "MDF_DefenderCurrentHP_Before",
                      "constants": [],
                      "variables": [
                        "MDF_DefenderCurrentHP_Before"
                      ]
                    }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "operator": "Variables[0] (MDF_DefenderCurrentHP_Before) || RETURN",
                              "displayLines": "MDF_DefenderCurrentHP_Before",
                              "constants": [],
                              "variables": [
                                "MDF_DefenderCurrentHP_Before"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "operator": "Variables[0] (MDF_DefenderCurrentHP_Before) || RETURN",
                              "displayLines": "MDF_DefenderCurrentHP_Before",
                              "constants": [],
                              "variables": [
                                "MDF_DefenderCurrentHP_Before"
                              ]
                            }
                          }
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
      "references": []
    }
  }
}