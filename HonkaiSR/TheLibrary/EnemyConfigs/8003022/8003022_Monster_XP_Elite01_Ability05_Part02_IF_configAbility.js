const configAbility = {
  "fileName": "8003022_Monster_XP_Elite01_Ability05_Part02_IF",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Set Target Parameter",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "paramTarget": {
        "name": "Target Name",
        "target": "{{Enemies by Aggro OR Random}}"
      },
      "variableName": "ProjectileFirstTarget"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "isParallel": true,
      "sequenceList": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                        "displayLines": "{[Skill05[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[2]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                          "displayLines": "{[Skill05[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                        "displayLines": "{[Skill05[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[2]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                          "displayLines": "{[Skill05[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                        "displayLines": "{[Skill05[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[2]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                          "displayLines": "{[Skill05[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                        "displayLines": "{[Skill05[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[2]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                          "displayLines": "{[Skill05[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                          "displayLines": "{[Skill05[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                        "displayLines": "{[Skill05[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[2]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                          "displayLines": "{[Skill05[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill05[3]]}"
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
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}