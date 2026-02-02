const configAbility = {
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
}