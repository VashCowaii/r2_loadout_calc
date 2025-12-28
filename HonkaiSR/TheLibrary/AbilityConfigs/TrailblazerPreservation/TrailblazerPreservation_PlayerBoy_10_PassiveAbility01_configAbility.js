const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_PassiveAbility01",
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
      "on": "Caster"
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
      "to": "Caster",
      "modifier": "MWPlayerBoy_10_Passive"
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
          "to": "Caster",
          "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
        },
        {
          "name": "Define Modifier Variable",
          "target": "Caster",
          "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
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
          "on": "Caster",
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
          "to": "Caster",
          "modifier": "PlayerBoy_Weapon_Effect"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">",
            "value2": 3.5
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_ChangeAttack"
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
          "to": "Caster",
          "modifier": "PlayerBoy_10_PointB3"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_ShieldAfterBeingHit",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
              "to": "Caster",
              "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      "for": "MWPlayerBoy_10_Passive",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "MDF_Energy_Count",
                  "on": "Caster",
                  "value": 1
                },
                {
                  "name": "Define Modifier Variable",
                  "target": "Caster",
                  "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
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
                    "target": "Caster",
                    "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerBoy_Weapon_Effect"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
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
                      "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
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
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">",
                    "value2": 3.5
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerBoy_10_ChangeAttack"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "MDF_Energy_Count",
                  "on": "Caster",
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
              "to": "Caster",
              "modifier": "PlayerBoy_Weapon_Effect"
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
      "for": "PlayerBoy_10_PointB3",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Caster",
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
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
                  "to": "Caster",
                  "modifier": "MWPlayerBoy_10_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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