const configAbility = {
  "fileName": "4014035_Monster_W4_Pollux_PassiveAbility_Initiate",
  "skillTrigger": "Passive",
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
      "modifier": "<a class=\"gModGreen\" id=\"1132979046\">W4_Pollux_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1116201427\">W4_Pollux_BattleScore2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1099423808\">W4_Pollux_BattleScore3</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1927341406\">Monster_W4_Pollux_Status</a>"
    },
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID0) || RETURN",
            "displayLines": "SummonID0",
            "constants": [],
            "variables": [
              "SummonID0"
            ]
          },
          "locationType": "BeforeCaster",
          "locationOffset": -1,
          "leader": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 1.3,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID1) || RETURN",
            "displayLines": "SummonID1",
            "constants": [],
            "variables": [
              "SummonID1"
            ]
          },
          "locationType": "AfterCaster",
          "locationOffset": 1,
          "leader": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
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
      "name": "Create Shared HP Group",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "subTarget": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "removeShields": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_76) || RETURN",
              "displayLines": "UnusedUnderThisBase_76",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_76"
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
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[4]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[4]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014033,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Castorice, Hand of Shadow",
        "isBaseCompare": true,
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-720682465\">Monster_W4_Pollux_PartController_LockHP</a>"
        }
      ],
      "failed": [
        {
          "name": "Set Enemy Phase",
          "phase": 2
        }
      ]
    },
    {
      "name": "Define Custom Variable with WorldLevel",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_WorldLevel"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_LoseHpRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_78) || RETURN",
            "displayLines": "UnusedUnderThisBase_78",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_78"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_ActionDelay",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_79) || RETURN",
            "displayLines": "UnusedUnderThisBase_79",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_79"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_Part_ActionDelay",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_80) || RETURN",
            "displayLines": "UnusedUnderThisBase_80",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_80"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_LoseHpRatio",
          "value": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_ActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_Part_ActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
            "displayLines": "{[Skill05[3]]}",
            "constants": [],
            "variables": [
              "{[Skill05[3]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "StoryMode",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1130988503\">Monster_W4_Pollux_WaveStart</a>"
        }
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-226864099\">Monster_W4_PolluxPart_R</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-193308861\">Monster_W4_PolluxPart_L</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1927341406\">Monster_W4_Pollux_Status</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_EnergyValue",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_ReadyToCharge",
                    "compareType": "=",
                    "value2": 1
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
                  "name": "Define Custom Variable",
                  "variableName": "_TempAIFlag",
                  "value": {
                    "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                    "displayLines": "_ReadyToCharge",
                    "constants": [],
                    "variables": [
                      "_ReadyToCharge"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 100
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Variables[0] ({[PassiveSkill01[3]]}) || INVERT || RETURN",
                        "displayLines": "-{[PassiveSkill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[3]]}"
                        ]
                      },
                      "adjustmentType": "Advance"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "-{[PassiveSkill01[3]]}"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "-{[PassiveSkill01[3]]}"
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
                        "value1": "StoryMode",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_StorySkill05",
                        "compareType": "=",
                        "value2": 0
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
                      "modifier": "<a class=\"gModGreen\" id=\"1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_ReadyToCharge",
              "value": 0
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
              "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_EnergyValue",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_EnergyValue) || RETURN",
                "displayLines": "_EnergyValue",
                "constants": [],
                "variables": [
                  "_EnergyValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": 1,
              "assignState": "True",
              "state": "Normal"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "_HPChangeValue",
              "value": "ParamValue"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_HPChangeValue",
                    "compareType": "<",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HPChangeRatio",
                  "value": {
                    "operator": "Variables[0] (_HPChangeValue) || INVERT || Variables[1] (_TargetMaxHP) || DIV || RETURN",
                    "displayLines": "(-_HPChangeValue / _TargetMaxHP)",
                    "constants": [],
                    "variables": [
                      "_HPChangeValue",
                      "_TargetMaxHP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_EnergyValue",
                  "value": {
                    "operator": "Variables[0] (_HPChangeRatio) || Variables[1] ({[PassiveSkill01[2]]}) || MUL || RETURN",
                    "displayLines": "(_HPChangeRatio * {[PassiveSkill01[2]]})",
                    "constants": [],
                    "variables": [
                      "_HPChangeRatio",
                      "{[PassiveSkill01[2]]}"
                    ]
                  },
                  "max": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyValue) || RETURN",
                        "displayLines": "_EnergyValue",
                        "constants": [],
                        "variables": [
                          "_EnergyValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "maximum": 1
                    }
                  ]
                }
              ]
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
                "skillName": "Skill05"
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
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                        "displayLines": "_Skill05_ActionDelay",
                        "constants": [],
                        "variables": [
                          "_Skill05_ActionDelay"
                        ]
                      },
                      "adjustmentType": "Advance"
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
                      "multiAdd": "_Skill05_ActionDelay",
                      "changeVersion": true
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "advanceType": "Set",
                  "add": {
                    "operator": "Variables[0] (_Skill05_Part_ActionDelay) || RETURN",
                    "displayLines": "_Skill05_Part_ActionDelay",
                    "constants": [],
                    "variables": [
                      "_Skill05_Part_ActionDelay"
                    ]
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
                    "name": "Skill Name",
                    "skillName": "Skill05"
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
                    "ID": 4014033,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Castorice, Hand of Shadow",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                    "name": "OR",
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
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
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
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 7,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 0
                }
              ]
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ReadyToCharge",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
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
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_EnergyValue",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ReadyToCharge",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ReadyToCharge",
                  "value": 0
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1130988503\">Monster_W4_Pollux_WaveStart</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_WorldLevel",
        "StoryMode"
      ]
    }
  ]
}