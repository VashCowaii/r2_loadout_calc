const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_PassiveAbility01",
  "childAbilityList": [
    "TrailblazerPreservation_PlayerBoy_10_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "MDF_Energy_Count",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Rank06_Max_Layer",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2110431012\">MWPlayerBoy_10_Passive</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (8) || RETURN",
        "displayLines": "8",
        "constants": [],
        "variables": [
          8
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_Ratio",
          "value": {
            "operator": "Variables[0] (0.25) || RETURN",
            "displayLines": "0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_ExtraRatio",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_Ratio",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_ExtraRatio",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank02_Ratio",
          "value": {
            "operator": "Variables[0] (0.02) || RETURN",
            "displayLines": "0.02",
            "constants": [],
            "variables": [
              0.02
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank02_Value",
          "value": {
            "operator": "Variables[0] (27) || RETURN",
            "displayLines": "27",
            "constants": [],
            "variables": [
              27
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank02_Ratio",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank02_Value",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]"
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
          "value": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "MDF_Energy_Count",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">",
            "value2": 3.5
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 2,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "bar#": 2,
              "cooldown": 0
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Action Beats Overthinking"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1667806661\">PlayerBoy_10_PointB3</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__63956904\">MWPlayerBoy_10_ShieldAfterBeingHit</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1400516150\">MWPlayerBoy_10_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MWPlayerBoy_10_Shield_Value01": {
                  "operator": "Variables[0] (TB_PRES_OBJECT_UNUSED_1) || RETURN",
                  "displayLines": "TB_PRES_OBJECT_UNUSED_1",
                  "constants": [],
                  "variables": [
                    "TB_PRES_OBJECT_UNUSED_1"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1396744931\">MWPlayerBoy_10_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2110431012\">MWPlayerBoy_10_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]"
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "MDF_Energy_Count",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                  "value": {
                    "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                    "displayLines": "MDF_Energy_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Energy_Count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1196656931\">PlayerBoy_10_WeaponCharge_Free</a>[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">",
                    "value2": 3.5
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]"
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "MDF_Energy_Count",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Energy_Count",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                    "displayLines": "MDF_Energy_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Energy_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 2,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                    "displayLines": "MDF_Energy_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Energy_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "assignState": "True",
                  "bar#": 2,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Get Revived [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Rank06_Max_Layer"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1667806661\">PlayerBoy_10_PointB3</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1396744931\">MWPlayerBoy_10_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "duration": 1,
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
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
        "Rank06_Max_Layer"
      ]
    }
  ]
}