const configAbility = {
  "fileName": "4013014_Monster_W4_Claymore_LocalLegend03_PassiveAbilityInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_227) || RETURN",
          "displayLines": "UnusedUnderThisBase_227",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_227"
          ]
        },
        "MDF_CrackedEffect": {
          "operator": "Variables[0] (UnusedUnderThisBase_408) || RETURN",
          "displayLines": "UnusedUnderThisBase_408",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_408"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] (UnusedUnderThisBase_409) || RETURN",
          "displayLines": "UnusedUnderThisBase_409",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_409"
          ]
        },
        "MDF_DamageResistance": {
          "operator": "Variables[0] (UnusedUnderThisBase_410) || RETURN",
          "displayLines": "UnusedUnderThisBase_410",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_410"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] (UnusedUnderThisBase_411) || RETURN",
          "displayLines": "UnusedUnderThisBase_411",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_411"
          ]
        },
        "MDF_ModifySP": {
          "operator": "Variables[0] (UnusedUnderThisBase_412) || RETURN",
          "displayLines": "UnusedUnderThisBase_412",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_412"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_DelayAddedRatio",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_413) || RETURN",
        "displayLines": "UnusedUnderThisBase_413",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_413"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426011,
        "compareType": "=",
        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_414) || RETURN",
            "displayLines": "UnusedUnderThisBase_414",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_414"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_415) || RETURN",
            "displayLines": "UnusedUnderThisBase_415",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_415"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_416) || RETURN",
            "displayLines": "UnusedUnderThisBase_416",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_416"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260100,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260101,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260120,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260121,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_417) || RETURN",
            "displayLines": "UnusedUnderThisBase_417",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_417"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_418) || RETURN",
            "displayLines": "UnusedUnderThisBase_418",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_418"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_419) || RETURN",
            "displayLines": "UnusedUnderThisBase_419",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_419"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260102,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260122,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_420) || RETURN",
            "displayLines": "UnusedUnderThisBase_420",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_420"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_421) || RETURN",
            "displayLines": "UnusedUnderThisBase_421",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_421"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_422) || RETURN",
            "displayLines": "UnusedUnderThisBase_422",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_422"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260103,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260123,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_77) || RETURN",
            "displayLines": "UnusedUnderThisBase_77",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_77"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_423) || RETURN",
            "displayLines": "UnusedUnderThisBase_423",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_423"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_424) || RETURN",
            "displayLines": "UnusedUnderThisBase_424",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_424"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260104,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260124,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_425) || RETURN",
            "displayLines": "UnusedUnderThisBase_425",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_425"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_426) || RETURN",
            "displayLines": "UnusedUnderThisBase_426",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_426"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_427) || RETURN",
            "displayLines": "UnusedUnderThisBase_427",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_427"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260105,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260125,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_428) || RETURN",
            "displayLines": "UnusedUnderThisBase_428",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_428"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_429) || RETURN",
            "displayLines": "UnusedUnderThisBase_429",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_429"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_430) || RETURN",
            "displayLines": "UnusedUnderThisBase_430",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_430"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260106,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260126,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_431) || RETURN",
            "displayLines": "UnusedUnderThisBase_431",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_431"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_432) || RETURN",
            "displayLines": "UnusedUnderThisBase_432",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_432"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_433) || RETURN",
            "displayLines": "UnusedUnderThisBase_433",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_433"
            ]
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
            "name": "Stage ID",
            "ID": 4260120,
            "compareType": ">=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260126,
            "compareType": "<=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1663989605\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (_DamageReduceRatio) || RETURN",
          "displayLines": "_DamageReduceRatio",
          "constants": [],
          "variables": [
            "_DamageReduceRatio"
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
      "modifier": "<a class=\"gModGreen\" id=\"2062098307\">Enemy_Heaven_ModelController_Claymore</a>"
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2062098307\">Enemy_Heaven_ModelController_Claymore</a>",
      "modifierFlags": [
        "STAT_AITargetHigherPriority"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Stage ID",
                "ID": 426011,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-883767978\">Monster_W4_Claymore_01_LocalLegend_DamageAdd</a>",
                  "valuePerStack": {
                    "MDF_DamageAdded": {
                      "operator": "Variables[0] (UnusedUnderThisBase_434) || RETURN",
                      "displayLines": "UnusedUnderThisBase_434",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_434"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              }
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
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
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
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Turn-State",
                        "invertCondition": true,
                        "states": [
                          "InsertAbilityActionPhase"
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "MaxLayer",
              "variableName": "MDF_MaxLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_LastLayer",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_LastLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_DamageReduceRatio) || RETURN",
                      "displayLines": "_DamageReduceRatio",
                      "constants": [],
                      "variables": [
                        "_DamageReduceRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck"
      ]
    }
  ]
}