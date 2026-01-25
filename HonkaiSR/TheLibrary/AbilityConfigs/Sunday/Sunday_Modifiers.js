const configAbility = {
  "fileName": "Sunday_Modifiers",
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
      "for": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]",
      "stackType": "ReplaceByCaster",
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
              "variableName": "_CritialChance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CritialChance",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CritialDamage_Add",
                  "value": {
                    "operator": "Variables[0] (_CritialChance) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_CritialChance - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CritialChance"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CritialDamage_Add",
                  "value": {
                    "operator": "Variables[0] (_CritialDamage_Add) || Constants[0] (2) || MUL || RETURN",
                    "displayLines": "(_CritialDamage_Add * 2)",
                    "constants": [
                      2
                    ],
                    "variables": [
                      "_CritialDamage_Add"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_CritialDamage_Add) || RETURN",
                    "displayLines": "_CritialDamage_Add",
                    "constants": [],
                    "variables": [
                      "_CritialDamage_Add"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">_CritialDamage_Add</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Dawn of Sidereal Cacophony"
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_CriticalChanceConvertListen",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CritialChance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CritialChance",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Change in Crit RATE [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CritialChance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CritialChance",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sunday_10_CriticalChanceConvertListen"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_CritValue) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_CritValue)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_CritValue"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CritValue) || RETURN",
                    "displayLines": "MDF_CritValue",
                    "constants": [],
                    "variables": [
                      "MDF_CritValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sunday_10_CriticalChanceConvertListen",
                  "valuePerStack": {
                    "_CritialChance": 0
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CritValue"
      ],
      "latentQueue": [],
      "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "The Sorrowing Body"
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Ability02_PreshowForSummonUnit",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}.[[removeMemosprite]].[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Target is Pathstrider",
          "path": [
            "Harmony"
          ],
          "target": {
            "name": "Target Name",
            "target": "{{Player's Aim Target List}}"
          },
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Ability02_PreshowForLongling",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}.[[removeMemosprite]].[[getMemoAndSummon]] - {{Player's Aim Target List}}.[[removeMemosprite]].[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Target is Pathstrider",
          "path": [
            "Harmony"
          ],
          "target": {
            "name": "Target Name",
            "target": "{{Player's Aim Target List}}"
          },
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Ability02_Preshow",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}} + {{Player Team All(with Unselectable)V2}}.[[getAttachedSummon]]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}} + {{Player Team All(with Unselectable)V2}}.[[getAttachedSummon]]"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}} + {{Player Team All(with Unselectable)V2}}.[[getAttachedSummon]]"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}.[[getMemoAndSummon]]"
                },
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}.[[getAttachedSummon]] + {{Player's Aim Target List}}.[[getMemosprite]]"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}} - {{Player's Aim Target List}}.[[getMemosprite]]"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Target is Pathstrider",
          "path": [
            "Harmony"
          ],
          "target": {
            "name": "Target Name",
            "target": "{{Player's Aim Target List}}"
          },
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Eidolon1_SuperBonusForServant[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_PropertyRatio)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF.",
      "type": "Buff",
      "effectName": "Millennium's Quietus",
      "statusName": "Millennium's Quietus"
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Eidolon1_SuperBonus[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Summon-Tag DMG"
                    ]
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyRatio02)"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyRatio)"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Jing Yuan"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1222,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Lingsha"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1112,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Topaz & Numby"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Ignores #1[i]% of enemy targets' DEF. When a summon deals DMG, ignores #2[i]% of the enemy targets' DEF."
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getAttachedSummon]]"
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Jing Yuan"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1222,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Lingsha"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1112,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Topaz & Numby"
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Ignores #1[i]% of enemy targets' DEF. When a summon deals DMG, ignores #2[i]% of the enemy targets' DEF."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Jing Yuan"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1222,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Lingsha"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1112,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Topaz & Numby"
                      }
                    ],
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ignores #1[i]% of enemy targets' DEF. When a summon deals DMG, ignores #2[i]% of the enemy targets' DEF."
                    }
                  ]
                }
              ]
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
                "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Jing Yuan"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1222,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Lingsha"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1112,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Topaz & Numby"
                      }
                    ],
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ignores #1[i]% of enemy targets' DEF."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio",
        "MDF_PropertyRatio02"
      ],
      "latentQueue": [],
      "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF.",
      "type": "Buff",
      "effectName": "Millennium's Quietus",
      "statusName": "Millennium's Quietus"
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_MazeBonus[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "The Glorious Mysteries"
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CheckAllLinkerDie",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}} - {{Modifier Holder}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CheckAllLinkerDie",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_CheckAllLinkerDie",
                "compareType": "=",
                "value2": 0
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
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sunday_10_Ability03_Link_ForCaster"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "priorState": "Normal"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_lifeTime",
                      "value": 0
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
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_ownerCritDamage",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyFinal",
              "value": {
                "operator": "Variables[0] (_ownerCritDamage) || Variables[1] (MDF_PropertyRatio) || MUL || Variables[2] (MDF_PropertyBase) || ADD || RETURN",
                "displayLines": "((_ownerCritDamage * MDF_PropertyRatio) + MDF_PropertyBase)",
                "constants": [],
                "variables": [
                  "_ownerCritDamage",
                  "MDF_PropertyRatio",
                  "MDF_PropertyBase"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyFinal) || RETURN",
                "displayLines": "MDF_PropertyFinal",
                "constants": [],
                "variables": [
                  "MDF_PropertyFinal"
                ]
              },
              "isRefresh": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "CRIT DMG increases by #1[f1]%. DMG dealt increases by #2[f1]%."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_PropertyFinal",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99999,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyFinal) || RETURN",
                    "displayLines": "MDF_PropertyFinal",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyFinal"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio",
        "MDF_PropertyBase"
      ],
      "latentQueue": [],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyFinal</span>.",
      "type": "Buff",
      "effectName": "The Beatified",
      "statusName": "The Beatified"
    }
  ],
  "references": []
}