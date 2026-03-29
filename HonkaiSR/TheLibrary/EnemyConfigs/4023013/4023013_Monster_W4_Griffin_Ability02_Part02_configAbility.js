const configAbility = {
  "fileName": "4023013_Monster_W4_Griffin_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1273402705\">Monster_W4_Griffin_NoSummon</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID03) || RETURN",
                "displayLines": "SummonID03",
                "constants": [],
                "variables": [
                  "SummonID03"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
            "displayLines": "{[Skill02[4]]}",
            "constants": [],
            "variables": [
              "{[Skill02[4]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID04) || RETURN",
                "displayLines": "SummonID04",
                "constants": [],
                "variables": [
                  "SummonID04"
                ]
              },
              "locationType": "AroundCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "compareType": "NOT=",
        "value2": 1,
        "livingTargets": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "compareType": ">=",
        "value2": 3,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Noontide Gryphon: Skill02 Target}}"
              },
              {
                "name": "Target Index"
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Noontide Gryphon: Skill02 Target}}"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Noontide Gryphon: Skill02 Target}}"
              },
              {
                "name": "Target Index",
                "indexValue": 2
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": ">=",
            "value2": 2,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 1
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Location",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "spot": "KeepOnFirst"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Location",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "spot": "KeepOnLast"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Location",
              "value": 0
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
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
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
              "valuePerStack": {
                "_GriffinMark_SPCost": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "_GriffinMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "_MixedMark_LoseHpRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "_UnicornMark_Chance": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "_UnicornMark_LifeTime": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                },
                "_UnicornMark_ActionDelayRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                },
                "_UnicornMark_DebuffDamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[3]]}"
                  ]
                },
                "_UnicornMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
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
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
              "valuePerStack": {
                "_GriffinMark_SPCost": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "_GriffinMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "_MixedMark_LoseHpRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "_UnicornMark_Chance": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "_UnicornMark_LifeTime": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                },
                "_UnicornMark_ActionDelayRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                },
                "_UnicornMark_DebuffDamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[3]]}"
                  ]
                },
                "_UnicornMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
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
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
              "valuePerStack": {
                "_GriffinMark_SPCost": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "_GriffinMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "_MixedMark_LoseHpRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "_UnicornMark_Chance": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "_UnicornMark_LifeTime": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                },
                "_UnicornMark_ActionDelayRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                },
                "_UnicornMark_DebuffDamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[3]]}"
                  ]
                },
                "_UnicornMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
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
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
              "valuePerStack": {
                "_GriffinMark_SPCost": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "_GriffinMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "_MixedMark_LoseHpRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "_UnicornMark_Chance": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "_UnicornMark_LifeTime": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                },
                "_UnicornMark_ActionDelayRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                },
                "_UnicornMark_DebuffDamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[3]]}"
                  ]
                },
                "_UnicornMark_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1715953719\">Monster_W4_Griffin_Ability02_Target03</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1699176100\">Monster_W4_Griffin_Ability02_Target02</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1749508957\">Monster_W4_Griffin_Ability02_Target01</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}