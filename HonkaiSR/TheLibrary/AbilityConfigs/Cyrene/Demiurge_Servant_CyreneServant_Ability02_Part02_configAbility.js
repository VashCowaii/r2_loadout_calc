const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Varying Data",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_TargetCharacterID",
      "value": "TargetCharacterID",
      "context": "ContextAbility"
    },
    {
      "name": "Define Custom Variable with Varying Data",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "TargetCharacterID",
      "value": "TargetCharacterID"
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (TargetCharacterID) || RETURN",
        "displayLines": "TargetCharacterID",
        "constants": [],
        "variables": [
          "TargetCharacterID"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1402
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1403
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1404
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1405
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1406
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1407
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1408
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1409
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1410
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1412
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1413
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1414
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 8007
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 8008
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Group",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "group": "Chrysos",
        "invertCondition": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1409,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Hyacine"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
          "valuePerStack": {
            "MDF_HyacineRatio": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            }
          },
          "addStacksPerTrigger": 2
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Variables[0] (24) || RETURN",
            "displayLines": "24",
            "constants": [],
            "variables": [
              24
            ]
          },
          "isFixed": "(Fixed)"
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "conditions": {
            "name": "Character ID",
            "ID": 1409,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Hyacine"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
              "valuePerStack": {
                "MDF_HyacineRatio": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                }
              },
              "addStacksPerTrigger": 2
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1410,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Hysilens"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Harscyline[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]",
          "valuePerStack": {
            "MDF_HarscylineRatio": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "MDF_DotRatio1": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "MDF_DotRatio2": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub[<span class=\"descriptionNumberColor\">Flowing Warmth</span>]",
          "valuePerStack": {
            "MDF_SPAdd": {
              "operator": "Variables[0] (60) || RETURN",
              "displayLines": "60",
              "constants": [],
              "variables": [
                60
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1413,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Evernight"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "S02_ExtraRatio",
          "value": {
            "operator": "Variables[0] (0.12) || RETURN",
            "displayLines": "0.12",
            "constants": [],
            "variables": [
              0.12
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Evernight[<span class=\"descriptionNumberColor\">Ode to Time</span>]",
          "valuePerStack": {
            "MDF_EverNightRatio": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            },
            "MDF_ExtraPoint": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1414,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Dan Heng • Permansor Terrae"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "DanHengPT_LongLingAttackExtraDamage",
          "valuePerStack": {
            "MDF_Count": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "DanHengPT_LongLingExtraShield",
          "valuePerStack": {
            "MDF_ShieldRatio": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1414,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Dan Heng • Permansor Terrae"
                }
              }
            ]
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1414,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Dan Heng • Permansor Terrae"
                }
              }
            ]
          },
          "modifier": "DanHengPT_LongLingAttackExtraDamage",
          "valuePerStack": {
            "MDF_Count": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1407,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Castorice"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Castorice[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
          "valuePerStack": {
            "MDF_SuicideRatioBase": {
              "operator": "Variables[0] (0.0024) || RETURN",
              "displayLines": "0.0024",
              "constants": [],
              "variables": [
                0.0024
              ]
            },
            "MDF_SuicideRatioBase2": {
              "operator": "Variables[0] (0.0048) || RETURN",
              "displayLines": "0.0048",
              "constants": [],
              "variables": [
                0.0048
              ]
            },
            "MDF_MaxEnergy": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_EnergyRatio": {
              "operator": "Variables[0] (0) || RETURN",
              "displayLines": "0",
              "constants": [],
              "variables": [
                0
              ]
            },
            "MDF_TargetCount": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1408,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Phainon"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.16) || RETURN",
              "displayLines": "0.16",
              "constants": [],
              "variables": [
                0.16
              ]
            },
            "MDF_LoseHP": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_Loop": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            },
            "MDF_DamagePercentage": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_EnergyNeed": {
              "operator": "Variables[0] (12) || RETURN",
              "displayLines": "12",
              "constants": [],
              "variables": [
                12
              ]
            },
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_PropertyRatioMax": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "MDF_Kindling": {
              "operator": "Variables[0] (6) || RETURN",
              "displayLines": "6",
              "constants": [],
              "variables": [
                6
              ]
            },
            "MDF_ChargeEnergy": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Character ID",
            "ID": 8007,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Trailblazer - Remembrance[M]"
          },
          {
            "name": "Character ID",
            "ID": 8008,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Trailblazer - Remembrance[F]"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
          "valuePerStack": {
            "MDF_HPTransferRatio": {
              "operator": "Variables[0] (0.16) || RETURN",
              "displayLines": "0.16",
              "constants": [],
              "variables": [
                0.16
              ]
            },
            "MDF_CritTranferRatio": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1403,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Tribbie"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Tribbie[<span class=\"descriptionNumberColor\">Ode to Passage</span>]",
          "valuePerStack": {
            "MDF_TribbieLoopCount": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_IgnoreDef": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_TargetCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1404,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Mydei"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_AmazingBuff_Mydeimos_ModifierCount",
              "modifierName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
              "counter": {
                "operator": "Variables[0] (_AmazingBuff_Mydeimos_ModifierCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_AmazingBuff_Mydeimos_ModifierCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_AmazingBuff_Mydeimos_ModifierCount"
                ]
              },
              "valuePerStack": {
                "MDF_CritDamage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_ActionDelay": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
              "counter": 1,
              "valuePerStack": {
                "MDF_CritDamage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_ActionDelay": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
        "name": "Character ID",
        "ID": 1402,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Aglaea"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Aglaea[<span class=\"descriptionNumberColor\">Ode to Romance</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "MDF_IgnoreDef": {
              "operator": "Variables[0] (0.36) || RETURN",
              "displayLines": "0.36",
              "constants": [],
              "variables": [
                0.36
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2[<span class=\"descriptionNumberColor\">Romantic</span>]",
          "valuePerStack": {
            "MDF_SPAdd": {
              "operator": "Variables[0] (70) || RETURN",
              "displayLines": "70",
              "constants": [],
              "variables": [
                70
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1405,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Anaxa"
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa[<span class=\"descriptionNumberColor\">Ode to Reason</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_AnaxaCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_AttackAddRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa_HaloMain",
          "valuePerStack": {
            "MDF_AnaxaCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_AttackAddRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1406,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Cipher"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Cipher[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.36) || RETURN",
              "displayLines": "0.36",
              "constants": [],
              "variables": [
                0.36
              ]
            },
            "MDF_DefDown": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_DefDown2": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1412,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Cerydra"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra[<span class=\"descriptionNumberColor\">Ode to Law</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_ExtraPoint": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Group",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "group": "Chrysos",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Normal[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_IncreaseRatio": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}