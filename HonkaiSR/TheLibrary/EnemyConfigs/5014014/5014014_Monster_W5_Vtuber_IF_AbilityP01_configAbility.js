const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_IF_AbilityP01",
  "childAbilityList": [
    "5014014_Monster_W5_Vtuber_IF_AbilityP01"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20039,
        20040
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "dmgCountsForTeam": "Enemy Team",
      "eventID": 20040,
      "variables": null,
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "SelectTarget",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1568913221\">Enemy_W5_Vtuber_PickUpMessage</a>"
        },
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"272622941\">Enemy_W5_Vtuber_AudioReset</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "W5_Vtuber_00",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1656334834\">Monster_W5_Vtuber_Eff</a>"
    },
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
            "displayLines": "SummonList_ADF_1",
            "constants": [],
            "variables": [
              "SummonList_ADF_1"
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
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
            "displayLines": "SummonList_ADF_2",
            "constants": [],
            "variables": [
              "SummonList_ADF_2"
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
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1418851340\">Enemy_W5_VtuberPart_IF_MinionsSuperArmorController</a>",
      "valuePerStack": {
        "MDF_MinionsSuperArmor_AllDamageReduce": {
          "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
          "displayLines": "{[SkillEX01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[0]]}"
          ]
        },
        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
          "displayLines": "{[SkillEX01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[1]]}"
          ]
        },
        "MDF_SetActionDelayValue": {
          "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
          "displayLines": "{[SkillEX01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[2]]}"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2037166286\">Monster_W5_Vtuber_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1693390580\">Enemy_W5_Vtuber_Ability03</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"805868464\">Enemy_W5_Vtuber_IF_Controller</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1760767308\">Enemy_W5_Vtuber_IF_HintToastController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"582965783\">Enemy_W5_Vtuber_IF_WeaknessController</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "ADF_LoseHPRatio_ScreenBonus",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[6]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[6]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[6]]}"
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
        "modifier": "<a class=\"gModGreen\" id=\"186164347\">Enemy_W5_Vtuber_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
              "displayLines": "{[SkillEX05[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[0]]}"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
              "displayLines": "{[SkillEX05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[1]]}"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
              "displayLines": "{[SkillEX05[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[2]]}"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
              "displayLines": "{[SkillEX05[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[3]]}"
              ]
            }
          }
        }
      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__2041132439\">Monster_W5_Vtuber_Death</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2037166286\">Monster_W5_Vtuber_PartController</a>",
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
                "value1": "ChangePhaseCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1656334834\">Monster_W5_Vtuber_Eff</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"361111729\">Enemy_W5_VtuberPart01_Eff</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"41880618\">Enemy_W5_VtuberPart02_Eff</a>"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 5014012,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "@SparxiConOfficial",
                        "isBaseCompare": true,
                        "invertCondition": true
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 5014012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "@SparxiConOfficial",
                            "isBaseCompare": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhaseCheck"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}} + {{Minions of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1797863602\">Monster_W5_Vtuber_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Tilted</span>]"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Vtuber_IF_ChangePhase01",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
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
                    "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1733040515\">Enemy_W5_VtuberPart01_00</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1182558090\">Enemy_W5_VtuberPart02_00</a>"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2041132439\">Monster_W5_Vtuber_Death</a>"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Minions of Modifier Holder}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__272622941\">Enemy_W5_Vtuber_AudioReset</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1568913221\">Enemy_W5_Vtuber_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}