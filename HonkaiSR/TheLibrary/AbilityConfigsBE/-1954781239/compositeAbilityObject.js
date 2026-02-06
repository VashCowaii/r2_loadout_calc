const compositeAbilityObject = {
  "fullCharacterName": -1954781239,
  "trimCharacterName": -1954781239,
  "abilityList": [
    "-1954781239_FantasticStory_PlusAbility_0053",
    "-1954781239_FantasticStory_PlusAbility_0052",
    "-1954781239_FantasticStory_PlusAbility_0051",
    "-1954781239_FantasticStory_BaseAbility_0050_Insert",
    "-1954781239_FantasticStory_BaseAbility_0050_Insert_Camera",
    "-1954781239_FantasticStory_BaseAbility_0050",
    "-1954781239_FantasticStory_PlusAbility_0043",
    "-1954781239_FantasticStory_PlusAbility_0042",
    "-1954781239_FantasticStory_PlusAbility_0041",
    "-1954781239_FantasticStory_BaseAbility_0040_Insert",
    "-1954781239_FantasticStory_BaseAbility_0040_Insert_Camera",
    "-1954781239_FantasticStory_BaseAbility_0040",
    "-1954781239_FantasticStory_PlusAbility_0036",
    "-1954781239_FantasticStory_PlusAbility_0035",
    "-1954781239_FantasticStory_PlusAbility_0034",
    "-1954781239_FantasticStory_PlusAbility_0033",
    "-1954781239_FantasticStory_PlusAbility_0032",
    "-1954781239_FantasticStory_PlusAbility_0031",
    "-1954781239_FantasticStory_PlusAbility_0031_Insert",
    "-1954781239_FantasticStory_BaseAbility_0030_Insert",
    "-1954781239_FantasticStory_BaseAbility_0030_Insert_Camera",
    "-1954781239_FantasticStory_BaseAbility_0030",
    "-1954781239_FantasticStory_PlusAbility_0028",
    "-1954781239_FantasticStory_PlusAbility_0027",
    "-1954781239_FantasticStory_PlusAbility_0026",
    "-1954781239_FantasticStory_PlusAbility_0025",
    "-1954781239_FantasticStory_PlusAbility_0024",
    "-1954781239_FantasticStory_PlusAbility_0023",
    "-1954781239_FantasticStory_PlusAbility_0022",
    "-1954781239_FantasticStory_PlusAbility_0021",
    "-1954781239_FantasticStory_BaseAbility_0020",
    "-1954781239_FantasticStory_PlusAbility_0018",
    "-1954781239_FantasticStory_PlusAbility_0017",
    "-1954781239_FantasticStory_PlusAbility_0016",
    "-1954781239_FantasticStory_PlusAbility_0015",
    "-1954781239_FantasticStory_PlusAbility_0014",
    "-1954781239_FantasticStory_PlusAbility_0013",
    "-1954781239_FantasticStory_PlusAbility_0012",
    "-1954781239_FantasticStory_PlusAbility_0011",
    "-1954781239_FantasticStory_BaseAbility_0010_Deathrattle_Camera",
    "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert",
    "-1954781239_FantasticStory_BaseAbility_0010",
    "-1954781239_Modifiers"
  ],
  "abilityObject": {
    "-1954781239_FantasticStory_PlusAbility_0053": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0053",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0053",
          "value": 1
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0052": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0052",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0052",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0052_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0052_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0051": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0051",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0051",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0051_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0051_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0050_Insert": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0050_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_BaseAbility_0050_CountSum",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (2) || MUL || RETURN",
              "displayLines": "(DV_RangeGap_3 * 2)",
              "constants": [
                2
              ],
              "variables": [
                "DV_RangeGap_3"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
              "value": {
                "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(DV_RangeGap_3 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DV_RangeGap_3"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum - DV_RangeGap_3)",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0050_CountSum",
                  "DV_RangeGap_3"
                ]
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ADF_2_get) || RETURN",
            "displayLines": "ADF_2_get",
            "constants": [],
            "variables": [
              "ADF_2_get"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_3_get) || MUL || RETURN",
                      "displayLines": "(TempHP_get * ADF_3_get)",
                      "constants": [],
                      "variables": [
                        "TempHP_get",
                        "ADF_3_get"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0050_Insert_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0050_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0050": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0050",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0051"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0052"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0053"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || Constants[0] (0.33) || MUL || RETURN",
            "displayLines": "(#ADF_1 * 0.33)",
            "constants": [
              0.33
            ],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_2",
          "value": {
            "operator": "Variables[0] (#ADF_1) || Constants[0] (0.67) || MUL || RETURN",
            "displayLines": "(#ADF_1 * 0.67)",
            "constants": [
              0.67
            ],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_3",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Start Battle Track Progress",
          "progress": 0,
          "count": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0050",
          "valuePerStack": {
            "ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "ADF_3": {
              "operator": "Variables[0] (#ADF_3) || RETURN",
              "displayLines": "#ADF_3",
              "constants": [],
              "variables": [
                "#ADF_3"
              ]
            },
            "TempHP": {
              "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
              "displayLines": "BattleEvent_BaseHP",
              "constants": [],
              "variables": [
                "BattleEvent_BaseHP"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0050_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0050_CountSum"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0050",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0050_sub"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0050_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0050_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0050_sub"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0051",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub[<span class=\"descriptionNumberColor\">Arioso</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0052",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus2_sub[<span class=\"descriptionNumberColor\">Picturesque</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0053",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub[<span class=\"descriptionNumberColor\">Free Writing</span>]"
                        }
                      ]
                    }
                  ]
                },
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0051",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub2[<span class=\"descriptionNumberColor\">Arioso</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "AvatarInsertAttackSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "TempHP_get": {
                                  "operator": "Variables[0] (TempHP) || RETURN",
                                  "displayLines": "TempHP",
                                  "constants": [],
                                  "variables": [
                                    "TempHP"
                                  ]
                                },
                                "ADF_2_get": {
                                  "operator": "Variables[0] (ADF_2) || RETURN",
                                  "displayLines": "ADF_2",
                                  "constants": [],
                                  "variables": [
                                    "ADF_2"
                                  ]
                                },
                                "ADF_3_get": {
                                  "operator": "Variables[0] (ADF_3) || RETURN",
                                  "displayLines": "ADF_3",
                                  "constants": [],
                                  "variables": [
                                    "ADF_3"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            },
                            "ADF_3_get": {
                              "operator": "Variables[0] (ADF_3) || RETURN",
                              "displayLines": "ADF_3",
                              "constants": [],
                              "variables": [
                                "ADF_3"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0051",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub[<span class=\"descriptionNumberColor\">Arioso</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub2[<span class=\"descriptionNumberColor\">Arioso</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0052",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus2_sub[<span class=\"descriptionNumberColor\">Picturesque</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0053",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub[<span class=\"descriptionNumberColor\">Free Writing</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            },
                            "ADF_3_get": {
                              "operator": "Variables[0] (ADF_3) || RETURN",
                              "displayLines": "ADF_3",
                              "constants": [],
                              "variables": [
                                "ADF_3"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                    "displayLines": "DV_RangeGap_1",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_1"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      },
                      "count": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      },
                      "count": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                    "displayLines": "DV_RangeGap_1",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_1"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                    "displayLines": "DV_RangeGap_2",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_2"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      },
                      "count": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      },
                      "count": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                    "displayLines": "DV_RangeGap_2",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_2"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                    "displayLines": "DV_RangeGap_3",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      },
                      "count": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      },
                      "count": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "#ADF_1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                    "displayLines": "DV_RangeGap_3",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            },
                            "ADF_3_get": {
                              "operator": "Variables[0] (ADF_3) || RETURN",
                              "displayLines": "ADF_3",
                              "constants": [],
                              "variables": [
                                "ADF_3"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "ADF_1",
            "ADF_2",
            "ADF_3",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0051",
            "DV_FantasticStory_PlusAbility_0052",
            "DV_FantasticStory_PlusAbility_0053",
            "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0043": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0043",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0043",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0043_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0042": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0042",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0042",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0042_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0042_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0041": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0041",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0041",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0041_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0041_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0040_Insert": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0040_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0041",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_2_get",
              "value": {
                "operator": "Variables[0] (ADF_2_get) || Variables[1] (DV_FantasticStory_PlusAbility_0041) || ADD || RETURN",
                "displayLines": "(ADF_2_get + DV_FantasticStory_PlusAbility_0041)",
                "constants": [],
                "variables": [
                  "ADF_2_get",
                  "DV_FantasticStory_PlusAbility_0041"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_0040_CountSum",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (2) || MUL || RETURN",
                  "displayLines": "(DV_RangeGap_3 * 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "DV_RangeGap_3"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(DV_RangeGap_3 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum - DV_RangeGap_3)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0040_CountSum",
                      "DV_RangeGap_3"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Set Battle Track Progress",
              "progress": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "#ADF_1",
                  "DV_FantasticStory_PlusAbility_0041_ADF_1"
                ]
              },
              "count": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "#ADF_1",
                  "DV_FantasticStory_PlusAbility_0041_ADF_1"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_0040_CountSum",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (2) || MUL || RETURN",
                  "displayLines": "(DV_RangeGap_3 * 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "DV_RangeGap_3"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(DV_RangeGap_3 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum - DV_RangeGap_3)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0040_CountSum",
                      "DV_RangeGap_3"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Set Battle Track Progress",
              "progress": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "#ADF_1"
                ]
              },
              "count": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "#ADF_1"
                ]
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ADF_2_get) || RETURN",
            "displayLines": "ADF_2_get",
            "constants": [],
            "variables": [
              "ADF_2_get"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_3_get) || MUL || RETURN",
                      "displayLines": "(TempHP_get * ADF_3_get)",
                      "constants": [],
                      "variables": [
                        "TempHP_get",
                        "ADF_3_get"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0040_Insert_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0040_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0040": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0040",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0041"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0042"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0043"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || Constants[0] (0.33) || MUL || RETURN",
            "displayLines": "(#ADF_1 * 0.33)",
            "constants": [
              0.33
            ],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_2",
          "value": {
            "operator": "Variables[0] (#ADF_1) || Constants[0] (0.67) || MUL || RETURN",
            "displayLines": "(#ADF_1 * 0.67)",
            "constants": [
              0.67
            ],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_3",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Start Battle Track Progress",
          "progress": 0,
          "count": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0040",
          "valuePerStack": {
            "ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "ADF_3": {
              "operator": "Variables[0] (#ADF_3) || RETURN",
              "displayLines": "#ADF_3",
              "constants": [],
              "variables": [
                "#ADF_3"
              ]
            },
            "TempHP": {
              "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
              "displayLines": "BattleEvent_BaseHP",
              "constants": [],
              "variables": [
                "BattleEvent_BaseHP"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0040_plus3_sub[<span class=\"descriptionNumberColor\">Bonus Charge</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Extra_Count",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0043_ADF_1) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0043_ADF_1",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0043_ADF_1"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (_Extra_Count) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + _Extra_Count)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0040_CountSum",
                      "_Extra_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "After attacking enemy targets, Whimsicality additionally gains <span class=\"descriptionNumberColor\">_Extra_Count</span> point(s) of Charge.",
          "type": "Buff",
          "effectName": "Bonus Charge",
          "statusName": "Bonus Charge"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0040_sub",
          "stackType": "ReplaceByCaster",
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
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_InsertDamageFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0040_CountSum"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_InsertDamageFlag",
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
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_InsertDamageFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0040",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0040_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0040_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0042",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0040_plus2_sub[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
                          "valuePerStack": {
                            "_DamageUpRatio": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0042_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0042_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0042_ADF_1"
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
                        "value1": "DV_FantasticStory_PlusAbility_0043",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0040_plus3_sub[<span class=\"descriptionNumberColor\">Bonus Charge</span>]",
                          "valuePerStack": {
                            "_Extra_Count": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0043_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0043_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0043_ADF_1"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0040_sub"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FantasticStory_BaseAbility_0040_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "priorityTag": "PROG_AvatarLowest",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "TempHP_get": {
                                  "operator": "Variables[0] (TempHP) || RETURN",
                                  "displayLines": "TempHP",
                                  "constants": [],
                                  "variables": [
                                    "TempHP"
                                  ]
                                },
                                "ADF_2_get": {
                                  "operator": "Variables[0] (ADF_2) || RETURN",
                                  "displayLines": "ADF_2",
                                  "constants": [],
                                  "variables": [
                                    "ADF_2"
                                  ]
                                },
                                "ADF_3_get": {
                                  "operator": "Variables[0] (ADF_3) || RETURN",
                                  "displayLines": "ADF_3",
                                  "constants": [],
                                  "variables": [
                                    "ADF_3"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0040_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "PROG_AvatarLowest",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            },
                            "ADF_3_get": {
                              "operator": "Variables[0] (ADF_3) || RETURN",
                              "displayLines": "ADF_3",
                              "constants": [],
                              "variables": [
                                "ADF_3"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0041",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_RangeGap_1",
                      "value": {
                        "operator": "Variables[0] (#ADF_1) || Variables[1] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || Constants[0] (0.33) || MUL || RETURN",
                        "displayLines": "((#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1) * 0.33)",
                        "constants": [
                          0.33
                        ],
                        "variables": [
                          "#ADF_1",
                          "DV_FantasticStory_PlusAbility_0041_ADF_1"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_RangeGap_2",
                      "value": {
                        "operator": "Variables[0] (#ADF_1) || Variables[1] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || Constants[0] (0.67) || MUL || RETURN",
                        "displayLines": "((#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1) * 0.67)",
                        "constants": [
                          0.67
                        ],
                        "variables": [
                          "#ADF_1",
                          "DV_FantasticStory_PlusAbility_0041_ADF_1"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_RangeGap_3",
                      "value": {
                        "operator": "Variables[0] (#ADF_1) || Variables[1] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || RETURN",
                        "displayLines": "(#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)",
                        "constants": [],
                        "variables": [
                          "#ADF_1",
                          "DV_FantasticStory_PlusAbility_0041_ADF_1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0040_sub"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0042",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0040_plus2_sub[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
                          "valuePerStack": {
                            "_DamageUpRatio": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0042_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0042_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0042_ADF_1"
                              ]
                            }
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
                    "value1": "DV_FantasticStory_PlusAbility_0043",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0040_plus3_sub[<span class=\"descriptionNumberColor\">Bonus Charge</span>]",
                      "valuePerStack": {
                        "_Extra_Count": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0043_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0043_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0043_ADF_1"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            },
                            "ADF_3_get": {
                              "operator": "Variables[0] (ADF_3) || RETURN",
                              "displayLines": "ADF_3",
                              "constants": [],
                              "variables": [
                                "ADF_3"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                    "displayLines": "DV_RangeGap_1",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_1"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                    "displayLines": "DV_RangeGap_1",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_1"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                    "displayLines": "DV_RangeGap_2",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_2"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                    "displayLines": "DV_RangeGap_2",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_2"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                    "displayLines": "DV_RangeGap_3",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1",
                              "DV_FantasticStory_PlusAbility_0041_ADF_1"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          },
                          "count": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_0040_CountSum",
                              "#ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                    "displayLines": "DV_RangeGap_3",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0040_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "PROG_AvatarLowest",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            },
                            "ADF_3_get": {
                              "operator": "Variables[0] (ADF_3) || RETURN",
                              "displayLines": "ADF_3",
                              "constants": [],
                              "variables": [
                                "ADF_3"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "ADF_1",
            "ADF_2",
            "ADF_3",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0041",
            "DV_FantasticStory_PlusAbility_0042",
            "DV_FantasticStory_PlusAbility_0043",
            "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag"
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0036": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0036",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0036",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0036_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0035": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0035",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0035",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0035_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0034": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0034",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0034",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0034_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0034_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0033": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0033",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0033",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0033_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0032": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0032",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0032",
          "value": 1
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0031": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0031",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0031",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0031_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0031_Insert": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0031_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_2_get) || MUL || RETURN",
                  "displayLines": "(TempHP_get * ADF_2_get)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "ADF_2_get"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0030_Insert": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0030_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0034",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_2_get",
              "value": {
                "operator": "Variables[0] (ADF_2_get) || Constants[0] (1) || Variables[1] (DV_FantasticStory_PlusAbility_0034_ADF_2) || ADD || MUL || RETURN",
                "displayLines": "(ADF_2_get * (1 + DV_FantasticStory_PlusAbility_0034_ADF_2))",
                "constants": [
                  1
                ],
                "variables": [
                  "ADF_2_get",
                  "DV_FantasticStory_PlusAbility_0034_ADF_2"
                ]
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_2_get) || MUL || RETURN",
                  "displayLines": "(TempHP_get * ADF_2_get)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "ADF_2_get"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0035",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP",
              "valuePerStack": {
                "_AddSP": {
                  "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0035_ADF_1) || RETURN",
                  "displayLines": "DV_FantasticStory_PlusAbility_0035_ADF_1",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_PlusAbility_0035_ADF_1"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_BaseAbility_0030_DamageSum",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (2) || MUL || RETURN",
              "displayLines": "(DV_RangeGap_3 * 2)",
              "constants": [
                2
              ],
              "variables": [
                "DV_RangeGap_3"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
              "value": {
                "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(DV_RangeGap_3 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DV_RangeGap_3"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0034",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0030_DamageSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0030_DamageSum - DV_RangeGap_3)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0030_DamageSum",
                      "DV_RangeGap_3"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0030_Insert_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0030_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0030": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0030",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0031"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0032"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0033"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0034"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0035"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0036"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_1",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (#ADF_1) || MUL || Constants[0] (0.33) || MUL || RETURN",
            "displayLines": "((BattleEvent_BaseHP * #ADF_1) * 0.33)",
            "constants": [
              0.33
            ],
            "variables": [
              "BattleEvent_BaseHP",
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_2",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (#ADF_1) || MUL || Constants[0] (0.67) || MUL || RETURN",
            "displayLines": "((BattleEvent_BaseHP * #ADF_1) * 0.67)",
            "constants": [
              0.67
            ],
            "variables": [
              "BattleEvent_BaseHP",
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_RangeGap_3",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (#ADF_1) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * #ADF_1)",
            "constants": [],
            "variables": [
              "BattleEvent_BaseHP",
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0030",
          "valuePerStack": {
            "ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "TempHP": {
              "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
              "displayLines": "BattleEvent_BaseHP",
              "constants": [],
              "variables": [
                "BattleEvent_BaseHP"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0030_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                              "value": "DV_FantasticStory_PlusAbility_0031_ADF_1"
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
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0034",
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
                            "value1": "_InsertDamageFlag",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
                              "value": {
                                "operator": "Constants[0] (1) || Variables[0] (DV_FantasticStory_PlusAbility_0034_InsertAtkCount) || ADD || RETURN",
                                "displayLines": "(1 + DV_FantasticStory_PlusAbility_0034_InsertAtkCount)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Damage Data",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_DamageSum",
                          "context": "ContextModifier"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
                          "value": {
                            "operator": "Variables[0] (_DamageSum) || Variables[1] (DV_FantasticStory_BaseAbility_0030_DamageSum) || ADD || RETURN",
                            "displayLines": "(_DamageSum + DV_FantasticStory_BaseAbility_0030_DamageSum)",
                            "constants": [],
                            "variables": [
                              "_DamageSum",
                              "DV_FantasticStory_BaseAbility_0030_DamageSum"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "DV_FantasticStory_PlusAbility_0033",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "_InsertDamageFlag",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "advanceType": "Set",
                              "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0033_ADF_1)"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_InsertDamageFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0032",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Attack-Type Extension",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "typeToExtend": "Ultimate",
                      "extendTypeTo": "Follow-up"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_InsertDamageFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0030",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0030_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0030_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_PlusAbility_0031_Insert"
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_sub"
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0036",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus6_sub",
                      "valuePerStack": {
                        "_DamageSumRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0036_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0036_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0036_ADF_1"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_sub"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[getBattleEvents]]"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_sub"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0034",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "ContextCaster",
                          "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0035",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "EntityCurrentSP"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "EntityStockSP"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "EntityMaxSP"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0036",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus6_sub",
                          "valuePerStack": {
                            "_DamageSumRatio": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0036_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0036_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0036_ADF_1"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                    "displayLines": "DV_RangeGap_1",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_1"
                    ]
                  },
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                    "displayLines": "DV_RangeGap_1",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_1"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                    "displayLines": "DV_RangeGap_2",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_2"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                    "displayLines": "DV_RangeGap_2",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_2"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                    "displayLines": "DV_RangeGap_3",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                    "displayLines": "DV_RangeGap_3",
                    "constants": [],
                    "variables": [
                      "DV_RangeGap_3"
                    ]
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                          "value": 1
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "AvatarInsertAttackSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "TempHP_get": {
                                  "operator": "Variables[0] (TempHP) || RETURN",
                                  "displayLines": "TempHP",
                                  "constants": [],
                                  "variables": [
                                    "TempHP"
                                  ]
                                },
                                "ADF_2_get": {
                                  "operator": "Variables[0] (ADF_2) || RETURN",
                                  "displayLines": "ADF_2",
                                  "constants": [],
                                  "variables": [
                                    "ADF_2"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
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
              "name": "Variable Value Changes",
              "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 3,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "ADF_1",
            "ADF_2",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0031",
            "DV_FantasticStory_PlusAbility_0032",
            "DV_FantasticStory_PlusAbility_0033",
            "DV_FantasticStory_PlusAbility_0034",
            "DV_FantasticStory_PlusAbility_0035",
            "DV_FantasticStory_PlusAbility_0036",
            "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0028": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0028",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0028",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0028_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0028_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0028_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0027": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0027",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0027",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_4",
          "value": {
            "operator": "Variables[0] (#ADF_4) || RETURN",
            "displayLines": "#ADF_4",
            "constants": [],
            "variables": [
              "#ADF_4"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0026": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0026",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0026",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0026_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0026_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0025": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0025",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0025",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_4",
          "value": {
            "operator": "Variables[0] (#ADF_4) || RETURN",
            "displayLines": "#ADF_4",
            "constants": [],
            "variables": [
              "#ADF_4"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_5",
          "value": {
            "operator": "Variables[0] (#ADF_5) || RETURN",
            "displayLines": "#ADF_5",
            "constants": [],
            "variables": [
              "#ADF_5"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0024": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0024",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0024",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0024_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0023": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0023",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0023",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0023_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0023_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0022": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0022",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0022",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0022_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0022_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0022_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0021": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0021",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0021",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0021_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0020": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0020",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0021"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0022"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0023"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0024"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0025"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0026"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0027"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0028"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_Plus6_WarlockCount"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0020",
          "valuePerStack": {
            "ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "ADF_3": {
              "operator": "Variables[0] (#ADF_3) || RETURN",
              "displayLines": "#ADF_3",
              "constants": [],
              "variables": [
                "#ADF_3"
              ]
            },
            "TempHP": {
              "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
              "displayLines": "BattleEvent_BaseHP",
              "constants": [],
              "variables": [
                "BattleEvent_BaseHP"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub7",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric",
                                    "invertCondition": true
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Trigger Modifier Event",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "DOT_TriggerRatio",
                              "eventType": "DOT",
                              "value": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0028_ADF_3) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_3",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0028_ADF_3"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Trigger Modifier Event",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "DOT_TriggerRatio",
                                  "eventType": "DOT",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0028_ADF_2) || RETURN",
                                    "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_2",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_PlusAbility_0028_ADF_2"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison"
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn"
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed"
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Trigger Modifier Event",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "DOT_TriggerRatio",
                                      "eventType": "DOT",
                                      "value": {
                                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0028_ADF_1) || RETURN",
                                        "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_1",
                                        "constants": [],
                                        "variables": [
                                          "DV_FantasticStory_PlusAbility_0028_ADF_1"
                                        ]
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
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub8",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub6_dot[<span class=\"descriptionNumberColor\">Gimmick</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Poison_Damage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_Damage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_Damage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_Damage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Gimmick",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub6",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub6_dot[<span class=\"descriptionNumberColor\">Gimmick</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0027_ADF_4) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_4",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0027_ADF_4"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0027_ADF_3) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_3",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0027_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0027_ADF_2) || MUL || RETURN",
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0027_ADF_2)",
                      "constants": [],
                      "variables": [
                        "TempHP_get",
                        "DV_FantasticStory_PlusAbility_0027_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub5[<span class=\"descriptionNumberColor\">Gimmick</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0027_ADF_1) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_1",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0027_ADF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0027_ADF_1</span>. Upon Breaking an enemy target's Weakness, applies Wind Shear to all enemies.",
          "type": "Buff",
          "statusName": "Gimmick"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub4[<span class=\"descriptionNumberColor\">Verification</span>]",
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
                    "operator": "Variables[0] (DmgAddedRatio) || RETURN",
                    "displayLines": "DmgAddedRatio",
                    "constants": [],
                    "variables": [
                      "DmgAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (SpdAddedRatio) || RETURN",
                    "displayLines": "SpdAddedRatio",
                    "constants": [],
                    "variables": [
                      "SpdAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span> and increases SPD by <span class=\"descriptionNumberColor\">SpdAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG and SPD Boost",
          "statusName": "Verification"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub3_dot[<span class=\"descriptionNumberColor\">Argument</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Poison_Damage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_Damage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_Damage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_Damage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Argument",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub3",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder and Adjacent Targets}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3_dot[<span class=\"descriptionNumberColor\">Argument</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_5) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0025_ADF_5"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_4) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0025_ADF_4"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0025_ADF_3) || MUL || RETURN",
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)",
                      "constants": [],
                      "variables": [
                        "TempHP_get",
                        "DV_FantasticStory_PlusAbility_0025_ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3_dot[<span class=\"descriptionNumberColor\">Argument</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_5) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0025_ADF_5"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_4) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0025_ADF_4"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0025_ADF_3) || MUL || RETURN",
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)",
                      "constants": [],
                      "variables": [
                        "TempHP_get",
                        "DV_FantasticStory_PlusAbility_0025_ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub2_dot[<span class=\"descriptionNumberColor\">Rumor</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Poison_Damage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_Damage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_Damage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_Damage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Rumor",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub2",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub2_dot[<span class=\"descriptionNumberColor\">Rumor</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0022_ADF_3) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0022_ADF_3",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0022_ADF_3"
                    ]
                  },
                  "stackLimit": 5,
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0022_ADF_1) || MUL || RETURN",
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0022_ADF_1)",
                      "constants": [],
                      "variables": [
                        "TempHP_get",
                        "DV_FantasticStory_PlusAbility_0022_ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                          "value": "ADF_2_get"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "ADF_1_get"
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
                        "value1": "DV_FantasticStory_PlusAbility_0021",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Fire"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Physical"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Wind"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0021_ADF_1 "
                                ]
                              }
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0023",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Target Has Lowest/Highest Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "partOf": {
                          "name": "Target Name",
                          "target": "{{Player Team(Exclude Memosprites)}}"
                        },
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                        "minOrMax": "Min"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0023_ADF_1) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0023_ADF_1",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0023_ADF_1"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0023_ADF_2)"
                        },
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "living": true
                        }
                      ]
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
                    "value1": "DV_FantasticStory_PlusAbility_0024",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Copy Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "source": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagFilter": [
                            "STAT_DOT"
                          ],
                          "chance": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0024_ADF_1) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0024_ADF_1",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0024_ADF_1"
                            ]
                          }
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - ADF_3_get)"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "living": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020_sub_preshow",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Ultimate",
              "Skill",
              "Basic ATK"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "STAT_DOT"
                },
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
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (ADF_3_get) || SUB || RETURN",
                "displayLines": "(0 - ADF_3_get)",
                "constants": [
                  0
                ],
                "variables": [
                  "ADF_3_get"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0020",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    },
                    "ADF_1_get": {
                      "operator": "Variables[0] (ADF_1) || RETURN",
                      "displayLines": "ADF_1",
                      "constants": [],
                      "variables": [
                        "ADF_1"
                      ]
                    },
                    "ADF_2_get": {
                      "operator": "Variables[0] (ADF_2) || RETURN",
                      "displayLines": "ADF_2",
                      "constants": [],
                      "variables": [
                        "ADF_2"
                      ]
                    },
                    "ADF_3_get": {
                      "operator": "Variables[0] (ADF_3) || RETURN",
                      "displayLines": "ADF_3",
                      "constants": [],
                      "variables": [
                        "ADF_3"
                      ]
                    }
                  }
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_1_get": {
                          "operator": "Variables[0] (ADF_1) || RETURN",
                          "displayLines": "ADF_1",
                          "constants": [],
                          "variables": [
                            "ADF_1"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        },
                        "ADF_3_get": {
                          "operator": "Variables[0] (ADF_3) || RETURN",
                          "displayLines": "ADF_3",
                          "constants": [],
                          "variables": [
                            "ADF_3"
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0025",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3",
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
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
                        "value1": "DV_FantasticStory_PlusAbility_0027",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub8"
                        }
                      ]
                    }
                  ]
                },
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub_preshow",
                      "valuePerStack": {
                        "ADF_3_get": {
                          "operator": "Variables[0] (ADF_3) || RETURN",
                          "displayLines": "ADF_3",
                          "constants": [],
                          "variables": [
                            "ADF_3"
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0027",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub5[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub6",
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
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
                        "value1": "DV_FantasticStory_PlusAbility_0028",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub7"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0022",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub2",
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub_preshow",
                  "valuePerStack": {
                    "ADF_3_get": {
                      "operator": "Variables[0] (ADF_3) || RETURN",
                      "displayLines": "ADF_3",
                      "constants": [],
                      "variables": [
                        "ADF_3"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0022",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub2",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
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
                    "value1": "DV_FantasticStory_PlusAbility_0025",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        }
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0026",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Nihility"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_Plus6_WarlockCount",
                          "value": {
                            "operator": "Variables[0] (DV_Plus6_WarlockCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(DV_Plus6_WarlockCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "DV_Plus6_WarlockCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_Plus6_WarlockCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub4[<span class=\"descriptionNumberColor\">Verification</span>]",
                          "valuePerStack": {
                            "DmgAddedRatio": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0026_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0026_ADF_1"
                              ]
                            },
                            "SpdAddedRatio": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0026_ADF_2) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_2",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0026_ADF_2"
                              ]
                            }
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
                    "value1": "DV_FantasticStory_PlusAbility_0027",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub5[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub6",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub8"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0028",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub7"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [
            "ADF_1",
            "ADF_2",
            "ADF_3",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0021",
            "DV_FantasticStory_PlusAbility_0022",
            "DV_FantasticStory_PlusAbility_0023",
            "DV_FantasticStory_PlusAbility_0024",
            "DV_FantasticStory_PlusAbility_0025",
            "DV_FantasticStory_PlusAbility_0026",
            "DV_FantasticStory_PlusAbility_0027",
            "DV_FantasticStory_PlusAbility_0028"
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0018": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0018",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0018",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0018_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0017": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0017",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0017",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0017_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0016": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0016",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0016",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0016_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0016_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0016_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0015": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0015",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0015",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0015_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0015_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0014": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0014",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0014",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0014_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0013": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0013",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0013",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0013_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0013_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0012": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0012",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0012",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0012_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0011": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0011",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_0011",
          "value": 1
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0010_Deathrattle_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0010_Deathrattle_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert": {
      "fileName": "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_plus5_get",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "valueType": "Layer",
              "variableName": "Plus5_Layer",
              "modifierName": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Plus5_Bomb_Damage",
              "value": {
                "operator": "Variables[0] (Bomb_Damage_get) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_plus5_ADF_1_get) || MUL || ADD || MUL || RETURN",
                "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))",
                "constants": [
                  1
                ],
                "variables": [
                  "Bomb_Damage_get",
                  "Plus5_Layer",
                  "DV_plus5_ADF_1_get"
                ]
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
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                  "displayLines": "Plus5_Bomb_Damage",
                  "constants": [],
                  "variables": [
                    "Plus5_Bomb_Damage"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Plus5_Layer",
                      "modifierName": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Plus5_Layer",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Plus5_Bomb_Damage",
                  "value": {
                    "operator": "Variables[0] (Bomb_Damage_get) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_plus5_ADF_1_get) || MUL || ADD || MUL || RETURN",
                    "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Bomb_Damage_get",
                      "Plus5_Layer",
                      "DV_plus5_ADF_1_get"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                      "displayLines": "Plus5_Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Plus5_Bomb_Damage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_plus7_get",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Bomb_Damage_get) || Constants[0] (1) || Variables[1] (DV_plus7_ADF_1_get) || ADD || MUL || RETURN",
                      "displayLines": "(Bomb_Damage_get * (1 + DV_plus7_ADF_1_get))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "Bomb_Damage_get",
                        "DV_plus7_ADF_1_get"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Bomb_Damage_get) || RETURN",
                      "displayLines": "Bomb_Damage_get",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage_get"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0010": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0010",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0011"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0012"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0013"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0014"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0015"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0016"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0017"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_0018"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0010",
          "valuePerStack": {
            "ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "TempHP": {
              "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
              "displayLines": "BattleEvent_BaseHP",
              "constants": [],
              "variables": [
                "BattleEvent_BaseHP"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp[<span class=\"descriptionNumberColor\">Splash</span>]",
          "stackType": "Replace",
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
                    "operator": "Variables[0] (DmgAddedRatio) || RETURN",
                    "displayLines": "DmgAddedRatio",
                    "constants": [],
                    "variables": [
                      "DmgAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Splash"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp[<span class=\"descriptionNumberColor\">Rupture</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_0013_layerDmg"
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
                  "variableName": "DV_FantasticStory_PlusAbility_0013_layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_PlusAbility_0013_layerDmg",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0013_layer) || Variables[1] (DmgAddedRatio) || MUL || RETURN",
                    "displayLines": "(DV_FantasticStory_PlusAbility_0013_layer * DmgAddedRatio)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0013_layer",
                      "DmgAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Ultimate deals <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0013_layerDmg</span> more DMG.",
          "type": "Buff",
          "effectName": "Ultimate DMG Boost",
          "statusName": "Rupture"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Plus5_Layer",
                      "modifierName": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Plus5_Bomb_Damage",
                      "value": {
                        "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_FantasticStory_PlusAbility_0015_ADF_1) || MUL || ADD || MUL || RETURN",
                        "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Bomb_Damage",
                          "Plus5_Layer",
                          "DV_FantasticStory_PlusAbility_0015_ADF_1"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                          "displayLines": "Plus5_Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Plus5_Bomb_Damage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valueType": "Layer",
                              "variableName": "Plus5_Layer",
                              "modifierName": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                              "multiplier": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Plus5_Layer",
                              "value": 0
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Plus5_Bomb_Damage",
                          "value": {
                            "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_FantasticStory_PlusAbility_0015_ADF_1) || MUL || ADD || MUL || RETURN",
                            "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Bomb_Damage",
                              "Plus5_Layer",
                              "DV_FantasticStory_PlusAbility_0015_ADF_1"
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                              "displayLines": "Plus5_Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Plus5_Bomb_Damage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0017",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1) || Variables[1] (DV_FantasticStory_PlusAbility_0017_ADF_1) || ADD || MUL || RETURN",
                              "displayLines": "(Bomb_Damage * (1 + DV_FantasticStory_PlusAbility_0017_ADF_1))",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "Bomb_Damage",
                                "DV_FantasticStory_PlusAbility_0017_ADF_1"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                            "displayLines": "Bomb_MaxLayer",
                            "constants": [],
                            "variables": [
                              "Bomb_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "operator": "Variables[0] (Bomb_Damage_Initial) || RETURN",
                              "displayLines": "Bomb_Damage_Initial",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage_Initial"
                              ]
                            },
                            "Bomb_MaxLayer": {
                              "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                              "displayLines": "Bomb_MaxLayer",
                              "constants": [],
                              "variables": [
                                "Bomb_MaxLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (Bomb_Damage) || RETURN",
                              "displayLines": "Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
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
                  "variableName": "Bomb_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage_Initial",
                  "value": {
                    "operator": "Variables[0] (Bomb_Damage) || RETURN",
                    "displayLines": "Bomb_Damage",
                    "constants": [],
                    "variables": [
                      "Bomb_Damage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage",
                  "value": {
                    "operator": "Variables[0] (Bomb_Damage) || Variables[1] (Bomb_Layer) || MUL || RETURN",
                    "displayLines": "(Bomb_Damage * Bomb_Layer)",
                    "constants": [],
                    "variables": [
                      "Bomb_Damage",
                      "Bomb_Layer"
                    ]
                  }
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0010_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0013",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp[<span class=\"descriptionNumberColor\">Rupture</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0013_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_0013_ADF_2"
                        ]
                      },
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0013_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0013_ADF_1"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        },
                        "DV_plus5_get": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0015",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0015"
                          ]
                        },
                        "DV_plus5_ADF_1_get": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0015_ADF_1"
                          ]
                        },
                        "DV_plus5_ADF_2_get": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_2) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0015_ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0017",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "valuePerStack": {
                            "Bomb_Damage_get": {
                              "operator": "Variables[0] (Bomb_Damage) || RETURN",
                              "displayLines": "Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage"
                              ]
                            },
                            "DV_plus7_get": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0017) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0017",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0017"
                              ]
                            },
                            "DV_plus7_ADF_1_get": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0017_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0017_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0017_ADF_1"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                            "displayLines": "Bomb_MaxLayer",
                            "constants": [],
                            "variables": [
                              "Bomb_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "operator": "Variables[0] (Bomb_Damage_Initial) || RETURN",
                              "displayLines": "Bomb_Damage_Initial",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage_Initial"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "valuePerStack": {
                            "Bomb_Damage_get": {
                              "operator": "Variables[0] (Bomb_Damage) || RETURN",
                              "displayLines": "Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When this unit's turn starts or when this unit is defeated, this unit and adjacent targets take a set amount of DMG based on the active number of Shatter stacks.",
          "type": "Debuff",
          "effectName": "Shatter",
          "statusName": "Shatter"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0011",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
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
                        "value1": "DV_BeingHitCount",
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
                          "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                            "displayLines": "ADF_2_get_pre",
                            "constants": [],
                            "variables": [
                              "ADF_2_get_pre"
                            ]
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                              "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                              "constants": [],
                              "variables": [
                                "TempHP_get_pre",
                                "ADF_1_get_pre"
                              ]
                            },
                            "Bomb_MaxLayer": {
                              "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                              "displayLines": "ADF_2_get_pre",
                              "constants": [],
                              "variables": [
                                "ADF_2_get_pre"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_BeingHitCount",
                          "value": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_0014",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
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
                                "value1": "DV_BeingHitCount",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Random Chance",
                                "chance": {
                                  "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0018) || RETURN",
                                  "displayLines": "DV_FantasticStory_PlusAbility_0018",
                                  "constants": [],
                                  "variables": [
                                    "DV_FantasticStory_PlusAbility_0018"
                                  ]
                                }
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
                              "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                "displayLines": "ADF_2_get_pre",
                                "constants": [],
                                "variables": [
                                  "ADF_2_get_pre"
                                ]
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                                  "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                                  "constants": [],
                                  "variables": [
                                    "TempHP_get_pre",
                                    "ADF_1_get_pre"
                                  ]
                                },
                                "Bomb_MaxLayer": {
                                  "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                  "displayLines": "ADF_2_get_pre",
                                  "constants": [],
                                  "variables": [
                                    "ADF_2_get_pre"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_BeingHitCount",
                              "value": 0
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_0018",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
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
                                "value1": "DV_BeingHitCount",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_BeingHitCount",
                                  "value": 0
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": {
                                      "operator": "Variables[0] (DV_BeingHitCount) || RETURN",
                                      "displayLines": "DV_BeingHitCount",
                                      "constants": [],
                                      "variables": [
                                        "DV_BeingHitCount"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                                      "stackLimit": {
                                        "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                        "displayLines": "ADF_2_get_pre",
                                        "constants": [],
                                        "variables": [
                                          "ADF_2_get_pre"
                                        ]
                                      },
                                      "valuePerStack": {
                                        "Bomb_Damage": {
                                          "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                                          "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                                          "constants": [],
                                          "variables": [
                                            "TempHP_get_pre",
                                            "ADF_1_get_pre"
                                          ]
                                        },
                                        "Bomb_MaxLayer": {
                                          "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                          "displayLines": "ADF_2_get_pre",
                                          "constants": [],
                                          "variables": [
                                            "ADF_2_get_pre"
                                          ]
                                        }
                                      },
                                      "addStacksPerTrigger": 1
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "DV_BeingHitCount",
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
                                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                    "displayLines": "ADF_2_get_pre",
                                    "constants": [],
                                    "variables": [
                                      "ADF_2_get_pre"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "Bomb_Damage": {
                                      "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                                      "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                                      "constants": [],
                                      "variables": [
                                        "TempHP_get_pre",
                                        "ADF_1_get_pre"
                                      ]
                                    },
                                    "Bomb_MaxLayer": {
                                      "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                      "displayLines": "ADF_2_get_pre",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2_get_pre"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_BeingHitCount",
                                  "value": 0
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
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
                      "valuePerStack": {
                        "TempHP_get_pre": {
                          "operator": "Variables[0] (TempHP_get) || RETURN",
                          "displayLines": "TempHP_get",
                          "constants": [],
                          "variables": [
                            "TempHP_get"
                          ]
                        },
                        "ADF_1_get_pre": {
                          "operator": "Variables[0] (ADF_1_get) || RETURN",
                          "displayLines": "ADF_1_get",
                          "constants": [],
                          "variables": [
                            "ADF_1_get"
                          ]
                        },
                        "ADF_2_get_pre": {
                          "operator": "Variables[0] (ADF_2_get) || RETURN",
                          "displayLines": "ADF_2_get",
                          "constants": [],
                          "variables": [
                            "ADF_2_get"
                          ]
                        }
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0014",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
                      "valuePerStack": {
                        "TempHP_get_pre": {
                          "operator": "Variables[0] (TempHP_get) || RETURN",
                          "displayLines": "TempHP_get",
                          "constants": [],
                          "variables": [
                            "TempHP_get"
                          ]
                        },
                        "ADF_1_get_pre": {
                          "operator": "Variables[0] (ADF_1_get) || RETURN",
                          "displayLines": "ADF_1_get",
                          "constants": [],
                          "variables": [
                            "ADF_1_get"
                          ]
                        },
                        "ADF_2_get_pre": {
                          "operator": "Variables[0] (ADF_2_get) || RETURN",
                          "displayLines": "ADF_2_get",
                          "constants": [],
                          "variables": [
                            "ADF_2_get"
                          ]
                        }
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0018",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
                      "valuePerStack": {
                        "TempHP_get_pre": {
                          "operator": "Variables[0] (TempHP_get) || RETURN",
                          "displayLines": "TempHP_get",
                          "constants": [],
                          "variables": [
                            "TempHP_get"
                          ]
                        },
                        "ADF_1_get_pre": {
                          "operator": "Variables[0] (ADF_1_get) || RETURN",
                          "displayLines": "ADF_1_get",
                          "constants": [],
                          "variables": [
                            "ADF_1_get"
                          ]
                        },
                        "ADF_2_get_pre": {
                          "operator": "Variables[0] (ADF_2_get) || RETURN",
                          "displayLines": "ADF_2_get",
                          "constants": [],
                          "variables": [
                            "ADF_2_get"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    },
                    "ADF_1_get": {
                      "operator": "Variables[0] (ADF_1) || RETURN",
                      "displayLines": "ADF_1",
                      "constants": [],
                      "variables": [
                        "ADF_1"
                      ]
                    },
                    "ADF_2_get": {
                      "operator": "Variables[0] (ADF_2) || RETURN",
                      "displayLines": "ADF_2",
                      "constants": [],
                      "variables": [
                        "ADF_2"
                      ]
                    }
                  }
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_1_get": {
                          "operator": "Variables[0] (ADF_1) || RETURN",
                          "displayLines": "ADF_1",
                          "constants": [],
                          "variables": [
                            "ADF_1"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0016",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus6_sub"
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
                        "value1": "DV_FantasticStory_PlusAbility_0012",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0011) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0011",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0011"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (ADF_2) || RETURN",
                        "displayLines": "ADF_2",
                        "constants": [],
                        "variables": [
                          "ADF_2"
                        ]
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "operator": "Variables[0] (TempHP) || Variables[1] (ADF_1) || MUL || RETURN",
                          "displayLines": "(TempHP * ADF_1)",
                          "constants": [],
                          "variables": [
                            "TempHP",
                            "ADF_1"
                          ]
                        },
                        "Bomb_MaxLayer": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
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
                        "value1": "DV_FantasticStory_PlusAbility_0015",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_sub"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0012",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0011) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0011",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0011"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (ADF_2) || RETURN",
                                "displayLines": "ADF_2",
                                "constants": [],
                                "variables": [
                                  "ADF_2"
                                ]
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "operator": "Variables[0] (TempHP) || Variables[1] (ADF_1) || MUL || RETURN",
                                  "displayLines": "(TempHP * ADF_1)",
                                  "constants": [],
                                  "variables": [
                                    "TempHP",
                                    "ADF_1"
                                  ]
                                },
                                "Bomb_MaxLayer": {
                                  "operator": "Variables[0] (ADF_2) || RETURN",
                                  "displayLines": "ADF_2",
                                  "constants": [],
                                  "variables": [
                                    "ADF_2"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
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
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_sub"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0016",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus6_sub"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "ADF_1",
            "ADF_2",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0011",
            "DV_FantasticStory_PlusAbility_0012",
            "DV_FantasticStory_PlusAbility_0013",
            "DV_FantasticStory_PlusAbility_0014",
            "DV_FantasticStory_PlusAbility_0016",
            "DV_FantasticStory_PlusAbility_0018"
          ]
        }
      ]
    },
    "-1954781239_Modifiers": {
      "fileName": "-1954781239_Modifiers",
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
          "for": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub2",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub[<span class=\"descriptionNumberColor\">Free Writing</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub2"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub2"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0053",
            "DV_FantasticStory_PlusAbility_0052",
            "DV_FantasticStory_PlusAbility_0051"
          ],
          "description": "When attacking via using Ultimate, ignore the enemy targets' Weakness to deal Toughness Reduction.",
          "type": "Buff",
          "statusName": "Free Writing",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0050_plus2_sub[<span class=\"descriptionNumberColor\">Picturesque</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_0052_ADF_1"
                        },
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_0052_ADF_2"
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
            "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0053",
            "DV_FantasticStory_PlusAbility_0052",
            "DV_FantasticStory_PlusAbility_0051"
          ],
          "description": "Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0052_ADF_1</span>. Follow-Up ATKs' Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0052_ADF_2</span>.",
          "type": "Buff",
          "statusName": "Picturesque"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub2[<span class=\"descriptionNumberColor\">Arioso</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_0051_ADF_1"
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
            "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0053",
            "DV_FantasticStory_PlusAbility_0052",
            "DV_FantasticStory_PlusAbility_0051"
          ],
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0051_ADF_1</span>.",
          "type": "Debuff",
          "effectName": "Arioso",
          "statusName": "Arioso"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub[<span class=\"descriptionNumberColor\">Arioso</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Super Break"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FeverBreakDmgFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
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
                        "value1": "DV_FeverBreakDmgFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_AttackCount",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_0051_ADF_2) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum + DV_FantasticStory_PlusAbility_0051_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0050_CountSum",
                          "DV_FantasticStory_PlusAbility_0051_ADF_2"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FeverBreakDmgFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_AttackCount",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_AttackCount",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0053",
            "DV_FantasticStory_PlusAbility_0052",
            "DV_FantasticStory_PlusAbility_0051"
          ],
          "description": "If Super Break DMG is dealt to enemies after using an attack, additionally charges Whimsicality by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0051_ADF_2</span> points.",
          "type": "Buff",
          "statusName": "Arioso"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0040_plus2_sub[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "_DamageUpRatio"
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_0042_ADF_2) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + DV_FantasticStory_PlusAbility_0042_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_0040_CountSum",
                          "DV_FantasticStory_PlusAbility_0042_ADF_2"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_DamageUpRatio"
          ],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0043",
            "DV_FantasticStory_PlusAbility_0042",
            "DV_FantasticStory_PlusAbility_0041"
          ],
          "description": "Increases DMG dealt by Ultimate by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0042_ADF_1</span>. After the Ultimate is cast, Whimsicality additionally gains <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0042_ADF_2</span> point(s) of Charge.",
          "type": "Buff",
          "effectName": "Ultimate DMG Boost",
          "statusName": "Ultimate DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0030_plus6_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_DamageSum",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
                      "value": {
                        "operator": "Variables[0] (_DamageSum) || Variables[1] (_DamageSumRatio) || MUL || Variables[2] (DV_FantasticStory_BaseAbility_0030_DamageSum) || ADD || RETURN",
                        "displayLines": "((_DamageSum * _DamageSumRatio) + DV_FantasticStory_BaseAbility_0030_DamageSum)",
                        "constants": [],
                        "variables": [
                          "_DamageSum",
                          "_DamageSumRatio",
                          "DV_FantasticStory_BaseAbility_0030_DamageSum"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_DamageSumRatio"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
            "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0036",
            "DV_FantasticStory_PlusAbility_0035",
            "DV_FantasticStory_PlusAbility_0034",
            "DV_FantasticStory_PlusAbility_0033",
            "DV_FantasticStory_PlusAbility_0032",
            "DV_FantasticStory_PlusAbility_0031"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "description": "This unit has <span class=\"descriptionNumberColor\">EntityStockSPForShow</span> points of extra Energy. This will be consumed first when using the Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                          "displayLines": "(EntityMaxSP - _CurrentSP)",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP",
                            "_CurrentSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || RETURN",
                            "displayLines": "EntityStockSP",
                            "constants": [],
                            "variables": [
                              "EntityStockSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                            "displayLines": "(EntityMaxSP - _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
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
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0034",
            "DV_FantasticStory_PlusAbility_0035"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (_AddSP) || Variables[2] (EntityMaxSP) || MUL || ADD || RETURN",
                        "displayLines": "(EntityCurrentSP + (_AddSP * EntityMaxSP))",
                        "constants": [],
                        "variables": [
                          "EntityCurrentSP",
                          "_AddSP",
                          "EntityMaxSP"
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
                        "value1": "EntityCurrentSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || RETURN",
                          "displayLines": "EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (_AddSP) || Variables[1] (EntityMaxSP) || MUL || RETURN",
                            "displayLines": "(_AddSP * EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "_AddSP",
                              "EntityMaxSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityCurrentSP",
                              "EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityCurrentSP",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_AddSP"
          ],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0034",
            "DV_FantasticStory_PlusAbility_0035"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_plus6_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0016_ADF_3)"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp[<span class=\"descriptionNumberColor\">Splash</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0016_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_0016_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_0016_ADF_2"
                        ]
                      },
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0016_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0016_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0016_ADF_1"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0016",
            "DV_FantasticStory_PlusAbility_0014",
            "DV_FantasticStory_PlusAbility_0013",
            "DV_FantasticStory_PlusAbility_0012"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Ability Target Lock}}"
              },
              "mustBeAlive2": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (DV_FantasticStory_PlusAbility_0016_ADF_3) || SUB || RETURN",
                "displayLines": "(0 - DV_FantasticStory_PlusAbility_0016_ADF_3)",
                "constants": [
                  0
                ],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0016_ADF_3"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_plus5_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                        "value1": "DV_FantasticStory_PlusAbility_0015",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_0015_ADF_2"
                        ]
                      },
                      "valuePerStack": {
                        "ReceiveDmgRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0015_ADF_1"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
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
                        "value1": "DV_FantasticStory_PlusAbility_0015",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_0015_ADF_2"
                        ]
                      },
                      "valuePerStack": {
                        "ReceiveDmgRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0015_ADF_1"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0016",
            "DV_FantasticStory_PlusAbility_0014",
            "DV_FantasticStory_PlusAbility_0013",
            "DV_FantasticStory_PlusAbility_0012"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Current_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TotalDmgRatio",
                  "value": {
                    "operator": "Variables[0] (_Current_Layer) || Variables[1] (ReceiveDmgRatio) || MUL || RETURN",
                    "displayLines": "(_Current_Layer * ReceiveDmgRatio)",
                    "constants": [],
                    "variables": [
                      "_Current_Layer",
                      "ReceiveDmgRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (TotalDmgRatio) || RETURN",
                    "displayLines": "TotalDmgRatio",
                    "constants": [],
                    "variables": [
                      "TotalDmgRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ReceiveDmgRatio"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0012",
            "DV_FantasticStory_PlusAbility_0013",
            "DV_FantasticStory_PlusAbility_0014",
            "DV_FantasticStory_PlusAbility_0016"
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">TotalDmgRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Scalded"
        }
      ],
      "references": []
    }
  }
}