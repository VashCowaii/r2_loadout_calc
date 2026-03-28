const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012090,
  "trimCharacterName": 5012090,
  "abilityList": [
    "5012090_Monster_W3_Clock_03_PassiveAbility01_Part01",
    "5012090_Monster_W3_Clock_03_Ability02_Part03",
    "5012090_Monster_W3_Clock_03_Ability02_Part02",
    "5012090_Monster_W3_Clock_03_Ability02_Part01",
    "5012090_Monster_W3_Clock_03_Ability01_Part02",
    "5012090_Monster_W3_Clock_03_Ability01_Part01",
    "5012090_Modifiers"
  ],
  "abilityObject": {
    "5012090_Monster_W3_Clock_03_PassiveAbility01_Part01": {
      "fileName": "5012090_Monster_W3_Clock_03_PassiveAbility01_Part01",
      "childAbilityList": [
        "5012090_Monster_W3_Clock_03_PassiveAbility01_Part01"
      ],
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
          "modifier": "<a class=\"gModGreen\" id=\"759707019\">Monster_W3_Clock_03_Initiate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1204549474\">Monster_W3_Clock_03_Initiate_02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-985793760\">W3_Clock_03_BattleScore1</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Charge",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1204549474\">Monster_W3_Clock_03_Initiate_02</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
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
                            "flagName": "Break"
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
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
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
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Charge",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_BeingAttacked",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Is_Traitor",
                      "value": 0
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase_normal"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__759707019\">Monster_W3_Clock_03_Initiate</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Is_Charge",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Is_BeingAttacked",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Elation DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Is_Traitor",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Is_BeingAttacked",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Is_Charge",
                          "value": 0
                        },
                        {
                          "name": "Change Character Transformation",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "phase": "Phase_normal"
                        }
                      ]
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
                        "name": "Compare: Variable",
                        "value1": "Is_Charge",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Is_BeingAttacked",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Is_Traitor",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_BeingAttacked",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Charge",
                      "value": 0
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase_normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Is_Traitor",
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
          "latentQueue": []
        }
      ]
    },
    "5012090_Monster_W3_Clock_03_Ability02_Part03": {
      "fileName": "5012090_Monster_W3_Clock_03_Ability02_Part03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": 30
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Charge",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_BeingAttacked",
          "value": 0
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase_normal"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012090_Monster_W3_Clock_03_Ability02_Part02": {
      "fileName": "5012090_Monster_W3_Clock_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
          "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            }
          },
          "success": []
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Charge",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_BeingAttacked",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase_normal"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012090_Monster_W3_Clock_03_Ability02_Part01": {
      "fileName": "5012090_Monster_W3_Clock_03_Ability02_Part01",
      "childAbilityList": [
        "5012090_Monster_W3_Clock_03_Ability02_Camera",
        "5012090_Monster_W3_Clock_03_Ability02_Part01",
        "5012090_Monster_W3_Clock_03_Ability02_Part02",
        "5012090_Monster_W3_Clock_03_Ability02_Part03",
        "5012090_Monster_W3_Clock_03_Ability02_Camera_02",
        "5012090_Monster_W3_Clock_03_Ability02_Camera_03"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Is_Traitor",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TraitorChace",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Is_Traitor",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TraitorChace",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Is_Traitor",
              "value": 0
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
                "value1": "Is_BeingAttacked",
                "compareType": ">=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (TraitorChace) || RETURN",
                  "displayLines": "TraitorChace",
                  "constants": [],
                  "variables": [
                    "TraitorChace"
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Caster}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_Clock_03_Ability02_Part03",
                  "isTrigger": true
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W3_Clock_03_Ability02_Part02",
              "isTrigger": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Is_BeingAttacked",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012090_Monster_W3_Clock_03_Ability01_Part02": {
      "fileName": "5012090_Monster_W3_Clock_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Charge",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_BeingAttacked",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Passive_AttackTime",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Is_Charge",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Is_BeingAttacked",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Is_Traitor",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
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
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
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
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL",
                            "justAddedOrLiving": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "justAddedOrLiving": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "DisableAction",
                            "justAddedOrLiving": true
                          }
                        ],
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break"
                          }
                        ],
                        "invertCondition": true
                      },
                      "passed": [
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
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": [
                      "STAT_Confine"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": [
                      "STAT_Confine"
                    ],
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Is_Charge",
            "Is_BeingAttacked",
            "Passive_AttackTime"
          ],
          "description": "Uses \"Windmill Defacer\" in the next action.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Strength Boost!"
        }
      ]
    },
    "5012090_Monster_W3_Clock_03_Ability01_Part01": {
      "fileName": "5012090_Monster_W3_Clock_03_Ability01_Part01",
      "childAbilityList": [
        "5012090_Monster_W3_Clock_03_Ability01_Camera",
        "5012090_Monster_W3_Clock_03_Ability01_Part01",
        "5012090_Monster_W3_Clock_03_Ability01_Part02"
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
          "ability": "Monster_W3_Clock_03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5012090_Modifiers": {
      "fileName": "5012090_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-985793760\">W3_Clock_03_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Beginner's Luck Over Skill",
                          "desc": "In the battle against the SD Civilian Mechatron, have it eliminate #1 enemy target(s)",
                          "rarity": "Low",
                          "params": [
                            1
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
      ],
      "references": []
    }
  }
}