const configAbility = {
  "fileName": "Fugue_Modifiers",
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
      "for": "Fugue_PassiveAbility_ElementDamage",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "DealSuperBreakDamage_DamagePerformance",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "variables": {
                "value_0_DamagePercentage": {
                  "operator": "Variables[0] (MDF_SuperBreakDamagePercentage) || RETURN",
                  "displayLines": "MDF_SuperBreakDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_SuperBreakDamagePercentage"
                  ]
                }
              },
              "damageSequence": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PursuedDamage_PerformanceDelay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageBreak": {
                      "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                      "displayLines": "value_0_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "value_0_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Super Break"
                    ],
                    "attackType": "Break DMG"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SuperBreakDamagePercentage"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_PassiveAbility_ListenBreakDamage",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Fugue_PassiveAbility_ElementDamage",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "operator": "Variables[0] (MDF_PassiveDamage2) || RETURN",
                  "displayLines": "MDF_PassiveDamage2",
                  "constants": [],
                  "variables": [
                    "MDF_PassiveDamage2"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "priorityLevel": 100
        }
      ],
      "stackData": [
        "MDF_PassiveDamage2"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_Ability03_WeakType_BUFF",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (FUGUE_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "FUGUE_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "FUGUE_OBJECT_UNUSED_1"
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
      "for": "Fugue_StancePreview",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (FUGUE_OBJECT_UNUSED_1) || RETURN",
          "displayLines": "FUGUE_OBJECT_UNUSED_1",
          "constants": [],
          "variables": [
            "FUGUE_OBJECT_UNUSED_1"
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_DefenceDown[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_DefenceDownRatio)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DefenceDownRatio"
      ],
      "latentQueue": [],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Virtue Beckons Bliss"
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_Eidolon2_PreShow",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
        },
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.24) || INVERT || RETURN",
            "displayLines": "-0.24",
            "constants": [],
            "variables": [
              0.24
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_Eidolon6_Listen",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "Fugue_BPAbility_Eidolon4[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_BreakDamageAdd": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_StanceBreakAddRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_Chance": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_DefenceDownRatio": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            },
            "MDF_BreakDamageAddedRatio": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_RedStance[<span class=\"descriptionNumberColor\">Cloudflame Luster</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurMaxStance2",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_RedStance_First",
              "value": {
                "operator": "Variables[0] (MDF_CurMaxStance2) || Variables[1] (MDF_RedStanceRatio) || MUL || RETURN",
                "displayLines": "(MDF_CurMaxStance2 * MDF_RedStanceRatio)",
                "constants": [],
                "variables": [
                  "MDF_CurMaxStance2",
                  "MDF_RedStanceRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_RedStance_First",
                "compareType": "<=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Stack Exo-Toughness",
                  "exoPercent": {
                    "operator": "Variables[0] (MDF_RedStanceRatio) || RETURN",
                    "displayLines": "MDF_RedStanceRatio",
                    "constants": [],
                    "variables": [
                      "MDF_RedStanceRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Fugue_BPAbility_Eidolon4[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Fugue_BPAbility_Eidolon1[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Fugue_BPAbility[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Fugue_DefenceDown[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DefenceDownRatio": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PassiveDamage2",
        "MDF_RedStanceRatio",
        "MDF_MinStance"
      ],
      "latentQueue": [],
      "description": "When initial Toughness is reduced to 0, \"Cloudflame Luster\" can continue to be reduced. When \"Cloudflame Luster\" is reduced to 0, the enemy will receive Weakness Break DMG again.",
      "type": "Other",
      "effectName": "Cloudflame Luster",
      "statusName": "Cloudflame Luster"
    }
  ],
  "references": []
}