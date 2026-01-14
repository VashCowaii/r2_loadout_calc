const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Memosprite_PlayerBoyServant_30_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Memosprite_PlayerBoyServant_30_Passive_Performance"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "PlayerBoy_30_TeamSP[<span class=\"descriptionNumberColor\">Charge</span>]",
      "counter": {
        "operator": "Variables[0] (CurEnergy) || RETURN",
        "displayLines": "CurEnergy",
        "constants": [],
        "variables": [
          "CurEnergy"
        ]
      },
      "valuePerStack": {
        "MDF_Max": 1
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (CurEnergy) || RETURN",
        "displayLines": "CurEnergy",
        "constants": [],
        "variables": [
          "CurEnergy"
        ]
      },
      "target": "Caster's Summoner",
      "maximum": {
        "operator": "Variables[0] (MDF_Max) || RETURN",
        "displayLines": "MDF_Max",
        "constants": [],
        "variables": [
          "MDF_Max"
        ]
      },
      "assignState": "True",
      "bar#": "Progress"
    },
    {
      "name": "Force Target-Lock on Target",
      "target": "Caster",
      "enable": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Memosprite_PlayerBoyServant_30_Eidolon1",
          "referenceModifier": "MReference_Empty"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoyServant_30_BreakFlag",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Owner of this Modifier",
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_PlayerBoyServant_30_Passive_Performance",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster's Summoner"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "All Hostile Entities (AOE)(ALL)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "M_PlayerBoyServant_30_BreakFlag"
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
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "M_PlayerBoyServant_30_BreakFlag"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "DisableAction"
                  }
                ],
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "DisableAction"
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
      "for": "Memosprite_PlayerBoyServant_30_Passive",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "target": "Caster's Summoner",
              "maximum": {
                "operator": "Variables[0] (MDF_Max) || RETURN",
                "displayLines": "MDF_Max",
                "constants": [],
                "variables": [
                  "MDF_Max"
                ]
              },
              "assignState": "False",
              "bar#": "Progress"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CurEnergy",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurEnergy",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_Max) || RETURN",
                      "displayLines": "MDF_Max",
                      "constants": [],
                      "variables": [
                        "MDF_Max"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurEnergy",
                      "value": {
                        "operator": "Variables[0] (MDF_Max) || RETURN",
                        "displayLines": "MDF_Max",
                        "constants": [],
                        "variables": [
                          "MDF_Max"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurEnergy",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_Max) || RETURN",
                      "displayLines": "MDF_Max",
                      "constants": [],
                      "variables": [
                        "MDF_Max"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Turn Is",
                            "target": "Caster"
                          },
                          {
                            "name": "Has Modifier",
                            "target": "Caster",
                            "modifier": "M_PlayerBoyServant_30_EnableAbility",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": "Caster",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_PlayerBoyServant_30_EnableAbility"
                    }
                  ]
                },
                {
                  "name": "Define Modifier Variable",
                  "target": "Caster",
                  "modifierName": "PlayerBoy_30_TeamSP[<span class=\"descriptionNumberColor\">Charge</span>]",
                  "value": {
                    "operator": "Variables[0] (CurEnergy) || RETURN",
                    "displayLines": "CurEnergy",
                    "constants": [],
                    "variables": [
                      "CurEnergy"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurEnergy) || RETURN",
                    "displayLines": "CurEnergy",
                    "constants": [],
                    "variables": [
                      "CurEnergy"
                    ]
                  },
                  "target": "Caster's Summoner"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Memosprite_PlayerBoyServant_30_CritDmgUp[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
                  "valuePerStack": {
                    "MDF_PropertyConvert": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "MDF_PropertyBase": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
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
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "Memosprite_PlayerBoyServant_30_CritDmgUp[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyConvert": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_PropertyBase": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          }
        }
      ]
    }
  ]
}