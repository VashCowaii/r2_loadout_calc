const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCSandworm_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event"
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"492766471\">Modifier_RogueDLCSandworm_Upgrade1</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || Variables[1] (ExtraLifeTime) || ADD || RETURN",
                    "displayLines": "(LifeTime + ExtraLifeTime)",
                    "constants": [],
                    "variables": [
                      "LifeTime",
                      "ExtraLifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || Variables[1] (ExtraChance) || ADD || RETURN",
                    "displayLines": "(Chance + ExtraChance)",
                    "constants": [],
                    "variables": [
                      "Chance",
                      "ExtraChance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (DamagePercentage) || RETURN",
                      "displayLines": "DamagePercentage",
                      "constants": [],
                      "variables": [
                        "DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Rogue"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || RETURN",
                    "displayLines": "LifeTime",
                    "constants": [],
                    "variables": [
                      "LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || RETURN",
                    "displayLines": "Chance",
                    "constants": [],
                    "variables": [
                      "Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (DamagePercentage) || RETURN",
                      "displayLines": "DamagePercentage",
                      "constants": [],
                      "variables": [
                        "DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Rogue"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"492766471\">Modifier_RogueDLCSandworm_Upgrade1</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || Variables[1] (ExtraLifeTime) || ADD || RETURN",
                    "displayLines": "(LifeTime + ExtraLifeTime)",
                    "constants": [],
                    "variables": [
                      "LifeTime",
                      "ExtraLifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || Variables[1] (ExtraChance) || ADD || RETURN",
                    "displayLines": "(Chance + ExtraChance)",
                    "constants": [],
                    "variables": [
                      "Chance",
                      "ExtraChance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (DamagePercentage) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(DamagePercentage * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "DamagePercentage"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 2,
                  "stackFlag": "Rogue"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || RETURN",
                    "displayLines": "LifeTime",
                    "constants": [],
                    "variables": [
                      "LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || RETURN",
                    "displayLines": "Chance",
                    "constants": [],
                    "variables": [
                      "Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (DamagePercentage) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(DamagePercentage * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "DamagePercentage"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 2,
                  "stackFlag": "Rogue"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"492766471\">Modifier_RogueDLCSandworm_Upgrade1</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || Variables[1] (ExtraLifeTime) || ADD || RETURN",
                    "displayLines": "(LifeTime + ExtraLifeTime)",
                    "constants": [],
                    "variables": [
                      "LifeTime",
                      "ExtraLifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || Variables[1] (ExtraChance) || ADD || RETURN",
                    "displayLines": "(Chance + ExtraChance)",
                    "constants": [],
                    "variables": [
                      "Chance",
                      "ExtraChance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "operator": "Variables[0] (DamagePercentage) || RETURN",
                      "displayLines": "DamagePercentage",
                      "constants": [],
                      "variables": [
                        "DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Rogue"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || RETURN",
                    "displayLines": "LifeTime",
                    "constants": [],
                    "variables": [
                      "LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || RETURN",
                    "displayLines": "Chance",
                    "constants": [],
                    "variables": [
                      "Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "operator": "Variables[0] (DamagePercentage) || RETURN",
                      "displayLines": "DamagePercentage",
                      "constants": [],
                      "variables": [
                        "DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Rogue"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"492766471\">Modifier_RogueDLCSandworm_Upgrade1</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || Variables[1] (ExtraLifeTime) || ADD || RETURN",
                    "displayLines": "(LifeTime + ExtraLifeTime)",
                    "constants": [],
                    "variables": [
                      "LifeTime",
                      "ExtraLifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || Variables[1] (ExtraChance) || ADD || RETURN",
                    "displayLines": "(Chance + ExtraChance)",
                    "constants": [],
                    "variables": [
                      "Chance",
                      "ExtraChance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": {
                      "operator": "Variables[0] (BleedPercent) || RETURN",
                      "displayLines": "BleedPercent",
                      "constants": [],
                      "variables": [
                        "BleedPercent"
                      ]
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "operator": "Variables[0] (BleedPercent) || Constants[0] (2) || MUL || RETURN",
                      "displayLines": "(BleedPercent * 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "BleedPercent"
                      ]
                    }
                  },
                  "stackFlag": "Rogue"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "operator": "Variables[0] (LifeTime) || RETURN",
                    "displayLines": "LifeTime",
                    "constants": [],
                    "variables": [
                      "LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Chance) || RETURN",
                    "displayLines": "Chance",
                    "constants": [],
                    "variables": [
                      "Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": {
                      "operator": "Variables[0] (BleedPercent) || RETURN",
                      "displayLines": "BleedPercent",
                      "constants": [],
                      "variables": [
                        "BleedPercent"
                      ]
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "operator": "Variables[0] (BleedPercent) || Constants[0] (2) || MUL || RETURN",
                      "displayLines": "(BleedPercent * 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "BleedPercent"
                      ]
                    }
                  },
                  "stackFlag": "Rogue"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-713594228\">Modifier_BattleEventAbility_Flag</a>"
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"404471449\">Modifier_BattleEventAbility_RogueDLCSandworm_DamageUp</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__404471449\">Modifier_BattleEventAbility_RogueDLCSandworm_DamageUp</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
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
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ExtraDamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(ExtraDamagePercentage * _Layer)",
                "constants": [],
                "variables": [
                  "ExtraDamagePercentage",
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-713594228\">Modifier_BattleEventAbility_Flag</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}