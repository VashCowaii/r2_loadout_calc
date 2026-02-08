const configAbility = {
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
          "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1176239641\">Monster_W2_Abomi03_HitTarget</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__883350424\">Monster_W2_Abomi03_BulletHitEffect_BigShake</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2024740573\">Monster_W2_Abomi03_BulletHitEffect_SmallShake</a>",
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
}