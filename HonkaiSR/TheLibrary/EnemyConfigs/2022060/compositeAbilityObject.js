const compositeAbilityObject = {
  "fullCharacterName": 2022060,
  "trimCharacterName": 2022060,
  "abilityList": [
    "2022060_Monster_W2_Abomi03_Ability01_Part02",
    "2022060_Monster_W2_Abomi03_Ability01_Part01",
    "2022060_Modifiers"
  ],
  "abilityObject": {
    "2022060_Monster_W2_Abomi03_Ability01_Part02": {
      "fileName": "2022060_Monster_W2_Abomi03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
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
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Abomi03_HitTarget",
              "counter": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Abomi03_HitTarget"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Monster_W2_Abomi03_HitTarget",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "RevertFlag",
                  "value": {
                    "operator": "Variables[0] (RevertFlag) || INVERT || RETURN",
                    "displayLines": "-RevertFlag",
                    "constants": [],
                    "variables": [
                      "RevertFlag"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "RevertFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Abomi03_HitTarget",
              "counter": 2
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Abomi03_HitTarget"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Monster_W2_Abomi03_HitTarget",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "RevertFlag",
                  "value": {
                    "operator": "Variables[0] (RevertFlag) || INVERT || RETURN",
                    "displayLines": "-RevertFlag",
                    "constants": [],
                    "variables": [
                      "RevertFlag"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "RevertFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Abomi03_HitTarget",
              "counter": 3
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Abomi03_HitTarget"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Monster_W2_Abomi03_HitTarget",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "RevertFlag",
                  "value": {
                    "operator": "Variables[0] (RevertFlag) || INVERT || RETURN",
                    "displayLines": "-RevertFlag",
                    "constants": [],
                    "variables": [
                      "RevertFlag"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "RevertFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Abomi03_HitTarget",
              "counter": 4
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Abomi03_HitTarget"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Monster_W2_Abomi03_HitTarget",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "RevertFlag",
                  "value": {
                    "operator": "Variables[0] (RevertFlag) || INVERT || RETURN",
                    "displayLines": "-RevertFlag",
                    "constants": [],
                    "variables": [
                      "RevertFlag"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "RevertFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Abomi03_HitTarget",
              "counter": 5
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Abomi03_HitTarget"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Monster_W2_Abomi03_HitTarget",
                    "compareType": "=",
                    "value2": 5
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "RevertFlag",
                  "value": {
                    "operator": "Variables[0] (RevertFlag) || INVERT || RETURN",
                    "displayLines": "-RevertFlag",
                    "constants": [],
                    "variables": [
                      "RevertFlag"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "RevertFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Thunder",
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
                            "EnergyGainPercent": "20%"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Thunder",
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
                            "EnergyGainPercent": "20%"
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
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
                        "EnergyGainPercent": "20%"
                      }
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
          "functionName": "Monster_W2_Abomi03_BulletHitEffect_BigShake",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
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
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Monster_W2_Abomi03_BulletHitEffect_SmallShake",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
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
                "EnergyGainPercent": "20%"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "2022060_Monster_W2_Abomi03_Ability01_Part01": {
      "fileName": "2022060_Monster_W2_Abomi03_Ability01_Part01",
      "childAbilityList": [
        "2022060_Monster_W2_Abomi03_Ability01_Camera",
        "2022060_Monster_W2_Abomi03_Ability01_Part01",
        "2022060_Monster_W2_Abomi03_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022060_Modifiers": {
      "fileName": "2022060_Modifiers",
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
          "for": "Monster_W2_Abomi03_HitTarget",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W2_Abomi03_HitTarget"
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