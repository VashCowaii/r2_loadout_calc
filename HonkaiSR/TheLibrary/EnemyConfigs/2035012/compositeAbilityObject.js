const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2035012,
  "trimCharacterName": 2035012,
  "abilityList": [
    "2035012_Monster_W2_Feixiao_IF_EX06_PassiveAbility",
    "2035012_Monster_W2_Feixiao_IF_EX05_PassiveAbility",
    "2035012_Monster_W2_Feixiao_IF_EX04_PassiveAbility",
    "2035012_Monster_W2_Feixiao_IF_EX03_PassiveAbility",
    "2035012_Monster_W2_Feixiao_IF_EX02_PassiveAbility",
    "2035012_Monster_W2_Feixiao_IF_EX01_PassiveAbility",
    "2035012_BattleEventAbility_W2_Feixiao_IF",
    "2035012_Monster_W2_Feixiao_IF_PassiveAbility_Insert",
    "2035012_BattleEvent_W2_Feixiao_IF_Part01",
    "2035012_BattleEvent_W2_Feixiao_IF_EnterReady",
    "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part02",
    "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability09_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability09_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability08_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability08_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability07_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability07_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability06_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability06_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability05_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability05_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability04_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability04_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability03_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability03_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability02_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability02_Part01",
    "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part02",
    "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability01_Part02",
    "2035012_Monster_W2_Feixiao_IF_Ability01_Part01",
    "2035012_Monster_W2_Feixiao_IF_Passive01",
    "2035012_Modifiers",
    "2035012_BE_BattleEvents"
  ],
  "abilityObject": {
    "2035012_Monster_W2_Feixiao_IF_EX06_PassiveAbility": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_EX06_PassiveAbility",
      "skillTrigger": "SkillEX06",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_EX05_PassiveAbility": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_EX05_PassiveAbility",
      "skillTrigger": "SkillEX05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_EX04_PassiveAbility": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_EX04_PassiveAbility",
      "skillTrigger": "SkillEX04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_EX03_PassiveAbility": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_EX03_PassiveAbility",
      "skillTrigger": "SkillEX03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_EX02_PassiveAbility": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_EX02_PassiveAbility",
      "skillTrigger": "SkillEX02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_EX01_PassiveAbility": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_EX01_PassiveAbility",
      "skillTrigger": "SkillEX01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1243020063\">Modifier_Monster_W2_Feixiao_IF_EX01</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1243020063\">Modifier_Monster_W2_Feixiao_IF_EX01</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2035012_BattleEventAbility_W2_Feixiao_IF": {
      "fileName": "2035012_BattleEventAbility_W2_Feixiao_IF",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                  "abilityName": "Monster_W2_Feixiao_IF_Ability04_Part01",
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
                                      "abilityName": "Monster_W2_Feixiao_IF_Ability05_Part01",
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
                                          "abilityName": "Monster_W2_Feixiao_IF_Ability06_Part01",
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
                          "abilityName": "Monster_W2_Feixiao_IF_AbilityP01_Part01",
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
    "2035012_Monster_W2_Feixiao_IF_PassiveAbility_Insert": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_PassiveAbility_Insert",
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
            "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1236954137\">Monster_W2_FeixiaoPart_Unselectable</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1497902292\">Monster_W2_Feixiao_IF_Part2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "variableName": "_TurnCount",
          "value": 2
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
          "modifier": "<a class=\"gModGreen\" id=\"2029364550\">Monster_W2_Feixiao_IF_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_BattleEvent_W2_Feixiao_IF_Part01": {
      "fileName": "2035012_BattleEvent_W2_Feixiao_IF_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": 203501,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
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
            "ID": 203501,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W2_Feixiao_IF_AbilityP09_Part01",
              "isTrigger": true
            }
          ]
        },
        "Wait for Pending Ability Completions",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035012_BattleEvent_W2_Feixiao_IF_EnterReady": {
      "fileName": "2035012_BattleEvent_W2_Feixiao_IF_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1095869748\">Monster_W2_Feixiao_IF_Locking</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
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
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": 10,
          "isFixed": "* ERR"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "variableName": "_TurnCount",
          "value": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1355974529\">AvatarChange_W2_Lycan_ResetCameraDither</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1963334892\">AvatarChange_W2_Lycan_SheepStatus</a>[<span class=\"descriptionNumberColor\">Malediction</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part01",
        "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part02",
        "2035012_Monster_W2_Feixiao_IF_AbilityP09_Camera"
      ],
      "skillTrigger": "SkillP09",
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
          "ability": "Monster_W2_Feixiao_IF_AbilityP09_Part02",
          "isTrigger": true
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
    "2035012_Monster_W2_Feixiao_IF_Ability09_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "variableName": "_TurnCount",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1095869748\">Monster_W2_Feixiao_IF_Locking</a>"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SelectTarget"
          },
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1095869748\">Monster_W2_Feixiao_IF_Locking</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Prioritize selecting non-DMG dealing ally characters as the ability target!"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2035012_Monster_W2_Feixiao_IF_Ability09_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability09_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_IF_Ability09_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability09_Part02",
        "2035012_Monster_W2_Feixiao_IF_Ability09_Camera"
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
          "ability": "Monster_W2_Feixiao_IF_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_Ability08_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_Ability08_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability08_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability08_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability08_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability08_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability08_Part02",
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
    "2035012_Monster_W2_Feixiao_IF_Ability07_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
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
              "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_Ability07_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability07_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability07_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability07_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability07_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability07_Part02",
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
    "2035012_Monster_W2_Feixiao_IF_Ability06_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
            "value2": 1
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
            "value2": 2
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
    "2035012_Monster_W2_Feixiao_IF_Ability06_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability06_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability06_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability06_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability06_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability06_Part02",
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
    "2035012_Monster_W2_Feixiao_IF_Ability05_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
            "value2": 1
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
            "value2": 2
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
    "2035012_Monster_W2_Feixiao_IF_Ability05_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability05_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability05_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability05_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability05_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability05_Part02",
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
    "2035012_Monster_W2_Feixiao_IF_Ability04_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
            "value2": 1
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
            "value2": 2
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
    "2035012_Monster_W2_Feixiao_IF_Ability04_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability04_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability04_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability04_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability04_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability04_Part02",
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
    "2035012_Monster_W2_Feixiao_IF_Ability03_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 3
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
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
                              "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 1
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 1
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 2
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 3
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 2
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 3
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 3
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
                              "eventID": 20021,
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
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 2
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20021,
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
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2035012_Monster_W2_Feixiao_IF_Ability03_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability03_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability03_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability03_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability03_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability03_Part02",
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
    "2035012_Monster_W2_Feixiao_IF_Ability02_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability02_Part02",
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
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
            "value2": 2
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
    "2035012_Monster_W2_Feixiao_IF_Ability02_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability02_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability02_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability02_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability02_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part02",
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
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
            "value2": 2
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
    "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_AbilityP01_Camera",
        "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part01",
        "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_AbilityP01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "2035012_Monster_W2_Feixiao_IF_Ability01_Part02": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability01_Part02",
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
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
            "value2": 2
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
    "2035012_Monster_W2_Feixiao_IF_Ability01_Part01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Ability01_Part01",
      "childAbilityList": [
        "2035012_Monster_W2_Feixiao_Ability01_Camera",
        "2035012_Monster_W2_Feixiao_IF_Ability01_Part01",
        "2035012_Monster_W2_Feixiao_IF_Ability01_Part02"
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
          "ability": "Monster_W2_Feixiao_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "2035012_Monster_W2_Feixiao_IF_Passive01": {
      "fileName": "2035012_Monster_W2_Feixiao_IF_Passive01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1393128044\">Monster_W2_Feixiao_IF_OnLevel</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"2029364550\">Monster_W2_Feixiao_IF_PartController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-352783921\">Monster_W2_Feixiao_IF_BattleEventController</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1680868349\">Monster_W2_Feixiao_IF_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"246004318\">Monster_W2_Feixiao_IF_BreakController</a>"
        },
        {
          "name": "Set Enemy Phase"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
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
        },
        {
          "name": "Add Battle Event",
          "teamName": "Neutral Team",
          "eventID": 20023,
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
              "modifier": "<a class=\"gModGreen\" id=\"1757126586\">Monster_W2_Feixiao_IF_PickUpMessage</a>"
            },
            "Show BattleEvent Button"
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Set Hit-Class"
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20021
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 203302200,
                  "locationType": "BeforeCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 203302200,
                  "locationType": "BeforeCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 203302200,
                  "locationType": "BeforeCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 203302200,
                  "locationType": "BeforeCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"72353298\">Standard_StrongChallengeEX_SuperArmorController_MultiNew</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay_01": {
              "operator": "Variables[0] ({[SkillEX06[0]]}) || RETURN",
              "displayLines": "{[SkillEX06[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX06[0]]}"
              ]
            },
            "MDF_IF_BOSS_BreakDelay_02": {
              "operator": "Variables[0] ({[SkillEX06[1]]}) || RETURN",
              "displayLines": "{[SkillEX06[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX06[1]]}"
              ]
            },
            "MDF_IF_BOSS_BreakDelay_03": {
              "operator": "Variables[0] ({[SkillEX06[2]]}) || RETURN",
              "displayLines": "{[SkillEX06[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX06[2]]}"
              ]
            },
            "MDF_IF_BOSS_BreakDelay_04": {
              "operator": "Variables[0] ({[SkillEX06[3]]}) || RETURN",
              "displayLines": "{[SkillEX06[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX06[3]]}"
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
          },
          "casterAssign": "TargetSelf"
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
    "2035012_Modifiers": {
      "fileName": "2035012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1393128044\">Monster_W2_Feixiao_IF_OnLevel</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
          "type": "Other",
          "effectName": "Resonate",
          "statusName": "Resonate"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>",
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
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_AlreadyConnect"
          ],
          "description": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
          "type": "Other",
          "effectName": "Resonate",
          "statusName": "Resonate"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-352783921\">Monster_W2_Feixiao_IF_BattleEventController</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__246004318\">Monster_W2_Feixiao_IF_BreakController</a>",
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
                    "value2": 2
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1497902292\">Monster_W2_Feixiao_IF_Part2</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1757126586\">Monster_W2_Feixiao_IF_PickUpMessage</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2029364550\">Monster_W2_Feixiao_IF_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_isReset",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Set Hit-Class",
                      "reset": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_isReset",
                      "value": 1
                    }
                  ]
                }
              ]
            },
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Feixiao_IF_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1680868349\">Monster_W2_Feixiao_IF_Status</a>",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WaveStart",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WaveStart",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DieCount",
                    "compareType": ">=",
                    "value2": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DieCount",
                    "compareType": ">=",
                    "value2": 2
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DieCount",
                    "compareType": ">=",
                    "value2": 3
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DieCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "variableName": "_TurnCount",
                  "value": -1,
                  "max": 4
                }
              ]
            },
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 6024,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_DieCount",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCharByChangeSource]]"
                      },
                      "variableName": "Dead_DynamicTarget03"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieCount",
                      "value": 3
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 6024,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_DieCount",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCharByChangeSource]]"
                      },
                      "variableName": "Dead_DynamicTarget02"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieCount",
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
                        "name": "Character ID",
                        "ID": 6024,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_DieCount",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCharByChangeSource]]"
                      },
                      "variableName": "Dead_DynamicTarget01"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieCount",
                      "value": 1
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Feixiao Parts ApocShadow}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill04[1]]}) || Constants[0] (3) || MUL || RETURN",
                        "displayLines": "({[PassiveSkill04[1]]} * 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "{[PassiveSkill04[1]]}"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Enemy Feixiao ApocShadow}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Feixiao Parts ApocShadow}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Preview Shows Break[?]",
              "execute": [
                {
                  "name": "IF",
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
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 203501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Feixiao Parts ApocShadow}}"
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "baseToughnessDMG": {
                        "operator": "Variables[0] ({[PassiveSkill04[1]]}) || Constants[0] (3) || MUL || RETURN",
                        "displayLines": "({[PassiveSkill04[1]]} * 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "{[PassiveSkill04[1]]}"
                        ]
                      },
                      "toughnessForcedReductionPreview": 1,
                      "isForcedReduction": true,
                      "ignoreBreakBlock": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
        }
      ],
      "references": []
    },
    "2035012_BE_BattleEvents": {
      "fileName": "2035012_BE_BattleEvents",
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
          "ID": 20021,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_W2_Feixiao_IF"
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
        },
        {
          "name": "Battle Event Construction",
          "ID": 20023,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}