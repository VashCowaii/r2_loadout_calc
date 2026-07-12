const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 8012214,
  "trimCharacterName": 8012214,
  "abilityList": [
    "8012214_Modifiers",
    "8012214_Monster_W2_HuanlongPart_IF_Recover",
    "8012214_Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
    "8012214_Monster_W2_HuanlongPart_01_IF_Passive01",
    "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
    "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part01",
    "8012214_Handling"
  ],
  "abilityObject": {
    "8012214_Modifiers": {
      "fileName": "8012214_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-69472783\">Monster_W2_HuanlongPart_IF_Active</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1296858925\">Monster_W2_HuanlongPart_IF_P2_FirstMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-861835202\">Monster_W2_Huanlong_IF_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1190585947\">Monster_W2_HuanlongPart_IF_P2_SecondMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-878612821\">Monster_W2_Huanlong_IF_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1242033542\">Monster_W2_HuanlongPart_IF_P2_ThirdMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-895390440\">Monster_W2_Huanlong_IF_Sign03</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1084207204\">Monster_W2_HuanlongPart_IF_P2_ForthMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-777947107\">Monster_W2_Huanlong_IF_Sign04</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
    "8012214_Monster_W2_HuanlongPart_IF_Recover": {
      "fileName": "8012214_Monster_W2_HuanlongPart_IF_Recover",
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
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8012214_Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01": {
      "fileName": "8012214_Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
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
              "state": "PassiveSkill01",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[2]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[2]]}"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>[<span class=\"descriptionNumberColor\">Flower By Another Name</span>]"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (SummonerMaxHPValue) || Variables[1] ({[PassiveSkill01[0]]}) || MUL || RETURN",
                          "displayLines": "(SummonerMaxHPValue * {[PassiveSkill01[0]]})",
                          "constants": [],
                          "variables": [
                            "SummonerMaxHPValue",
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": {
                          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[1]]}"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"497291560\">Monster_W2_HuanlongPart_01_IF_DeathRattle</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
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
    "8012214_Monster_W2_HuanlongPart_01_IF_Passive01": {
      "fileName": "8012214_Monster_W2_HuanlongPart_01_IF_Passive01",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-729917037\">Monster_W2_HuanlongPart_01_IF_OnDeathrattle</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "SummonerMaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-265482801\">Monster_W2_HuanlongPart_01_IF_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"316085297\">Monster_W2_HuanlongPart_01_IF_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[0]]}"
              ]
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[1]]}"
              ]
            },
            "MDF_SuperArmorBreakActionDelay": {
              "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[2]]}"
              ]
            }
          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-265482801\">Monster_W2_HuanlongPart_01_IF_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-729917037\">Monster_W2_HuanlongPart_01_IF_OnDeathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "value1": "CurrentHP",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "EnemyForceKill",
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
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ]
        }
      ]
    },
    "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part02": {
      "fileName": "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          },
          "success": []
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part01": {
      "fileName": "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part01",
      "childAbilityList": [
        "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part01",
        "8012214_Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
        "8012214_Monster_W2_HuanlongPart_01_Ability03_Camera"
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
          "ability": "Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
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
    "8012214_Handling": {
      "fileName": "8012214_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "W1_Svarog_00_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "Decision5",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag"
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 1
                    },
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
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill03",
                          "target": {
                            "name": "Create Selection List",
                            "passed": [
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "Monster_W2_Huanlong_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                "target": null,
                                "invertCondition": true
                              },
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "Monster_W2_Huanlong_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                "target": null,
                                "invertCondition": true
                              },
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                                "target": null,
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill03",
                          "target": {
                            "name": "Create Selection List",
                            "passed": [
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "Monster_W2_Huanlong_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                "target": null,
                                "invertCondition": true
                              },
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "Monster_W2_Huanlong_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                "target": null,
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "Decision02",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "PartDecisionFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"90629678\">Monster_W2_HuanlongPart_01_Number01</a>"
                          },
                          "passed": [
                            {
                              "name": "Choose Ability Target",
                              "skillName": "Skill04",
                              "target": {
                                "name": "Select by Modifier Name",
                                "modifier": "Monster_W2_Huanlong_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                "target": null
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Choose Ability Target",
                              "skillName": "Skill04",
                              "target": {
                                "name": "Select by Modifier Name",
                                "modifier": "Monster_W2_Huanlong_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                "target": null
                              }
                            }
                          ]
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill04"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 1
                    },
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill03",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "Monster_W2_Huanlong_Ability13_Special",
                        "target": null
                      }
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
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