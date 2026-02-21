const configAbility = {
  "fileName": "4013017_Monster_W4_Claymore_LocalLegend03_PassiveAbilityInitiate",
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
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        },
        "MDF_CrackedEffect": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[5]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[5]]}"
          ]
        },
        "MDF_DamageResistance": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
          ]
        },
        "MDF_ModifySP": {
          "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[4]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_DelayAddedRatio",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill03[15]]}) || RETURN",
        "displayLines": "{[PassiveSkill03[15]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill03[15]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[13]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[13]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[13]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[14]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[14]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[14]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[11]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[11]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[11]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[12]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[12]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[12]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[9]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[9]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[9]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[10]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[10]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[10]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[7]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[7]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[7]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[8]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[8]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[8]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[6]]}"
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
            "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
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
                      "operator": "Variables[0] ({[PassiveSkill02[7]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[7]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[7]]}"
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