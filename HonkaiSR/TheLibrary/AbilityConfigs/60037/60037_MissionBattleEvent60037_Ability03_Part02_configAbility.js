const configAbility = {
  "fileName": "60037_MissionBattleEvent60037_Ability03_Part02",
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
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
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
      "modifier": "<a class=\"gModGreen\" id=\"245518476\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd_PeakBattle</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
      "valuePerStack": {
        "MDF_HPDeltaPerLayer": {
          "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (BaseAttack) || MUL || Constants[0] (1) || Variables[2] (ENEMIES_OBJECT_UNUSED__255) || ADD || MUL || RETURN",
          "displayLines": "((#BattleEvent_P1_ADF * BaseAttack) * (1 + ENEMIES_OBJECT_UNUSED__255))",
          "constants": [
            1
          ],
          "variables": [
            "#BattleEvent_P1_ADF",
            "BaseAttack",
            "ENEMIES_OBJECT_UNUSED__255"
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
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1743437362\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo_PeakBattle</a>",
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
        "MDF_HPDelta_ExtraRadio": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__255) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__255",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__255"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"922752745\">MissionBattleEvent60037_BE_Trigger</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__922752745\">MissionBattleEvent60037_BE_Trigger</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1369323293\">MissionBattleEvent60024_BGMChange</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}