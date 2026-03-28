const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3002030,
  "trimCharacterName": 3002030,
  "abilityList": [
    "3002030_Monster_W2_Beast01_03_Ability02_Part02",
    "3002030_Monster_W2_Beast01_03_Ability02_Insert",
    "3002030_Monster_W2_Beast01_03_Ability01_Part02",
    "3002030_Monster_W2_Beast01_03_Ability01_Part01",
    "3002030_Monster_W2_Beast01_03_AbilityP01_Initiate",
    "3002030_Modifiers"
  ],
  "abilityObject": {
    "3002030_Monster_W2_Beast01_03_Ability02_Part02": {
      "fileName": "3002030_Monster_W2_Beast01_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Caster}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
              "displayLines": "{[Skill02[5]]}",
              "constants": [],
              "variables": [
                "{[Skill02[5]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": 30
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Caster}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
              "displayLines": "{[Skill02[5]]}",
              "constants": [],
              "variables": [
                "{[Skill02[5]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": 30
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1551178382\">Monster_Standard_SpeedAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "Current_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
          "multiplier": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1066196333\">Monster_W2_Beast01_03_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            "Modifier_Bleed_MaxDamagePercentage": {
              "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
              "displayLines": "{[Skill02[4]]}",
              "constants": [],
              "variables": [
                "{[Skill02[4]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (Current_Layer) || RETURN",
            "displayLines": "Current_Layer",
            "constants": [],
            "variables": [
              "Current_Layer"
            ]
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002030_Monster_W2_Beast01_03_Ability02_Insert": {
      "fileName": "3002030_Monster_W2_Beast01_03_Ability02_Insert",
      "childAbilityList": [
        "3002030_Monster_W2_Beast01_03_Ability02_Camera",
        "3002030_Monster_W2_Beast01_03_Ability02_Insert",
        "3002030_Monster_W2_Beast01_03_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Libation of Sweetness"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Beast01_03_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002030_Monster_W2_Beast01_03_Ability01_Part02": {
      "fileName": "3002030_Monster_W2_Beast01_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "Current_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
          "multiplier": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] ({[Skill01[1]]}) || Variables[2] (Current_Layer) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01[0]]} + ({[Skill01[1]]} * Current_Layer))",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}",
                "{[Skill01[1]]}",
                "Current_Layer"
              ]
            },
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
    "3002030_Monster_W2_Beast01_03_Ability01_Part01": {
      "fileName": "3002030_Monster_W2_Beast01_03_Ability01_Part01",
      "childAbilityList": [
        "3002030_Monster_W2_Beast01_03_Ability01_Camera",
        "3002030_Monster_W2_Beast01_03_Ability01_Part01",
        "3002030_Monster_W2_Beast01_03_Ability01_Part02"
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
          "ability": "Monster_W2_Beast01_03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3002030_Monster_W2_Beast01_03_AbilityP01_Initiate": {
      "fileName": "3002030_Monster_W2_Beast01_03_AbilityP01_Initiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1878845540\">Monster_W2_Beast01_03_Bonus</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1354829025\">Monster_W2_Beast01_03_BeAttackedListener</a>",
          "stackLimit": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Beast01_03_AIFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Current_Layer",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-867295363\">Monster_Standard_ConfineHit</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002030_Modifiers": {
      "fileName": "3002030_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1066196333\">Monster_W2_Beast01_03_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDamage",
                  "value": {
                    "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                    "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                    "constants": [],
                    "variables": [
                      "Owner_MaxHP",
                      "Modifier_Bleed_DamagePercentage",
                      "Modifier_Layer"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentDamage",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Modifier_Bleed_MaxDamagePercentage) || Variables[1] (MDF_CasterMaxHP) || MUL || RETURN",
                      "displayLines": "(Modifier_Bleed_MaxDamagePercentage * MDF_CasterMaxHP)",
                      "constants": [],
                      "variables": [
                        "Modifier_Bleed_MaxDamagePercentage",
                        "MDF_CasterMaxHP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (Modifier_Bleed_MaxDamagePercentage) || Variables[1] (MDF_CasterMaxHP) || MUL || RETURN",
                        "displayLines": "(Modifier_Bleed_MaxDamagePercentage * MDF_CasterMaxHP)",
                        "constants": [],
                        "variables": [
                          "Modifier_Bleed_MaxDamagePercentage",
                          "MDF_CasterMaxHP"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                        "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                        "constants": [],
                        "variables": [
                          "Owner_MaxHP",
                          "Modifier_Bleed_DamagePercentage",
                          "Modifier_Layer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                      "displayLines": "MDF_DamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDamage",
                  "value": {
                    "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                    "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                    "constants": [],
                    "variables": [
                      "Owner_MaxHP",
                      "Modifier_Bleed_DamagePercentage",
                      "Modifier_Layer"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentDamage",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Modifier_Bleed_MaxDamagePercentage) || Variables[1] (MDF_CasterMaxHP) || MUL || RETURN",
                      "displayLines": "(Modifier_Bleed_MaxDamagePercentage * MDF_CasterMaxHP)",
                      "constants": [],
                      "variables": [
                        "Modifier_Bleed_MaxDamagePercentage",
                        "MDF_CasterMaxHP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (Modifier_Bleed_MaxDamagePercentage) || Variables[1] (MDF_CasterMaxHP) || MUL || RETURN",
                        "displayLines": "(Modifier_Bleed_MaxDamagePercentage * MDF_CasterMaxHP)",
                        "constants": [],
                        "variables": [
                          "Modifier_Bleed_MaxDamagePercentage",
                          "MDF_CasterMaxHP"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                        "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                        "constants": [],
                        "variables": [
                          "Owner_MaxHP",
                          "Modifier_Bleed_DamagePercentage",
                          "Modifier_Layer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_MaxLayer",
            "Modifier_Bleed_DamagePercentage",
            "Modifier_Bleed_MaxDamagePercentage"
          ],
          "latentQueue": [],
          "description": "For a certain number of turns, receive Physical DMG based on Max HP at the beginning of each turn, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "duration": 3,
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "SilenceStackWhenMaxLayer"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Current_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Current_Layer",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Current_Layer",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Eff_Flag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Eff_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Enhances ability effects, stacking up to <span class=\"descriptionNumberColor\">MDF_ShowValue</span> times.",
          "type": "Other",
          "effectName": "SoulGlad Revel",
          "statusName": "SoulGlad Revel",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1354829025\">Monster_W2_Beast01_03_BeAttackedListener</a>",
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
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ShowValue": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        }
                      }
                    }
                  ]
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                      "displayLines": "{[SkillP01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[0]]}"
                      ]
                    }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1878845540\">Monster_W2_Beast01_03_Bonus</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
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
                  "abilityName": "Monster_W2_Beast01_03_Ability02_Insert",
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1551178382\">Monster_Standard_SpeedAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        }
      ],
      "references": []
    }
  }
}