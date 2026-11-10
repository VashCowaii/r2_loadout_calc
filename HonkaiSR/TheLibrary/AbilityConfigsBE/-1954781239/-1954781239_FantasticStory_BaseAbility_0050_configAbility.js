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
      "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0051",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0052",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0053",
      "scope": "ContextCaster"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(BattleEvent_BaseHP * 90)"
      },
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_RangeGap_1",
      "resetValue": {
        "displayLines": "(#ADF_1 * 0.33)"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_RangeGap_2",
      "resetValue": {
        "displayLines": "(#ADF_1 * 0.67)"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_RangeGap_3",
      "resetValue": {
        "displayLines": "#ADF_1"
      },
      "scope": "ContextCaster"
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
      "modifier": "<a class=\"gModGreen\" id=\"2041839191\">Modifier_FantasticStory_BaseAbility_0050</a>",
      "valuePerStack": {
        "ADF_1": {
          "displayLines": "#ADF_1"
        },
        "ADF_2": {
          "displayLines": "#ADF_2"
        },
        "ADF_3": {
          "displayLines": "#ADF_3"
        },
        "TempHP": {
          "displayLines": "BattleEvent_BaseHP"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1584027158\">Modifier_FantasticStory_BaseAbility_0050_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum + 1)"
              },
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2041839191\">Modifier_FantasticStory_BaseAbility_0050</a>",
      "stackType": "ReplaceByCaster",
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
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"-1584027158\">Modifier_FantasticStory_BaseAbility_0050_sub</a>"
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
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1584027158\">Modifier_FantasticStory_BaseAbility_0050_sub</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"937919550\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"805201127\">Modifier_FantasticStory_BaseAbility_0050_plus2_sub</a>[<span class=\"descriptionNumberColor\">Picturesque</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-28797912\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub</a>[<span class=\"descriptionNumberColor\">Free Writing</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"225763044\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
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
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
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
                    "includeUnselectable": true
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
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        },
                        "ADF_2_get": {
                          "displayLines": "ADF_2"
                        },
                        "ADF_3_get": {
                          "displayLines": "ADF_3"
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
                  "modifier": "<a class=\"gModGreen\" id=\"937919550\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"225763044\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"805201127\">Modifier_FantasticStory_BaseAbility_0050_plus2_sub</a>[<span class=\"descriptionNumberColor\">Picturesque</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-28797912\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub</a>[<span class=\"descriptionNumberColor\">Free Writing</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
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
                    "includeUnselectable": true
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
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        },
                        "ADF_2_get": {
                          "displayLines": "ADF_2"
                        },
                        "ADF_3_get": {
                          "displayLines": "ADF_3"
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
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "displayLines": "DV_RangeGap_1"
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                  },
                  "count": {
                    "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                  }
                }
              ],
              "onChange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                  },
                  "count": {
                    "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "displayLines": "DV_RangeGap_1"
              },
              "maxValue": {
                "displayLines": "DV_RangeGap_2"
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                  },
                  "count": {
                    "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                  }
                }
              ],
              "onChange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                  },
                  "count": {
                    "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "displayLines": "DV_RangeGap_2"
              },
              "maxValue": {
                "displayLines": "DV_RangeGap_3"
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                  },
                  "count": {
                    "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                  }
                }
              ],
              "onChange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                  },
                  "count": {
                    "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "displayLines": "DV_RangeGap_3"
              },
              "maxValue": 1000000000,
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": 1,
                  "count": 100
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
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
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        },
                        "ADF_2_get": {
                          "displayLines": "ADF_2"
                        },
                        "ADF_3_get": {
                          "displayLines": "ADF_3"
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "onChange": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": 1,
                  "count": 100
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}