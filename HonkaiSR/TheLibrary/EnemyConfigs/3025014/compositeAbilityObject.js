const compositeAbilityObject = {
  "fullCharacterName": 3025014,
  "trimCharacterName": 3025014,
  "abilityList": [
    "3025014_Monster_W3_Sunday_AbilityP02",
    "3025014_Monster_W3_Sunday_AbilityP01",
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part03",
    "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate_Insert_Part01to02",
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part02to03",
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part01to02",
    "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate",
    "3025014_Monster_W3_Sunday_02_PassiveAbilityInitiate",
    "3025014_Monster_W3_Sunday_01_PassiveAbilityInitiate",
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate",
    "3025014_Monster_W3_Sunday_01_Perform01_Part02",
    "3025014_Monster_W3_SundayPart_AssistAbility01_Part02",
    "3025014_Monster_W3_SundayPart_AssistAbility01_Part01",
    "3025014_Monster_W3_Sunday_Ability10_Part02",
    "3025014_Monster_W3_Sunday_Ability10_Part01",
    "3025014_Monster_W3_Sunday_Ability09_Part02",
    "3025014_Monster_W3_Sunday_Ability09_Part01",
    "3025014_Monster_W3_Sunday_Ability08_InsertAbility",
    "3025014_Monster_W3_Sunday_Ability08_Part02",
    "3025014_Monster_W3_Sunday_Ability08_Part01",
    "3025014_Monster_W3_Sunday_Ability07_Part02",
    "3025014_Monster_W3_Sunday_Ability07_Part01",
    "3025014_Monster_W3_Sunday_Ability06_Part02",
    "3025014_Monster_W3_Sunday_Ability06_Part01",
    "3025014_Monster_W3_Sunday_Ability052_Part02",
    "3025014_Monster_W3_Sunday_Ability052_Part01",
    "3025014_Monster_W3_Sunday_Ability05_Part02",
    "3025014_Monster_W3_Sunday_Ability05_Part01",
    "3025014_Monster_W3_Sunday_Ability042_Part02",
    "3025014_Monster_W3_Sunday_Ability042_Part01",
    "3025014_Monster_W3_Sunday_Ability04_Part02",
    "3025014_Monster_W3_Sunday_Ability04_Part01",
    "3025014_Monster_W3_Sunday_Ability03_Part02",
    "3025014_Monster_W3_Sunday_Ability03_Part01",
    "3025014_Monster_W3_Sunday_Ability02_Part02",
    "3025014_Monster_W3_Sunday_Ability02_Part01",
    "3025014_Monster_W3_Sunday_Ability01_Part02",
    "3025014_Monster_W3_Sunday_Ability01_Part01",
    "3025014_Modifiers",
    "3025014_BE_BattleEvents"
  ],
  "abilityObject": {
    "3025014_Monster_W3_Sunday_AbilityP02": {
      "fileName": "3025014_Monster_W3_Sunday_AbilityP02",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_AbilityP02"
      ],
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
          "modifier": "<a class=\"gModGreen\" id=\"-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1097728420\">Enemy_W3_Sunday_Preshow_1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1047395563\">Enemy_W3_Sunday_Preshow_2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1064173182\">Enemy_W3_Sunday_Preshow_3</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1064173182\">Enemy_W3_Sunday_Preshow_3</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Toughness Reduction Preview",
                  "caster": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target": {
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
                  "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                "displayLines": "{[SkillP02[2]]}",
                "constants": [],
                "variables": [
                  "{[SkillP02[2]]}"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1047395563\">Enemy_W3_Sunday_Preshow_2</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Toughness Reduction Preview",
                  "caster": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target": {
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>"
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "HP_Bars_Remaining",
                  "compareType": "=",
                  "value2": 3
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                "displayLines": "{[SkillP02[4]]}",
                "constants": [],
                "variables": [
                  "{[SkillP02[4]]}"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1097728420\">Enemy_W3_Sunday_Preshow_1</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Toughness Reduction Preview",
                  "caster": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target": {
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>"
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "HP_Bars_Remaining",
                  "compareType": "=",
                  "value2": 3,
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                "displayLines": "{[SkillP02[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP02[0]]}"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "{[SkillP02[4]]}"
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
                      "multiAdd": "{[SkillP02[0]]}"
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
    "3025014_Monster_W3_Sunday_AbilityP01": {
      "fileName": "3025014_Monster_W3_Sunday_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part03": {
      "fileName": "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part03",
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
                "value2": 3
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
              "valuePerStack": {
                "MDF_ShieldPercentage_Add": {
                  "operator": "Variables[0] ({[SkillP02[3]]}) || Variables[1] (W3_Sunday_00_StanceCountDown_Counter) || MUL || RETURN",
                  "displayLines": "({[SkillP02[3]]} * W3_Sunday_00_StanceCountDown_Counter)",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[3]]}",
                    "W3_Sunday_00_StanceCountDown_Counter"
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
                "target": "{{Player Team Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
              "valuePerStack": {
                "MDF_ShieldPercentage": {
                  "operator": "Variables[0] ({[SkillP02[3]]}) || Variables[1] (W3_Sunday_00_StanceCountDown_Counter) || MUL || RETURN",
                  "displayLines": "({[SkillP02[3]]} * W3_Sunday_00_StanceCountDown_Counter)",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[3]]}",
                    "W3_Sunday_00_StanceCountDown_Counter"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3,
            "invertCondition": true
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "W3_Sunday_00_StanceCountDown_Counter",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "W3_Sunday_00_StanceCountDown_Flag",
          "value": 0
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate_Insert_Part01to02": {
      "fileName": "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate_Insert_Part01to02",
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
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
              "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
            }
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "silent": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
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
            "target": "{{Caster}}"
          },
          "multiBase": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
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
          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 8
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextOwner",
          "variableName": "Skill06BgmGapSeconds",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "Skill06BgmGapSeconds",
              "value": {
                "operator": "Variables[0] (Skill06BgmGapSeconds) || RETURN",
                "displayLines": "Skill06BgmGapSeconds",
                "constants": [],
                "variables": [
                  "Skill06BgmGapSeconds"
                ]
              }
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability06_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[1]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[1]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[1]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "variableName": "Skill05AssistNumber",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill05ErrorNumber",
          "value": {
            "operator": "Constants[0] (4) || Variables[0] (Skill05AssistNumber) || SUB || RETURN",
            "displayLines": "(4 - Skill05AssistNumber)",
            "constants": [
              4
            ],
            "variables": [
              "Skill05AssistNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[1]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.15,
                3
              ],
              "variables": [
                "{[Skill06[1]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[1]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.15,
                3
              ],
              "variables": [
                "{[Skill06[1]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.25) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[1]]} * 0.25) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.25,
                3
              ],
              "variables": [
                "{[Skill06[1]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169017547\">Enemy_W3_Sunday_Ability06_Assist</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1543685529\">Enemy_W3_Sunday_PartDestroyController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part02to03": {
      "fileName": "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part02to03",
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_Sunday_MainStory380"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1396454665\">Enemy_W3_SundayPart_EntityFollowController</a>"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "isRemove": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ]
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
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
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
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
          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
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
          "modifier": "<a class=\"gModGreen\" id=\"-98549587\">Enemy_W3_Sunday_Part03_PowerUp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
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
          "modifier": "<a class=\"gModGreen\" id=\"1973291237\">Enemy_W3_Sunday_PassiveAbilityInitiate_ChangePhaseController</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2045350392\">Enemy_W3_Sunday_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">If We Live In the Light</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1049255631\">Enemy_W3_Sunday_CharacterChangePhase_P3_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1713704707\">Enemy_W3_Sunday_Ability14_SpeedUp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-760485774\">Enemy_W3_Sunday_P3_DisableHeadLookAt</a>"
        },
        {
          "name": "Change Character UI",
          "characterName": "\"Embryo of Philosophy\" Sunday",
          "icon": "Monster_3025011.png"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_Sunday_MainStory380",
            "invertCondition": true
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868485684\">Enemy_W3_Sunday_HitReact</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3025010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "\"Harmonious Choir\" The Great Septimus"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-396148290\">Enemy_W3_Sunday_P3Ability10Bonus</a>[<span class=\"descriptionNumberColor\">Im Anfang war der Sinn</span>]"
            }
          ]
        },
        {
          "name": "Set Mapping Point",
          "point": "Head",
          "mapTo": "Head2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-760485774\">Enemy_W3_Sunday_P3_DisableHeadLookAt</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        }
      ]
    },
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part01to02": {
      "fileName": "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part01to02",
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
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
              "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
            }
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "silent": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
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
            "target": "{{Caster}}"
          },
          "multiBase": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
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
          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 8
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextOwner",
          "variableName": "Skill06BgmGapSeconds",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "Skill06BgmGapSeconds",
              "value": {
                "operator": "Variables[0] (Skill06BgmGapSeconds) || RETURN",
                "displayLines": "Skill06BgmGapSeconds",
                "constants": [],
                "variables": [
                  "Skill06BgmGapSeconds"
                ]
              }
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability06_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[1]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[1]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[1]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "variableName": "Skill05AssistNumber",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill05ErrorNumber",
          "value": {
            "operator": "Constants[0] (4) || Variables[0] (Skill05AssistNumber) || SUB || RETURN",
            "displayLines": "(4 - Skill05AssistNumber)",
            "constants": [
              4
            ],
            "variables": [
              "Skill05AssistNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[1]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.15,
                3
              ],
              "variables": [
                "{[Skill06[1]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[1]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.15,
                3
              ],
              "variables": [
                "{[Skill06[1]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || Constants[0] (0.25) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[1]]} * 0.25) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.25,
                3
              ],
              "variables": [
                "{[Skill06[1]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169017547\">Enemy_W3_Sunday_Ability06_Assist</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3025010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "\"Harmonious Choir\" The Great Septimus"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"118438066\">Enemy_W3_Sunday_P2BEBanUltra</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate": {
      "fileName": "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
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
          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"512429102\">Enemy_W3_Sunday_03_PassiveAbilityInitiate_ChangePhaseController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006822227\">Enemy_W3_Sunday_SummonMinions_Controller</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"941255357\">Enemy_W3_Sunday_RemoveOneMore</a>"
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
          "name": "Set Enemy Phase"
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
          "modifier": "<a class=\"gModGreen\" id=\"83954247\">Enemy_W3_Sunday_Part1FloatingMessage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1411318356\">Enemy_W3_Sunday_LeaveBattleSound</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868485684\">Enemy_W3_Sunday_HitReact</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-812390261\">Enemy_W3_Sunday_01_CharacterChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1598244363\">Enemy_W3_Sunday_03_P1LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1403833352\">Enemy_W3_Sunday_03_TalkSentenceTriggerController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"725097673\">W3_Sunday_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"691542435\">W3_Sunday_BattleScore3</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 2
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1919757203\">Enemy_W3_Sunday_01_PassiveAbilityInitiate_EnterBattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1403833352\">Enemy_W3_Sunday_03_TalkSentenceTriggerController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill04"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_136105992",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_136105992",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        }
      ]
    },
    "3025014_Monster_W3_Sunday_02_PassiveAbilityInitiate": {
      "fileName": "3025014_Monster_W3_Sunday_02_PassiveAbilityInitiate",
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
          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1981356350\">Enemy_W3_Sunday_PassiveAbilityInitiate_EnterBattle</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Peakbattle"
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 60038,
              "variables": null
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1973291237\">Enemy_W3_Sunday_PassiveAbilityInitiate_ChangePhaseController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006822227\">Enemy_W3_Sunday_SummonMinions_Controller</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"941255357\">Enemy_W3_Sunday_RemoveOneMore</a>"
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
          "name": "Set Enemy Phase"
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
          "modifier": "<a class=\"gModGreen\" id=\"83954247\">Enemy_W3_Sunday_Part1FloatingMessage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868485684\">Enemy_W3_Sunday_HitReact</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2045928367\">MissionBattleEvent60012_PassiveAbility</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"2124259254\">MissionBattleEvent60012_Charge_permission</a>"
            },
            {
              "name": "Show BattleEvent Button",
              "show": true
            }
          ]
        },
        {
          "name": "Set Mapping Point",
          "point": "P3EffectPoint",
          "mapTo": "P3EffectPoint_2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"725097673\">W3_Sunday_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"674764816\">W3_Sunday_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"691542435\">W3_Sunday_BattleScore3</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Peakbattle"
          },
          "passed": [
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                60038
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_01_PassiveAbilityInitiate": {
      "fileName": "3025014_Monster_W3_Sunday_01_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1006822227\">Enemy_W3_Sunday_SummonMinions_Controller</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1907199262\">Enemy_W3_Sunday_01_RemoveOneMore</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"83954247\">Enemy_W3_Sunday_Part1FloatingMessage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1543685529\">Enemy_W3_Sunday_PartDestroyController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"896746501\">Enemy_W3_Sunday_AudioReset</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868485684\">Enemy_W3_Sunday_HitReact</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-812390261\">Enemy_W3_Sunday_01_CharacterChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1703567279\">Enemy_W3_Sunday_P0.5_TalkSentenceTriggerController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"725097673\">W3_Sunday_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"691542435\">W3_Sunday_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1419566195\">Enemy_W3_Sunday_01_Tutorial</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 2
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1919757203\">Enemy_W3_Sunday_01_PassiveAbilityInitiate_EnterBattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1703567279\">Enemy_W3_Sunday_P0.5_TalkSentenceTriggerController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103294716",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103294716",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill04"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103294713",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103294713",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103294715",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103294715",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        }
      ]
    },
    "3025014_Monster_W3_Sunday_PassiveAbilityInitiate": {
      "fileName": "3025014_Monster_W3_Sunday_PassiveAbilityInitiate",
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
          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1981356350\">Enemy_W3_Sunday_PassiveAbilityInitiate_EnterBattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-538347270\">Enemy_W3_Sunday_SaveModel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1973291237\">Enemy_W3_Sunday_PassiveAbilityInitiate_ChangePhaseController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006822227\">Enemy_W3_Sunday_SummonMinions_Controller</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"941255357\">Enemy_W3_Sunday_RemoveOneMore</a>"
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
          "name": "Set Enemy Phase"
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
          "modifier": "<a class=\"gModGreen\" id=\"83954247\">Enemy_W3_Sunday_Part1FloatingMessage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"896746501\">Enemy_W3_Sunday_AudioReset</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2106884568\">Enemy_W3_Sunday_MainDieBGMBlend</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868485684\">Enemy_W3_Sunday_HitReact</a>"
        },
        {
          "name": "Set Mapping Point",
          "point": "P3EffectPoint",
          "mapTo": "P3EffectPoint_2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1084281577\">Enemy_W3_Sunday_TalkSentenceTriggerController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"725097673\">W3_Sunday_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"674764816\">W3_Sunday_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"691542435\">W3_Sunday_BattleScore3</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 2
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2106884568\">Enemy_W3_Sunday_MainDieBGMBlend</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
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
                    "value2": 3
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1084281577\">Enemy_W3_Sunday_TalkSentenceTriggerController</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 8005,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Trailblazer - Harmony[M]"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8006,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Trailblazer - Harmony[F]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2090970120\">Enemy_W3_Sunday_Player20LockHP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill04"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103329912",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103329912",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103329913",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103329913",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill042"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103329915",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103329915",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill06"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103329916",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103329916",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TalkTriggerFlag_103329934",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkTriggerFlag_103329934",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 60012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
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
                            "value1": "BattleEventTalkTriggerFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventTalkTriggerFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Random Event",
                          "isUnique": true,
                          "maskKey": "BattleEventTalkRandomFlag",
                          "randomTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "odds": [
                            0.25,
                            0.25,
                            0.25,
                            0.25
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 60012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
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
                        "value1": "TalkTriggerFlag_103329922",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TalkTriggerFlag_103329922",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        }
      ]
    },
    "3025014_Monster_W3_Sunday_01_Perform01_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_01_Perform01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 1.5,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__137",
              "summonLocation": "Last"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W3_Sunday_00_SundayPartPosition5",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 1.75,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__137",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W3_Sunday_00_SundayPartPosition4",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 2,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__137",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W3_Sunday_00_SundayPartPosition2",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 2.25,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__137",
              "summonLocation": "First"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W3_Sunday_00_SundayPartPosition1",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_SundayPart_AssistAbility01_Part02": {
      "fileName": "3025014_Monster_W3_SundayPart_AssistAbility01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (AssistSkill01_DamagePercentage) || RETURN",
              "displayLines": "AssistSkill01_DamagePercentage",
              "constants": [],
              "variables": [
                "AssistSkill01_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "3025014_Monster_W3_SundayPart_AssistAbility01_Part01": {
      "fileName": "3025014_Monster_W3_SundayPart_AssistAbility01_Part01",
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
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_SundayPart_AssistAbility01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability10_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability10_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"881920025\">W3_Sunday_BattleScore2_Listener</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-396148290\">Enemy_W3_Sunday_P3Ability10Bonus</a>[<span class=\"descriptionNumberColor\">Im Anfang war der Sinn</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1798831542\">Enemy_W3_Sunday_Ability10_AttackIgnoreDEF</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"298444\">Enemy_W3_Sunday_Ability09_ChargeEffect_01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"50631301\">Enemy_W3_Sunday_Ability09_ChargeEffect_02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33853682\">Enemy_W3_Sunday_Ability09_ChargeEffect_03</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill10ShieldBreakFlag",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.11,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (Skill10ShieldBreakFlag) || RETURN",
              "displayLines": "Skill10ShieldBreakFlag",
              "constants": [],
              "variables": [
                "Skill10ShieldBreakFlag"
              ]
            },
            "HitSplit": 0.12,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill10ShieldBreakFlag",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1798831542\">Enemy_W3_Sunday_Ability10_AttackIgnoreDEF</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1660671565\">Enemy_W3_Sunday_Ability09_ChargeEffect_TearOutline</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"881920025\">W3_Sunday_BattleScore2_Listener</a>"
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-503796113\">TaskList_Monster_W3_SundayPart_Ability10_Shake</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                  "invertCondition": true
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3025014_Monster_W3_Sunday_Ability10_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability10_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10TargetNumber",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10Damage",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10LightTeamShield",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10ShieldBreakFlag",
          "value": 0
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill10Attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "Skill10TargetNumber",
          "livingTargets": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10Damage",
          "value": {
            "operator": "Variables[0] (Skill10ShieldBreakFlag) || Variables[1] (Skill10Attack) || MUL || Variables[2] (Skill10TargetNumber) || MUL || RETURN",
            "displayLines": "((Skill10ShieldBreakFlag * Skill10Attack) * Skill10TargetNumber)",
            "constants": [],
            "variables": [
              "Skill10ShieldBreakFlag",
              "Skill10Attack",
              "Skill10TargetNumber"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team Entity}}"
          },
          "valueType": "CurrentShield",
          "variableName": "Skill10LightTeamShield",
          "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill10Damage",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (Skill10LightTeamShield) || RETURN",
              "displayLines": "Skill10LightTeamShield",
              "constants": [],
              "variables": [
                "Skill10LightTeamShield"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill10ShieldBreakFlag",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill10ShieldBreakFlag",
              "value": 0
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sunday_Ability10_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill10Damage",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (Skill10LightTeamShield) || RETURN",
              "displayLines": "Skill10LightTeamShield",
              "constants": [],
              "variables": [
                "Skill10LightTeamShield"
              ]
            }
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
    "3025014_Monster_W3_Sunday_Ability09_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_Sunday_MainStory380"
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
            "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
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
              "modifier": "<a class=\"gModGreen\" id=\"298444\">Enemy_W3_Sunday_Ability09_ChargeEffect_01</a>"
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
            "displayLines": "MDF_Skill10_TurnCount",
            "constants": [],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1660671565\">Enemy_W3_Sunday_Ability09_ChargeEffect_TearOutline</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": "=",
            "value2": 5,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"50631301\">Enemy_W3_Sunday_Ability09_ChargeEffect_02</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33853682\">Enemy_W3_Sunday_Ability09_ChargeEffect_03</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_Skill09_Round",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "SWITCH",
              "hasBreak": false,
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "SWITCH CONDITON",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "SWITCH CONDITON",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "SWITCH CONDITON",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "SWITCH CONDITON",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_Sunday_00_Skill09_Round",
                      "value": 2
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_Skill09_Round",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_Sunday_00_Skill09_Round",
                      "value": 3
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
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_Sunday_MainStory380"
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
                "displayLines": "MDF_Skill10_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 7
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1187511334\">Standard_MuteSpeed</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"98028781\">Enemy_W3_Sunday_MainStory380_UltraReady</a>"
                    },
                    {
                      "name": "Preload Battle Event(s)",
                      "eventID": [
                        60039,
                        60040
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Gender is",
                        "gender": "GENDER_MAN"
                      },
                      "passed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 60039,
                          "variables": null,
                          "whenCreated": [
                            "Show BattleEvent Button",
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valuePercent": 1,
                              "isFixed": "* ERR"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 60040,
                          "variables": null,
                          "whenCreated": [
                            "Show BattleEvent Button",
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valuePercent": 1,
                              "isFixed": "* ERR"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sunday_MainStory380_InsertUltra",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
            "displayLines": "MDF_Skill10_TurnCount",
            "constants": [],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
            "displayLines": "MDF_Skill10_TurnCount",
            "constants": [],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-983902167\">Enemy_W3_Sunday_Ability09_DelayToast</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "W3_Sunday_00_TimePause_ActionCounter",
          "context": "TargetEntity",
          "value": -1,
          "min": -1,
          "max": 7
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (7) || Variables[0] (MDF_Skill10_TurnCount) || SUB || RETURN",
                "displayLines": "(7 - MDF_Skill10_TurnCount)",
                "constants": [
                  7
                ],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 7,
              "assignState": "True"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (7) || Variables[0] (MDF_Skill10_TurnCount) || SUB || RETURN",
                "displayLines": "(7 - MDF_Skill10_TurnCount)",
                "constants": [
                  7
                ],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 7,
              "assignState": "True",
              "state": "Active"
            }
          ]
        },
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 1.728,
          "adjustmentType": "="
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_Sunday_MainStory380"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 6
                  }
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
                    "displayLines": "MDF_Skill10_TurnCount",
                    "constants": [],
                    "variables": [
                      "MDF_Skill10_TurnCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1001,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "March 7th"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valuePercent": 1,
                              "isFixed": "* ERR"
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": null,
                              "skillType": "ControlSkill03",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "afterInjection": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1002,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Dan Heng"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valuePercent": 1,
                              "isFixed": "* ERR"
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": null,
                              "skillType": "ControlSkill03",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "afterInjection": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1004,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Welt"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valuePercent": 1,
                              "isFixed": "* ERR"
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": null,
                              "skillType": "ControlSkill03",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "afterInjection": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1003,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Himeko"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valuePercent": 1,
                              "isFixed": "* ERR"
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": null,
                              "skillType": "ControlSkill03",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "afterInjection": []
                            }
                          ]
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
                    "value1": "W3_Sunday_00_TimePause_ActionCounter",
                    "compareType": "=",
                    "value2": 0
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-983902167\">Enemy_W3_Sunday_Ability09_DelayToast</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_TimePause_ActionCounter",
            "W3_Sunday_00_Skill09_Round"
          ]
        }
      ]
    },
    "3025014_Monster_W3_Sunday_Ability09_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability09_Part01",
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
          "ability": "Monster_W3_Sunday_Ability09_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
            "invertCondition": true
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
                "displayLines": "MDF_Skill10_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 7,
                  "execute": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6,
                  "execute": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    "Deleted bullshit"
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    "Deleted bullshit"
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": "=",
            "value2": 5,
            "contextScope": "TargetEntity"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W3_Sunday_00_TimePause_ActionCounter",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability08_InsertAbility": {
      "fileName": "3025014_Monster_W3_Sunday_Ability08_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability08_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability08_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
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
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability08_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability08_Part01",
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
          "ability": "Monster_W3_Sunday_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability07_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability07_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2045350392\">Enemy_W3_Sunday_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">If We Live In the Light</span>]",
          "valuePerStack": {
            "MDF_Ability07_P2_DamageRatio": {
              "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
              "displayLines": "{[Skill07[1]]}",
              "constants": [],
              "variables": [
                "{[Skill07[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability07_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability07_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability07_Part01",
        "3025014_Monster_W3_Sunday_Ability07_Part02",
        "3025014_Monster_W3_Sunday_Ability07_Camera"
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
          "ability": "Monster_W3_Sunday_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability06_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability06_Part02",
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
          "scope": "ContextOwner",
          "variableName": "Skill06BgmStateDelaySeconds"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextOwner",
          "variableName": "Skill06BgmGapSeconds"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"252376560\">Enemy_W3_Sunday_P2SongState</a>"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextOwner",
              "variableName": "Skill06BgmGapSeconds",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "Skill06BgmGapSeconds",
              "value": {
                "operator": "Variables[0] (Skill06BgmGapSeconds) || RETURN",
                "displayLines": "Skill06BgmGapSeconds",
                "constants": [],
                "variables": [
                  "Skill06BgmGapSeconds"
                ]
              }
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability06_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "variableName": "Skill05AssistNumber",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill05ErrorNumber",
          "value": {
            "operator": "Constants[0] (4) || Variables[0] (Skill05AssistNumber) || SUB || RETURN",
            "displayLines": "(4 - Skill05AssistNumber)",
            "constants": [
              4
            ],
            "variables": [
              "Skill05AssistNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[0]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.15,
                3
              ],
              "variables": [
                "{[Skill06[0]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[0]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.15,
                3
              ],
              "variables": [
                "{[Skill06[0]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
              "displayLines": "(({[Skill06[0]]} * 0.25) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
              "constants": [
                0.25,
                3
              ],
              "variables": [
                "{[Skill06[0]]}",
                "{[Skill06[2]]}",
                "Skill05AssistNumber"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169017547\">Enemy_W3_Sunday_Ability06_Assist</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
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
            "modifier": "<a class=\"gModGreen\" id=\"252376560\">Enemy_W3_Sunday_P2SongState</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1624906470\">Enemy_W3_Sunday_Instance_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-660746350\">Enemy_W3_Sunday_LightTeamLockHP</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability06_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability06_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability06_Part01",
        "3025014_Monster_W3_Sunday_Ability06_Part02",
        "3025014_Monster_W3_Sunday_Ability06_Camera",
        "3025014_Monster_W3_Sunday_03_PassiveAbilityInitiate_Insert_Part01to02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill06PerformFlag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill06PerformFlag",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2090970120\">Enemy_W3_Sunday_Player20LockHP</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-660746350\">Enemy_W3_Sunday_LightTeamLockHP</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sunday_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability052_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability052_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "flagNames": []
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability052_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability052_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability052_Part01",
        "3025014_Monster_W3_Sunday_Ability052_Part02",
        "3025014_Monster_W3_Sunday_Ability052_Camera"
      ],
      "skillTrigger": "Skill052",
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
          "ability": "Monster_W3_Sunday_Ability052_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability05_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1235637066\">Enemy_W3_Sunday_Ability04_Charge</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill05AssistNumber"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill05ErrorNumber"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "variableName": "Skill05AssistNumber",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill05ErrorNumber",
          "value": {
            "operator": "Constants[0] (4) || Variables[0] (Skill05AssistNumber) || SUB || RETURN",
            "displayLines": "(4 - Skill05AssistNumber)",
            "constants": [
              4
            ],
            "variables": [
              "Skill05AssistNumber"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition5"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition5"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition5"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "({[Skill05[0]]} * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[Skill05[0]]}"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition2"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition2"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition2"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "({[Skill05[0]]} * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[Skill05[0]]}"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition4"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition4"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition4"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "({[Skill05[0]]} * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[Skill05[0]]}"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition1"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition1"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Sunday_00_SundayPartPosition1"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "({[Skill05[0]]} * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[Skill05[0]]}"
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
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.5) || MUL || Variables[1] (Skill05AssistNumber) || MUL || RETURN",
              "displayLines": "(({[Skill05[0]]} * 0.5) * Skill05AssistNumber)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill05[0]]}",
                "Skill05AssistNumber"
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
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "flagNames": []
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability05_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability05_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability05_Part01",
        "3025014_Monster_W3_Sunday_Ability05_Part02",
        "3025014_Monster_W3_Sunday_Ability05_Camera"
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
          "ability": "Monster_W3_Sunday_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability042_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability042_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
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
              "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
            }
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "flagNames": []
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
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
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
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
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2060454360\">Enemy_W3_Sunday_Ability042_DelayCost0</a>"
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2060454360\">Enemy_W3_Sunday_Ability042_DelayCost0</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1153660745\">Enemy_W3_Sunday_P2BELockHP_2</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability042_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability042_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability042_Part01",
        "3025014_Monster_W3_Sunday_Ability042_Part02",
        "3025014_Monster_W3_Sunday_Ability042_Camera"
      ],
      "skillTrigger": "Skill042",
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
          "ability": "Monster_W3_Sunday_Ability042_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability04_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
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
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
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
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_SundayPart_Ability04_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ]
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1235637066\">Enemy_W3_Sunday_Ability04_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1598244363\">Enemy_W3_Sunday_03_P1LockHP</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability04_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability04_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability04_Part01",
        "3025014_Monster_W3_Sunday_Ability04_Part02",
        "3025014_Monster_W3_Sunday_Ability04_Camera"
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
          "ability": "Monster_W3_Sunday_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability03_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
            "displayLines": "{[Skill03[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageAddedRatio": 0.5
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability03_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability03_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability03_Part01",
        "3025014_Monster_W3_Sunday_Ability03_Part02",
        "3025014_Monster_W3_Sunday_Ability03_Camera"
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
          "ability": "Monster_W3_Sunday_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability02_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill02TargetNumber"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "Skill02TargetNumber",
          "livingTargets": true
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Skill02TargetNumber) || RETURN",
            "displayLines": "Skill02TargetNumber",
            "constants": [],
            "variables": [
              "Skill02TargetNumber"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(Left to Right)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"831068002\">Enemy_W3_Sunday_Ability02Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"831068002\">Enemy_W3_Sunday_Ability02Mark</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02TargetNumber",
                "compareType": ">=",
                "value2": 5
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"831068002\">Enemy_W3_Sunday_Ability02Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__831068002\">Enemy_W3_Sunday_Ability02Mark</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3025014_Monster_W3_Sunday_Ability02_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability02_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability02_Part01",
        "3025014_Monster_W3_Sunday_Ability02_Part02",
        "3025014_Monster_W3_Sunday_Ability02_Camera"
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
          "ability": "Monster_W3_Sunday_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability01_Part02": {
      "fileName": "3025014_Monster_W3_Sunday_Ability01_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            }
          ]
        },
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3025014_Monster_W3_Sunday_Ability01_Part01": {
      "fileName": "3025014_Monster_W3_Sunday_Ability01_Part01",
      "childAbilityList": [
        "3025014_Monster_W3_Sunday_Ability01_Part01",
        "3025014_Monster_W3_Sunday_Ability01_Part02",
        "3025014_Monster_W3_Sunday_Ability01_Camera"
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
          "ability": "Monster_W3_Sunday_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3025014_Modifiers": {
      "fileName": "3025014_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__691542435\">W3_Sunday_BattleScore3</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1313,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sunday"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Farewell, Seven Rest Days",
                          "desc": "Use ally character Sunday to deal the final blow in a victory against The Great Septimus",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__881920025\">W3_Sunday_BattleScore2_Listener</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_Sunday_00_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W3_Sunday_00_BattleScore2_Flag",
                      "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__674764816\">W3_Sunday_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W3_Sunday_00_BattleScore2_Flag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "And Then It Is Monday...",
                          "desc": "Accumulate enough Shield to completely block \"Embryo of Philosophy\" Sunday's ability, Im Anfang war die Tat",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__725097673\">W3_Sunday_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill052"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Workday Without God",
                          "desc": "Break all Echoes of Faded Dreams before The \"Harmonious Choir\" The Great Septimus uses \"Volteggiando\" or \"Tempestoso\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill06"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "DisableAction"
                            }
                          ],
                          "invertCondition": true
                        }
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Workday Without God",
                              "desc": "Break all Echoes of Faded Dreams before The \"Harmonious Choir\" The Great Septimus uses \"Volteggiando\" or \"Tempestoso\"",
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
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1543685529\">Enemy_W3_Sunday_PartDestroyController</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      }
                    }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1283356455\">Enemy_W3_Sunday_FinalPhase</a>",
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1624906470\">Enemy_W3_Sunday_Instance_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield",
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "valueType": "CurrentShield",
                  "variableName": "MDF_CurShield_Display",
                  "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Shield Value Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "valueType": "CurrentShield",
                  "variableName": "MDF_CurShield_Display",
                  "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                  "multiplier": 1
                }
              ]
            }
          ],
          "description": "A Shield that absorbs DMG taken by all allies. Before the Shield is depleted or its effect expires, enemy targets' attacks won't reduce the Shielded allies' HP. Currently, the Shield has <span class=\"descriptionNumberColor\">MDF_CurShield_Display</span> point(s) remaining.",
          "type": "Buff",
          "effectName": "Walk in the Light",
          "statusName": "Walk in the Light"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "valueType": "CurrentShield",
                  "variableName": "CurShield",
                  "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AddShield",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldPercentage_Add) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                    "displayLines": "(MDF_ShieldPercentage_Add * CasterBaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage_Add",
                      "CasterBaseAttack"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxShield",
                  "value": {
                    "operator": "Variables[0] (CurShield) || Variables[1] (AddShield) || ADD || RETURN",
                    "displayLines": "(CurShield + AddShield)",
                    "constants": [],
                    "variables": [
                      "CurShield",
                      "AddShield"
                    ]
                  }
                },
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "modifierNameArray": [
                    "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
                  ],
                  "value": {
                    "operator": "Variables[0] (MaxShield) || RETURN",
                    "displayLines": "MaxShield",
                    "constants": [],
                    "variables": [
                      "MaxShield"
                    ]
                  },
                  "operation": "Set"
                },
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "modifierNameArray": [
                    "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
                  ],
                  "value": {
                    "operator": "Variables[0] (AddShield) || RETURN",
                    "displayLines": "AddShield",
                    "constants": [],
                    "variables": [
                      "AddShield"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShieldPercentage_Add"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AddShield",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                    "displayLines": "(MDF_ShieldPercentage * CasterBaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage",
                      "CasterBaseAttack"
                    ]
                  }
                },
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "value": {
                    "operator": "Variables[0] (AddShield) || RETURN",
                    "displayLines": "AddShield",
                    "constants": [],
                    "variables": [
                      "AddShield"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
                }
              ]
            },
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
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShieldPercentage"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1718357040\">Enemy_W3_Sunday_DuringBE</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-396148290\">Enemy_W3_Sunday_P3Ability10Bonus</a>[<span class=\"descriptionNumberColor\">Im Anfang war der Sinn</span>]",
          "modifierFlags": [
            "BlockDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TutorialFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TutorialFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TutorialFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
                          "valuePerStack": {
                            "MDF_ShieldPercentage_Add": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                          "valuePerStack": {
                            "MDF_ShieldPercentage": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ],
          "description": "Immune to all DMG.",
          "type": "Other",
          "statusName": "Im Anfang war der Sinn"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1419566195\">Enemy_W3_Sunday_01_Tutorial</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TutorialFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TutorialFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TutorialFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
                          "valuePerStack": {
                            "MDF_ShieldPercentage_Add": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                          "valuePerStack": {
                            "MDF_ShieldPercentage": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1411318356\">Enemy_W3_Sunday_LeaveBattleSound</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__896746501\">Enemy_W3_Sunday_AudioReset</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-538347270\">Enemy_W3_Sunday_SaveModel</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-812390261\">Enemy_W3_Sunday_01_CharacterChangePhase</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP0.5"
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
          "for": "<a class=\"gModGreen\" id=\"mod__252376560\">Enemy_W3_Sunday_P2SongState</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2060454360\">Enemy_W3_Sunday_Ability042_DelayCost0</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__118438066\">Enemy_W3_Sunday_P2BEBanUltra</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Skill06PerformFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1624906470\">Enemy_W3_Sunday_Instance_DisableAction</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag",
            "Skill05ErrorNumber"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1905134690\">Enemy_W3_Sunday_03_P1LockHP_SummonMinions</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1598244363\">Enemy_W3_Sunday_03_P1LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LockHPTriggerFlag"
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1905134690\">Enemy_W3_Sunday_03_P1LockHP_SummonMinions</a>"
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
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1905134690\">Enemy_W3_Sunday_03_P1LockHP_SummonMinions</a>"
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "LockHPTriggerFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "LockHPTriggerFlag",
                      "value": 1
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                        "displayLines": "_ReadyToCharge",
                        "constants": [],
                        "variables": [
                          "_ReadyToCharge"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__307400804\">Enemy_W3_Sunday_P2BELockHP_SummonMinions_2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1153660745\">Enemy_W3_Sunday_P2BELockHP_2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LockHPTriggerFlag"
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"307400804\">Enemy_W3_Sunday_P2BELockHP_SummonMinions_2</a>"
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
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"307400804\">Enemy_W3_Sunday_P2BELockHP_SummonMinions_2</a>"
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "LockHPTriggerFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "LockHPTriggerFlag",
                      "value": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1904246613\">Enemy_W3_Sunday_P2BELockHP_SummonMinions</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LockHPTriggerFlag"
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1904246613\">Enemy_W3_Sunday_P2BELockHP_SummonMinions</a>"
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
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1904246613\">Enemy_W3_Sunday_P2BELockHP_SummonMinions</a>"
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "LockHPTriggerFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "LockHPTriggerFlag",
                      "value": 1
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                        "displayLines": "_ReadyToCharge",
                        "constants": [],
                        "variables": [
                          "_ReadyToCharge"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 8,
                          "execute": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 5
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 9,
                          "execute": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 6
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag",
            "Skill05ErrorNumber"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__868485684\">Enemy_W3_Sunday_HitReact</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>",
          "execute": [
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1798831542\">Enemy_W3_Sunday_Ability10_AttackIgnoreDEF</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Defence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFFlat</span>&nbsp;",
                      "value": "(0 - MDF_Defence)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-660746350\">Enemy_W3_Sunday_LightTeamLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill06PerformFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2090970120\">Enemy_W3_Sunday_Player20LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                    "compareType": "<=",
                    "value2": 1,
                    "conditions": {
                      "name": "Living State",
                      "state": "Mask_AliveOnly",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
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
            "AIFlag",
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseSkill042"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__83954247\">Enemy_W3_Sunday_Part1FloatingMessage</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Mapping Point",
                  "point": "SelectRoot",
                  "mapTo": "HighSelectRoot"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>",
          "modifierFlags": [
            "MuteHitH"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose3"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose1"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose3Break"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_TimePause_ActionCounter"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose2"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose1"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose2Break"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_TimePause_ActionCounter"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseP3Pose1"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1049255631\">Enemy_W3_Sunday_CharacterChangePhase_P3_Controller</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[SkillP02[2]]}"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1360561079\">Standard_CTRL_Sleep_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-973072292\">Standard_CTRL_Sleep_Attacked_CharacterChangePhase</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseChangeRecover"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-512141464\">Standard_CTRL_Sleep_AllDamageTakenUp</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_AllDamageAddedRatio"
                    }
                  ]
                }
              ]
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"410552905\">Enemy_W3_Figure_RLElite_BreakController</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-900182182\">Monster_W3_FigureBoss_Standard_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "MuteHitH"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                          "removeAllInstances": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                          "removeAllInstances": true
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_CTRL",
            "STAT_CTRL_Sleep",
            "DisableAction",
            "DispelPriorityHigh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1360561079\">Standard_CTRL_Sleep_Effect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Alien Dream dispelled"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                    "displayLines": "MDF_HealPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HealPercentage"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
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
                    "compareType": "<=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Alien Dream",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1360561079\">Standard_CTRL_Sleep_Effect</a>"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-512141464\">Standard_CTRL_Sleep_AllDamageTakenUp</a>",
                  "valuePerStack": {
                    "MDF_AllDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_AllDamageAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageAddedRatio"
                      ]
                    }
                  }
                }
              ]
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"410552905\">Enemy_W3_Figure_RLElite_BreakController</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-900182182\">Monster_W3_FigureBoss_Standard_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "MuteHitH",
                        "invertCondition": true
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_AllDamageAddedRatio"
          ],
          "latentQueue": [],
          "description": "Cannot take action within a certain number of turns and regenerates minor amounts of HP at the start of every turn. When this unit is attacked, greatly increase the DMG it takes. Getting attacked dispels the Alien Dream state.",
          "type": "Debuff",
          "effectName": "Alien Dream",
          "statusName": "Alien Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1235637066\">Enemy_W3_Sunday_Ability04_Charge</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1660671565\">Enemy_W3_Sunday_Ability09_ChargeEffect_TearOutline</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__33853682\">Enemy_W3_Sunday_Ability09_ChargeEffect_03</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_TimePause_ActionCounter"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__50631301\">Enemy_W3_Sunday_Ability09_ChargeEffect_02</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_TimePause_ActionCounter"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__298444\">Enemy_W3_Sunday_Ability09_ChargeEffect_01</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance",
                  "whitelistTagType": "Bit_Decrease"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
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
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                        "compareType": "=",
                        "value2": 0,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Next Player Character Turn}}"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Advance/Delay up to Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "targetRef": {
                            "name": "Target Name",
                            "target": "{{Next Player Character Turn}}"
                          },
                          "refPoint": "After",
                          "isStartingAV": true
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": -100,
                          "isStartingDelay": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "SpecialActionState"
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                        "compareType": "=",
                        "value2": 0,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Next Player Character Turn}}"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Advance/Delay up to Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "targetRef": {
                            "name": "Target Name",
                            "target": "{{Next Player Character Turn}}"
                          },
                          "refPoint": "After",
                          "isStartingAV": true
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": -100,
                          "isStartingDelay": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
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
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                        "compareType": "=",
                        "value2": 0,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Next Player Character Turn}}"
                          },
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Advance/Delay up to Target",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "targetRef": {
                                "name": "Target Name",
                                "target": "{{Next Player Character Turn}}"
                              },
                              "refPoint": "After",
                              "isStartingAV": true
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Action Advance/Delay",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "advanceType": "Advance",
                              "multiAdd": -100,
                              "isStartingDelay": true
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
          "latentQueue": [
            "W3_Sunday_00_TimePause_ActionCounter",
            "W3_Sunday_00_Skill09_Round"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__620609066\">Enemy_W3_Sunday_Ability09_Bonus_1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill10"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "MDF_AllDamageTypeAddedRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_AllDamageTypeAddedRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (ENEMIES_OBJECT_UNUSED__130) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * ENEMIES_OBJECT_UNUSED__130)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "ENEMIES_OBJECT_UNUSED__130"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 10,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1121563146\">Enemy_W3_SundayPart_AssistAbilityAttach</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_SundayPart_AssistAbility01_Part01"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_SundayPart_AssistAbility01_Part02"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AssistSkill01_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_Assist_DamagePercentage) || RETURN",
                    "displayLines": "MDF_Assist_DamagePercentage",
                    "constants": [],
                    "variables": [
                      "MDF_Assist_DamagePercentage"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2045350392\">Enemy_W3_Sunday_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">If We Live In the Light</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentShieldValue) || RETURN",
                    "displayLines": "MDF_CurrentShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentShieldValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                    "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[0]]}",
                      "MDF_MaxHP"
                    ]
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Take Damage End [Anyone]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
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
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                    "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[0]]}",
                      "MDF_MaxHP"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Skill07_P2_DamageRatio) || RETURN",
                    "displayLines": "MDF_Skill07_P2_DamageRatio",
                    "constants": [],
                    "variables": [
                      "MDF_Skill07_P2_DamageRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                    "displayLines": "{[Skill07[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill07[2]]}"
                    ]
                  }
                },
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
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                    "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[0]]}",
                      "MDF_MaxHP"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                    "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[0]]}",
                      "MDF_MaxHP"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            },
            {
              "eventTrigger": "Shield Value Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentShieldValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentShieldValue) || RETURN",
                    "displayLines": "MDF_CurrentShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentShieldValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                    "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "{[Skill07[0]]}",
                      "MDF_MaxHP"
                    ]
                  },
                  "assignState": "True"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Skill07_P2_DamageRatio"
          ],
          "latentQueue": [],
          "description": "Increases the DMG dealt by <span class=\"descriptionNumberColor\">MDF_Skill07_P2_DamageRatio</span>, and decreases the DMG taken. Toughness cannot be reduced. This lasts until the Shield is depleted.",
          "type": "Buff",
          "effectName": "If We Live In the Light",
          "statusName": "If We Live In the Light"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2124259254\">MissionBattleEvent60012_Charge_permission</a>",
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 7,
                  "assignState": "True"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_Sunday_00_TimePause_ActionCounter",
                  "value": 7
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 7,
                  "assignState": "False",
                  "state": "Normal"
                },
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Skill10_TurnCount",
                  "value": {
                    "operator": "Variables[0] (MDF_Skill10_TurnCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_Skill10_TurnCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Skill10_TurnCount"
                    ]
                  }
                }
              ]
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
          "description": "After <span class=\"descriptionNumberColor\">MDF_Skill10_TurnCount</span> turn(s), unleashes \"Im Anfang war die Tat.\"",
          "type": "Other",
          "effectName": "Im Anfang war die Kraft",
          "statusName": "Im Anfang war die Kraft"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1169017547\">Enemy_W3_Sunday_Ability06_Assist</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__54417858\">Enemy_W3_Sunday_Ability042_Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__512429102\">Enemy_W3_Sunday_03_PassiveAbilityInitiate_ChangePhaseController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
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
                          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Sunday_03_PassiveAbilityInitiate_Insert_Part01to02",
                          "priorityTag": "MonsterChangePhase",
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
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1973291237\">Enemy_W3_Sunday_PassiveAbilityInitiate_ChangePhaseController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
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
                          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part01to02",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
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
                        "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{All Team Members(Exclude Self)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1
                          }
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part02to03",
                          "priorityTag": "MonsterChangePhase",
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
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1919757203\">Enemy_W3_Sunday_01_PassiveAbilityInitiate_EnterBattle</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 1.5,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 1.75,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 2,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 2.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition1",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Max"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition5",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Medium"
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition2",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Medium"
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition4",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "removeShields": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-538347270\">Enemy_W3_Sunday_SaveModel</a>"
                }
              ],
              "priorityLevel": -91
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1981356350\">Enemy_W3_Sunday_PassiveAbilityInitiate_EnterBattle</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 1.5,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 1.75,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 2,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 2.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "ENEMIES_OBJECT_UNUSED__137",
                      "summonLocation": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition1",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Max"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition5",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Medium"
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition2",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Medium"
                      },
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W3_Sunday_00_SundayPartPosition4",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "removeShields": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1121563146\">Enemy_W3_SundayPart_AssistAbilityAttach</a>",
                  "valuePerStack": {
                    "MDF_Assist_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                      "displayLines": "{[Skill06[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>"
                }
              ],
              "priorityLevel": -91
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__280716362\">Enemy_W3_Sunday_SummonMinions</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0000010000076
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>",
                    "invertCondition": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__1006822227\">Enemy_W3_Sunday_SummonMinions_Controller</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"280716362\">Enemy_W3_Sunday_SummonMinions</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"280716362\">Enemy_W3_Sunday_SummonMinions</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W3_Sunday_00_StanceCountDown_Counter",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W3_Sunday_00_StanceCountDown_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Toughness Bar Reset [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W3_Sunday_00_StanceCountDown_Counter",
                  "value": 1,
                  "max": 11
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W3_Sunday_00_StanceCountDown_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "W3_Sunday_00_StanceCountDown_Flag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "compareType": "<=",
                            "value2": 0
                          }
                        ],
                        "invertCondition": true
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part03",
                      "priorityTag": "MonsterBuffSelf",
                      "ownerState": "Mask_AliveOrLimbo",
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
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-98549587\">Enemy_W3_Sunday_Part03_PowerUp</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_351) || RETURN",
                    "displayLines": "UnusedUnderThisBase_351",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_351"
                    ]
                  }
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Fire",
                    "Ice",
                    "Imaginary",
                    "Physical",
                    "Quantum",
                    "Thunder",
                    "Wind"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1907199262\">Enemy_W3_Sunday_01_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 20
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
          "for": "<a class=\"gModGreen\" id=\"mod__941255357\">Enemy_W3_Sunday_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
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
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 7,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "AIFlag",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 20
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
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 3025010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "\"Harmonious Choir\" The Great Septimus"
                      },
                      "failed": [
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
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [
            "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
          ]
        }
      ],
      "references": []
    },
    "3025014_BE_BattleEvents": {
      "fileName": "3025014_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 60038,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 200
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Deals massive Imaginary DMG to all enemies."
        },
        {
          "name": "Battle Event Construction",
          "ID": 60040,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 160
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Deals massive Imaginary DMG to all enemies."
        },
        {
          "name": "Battle Event Construction",
          "ID": 60039,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 160
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Deals massive Imaginary DMG to all enemies."
        }
      ],
      "references": []
    }
  }
}