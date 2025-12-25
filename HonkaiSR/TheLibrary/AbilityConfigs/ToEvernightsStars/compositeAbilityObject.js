const compositeAbilityObject = {
  "fullCharacterName": "To Evernight's Stars",
  "trimCharacterName": "ToEvernightsStars",
  "abilityList": [
    "ToEvernightsStars_Ability23049"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.3
    },
    "2": {
      "HP%": 0.375
    },
    "3": {
      "HP%": 0.45
    },
    "4": {
      "HP%": 0.525
    },
    "5": {
      "HP%": 0.6
    }
  },
  "abilityObject": {
    "ToEvernightsStars_Ability23049": {
      "fileName": "ToEvernightsStars_Ability23049",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23049_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23049_Sub[<span class=\"descriptionNumberColor\">Noctis</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier + Memosprite",
                  "modifier": "LC_23049_Sub2[<span class=\"descriptionNumberColor\">Sleepless</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier + Memosprite",
                  "modifier": "LC_23049_Sub2[<span class=\"descriptionNumberColor\">Sleepless</span>]",
                  "valuePerStack": {
                    "MDF_Show": {
                      "operator": "Variables[0] (AbilityEquip_P3_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "AbilityEquip_P3_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "AbilityEquip_P3_AllDamageTypeAddedRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team(ALL) Memosprites",
                  "modifier": "LC_23049_Sub3[<span class=\"descriptionNumberColor\">Sleepless</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "LC_23049_Sub[<span class=\"descriptionNumberColor\">Noctis</span>]"
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Allied Team(ALL) Memosprites",
                      "modifier": "LC_23049_Sub3[<span class=\"descriptionNumberColor\">Sleepless</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "[MEMOSPRITE OF] Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier + Memosprite",
                      "modifier": "LC_23049_Sub2[<span class=\"descriptionNumberColor\">Sleepless</span>]",
                      "valuePerStack": {
                        "MDF_Show": {
                          "operator": "Variables[0] (AbilityEquip_P3_AllDamageTypeAddedRatio) || RETURN",
                          "displayLines": "AbilityEquip_P3_AllDamageTypeAddedRatio",
                          "constants": [],
                          "variables": [
                            "AbilityEquip_P3_AllDamageTypeAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_23049_Sub3[<span class=\"descriptionNumberColor\">Sleepless</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When the wearer's memosprite disappears, regenerates <span class=\"descriptionNumberColor\">MDF_PropertyValue_3</span> Energy for the wearer.",
          "type": "Other",
          "effectName": "Noctis",
          "statusName": "Noctis"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23049_Sub3[<span class=\"descriptionNumberColor\">Sleepless</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                    "displayLines": "-MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Sleepless"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23049_Sub2[<span class=\"descriptionNumberColor\">Sleepless</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Show) || RETURN",
                    "displayLines": "MDF_Show",
                    "constants": [],
                    "variables": [
                      "MDF_Show"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Show"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_Show</span>.",
          "type": "Buff",
          "statusName": "Sleepless"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23049_Listen",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "LC_23049_Sub[<span class=\"descriptionNumberColor\">Noctis</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (AbilityEquip_P4_SPAdd) || RETURN",
                        "displayLines": "AbilityEquip_P4_SPAdd",
                        "constants": [],
                        "variables": [
                          "AbilityEquip_P4_SPAdd"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23049_Sub[<span class=\"descriptionNumberColor\">Noctis</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (AbilityEquip_P3_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "AbilityEquip_P3_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "AbilityEquip_P3_AllDamageTypeAddedRatio"
                      ]
                    },
                    "MDF_PropertyValue_3": {
                      "operator": "Variables[0] (AbilityEquip_P4_SPAdd) || RETURN",
                      "displayLines": "AbilityEquip_P4_SPAdd",
                      "constants": [],
                      "variables": [
                        "AbilityEquip_P4_SPAdd"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23049_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "LC_23049_Listen",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_PropertyValue_3": {
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "[MEMOSPRITE OF] Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_23049_Listen",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_PropertyValue_3": {
                          "operator": "Variables[0] (8) || RETURN",
                          "displayLines": "8",
                          "constants": [],
                          "variables": [
                            8
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
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Max HP by #1[i]%. When the wearer's memosprite uses an ability, the wearer gains \"Noctis.\" While the wearer has \"Noctis,\" the DMG dealt by all ally memosprites ignores #2[i]% of the targets' DEF. Increases the DMG dealt by the wearer and their memosprite by #3[i]%. When the wearer's memosprite disappears, the wearer recovers #4[i] Energy. Effects of the same type cannot stack.",
      "params": [
        [
          0.3,
          0.2,
          0.3,
          8
        ],
        [
          0.375,
          0.225,
          0.375,
          10
        ],
        [
          0.45,
          0.25,
          0.45,
          12
        ],
        [
          0.525,
          0.275,
          0.525,
          14
        ],
        [
          0.6,
          0.3,
          0.6,
          16
        ]
      ]
    }
  },
  "isLightcone": true
}