const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2035011,
  "trimCharacterName": 2035011,
  "abilityList": [
    "2035011_Monster_W2_Feixiao_PassiveAbility_Insert2",
    "2035011_Monster_W2_Feixiao_PassiveAbility_Insert",
    "2035011_BattleEventAbility_W2_Feixiao_00",
    "2035011_Monster_W2_Feixiao_Ability12_Part02",
    "2035011_Monster_W2_Feixiao_Ability12_Part01",
    "2035011_Monster_W2_Feixiao_Ability11_Part02",
    "2035011_Monster_W2_Feixiao_Ability11_Part01",
    "2035011_Monster_W2_Feixiao_Ability10_Part02",
    "2035011_Monster_W2_Feixiao_Ability10_Part01",
    "2035011_Monster_W2_Feixiao_Ability09_Part02",
    "2035011_Monster_W2_Feixiao_Ability09_Part01",
    "2035011_Monster_W2_Feixiao_Ability08_Part02",
    "2035011_Monster_W2_Feixiao_Ability08_Part01",
    "2035011_Monster_W2_Feixiao_Ability07_Part02",
    "2035011_Monster_W2_Feixiao_Ability07_Part01",
    "2035011_Monster_W2_Feixiao_Ability06_Part02",
    "2035011_Monster_W2_Feixiao_Ability06_Part01",
    "2035011_Monster_W2_Feixiao_Ability05_Part02",
    "2035011_Monster_W2_Feixiao_Ability05_Part01",
    "2035011_Monster_W2_Feixiao_Ability04_Part02",
    "2035011_Monster_W2_Feixiao_Ability04_Part01",
    "2035011_Monster_W2_Feixiao_Ability03_Part02",
    "2035011_Monster_W2_Feixiao_Ability03_Part01",
    "2035011_Monster_W2_Feixiao_Ability02_Part02",
    "2035011_Monster_W2_Feixiao_Ability02_Part01",
    "2035011_Monster_W2_Feixiao_AbilityP01_Part02",
    "2035011_Monster_W2_Feixiao_AbilityP01_Part01",
    "2035011_Monster_W2_Feixiao_Ability01_Part02",
    "2035011_Monster_W2_Feixiao_Ability01_Part01",
    "2035011_Monster_W2_Feixiao_Passive01",
    "2035011_Modifiers",
    "2035011_BE_BattleEvents"
  ],
  "abilityObject": {
    "2035011_Monster_W2_Feixiao_PassiveAbility_Insert2": {
      "fileName": "2035011_Monster_W2_Feixiao_PassiveAbility_Insert2",
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
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "silent": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            }
          ]
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1236954137\">Monster_W2_FeixiaoPart_Unselectable</a>"
              }
            ]
          },
          "ifTargetFound": [
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
              "passed": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "ChangePhase_MaxHPValue"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "ChangePhase_MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "setPercent": 1
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkFinish",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-914591810\">Monster_W2_Feixiao_Main2</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1193715835\">Monster_W2_FeixiaoPart_Part3ResidentEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1095211474\">Monster_W2_FeixiaoPart_Part2ResidentEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
          },
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"130339168\">Monster_W2_Feixiao_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_PassiveAbility_Insert": {
      "fileName": "2035011_Monster_W2_Feixiao_PassiveAbility_Insert",
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
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": false
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
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
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 2033020,
              "locationType": "BeforeCaster"
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
          },
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": 203204,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "multiAdd": "({[PassiveSkill02[3]]} - 1)",
              "isStartingDelay": true
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": 203205,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "multiAdd": "({[PassiveSkill02[4]]} - 1)",
              "isStartingDelay": true
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": 203206,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "multiAdd": "({[PassiveSkill02[5]]} - 1)",
              "isStartingDelay": true
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_BattleEventAbility_W2_Feixiao_00": {
      "fileName": "2035011_BattleEventAbility_W2_Feixiao_00",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1414974048\">Modifier_W2_Feixiao_BattleEvent</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1175406165\">Modifier_W2_Feixiao_BattleEvent_BaseSpeed</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Feixiao: Self}}"
            },
            "value1": "BattleEventPartFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Head}}"
              },
              "isStartingAV": true
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Feixiao: Self}}"
                },
                "value1": "BattleEventPartFlag",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Feixiao Parts: Claws}}"
                  },
                  "isStartingAV": true
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Feixiao: Self}}"
                    },
                    "value1": "BattleEventPartFlag",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Advance/Delay up to Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "targetRef": {
                        "name": "Target Name",
                        "target": "{{Feixiao Parts: Tail}}"
                      },
                      "isStartingAV": true
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
              "target": "{{Enemy Feixiao: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": {
                "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_ActionDelay) || RETURN",
                "displayLines": "MDF_W2_Feixiao_BattleEvent_ActionDelay",
                "constants": [],
                "variables": [
                  "MDF_W2_Feixiao_BattleEvent_ActionDelay"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Feixiao: Self}}"
                },
                "value1": "BattleEventPartFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": {
                    "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_ActionDelay) || RETURN",
                    "displayLines": "MDF_W2_Feixiao_BattleEvent_ActionDelay",
                    "constants": [],
                    "variables": [
                      "MDF_W2_Feixiao_BattleEvent_ActionDelay"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "variableName": "BattleEventPartFlag",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                {
                  "name": "Adjust Relative to Action Bar, Adjacent Targets",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "lessThanMax": 0
                }
              ]
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
              "valuePerStack": {
                "MDF_StanceBreakTakenRatio": {
                  "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio) || RETURN",
                  "displayLines": "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  {
                    "name": "Adjust Relative to Action Bar, Adjacent Targets",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                          "invertCondition": true
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "STAT_CTRL",
                          "invertCondition": true
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                          "invertCondition": true
                        }
                      ]
                    },
                    "lessThanMax": 0
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
              "valuePerStack": {
                "MDF_StanceBreakTakenRatio": {
                  "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio) || RETURN",
                  "displayLines": "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    {
                      "name": "Adjust Relative to Action Bar, Adjacent Targets",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "lessThanMax": 0
                    }
                  ]
                },
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                  "valuePerStack": {
                    "MDF_StanceBreakTakenRatio": {
                      "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio) || RETURN",
                      "displayLines": "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      {
                        "name": "Adjust Relative to Action Bar, Adjacent Targets",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                              "invertCondition": true
                            }
                          ]
                        },
                        "lessThanMax": 0
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      {
                        "name": "Adjust Relative to Action Bar, Adjacent Targets",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                              "invertCondition": true
                            }
                          ]
                        },
                        "lessThanMax": 0
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                  "valuePerStack": {
                    "MDF_StanceBreakTakenRatio": {
                      "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio) || RETURN",
                      "displayLines": "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      {
                        "name": "Adjust Relative to Action Bar, Adjacent Targets",
                        "conditions": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "team": "Enemy Team"
                        },
                        "greaterThanMax": 0
                      }
                    ]
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                    }
                  ]
                }
              ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1175406165\">Modifier_W2_Feixiao_BattleEvent_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_BaseSpeed) || RETURN",
                    "displayLines": "MDF_W2_Feixiao_BattleEvent_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_W2_Feixiao_BattleEvent_BaseSpeed"
                    ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1414974048\">Modifier_W2_Feixiao_BattleEvent</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro to Battle Event's Caster}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              {
                                "name": "Adjust Relative to Action Bar, Adjacent Targets",
                                "conditions": {
                                  "name": "Is Part Of Team",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "team": "Enemy Team"
                                },
                                "lessThanMax": 0
                              }
                            ]
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": 203204,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W2_Feixiao_Ability04_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Battle Event's Caster}}"
                                  },
                                  "priorityTag": "EnemyAttackFromSelf",
                                  "canHitNonTargets": true,
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": 203205,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": null,
                                    "isCompareUniqueID": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W2_Feixiao_Ability05_Part01",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Battle Event's Caster}}"
                                      },
                                      "priorityTag": "EnemyAttackFromSelf",
                                      "canHitNonTargets": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Enemy ID",
                                        "ID": 203206,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "characterName": null,
                                        "isCompareUniqueID": true
                                      },
                                      "passed": [
                                        {
                                          "name": "Inject Ability Use",
                                          "abilityName": "Monster_W2_Feixiao_Ability06_Part01",
                                          "abilitySource": {
                                            "name": "Target Name",
                                            "target": "{{Battle Event's Caster}}"
                                          },
                                          "priorityTag": "EnemyAttackFromSelf",
                                          "canHitNonTargets": true,
                                          "allowAbilityTriggers": false
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
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Feixiao_AbilityP01_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Battle Event's Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "EnemyAttackFromSelf",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "greaterThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                {
                                  "name": "Adjust Relative to Action Bar, Adjacent Targets",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                  },
                                  "lessThanMax": 0
                                }
                              ]
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "greaterThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                {
                                  "name": "Adjust Relative to Action Bar, Adjacent Targets",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                  },
                                  "lessThanMax": 0
                                }
                              ]
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "greaterThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                {
                                  "name": "Adjust Relative to Action Bar, Adjacent Targets",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                  },
                                  "lessThanMax": 0
                                }
                              ]
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "greaterThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                {
                                  "name": "Adjust Relative to Action Bar, Adjacent Targets",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                  },
                                  "lessThanMax": 0
                                }
                              ]
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 0,
                            "conditions": {
                              "name": "Is Entity a Battle Event/Summon",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "invertCondition": true
                            }
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                                }
                              ]
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
          "latentQueue": []
        }
      ]
    },
    "2035011_Monster_W2_Feixiao_Ability12_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability12_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability12_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability12_Camera",
        "2035011_Monster_W2_Feixiao_Ability12_Part01",
        "2035011_Monster_W2_Feixiao_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
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
          "ability": "Monster_W2_Feixiao_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability11_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability11_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability11_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability11_Camera",
        "2035011_Monster_W2_Feixiao_Ability11_Part01",
        "2035011_Monster_W2_Feixiao_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "Monster_W2_Feixiao_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability10_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 2033020,
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability10_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability10_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability10_Camera",
        "2035011_Monster_W2_Feixiao_Ability10_Part01",
        "2035011_Monster_W2_Feixiao_Ability10_Part02"
      ],
      "skillTrigger": "Skill10",
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
          "ability": "Monster_W2_Feixiao_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability09_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainTrigger",
            "compareType": "=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainTrigger",
            "compareType": "=",
            "value2": 1
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability09_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability09_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability09_Camera",
        "2035011_Monster_W2_Feixiao_Ability09_Part01",
        "2035011_Monster_W2_Feixiao_Ability09_Part02"
      ],
      "skillTrigger": "Skill09",
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
          "ability": "Monster_W2_Feixiao_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability08_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability08_Part02",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkUltraSkill",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkUltraSkill",
              "value": 2
            }
          ]
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
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkUltraSkill",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkUltraSkill",
              "value": 1
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"239356205\">Monster_W2_Feixiao_ChargeEffectControl</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08DamagePercentage",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnhanceHead_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill08DamagePercentage",
              "value": {
                "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[2]]}) || ADD || RETURN",
                "displayLines": "(Skill08DamagePercentage + {[Skill08[2]]})",
                "constants": [],
                "variables": [
                  "Skill08DamagePercentage",
                  "{[Skill08[2]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnhanceTail_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill08DamagePercentage",
              "value": {
                "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[2]]}) || ADD || RETURN",
                "displayLines": "(Skill08DamagePercentage + {[Skill08[2]]})",
                "constants": [],
                "variables": [
                  "Skill08DamagePercentage",
                  "{[Skill08[2]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnhanceLimb_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill08DamagePercentage",
              "value": {
                "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[1]]}) || ADD || Variables[2] ({[Skill08[0]]}) || ADD || RETURN",
                "displayLines": "((Skill08DamagePercentage + {[Skill08[1]]}) + {[Skill08[0]]})",
                "constants": [],
                "variables": [
                  "Skill08DamagePercentage",
                  "{[Skill08[1]]}",
                  "{[Skill08[0]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill08DamagePercentage",
              "value": {
                "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[0]]}) || ADD || RETURN",
                "displayLines": "(Skill08DamagePercentage + {[Skill08[0]]})",
                "constants": [],
                "variables": [
                  "Skill08DamagePercentage",
                  "{[Skill08[0]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[getMemosprite]]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill08DamagePercentage) || RETURN",
              "displayLines": "Skill08DamagePercentage",
              "constants": [],
              "variables": [
                "Skill08DamagePercentage"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnhanceHead_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": {
                "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[4]]}"
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill03[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill03[3]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                    "displayLines": "{[Skill03[5]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[5]]}"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnhanceTail_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                "displayLines": "{[Skill02[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Head}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Claws}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Tail}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnhanceHead_Flag",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnhanceLimb_Flag",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnhanceTail_Flag",
          "value": 0
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
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkUltraSkill",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability08_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability08_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability08_Camera",
        "2035011_Monster_W2_Feixiao_Ability08_Part01",
        "2035011_Monster_W2_Feixiao_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W2_Feixiao_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability07_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability07_Part02",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkCharge",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkCharge",
              "value": 2
            }
          ]
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
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkCharge",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkCharge",
              "value": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1414974048\">Modifier_W2_Feixiao_BattleEvent</a>"
              }
            ]
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Head}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Claws}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Tail}}"
          },
          "phase": "Phase2"
        },
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL"
          },
          "ifTargetFound": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
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
          "ifTargetFound": [
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
              "passed": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
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
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "CurrentDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "set": {
                "operator": "Constants[0] (1000) || Variables[0] (CurrentSpeed) || DIV || Variables[1] ({[Skill07[0]]}) || MUL || Variables[2] (CurrentDelay) || ADD || RETURN",
                "displayLines": "(((1000 / CurrentSpeed) * {[Skill07[0]]}) + CurrentDelay)",
                "constants": [
                  1000
                ],
                "variables": [
                  "CurrentSpeed",
                  "{[Skill07[0]]}",
                  "CurrentDelay"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
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
              "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
              "valuePerStack": {
                "MDF_StanceBreakTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[5]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnhanceHead_Flag",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnhanceLimb_Flag",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnhanceTail_Flag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"284964038\">Monster_W2_Feixiao_Unselectable</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1057448385\">Monster_W2_Feixiao_Charge</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"239356205\">Monster_W2_Feixiao_ChargeEffectControl</a>"
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
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkCharge",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability07_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability07_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability07_Camera",
        "2035011_Monster_W2_Feixiao_Ability07_Part01",
        "2035011_Monster_W2_Feixiao_Ability07_Part02"
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
          "ability": "Monster_W2_Feixiao_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability06_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability06_Part02",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkTail",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkFinish",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "MissionTalkStart",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkTail",
              "value": 2
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MissionTalkStart",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkTail",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkTail",
              "value": 1
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Realm Exterminator"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>",
              "valuePerStack": {
                "MDF_StanceBreakTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[5]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill06DamagePercentage) || RETURN",
              "displayLines": "Skill06DamagePercentage",
              "constants": [],
              "variables": [
                "Skill06DamagePercentage"
              ]
            },
            "HitSplit": 0.5,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill06DamagePercentage) || RETURN",
              "displayLines": "Skill06DamagePercentage",
              "constants": [],
              "variables": [
                "Skill06DamagePercentage"
              ]
            },
            "HitSplit": 0.3,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill06DamagePercentage) || RETURN",
              "displayLines": "Skill06DamagePercentage",
              "constants": [],
              "variables": [
                "Skill06DamagePercentage"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "value": 10,
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
            },
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1271577147\">Monster_W2_Feixiao_TalkSentence_06</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
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
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkTail",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability06_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability06_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability06_Camera",
        "2035011_Monster_W2_Feixiao_Ability06_Part01",
        "2035011_Monster_W2_Feixiao_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W2_Feixiao_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability05_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability05_Part02",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkLimb",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkFinish",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "MissionTalkStart",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkLimb",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MissionTalkStart",
              "value": 1
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Firmament Divider"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>",
              "valuePerStack": {
                "MDF_StanceBreakTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[5]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Feixiao: Skill05 Target}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 3
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Feixiao: Skill05 Target}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Skill05DamagePercentage) || RETURN",
                  "displayLines": "Skill05DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill05DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": 10,
              "isFixed": "* ERR"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
            },
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability05_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability05_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability05_Camera",
        "2035011_Monster_W2_Feixiao_Ability05_Part01",
        "2035011_Monster_W2_Feixiao_Ability05_Part02"
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
          "ability": "Monster_W2_Feixiao_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability04_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability04_Part02",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkHead",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "SpecialTalkFinish",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "MissionTalkStart",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialTalkHead",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MissionTalkStart",
              "value": 1
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Breathing Ether"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>",
              "valuePerStack": {
                "MDF_StanceBreakTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[5]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill04DamagePercentage) || RETURN",
              "displayLines": "Skill04DamagePercentage",
              "constants": [],
              "variables": [
                "Skill04DamagePercentage"
              ]
            },
            "HitSplit": 0.15,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill04DamagePercentage) || RETURN",
              "displayLines": "Skill04DamagePercentage",
              "constants": [],
              "variables": [
                "Skill04DamagePercentage"
              ]
            },
            "HitSplit": 0.15,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill04DamagePercentage) || RETURN",
              "displayLines": "Skill04DamagePercentage",
              "constants": [],
              "variables": [
                "Skill04DamagePercentage"
              ]
            },
            "HitSplit": 0.15,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill04DamagePercentage) || RETURN",
              "displayLines": "Skill04DamagePercentage",
              "constants": [],
              "variables": [
                "Skill04DamagePercentage"
              ]
            },
            "HitSplit": 0.15,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill04DamagePercentage) || RETURN",
              "displayLines": "Skill04DamagePercentage",
              "constants": [],
              "variables": [
                "Skill04DamagePercentage"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "value": 10,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                "displayLines": "{[Skill03[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[5]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
            },
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability04_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability04_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability04_Camera",
        "2035011_Monster_W2_Feixiao_Ability04_Part01",
        "2035011_Monster_W2_Feixiao_Ability04_Part02"
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
          "ability": "Monster_W2_Feixiao_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability03_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 200501,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          }
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
            "ID": 203204,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "HeadDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "HeadDelay",
              "value": {
                "operator": "Variables[0] (HeadDelay) || Constants[0] (9.313226e-10) || SUB || RETURN",
                "displayLines": "(HeadDelay - 9.313226e-10)",
                "constants": [
                  9.313226e-10
                ],
                "variables": [
                  "HeadDelay"
                ]
              }
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
            "ID": 203205,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "LimbDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "LimbDelay",
              "value": {
                "operator": "Variables[0] (LimbDelay) || Constants[0] (9.313226e-10) || SUB || RETURN",
                "displayLines": "(LimbDelay - 9.313226e-10)",
                "constants": [
                  9.313226e-10
                ],
                "variables": [
                  "LimbDelay"
                ]
              }
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
            "ID": 203206,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "TailDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TailDelay",
              "value": {
                "operator": "Variables[0] (TailDelay) || Constants[0] (9.313226e-10) || SUB || RETURN",
                "displayLines": "(TailDelay - 9.313226e-10)",
                "constants": [
                  9.313226e-10
                ],
                "variables": [
                  "TailDelay"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20007,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                  "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                  "displayLines": "{[Skill03[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[3]]}"
                  ]
                },
                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                  "displayLines": "CurrentSpeed",
                  "constants": [],
                  "variables": [
                    "CurrentSpeed"
                  ]
                },
                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[5]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20007,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                  "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                  "displayLines": "{[Skill03[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[4]]}"
                  ]
                },
                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                  "displayLines": "CurrentSpeed",
                  "constants": [],
                  "variables": [
                    "CurrentSpeed"
                  ]
                },
                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[5]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MainTrigger2",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnhanceFlag",
                  "value": 0
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
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MaxStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                      "warningType": "MaxToughness"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
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
                                "flagName": "STAT_CTRL"
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagNames": []
                            }
                          ]
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
                          "passed": [
                            {
                              "name": "Exit Broken-State",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            },
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "constantValue": {
                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                "displayLines": "(MaxStance / 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  "MaxStance"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurrentStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                  "displayLines": "(MaxStance / 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "MaxStance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 2
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20007,
                          "statSource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                              "operator": "Variables[0] (LimbDelay) || RETURN",
                              "displayLines": "LimbDelay",
                              "constants": [],
                              "variables": [
                                "LimbDelay"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                              "operator": "Variables[0] (CurrentSpeed) || RETURN",
                              "displayLines": "CurrentSpeed",
                              "constants": [],
                              "variables": [
                                "CurrentSpeed"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                              "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                              "displayLines": "{[PassiveSkill03[5]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill03[5]]}"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "CurrentStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentStance",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                              "displayLines": "(MaxStance / 2)",
                              "constants": [
                                2
                              ],
                              "variables": [
                                "MaxStance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "constantValue": {
                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                "displayLines": "(MaxStance / 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  "MaxStance"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 2
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20007,
                          "statSource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                              "operator": "Variables[0] (LimbDelay) || RETURN",
                              "displayLines": "LimbDelay",
                              "constants": [],
                              "variables": [
                                "LimbDelay"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                              "operator": "Variables[0] (CurrentSpeed) || RETURN",
                              "displayLines": "CurrentSpeed",
                              "constants": [],
                              "variables": [
                                "CurrentSpeed"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                              "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                              "displayLines": "{[PassiveSkill03[5]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill03[5]]}"
                              ]
                            }
                          }
                        }
                      ]
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
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MaxStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                      "warningType": "MaxToughness"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
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
                                "flagName": "STAT_CTRL"
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagNames": []
                            }
                          ]
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
                          "passed": [
                            {
                              "name": "Exit Broken-State",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            },
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "constantValue": {
                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                "displayLines": "(MaxStance / 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  "MaxStance"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurrentStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                  "displayLines": "(MaxStance / 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "MaxStance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20007,
                          "statSource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                              "operator": "Variables[0] (HeadDelay) || RETURN",
                              "displayLines": "HeadDelay",
                              "constants": [],
                              "variables": [
                                "HeadDelay"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                              "operator": "Variables[0] (CurrentSpeed) || RETURN",
                              "displayLines": "CurrentSpeed",
                              "constants": [],
                              "variables": [
                                "CurrentSpeed"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                              "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                              "displayLines": "{[PassiveSkill03[5]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill03[5]]}"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "CurrentStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentStance",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                              "displayLines": "(MaxStance / 2)",
                              "constants": [
                                2
                              ],
                              "variables": [
                                "MaxStance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "constantValue": {
                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                "displayLines": "(MaxStance / 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  "MaxStance"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20007,
                          "statSource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                              "operator": "Variables[0] (HeadDelay) || RETURN",
                              "displayLines": "HeadDelay",
                              "constants": [],
                              "variables": [
                                "HeadDelay"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                              "operator": "Variables[0] (CurrentSpeed) || RETURN",
                              "displayLines": "CurrentSpeed",
                              "constants": [],
                              "variables": [
                                "CurrentSpeed"
                              ]
                            },
                            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                              "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                              "displayLines": "{[PassiveSkill03[5]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill03[5]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MainDelay",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MainDelay",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (HeadDelay) || RETURN",
                          "displayLines": "HeadDelay",
                          "constants": [],
                          "variables": [
                            "HeadDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MainBeforeHead",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MainBeforeHead",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1220,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Feixiao"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.5
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HeadDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (TailDelay) || RETURN",
                      "displayLines": "TailDelay",
                      "constants": [],
                      "variables": [
                        "TailDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TailDelay",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (LimbDelay) || RETURN",
                          "displayLines": "LimbDelay",
                          "constants": [],
                          "variables": [
                            "LimbDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 0
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
                            "ID": 203206,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "OR",
                                    "conditionList": [
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
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
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
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "MaxStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                      "warningType": "MaxToughness"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
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
                            "ID": 203204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "OR",
                                    "conditionList": [
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
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
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
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
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
                            "value1": "HeadDelay",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (LimbDelay) || RETURN",
                              "displayLines": "LimbDelay",
                              "constants": [],
                              "variables": [
                                "LimbDelay"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 0
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
                                "ID": 203205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
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
                                "ID": 203204,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (HeadDelay) || RETURN",
                                          "displayLines": "HeadDelay",
                                          "constants": [],
                                          "variables": [
                                            "HeadDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (HeadDelay) || RETURN",
                                          "displayLines": "HeadDelay",
                                          "constants": [],
                                          "variables": [
                                            "HeadDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 0
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
                                "ID": 203204,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (HeadDelay) || RETURN",
                                          "displayLines": "HeadDelay",
                                          "constants": [],
                                          "variables": [
                                            "HeadDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (HeadDelay) || RETURN",
                                          "displayLines": "HeadDelay",
                                          "constants": [],
                                          "variables": [
                                            "HeadDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
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
                                "ID": 203205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
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
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HeadDelay",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (LimbDelay) || RETURN",
                          "displayLines": "LimbDelay",
                          "constants": [],
                          "variables": [
                            "LimbDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 0
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
                            "ID": 203204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "OR",
                                    "conditionList": [
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
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
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
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
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
                            "ID": 203206,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "OR",
                                    "conditionList": [
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
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
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
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
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
                            "value1": "TailDelay",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (LimbDelay) || RETURN",
                              "displayLines": "LimbDelay",
                              "constants": [],
                              "variables": [
                                "LimbDelay"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 0
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
                                "ID": 203205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
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
                                "ID": 203206,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 3
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (TailDelay) || RETURN",
                                          "displayLines": "TailDelay",
                                          "constants": [],
                                          "variables": [
                                            "TailDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 3
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (TailDelay) || RETURN",
                                          "displayLines": "TailDelay",
                                          "constants": [],
                                          "variables": [
                                            "TailDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 0
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
                                "ID": 203206,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 3
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (TailDelay) || RETURN",
                                          "displayLines": "TailDelay",
                                          "constants": [],
                                          "variables": [
                                            "TailDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 3
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (TailDelay) || RETURN",
                                          "displayLines": "TailDelay",
                                          "constants": [],
                                          "variables": [
                                            "TailDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ]
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
                                "ID": 203205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "OR",
                                        "conditionList": [
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
                                            "flagName": "STAT_CTRL"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "EnhanceFlag",
                                      "value": 1
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Modifier Behavior Flag(s)",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "flagNames": []
                                        }
                                      ]
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
                                      "passed": [
                                        {
                                          "name": "Exit Broken-State",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          }
                                        },
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable with Stat",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "CurrentStance",
                                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "CurrentStance",
                                            "compareType": "<",
                                            "value2": {
                                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                              "displayLines": "(MaxStance / 2)",
                                              "constants": [
                                                2
                                              ],
                                              "variables": [
                                                "MaxStance"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "constantValue": {
                                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                                "displayLines": "(MaxStance / 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MaxStance"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "BattleEventPartFlag",
                                      "value": 2
                                    },
                                    {
                                      "name": "Add Battle Event",
                                      "teamName": "Enemy Team",
                                      "eventID": 20007,
                                      "statSource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variables": {
                                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                          "operator": "Variables[0] (LimbDelay) || RETURN",
                                          "displayLines": "LimbDelay",
                                          "constants": [],
                                          "variables": [
                                            "LimbDelay"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                          "displayLines": "CurrentSpeed",
                                          "constants": [],
                                          "variables": [
                                            "CurrentSpeed"
                                          ]
                                        },
                                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                          "displayLines": "{[PassiveSkill03[5]]}",
                                          "constants": [],
                                          "variables": [
                                            "{[PassiveSkill03[5]]}"
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
                  ]
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "MainTrigger2",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1817449894\">Monster_W2_Feixiao_MainTutorial</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MainTrigger2",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability03_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability03_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability03_Camera",
        "2035011_Monster_W2_Feixiao_Ability03_Part01",
        "2035011_Monster_W2_Feixiao_Ability03_Part02"
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
          "ability": "Monster_W2_Feixiao_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability02_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        "Ability Start",
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
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
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
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability02_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability02_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability02_Camera",
        "2035011_Monster_W2_Feixiao_Ability02_Part1_Camera",
        "2035011_Monster_W2_Feixiao_Ability02_Part01",
        "2035011_Monster_W2_Feixiao_Ability02_Part02"
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
          "ability": "Monster_W2_Feixiao_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
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
    "2035011_Monster_W2_Feixiao_AbilityP01_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_AbilityP01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Gunblade: Swordfang"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
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
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.4,
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
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": 10,
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
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
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_AbilityP01_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_AbilityP01_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_AbilityP01_Camera",
        "2035011_Monster_W2_Feixiao_AbilityP01_Part1_Camera",
        "2035011_Monster_W2_Feixiao_AbilityP01_Part01",
        "2035011_Monster_W2_Feixiao_AbilityP01_Part02"
      ],
      "skillTrigger": "SkillP01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Feixiao_AbilityP01_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
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
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability01_Part02": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
        },
        "Ability Start",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
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
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 203501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
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
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035011_Monster_W2_Feixiao_Ability01_Part01": {
      "fileName": "2035011_Monster_W2_Feixiao_Ability01_Part01",
      "childAbilityList": [
        "2035011_Monster_W2_Feixiao_Ability01_Camera",
        "2035011_Monster_W2_Feixiao_Ability01_Part1_Camera",
        "2035011_Monster_W2_Feixiao_Ability01_Part01",
        "2035011_Monster_W2_Feixiao_Ability01_Part02"
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
          "ability": "Monster_W2_Feixiao_Ability01_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
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
    "2035011_Monster_W2_Feixiao_Passive01": {
      "fileName": "2035011_Monster_W2_Feixiao_Passive01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-119032775\">W2_Feixiao_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-169365632\">W2_Feixiao_BattleScore2</a>"
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
            "ID": 2005010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Maddened Feixiao",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"130339168\">Monster_W2_Feixiao_PartController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-643293953\">Monster_W2_Feixiao_SuperArmorController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1478246975\">Monster_W2_Feixiao_BattleEventController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1423053696\">Monster_W2_Feixiao_BreakController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 2005010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Maddened Feixiao",
                "invertCondition": true
              },
              {
                "name": "Enemy ID",
                "ID": 2035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Shadow of \"Feixiao\"",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 2035011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Shadow of \"Feixiao\""
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
              },
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                }
              ]
            },
            {
              "name": "Set Enemy Phase",
              "phase": 2,
              "applyOverride": false
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "({[PassiveSkill02[3]]} - 1)",
                  "isStartingDelay": true
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "({[PassiveSkill02[4]]} - 1)",
                  "isStartingDelay": true
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[PassiveSkill02[5]]}",
                  "isStartingDelay": true
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": true
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20007
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 2005010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Maddened Feixiao"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1620569542\">Monster_W2_Feixiao_MainPhase1</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 2035011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Shadow of \"Feixiao\""
          },
          "passed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 2033021,
                  "locationType": "BeforeCaster"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1052158609\">Monster_W2_Feixiao_MainLockHP</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"354882084\">Monster_W2_Feixiao_MainStart</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
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
      "references": []
    },
    "2035011_Modifiers": {
      "fileName": "2035011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-169365632\">W2_Feixiao_BattleScore2</a>",
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
                  "variableName": "Feixiao_BattleScore2_Flag"
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
                    "skillName": "Skill07"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Charge",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Feixiao_BattleScore2_Flag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill08"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Charge",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Charge",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Feixiao_BattleScore2_Flag",
                      "value": {
                        "operator": "Variables[0] (Feixiao_BattleScore2_Flag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Feixiao_BattleScore2_Flag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Feixiao_BattleScore2_Flag"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Feixiao_BattleScore2_Flag",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Are You Upset?",
                              "desc": "Shadow of \"Feixiao\" uses \"Wreathed in Storm,\" and all of Ecliptic Inner Beast's parts become Weakness Broken during the Charging phase of \"Wreathed in Storm\" in the battle against the Shadow of \"Feixiao\"",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-119032775\">W2_Feixiao_BattleScore1</a>",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Feixiao_BattleScore1_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 200501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true,
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "When This Stormy Rain Has Stopped...",
                          "desc": "None of Ecliptic Inner Beast's parts manages to use an Enhanced action in the battle against the Shadow of \"Feixiao\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Battle was Victory",
                      {
                        "name": "Enemy ID",
                        "ID": 200501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true,
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "When This Stormy Rain Has Stopped...",
                          "desc": "None of Ecliptic Inner Beast's parts manages to use an Enhanced action in the battle against the Shadow of \"Feixiao\"",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-969657750\">Monster_W2_Feixiao_BattleEventTailMove</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Feixiao Parts: Tail}}"
                  },
                  "isStartingAV": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1326714600\">Monster_W2_Feixiao_BattleEventLimbMove</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Feixiao Parts: Claws}}"
                  },
                  "isStartingAV": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__376676106\">Monster_W2_Feixiao_BattleEventHeadMove</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Feixiao Parts: Head}}"
                  },
                  "isStartingAV": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__111887657\">Monster_W2_Feixiao_SpecialEndurance</a>",
          "modifierFlags": [
            "STAT_ForceActionable"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1409624361\">Monster_W2_Feixiao_SpecialLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
          "for": "<a class=\"gModGreen\" id=\"mod__354882084\">Monster_W2_Feixiao_MainStart</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Feixiao"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1409624361\">Monster_W2_Feixiao_SpecialLockHP</a>"
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1409624361\">Monster_W2_Feixiao_SpecialLockHP</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1052158609\">Monster_W2_Feixiao_MainLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.8
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1271577147\">Monster_W2_Feixiao_TalkSentence_06</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AlreadyConnect",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_AlreadyConnect",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                      "valuePerStack": {
                        "MDF_StanceBreakTakenRatio": {
                          "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                          "displayLines": "MDF_StanceBreakTakenRatio",
                          "constants": [],
                          "variables": [
                            "MDF_StanceBreakTakenRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_StanceBreakTakenRatio"
          ],
          "latentQueue": [
            "SpecialTalkHead",
            "SpecialTalkFinish",
            "MissionTalkStart"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>",
          "stackData": [],
          "latentQueue": [
            "SpecialTalkHead",
            "SpecialTalkFinish",
            "MissionTalkStart"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1817449894\">Monster_W2_Feixiao_MainTutorial</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354882084\">Monster_W2_Feixiao_MainStart</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1052158609\">Monster_W2_Feixiao_MainLockHP</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MainTrigger2",
            "EnhanceFlag",
            "CurrentStance",
            "BattleEventPartFlag",
            "MainDelay",
            "MainBeforeHead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__908013757\">Monster_W2_Feixiao_MainEnd</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill03",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "afterInjection": []
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1306733131\">Monster_W2_Feixiao_Stop</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "BaseSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (BaseSpeed) || SUB || RETURN",
                    "displayLines": "(0 - BaseSpeed)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-171858273\">Monster_W2_Feixiao_LostConnect</a>",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1057448385\">Monster_W2_Feixiao_Charge</a>",
          "modifierFlags": [
            "FloatingAnimPerform"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1057448385\">Monster_W2_Feixiao_Charge</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "SpecialTalkCharge",
            "EnhanceHead_Flag",
            "EnhanceLimb_Flag",
            "EnhanceTail_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__284964038\">Monster_W2_Feixiao_Unselectable</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "SpecialTalkCharge",
            "EnhanceHead_Flag",
            "EnhanceLimb_Flag",
            "EnhanceTail_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__221422164\">Monster_W2_Feixiao_ModifyActionDelay</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_BreakActionDelay"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-643293953\">Monster_W2_Feixiao_SuperArmorController</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"221422164\">Monster_W2_Feixiao_ModifyActionDelay</a>",
                  "valuePerStack": {
                    "MDF_BreakActionDelay": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    }
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__411947426\">Monster_W2_Feixiao_EnhanceAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Creator}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Battle Event List}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Creator}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Creator}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1423053696\">Monster_W2_Feixiao_BreakController</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Leave Battle"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 203501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 203501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
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
                      "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1478246975\">Monster_W2_Feixiao_BattleEventController</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-977223255\">Monster_W2_Feixiao_SummonMinions</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceHead_Flag",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 203205,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceLimb_Flag",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 203206,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceTail_Flag",
                              "value": 0
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
                    "value1": "MDF_LostConnect",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_LostConnect",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LostConnect",
                      "value": 0
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - {[PassiveSkill01[1]]})"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-171858273\">Monster_W2_Feixiao_LostConnect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__734224904\">Monster_W2_Feixiao_CurrentConnect</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1847577011\">Monster_W2_Feixiao_AfterConnect</a>",
          "stackData": [],
          "latentQueue": [
            "BattleEventPartFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                    }
                  ]
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
                  "name": "Set Enemy Toughness to Vulnerable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>",
                  "variableName": "MDF_LostConnect",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakTakenRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Set Enemy Toughness to Vulnerable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isVuln": true
                }
              ]
            }
          ],
          "stackData": [
            "MDF_StanceBreakTakenRatio"
          ],
          "latentQueue": [
            "SpecialTalkCharge"
          ],
          "description": "While in the Resonance state, this unit is immune to changes in the order of the action bar (except changes made by itself). At the same time, any Toughness reduction this unit receives will increase by <span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>. When this unit is Weakness Broken, all targets' actions are Advanced Forward.",
          "type": "Other",
          "effectName": "Resonate",
          "statusName": "Resonate"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
          "modifierFlags": [
            "STAT_AITargetHigherPriority"
          ],
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
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                    }
                  ]
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
                },
                {
                  "name": "Set Enemy Toughness to Vulnerable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>",
                  "variableName": "MDF_LostConnect",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakTakenRatio"
                    ]
                  }
                },
                {
                  "name": "Set Enemy Toughness to Vulnerable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isVuln": true
                }
              ]
            }
          ],
          "stackData": [
            "MDF_StanceBreakTakenRatio"
          ],
          "latentQueue": [
            "MissionTalkStart",
            "SpecialTalkFinish",
            "SpecialTalkHead",
            "MDF_AlreadyConnect"
          ],
          "description": "While in the Resonance state, this unit is immune to changes in the order of the action bar (except changes made by itself). At the same time, any Toughness reduction this unit receives will increase by <span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>. When this unit is Weakness Broken, all targets' actions are Advanced Forward.",
          "type": "Other",
          "effectName": "Resonate",
          "statusName": "Resonate"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "SpecialTalkUltraSkill",
            "EnhanceHead_Flag",
            "EnhanceTail_Flag",
            "EnhanceLimb_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>",
          "stackData": [],
          "latentQueue": [
            "SpecialTalkLimb",
            "SpecialTalkFinish",
            "MissionTalkStart"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1070872392\">Monster_W2_Feixiao_Part3Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1540195907\">Monster_W2_Feixiao_Part2Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1508080226\">Monster_W2_Feixiao_Part1Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1620569542\">Monster_W2_Feixiao_MainPhase1</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MainTrigger",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 2
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
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MainTrigger",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 1
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
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MainTrigger",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2043551800\">Monster_W2_Feixiao_Main</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 4
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 5
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
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
                            "name": "Compare: Variable",
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 3
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
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
                            "name": "Compare: Variable",
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Weapon",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Weapon",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Step",
                                "compareType": "=",
                                "value2": 5
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MissionTalkStart",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Step",
                              "value": 6
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MissionTalkStart",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "SpecialTalkFinish",
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
                                "name": "Compare: Variable",
                                "value1": "MDF_Step",
                                "compareType": "=",
                                "value2": 3
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MissionTalkStart",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Step",
                              "value": 4
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MissionTalkStart",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Step2",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Step2",
                              "value": 1
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
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
                            "value1": "SpecialTalkFinish",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Step3",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step3",
                          "value": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "SpecialTalkFinish",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Step3",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step3",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-914591810\">Monster_W2_Feixiao_Main2</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Step",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1271577147\">Monster_W2_Feixiao_TalkSentence_06</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Feixiao_Ability06_Part01",
                      "priorityTag": "EnemyAttackFromSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1220,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Feixiao"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
                      }
                    ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-881036572\">Monster_W2_Feixiao_Main4</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"111887657\">Monster_W2_Feixiao_SpecialEndurance</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"284964038\">Monster_W2_Feixiao_Unselectable</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"336936166\">Monster_W2_FeixiaoPart_MainUnselectable</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "constantValue": 90
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": 12,
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-897814191\">Monster_W2_Feixiao_Main3</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.05
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
                    "value1": "MDF_HPLock",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPLock",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881036572\">Monster_W2_Feixiao_Main4</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1220,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Feixiao"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagNames": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1220,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Feixiao"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
                      }
                    ]
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1717437472\">Monster_W2_Feixiao_Main2_End</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-897814191\">Monster_W2_Feixiao_Main3</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-914591810\">Monster_W2_Feixiao_Main2</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-914591810\">Monster_W2_Feixiao_Main2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.3
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1717437472\">Monster_W2_Feixiao_Main2_End</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_Step",
            "MissionTalkStart",
            "MDF_Weapon",
            "SpecialTalkFinish",
            "MDF_Step2",
            "MDF_Step3"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2027662282\">Monster_W2_Feixiao_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2065920939\">Monster_W2_Feixiao_Destroy</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__130339168\">Monster_W2_Feixiao_PartController</a>",
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Feixiao_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Nebula Devourer: Self}}"
                          },
                          "phase": 3,
                          "applyOverride": false
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Feixiao_PassiveAbility_Insert2",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
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
          "latentQueue": []
        }
      ],
      "references": []
    },
    "2035011_BE_BattleEvents": {
      "fileName": "2035011_BE_BattleEvents",
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
          "ID": 20007,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_W2_Feixiao_00"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    }
  }
}