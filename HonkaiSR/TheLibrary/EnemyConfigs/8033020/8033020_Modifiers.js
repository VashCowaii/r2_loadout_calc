const configAbility = {
  "fileName": "8033020_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1225325614\">W4_Claymore_04_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1394805142\">Modifier_Monster_W4_Claymore_04_Defeated</a>[<span class=\"descriptionNumberColor\">Ruined</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "You Shouldn't Have!",
                      "desc": "In combat against the \"Lighthouse,\" dispel its \"Smite Evil\" state via attacks",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__857640376\">Modifier_Monster_W4_Claymore_04_ExitCharge</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1394805142\">Modifier_Monster_W4_Claymore_04_Defeated</a>[<span class=\"descriptionNumberColor\">Ruined</span>]",
      "stackType": "Replace",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Ruined",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                "displayLines": "MDF_DamageTakenUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUpRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2082088888\">Modifier_Monster_W4_Claymore_04_Ability03_Charge_ForShow</a>[<span class=\"descriptionNumberColor\">Smite Evil</span>]",
      "description": "Uses \"Smite All Evil\" in the next action.",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Smite Evil"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-374062983\">Modifier_Monster_W4_Claymore_04_Ability03_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1452769834\">Modifier_Monster_W4_Claymore_04_Ability03_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"857640376\">Modifier_Monster_W4_Claymore_04_ExitCharge</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Layer",
              "value": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
              "stackLimit": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_DamageResistanceRatio": {
                  "operator": "Variables[0] (MDF_DamageResistanceRatio) || RETURN",
                  "displayLines": "MDF_DamageResistanceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_DamageResistanceRatio"
                  ]
                },
                "MDF_SpeedAddedRatio": {
                  "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                  "displayLines": "MDF_SpeedAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_SpeedAddedRatio"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1452769834\">Modifier_Monster_W4_Claymore_04_Ability03_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageResistanceRatio": {
                      "operator": "Variables[0] (MDF_DamageResistanceRatio) || RETURN",
                      "displayLines": "MDF_DamageResistanceRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageResistanceRatio"
                      ]
                    },
                    "MDF_SpeedAddedRatio": {
                      "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                      "displayLines": "MDF_SpeedAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_SpeedAddedRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Enemy"
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Attack Targets}}"
                    },
                    "conditions": {
                      "name": "Is Part Of Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "team": "Player Team"
                    }
                  }
                ]
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
                        "value1": "MDF_Layer",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W4_Claymore_04_Skill04Mark",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Layer",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_Layer",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
                          "valuePerStack": {
                            "MDF_DamageResistanceRatio": {
                              "operator": "Variables[0] (MDF_DamageResistanceRatio) || RETURN",
                              "displayLines": "MDF_DamageResistanceRatio",
                              "constants": [],
                              "variables": [
                                "MDF_DamageResistanceRatio"
                              ]
                            },
                            "MDF_SpeedAddedRatio": {
                              "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                              "displayLines": "MDF_SpeedAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_SpeedAddedRatio"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
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
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Layer",
                      "value": -1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
                      "addStacksPerTrigger": -1
                    }
                  ]
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"857640376\">Modifier_Monster_W4_Claymore_04_ExitCharge</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
                        "displayLines": "-MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
                        "displayLines": "-MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Layer",
                      "value": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__1452769834\">Modifier_Monster_W4_Claymore_04_Ability03_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "MuteBreak"
      ],
      "description": "This unit's Toughness cannot be reduced. This effect is dispelled when \"Lighthouse\" dispels the \"Smite Evil\" state.",
      "type": "Other",
      "effectName": "Weakness Protected",
      "statusName": "Weakness Protected",
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
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1791118928\">Modifier_Monster_W4_Claymore_04_Ability03_WeaponEff</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-579922518\">Modifier_Monster_W4_Claymore_04_Enhanced_To_DarkTeam</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
              "valuePerStack": {
                "MDF_DamageResistanceRatio": {
                  "operator": "Variables[0] (MDF_DamageResistanceRatio) || RETURN",
                  "displayLines": "MDF_DamageResistanceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_DamageResistanceRatio"
                  ]
                },
                "MDF_SpeedAddedRatio": {
                  "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                  "displayLines": "MDF_SpeedAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_SpeedAddedRatio"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__561167908\">Modifier_Monster_W4_Claymore_04_Enhanced_To_LightTeam</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
              "valuePerStack": {
                "MDF_DamageResistanceRatio": {
                  "operator": "Variables[0] (MDF_DamageResistanceRatio) || RETURN",
                  "displayLines": "MDF_DamageResistanceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_DamageResistanceRatio"
                  ]
                },
                "MDF_SpeedAddedRatio": {
                  "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                  "displayLines": "MDF_SpeedAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_SpeedAddedRatio"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__334) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__334",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__334"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_DamageResistanceRatio",
        "MDF_SpeedAddedRatio"
      ],
      "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistanceRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Taken Reduction",
      "statusName": "Inspire",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageResistanceRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageResistanceRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageResistanceRatio",
                  "MDF_Layer"
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
                "value1": "MDF_Layer",
                "compareType": "<=",
                "value2": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__-281791803\">Modifier_Monster_W4_Claymore_04_Honor_Monitor</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "assignState": "True",
              "state": "Active"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
                  "multiplier": 1
                }
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
                "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Layer",
                  "value": 0
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
                "value1": "MDF_Layer",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "abilityName": "Monster_W4_Claymore_04_AbilityP01_InsertAbility_Part01",
                  "priorityTag": "EnemyPhaseChange",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
      "stackType": "Replace",
      "description": "While in the \"Smite Evil\" state, all enemy targets gain the \"Inspire\" effect equal to Lighthouse's \"All Wishes\" stacks.",
      "type": "Buff",
      "effectName": "All Wishes",
      "statusName": "All Wishes",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "assignState": "True",
              "barType": "Hulei"
            },
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
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "abilityName": "Monster_W4_Claymore_04_AbilityP01_InsertAbility_Part01",
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
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
                    "value1": "MDF_Layer",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || Constants[0] (2) || DIV || RETURN",
                      "displayLines": "(MDF_MaxLayer / 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  {
                    "name": "Has Unique Effect Name",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "uniqueName": "ChargeRingLoop02",
                    "allowUnReady": true
                  }
                ]
              }
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
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || Constants[0] (2) || DIV || RETURN",
                      "displayLines": "(MDF_MaxLayer / 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  {
                    "name": "Has Unique Effect Name",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "uniqueName": "ChargeRingLoop02",
                    "invertCondition": true,
                    "allowUnReady": true
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}