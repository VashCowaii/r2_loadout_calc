const configAbility = {
  "fileName": "5024011_Monster_W5_Ripper_Ability06_Part02",
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
        "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MainCount",
              "value": 3
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
      "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.07,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "HitSplit": 0.23,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                    "displayLines": "{[Skill06[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_FleshElationPoint": {
                      "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                      "displayLines": "{[Skill06[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[3]]}"
                      ]
                    },
                    "MDF_FleshExtraChance": {
                      "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                      "displayLines": "{[Skill06[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[4]]}"
                      ]
                    },
                    "MDF_FleshExtraElationPoint": {
                      "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                      "displayLines": "{[Skill06[5]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[5]]}"
                      ]
                    },
                    "MDF_AttackEnemyChance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "MDF_MaxDamageRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "MDF_MinDamageRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "MDF_ExtraDamageMultiple": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    },
                    "MDF_EnemyExtraDamageMultiple": {
                      "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[5]]}"
                      ]
                    }
                  },
                  "success": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"34096710\">Monster_W5_Ripper_FleshEffect</a>",
                      "valuePerStack": {
                        "MDF_FleshElationPoint": {
                          "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                          "displayLines": "{[Skill06[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[3]]}"
                          ]
                        },
                        "MDF_FleshExtraChance": {
                          "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                          "displayLines": "{[Skill06[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[4]]}"
                          ]
                        },
                        "MDF_FleshExtraElationPoint": {
                          "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                          "displayLines": "{[Skill06[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[5]]}"
                          ]
                        },
                        "MDF_AttackEnemyChance": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        },
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[1]]}"
                          ]
                        },
                        "MDF_MaxDamageRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[2]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[2]]}"
                          ]
                        },
                        "MDF_MinDamageRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[3]]}"
                          ]
                        },
                        "MDF_ExtraDamageMultiple": {
                          "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[4]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[4]]}"
                          ]
                        },
                        "MDF_EnemyExtraDamageMultiple": {
                          "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[5]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1788107220\">Monster_W5_Ripper_Ability06_SpecialFlesh</a>",
                      "duration": {
                        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                        "displayLines": "{[Skill06[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[1]]}"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MainCount",
              "value": 4
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}