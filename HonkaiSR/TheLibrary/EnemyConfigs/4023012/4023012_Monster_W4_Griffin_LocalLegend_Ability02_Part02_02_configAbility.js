const configAbility = {
  "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "UI Display Event",
      "popUpText": "Triple Waning Moon"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": "=",
        "value2": 4,
        "livingTargets": true
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "=",
            "value2": 3,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
      },
      "variable": "#Skill02_P1_DamagePercentage",
      "target2": null,
      "variable2": "Unicorn_Skill02_DamagePercentage"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
      },
      "variable": "#PassiveSkill01_P1_Debuff_Chance",
      "target2": null,
      "variable2": "Unicorn_Debuff_Chance"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
      },
      "variable": "#PassiveSkill01_P2_Debuff_LifeTime",
      "target2": null,
      "variable2": "Unicorn_Debuff_LifeTime"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
      },
      "variable": "#PassiveSkill01_P3_Debuff_ActionDelayRatio",
      "target2": null,
      "variable2": "Unicorn_Debuff_ActionDelayRatio"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
      },
      "variable": "#PassiveSkill01_P4_Debuff_DamagePercentage",
      "target2": null,
      "variable2": "Unicorn_Debuff_DamagePercentage"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": "=",
        "value2": 4,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-230594123\">Monster_W4_Griffin_LocalLegend_Ability02_Attack03</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-972302734\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack03</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "=",
            "value2": 3,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
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
            "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
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
            "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-230594123\">Monster_W4_Griffin_LocalLegend_Ability02_Attack03</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
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
            "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (Unicorn_Skill02_DamagePercentage) || RETURN",
              "displayLines": "Unicorn_Skill02_DamagePercentage",
              "constants": [],
              "variables": [
                "Unicorn_Skill02_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] (Unicorn_Debuff_LifeTime) || RETURN",
                "displayLines": "Unicorn_Debuff_LifeTime",
                "constants": [],
                "variables": [
                  "Unicorn_Debuff_LifeTime"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (Unicorn_Debuff_Chance) || RETURN",
                "displayLines": "Unicorn_Debuff_Chance",
                "constants": [],
                "variables": [
                  "Unicorn_Debuff_Chance"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (Unicorn_Debuff_ActionDelayRatio) || RETURN",
                  "displayLines": "Unicorn_Debuff_ActionDelayRatio",
                  "constants": [],
                  "variables": [
                    "Unicorn_Debuff_ActionDelayRatio"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] (Unicorn_Debuff_DamagePercentage) || RETURN",
                  "displayLines": "Unicorn_Debuff_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Unicorn_Debuff_DamagePercentage"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (Unicorn_Skill02_DamagePercentage) || RETURN",
              "displayLines": "Unicorn_Skill02_DamagePercentage",
              "constants": [],
              "variables": [
                "Unicorn_Skill02_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] (Unicorn_Debuff_LifeTime) || RETURN",
                "displayLines": "Unicorn_Debuff_LifeTime",
                "constants": [],
                "variables": [
                  "Unicorn_Debuff_LifeTime"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (Unicorn_Debuff_Chance) || RETURN",
                "displayLines": "Unicorn_Debuff_Chance",
                "constants": [],
                "variables": [
                  "Unicorn_Debuff_Chance"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (Unicorn_Debuff_ActionDelayRatio) || RETURN",
                  "displayLines": "Unicorn_Debuff_ActionDelayRatio",
                  "constants": [],
                  "variables": [
                    "Unicorn_Debuff_ActionDelayRatio"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] (Unicorn_Debuff_DamagePercentage) || RETURN",
                  "displayLines": "Unicorn_Debuff_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Unicorn_Debuff_DamagePercentage"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-972302734\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack03</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (Unicorn_Skill02_DamagePercentage) || RETURN",
              "displayLines": "Unicorn_Skill02_DamagePercentage",
              "constants": [],
              "variables": [
                "Unicorn_Skill02_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] (Unicorn_Debuff_LifeTime) || RETURN",
                "displayLines": "Unicorn_Debuff_LifeTime",
                "constants": [],
                "variables": [
                  "Unicorn_Debuff_LifeTime"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (Unicorn_Debuff_Chance) || RETURN",
                "displayLines": "Unicorn_Debuff_Chance",
                "constants": [],
                "variables": [
                  "Unicorn_Debuff_Chance"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (Unicorn_Debuff_ActionDelayRatio) || RETURN",
                  "displayLines": "Unicorn_Debuff_ActionDelayRatio",
                  "constants": [],
                  "variables": [
                    "Unicorn_Debuff_ActionDelayRatio"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] (Unicorn_Debuff_DamagePercentage) || RETURN",
                  "displayLines": "Unicorn_Debuff_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Unicorn_Debuff_DamagePercentage"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}