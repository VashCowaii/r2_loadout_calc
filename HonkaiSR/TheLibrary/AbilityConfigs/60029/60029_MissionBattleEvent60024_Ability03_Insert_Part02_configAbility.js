const configAbility = {
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
}