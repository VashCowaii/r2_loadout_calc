const compositeAbilityObject = {
  "fullCharacterName": 4062020,
  "trimCharacterName": 4062020,
  "abilityList": [
    "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part02",
    "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part01",
    "4062020_Monster_W2_Beast01_04_Ability01_Part02",
    "4062020_Monster_W2_Beast01_04_Ability01_Part01",
    "4062020_Monster_W2_Beast01_04_AbilityP02",
    "4062020_Monster_W2_Beast01_04_AbilityP01",
    "4062020_Modifiers"
  ],
  "abilityObject": {
    "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part02": {
      "fileName": "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill03",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Target Left of Caster}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-771052398\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Hemotort Stain</span>]",
                      "valuePerStack": {
                        "MDF_GoldBloodDOTDamageRatio": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Target Right of Caster}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-771052398\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Hemotort Stain</span>]",
                      "valuePerStack": {
                        "MDF_GoldBloodDOTDamageRatio": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part01": {
      "fileName": "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4062020_Monster_W2_Beast01_04_Ability01_Part02": {
      "fileName": "4062020_Monster_W2_Beast01_04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4062020_Monster_W2_Beast01_04_Ability01_Part01": {
      "fileName": "4062020_Monster_W2_Beast01_04_Ability01_Part01",
      "childAbilityList": [
        "4062020_Monster_W2_Beast01_04_Ability01_Camera",
        "4062020_Monster_W2_Beast01_04_Ability01_Part01",
        "4062020_Monster_W2_Beast01_04_Ability01_Part02"
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
          "ability": "Monster_W2_Beast01_04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4062020_Monster_W2_Beast01_04_AbilityP02": {
      "fileName": "4062020_Monster_W2_Beast01_04_AbilityP02",
      "childAbilityList": [
        "4062020_Monster_W2_Beast01_04_AbilityP02",
        "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part01",
        "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part02",
        "4062020_Monster_W2_Beast01_04_AbilityP02_InsertAbility_Camera"
      ],
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4062020_Monster_W2_Beast01_04_AbilityP01": {
      "fileName": "4062020_Monster_W2_Beast01_04_AbilityP01",
      "childAbilityList": [
        "4062020_Monster_W2_Beast01_04_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1786069431\">Enemy_W2_Beast01_04_AbilityP02_DeathRattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-771052398\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Hemotort Stain</span>]",
          "valuePerStack": {
            "MDF_GoldBloodDOTDamageRatio": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          }
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-993887966\">Enemy_W2_Beast01_04_EffectController</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-993887966\">Enemy_W2_Beast01_04_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase0"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4062020_Modifiers": {
      "fileName": "4062020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]",
          "stackType": "Multiple",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                      "displayLines": "MDF_DamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Take a set amount of <span class=\"descriptionNumberColor\">MDF_DamageValue</span> Imaginary DMG at the beginning of the turn.",
          "type": "Debuff",
          "effectName": "Hemotort Corruption",
          "statusName": "Hemotort Corruption",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_Damage",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "_TotalDamage",
                      "value": {
                        "operator": "Variables[0] (_TotalDamage) || Variables[1] (_Damage) || ADD || RETURN",
                        "displayLines": "(_TotalDamage + _Damage)",
                        "constants": [],
                        "variables": [
                          "_TotalDamage",
                          "_Damage"
                        ]
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
                        "value1": "_TotalDamage",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_TotalDamage",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_TotalDamage",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
                }
              ]
            }
          ],
          "useEntitySnapshot": true
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-771052398\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Hemotort Stain</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "mustBeAlive2": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>",
                      "variable": "_TotalDamage",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "TargetTotalDamage",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]",
                      "valuePerStack": {
                        "MDF_DamageValue": {
                          "operator": "Variables[0] (TargetTotalDamage) || Variables[1] (MDF_GoldBloodDOTDamageRatio) || MUL || RETURN",
                          "displayLines": "(TargetTotalDamage * MDF_GoldBloodDOTDamageRatio)",
                          "constants": [],
                          "variables": [
                            "TargetTotalDamage",
                            "MDF_GoldBloodDOTDamageRatio"
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
            "MDF_GoldBloodDOTDamageRatio"
          ],
          "latentQueue": [],
          "description": "After attacking, applies \"Hemotort Corruption\" based on the amount of DMG taken (not offset by Shield) to the selected characters.",
          "type": "Other",
          "effectName": "Hemotort Stain",
          "statusName": "Hemotort Stain"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1786069431\">Enemy_W2_Beast01_04_AbilityP02_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}