const compositeAbilityObject = {
  "fullCharacterName": "Phainon",
  "trimCharacterName": "Phainon",
  "abilityList": [
    "Phainon_Phainon_Eidolon6",
    "Phainon_Phainon_Eidolon2",
    "Phainon_Phainon_Eidolon1",
    "Phainon_Phainon_Trace03",
    "Phainon_Phainon_Trace02",
    "Phainon_Phainon_Trace01",
    "Phainon_Phainon_TechniqueInLevel",
    "Phainon_Phainon_PassiveAbility02",
    "Phainon_Phainon_PassiveAbility01",
    "Phainon_Phainon_Ability31_Part2",
    "Phainon_Phainon_Ability31_Part1",
    "Phainon_Phainon_Ability31_SelectTarget",
    "Phainon_Phainon_Ability31_SelectTarget_OnLimbo",
    "Phainon_Phainon_Ability03_BattleEvent",
    "Phainon_Phainon_Ability03_Part02",
    "Phainon_Phainon_Ability03_Part01",
    "Phainon_Phainon_Ability03_EnterReady",
    "Phainon_Phainon_Ability22_v2_Part02",
    "Phainon_Phainon_Ability22_v2_Part01",
    "Phainon_Phainon_Ability22_Part02",
    "Phainon_Phainon_Ability22_Part01",
    "Phainon_Phainon_Ability22_Entry",
    "Phainon_Phainon_Ability21_Insert_Part02",
    "Phainon_Phainon_Ability21_Insert_Part01",
    "Phainon_Phainon_Ability21_Part02",
    "Phainon_Phainon_Ability21_Part01",
    "Phainon_Phainon_Ability11_Part02",
    "Phainon_Phainon_Ability11_Part01",
    "Phainon_Phainon_Ability11_EnterReady",
    "Phainon_Phainon_Ability02_Part02",
    "Phainon_Phainon_Ability02_Part01",
    "Phainon_Phainon_Ability01_Part02",
    "Phainon_Phainon_Ability01_Part01",
    "Phainon_Modifiers",
    "Phainon_Functions",
    "Phainon_BE_BattleEvents"
  ],
  "abilityObject": {
    "Phainon_Phainon_Eidolon6": {
      "fileName": "Phainon_Phainon_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability22_Eidolon6Listener",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Battle Event",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_TempDamage",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Rank06ExtraDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank06ExtraDamage) || Variables[1] (MDF_TempDamage) || ADD || RETURN",
                        "displayLines": "(MDF_Rank06ExtraDamage + MDF_TempDamage)",
                        "constants": [],
                        "variables": [
                          "MDF_Rank06ExtraDamage",
                          "MDF_TempDamage"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank06ExtraDamage",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TempDamage",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}.[[living]].[[sortByHPCurrent]].[[getLast]]"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Rank06ExtraDamage) || Variables[1] (0.36) || MUL || RETURN",
                          "displayLines": "(MDF_Rank06ExtraDamage * 0.36)",
                          "constants": [],
                          "variables": [
                            "MDF_Rank06ExtraDamage",
                            0.36
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Eidolon6",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill22"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "M_Phainon_Ability22_Eidolon6Listener"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Eidolon2": {
      "fileName": "Phainon_Phainon_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Phainon_Phainon_Eidolon1": {
      "fileName": "Phainon_Phainon_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Eidolon1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Eidolon1_AddSpeedRatio[<span class=\"descriptionNumberColor\">Fire and Light Bind Virtue and Vice</span>]",
          "referenceModifier": "MReference_Empty",
          "valuePerStack": {
            "MDF_SpeedRatio": {
              "operator": "Variables[0] (0.66) || RETURN",
              "displayLines": "0.66",
              "constants": [],
              "variables": [
                0.66
              ]
            },
            "MDF_MaxSpeedRatio": {
              "operator": "Variables[0] (0.84) || RETURN",
              "displayLines": "0.84",
              "constants": [],
              "variables": [
                0.84
              ]
            },
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.015) || RETURN",
              "displayLines": "0.015",
              "constants": [],
              "variables": [
                0.015
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Eidolon1",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
                              },
                              "team": "Enemy Team"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_KillCount",
                          "context": "ContextModifier",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CDF_SpeedConvertRatio",
                          "value": {
                            "operator": "Variables[0] (0.66) || Variables[1] (MDF_KillCount) || Variables[2] (0.015) || MUL || ADD || RETURN",
                            "displayLines": "(0.66 + (MDF_KillCount * 0.015))",
                            "constants": [],
                            "variables": [
                              0.66,
                              "MDF_KillCount",
                              0.015
                            ]
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "Phainon_Eidolon1_AddSpeedRatio[<span class=\"descriptionNumberColor\">Fire and Light Bind Virtue and Vice</span>]",
                          "variableName": "MDF_SpeedRatio",
                          "value": {
                            "operator": "Variables[0] (CDF_SpeedConvertRatio) || RETURN",
                            "displayLines": "CDF_SpeedConvertRatio",
                            "constants": [],
                            "variables": [
                              "CDF_SpeedConvertRatio"
                            ]
                          }
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Khaslana(Battle Event Cluster)}}"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifierName": "Phainon_Ability03_BattleEvent_BaseSpeed",
                              "variableName": "MDF_PropertyValue",
                              "value": {
                                "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                                "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                                "constants": [],
                                "variables": [
                                  "CDF_SpeedConvertRatio",
                                  "Phainon_BaseSpeed"
                                ]
                              }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Eidolon1_Property[<span class=\"descriptionNumberColor\">Fire and Light Bind Virtue and Vice</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "referenceModifier": "MReference_CriticalDamageUp",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Trace03": {
      "fileName": "Phainon_Phainon_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Trace03",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Tree03_Property[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Trace02": {
      "fileName": "Phainon_Phainon_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Trace02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Trace02_SubListener",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_isSkill",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_isSkill",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "_SPChangeOriginal",
                      "value": "ParamValue2",
                      "context": "ContextModifier"
                    },
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
                            "value1": "_SPChangeOriginal",
                            "compareType": ">=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Energy Tags",
                            "flagNames": [
                              "ActiveSkillAdd"
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_isSkill",
                          "value": 0
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                          "variables": {
                            "parameter[0]_AddValue": {
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Trace02",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "M_Phainon_Tree02_CD",
                        "invertCondition": true
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
                      "modifier": "M_Phainon_Tree02_CD",
                      "referenceModifier": "MReference_Mark_RemoveOnTurnEnd"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Phainon_Trace02_Property[<span class=\"descriptionNumberColor\">Bide in Flames</span>]",
                      "duration": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "referenceModifier": "MReference_AllDamageTypeAddedRatio",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.45) || RETURN",
                          "displayLines": "0.45",
                          "constants": [],
                          "variables": [
                            0.45
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}.[[addBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Phainon_Trace02_SubListener",
                      "silentAdd": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Phainon_Trace02_SubListener"
                }
              ]
            },
            {
              "eventTrigger": "Created Shield [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "M_Phainon_Tree02_CD",
                        "invertCondition": true
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
                      "modifier": "M_Phainon_Tree02_CD",
                      "referenceModifier": "MReference_Mark_RemoveOnTurnEnd"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Phainon_Trace02_Property[<span class=\"descriptionNumberColor\">Bide in Flames</span>]",
                      "duration": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "referenceModifier": "MReference_AllDamageTypeAddedRatio",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.45) || RETURN",
                          "displayLines": "0.45",
                          "constants": [],
                          "variables": [
                            0.45
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
      ]
    },
    "Phainon_Phainon_Trace01": {
      "fileName": "Phainon_Phainon_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Trace01"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Trace01",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                      "variables": {
                        "parameter[0]_AddValue": {
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
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_TechniqueInLevel": {
      "fileName": "Phainon_Phainon_TechniqueInLevel",
      "childAbilityList": [
        "Phainon_Phainon_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Technique_Phainon_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Technique_Phainon_Modifier_Charge"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Technique_Phainon_Modifier_Charge",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Memosprites and Self)}}"
                      },
                      "value": {
                        "operator": "Variables[0] (25) || RETURN",
                        "displayLines": "25",
                        "constants": [],
                        "variables": [
                          25
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "Skill22_Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
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
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Technique_Phainon_Modifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
                        },
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                "Trigger: Attack End"
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_PassiveAbility02": {
      "fileName": "Phainon_Phainon_PassiveAbility02",
      "childAbilityList": [
        "Phainon_Phainon_PassiveAbility02"
      ],
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_PassiveAbility02"
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
              "variableName": "CDF_SpeedConvertRatio",
              "value": {
                "operator": "Variables[0] (0.66) || RETURN",
                "displayLines": "0.66",
                "constants": [],
                "variables": [
                  0.66
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CDF_SpeedConvertRatio",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_EnergyAdd",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill21_ExtraEnergyAdd",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill22_Energy_Max",
          "value": 7
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
              "variableName": "Have_Rank06",
              "value": 1
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ability22_Disable",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Insufficient \"Scourge\"",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "description": "\"Scourge\" points. \"Scourge\" can be consumed to use Skill \"Foundation: Stardeath Verdict.\"",
          "type": "Other",
          "statusName": "Scourge"
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_PassiveAbility02",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Read Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Skill22_Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "Set Phainon Charge Points Preview",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variableName": "_enemyCount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variableName": "_enemyCount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill11",
                    "useActive": true
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Charge Points Preview",
                      "value": {
                        "operator": "Variables[0] (Skill11_EnergyAdd) || RETURN",
                        "displayLines": "Skill11_EnergyAdd",
                        "constants": [],
                        "variables": [
                          "Skill11_EnergyAdd"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill21",
                    "useActive": true
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Charge Points Preview",
                      "value": {
                        "operator": "Variables[0] (_enemyCount) || Variables[1] (Skill21_ExtraEnergyAdd) || ADD || RETURN",
                        "displayLines": "(_enemyCount + Skill21_ExtraEnergyAdd)",
                        "constants": [],
                        "variables": [
                          "_enemyCount",
                          "Skill21_ExtraEnergyAdd"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill22",
                    "useActive": true
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Charge Points Preview",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (Skill22_Energy) || SUB || RETURN",
                        "displayLines": "(0 - Skill22_Energy)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "Skill22_Energy"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                      "name": "Set Phainon Charge Points Preview",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Skill22_Energy",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]",
                          "value": {
                            "operator": "Variables[0] (Skill22_Energy) || RETURN",
                            "displayLines": "Skill22_Energy",
                            "constants": [],
                            "variables": [
                              "Skill22_Energy"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "passed": [
                        {
                          "name": "Set Phainon Charge Points",
                          "value": {
                            "operator": "Variables[0] (Skill22_Energy) || RETURN",
                            "displayLines": "Skill22_Energy",
                            "constants": [],
                            "variables": [
                              "Skill22_Energy"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 99,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]",
                      "counter": {
                        "operator": "Variables[0] (Skill22_Energy) || RETURN",
                        "displayLines": "Skill22_Energy",
                        "constants": [],
                        "variables": [
                          "Skill22_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Ability22_Disable"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Ability22_Disable"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "maxValue": 99
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "conditions": {
              "name": "Skill Name",
              "skillName": "Skill22",
              "useActive": true
            },
            "multiplier": 0.25
          }
        }
      ]
    },
    "Phainon_Phainon_PassiveAbility01": {
      "fileName": "Phainon_Phainon_PassiveAbility01",
      "childAbilityList": [
        "Phainon_Phainon_PassiveAbility01"
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
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            11408
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Phainon_BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
            "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
            "constants": [],
            "variables": [
              "CurSpecialSP",
              "CurOverflowSpecialSP"
            ]
          },
          "activeCount": {
            "operator": "Variables[0] (12) || RETURN",
            "displayLines": "12",
            "constants": [],
            "variables": [
              12
            ]
          },
          "maximum": {
            "operator": "Variables[0] (12) || RETURN",
            "displayLines": "12",
            "constants": [],
            "variables": [
              12
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_PassiveAbility01"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_AbilityTargetSubListener",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_Passive_AsAbilityTarget",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "AttackSign"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "TeamAction"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Monster_W2_Beast02_RLElite_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_AbilityTarget"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Phainon_Passive_AsAbilityTarget",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}"
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_PassiveAbility01",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                        "invertCondition": true
                      },
                      {
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Current Ability Target",
                        "dynamic": "True"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "M_Phainon_AbilityTargetSubListener",
                          "silentAdd": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target's Ability Targets}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "mustBeAlive2": true
                              },
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target's Ability Sub-Targets}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "mustBeAlive2": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Phainon_Passive_AsAbilityTarget",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurOverflowSpecialSP",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                            "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                            "constants": [],
                            "variables": [
                              "CurSpecialSP",
                              "CurOverflowSpecialSP"
                            ]
                          },
                          "priorState": "Normal"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurSpecialSP",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (12) || RETURN",
                              "displayLines": "12",
                              "constants": [],
                              "variables": [
                                12
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Active"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurOverflowSpecialSP",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
                                  "valuePerStack": {
                                    "MDF_Count": {
                                      "operator": "Variables[0] (CurOverflowSpecialSP) || RETURN",
                                      "displayLines": "CurOverflowSpecialSP",
                                      "constants": [],
                                      "variables": [
                                        "CurOverflowSpecialSP"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Modifier-Specific Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifierName": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
                                  "variableName": "MDF_Count",
                                  "value": {
                                    "operator": "Variables[0] (CurOverflowSpecialSP) || RETURN",
                                    "displayLines": "CurOverflowSpecialSP",
                                    "constants": [],
                                    "variables": [
                                      "CurOverflowSpecialSP"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CurSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                            "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                            "constants": [],
                            "variables": [
                              "CurSpecialSP",
                              "CurOverflowSpecialSP"
                            ]
                          },
                          "priorState": "Normal"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurSpecialSP",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (12) || RETURN",
                              "displayLines": "12",
                              "constants": [],
                              "variables": [
                                12
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Active"
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
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Phainon_BaseSpeed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "Phainon_Ability03_BattleEvent_BaseSpeed",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                            "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                            "constants": [],
                            "variables": [
                              "CDF_SpeedConvertRatio",
                              "Phainon_BaseSpeed"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Ability31_Part2": {
      "fileName": "Phainon_Phainon_Ability31_Part2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "MStory_Main_Phainon_UltraNeverEnd[<span class=\"descriptionNumberColor\">Futile Flames</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MStory_Stage10441070_Ability31"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ADF_BECount",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextAbility"
                  }
                ]
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_Phainon_IsAbility31",
                  "referenceModifier": "MReference_Empty"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Ultimate_LimboMark"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "variableName": "ADF_TargetCount",
          "livingTargets": true,
          "context": "ContextAbility"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Khaslana(Battle Event Cluster)}}"
          },
          "variableName": "ADF_BECount",
          "context": "ContextAbility"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (9.6) || Constants[0] (1) || Variables[1] (ADF_BECount) || Variables[2] (0.125) || MUL || SUB || MUL || RETURN",
              "displayLines": "(9.6 * (1 - (ADF_BECount * 0.125)))",
              "constants": [
                1
              ],
              "variables": [
                9.6,
                "ADF_BECount",
                0.125
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
              "displayLines": "(1 / ADF_TargetCount)",
              "constants": [
                1
              ],
              "variables": [
                "ADF_TargetCount"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate"
          },
          "attackType": "Ultimate"
        },
        "Trigger: Attack End",
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Khaslana(Battle Event Cluster)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "MStory_Main_Phainon_UltraNeverEnd[<span class=\"descriptionNumberColor\">Futile Flames</span>]"
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ADF_BECount",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextAbility"
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Set Phainon Charge Points",
              "value": {
                "operator": "Variables[0] (Skill22_Energy) || RETURN",
                "displayLines": "Skill22_Energy",
                "constants": [],
                "variables": [
                  "Skill22_Energy"
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
                "modifier": "MStory_Main_Phainon_UltraNeverEnd[<span class=\"descriptionNumberColor\">Futile Flames</span>]"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
                      "variable": "MDF_ChargeEnergy",
                      "target2": null,
                      "variable2": "ADF_ExtraEnergy"
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "Skill22_Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ADF_ExtraEnergy) || RETURN",
                        "displayLines": "ADF_ExtraEnergy",
                        "constants": [],
                        "variables": [
                          "ADF_ExtraEnergy"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_Index",
              "value": 0
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "Event": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 11408,
                  "variables": {
                    "BE_Index": {
                      "operator": "Variables[0] (ADF_Index) || RETURN",
                      "displayLines": "ADF_Index",
                      "constants": [],
                      "variables": [
                        "ADF_Index"
                      ]
                    },
                    "BE_Count": {
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
                      ]
                    },
                    "BE_Speed": {
                      "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                      "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                      "constants": [],
                      "variables": [
                        "CDF_SpeedConvertRatio",
                        "Phainon_BaseSpeed"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ADF_Index",
                  "value": {
                    "operator": "Variables[0] (ADF_Index) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(ADF_Index + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "ADF_Index"
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Phainon_Ultimate_VisualManager"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_ClearAvatarArea",
              "variables": {
                "IsAsyncLoad": 1
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "Phainon enters the cycle once more..."
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_IsAbility31"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MStory_Stage10441070_Ability31",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Ability31_Part1": {
      "fileName": "Phainon_Phainon_Ability31_Part1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "He Who Bears the World Must Burn"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability31_Part2",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability31_SelectTarget": {
      "fileName": "Phainon_Phainon_Ability31_SelectTarget",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "living": true
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Phainon_Ability31_Part1",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability31_SelectTarget_OnLimbo": {
      "fileName": "Phainon_Phainon_Ability31_SelectTarget_OnLimbo",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ADF_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (0.25) || MUL || RETURN",
            "displayLines": "(ADF_MaxHPValue * 0.25)",
            "constants": [],
            "variables": [
              "ADF_MaxHPValue",
              0.25
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
              },
              "abilityName": "Phainon_Ability31_SelectTarget",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "priorityTag": "AvatarInsertAttackSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability03_BattleEvent": {
      "fileName": "Phainon_Phainon_Ability03_BattleEvent",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Ability03_BattleEvent_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Ability03_BattleEvent_BaseSpeed",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (BE_Speed) || RETURN",
              "displayLines": "BE_Speed",
              "constants": [],
              "variables": [
                "BE_Speed"
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (BE_Index) || Variables[1] (MAX) || Constants[0] (1) || Variables[2] (BE_Count) || Constants[0] (1) || SUB || PARAM_2 || FUNCTION || DIV || RETURN",
            "displayLines": "(BE_Index / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, (BE_Count - 1)))",
            "constants": [
              1
            ],
            "variables": [
              "BE_Index",
              "MAX",
              "BE_Count"
            ]
          }
        },
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (BE_Count) || Variables[1] (BE_Index) || SUB || Constants[0] (1) || SUB || RETURN",
            "displayLines": "((BE_Count - BE_Index) - 1)",
            "constants": [
              1
            ],
            "variables": [
              "BE_Count",
              "BE_Index"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BE_Index",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (BE_Count) || Constants[0] (1) || SUB || RETURN",
              "displayLines": "(BE_Count - 1)",
              "constants": [
                1
              ],
              "variables": [
                "BE_Count"
              ]
            }
          },
          "passed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_2",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Phainon_FinalBE_Hint"
            }
          ],
          "failed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_1",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Phainon_NormalBE_Hint"
            }
          ]
        },
        {
          "name": "Block Advance/Delay Effects",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelist": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}} + {{Caster}}"
          },
          "whitelistTag": 130,
          "whitelistType": "Bit_Decrease"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_10_TriggerSoundOnTurnStart_Advantage",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Lifetime",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Lifetime",
                      "value": {
                        "operator": "Variables[0] (MDF_Lifetime) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_Lifetime - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Lifetime"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_10_TriggerSoundOnTurnStart",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Action Start [Anyone]",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ability03_BattleEvent_Passive",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_0",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_FinalBE_Hint"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "abilityName": "Phainon_Ability31_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Break"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Battle Event's Caster}}"
                            },
                            "modifier": "M_Phainon_10_TriggerSoundOnTurnStart_Advantage"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Battle Event's Caster}}"
                              },
                              "modifier": "M_Phainon_10_TriggerSoundOnTurnStart",
                              "casterAssign": "TargetSelf"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Battle Event's Caster}}"
                          },
                          "modifier": "M_Phainon_10_TriggerSoundOnTurnStart_Advantage",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Battle Event's Caster}}"
                          },
                          "modifier": "M_Phainon_10_TriggerSoundOnTurnStart",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Phainon_BEInsertAction",
                      "canInjectUltimates": true,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "afterInjection": []
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
          "for": "Phainon_Ability03_BattleEvent_BaseSpeed",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_PropertyValue",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                        "displayLines": "MDF_PropertyValue",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue"
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
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Ability03_Part02": {
      "fileName": "Phainon_Phainon_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_Index",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_PropertyRatio2": {
              "operator": "Variables[0] (2.7) || RETURN",
              "displayLines": "2.7",
              "constants": [],
              "variables": [
                2.7
              ]
            }
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          },
          "Event": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 11408,
              "variables": {
                "BE_Index": {
                  "operator": "Variables[0] (ADF_Index) || RETURN",
                  "displayLines": "ADF_Index",
                  "constants": [],
                  "variables": [
                    "ADF_Index"
                  ]
                },
                "BE_Count": {
                  "operator": "Variables[0] (8) || RETURN",
                  "displayLines": "8",
                  "constants": [],
                  "variables": [
                    8
                  ]
                },
                "BE_Speed": {
                  "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                  "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                  "constants": [],
                  "variables": [
                    "CDF_SpeedConvertRatio",
                    "Phainon_BaseSpeed"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_Index",
              "value": {
                "operator": "Variables[0] (ADF_Index) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(ADF_Index + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "ADF_Index"
                ]
              }
            }
          ]
        },
        {
          "name": "Redirect AV Changes",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{Khaslana(Battle Event Cluster)}}.[[sortByAV]].[[index0]]"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Phainon_Phainon_Ability03_Part01": {
      "fileName": "Phainon_Phainon_Ability03_Part01",
      "childAbilityList": [
        "Phainon_Phainon_Ability03_EnterReady",
        "Phainon_Phainon_Ability03_Part01",
        "Phainon_Phainon_Ability03_Part02",
        "Phainon_Phainon_Ability03_Camera",
        "Phainon_Phainon_Ability31_Camera",
        "Phainon_Phainon_Ability31_SelectTarget",
        "Phainon_Phainon_Ability31_SelectTarget_OnLimbo",
        "Phainon_Phainon_Ability31_Part1",
        "Phainon_Phainon_Ability31_Part2"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Battle Arena",
          "arena": "PhainonBattleArea",
          "tag": "BattleArea01",
          "priorityTag": "Character"
        },
        {
          "name": "Change Character Model"
        },
        {
          "name": "Set Phainon Charge Points",
          "value": {
            "operator": "Variables[0] (Skill22_Energy) || RETURN",
            "displayLines": "Skill22_Energy",
            "constants": [],
            "variables": [
              "Skill22_Energy"
            ]
          }
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability03_EnterReady": {
      "fileName": "Phainon_Phainon_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Set Render/Load State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "showOrLoad": false
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Phainon_Phainon_Ability22_v2_Part02": {
      "fileName": "Phainon_Phainon_Ability22_v2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "Count",
          "value": {
            "operator": "Variables[0] (MIN) || Variables[1] (Skill22_Energy) || Variables[2] (4) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Skill22_Energy, 4)",
            "constants": [],
            "variables": [
              "MIN",
              "Skill22_Energy",
              4
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_delta_frame",
          "value": {
            "operator": "Variables[0] (PHAINON_OBJECT_UNUSED_1) || Variables[1] (PHAINON_OBJECT_UNUSED_2) || SUB || Variables[2] (4) || Variables[3] (Count) || MUL || Constants[0] (1) || SUB || DIV || RETURN",
            "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / ((4 * Count) - 1))",
            "constants": [
              1
            ],
            "variables": [
              "PHAINON_OBJECT_UNUSED_1",
              "PHAINON_OBJECT_UNUSED_2",
              4,
              "Count"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_prev_energy",
          "value": {
            "operator": "Variables[0] (Skill22_Energy) || RETURN",
            "displayLines": "Skill22_Energy",
            "constants": [],
            "variables": [
              "Skill22_Energy"
            ]
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill22_Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (Count) || SUB || RETURN",
            "displayLines": "(0 - Count)",
            "constants": [
              0
            ],
            "variables": [
              "Count"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              {
                "name": "Compare: Variable",
                "value1": "_prev_energy",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Skill22_Energy) || Variables[1] (4) || ADD || RETURN",
                  "displayLines": "(Skill22_Energy + 4)",
                  "constants": [],
                  "variables": [
                    "Skill22_Energy",
                    4
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": "Phainon_Free_Ability22",
              "canInjectUltimates": true,
              "afterInjection": []
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (4) || Variables[1] (Count) || MUL || RETURN",
            "displayLines": "(4 * Count)",
            "constants": [],
            "variables": [
              4,
              "Count"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "variableName": "_count",
                  "value": {
                    "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_count"
                    ]
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
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.45) || RETURN",
                      "displayLines": "0.45",
                      "constants": [],
                      "variables": [
                        0.45
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "instanceTag": "Phainon_Skill22",
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "M_Phainon_Ability22_v2_TargetTimeslow",
          "silentAdd": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "variableName": "ADF_TargetCount",
              "livingTargets": true,
              "context": "ContextAbility"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (4.5) || RETURN",
                  "displayLines": "4.5",
                  "constants": [],
                  "variables": [
                    4.5
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
                  "displayLines": "(1 / ADF_TargetCount)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ADF_TargetCount"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "instanceTag": "Phainon_Skill22",
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "ADF_TargetCount",
              "context": "ContextAbility"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (4.5) || RETURN",
                  "displayLines": "4.5",
                  "constants": [],
                  "variables": [
                    4.5
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
                  "displayLines": "(1 / ADF_TargetCount)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ADF_TargetCount"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "instanceTag": "Phainon_Skill22",
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Ability22_Insert"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability22_v2_TargetTimeslow",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_delta_frame",
            "_prev_energy"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability22_Insert",
          "execute": [
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Phainon_Free_Ability22"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Sky and Earth Churn Mortal Froth"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_delta_frame",
            "_prev_energy"
          ]
        }
      ]
    },
    "Phainon_Phainon_Ability22_v2_Part01": {
      "fileName": "Phainon_Phainon_Ability22_v2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability22_v2_Part02",
          "isTrigger": true
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability22_Part02": {
      "fileName": "Phainon_Phainon_Ability22_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "Count",
          "value": {
            "operator": "Variables[0] (MIN) || Variables[1] (Skill22_Energy) || Variables[2] (4) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Skill22_Energy, 4)",
            "constants": [],
            "variables": [
              "MIN",
              "Skill22_Energy",
              4
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_delta_frame",
          "value": {
            "operator": "Variables[0] (PHAINON_OBJECT_UNUSED_1) || Variables[1] (PHAINON_OBJECT_UNUSED_2) || SUB || Variables[2] (4) || Variables[3] (Count) || MUL || Constants[0] (1) || SUB || DIV || RETURN",
            "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / ((4 * Count) - 1))",
            "constants": [
              1
            ],
            "variables": [
              "PHAINON_OBJECT_UNUSED_1",
              "PHAINON_OBJECT_UNUSED_2",
              4,
              "Count"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_prev_energy",
          "value": {
            "operator": "Variables[0] (Skill22_Energy) || RETURN",
            "displayLines": "Skill22_Energy",
            "constants": [],
            "variables": [
              "Skill22_Energy"
            ]
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill22_Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (Count) || SUB || RETURN",
            "displayLines": "(0 - Count)",
            "constants": [
              0
            ],
            "variables": [
              "Count"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              {
                "name": "Compare: Variable",
                "value1": "_prev_energy",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Skill22_Energy) || Variables[1] (4) || ADD || RETURN",
                  "displayLines": "(Skill22_Energy + 4)",
                  "constants": [],
                  "variables": [
                    "Skill22_Energy",
                    4
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": "Phainon_Free_Ability22",
              "canInjectUltimates": true,
              "afterInjection": []
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (4) || Variables[1] (Count) || MUL || RETURN",
            "displayLines": "(4 * Count)",
            "constants": [],
            "variables": [
              4,
              "Count"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "variableName": "_count",
                  "value": {
                    "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_count"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "M_Phainon_Ability22_TargetTimeslow",
                  "silentAdd": true
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.45) || RETURN",
                      "displayLines": "0.45",
                      "constants": [],
                      "variables": [
                        0.45
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "instanceTag": "Phainon_Skill22",
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability22_TargetTimeslow",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_delta_frame",
            "_prev_energy"
          ]
        }
      ]
    },
    "Phainon_Phainon_Ability22_Part01": {
      "fileName": "Phainon_Phainon_Ability22_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability22_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability22_Entry": {
      "fileName": "Phainon_Phainon_Ability22_Entry",
      "childAbilityList": [
        "Phainon_Phainon_Ability22_Entry",
        "Phainon_Phainon_Ability22_Part01",
        "Phainon_Phainon_Ability22_v2_Part01",
        "Phainon_Phainon_Ability22_Part02",
        "Phainon_Phainon_Ability22_v2_Part02",
        "Phainon_Phainon_Ability22_Camera",
        "Phainon_Phainon_Ability22_v2_Camera"
      ],
      "skillTrigger": "Skill22",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        3.3333333333333335,
        20,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill22_Energy",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Phainon_Ability22_v2_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Phainon_Ability22_Part01",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability21_Insert_Part02": {
      "fileName": "Phainon_Phainon_Ability21_Insert_Part02",
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
          "modifier": "M_Phainon_Ability21_InsertCheck"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard_Visual_ReadyForHitBack"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard_VisualOnStack"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard_VisualAfterAbilityUse"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "scope": "ContextAbility",
          "valueType": "Layer",
          "variableName": "ADF_GuardLayer",
          "modifierName": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
          "multiplier": 1
        },
        {
          "name": "Attack-Type Extension",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeToExtend": "Follow-up",
          "extendTypeTo": "Skill",
          "instanceIdentifier": "Phainon_Skill21"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "M_Phainon_Ability21_TargetTimeslow",
          "silentAdd": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.4) || Constants[0] (1) || Variables[1] (ADF_GuardLayer) || Variables[2] (0.2) || MUL || ADD || MUL || RETURN",
              "displayLines": "(0.4 * (1 + (ADF_GuardLayer * 0.2)))",
              "constants": [
                1
              ],
              "variables": [
                0.4,
                "ADF_GuardLayer",
                0.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.3) || Constants[0] (1) || Variables[1] (ADF_GuardLayer) || Variables[2] (0.2) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(0.3 * (1 + (ADF_GuardLayer * 0.2)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        0.3,
                        "ADF_GuardLayer",
                        0.2
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "Tags": [
                      "Counter"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Attack-Type Extension",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeToExtend": "Follow-up",
          "isRemove": true,
          "instanceIdentifier": "Phainon_Skill21"
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability21_TargetTimeslow",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Ability21_Insert_Part01": {
      "fileName": "Phainon_Phainon_Ability21_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Custom1"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Soulscorch Edict"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability21_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Ability21_InsertCheck"
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability21_Part02": {
      "fileName": "Phainon_Phainon_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "ADF_EnemyCount",
          "livingTargets": true,
          "context": "ContextAbility"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill22_Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Skill21_ExtraEnergyAdd) || Variables[1] (ADF_EnemyCount) || ADD || RETURN",
            "displayLines": "(Skill21_ExtraEnergyAdd + ADF_EnemyCount)",
            "constants": [],
            "variables": [
              "Skill21_ExtraEnergyAdd",
              "ADF_EnemyCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_AddCount",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (4) || ADD || RETURN",
                "displayLines": "(1 + 4)",
                "constants": [
                  1
                ],
                "variables": [
                  4
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_AddCount",
              "value": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.75) || RETURN",
              "displayLines": "0.75",
              "constants": [],
              "variables": [
                0.75
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ADF_AddCount) || RETURN",
            "displayLines": "ADF_AddCount",
            "constants": [],
            "variables": [
              "ADF_AddCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard_VisualOnStack"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "M_Phainon_Ability21_Mark"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Guard_VisualAfterAbilityUse"
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Phainon_Ability21_Insert_Preshow"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability21_Mark",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenOwnerUnselectable"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Guard_Visual_ReadyForHitBack",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Custom1"
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Guard_Visual_ReadyForHitBack_OverrideHitEffect",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Phainon_Guard_OverrideHitEffect"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Phainon_Guard_OverrideHitEffect"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Guard_OverrideHitEffect",
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
          "for": "Phainon_Guard_VisualAfterAbilityUse",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
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
                  "modifier": "Phainon_Guard_OverrideHitEffect"
                },
                {
                  "name": "Set Shield State/Value"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2_Defend"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Guard_VisualOnStack",
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
          "for": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "priorState": "Active",
                  "bar#": 4
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal",
                  "bar#": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "M_Phainon_Ability21_Mark"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultimate_LimboMark",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Phainon_Ultimate_LimboMark",
                                "invertCondition": true
                              }
                            ]
                          },
                          "abilityName": "Phainon_Ability21_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL"
                          ],
                          "allowAbilityTriggers": false
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultimate_LimboMark",
                        "invertCondition": true
                      },
                      {
                        "name": "Filter Target List",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Phainon_Ability21_Mark",
                          "invertCondition": true
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Guard_Visual_ReadyForHitBack",
                      "silentAdd": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_haveNotGainCountFromEnemyAction",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_HitBackCheck"
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_haveNotGainCountFromEnemyAction",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
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
                      "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_haveNotGainCountFromEnemyAction",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_HitBackCheck"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_haveNotGainCountFromEnemyAction",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Owner has Pending",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Phainon_Ability21_Mark"
                        }
                      ]
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "Phainon_Ultimate_LimboMark",
                        "invertCondition": true
                      },
                      {
                        "name": "Filter Target List",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Phainon_Ability21_Mark",
                          "invertCondition": true
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Guard_Visual_ReadyForHitBack_OverrideHitEffect",
                      "silentAdd": true
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_Count",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "function_Phainon_HitBackCheck",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultimate_LimboMark",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "M_Phainon_Ability21_Mark"
                      },
                      "noTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "conditionActive": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "Phainon_Ultimate_LimboMark",
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "abilityName": "Phainon_Ability21_Insert_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "DisableAction",
                                "STAT_CTRL"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "M_Phainon_Ability21_InsertCheck"
                            }
                          ]
                        }
                      ]
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
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Launches Counter after enemy targets finish taking actions.",
          "type": "Buff",
          "effectName": "Soulscorch",
          "statusName": "Soulscorch",
          "stackLimit": 9999,
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability21_Insert_Preshow",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Skill Name",
                  "skillName": "Skill21",
                  "useActive": true
                },
                {
                  "name": "Compare: Target Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "compareType": ">",
                  "value2": 0
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        }
      ]
    },
    "Phainon_Phainon_Ability21_Part01": {
      "fileName": "Phainon_Phainon_Ability21_Part01",
      "childAbilityList": [
        "Phainon_Phainon_Ability21_Part01",
        "Phainon_Phainon_Ability21_Part02",
        "Phainon_Phainon_Ability21_Camera",
        "Phainon_Phainon_Ability21_Insert_Part01",
        "Phainon_Phainon_Ability21_Insert_Part02",
        "Phainon_Phainon_Ability21_Insert_Camera"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        10,
        5,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Phainon_Phainon_Ability11_Part02": {
      "fileName": "Phainon_Phainon_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill22_Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Skill11_EnergyAdd) || RETURN",
            "displayLines": "Skill11_EnergyAdd",
            "constants": [],
            "variables": [
              "Skill11_EnergyAdd"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "M_Phainon_Ability11_TargetTimeslow",
          "silentAdd": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.75) || RETURN",
              "displayLines": "0.75",
              "constants": [],
              "variables": [
                0.75
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "M_Phainon_Ability11_TargetTimeslow"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.75) || RETURN",
              "displayLines": "0.75",
              "constants": [],
              "variables": [
                0.75
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability11_TargetTimeslow",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Ability11_Part01": {
      "fileName": "Phainon_Phainon_Ability11_Part01",
      "childAbilityList": [
        "Phainon_Phainon_Ability11_EnterReady",
        "Phainon_Phainon_Ability11_Part01",
        "Phainon_Phainon_Ability11_Part02",
        "Phainon_Phainon_Ability11_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        30,
        0,
        20
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability11_EnterReady": {
      "fileName": "Phainon_Phainon_Ability11_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Player Teams}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": "<=",
            "value2": 10
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                },
                "conditions": {
                  "name": "Is Body Part Owner",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Phainon_Phainon_Ability02_Part02": {
      "fileName": "Phainon_Phainon_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "M_Phainon_Ability02_TargetTimeslow",
          "silentAdd": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Phainon_Ability02_TargetTimeslow",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Phainon_Phainon_Ability02_Part01": {
      "fileName": "Phainon_Phainon_Ability02_Part01",
      "childAbilityList": [
        "Phainon_Phainon_Ability02_Part01",
        "Phainon_Phainon_Ability02_Part02",
        "Phainon_Phainon_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Phainon_Phainon_Ability01_Part02": {
      "fileName": "Phainon_Phainon_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Phainon_Phainon_Ability01_Part01": {
      "fileName": "Phainon_Phainon_Ability01_Part01",
      "childAbilityList": [
        "Phainon_Phainon_Ability01_Part01",
        "Phainon_Phainon_Ability01_Part02",
        "Phainon_Phainon_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Phainon_Modifiers": {
      "fileName": "Phainon_Modifiers",
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
          "for": "M_Phainon_Ability21_InsertCheck",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_InsertRetarget"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
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
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Phainon_InsertRetarget"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Phainon_InsertRetarget",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultimate_LimboMark"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Phainon_Ultimate_LimboMark",
                                "invertCondition": true
                              }
                            ]
                          },
                          "abilityName": "Phainon_Ability21_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_haveNotGainCountFromEnemyAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Tree03_Property[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
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
                    "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Buff",
          "statusName": "Shine with Valor"
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Eidolon2_Property[<span class=\"descriptionNumberColor\">Sky and Earth Churn Mortal Froth</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalPEN</span>&nbsp;",
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
          "description": "Physical RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Sky and Earth Churn Mortal Froth",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Assign DEPARTED(Modifier: Standard_Departed)",
                  "groupName": "MuteEntityAction"
                }
              ]
            }
          ],
          "description": "Those in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
          "type": "Other",
          "statusName": "Ruinous Irontomb"
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurOverflowSpecialSP",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (MDF_Count) || RETURN",
                      "displayLines": "MDF_Count",
                      "constants": [],
                      "variables": [
                        "MDF_Count"
                      ]
                    }
                  }
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
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "SpecialEnergy%",
                        "compareType": "<",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Count"
          ],
          "latentQueue": [],
          "description": "The current number of overflow \"Coreflame\" points is <span class=\"descriptionNumberColor\">MDF_Count</span>. Gains an equal amount of \"Coreflame\" when the transformation ends.",
          "type": "Other",
          "statusName": "Coreflame"
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Physical Weakness.",
          "type": "Debuff",
          "statusName": "Ruinous Irontomb"
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_FinalBE_Hint",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_NormalBE_Hint",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultimate_ActionBarManager",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "({{Modifier Holder}} + {{All Team Members with Unselectable Team Members(Exclude Self)}}).[[addBattleEvents]]"
                      },
                      {
                        "name": "Sort by Modifier Value",
                        "modifier": "M_Phainon_Ultimate_ActionOrder"
                      }
                    ]
                  },
                  "ifTargetFound": [
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
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Set Action-State",
                          "on": null,
                          "stateName": "Phainon_Ultra"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[addBattleEvents]]"
                  },
                  "modifier": "M_Phainon_Ultimate_ActionOrder"
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "Phainon_UltraEnd_Property[<span class=\"descriptionNumberColor\">He Who Bears the World Must Burn</span>]",
                  "duration": 1,
                  "referenceModifier": "MReference_SpeedRatioUp",
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
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActionOrderIndex",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "({{Modifier Holder}} + {{All Team Members with Unselectable Team Members(Exclude Self)}}).[[addBattleEvents]].[[sortByAV]]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Phainon_Ultimate_ActionOrder",
                      "counter": {
                        "operator": "Variables[0] (MDF_ActionOrderIndex) || RETURN",
                        "displayLines": "MDF_ActionOrderIndex",
                        "constants": [],
                        "variables": [
                          "MDF_ActionOrderIndex"
                        ]
                      },
                      "referenceModifier": "MReference_Empty"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ActionOrderIndex",
                      "value": {
                        "operator": "Variables[0] (MDF_ActionOrderIndex) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_ActionOrderIndex + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_ActionOrderIndex"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Phainon_Ultra",
                  "state": false,
                  "cancelQueueUlt": true
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": 46
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      {
                        "name": "Current Turn's Action Phase is Over",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Reset Turn AV",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "skipTurn": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceActionable"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                    },
                    {
                      "name": "Remove Flags from Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": [
                        "FormationAssetCenterWhenSingle"
                      ],
                      "modifierName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceActionable"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceActionable",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Phainon's Forced-Action Teammates}}"
                        },
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Flags to Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": [
                            "FormationAssetCenterWhenSingle"
                          ],
                          "modifierName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                          "casterFilter": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "({{All Team Members with Unselectable Team Members(Exclude Self)}} - {{Phainon's Forced-Action Teammates}}).[[addBattleEvents]]"
              },
              "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
              "haloStatus": true,
              "includeBattleEvent": true
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultimate_VisualManager",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character UI",
                  "characterName": "Phainon"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "M_Phainon_IsAbility31",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "Adjust Relative to Target, Get Team",
                      {
                        "name": "Filter by Life-State",
                        "state": "Mask_DiedButNotDispose"
                      }
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                    "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                    "constants": [],
                    "variables": [
                      "CurSpecialSP",
                      "CurOverflowSpecialSP"
                    ]
                  },
                  "activeCount": {
                    "operator": "Variables[0] (12) || RETURN",
                    "displayLines": "12",
                    "constants": [],
                    "variables": [
                      12
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (12) || RETURN",
                    "displayLines": "12",
                    "constants": [],
                    "variables": [
                      12
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurSpecialSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (12) || RETURN",
                      "displayLines": "12",
                      "constants": [],
                      "variables": [
                        12
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Action Count",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "variableName": "#CL_MDF_BECount",
                      "livingTargets": true,
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Set Phainon Action Count",
                      "value": {
                        "operator": "Variables[0] (#CL_MDF_BECount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(#CL_MDF_BECount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "#CL_MDF_BECount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2_Limbo"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character UI",
                  "characterName": "Khaslana",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "variableName": "#CL_MDF_BECount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                },
                {
                  "name": "Set Phainon Action Count",
                  "value": {
                    "operator": "Variables[0] (#CL_MDF_BECount) || RETURN",
                    "displayLines": "#CL_MDF_BECount",
                    "constants": [],
                    "variables": [
                      "#CL_MDF_BECount"
                    ]
                  }
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Skill22_Energy",
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
                  "name": "Set Phainon Charge Points",
                  "value": {
                    "operator": "Variables[0] (Skill22_Energy) || RETURN",
                    "displayLines": "Skill22_Energy",
                    "constants": [],
                    "variables": [
                      "Skill22_Energy"
                    ]
                  }
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "Adjust Relative to Target, Get Team",
                      {
                        "name": "Filter by Life-State",
                        "state": "Mask_DiedButNotDispose"
                      }
                    ]
                  },
                  "stayInTeam": true
                },
                {
                  "name": "Set Phainon Action Count",
                  "value": {
                    "operator": "Variables[0] (8) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(8 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      8
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal",
                  "bar#": 1
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2_Defend"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity a Part/Body Extension",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Lineup Position",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "_enemyIndex"
                    },
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variableName": "_enemyCount",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_enemyIndex",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (_enemyCount) || Constants[0] (2) || DIV || RETURN",
                          "displayLines": "(_enemyCount / 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            "_enemyCount"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Phainon_BEInsertAction"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "variableName": "#CL_MDF_BECount",
                      "livingTargets": true,
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Khaslana(Battle Event Cluster)}}"
                        },
                        "compareType": "<=",
                        "value2": 0
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Skill22_Energy",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Show",
                      "abilityName": "Skill"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Hide",
                      "abilityName": "Skill"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Action Count",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "variableName": "#CL_MDF_BECount",
                      "livingTargets": true,
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Set Phainon Action Count",
                      "value": {
                        "operator": "Variables[0] (#CL_MDF_BECount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(#CL_MDF_BECount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "#CL_MDF_BECount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": "Skill21",
                        "useActive": true
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultimate_LimboMark",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "EnduranceLogicOnly",
            "CustomEvent_InfiniteRefresh",
            "FormationAssetCenterWhenSingle",
            "SpecialActionState",
            "SpecialBattleArea"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "Phainon_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "M_Phainon_IsAbility31",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Phainon_ClearAvatarArea",
                      "variables": {
                        "IsAsyncLoad": 0
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "March to Oblivion"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                      "variables": {
                        "parameter[0]_AddValue": {
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
                    "name": "Trace Activated",
                    "conditionList": "Shine with Valor"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Phainon_Tree03_Property[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill04"
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_UltraEndCheck"
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
                  "modifier": "Phainon_Ultimate_ActionBarManager"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Turn Owner}}"
                      },
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Value",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "LifeTime"
                      },
                      "modifierType": "Buff",
                      "execute": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Current Turn Owner}}"
                          },
                          "modifierName": "ParamModifier",
                          "function": "Add",
                          "value": 1,
                          "valueType": "Duration"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio2) || RETURN",
                    "displayLines": "MDF_PropertyRatio2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio2"
                    ]
                  }
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill04"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Phainon_Ultimate_LimboMark"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Phainon_Ability31_SelectTarget_OnLimbo",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "AvatarReviveSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "UnOperable"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_UltraEndCheck"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_UltraEndCheck"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_UltraEndCheck"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  }
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
                    "modifier": "ClearAvatarArea_ByAbility"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "abilityName": "Phainon_Ability31_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_UltraEndCheck"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
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
                      "name": "Use Custom Character Function",
                      "functionName": "function_Phainon_UltraEndCheck"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Redirect AV Changes",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "endRedirect": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Khaslana(Battle Event Cluster)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
                        {
                          "name": "Redirect AV Changes",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Khaslana(Battle Event Cluster)}}.[[sortByAV]].[[index1]]"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Start [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "function_Phainon_UltraEndCheck",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Phainon_Ultimate_LimboMark"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Khaslana(Battle Event Cluster)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "skillOwner": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "QueuedUltimates",
                            "compareType": "<=",
                            "value2": 0,
                            "includeInjectedActions": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "abilityName": "Phainon_Ability31_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_PropertyRatio2"
          ],
          "latentQueue": [],
          "description": "Immune to Crowd Control debuffs. ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>, and Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio2</span>.",
          "type": "Other",
          "statusName": "Divine Vessel",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Phainon_Ultimate_VisualManager"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Phainon_Eidolon2_Property[<span class=\"descriptionNumberColor\">Sky and Earth Churn Mortal Froth</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Phainon_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
              "haloStatus": true
            }
          ]
        }
      ],
      "references": []
    },
    "Phainon_Functions": {
      "fileName": "Phainon_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Phainon_Passive_AsAbilityTarget",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
              "variables": {
                "parameter[0]_AddValue": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}.[[getTeamMembers]] - {{Caster}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Phainon_Passive_Property[<span class=\"descriptionNumberColor\">Pyric Corpus</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "referenceModifier": "MReference_CriticalDamageUp",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
          "parse": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
                "displayLines": "parameter[0]_AddValue",
                "constants": [],
                "variables": [
                  "parameter[0]_AddValue"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "SpecialEnergy%",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 1,
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CurOverflowSpecialSP",
                      "context": "ContextCaster",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Phainon_ClearAvatarArea",
          "parse": [
            {
              "name": "Change Battle Arena",
              "arena": "PhainonBattleArea",
              "tag": "BattleArea01",
              "status": "Inactive",
              "priorityTag": "Character"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "IsAsyncLoad",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Change Character Model",
                  "passed": [
                    {
                      "name": "Set Render/Load State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "showOrLoad": false
                    },
                    "Deleted bullshit"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Change Character Model",
                  "passed": [
                    {
                      "name": "Set Render/Load State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "showOrLoad": false
                    },
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Phainon_BE_BattleEvents": {
      "fileName": "Phainon_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 11408,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "Phainon_Ability03_BattleEvent",
            "BattleEventAbility_620601_Camera"
          ],
          "overridesArray": [],
          "hardLevelEvent": true,
          "barType": 1
        }
      ],
      "references": []
    }
  }
}