const compositeAbilityObject = {
  "fullCharacterName": 4032061,
  "trimCharacterName": 4032061,
  "abilityList": [
    "4032061_Monster_W4_IronTombCorePart_PassiveAbility03",
    "4032061_Monster_W4_IronTombCorePart_PassiveAbility02_Insert",
    "4032061_Monster_W4_IronTombCorePart_PassiveAbilityInitiate",
    "4032061_Monster_W4_IronTombCorePart_Ability03_Part02",
    "4032061_Monster_W4_IronTombCorePart_Ability03_Part01",
    "4032061_Monster_W4_IronTombCorePart_Ability02_Part02",
    "4032061_Monster_W4_IronTombCorePart_Ability02_Part01",
    "4032061_Monster_W4_IronTombCorePart_Ability01_Part02",
    "4032061_Monster_W4_IronTombCorePart_Ability01_Part01",
    "4032061_Modifiers"
  ],
  "abilityObject": {
    "4032061_Monster_W4_IronTombCorePart_PassiveAbility03": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_PassiveAbility03",
      "skillTrigger": "PassiveSkill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Eternal Recurrence"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "variable": "AIFlag",
              "target2": null,
              "variable2": "_TempAIFlag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": {
                "operator": "Variables[0] (_TempAIFlag) || RETURN",
                "displayLines": "_TempAIFlag",
                "constants": [],
                "variables": [
                  "_TempAIFlag"
                ]
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1496068463\">W4_IronTombCorePart_Recover</a>"
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "healPercent": 1,
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4032061_Monster_W4_IronTombCorePart_PassiveAbility02_Insert": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_PassiveAbility02_Insert",
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
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
                    "operator": "Variables[0] ({[PassiveSkill02[0]]}) || INVERT || RETURN",
                    "displayLines": "-{[PassiveSkill02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[0]]}"
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
                  "multiAdd": "-{[PassiveSkill02[0]]}"
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
                  "multiAdd": "-{[PassiveSkill02[0]]}"
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "NOT=",
                "value2": 3
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Phantom}}"
              },
              "ability": "Monster_W4_IronTombPhantom_Hit"
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
                      "target": "{{Irontomb: Core}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-778620552\">Enemy_W4_IronTombCore_Main_Status</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "value1": "_ChangePhaseEnd",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "value1": "_Break01Odds",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "value1": "_Break02Odds",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "value1": "_Break03Odds",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "value1": "_Break04Odds",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Part 1}}"
                        },
                        "value1": "_Break05Odds",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    {
                      "operator": "Variables[0] (_Break01Odds) || RETURN",
                      "displayLines": "_Break01Odds",
                      "constants": [],
                      "variables": [
                        "_Break01Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (_Break02Odds) || RETURN",
                      "displayLines": "_Break02Odds",
                      "constants": [],
                      "variables": [
                        "_Break02Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (_Break03Odds) || RETURN",
                      "displayLines": "_Break03Odds",
                      "constants": [],
                      "variables": [
                        "_Break03Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (_Break04Odds) || RETURN",
                      "displayLines": "_Break04Odds",
                      "constants": [],
                      "variables": [
                        "_Break04Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (_Break05Odds) || RETURN",
                      "displayLines": "_Break05Odds",
                      "constants": [],
                      "variables": [
                        "_Break05Odds"
                      ]
                    }
                  ],
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699685275\">Enemy_W4_IronTombCorePart_PartBreak_01</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1716462894\">Enemy_W4_IronTombCorePart_PartBreak_02</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1733240513\">Enemy_W4_IronTombCorePart_PartBreak_03</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1750018132\">Enemy_W4_IronTombCorePart_PartBreak_04</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1766795751\">Enemy_W4_IronTombCorePart_PartBreak_05</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "4032061_Monster_W4_IronTombCorePart_PassiveAbilityInitiate": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2053622445\">Enemy_W4_IronTombCorePart_Status</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2053622445\">Enemy_W4_IronTombCorePart_Status</a>",
          "modifierFlags": [
            "MuteBreak",
            "STAT_AITargetKeepActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0000010000076
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": 30
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "MDF_HPChange"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HPChange",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Core}}"
                      },
                      "flatConsume": {
                        "operator": "Variables[0] (MDF_HPChange) || INVERT || RETURN",
                        "displayLines": "-MDF_HPChange",
                        "constants": [],
                        "variables": [
                          "MDF_HPChange"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Overhealed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "MDF_HPOverflow"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HPOverflow",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Core}}"
                      },
                      "flatConsume": {
                        "operator": "Variables[0] (MDF_HPOverflow) || INVERT || RETURN",
                        "displayLines": "-MDF_HPOverflow",
                        "constants": [],
                        "variables": [
                          "MDF_HPOverflow"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 99
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                    },
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Core}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_IronTombCorePart_PassiveAbility02_Insert",
                      "priorityTag": "MonsterBuffSelf_Elation",
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
    "4032061_Monster_W4_IronTombCorePart_Ability03_Part02": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_Ability03_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
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
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Action Delayed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill03[1]]}"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4032061_Monster_W4_IronTombCorePart_Ability03_Part01": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_Ability03_Part01",
      "childAbilityList": [
        "4032061_Monster_W4_IronTombCorePart_Ability03_Part01",
        "4032061_Monster_W4_IronTombCorePart_Ability03_Part02",
        "4032061_Monster_W4_IronTombCorePart_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W4_IronTombCorePart_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4032061_Monster_W4_IronTombCorePart_Ability02_Part02": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "variableName": "MDF_CharacterCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 4035011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "characterName": "Anti-Creator, Hatred Inundate"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_CharacterCount",
                    "compareType": ">",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Taunt",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1415,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Cyrene",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemies by Aggro OR Random}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb Part 1: Skill02 Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 4035011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Core}}"
                        },
                        "characterName": "Anti-Creator, Hatred Inundate"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CharacterCount",
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1415,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Cyrene",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 4035011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Irontomb: Core}}"
                        },
                        "characterName": "Anti-Creator, Hatred Inundate"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CharacterCount",
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1415,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Cyrene",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
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
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>",
          "casterAssign": "TargetSelf"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>",
          "stackData": [],
          "latentQueue": [
            "MDF_CharacterCount"
          ]
        }
      ]
    },
    "4032061_Monster_W4_IronTombCorePart_Ability02_Part01": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_Ability02_Part01",
      "childAbilityList": [
        "4032061_Monster_W4_IronTombCorePart_Ability02_Part01",
        "4032061_Monster_W4_IronTombCorePart_Ability02_Part02",
        "4032061_Monster_W4_IronTombCorePart_Ability02_Camera",
        "4032061_Monster_W4_IronTombCorePart_Ability02_Camera02"
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
          "ability": "Monster_W4_IronTombCorePart_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "4032061_Monster_W4_IronTombCorePart_Ability01_Part02": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_Ability01_Part02",
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
            "DamageType": "Imaginary",
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
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Action Delayed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill01[1]]}"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
          "variables": {
            "_ErosionParam": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4032061_Monster_W4_IronTombCorePart_Ability01_Part01": {
      "fileName": "4032061_Monster_W4_IronTombCorePart_Ability01_Part01",
      "childAbilityList": [
        "4032061_Monster_W4_IronTombCorePart_Ability01_Part01",
        "4032061_Monster_W4_IronTombCorePart_Ability01_Part02",
        "4032061_Monster_W4_IronTombCorePart_Ability01_Camera"
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
          "ability": "Monster_W4_IronTombCorePart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4032061_Modifiers": {
      "fileName": "4032061_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_CharacterCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "\"Anti-Creator\" will use \"The Spirit's Prison Shall Burn\" in the next action. This state can be dispelled after receiving a killing blow."
                    }
                  ]
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_CharacterCount"
          ],
          "description": "\"Anti-Creator\" will use \"Mire Not Within Caves\" in the next action. This state can be dispelled after receiving a killing blow.",
          "type": "Other",
          "statusName": "Deliverance of Relief"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Detach Parent Mapping Point",
                  "point": "Weapon1_00_JNT",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_CharacterCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1766795751\">Enemy_W4_IronTombCorePart_PartBreak_05</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "variableName": "_Break05Odds",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "variableName": "_Break05Odds",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "_ChangePhaseEnd"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1750018132\">Enemy_W4_IronTombCorePart_PartBreak_04</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "variableName": "_Break04Odds",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "variableName": "_Break04Odds",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "_ChangePhaseEnd"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1733240513\">Enemy_W4_IronTombCorePart_PartBreak_03</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "variableName": "_Break03Odds",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "variableName": "_Break03Odds",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "_ChangePhaseEnd"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1716462894\">Enemy_W4_IronTombCorePart_PartBreak_02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "variableName": "_Break02Odds",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "variableName": "_Break02Odds",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "_ChangePhaseEnd"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699685275\">Enemy_W4_IronTombCorePart_PartBreak_01</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}}"
                  },
                  "variableName": "_Break01Odds",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 2}}"
                  },
                  "variableName": "_Break01Odds",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "_ChangePhaseEnd"
          ]
        }
      ],
      "references": []
    }
  }
}