const compositeAbilityObject = {
  "fullCharacterName": 1004032,
  "trimCharacterName": 1004032,
  "abilityList": [
    "1004032_Monster_W1_Bronya_IF_02_AbilityP04",
    "1004032_Monster_W1_Bronya_IF_02_AbilityP03",
    "1004032_Monster_W1_Bronya_IF_02_AbilityP02",
    "1004032_Monster_W1_Bronya_IF_02_AbilityP01",
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbilityInitiate",
    "1004032_Monster_W1_Bronya_IF_02_Ability05_Part02",
    "1004032_Monster_W1_Bronya_IF_02_Ability05_Part01",
    "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert_Part02",
    "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert",
    "1004032_Monster_W1_Bronya_IF_02_Ability03_Part02",
    "1004032_Monster_W1_Bronya_IF_02_Ability03_Part01",
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch",
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Switch",
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Insert",
    "1004032_Monster_W1_Bronya_PassiveAbility_Formation2",
    "1004032_Monster_W1_Bronya_PassiveAbility_NoLockStance",
    "1004032_Monster_W1_Bronya_PassiveAbility_M1LockHP",
    "1004032_Monster_W1_Bronya_PassiveAbilityInsert",
    "1004032_Monster_W1_Bronya_PassiveAbilityInitiate",
    "1004032_Monster_W1_Bronya_Ability04_Part02",
    "1004032_Monster_W1_Bronya_Ability04_Part01",
    "1004032_Monster_W1_Bronya_Ability03_Part02",
    "1004032_Monster_W1_Bronya_Ability03_Part01",
    "1004032_Monster_W1_Bronya_Ability02_Part02",
    "1004032_Monster_W1_Bronya_Ability02_Part01",
    "1004032_Monster_W1_Bronya_Ability01_Part02",
    "1004032_Monster_W1_Bronya_Ability01_Part01",
    "1004032_Modifiers"
  ],
  "abilityObject": {
    "1004032_Monster_W1_Bronya_IF_02_AbilityP04": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_AbilityP04",
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_AbilityP03": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_AbilityP03",
      "skillTrigger": "SkillP03",
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
          "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>"
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_AbilityP02": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_AbilityP02",
      "skillTrigger": "SkillP02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bronya_LimboFlag"
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_AbilityP01": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbilityInitiate": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"236879313\">Bronya_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"186546456\">Bronya_BattleScore1</a>"
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
          "variableName": "AIFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "PhaseFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-302906078\">Enemy_W1_Bronya_IF_02_ListenSelfBreak</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]",
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
              "displayLines": "{[SkillP03[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1849445154\">Enemy_W1_Bronya_IF_02_EnhancePerTurnInit</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-715823219\">Enemy_W1_Bronya_IF_02_Part2EnhanceInti</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1849445154\">Enemy_W1_Bronya_IF_02_EnhancePerTurnInit</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                      "displayLines": "{[SkillP04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[0]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                      "displayLines": "{[SkillP04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[1]]}"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "PhaseFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-302906078\">Enemy_W1_Bronya_IF_02_ListenSelfBreak</a>",
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
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Gepard_LimboFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 12
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 0
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
                          "value": 2
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "PhaseFlag"
          ]
        }
      ]
    },
    "1004032_Monster_W1_Bronya_IF_02_Ability05_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2036544920\">Standard_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_Ability05_Part01": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_Ability05_Part01",
      "childAbilityList": [
        "1004032_Monster_W1_Bronya_IF_02_Ability05_Part01",
        "1004032_Monster_W1_Bronya_IF_02_Ability05_Part02",
        "1004032_Monster_W1_Bronya_IF_02_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
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
          "ability": "Monster_W1_Bronya_IF_02_Ability05_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
          "valuePerStack": {
            "MDF_SpeedUpPerLayer": {
              "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
              "displayLines": "{[SkillP04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[0]]}"
              ]
            },
            "MDF_AttackUpPerLayer": {
              "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
              "displayLines": "{[SkillP04[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[1]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1332478484\">Monster_W1_Bronya_IF_02_Toast</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Gepard_LimboFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>[<span class=\"descriptionNumberColor\">Shared Hatred</span>]",
              "valuePerStack": {
                "MDF_SpeedUp": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 12
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 2
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill04[1]]}"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1332478484\">Monster_W1_Bronya_IF_02_Toast</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>[<span class=\"descriptionNumberColor\">Shared Hatred</span>]",
                    "invertCondition": true
                  }
                },
                "Modifier Deletes Itself"
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
          "latentQueue": []
        }
      ]
    },
    "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert",
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
          "ability": "Monster_W1_Bronya_IF_02_Ability04_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_Ability03_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "Last"
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
                "value1": "AIFlag",
                "compareType": ">=",
                "value2": 10
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 4
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "Last"
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
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_Ability03_Part01": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_Ability03_Part01",
      "childAbilityList": [
        "1004032_Monster_W1_Bronya_IF_02_Ability03_Part01",
        "1004032_Monster_W1_Bronya_IF_02_Ability03_Part02",
        "1004032_Monster_W1_Bronya_IF_02_Ability03_Camera"
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
          "ability": "Monster_W1_Bronya_IF_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
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
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "PhaseFlag",
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
              "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
              "valuePerStack": {
                "MDF_SpeedUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "MDF_AttackUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
              "valuePerStack": {
                "MDF_SpeedUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "MDF_AttackUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                  "displayLines": "{[SkillP04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>[<span class=\"descriptionNumberColor\">Shared Hatred</span>]",
          "valuePerStack": {
            "MDF_SpeedUp": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": 12
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
          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Action Advanced",
          "living": true
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": 1004025,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Gepard (Illusion)"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]",
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
                  "displayLines": "{[SkillP03[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP03[4]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Switch": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Switch",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "isMainAttack",
          "value": -1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1559306113\">Enemy_W1_Gepard_IF_03_WeaknessProtect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "PhaseFlag",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "AIFlag",
                  "value": -1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "AIFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PhaseFlag",
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
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "DisableAction"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "PhaseFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
              "valuePerStack": {
                "MDF_SpeedUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "MDF_AttackUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
              "valuePerStack": {
                "MDF_SpeedUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "MDF_AttackUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                  "displayLines": "{[SkillP04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": 2
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0.5
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": 1004025,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Gepard (Illusion)"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]",
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
                  "displayLines": "{[SkillP03[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP03[4]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Insert": {
      "fileName": "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Gepard_LimboFlag",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Bronya_LimboFlag",
              "value": 0
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "isMainAttack",
              "value": -1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1241486816\">Enemy_W1_Gepard_IF_03_ListenBeingAttacked</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]",
              "removeAllInstances": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": -1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 2
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PhaseFlag",
              "value": 2
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "PhaseFlag",
              "value": 2
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "removeToBeAdded": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>",
              "removeToBeAdded": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
              "removeToBeAdded": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>[<span class=\"descriptionNumberColor\">Reinforced</span>]"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]",
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
                  "displayLines": "{[SkillP03[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP03[4]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1559306113\">Enemy_W1_Gepard_IF_03_WeaknessProtect</a>"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0.5
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
              "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Battle Event ID",
                "ID": 20006,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"514811508\">Enemy_W1_Gepard_IF_03_Part2EnhanceInti</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
              "valuePerStack": {
                "MDF_SpeedUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "MDF_AttackUpPerLayer": {
                  "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                  "displayLines": "{[SkillP04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[3]]}"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1430608043\">Enemy_W1_Gepard_IF_03_Enhance</a>[<span class=\"descriptionNumberColor\">Thick and Thin</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>[<span class=\"descriptionNumberColor\">Shared Hatred</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
            }
          ]
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_PassiveAbility_Formation2": {
      "fileName": "1004032_Monster_W1_Bronya_PassiveAbility_Formation2",
      "abilityType": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-247015465\">Enemy_W1_Bronya_PassiveAbility_Formation2</a>"
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_PassiveAbility_NoLockStance": {
      "fileName": "1004032_Monster_W1_Bronya_PassiveAbility_NoLockStance",
      "abilityType": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"746448896\">Enemy_W1_Bronya_PassiveAbility_NoLockStance</a>"
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_PassiveAbility_M1LockHP": {
      "fileName": "1004032_Monster_W1_Bronya_PassiveAbility_M1LockHP",
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
          "modifier": "<a class=\"gModGreen\" id=\"-589353924\">Enemy_W1_Bronya_M1LockHP</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bronya_M1LockHP_Trigger"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1556370949\">Enemy_W1_Bronya_Instance_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-589353924\">Enemy_W1_Bronya_M1LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
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
                    "value1": "Bronya_M1LockHP_Trigger",
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
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1556370949\">Enemy_W1_Bronya_Instance_DisableAction</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Bronya_M1LockHP_Trigger",
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
      ]
    },
    "1004032_Monster_W1_Bronya_PassiveAbilityInsert": {
      "fileName": "1004032_Monster_W1_Bronya_PassiveAbilityInsert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1202181629\">Enemy_W1_Bronya_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Bronya_00_InsertFlag"
        }
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_PassiveAbilityInitiate": {
      "fileName": "1004032_Monster_W1_Bronya_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"236879313\">Bronya_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"186546456\">Bronya_BattleScore1</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bronya_SummonCounter"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bronya_SummonMode"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"746448896\">Enemy_W1_Bronya_PassiveAbility_NoLockStance</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"43109596\">Enemy_W1_Bronya_WeakPointProtectController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2074412751\">Enemy_W1_Bronya_ListenSelfBreak</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2074412751\">Enemy_W1_Bronya_ListenSelfBreak</a>",
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
                  "advanceType": "Delay",
                  "multiAdd": 0.5
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bronya_SummonMode"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bronya_AICounter_Act2",
                  "value": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Bronya_SummonCounter",
            "Bronya_SummonMode"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1202181629\">Enemy_W1_Bronya_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bronya_AICounter_Act2",
                  "value": 1
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
                }
              ]
            }
          ],
          "description": "Bronya's Toughness cannot be reduced while there are enemies on the field.",
          "type": "Buff",
          "effectName": "Weakness Protected",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__43109596\">Enemy_W1_Bronya_WeakPointProtectController</a>",
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
                  "variableName": "W1_Bronya_00_InsertFlag"
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
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1202181629\">Enemy_W1_Bronya_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-968447814\">TaskList_W1_Bronya_WeakPointProtectController_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-968447814\">TaskList_W1_Bronya_WeakPointProtectController_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
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
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1202181629\">Enemy_W1_Bronya_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-968447814\">TaskList_W1_Bronya_WeakPointProtectController_OnDieOrEscape</a>",
              "parse": [
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
                        "value1": "W1_Bronya_00_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1202181629\">Enemy_W1_Bronya_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Bronya_00_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Bronya_PassiveAbilityInsert",
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Bronya_SummonCounter",
            "Bronya_SummonMode"
          ]
        }
      ]
    },
    "1004032_Monster_W1_Bronya_Ability04_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill04[1]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_Ability04_Part01": {
      "fileName": "1004032_Monster_W1_Bronya_Ability04_Part01",
      "childAbilityList": [
        "1004032_Monster_W1_Bronya_Ability04_Part01",
        "1004032_Monster_W1_Bronya_Ability04_Part02",
        "1004032_Monster_W1_Bronya_Ability04_Camera",
        "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert",
        "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert_Part02",
        "1004032_Monster_W1_Bronya_IF_02_Ability04_Insert_Camera",
        "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Insert"
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
          "ability": "Monster_W1_Bronya_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_Ability03_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_Ability03_Part02",
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
            "value1": "Bronya_SummonMode",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Constants[0] (1002040) || RETURN",
                    "displayLines": "1002040",
                    "constants": [
                      1002040
                    ],
                    "variables": []
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Constants[0] (1002050) || RETURN",
                    "displayLines": "1002050",
                    "constants": [
                      1002050
                    ],
                    "variables": []
                  },
                  "locationType": "Last"
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Bronya_SummonMode",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Bronya_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (1002040) || RETURN",
                        "displayLines": "1002040",
                        "constants": [
                          1002040
                        ],
                        "variables": []
                      },
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bronya_SummonCounter",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (1002050) || RETURN",
                        "displayLines": "1002050",
                        "constants": [
                          1002050
                        ],
                        "variables": []
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bronya_SummonCounter"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_Ability03_Part01": {
      "fileName": "1004032_Monster_W1_Bronya_Ability03_Part01",
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
          "ability": "Monster_W1_Bronya_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_Ability02_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "set": 0
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-209859933\">Enemy_W1_Bronya_Ability02_PowerUp</a>",
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
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "1004032_Monster_W1_Bronya_Ability02_Part01": {
      "fileName": "1004032_Monster_W1_Bronya_Ability02_Part01",
      "childAbilityList": [
        "1004032_Monster_W1_Bronya_Ability02_Part01",
        "1004032_Monster_W1_Bronya_Ability02_Part02",
        "1004032_Monster_W1_Bronya_Ability02_Camera"
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
          "ability": "Monster_W1_Bronya_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_Ability01_Part02": {
      "fileName": "1004032_Monster_W1_Bronya_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004032_Monster_W1_Bronya_Ability01_Part01": {
      "fileName": "1004032_Monster_W1_Bronya_Ability01_Part01",
      "childAbilityList": [
        "1004032_Monster_W1_Bronya_Ability01_Part01",
        "1004032_Monster_W1_Bronya_Ability01_Part02",
        "1004032_Monster_W1_Bronya_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
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
          "ability": "Monster_W1_Bronya_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "1004032_Modifiers": {
      "fileName": "1004032_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
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
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "Bronya_LimboFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Level Entity}}"
                            },
                            "value1": "Gepard_LimboFlag",
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
                                  "name": "Set Enemy Phase",
                                  "mode": "Inc"
                                },
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Dispel Debuffs",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "silent": true
                                },
                                {
                                  "name": "Set Enemy Phase",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "mode": "Inc"
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
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{All Team Members(Exclude Self)}}"
                                  },
                                  "searchRandom": true,
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": {
                                      "operator": "Variables[0] (SummonID01) || RETURN",
                                      "displayLines": "SummonID01",
                                      "constants": [],
                                      "variables": [
                                        "SummonID01"
                                      ]
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": null
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Force Entity Death",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_Insert",
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
                                "value1": "InsertCheck",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Set HP Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "setValue": 1
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
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "Lock HP",
                                  "threshold": 0.0009999999,
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "conditionActive": {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_EnhanceSwitch",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Hostile Entities(AOE)}}"
                                  },
                                  "priorityTag": "MonsterChangeState",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
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
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Bronya_LimboFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_EnhanceSwitch",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "MonsterChangeState",
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
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-715823219\">Enemy_W1_Bronya_IF_02_Part2EnhanceInti</a>",
          "stackType": "Refresh",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpPerLayer": {
                          "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                          "displayLines": "{[SkillP04[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[2]]}"
                          ]
                        },
                        "MDF_AttackUpPerLayer": {
                          "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                          "displayLines": "{[SkillP04[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[3]]}"
                          ]
                        }
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
            "AIFlag",
            "PhaseFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_SpeedDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedDownRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedDownRatio"
          ],
          "latentQueue": [
            "Gepard_LimboFlag",
            "Bronya_LimboFlag",
            "isMainAttack",
            "AIFlag",
            "PhaseFlag"
          ],
          "description": "Decreases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedDownRatio</span> when the character is in Support mode.",
          "type": "Other",
          "statusName": "Defense"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
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
                    "AllType"
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
          "for": "<a class=\"gModGreen\" id=\"mod__946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]"
            },
            {
              "eventTrigger": "Action End [Owner]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Gepard_LimboFlag",
            "Bronya_LimboFlag",
            "isMainAttack",
            "AIFlag",
            "PhaseFlag"
          ],
          "description": "The character is currently in the Main attack state.",
          "type": "Other",
          "effectName": "Main Attack",
          "statusName": "Charge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PhaseFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpPerLayer": {
                          "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                          "displayLines": "{[SkillP04[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[0]]}"
                          ]
                        },
                        "MDF_AttackUpPerLayer": {
                          "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                          "displayLines": "{[SkillP04[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[1]]}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpPerLayer": {
                          "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                          "displayLines": "{[SkillP04[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[2]]}"
                          ]
                        },
                        "MDF_AttackUpPerLayer": {
                          "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                          "displayLines": "{[SkillP04[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[3]]}"
                          ]
                        }
                      }
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_SpeedUpPerLayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpPerLayer",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUpPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_AttackUpPerLayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUpPerLayer",
                      "MDF_Layer"
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
          "stackData": [
            "MDF_SpeedUpPerLayer",
            "MDF_AttackUpPerLayer"
          ],
          "latentQueue": [
            "PhaseFlag",
            "AIFlag"
          ],
          "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpPerLayer</span> and ATK by <span class=\"descriptionNumberColor\">MDF_AttackUpPerLayer</span>. All stacks are lost when Weakness is broken.",
          "type": "Buff",
          "effectName": "Enhance",
          "statusName": "Carried By Inertia",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>[<span class=\"descriptionNumberColor\">Shared Hatred</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                    "displayLines": "MDF_SpeedUp",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUp"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUp"
          ],
          "latentQueue": [
            "PhaseFlag"
          ],
          "description": "Greatly enhances this unit, increasing SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUp</span>. When in this state, Bronya can summon even more Silvermane Cannoneers.",
          "type": "Buff",
          "effectName": "Enhance",
          "statusName": "Shared Hatred"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__236879313\">Bronya_BattleScore2</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Gepard_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1101,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Bronya"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": []
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
          "for": "<a class=\"gModGreen\" id=\"mod__186546456\">Bronya_BattleScore1</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bronya_BattleScore1_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W1_Soldier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Bronya_BattleScore1_Flag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Bronya_BattleScore1_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "\"Thank You for Your Service\"",
                          "desc": "Defeat Bronya without defeating the Silvermane Guards",
                          "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1747978880\">Enemy_W1_Bronya_Ability02</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1115057368\">TEST_DarkTeamBackRow</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                        "value1": "Team_Row_Count",
                        "compareType": ">=",
                        "value2": 1,
                        "activeRow": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-247015465\">Enemy_W1_Bronya_PassiveAbility_Formation2</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                  },
                  "passed": [
                    {
                      "name": "Assign Target Battle-Location",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "row": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__746448896\">Enemy_W1_Bronya_PassiveAbility_NoLockStance</a>",
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}