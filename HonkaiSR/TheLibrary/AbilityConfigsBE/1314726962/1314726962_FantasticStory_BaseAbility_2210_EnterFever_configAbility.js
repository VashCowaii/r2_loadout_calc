const configAbility = {
  "fileName": "1314726962_FantasticStory_BaseAbility_2210_EnterFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_EnterFever_P1_ElationPoint",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || RETURN",
        "displayLines": "ADF_1_Get",
        "constants": [],
        "variables": [
          "ADF_1_Get"
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_2_Get) || RETURN",
        "displayLines": "ADF_2_Get",
        "constants": [],
        "variables": [
          "ADF_2_Get"
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_3_Get) || RETURN",
        "displayLines": "ADF_3_Get",
        "constants": [],
        "variables": [
          "ADF_3_Get"
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_4_Get) || RETURN",
        "displayLines": "ADF_4_Get",
        "constants": [],
        "variables": [
          "ADF_4_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1379313056\">Modifier_FantasticStory_BaseAbility_2210_EnterFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1205308237\">Modifier_FantasticStory_BaseAbility_2210_ToBE_02</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1647830580\">Modifier_FantasticStory_BaseAbility_2210_ToBE</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Anyone]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_CanTrigger",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                      "value": "MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "FantasticStory_BaseAbility_2210"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTrigger",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "FantasticStory_BaseAbility_2210"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTrigger",
                  "value": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__1379313056\">Modifier_FantasticStory_BaseAbility_2210_EnterFever</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1219408339\">Modifier_FantasticStory_BaseAbility_2210_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                  "valuePerStack": {
                    "DV_Ratio_Get": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio"
                      ]
                    }
                  }
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1219408339\">Modifier_FantasticStory_BaseAbility_2210_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                  "valuePerStack": {
                    "DV_Ratio_Get": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2210_EnterFever_P3_Ratio"
                      ]
                    }
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 70001,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1647830580\">Modifier_FantasticStory_BaseAbility_2210_ToBE</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1205308237\">Modifier_FantasticStory_BaseAbility_2210_ToBE_02</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio"
                          ]
                        }
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Battle Event",
                      "teamName": "Neutral Team",
                      "eventID": 70001,
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "canDupe": true,
                      "variables": null,
                      "whenCreated": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1647830580\">Modifier_FantasticStory_BaseAbility_2210_ToBE</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio) || RETURN",
                              "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_BaseAbility_2210_EnterFever_P2_Ratio"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1205308237\">Modifier_FantasticStory_BaseAbility_2210_ToBE_02</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio) || RETURN",
                              "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
                  "variables": {
                    "TryStartElationTime_OverrideElationPoint": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P1_ElationPoint) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P1_ElationPoint",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2210_EnterFever_P1_ElationPoint"
                      ]
                    },
                    "TryStartElationTime_ElationTimeIsNoConsume": 1
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TryStartElationTime_CustomTag",
                      "value": "FantasticStory_BaseAbility_2210"
                    }
                  ]
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1219408339\">Modifier_FantasticStory_BaseAbility_2210_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 70001,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1205308237\">Modifier_FantasticStory_BaseAbility_2210_ToBE_02</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Battle Event ID",
                    "ID": 70001,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1205308237\">Modifier_FantasticStory_BaseAbility_2210_ToBE_02</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2210_EnterFever_P4_Ratio"
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
      "latentQueue": []
    }
  ]
}