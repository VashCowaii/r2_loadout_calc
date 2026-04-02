const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60029,
  "trimCharacterName": 60029,
  "abilityList": [
    "60029_MissionBattleEvent60024_PassiveAbility01",
    "60029_MissionBattleEvent60024_Beta_Ability03_Camera",
    "60029_MissionBattleEvent60024_Beta_Ability03_Part02",
    "60029_MissionBattleEvent60024_Beta_Ability03_Part01",
    "60029_MissionBattleEvent60024_Beta_Ability03_EnterReady",
    "60029_MissionBattleEvent60024_Ability03_Insert_Camera",
    "60029_MissionBattleEvent60024_Ability03_Insert_Part02",
    "60029_MissionBattleEvent60024_Ability03_Insert_Part01",
    "60029_MissionBattleEvent60024_Ability03_Camera",
    "60029_MissionBattleEvent60024_Ability03_Part02",
    "60029_MissionBattleEvent60024_Ability03_Part01",
    "60029_MissionBattleEvent60024_Ability03_EnterReady",
    "60029_Modifiers"
  ],
  "abilityObject": {
    "60029_MissionBattleEvent60024_PassiveAbility01": {
      "fileName": "60029_MissionBattleEvent60024_PassiveAbility01",
      "childAbilityList": [
        "60029_MissionBattleEvent60024_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1097239658\">MissionBattleEvent60024_PassiveAbility</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 5
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-117751249\">MissionBattleEvent60024_Charge</a>",
              "valuePerStack": {
                "MDF_MaxHPRatio": {
                  "operator": "Variables[0] (#BattleEvent_P8_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P8_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P8_ADF"
                  ]
                },
                "MDF_ExtraSP": {
                  "operator": "Variables[0] (#BattleEvent_P9_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P9_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P9_ADF"
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
          "modifier": "<a class=\"gModGreen\" id=\"1001363316\">MissionBattleEvent60024_AutoUseUltraAbility</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BattleEventHeal_HPDeltaLayer",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BattleEventHeal_HPDeltaLayer"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1001363316\">MissionBattleEvent60024_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1097239658\">MissionBattleEvent60024_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117751249\">MissionBattleEvent60024_Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W4_DawnsEye_01_HPRatio",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W4_DawnsEye_01_HPRatio"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (W4_DawnsEye_01_HPRatio) || RETURN",
                      "displayLines": "W4_DawnsEye_01_HPRatio",
                      "constants": [],
                      "variables": [
                        "W4_DawnsEye_01_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_HPRatioCurrent"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPChangeRatioDelta",
                      "value": {
                        "operator": "Variables[0] (W4_DawnsEye_01_HPRatio) || Variables[1] (MDF_HPRatioCurrent) || SUB || RETURN",
                        "displayLines": "(W4_DawnsEye_01_HPRatio - MDF_HPRatioCurrent)",
                        "constants": [],
                        "variables": [
                          "W4_DawnsEye_01_HPRatio",
                          "MDF_HPRatioCurrent"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W4_DawnsEye_01_HPRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_HPRatioCurrent) || RETURN",
                        "displayLines": "MDF_HPRatioCurrent",
                        "constants": [],
                        "variables": [
                          "MDF_HPRatioCurrent"
                        ]
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_HPChangeRatioDelta) || Variables[1] (MDF_MaxHPRatio) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((MDF_HPChangeRatioDelta / MDF_MaxHPRatio) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "MDF_HPChangeRatioDelta",
                          "MDF_MaxHPRatio"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
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
                        "value": "ENEMIES_OBJECT_UNUSED__232_BOOLEAN"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_ExtraSP) || RETURN",
                        "displayLines": "MDF_ExtraSP",
                        "constants": [],
                        "variables": [
                          "MDF_ExtraSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxHPRatio",
            "MDF_ExtraSP"
          ],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60029_MissionBattleEvent60024_Beta_Ability03_Camera": {
      "fileName": "60029_MissionBattleEvent60024_Beta_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60029_MissionBattleEvent60024_Beta_Ability03_Part02": {
      "fileName": "60029_MissionBattleEvent60024_Beta_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"560024402\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo</a>",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEventHeal_HPDeltaLayer",
          "value": 1,
          "max": 100
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] (BattleEventHeal_HPDeltaLayer) || RETURN",
              "displayLines": "BattleEventHeal_HPDeltaLayer",
              "constants": [],
              "variables": [
                "BattleEventHeal_HPDeltaLayer"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "ifTargetFound": [
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1214340360\">Monster_W4_DawnsEye_LockHP</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"27951832\">Modifier_Monster_W4_DawnsEye_01_HOT</a>[<span class=\"descriptionNumberColor\">Eagerness</span>]",
          "duration": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P2_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF",
                "BaseAttack"
              ]
            },
            "MDF_DamageAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P7_ADF) || RETURN",
              "displayLines": "#BattleEvent_P7_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P7_ADF"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healFlat": {
                "operator": "Variables[0] (#BattleEvent_P6_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
                "displayLines": "(#BattleEvent_P6_ADF * BaseAttack)",
                "constants": [],
                "variables": [
                  "#BattleEvent_P6_ADF",
                  "BaseAttack"
                ]
              },
              "formula": "Heal from Base Value"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60029_MissionBattleEvent60024_Beta_Ability03_Part01": {
      "fileName": "60029_MissionBattleEvent60024_Beta_Ability03_Part01",
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
          "ability": "MissionBattleEvent60024_Beta_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60029_MissionBattleEvent60024_Beta_Ability03_EnterReady": {
      "fileName": "60029_MissionBattleEvent60024_Beta_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_Insert_Camera": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_Insert_Part02": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 5
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"196132555\">Enemy_W4_DawnsEye_01_MainStoryLockHP</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1238713838\">MissionBattleEvent60024_MainStory1</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1238713838\">MissionBattleEvent60024_MainStory1</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1221936219\">MissionBattleEvent60024_MainStory2</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1221936219\">MissionBattleEvent60024_MainStory2</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1205158600\">MissionBattleEvent60024_MainStory3</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1205158600\">MissionBattleEvent60024_MainStory3</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1322601933\">MissionBattleEvent60024_MainStory4</a>",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1322601933\">MissionBattleEvent60024_MainStory4</a>"
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
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1369323293\">MissionBattleEvent60024_BGMChange</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": -1,
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"560024402\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo</a>",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEventHeal_HPDeltaLayer",
          "value": 1,
          "max": 100
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] (BattleEventHeal_HPDeltaLayer) || RETURN",
              "displayLines": "BattleEventHeal_HPDeltaLayer",
              "constants": [],
              "variables": [
                "BattleEventHeal_HPDeltaLayer"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "ifTargetFound": [
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1214340360\">Monster_W4_DawnsEye_LockHP</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"27951832\">Modifier_Monster_W4_DawnsEye_01_HOT</a>[<span class=\"descriptionNumberColor\">Eagerness</span>]",
          "duration": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P2_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF",
                "BaseAttack"
              ]
            },
            "MDF_DamageAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P7_ADF) || RETURN",
              "displayLines": "#BattleEvent_P7_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P7_ADF"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healFlat": {
                "operator": "Variables[0] (#BattleEvent_P6_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
                "displayLines": "(#BattleEvent_P6_ADF * BaseAttack)",
                "constants": [],
                "variables": [
                  "#BattleEvent_P6_ADF",
                  "BaseAttack"
                ]
              },
              "formula": "Heal from Base Value"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1028939151\">Enemy_W4_DawnsEye_StateGroupChange</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_Insert_Part01": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_Insert_Part01",
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
          "ability": "MissionBattleEvent60024_Ability03_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_Camera": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_Part02": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 5
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
                "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1238713838\">MissionBattleEvent60024_MainStory1</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1238713838\">MissionBattleEvent60024_MainStory1</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1221936219\">MissionBattleEvent60024_MainStory2</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1221936219\">MissionBattleEvent60024_MainStory2</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1205158600\">MissionBattleEvent60024_MainStory3</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1205158600\">MissionBattleEvent60024_MainStory3</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1322601933\">MissionBattleEvent60024_MainStory4</a>",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1322601933\">MissionBattleEvent60024_MainStory4</a>"
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
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1369323293\">MissionBattleEvent60024_BGMChange</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"560024402\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo</a>",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEventHeal_HPDeltaLayer",
          "value": 1,
          "max": 100
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] (BattleEventHeal_HPDeltaLayer) || RETURN",
              "displayLines": "BattleEventHeal_HPDeltaLayer",
              "constants": [],
              "variables": [
                "BattleEventHeal_HPDeltaLayer"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P1_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF",
                "BaseAttack"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "ifTargetFound": [
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1214340360\">Monster_W4_DawnsEye_LockHP</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"27951832\">Modifier_Monster_W4_DawnsEye_01_HOT</a>[<span class=\"descriptionNumberColor\">Eagerness</span>]",
          "duration": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "MDF_HPDelta": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P2_ADF * BaseAttack)",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF",
                "BaseAttack"
              ]
            },
            "MDF_DamageAddRatio": {
              "operator": "Variables[0] (#BattleEvent_P7_ADF) || RETURN",
              "displayLines": "#BattleEvent_P7_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P7_ADF"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healFlat": {
                "operator": "Variables[0] (#BattleEvent_P6_ADF) || Variables[1] (BaseAttack) || MUL || RETURN",
                "displayLines": "(#BattleEvent_P6_ADF * BaseAttack)",
                "constants": [],
                "variables": [
                  "#BattleEvent_P6_ADF",
                  "BaseAttack"
                ]
              },
              "formula": "Heal from Base Value"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1369323293\">MissionBattleEvent60024_BGMChange</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_Part01": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_Part01",
      "childAbilityList": [
        "60029_MissionBattleEvent60024_Ability03_EnterReady",
        "60029_MissionBattleEvent60024_Ability03_Part01",
        "60029_MissionBattleEvent60024_Ability03_Part02",
        "60029_MissionBattleEvent60024_Ability03_Camera",
        "60029_MissionBattleEvent60024_Ability03_Insert_Part01",
        "60029_MissionBattleEvent60024_Ability03_Insert_Part02",
        "60029_MissionBattleEvent60024_Ability03_Insert_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60024_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "60029_MissionBattleEvent60024_Ability03_EnterReady": {
      "fileName": "60029_MissionBattleEvent60024_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60029_Modifiers": {
      "fileName": "60029_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1322601933\">MissionBattleEvent60024_MainStory4</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1205158600\">MissionBattleEvent60024_MainStory3</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1221936219\">MissionBattleEvent60024_MainStory2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1238713838\">MissionBattleEvent60024_MainStory1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "WeatherBEFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WeatherBEFlag"
                    }
                  ]
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "WeatherBEFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "WeatherBEFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
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
                        "name": "Character ID",
                        "ID": 1408,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Phainon"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "WeatherBEFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "WeatherBEFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6002901,
      "trigger": "Skill03",
      "name": "Healing Rainbow",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Removes the \"Tide-Corrosion\" state from all ally targets. Adds \"Flame-Chase\" and \"Eagerness\" to all ally targets and restores HP.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          4,
          1,
          2,
          0,
          0,
          1,
          0.5,
          10
        ]
      },
      "element": "Wind",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60024_Skill03_EnterReady",
        "Avatar_MissionBattleEvent60024_Skill03_Phase01",
        "Avatar_MissionBattleEvent60024_Skill03_Phase02",
        "Avatar_MissionBattleEvent60024_Skill03_Camera",
        "Avatar_MissionBattleEvent60024_Skill03_Insert_Phase01",
        "Avatar_MissionBattleEvent60024_Skill03_Insert_Phase02",
        "Avatar_MissionBattleEvent60024_Skill03_Insert_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6002902,
      "trigger": "SkillP01",
      "name": null,
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60024_PassiveSkill01"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}