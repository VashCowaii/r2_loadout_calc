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
        "displayLines": "TargetCharacterID"
      },
      "caseTasks": [
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
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1409 (Hyacine)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-588160151\">Memosprite_CyreneServant_AmazingBonus_Hyacine</a>[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
          "valuePerStack": {
            "MDF_HyacineRatio": {
              "displayLines": "0.72"
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
            "displayLines": "24"
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
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterID": "1409 (Hyacine)"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-588160151\">Memosprite_CyreneServant_AmazingBonus_Hyacine</a>[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
              "valuePerStack": {
                "MDF_HyacineRatio": {
                  "displayLines": "0.72"
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
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1410 (Hysilens)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-716696180\">Memosprite_CyreneServant_AmazingBonus_Harscyline</a>[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]",
          "valuePerStack": {
            "MDF_HarscylineRatio": {
              "displayLines": "1.2"
            },
            "MDF_DotRatio1": {
              "displayLines": "0.6"
            },
            "MDF_DotRatio2": {
              "displayLines": "0.8"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-814125319\">Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub</a>[<span class=\"descriptionNumberColor\">Flowing Warmth</span>]",
          "valuePerStack": {
            "MDF_SPAdd": {
              "displayLines": "60"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1413 (Evernight)"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "displayLines": "0.12"
          },
          "variableName": "S02_ExtraRatio"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"81139284\">Memosprite_CyreneServant_AmazingBonus_Evernight</a>[<span class=\"descriptionNumberColor\">Ode to Time</span>]",
          "valuePerStack": {
            "MDF_EverNightRatio": {
              "displayLines": "0.18"
            },
            "MDF_ExtraPoint": {
              "displayLines": "1"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1414 (Dan Heng • Permansor Terrae)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1655562855\">Memosprite_CyreneServant_AmazingBonus_DanHengPT</a>[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "displayLines": "0.24"
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "displayLines": "3"
            },
            "MDF_DamageRatio": {
              "displayLines": "0.8"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
          "valuePerStack": {
            "MDF_Count": {
              "displayLines": "3"
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "displayLines": "3"
            },
            "MDF_DamageRatio": {
              "displayLines": "0.8"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>",
          "valuePerStack": {
            "MDF_ShieldRatio": {
              "displayLines": "1.5"
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterID": "1414 (Dan Heng • Permansor Terrae)"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1655562855\">Memosprite_CyreneServant_AmazingBonus_DanHengPT</a>[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "displayLines": "0.24"
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "displayLines": "3"
            },
            "MDF_DamageRatio": {
              "displayLines": "0.8"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterID": "1414 (Dan Heng • Permansor Terrae)"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
          "valuePerStack": {
            "MDF_Count": {
              "displayLines": "3"
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "displayLines": "3"
            },
            "MDF_DamageRatio": {
              "displayLines": "0.8"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1407 (Castorice)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-331286977\">Memosprite_CyreneServant_AmazingBonus_Castorice</a>[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
          "valuePerStack": {
            "MDF_SuicideRatioBase": {
              "displayLines": "0.0024"
            },
            "MDF_SuicideRatioBase2": {
              "displayLines": "0.0048"
            },
            "MDF_MaxEnergy": {
              "displayLines": "2"
            },
            "MDF_EnergyRatio": {
              "displayLines": "UnusedUnderThisBase_14223"
            },
            "MDF_TargetCount": {
              "displayLines": "2"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1408 (Phainon)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-484368069\">Memosprite_CyreneServant_AmazingBonus_Phainon</a>[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "displayLines": "0.16"
            },
            "MDF_LoseHP": {
              "displayLines": "0.15"
            },
            "MDF_Loop": {
              "displayLines": "5"
            },
            "MDF_DamagePercentage": {
              "displayLines": "0.1"
            },
            "MDF_EnergyNeed": {
              "displayLines": "12"
            },
            "MDF_PropertyRatio": {
              "displayLines": "0.12"
            },
            "MDF_PropertyRatioMax": {
              "displayLines": "0.72"
            },
            "MDF_Kindling": {
              "displayLines": "6"
            },
            "MDF_ChargeEnergy": {
              "displayLines": "4"
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
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "8007 (Trailblazer - Remembrance[M])"
          },
          {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "8008 (Trailblazer - Remembrance[F])"
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
          "modifier": "<a class=\"gModGreen\" id=\"937032379\">Memosprite_CyreneServant_AmazingBonus_Player</a>[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
          "valuePerStack": {
            "MDF_HPTransferRatio": {
              "displayLines": "0.16"
            },
            "MDF_CritTranferRatio": {
              "displayLines": "0.72"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1403 (Tribbie)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1569324375\">Memosprite_CyreneServant_AmazingBonus_Tribbie</a>[<span class=\"descriptionNumberColor\">Ode to Passage</span>]",
          "valuePerStack": {
            "MDF_TribbieLoopCount": {
              "displayLines": "1"
            },
            "MDF_IgnoreDef": {
              "displayLines": "0.12"
            },
            "MDF_TargetCount": {
              "displayLines": "3"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1404 (Mydei)"
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
            "modifier": "<a class=\"gModGreen\" id=\"-431200233\">Memosprite_CyreneServant_AmazingBonus_Mydeimos</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_AmazingBuff_Mydeimos_ModifierCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-431200233\">Memosprite_CyreneServant_AmazingBonus_Mydeimos</a>",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-431200233\">Memosprite_CyreneServant_AmazingBonus_Mydeimos</a>",
              "counter": {
                "displayLines": "(_AmazingBuff_Mydeimos_ModifierCount + 1)"
              },
              "valuePerStack": {
                "MDF_CritDamage": {
                  "displayLines": "2"
                },
                "MDF_ActionDelay": {
                  "displayLines": "1"
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
              "modifier": "<a class=\"gModGreen\" id=\"-431200233\">Memosprite_CyreneServant_AmazingBonus_Mydeimos</a>",
              "counter": 1,
              "valuePerStack": {
                "MDF_CritDamage": {
                  "displayLines": "2"
                },
                "MDF_ActionDelay": {
                  "displayLines": "1"
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
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1402 (Aglaea)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1654237423\">Memosprite_CyreneServant_AmazingBonus_Aglaea</a>[<span class=\"descriptionNumberColor\">Ode to Romance</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "displayLines": "0.72"
            },
            "MDF_IgnoreDef": {
              "displayLines": "0.36"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-313440704\">Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2</a>[<span class=\"descriptionNumberColor\">Romantic</span>]",
          "valuePerStack": {
            "MDF_SPAdd": {
              "displayLines": "70"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1405 (Anaxa)"
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "displayLines": "1"
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
          "set": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"84592407\">Memosprite_CyreneServant_AmazingBonus_Anaxa</a>[<span class=\"descriptionNumberColor\">Ode to Reason</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_AnaxaCount": {
              "displayLines": "3"
            },
            "MDF_DamageIncrease": {
              "displayLines": "0.4"
            },
            "MDF_AttackAddRatio": {
              "displayLines": "0.6"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1645914465\">Memosprite_CyreneServant_AmazingBonus_Anaxa_HaloMain</a>",
          "valuePerStack": {
            "MDF_AnaxaCount": {
              "displayLines": "3"
            },
            "MDF_DamageIncrease": {
              "displayLines": "0.4"
            },
            "MDF_AttackAddRatio": {
              "displayLines": "0.6"
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
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1406 (Cipher)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1139724287\">Memosprite_CyreneServant_AmazingBonus_Cipher</a>[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "displayLines": "0.36"
            },
            "MDF_DefDown": {
              "displayLines": "0.2"
            },
            "MDF_DefDown2": {
              "displayLines": "0.12"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1412 (Cerydra)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"609996020\">Memosprite_CyreneServant_AmazingBonus_Cerydra</a>[<span class=\"descriptionNumberColor\">Ode to Law</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "displayLines": "0.3"
            },
            "MDF_ExtraPoint": {
              "displayLines": "1"
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
          "modifier": "<a class=\"gModGreen\" id=\"42532209\">Memosprite_CyreneServant_AmazingBonus_Normal</a>[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_IncreaseRatio": {
              "displayLines": "0.4"
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}