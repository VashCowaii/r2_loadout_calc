const configAbility = {
  "fileName": "Mem_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "Is_Copy",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": "[MEMOSPRITE(if Summoner) OR SUMMONER(if Memo) OF] Owner of this Modifier",
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": "[MEMOSPRITE(if Summoner) OR SUMMONER(if Memo) OF] Owner of this Modifier",
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy",
                  "referenceModifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                      "displayLines": "MDF_PropertyRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyRatio"
                      ]
                    },
                    "MDF_BasicDamagePercentage": {
                      "operator": "Variables[0] (MDF_BasicDamagePercentage) || RETURN",
                      "displayLines": "MDF_BasicDamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_BasicDamagePercentage"
                      ]
                    },
                    "MDF_PointB3_P1_Basic": {
                      "operator": "Variables[0] (MDF_PointB3_P1_Basic) || RETURN",
                      "displayLines": "MDF_PointB3_P1_Basic",
                      "constants": [],
                      "variables": [
                        "MDF_PointB3_P1_Basic"
                      ]
                    },
                    "MDF_PointB3_P2_Delta": {
                      "operator": "Variables[0] (MDF_PointB3_P2_Delta) || RETURN",
                      "displayLines": "MDF_PointB3_P2_Delta",
                      "constants": [],
                      "variables": [
                        "MDF_PointB3_P2_Delta"
                      ]
                    },
                    "MDF_PointB3_P3_Ratio": {
                      "operator": "Variables[0] (MDF_PointB3_P3_Ratio) || RETURN",
                      "displayLines": "MDF_PointB3_P3_Ratio",
                      "constants": [],
                      "variables": [
                        "MDF_PointB3_P3_Ratio"
                      ]
                    },
                    "MDF_PointB3_P4_Max": {
                      "operator": "Variables[0] (MDF_PointB3_P4_Max) || RETURN",
                      "displayLines": "MDF_PointB3_P4_Max",
                      "constants": [],
                      "variables": [
                        "MDF_PointB3_P4_Max"
                      ]
                    },
                    "MDF_Eidolon4_P2_ExtraDamagePercentage": {
                      "operator": "Variables[0] (MDF_Eidolon4_P2_ExtraDamagePercentage) || RETURN",
                      "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_Eidolon4_P2_ExtraDamagePercentage"
                      ]
                    },
                    "Is_Copy": 1
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Post-DMG Effect(like True DMG)",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": "Owner of this Modifier",
                  "variableName": "_originalDamage",
                  "value": "Result_FinalDamageBase",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_originalDamage",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || Variables[1] (_originalDamage) || MUL || RETURN",
                          "displayLines": "(MDF_DamagePercentage * _originalDamage)",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage",
                            "_originalDamage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": "Owner of this Modifier",
                      "isConvertedDMG": true,
                      "dealAfterOriginialHit": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                }
              ]
            },
            {
              "name": "Override Modifier Name",
              "target": "Owner of this Modifier",
              "modifierName": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy",
              "modifierNameUpdate": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "CRIT Rate increases by #2[i]%. For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to #1[i]% of the original DMG."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "TServant_PlayerBoyServant_30_RefreshDamagePercentage"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  },
                  {
                    "name": "Is Part Of",
                    "of": "Use Prior Target(s) Defined",
                    "target": "[MEMOSPRITE(if Summoner) OR SUMMONER(if Memo) OF] Owner of this Modifier",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TServant_PlayerBoyServant_30_RefreshDamagePercentage"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_PropertyRatio",
        "MDF_BasicDamagePercentage",
        "MDF_PointB3_P1_Basic",
        "MDF_PointB3_P2_Delta",
        "MDF_PointB3_P3_Ratio",
        "MDF_PointB3_P4_Max",
        "MDF_Rank04_P2_ExtraDamagePercentage"
      ],
      "latentQueue": [],
      "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_DamagePercentage</span> of the original DMG.",
      "type": "Buff",
      "effectName": "Mem's Support",
      "statusName": "Mem's Support",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "[MEMOSPRITE(if Summoner) OR SUMMONER(if Memo) OF] Owner of this Modifier",
          "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy",
          "refModifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": "[MEMOSPRITE OF] Owner of this Modifier"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "[MEMOSPRITE OF] Owner of this Modifier",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  }
                ],
                "invertCondition": true
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": "[SUMMONER OF] Owner of this Modifier"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "[SUMMONER OF] Owner of this Modifier",
                    "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  }
                ],
                "invertCondition": true
              }
            ]
          },
          "duration": -1,
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
              "displayLines": "MDF_PropertyRatio",
              "constants": [],
              "variables": [
                "MDF_PropertyRatio"
              ]
            },
            "MDF_BasicDamagePercentage": {
              "operator": "Variables[0] (MDF_BasicDamagePercentage) || RETURN",
              "displayLines": "MDF_BasicDamagePercentage",
              "constants": [],
              "variables": [
                "MDF_BasicDamagePercentage"
              ]
            },
            "MDF_PointB3_P1_Basic": {
              "operator": "Variables[0] (MDF_PointB3_P1_Basic) || RETURN",
              "displayLines": "MDF_PointB3_P1_Basic",
              "constants": [],
              "variables": [
                "MDF_PointB3_P1_Basic"
              ]
            },
            "MDF_PointB3_P2_Delta": {
              "operator": "Variables[0] (MDF_PointB3_P2_Delta) || RETURN",
              "displayLines": "MDF_PointB3_P2_Delta",
              "constants": [],
              "variables": [
                "MDF_PointB3_P2_Delta"
              ]
            },
            "MDF_PointB3_P3_Ratio": {
              "operator": "Variables[0] (MDF_PointB3_P3_Ratio) || RETURN",
              "displayLines": "MDF_PointB3_P3_Ratio",
              "constants": [],
              "variables": [
                "MDF_PointB3_P3_Ratio"
              ]
            },
            "MDF_PointB3_P4_Max": {
              "operator": "Variables[0] (MDF_PointB3_P4_Max) || RETURN",
              "displayLines": "MDF_PointB3_P4_Max",
              "constants": [],
              "variables": [
                "MDF_PointB3_P4_Max"
              ]
            },
            "MDF_Eidolon4_P2_ExtraDamagePercentage": {
              "operator": "Variables[0] (MDF_Eidolon4_P2_ExtraDamagePercentage) || RETURN",
              "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage",
              "constants": [],
              "variables": [
                "MDF_Eidolon4_P2_ExtraDamagePercentage"
              ]
            },
            "Is_Copy": 1
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_PlayerBoyServant_30_CritDmgUp[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "_propertyBase",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyRatio",
              "value": {
                "operator": "Variables[0] (_propertyBase) || Variables[1] (MDF_PropertyConvert) || MUL || Variables[2] (MDF_PropertyBase) || ADD || RETURN",
                "displayLines": "((_propertyBase * MDF_PropertyConvert) + MDF_PropertyBase)",
                "constants": [],
                "variables": [
                  "_propertyBase",
                  "MDF_PropertyConvert",
                  "MDF_PropertyBase"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyConvert",
        "MDF_PropertyBase"
      ],
      "latentQueue": [],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "Friends! Together!"
    },
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoyServant_30_EnableAbility",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Extra-Turn"
                  },
                  {
                    "name": "Compare: Target",
                    "target": "Owner of this Modifier",
                    "target2": "Current Action Owner"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Owner of this Modifier",
              "abilityName": "Skill01",
              "skillSlot": "Memosprite"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Hide",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Force Auto-Battle on Target",
              "target": "Owner of this Modifier",
              "enable": true
            },
            {
              "name": "Force Target-Lock on Target",
              "target": "Owner of this Modifier",
              "enable": true
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Owner of this Modifier",
              "abilityName": "Skill11",
              "skillSlot": "Memosprite"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Show",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Force Auto-Battle on Target",
              "target": "Owner of this Modifier"
            },
            {
              "name": "Force Target-Lock on Target",
              "target": "Owner of this Modifier"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start "
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_TeamSP[<span class=\"descriptionNumberColor\">Charge</span>]",
      "modifierFlags": [
        "RetainCountZero"
      ],
      "stackData": [
        "MDF_Max"
      ],
      "latentQueue": [],
      "description": "When Charge reaches <span class=\"descriptionNumberColor\">MDF_Max</span>, Mem immediately takes action and can use \"Lemme! Help You!\".",
      "type": "Other",
      "statusName": "Charge"
    }
  ],
  "references": []
}