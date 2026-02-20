const configAbility = {
  "fileName": "4023021_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1349145544\">W4_Unicorn_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W4_Unicorn_00_Debuff_Resolve"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "W4_Unicorn_00_Debuff_Resolve",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Moonless Night",
                      "desc": "Remove #1 \"Oronyx's Mark(s)\" by using Ultimates in a single battle",
                      "rarity": "Low",
                      "params": [
                        2
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1621970918\">Enemy_W4_Unicorn_Debuff_TriggerMix_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1402132221\">Enemy_W4_Unicorn_UltraReady_02</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1995047428\">Enemy_W4_Unicorn_UltraReady</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-777597987\">Enemy_W4_Unicorn_Ability03_Mark</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1990193548\">Enemy_W4_Unicorn_AttackSign_OnAvatar2</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "AttackSign"
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2085646322\">Enemy_W4_Unicorn_AttackSign_OnAvatar</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "AttackSign"
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1429596060\">Enemy_W4_Unicorn_OtherSignOnAvatar</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990193548\">Enemy_W4_Unicorn_AttackSign_OnAvatar2</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990193548\">Enemy_W4_Unicorn_AttackSign_OnAvatar2</a>",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1025425487\">Enemy_W4_Unicorn_Status</a>"
                      }
                    }
                  ]
                },
                "compareType": ">",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true,
                              "casterFilter": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Locked on by %CasterName as their attack target.",
      "type": "Other",
      "effectName": "Target Locked On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2085646322\">Enemy_W4_Unicorn_AttackSign_OnAvatar</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2085646322\">Enemy_W4_Unicorn_AttackSign_OnAvatar</a>",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1025425487\">Enemy_W4_Unicorn_Status</a>"
                      }
                    }
                  ]
                },
                "compareType": ">",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true,
                              "casterFilter": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Locked on by %CasterName as their attack target.",
      "type": "Other",
      "effectName": "Target Locked On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1270050890\">Enemy_W4_Unicorn_Debuff_FirstNotice</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__434653661\">Enemy_W4_Unicorn_Debuff_UITop</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"434653661\">Enemy_W4_Unicorn_Debuff_UITop</a>"
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
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349145544\">W4_Unicorn_BattleScore1</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
              "multiplier": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": "<",
                    "value2": 2
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
                  "modifier": "<a class=\"gModGreen\" id=\"434653661\">Enemy_W4_Unicorn_Debuff_UITop</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1270050890\">Enemy_W4_Unicorn_Debuff_FirstNotice</a>",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1270050890\">Enemy_W4_Unicorn_Debuff_FirstNotice</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_UnicornMark_DamagePercentage) || RETURN",
                          "displayLines": "_UnicornMark_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                      "duration": {
                        "operator": "Variables[0] (_UnicornMark_LifeTime) || RETURN",
                        "displayLines": "_UnicornMark_LifeTime",
                        "constants": [],
                        "variables": [
                          "_UnicornMark_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (_UnicornMark_Chance) || RETURN",
                        "displayLines": "_UnicornMark_Chance",
                        "constants": [],
                        "variables": [
                          "_UnicornMark_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ActionDelayRatio": {
                          "operator": "Variables[0] (_UnicornMark_ActionDelayRatio) || RETURN",
                          "displayLines": "_UnicornMark_ActionDelayRatio",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_ActionDelayRatio"
                          ]
                        },
                        "Modifier_Entangle_DamagePercentage": {
                          "operator": "Variables[0] (_UnicornMark_DebuffDamagePercentage) || RETURN",
                          "displayLines": "_UnicornMark_DebuffDamagePercentage",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_DebuffDamagePercentage"
                          ]
                        },
                        "Modifier_Entangle_DamageValue": 0
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                      "removeAllInstances": true
                    },
                    "Modifier Deletes Itself"
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1621970918\">Enemy_W4_Unicorn_Debuff_TriggerMix_Mark</a>"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (_MaxHP) || Variables[1] (_MixedMark_LoseHpRatio) || MUL || RETURN",
                          "displayLines": "(_MaxHP * _MixedMark_LoseHpRatio)",
                          "constants": [],
                          "variables": [
                            "_MaxHP",
                            "_MixedMark_LoseHpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                        "displayLines": "(-1 * _GriffinMark_SPCost)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_GriffinMark_SPCost"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                      "duration": {
                        "operator": "Variables[0] (_UnicornMark_LifeTime) || RETURN",
                        "displayLines": "_UnicornMark_LifeTime",
                        "constants": [],
                        "variables": [
                          "_UnicornMark_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (_UnicornMark_Chance) || RETURN",
                        "displayLines": "_UnicornMark_Chance",
                        "constants": [],
                        "variables": [
                          "_UnicornMark_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ActionDelayRatio": {
                          "operator": "Variables[0] (_UnicornMark_ActionDelayRatio) || RETURN",
                          "displayLines": "_UnicornMark_ActionDelayRatio",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_ActionDelayRatio"
                          ]
                        },
                        "Modifier_Entangle_DamagePercentage": {
                          "operator": "Variables[0] (_UnicornMark_DebuffDamagePercentage) || RETURN",
                          "displayLines": "_UnicornMark_DebuffDamagePercentage",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_DebuffDamagePercentage"
                          ]
                        },
                        "Modifier_Entangle_DamageValue": 0
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                      "removeAllInstances": true
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "W4_Unicorn_00_Debuff_Resolve",
                  "value": 1,
                  "max": 2
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_GriffinMark_SPCost",
        "_GriffinMark_DamagePercentage",
        "_MixedMark_LoseHpRatio",
        "_UnicornMark_Chance",
        "_UnicornMark_LifeTime",
        "_UnicornMark_ActionDelayRatio",
        "_UnicornMark_DebuffDamagePercentage",
        "_UnicornMark_DamagePercentage"
      ],
      "latentQueue": [],
      "description": "When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take Quantum DMG with a high chance to be afflicted with Entanglement. When a target gains \"Aquila's Mark\" again, dispel all marks, and they receive True DMG based on <span class=\"descriptionNumberColor\">_MixedMark_LoseHpRatio</span> of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. Using Ultimate can dispel this mark.",
      "type": "Other",
      "effectName": "Oronyx's Mark",
      "statusName": "Oronyx's Mark",
      "addStacksPerTrigger": 1
    }
  ],
  "references": []
}