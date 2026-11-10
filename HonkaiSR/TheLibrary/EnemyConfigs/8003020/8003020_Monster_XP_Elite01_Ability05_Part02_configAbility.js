const configAbility = {
  "fileName": "8003020_Monster_XP_Elite01_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Set Target Parameter",
      "variableName": "ProjectileFirstTarget",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "paramTarget": {
        "name": "Target Name",
        "target": "{{Enemies by Taunt OR Random Aggro}}"
      }
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
                          "displayLines": "{[Skill05[0]]}"
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
                        "displayLines": "{[Skill05[2]]}"
                      },
                      "baseChance": {
                        "displayLines": "{[Skill05[1]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "displayLines": "{[Skill05[3]]}"
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
                          "displayLines": "{[Skill05[0]]}"
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
                        "displayLines": "{[Skill05[2]]}"
                      },
                      "baseChance": {
                        "displayLines": "{[Skill05[1]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "displayLines": "{[Skill05[3]]}"
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
                          "displayLines": "{[Skill05[0]]}"
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
                        "displayLines": "{[Skill05[2]]}"
                      },
                      "baseChance": {
                        "displayLines": "{[Skill05[1]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "displayLines": "{[Skill05[3]]}"
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
                          "displayLines": "{[Skill05[0]]}"
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
                        "displayLines": "{[Skill05[2]]}"
                      },
                      "baseChance": {
                        "displayLines": "{[Skill05[1]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "displayLines": "{[Skill05[3]]}"
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
                          "displayLines": "{[Skill05[0]]}"
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
                        "displayLines": "{[Skill05[2]]}"
                      },
                      "baseChance": {
                        "displayLines": "{[Skill05[1]]}"
                      },
                      "valuePerStack": {
                        "MDF_DamagePercentage_Layer": {
                          "displayLines": "{[Skill05[3]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}