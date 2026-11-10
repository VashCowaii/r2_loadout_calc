const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012100,
  "trimCharacterName": 5012100,
  "abilityList": [
    "5012100_Modifiers",
    "5012100_Monster_W5_Magical_ChangeToSun",
    "5012100_Monster_W5_Magical_Passive01",
    "5012100_Monster_W5_Magical_Ability03_Part01",
    "5012100_Monster_W5_Magical_Ability02_Part01",
    "5012100_Monster_W5_Magical_Ability01_Part02",
    "5012100_Monster_W5_Magical_Ability01_Part01",
    "5012100_Handling"
  ],
  "abilityObject": {
    "5012100_Modifiers": {
      "fileName": "5012100_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1664599275\">Enemy_W5_Magical_Passive_ChangeToRain</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "priorityLevel": 100,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "ModifierLayers"
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "displayLines": "ModifierMaxLayers"
                  },
                  "assignState": "True",
                  "state": "Normal",
                  "trigger": "SpEff_Trigger"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Magical_ChangeToSun",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyBuffSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "description": "When receiving a killing blow, uses \"First Kiss ❤ Sunny Skies.\" At the start of the turn, enters the \"Rainy Day\" state.",
          "type": "Other",
          "effectName": "Sunny Day",
          "statusName": "Sunny Day",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Weather"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "description": "Uses \"Gentle Rains ❤ How I Miss You\" when receiving a killing blow.",
          "type": "Other",
          "effectName": "Rainy Day",
          "statusName": "Rainy Day",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Weather"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "Trigger"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1018576515\">Enemy_W5_Magical_Passive</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Weather",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Trigger",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Elation DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1,
                      "variableName": "Trigger"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "ModifierLayers"
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "displayLines": "ModifierMaxLayers"
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Weather",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Trigger",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": 1,
                          "variableName": "Trigger"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather",
                    "compareType": "=",
                    "value2": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle"
            }
          ]
        }
      ],
      "references": []
    },
    "5012100_Monster_W5_Magical_ChangeToSun": {
      "fileName": "5012100_Monster_W5_Magical_ChangeToSun",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1664599275\">Enemy_W5_Magical_Passive_ChangeToRain</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "ModifierLayers"
          },
          "entityClass": "Enemy",
          "maximum": {
            "displayLines": "ModifierMaxLayers"
          },
          "assignState": "True",
          "state": "Active",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "{[PassiveSkill01[1]]}"
          },
          "adjustment": "Add"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[PassiveSkill01[2]]}"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5012100_Monster_W5_Magical_Passive01": {
      "fileName": "5012100_Monster_W5_Magical_Passive01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Default"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1018576515\">Enemy_W5_Magical_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-821429936\">Enemy_W5_Magical_DeathRattle</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-821429936\">Enemy_W5_Magical_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Fatal Damage [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Weather",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Elation DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1,
                      "variableName": "Weather"
                    },
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "displayLines": "{[PassiveSkill01[1]]}"
                      },
                      "adjustment": "Add"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "ModifierLayers"
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "displayLines": "ModifierMaxLayers"
                      },
                      "assignState": "True",
                      "state": "Active",
                      "trigger": "SpEff_Trigger"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Magical_Ability02_Part01",
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Magical_Ability03_Part01",
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "5012100_Monster_W5_Magical_Ability03_Part01": {
      "fileName": "5012100_Monster_W5_Magical_Ability03_Part01",
      "childAbilityList": [
        "5012100_Monster_W5_Magical_Ability03_Camera",
        "5012100_Monster_W5_Magical_Ability03_Part01"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "First Kiss ❤ Sunny Skies"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "Deathrattle"
        },
        "Deleted bullshit",
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"815099001\">Enemy_W5_Magical_DeathRattle_Sun</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "duration": {
            "displayLines": "{[Skill03[1]]}"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "{[Skill03[0]]}"
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__815099001\">Enemy_W5_Magical_DeathRattle_Sun</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "stackType": "Replace",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Deathrattle"
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "CRIT DMG Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "5012100_Monster_W5_Magical_Ability02_Part01": {
      "fileName": "5012100_Monster_W5_Magical_Ability02_Part01",
      "childAbilityList": [
        "5012100_Monster_W5_Magical_Ability02_Camera",
        "5012100_Monster_W5_Magical_Ability02_Part01"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Gentle Rains ❤ How I Miss You"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "Deathrattle"
        },
        "Deleted bullshit",
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Taunt OR Random Aggro}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill02[3]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "displayLines": "{[Skill02[1]]}"
              },
              "baseChance": {
                "displayLines": "{[Skill02[2]]}"
              },
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "displayLines": "{[Skill02[0]]}"
                }
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill02[3]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "displayLines": "{[Skill02[1]]}"
                  },
                  "baseChance": {
                    "displayLines": "{[Skill02[2]]}"
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "displayLines": "{[Skill02[0]]}"
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-813387797\">Enemy_W5_Magical_DeathRattle_Rain</a>[<span class=\"descriptionNumberColor\">SPD Reduction</span>]",
          "stackType": "Replace",
          "description": "Decreases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "SPD Reduction",
          "statusName": "SPD Reduction",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "-MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "5012100_Monster_W5_Magical_Ability01_Part02": {
      "fileName": "5012100_Monster_W5_Magical_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 6,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01[0]]}"
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012100_Monster_W5_Magical_Ability01_Part01": {
      "fileName": "5012100_Monster_W5_Magical_Ability01_Part01",
      "childAbilityList": [
        "5012100_Monster_W5_Magical_Ability01_Camera",
        "5012100_Monster_W5_Magical_Ability01_Part01",
        "5012100_Monster_W5_Magical_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Magical_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill01",
          "passed": [
            {
              "name": "Animation Task"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5012100_Handling": {
      "fileName": "5012100_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSequenceSkill",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  "Use Sequence Ability Option"
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}